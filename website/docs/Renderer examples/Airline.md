>This Data Product definition description was done using the <a href="https://sap.github.io/csn-interop-specification/spec-v1/csn-interop-effective" target="_blank">Core Schema Notation Interoperability (short: CSN Interop)</a> format.

# Airline (Example)

This CSN example document shows how the airline example is expressed with a CDS **Service** exposing the entities through an API.

## Entity Definitions

### AirlineService.Airline

Entity exposed via:
[AirlineService](#airlineservice)

<p>Human readable description of the entity AirlineService.Airline, in <strong>markdown</strong>.</p>

abstract: <code>false</code><br />@EntityRelationship.entityType: <code>"sap.vdm.sont:AirlineService.Airline"</code><br />@EndUserText.label: <code>"Airline"</code><br />@ObjectModel.modelingPattern: <code>&lbrace;"#":"ANALYTICAL_DIMENSION"&rbrace;</code>

Elements: 

<table>
<tr><th>Element</th><th>Type</th><th>Description</th></tr><tr><td><strong id="airlineserviceairline-airlineid">AirlineID</strong><br /><br /></td><td><a href="#airlineuuid">AirlineUuid</a></td><td><p>Add human readable documentation text in <strong>markdown</strong> here, database storage ID.</p>
<br />key: <code>true</code><br />default: <code>&lbrace;"val":3&rbrace;</code><br />@EndUserText.label: <code>"Airline"</code><br />@ObjectModel.text.element: <code>["Name"]</code></td></tr>
<tr><td><strong id="airlineserviceairline-name">Name</strong><br /><br /></td><td>cds.String(40)</td><td><p>The name of the <strong>airline</strong>.</p>
<br />@EndUserText.label: <code>"Name"</code><br />@Semantics.text: <code>true</code></td></tr>
<tr><td><strong id="airlineserviceairline-currencycode_code">CurrencyCode_code</strong><br /><br /></td><td>cds.String(33)</td><td><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <code>sed diam</code> nonumy <br/> eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
<br />@EndUserText.label: <code>"Currency Code"</code><br />@Semantics.currencyCode: <code>true</code></td></tr>
</table>

### AirlineService.Airport

Entity exposed via:
[AirlineService](#airlineservice)

@EndUserText.label: <code>"Airport"</code><br />@ObjectModel.modelingPattern: <code>&lbrace;"#":"ANALYTICAL_DIMENSION"&rbrace;</code>

Elements: 

<table>
<tr><th>Element</th><th>Type</th><th>Description</th></tr><tr><td><strong id="airlineserviceairport-airportid">AirportID</strong><br /><br /></td><td>cds.String(3)</td><td>key: <code>true</code><br />@EndUserText.label: <code>"Airport"</code><br />@ObjectModel.text.element: <code>["Name"]</code></td></tr>
<tr><td><strong id="airlineserviceairport-name">Name</strong><br /><br /></td><td>cds.String(40)</td><td>@EndUserText.label: <code>"Name"</code><br />@Semantics.text: <code>true</code></td></tr>
<tr><td><strong id="airlineserviceairport-city">City</strong><br /><br /></td><td>cds.String(40)</td><td>@EndUserText.label: <code>"City"</code></td></tr>
<tr><td><strong id="airlineserviceairport-countrycode_code">CountryCode_code</strong><br /><br /></td><td>cds.String(3)</td><td>@EndUserText.label: <code>"Country Code"</code><br />@ObjectModel.foreignKey.association: <code>&lbrace;"=":"to_CountryCode"&rbrace;</code></td></tr>
<tr><td><strong id="airlineserviceairport-countrynumber_number">CountryNumber_number</strong><br /><br /></td><td>cds.Integer</td><td>@EndUserText.label: <code>"Country Number"</code><br />@ObjectModel.foreignKey.association: <code>&lbrace;"=":"to_CountryNumber"&rbrace;</code></td></tr>
<tr><td><strong id="airlineserviceairport-to_countrycode">to_CountryCode</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#airlineservicecountries">AirlineService.Countries</a> (path: <a href="#airlineservicecountries">AirlineService.Countries</a>.<a href="#airlineservicecountries-code">code</a>) via <a href="#airlineserviceairport-countrycode_code">CountryCode_code</a></td></tr>
<tr><td><strong id="airlineserviceairport-to_countrynumber">to_CountryNumber</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#airlineservicecountries">AirlineService.Countries</a> (path: <a href="#airlineservicecountries">AirlineService.Countries</a>.<a href="#airlineservicecountries-number">number</a>) via <a href="#airlineserviceairport-countrynumber_number">CountryNumber_number</a></td></tr>
</table>

### AirlineService.Countries

Entity exposed via:
[AirlineService](#airlineservice)

@EndUserText.label: <code>"Countries"</code><br />@ObjectModel.modelingPattern: <code>&lbrace;"#":"ANALYTICAL_DIMENSION"&rbrace;</code>

Elements: 

<table>
<tr><th>Element</th><th>Type</th><th>Description</th></tr><tr><td><strong id="airlineservicecountries-code">code</strong><br /><br /></td><td>cds.String(3)</td><td>key: <code>true</code><br />@EndUserText.label: <code>"Country Code"</code><br />@ObjectModel.text.association: <code>&lbrace;"=":"texts"&rbrace;</code></td></tr>
<tr><td><strong id="airlineservicecountries-number">number</strong><br /><br /></td><td>cds.Integer</td><td>key: <code>true</code><br />@EndUserText.label: <code>"Country Number"</code></td></tr>
<tr><td><strong id="airlineservicecountries-texts">texts</strong><br /><br /></td><td>cds.Composition</td><td></td></tr>
</table>

### AirlineService.Countries_texts

Entity exposed via:
[AirlineService](#airlineservice)

@EndUserText.label: <code>"Countries Texts"</code><br />@ObjectModel.modelingPattern: <code>&lbrace;"#":"LANGUAGE_DEPENDENT_TEXT"&rbrace;</code>

Elements: 

<table>
<tr><th>Element</th><th>Type</th><th>Description</th></tr><tr><td><strong id="airlineservicecountries_texts-code">code</strong><br /><br /></td><td>cds.String(3)</td><td>key: <code>true</code><br />@EndUserText.label: <code>"Country Code"</code></td></tr>
<tr><td><strong id="airlineservicecountries_texts-locale">locale</strong><br /><br /></td><td>cds.String(14)</td><td>key: <code>true</code><br />@EndUserText.label: <code>"Language Code"</code><br />@Semantics.language: <code>true</code></td></tr>
<tr><td><strong id="airlineservicecountries_texts-name">name</strong><br /><br /></td><td>cds.String(255)</td><td>@EndUserText.label: <code>"Name"</code><br />@Semantics.text: <code>true</code></td></tr>
<tr><td><strong id="airlineservicecountries_texts-descr">descr</strong><br /><br /></td><td>cds.String(1000)</td><td>@EndUserText.label: <code>"Description"</code><br />@Semantics.text: <code>true</code></td></tr>
</table>

### AirlineService.FlightConnection

Entity exposed via:
[AirlineService](#airlineservice)

@EndUserText.label: <code>"Flight Connection"</code><br />@ObjectModel.representativeKey: <code>&lbrace;"=":"ConnectionID"&rbrace;</code><br />@ObjectModel.modelingPattern: <code>&lbrace;"#":"ANALYTICAL_DIMENSION"&rbrace;</code>

Elements: 

<table>
<tr><th>Element</th><th>Type</th><th>Description</th></tr><tr><td><strong id="airlineserviceflightconnection-airlineid">AirlineID</strong><br /><br /></td><td>cds.String(3)</td><td>key: <code>true</code><br />@EndUserText.label: <code>"Airline"</code><br />@ObjectModel.foreignKey.association: <code>&lbrace;"=":"to_Airline"&rbrace;</code></td></tr>
<tr><td><strong id="airlineserviceflightconnection-connectionid">ConnectionID</strong><br /><br /></td><td>cds.String(4)</td><td>key: <code>true</code><br />@EndUserText.label: <code>"Flight Number"</code></td></tr>
<tr><td><strong id="airlineserviceflightconnection-departureairport_airportid">DepartureAirport_AirportID</strong><br /><br /></td><td>cds.String(3)</td><td>@EndUserText.label: <code>"Departure Airport"</code><br />@ObjectModel.foreignKey.association: <code>&lbrace;"=":"to_DepartureAirport"&rbrace;</code></td></tr>
<tr><td><strong id="airlineserviceflightconnection-destinationairport_airportid">DestinationAirport_AirportID</strong><br /><br /></td><td>cds.String(3)</td><td>@EndUserText.label: <code>"Destination Airport"</code><br />@ObjectModel.foreignKey.association: <code>&lbrace;"=":"to_DestinationAirport"&rbrace;</code></td></tr>
<tr><td><strong id="airlineserviceflightconnection-departuretime">DepartureTime</strong><br /><br /></td><td>cds.Time</td><td>@EndUserText.label: <code>"Departure Time"</code></td></tr>
<tr><td><strong id="airlineserviceflightconnection-arrivaltime">ArrivalTime</strong><br /><br /></td><td>cds.Time</td><td>@EndUserText.label: <code>"Arrival Time"</code></td></tr>
<tr><td><strong id="airlineserviceflightconnection-distance">Distance</strong><br /><br /></td><td>cds.Integer</td><td>@EndUserText.label: <code>"Distance"</code><br />@Semantics.quantity.unitOfMeasure: <code>&lbrace;"=":"DistanceUnit"&rbrace;</code></td></tr>
<tr><td><strong id="airlineserviceflightconnection-distanceunit">DistanceUnit</strong><br /><br /></td><td>cds.String(3)</td><td>@EndUserText.label: <code>"Distance Unit"</code></td></tr>
<tr><td><strong id="airlineserviceflightconnection-to_airline">to_Airline</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#airlineserviceairline">AirlineService.Airline</a> (path: <a href="#airlineserviceairline">AirlineService.Airline</a>.<a href="#airlineserviceairline-airlineid">AirlineID</a>) via <a href="#airlineserviceflightconnection-airlineid">AirlineID</a></td></tr>
<tr><td><strong id="airlineserviceflightconnection-to_departureairport">to_DepartureAirport</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#airlineserviceairport">AirlineService.Airport</a> (path: <a href="#airlineserviceairport">AirlineService.Airport</a>.<a href="#airlineserviceairport-airportid">AirportID</a>) via <a href="#airlineserviceflightconnection-departureairport_airportid">DepartureAirport_AirportID</a></td></tr>
<tr><td><strong id="airlineserviceflightconnection-to_destinationairport">to_DestinationAirport</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#airlineserviceairport">AirlineService.Airport</a> (path: <a href="#airlineserviceairport">AirlineService.Airport</a>.<a href="#airlineserviceairport-airportid">AirportID</a>) via <a href="#airlineserviceflightconnection-destinationairport_airportid">DestinationAirport_AirportID</a></td></tr>
</table>

### AirlineService.Flight

Entity exposed via:
[AirlineService](#airlineservice)

@EndUserText.label: <code>"Flight"</code><br />@ObjectModel.modelingPattern: <code>&lbrace;"#":"ANALYTICAL_FACT"&rbrace;</code><br />@ObjectModel.supportedCapabilities: <code>[&lbrace;"#":"DATA_STRUCTURE"&rbrace;]</code>

Elements: 

<table>
<tr><th>Element</th><th>Type</th><th>Description</th></tr><tr><td><strong id="airlineserviceflight-airlineid">AirlineID</strong><br /><br /></td><td>cds.String(3)</td><td>key: <code>true</code><br />@EndUserText.label: <code>"Airline"</code><br />@ObjectModel.foreignKey.association: <code>&lbrace;"=":"to_Airline"&rbrace;</code></td></tr>
<tr><td><strong id="airlineserviceflight-flightdate">FlightDate</strong><br /><br /></td><td>cds.Date</td><td>key: <code>true</code><br />@EndUserText.label: <code>"Flight Date"</code></td></tr>
<tr><td><strong id="airlineserviceflight-connectionid">ConnectionID</strong><br /><br /></td><td>cds.String(4)</td><td>key: <code>true</code><br />@EndUserText.label: <code>"Flight Number"</code><br />@ObjectModel.foreignKey.association: <code>&lbrace;"=":"to_Connection"&rbrace;</code></td></tr>
<tr><td><strong id="airlineserviceflight-price">Price</strong><br /><br /></td><td>cds.Decimal</td><td>precision: <code>16</code><br />scale: <code>3</code><br />@EndUserText.label: <code>"Price"</code><br />@Aggregation.default: <code>&lbrace;"#":"MIN"&rbrace;</code><br />@Semantics.amount.currencyCode: <code>&lbrace;"=":"CurrencyCode_code"&rbrace;</code></td></tr>
<tr><td><strong id="airlineserviceflight-currencycode_code">CurrencyCode_code</strong><br /><br /></td><td>cds.String(3)</td><td>@EndUserText.label: <code>"Currency Code"</code><br />@Semantics.currencyCode: <code>true</code></td></tr>
<tr><td><strong id="airlineserviceflight-planetype">PlaneType</strong><br /><br /></td><td>cds.String(10)</td><td>@EndUserText.label: <code>"Plane Type"</code></td></tr>
<tr><td><strong id="airlineserviceflight-maximumseats">MaximumSeats</strong><br /><br /></td><td>cds.Integer</td><td>@EndUserText.label: <code>"Maximum Seats"</code><br />@Aggregation.default: <code>&lbrace;"#":"SUM"&rbrace;</code></td></tr>
<tr><td><strong id="airlineserviceflight-occupiedseats">OccupiedSeats</strong><br /><br /></td><td>cds.Integer</td><td>@EndUserText.label: <code>"Occupied Seats"</code><br />@Aggregation.default: <code>&lbrace;"#":"SUM"&rbrace;</code></td></tr>
<tr><td><strong id="airlineserviceflight-to_airline">to_Airline</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#airlineserviceairline">AirlineService.Airline</a> (path: <a href="#airlineserviceairline">AirlineService.Airline</a>.<a href="#airlineserviceairline-airlineid">AirlineID</a>) via <a href="#airlineserviceflight-airlineid">AirlineID</a></td></tr>
<tr><td><strong id="airlineserviceflight-to_connection">to_Connection</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#airlineserviceflightconnection">AirlineService.FlightConnection</a> (path: <a href="#airlineserviceflightconnection">AirlineService.FlightConnection</a>.<a href="#airlineserviceflightconnection-airlineid">AirlineID</a>) via <a href="#airlineserviceflight-airlineid">AirlineID</a></td></tr>
</table>

### UnassignedEntity

<p>This entity is not prefixed with the service name and therefore not accessible through the service.</p>



Elements: 

<table>
<tr><th>Element</th><th>Type</th><th>Description</th></tr><tr><td><strong id="unassignedentity-someelement">SomeElement</strong><br /><br /></td><td>cds.String</td><td>key: <code>true</code><br /></td></tr>
</table>

## Type Definitions

### AirlineUuid

<p>Description of the reuse type</p>

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.label: <code>"Airline"</code><br />@ObjectModel.text.element: <code>["Name"]</code></td></tr>
</table>

## Services

### AirlineService

<p>This is describing the service that exposes the CDS entities through an API.</p>

Exposed Entities:

  - [AirlineService.Airline](#airlineserviceairline)
  - [AirlineService.Airport](#airlineserviceairport)
  - [AirlineService.Countries](#airlineservicecountries)
  - [AirlineService.Countries_texts](#airlineservicecountries_texts)
  - [AirlineService.FlightConnection](#airlineserviceflightconnection)
  - [AirlineService.Flight](#airlineserviceflight)

