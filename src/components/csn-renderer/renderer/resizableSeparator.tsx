import { type KeyboardEvent, type PointerEvent, type ReactNode, useCallback } from "react";

interface ResizableSeparatorProps {
  className: string;
  label: string;
  value: number;
  min: number;
  max: number;
  onPointerPositionChange: (clientX: number) => void;
  onValueChange: (value: number) => void;
}

export default function ResizableSeparator({
  className,
  label,
  value,
  min,
  max,
  onPointerPositionChange,
  onValueChange,
}: ResizableSeparatorProps): ReactNode {
  const onPointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>): void => {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      onPointerPositionChange(event.clientX);
    },
    [onPointerPositionChange],
  );

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>): void => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        onPointerPositionChange(event.clientX);
      }
    },
    [onPointerPositionChange],
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>): void => {
      if (event.key === "Home") {
        event.preventDefault();
        onValueChange(min);
        return;
      }
      if (event.key === "End") {
        event.preventDefault();
        onValueChange(max);
        return;
      }
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

      event.preventDefault();
      onValueChange(Math.min(Math.max(value + (event.key === "ArrowLeft" ? -2 : 2), min), max));
    },
    [max, min, onValueChange, value],
  );

  return (
    <div
      className={className}
      role="separator"
      aria-label={label}
      aria-orientation="vertical"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onKeyDown={onKeyDown}
    />
  );
}
