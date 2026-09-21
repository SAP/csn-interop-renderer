import airline from "../../../../../examples/Airline.json";
import billingDocument from "../../../../../examples/BillingDocument.json";
import businessPartner from "../../../../../examples/BusinessPartner.json";
import costCenter from "../../../../../examples/CostCenter.json";
import costCenterCombined from "../../../../../examples/CostCenterCombined.json";
import generalLedgerAccountLineItem from "../../../../../examples/GeneralLedgerAccountLineItem.json";

export interface ExampleDocument {
  id: string;
  name: string;
  data: object;
}

export const exampleDocuments: readonly ExampleDocument[] = [
  { id: "airline", name: "Airline", data: airline },
  { id: "billing-document", name: "Billing Document", data: billingDocument },
  { id: "business-partner", name: "Business Partner", data: businessPartner },
  { id: "cost-center", name: "Cost Center", data: costCenter },
  { id: "cost-center-combined", name: "Cost Center Combined", data: costCenterCombined },
  {
    id: "general-ledger-account-line-item",
    name: "General Ledger Account Line Item",
    data: generalLedgerAccountLineItem,
  },
];
