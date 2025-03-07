# Airline (Example)

This CSN example document shows how the airline example is expressed with a CDS **Service** exposing the entities through an API.

## Entity Definitions

<div id="airlineservice.airline"></div>

### AirlineService.Airline

- **Exposed via**: [AirlineService](#service-airlineservice)

<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="airlineservice.airline-airlineid">AirlineID</strong></td><td><a href="#type-airlineuuid" target="_self">AirlineUuid</a></td><td><strong>Key</strong>: true<br /><strong>@EndUserText.label</strong>: Airline<br /><strong>@ObjectModel.text.element</strong>: <code>[
  "Name"
]</code></td></tr>
<tr><td><strong id="airlineservice.airline-name">Name</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Name<br /><strong>@Semantics.text</strong>: true</td></tr>
<tr><td><strong id="airlineservice.airline-currencycode_code">CurrencyCode_code</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Currency Code<br /><strong>@Semantics.currencyCode</strong>: true</td></tr>
</table>

<div id="airlineservice.airport"></div>

### AirlineService.Airport

- **Exposed via**: [AirlineService](#service-airlineservice)

<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="airlineservice.airport-airportid">AirportID</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Airport<br /><strong>@ObjectModel.text.element</strong>: <code>[
  "Name"
]</code></td></tr>
<tr><td><strong id="airlineservice.airport-name">Name</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Name<br /><strong>@Semantics.text</strong>: true</td></tr>
<tr><td><strong id="airlineservice.airport-city">City</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: City</td></tr>
<tr><td><strong id="airlineservice.airport-countrycode_code">CountryCode_code</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Country Code<br /><strong>@ObjectModel.foreignKey.association</strong>: <code>&lbrace;
  "=": "to_CountryCode"
&rbrace;</code></td></tr>
<tr><td><strong id="airlineservice.airport-to_countrycode">to_CountryCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#airlineservice.countries" target="_self">AirlineService.Countries</a> (Path: <a href="#airlineservice.countries" target="_self">AirlineService.Countries</a>.<a href="#airlineservice.countries-code" target="_self">code</a>) via <a href="#airlineservice.airport-countrycode_code" target="_self">CountryCode_code</a></td></tr>
</table>

<div id="airlineservice.countries"></div>

### AirlineService.Countries

- **Exposed via**: [AirlineService](#service-airlineservice)

<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="airlineservice.countries-code">code</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Country Code<br /><strong>@ObjectModel.text.association</strong>: <code>&lbrace;
  "=": "texts"
&rbrace;</code></td></tr>
<tr><td><strong id="airlineservice.countries-texts">texts</strong></td><td>cds.Composition</td><td></td></tr>
</table>

<div id="airlineservice.countries_texts"></div>

### AirlineService.Countries_texts

- **Exposed via**: [AirlineService](#service-airlineservice)

<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="airlineservice.countries_texts-code">code</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Country Code</td></tr>
<tr><td><strong id="airlineservice.countries_texts-locale">locale</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Language Code<br /><strong>@Semantics.language</strong>: true</td></tr>
<tr><td><strong id="airlineservice.countries_texts-name">name</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Name<br /><strong>@Semantics.text</strong>: true</td></tr>
<tr><td><strong id="airlineservice.countries_texts-descr">descr</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Description<br /><strong>@Semantics.text</strong>: true</td></tr>
</table>

<div id="airlineservice.flightconnection"></div>

### AirlineService.FlightConnection

- **Exposed via**: [AirlineService](#service-airlineservice)

<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="airlineservice.flightconnection-airlineid">AirlineID</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Airline<br /><strong>@ObjectModel.foreignKey.association</strong>: <code>&lbrace;
  "=": "to_Airline"
&rbrace;</code></td></tr>
<tr><td><strong id="airlineservice.flightconnection-connectionid">ConnectionID</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Flight Number</td></tr>
<tr><td><strong id="airlineservice.flightconnection-departureairport_airportid">DepartureAirport_AirportID</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Departure Airport<br /><strong>@ObjectModel.foreignKey.association</strong>: <code>&lbrace;
  "=": "to_DepartureAirport"
&rbrace;</code></td></tr>
<tr><td><strong id="airlineservice.flightconnection-destinationairport_airportid">DestinationAirport_AirportID</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Destination Airport<br /><strong>@ObjectModel.foreignKey.association</strong>: <code>&lbrace;
  "=": "to_DestinationAirport"
&rbrace;</code></td></tr>
<tr><td><strong id="airlineservice.flightconnection-departuretime">DepartureTime</strong></td><td>cds.Time</td><td><strong>@EndUserText.label</strong>: Departure Time</td></tr>
<tr><td><strong id="airlineservice.flightconnection-arrivaltime">ArrivalTime</strong></td><td>cds.Time</td><td><strong>@EndUserText.label</strong>: Arrival Time</td></tr>
<tr><td><strong id="airlineservice.flightconnection-distance">Distance</strong></td><td>cds.Integer</td><td><strong>@EndUserText.label</strong>: Distance<br /><strong>@Semantics.quantity.unitOfMeasure</strong>: <code>&lbrace;
  "=": "DistanceUnit"
&rbrace;</code></td></tr>
<tr><td><strong id="airlineservice.flightconnection-distanceunit">DistanceUnit</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Distance Unit</td></tr>
<tr><td><strong id="airlineservice.flightconnection-to_airline">to_Airline</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#airlineservice.airline" target="_self">AirlineService.Airline</a> (Path: <a href="#airlineservice.airline" target="_self">AirlineService.Airline</a>.<a href="#airlineservice.airline-airlineid" target="_self">AirlineID</a>) via <a href="#airlineservice.flightconnection-airlineid" target="_self">AirlineID</a></td></tr>
<tr><td><strong id="airlineservice.flightconnection-to_departureairport">to_DepartureAirport</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#airlineservice.airport" target="_self">AirlineService.Airport</a> (Path: <a href="#airlineservice.airport" target="_self">AirlineService.Airport</a>.<a href="#airlineservice.airport-airportid" target="_self">AirportID</a>) via <a href="#airlineservice.flightconnection-departureairport_airportid" target="_self">DepartureAirport_AirportID</a></td></tr>
<tr><td><strong id="airlineservice.flightconnection-to_destinationairport">to_DestinationAirport</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#airlineservice.airport" target="_self">AirlineService.Airport</a> (Path: <a href="#airlineservice.airport" target="_self">AirlineService.Airport</a>.<a href="#airlineservice.airport-airportid" target="_self">AirportID</a>) via <a href="#airlineservice.flightconnection-destinationairport_airportid" target="_self">DestinationAirport_AirportID</a></td></tr>
</table>

<div id="airlineservice.flight"></div>

### AirlineService.Flight

- **Exposed via**: [AirlineService](#service-airlineservice)

<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="airlineservice.flight-airlineid">AirlineID</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Airline<br /><strong>@ObjectModel.foreignKey.association</strong>: <code>&lbrace;
  "=": "to_Airline"
&rbrace;</code></td></tr>
<tr><td><strong id="airlineservice.flight-flightdate">FlightDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Flight Date</td></tr>
<tr><td><strong id="airlineservice.flight-connectionid">ConnectionID</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Flight Number<br /><strong>@ObjectModel.foreignKey.association</strong>: <code>&lbrace;
  "=": "to_Connection"
&rbrace;</code></td></tr>
<tr><td><strong id="airlineservice.flight-price">Price</strong></td><td>cds.Decimal</td><td><strong>@EndUserText.label</strong>: Price<br /><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "MIN"
&rbrace;</code><br /><strong>@Semantics.amount.currencyCode</strong>: <code>&lbrace;
  "=": "CurrencyCode_code"
&rbrace;</code></td></tr>
<tr><td><strong id="airlineservice.flight-currencycode_code">CurrencyCode_code</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Currency Code<br /><strong>@Semantics.currencyCode</strong>: true</td></tr>
<tr><td><strong id="airlineservice.flight-planetype">PlaneType</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Plane Type</td></tr>
<tr><td><strong id="airlineservice.flight-maximumseats">MaximumSeats</strong></td><td>cds.Integer</td><td><strong>@EndUserText.label</strong>: Maximum Seats<br /><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code></td></tr>
<tr><td><strong id="airlineservice.flight-occupiedseats">OccupiedSeats</strong></td><td>cds.Integer</td><td><strong>@EndUserText.label</strong>: Occupied Seats<br /><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code></td></tr>
<tr><td><strong id="airlineservice.flight-to_airline">to_Airline</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#airlineservice.airline" target="_self">AirlineService.Airline</a> (Path: <a href="#airlineservice.airline" target="_self">AirlineService.Airline</a>.<a href="#airlineservice.airline-airlineid" target="_self">AirlineID</a>) via <a href="#airlineservice.flight-airlineid" target="_self">AirlineID</a></td></tr>
<tr><td><strong id="airlineservice.flight-to_connection">to_Connection</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#airlineservice.flightconnection" target="_self">AirlineService.FlightConnection</a> (Path: <a href="#airlineservice.flightconnection" target="_self">AirlineService.FlightConnection</a>.<a href="#airlineservice.flightconnection-airlineid" target="_self">AirlineID</a>) via <a href="#airlineservice.flight-airlineid" target="_self">AirlineID</a></td></tr>
</table>

<div id="unassignedentity"></div>

### UnassignedEntity

<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="unassignedentity-someelement">SomeElement</strong></td><td>cds.String</td><td></td></tr>
</table>

## Type Definitions

<div id="type-airlineuuid"></div>

### AirlineUuid

<p>Description of the reuse type</p>

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.label</strong>: Airline<br /><strong>@ObjectModel.text.element</strong>: <code>[
  "Name"
]</code></td></tr>
</table>

## Services

<div id="service-airlineservice"></div>

### AirlineService

<p>This is describing the service that exposes the CDS entities through an API.</p>

Exposed Entities:

- [AirlineService.Airline](#airlineservice.airline)
- [AirlineService.Airport](#airlineservice.airport)
- [AirlineService.Countries](#airlineservice.countries)
- [AirlineService.Countries_texts](#airlineservice.countries_texts)
- [AirlineService.FlightConnection](#airlineservice.flightconnection)
- [AirlineService.Flight](#airlineservice.flight)
