## Entity Definitions

<div id="costcenter.costcentertext"></div>

### CostCenter.CostCenterText


<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="costcenter.costcentertext-language">Language</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Language Key<br /><strong>@Semantics.language</strong>: true<br /><strong>@EndUserText.heading</strong>: Language<br /><strong>@EndUserText.quickInfo</strong>: Language Key<br /><strong>@ObjectModel.foreignKey.association</strong>: _Language</td></tr>
<tr><td><strong id="costcenter.costcentertext-costcenter">CostCenter</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Cost Center<br /><strong>@EndUserText.heading</strong>: Cost Ctr<br /><strong>@EndUserText.quickInfo</strong>: Cost Center<br /><strong>@ObjectModel.text.element</strong>: <code>[
  "CostCenterDescription"
]</code></td></tr>
<tr><td><strong id="costcenter.costcentertext-costcentername">CostCenterName</strong></td><td>cds.String</td><td><strong>@Semantics.text</strong>: true<br /><strong>@EndUserText.label</strong>: Cost Center Name<br /><strong>@EndUserText.heading</strong>: Cost Center Name<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Name</td></tr>
<tr><td><strong id="costcenter.costcentertext-controllingarea">ControllingArea</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Controlling Area<br /><strong>@EndUserText.heading</strong>: COAr<br /><strong>@EndUserText.quickInfo</strong>: Controlling Area<br /><strong>@ObjectModel.text.association</strong>: _ControllingAreaText<br /><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_ControllingAreaStdVH",
      "element": "ControllingArea"
    &rbrace;
  &rbrace;
]</code><br /><strong>@ObjectModel.foreignKey.association</strong>: _ControllingArea</td></tr>
<tr><td><strong id="costcenter.costcentertext-validityenddate">ValidityEndDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Valid To<br /><strong>@EndUserText.heading</strong>: to<br /><strong>@EndUserText.quickInfo</strong>: Valid To Date<br /><strong>@Semantics.businessDate.to</strong>: true</td></tr>
<tr><td><strong id="costcenter.costcentertext-validitystartdate">ValidityStartDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Valid From<br /><strong>@EndUserText.heading</strong>: Valid From<br /><strong>@EndUserText.quickInfo</strong>: Valid-From Date<br /><strong>@Semantics.businessDate.from</strong>: true</td></tr>
<tr><td><strong id="costcenter.costcentertext-costcenterdescription">CostCenterDescription</strong></td><td>cds.String</td><td><strong>@Semantics.text</strong>: true<br /><strong>@EndUserText.label</strong>: Cost Center Desc.<br /><strong>@EndUserText.heading</strong>: CoCtr<br /><strong>@EndUserText.quickInfo</strong>: Description of Cost Center</td></tr>
<tr><td><strong id="costcenter.costcentertext-zjf_frankejoeext">ZJF_FrankejoeExt</strong></td><td>cds.String</td><td></td></tr>
</table>

<div id="costcenter.costcenterhierarchynodetext"></div>

### CostCenter.CostCenterHierarchyNodeText


<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="costcenter.costcenterhierarchynodetext-language">Language</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Language Key<br /><strong>@Semantics.language</strong>: true<br /><strong>@EndUserText.heading</strong>: Language<br /><strong>@EndUserText.quickInfo</strong>: Language Key</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynodetext-hierarchynode">HierarchyNode</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Node<br /><strong>@EndUserText.heading</strong>: Hierarchy Node<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy node<br /><strong>@ObjectModel.text.element</strong>: <code>[
  "HierarchyNodeText"
]</code></td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynodetext-controllingarea">ControllingArea</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Controlling Area<br /><strong>@EndUserText.heading</strong>: Controlling Area<br /><strong>@EndUserText.quickInfo</strong>: Controlling Area<br /><strong>@ObjectModel.text.association</strong>: _ControllingAreaText<br /><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_ControllingAreaStdVH",
      "element": "ControllingArea"
    &rbrace;
  &rbrace;
]</code><br /><strong>@ObjectModel.foreignKey.association</strong>: _ControllingArea</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynodetext-validityenddate">ValidityEndDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Valid To<br /><strong>@EndUserText.heading</strong>: to<br /><strong>@EndUserText.quickInfo</strong>: Valid To Date<br /><strong>@Semantics.businessDate.to</strong>: true</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynodetext-hierarchynodetext">HierarchyNodeText</strong></td><td>cds.String</td><td><strong>@Semantics.text</strong>: true<br /><strong>@EndUserText.label</strong>: Description<br /><strong>@EndUserText.heading</strong>: Node Description<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy node description</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynodetext-validitystartdate">ValidityStartDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Valid From<br /><strong>@EndUserText.heading</strong>: Valid From<br /><strong>@EndUserText.quickInfo</strong>: Valid-From Date<br /><strong>@Semantics.businessDate.from</strong>: true</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynodetext-costcenterhierarchy">CostCenterHierarchy</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Cost Center Hierarchy<br /><strong>@EndUserText.heading</strong>: Cost Center Hierarchy<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Hierarchy<br /><strong>@ObjectModel.foreignKey.association</strong>: _Hierarchy</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynodetext-hierarchynodeshorttext">HierarchyNodeShortText</strong></td><td>cds.String</td><td><strong>@Semantics.text</strong>: true</td></tr>
</table>

<div id="costcenter.costcenter"></div>

### CostCenter.CostCenter


<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="costcenter.costcenter-fund">Fund</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Fund<br /><strong>@EndUserText.heading</strong>: Fund<br /><strong>@EndUserText.quickInfo</strong>: Fund</td></tr>
<tr><td><strong id="costcenter.costcenter-pobox">POBox</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: PO Box<br /><strong>@EndUserText.heading</strong>: PO Box<br /><strong>@EndUserText.quickInfo</strong>: PO Box</td></tr>
<tr><td><strong id="costcenter.costcenter-plant">Plant</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Plant<br /><strong>@EndUserText.heading</strong>: Plnt<br /><strong>@EndUserText.quickInfo</strong>: Plant</td></tr>
<tr><td><strong id="costcenter.costcenter-region">Region</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Region<br /><strong>@EndUserText.heading</strong>: Rg<br /><strong>@EndUserText.quickInfo</strong>: Region (State, Province, County)<br /><strong>@ObjectModel.foreignKey.association</strong>: _Region</td></tr>
<tr><td><strong id="costcenter.costcenter-country">Country</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Country/Region Key<br /><strong>@EndUserText.heading</strong>: C/R<br /><strong>@EndUserText.quickInfo</strong>: Country/Region Key<br /><strong>@ObjectModel.foreignKey.association</strong>: _Country</td></tr>
<tr><td><strong id="costcenter.costcenter-grantid">GrantID</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Grant<br /><strong>@EndUserText.heading</strong>: Grant<br /><strong>@EndUserText.quickInfo</strong>: Grant</td></tr>
<tr><td><strong id="costcenter.costcenter-cityname">CityName</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: City<br /><strong>@EndUserText.heading</strong>: City<br /><strong>@EndUserText.quickInfo</strong>: City</td></tr>
<tr><td><strong id="costcenter.costcenter-district">District</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: District<br /><strong>@EndUserText.heading</strong>: District<br /><strong>@EndUserText.quickInfo</strong>: District</td></tr>
<tr><td><strong id="costcenter.costcenter-language">Language</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Language Key<br /><strong>@EndUserText.heading</strong>: Language<br /><strong>@EndUserText.quickInfo</strong>: Language Key<br /><strong>@ObjectModel.foreignKey.association</strong>: _Language</td></tr>
<tr><td><strong id="costcenter.costcenter-faxnumber">FaxNumber</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Fax Number<br /><strong>@EndUserText.heading</strong>: Fax Number<br /><strong>@EndUserText.quickInfo</strong>: Fax Number</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenter">CostCenter</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Cost Center<br /><strong>@EndUserText.heading</strong>: Cost Ctr<br /><strong>@EndUserText.quickInfo</strong>: Cost Center<br /><strong>@ObjectModel.text.association</strong>: _Text</td></tr>
<tr><td><strong id="costcenter.costcenter-department">Department</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Department<br /><strong>@EndUserText.heading</strong>: Department<br /><strong>@EndUserText.quickInfo</strong>: Department</td></tr>
<tr><td><strong id="costcenter.costcenter-postalcode">PostalCode</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Postal Code<br /><strong>@EndUserText.heading</strong>: PostalCode<br /><strong>@EndUserText.quickInfo</strong>: Postal Code</td></tr>
<tr><td><strong id="costcenter.costcenter-addressname">AddressName</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Name<br /><strong>@EndUserText.heading</strong>: Name<br /><strong>@EndUserText.quickInfo</strong>: Name</td></tr>
<tr><td><strong id="costcenter.costcenter-companycode">CompanyCode</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Company Code<br /><strong>@EndUserText.heading</strong>: CoCd<br /><strong>@EndUserText.quickInfo</strong>: Company Code<br /><strong>@ObjectModel.foreignKey.association</strong>: _CompanyCode</td></tr>
<tr><td><strong id="costcenter.costcenter-telexnumber">TelexNumber</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Telex Number<br /><strong>@EndUserText.heading</strong>: Telex Number<br /><strong>@EndUserText.quickInfo</strong>: Telex Number</td></tr>
<tr><td><strong id="costcenter.costcenter-businessarea">BusinessArea</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Business Area<br /><strong>@EndUserText.heading</strong>: BusA<br /><strong>@EndUserText.quickInfo</strong>: Business Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _BusinessArea</td></tr>
<tr><td><strong id="costcenter.costcenter-costingsheet">CostingSheet</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Costing Sheet<br /><strong>@EndUserText.heading</strong>: CostSh<br /><strong>@EndUserText.quickInfo</strong>: Costing Sheet<br /><strong>@ObjectModel.foreignKey.association</strong>: _CostingSheetProcedure</td></tr>
<tr><td><strong id="costcenter.costcenter-jointventure">JointVenture</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Joint Venture<br /><strong>@EndUserText.heading</strong>: JV<br /><strong>@EndUserText.quickInfo</strong>: Joint Venture</td></tr>
<tr><td><strong id="costcenter.costcenter-phonenumber1">PhoneNumber1</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Telephone 1<br /><strong>@EndUserText.heading</strong>: Telephone 1<br /><strong>@EndUserText.quickInfo</strong>: First telephone number</td></tr>
<tr><td><strong id="costcenter.costcenter-phonenumber2">PhoneNumber2</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Telephone 2<br /><strong>@EndUserText.heading</strong>: Telephone 2<br /><strong>@EndUserText.quickInfo</strong>: Second telephone number</td></tr>
<tr><td><strong id="costcenter.costcenter-profitcenter">ProfitCenter</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Profit Center<br /><strong>@EndUserText.heading</strong>: Profit Ctr<br /><strong>@EndUserText.quickInfo</strong>: Profit Center<br /><strong>@ObjectModel.foreignKey.association</strong>: _ProfitCenter</td></tr>
<tr><td><strong id="costcenter.costcenter-costcollector">CostCollector</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Cost Collector Key<br /><strong>@EndUserText.heading</strong>: Cost Collector Key<br /><strong>@EndUserText.quickInfo</strong>: Cost Collector Key</td></tr>
<tr><td><strong id="costcenter.costcenter-formofaddress">FormOfAddress</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Title<br /><strong>@EndUserText.heading</strong>: Title<br /><strong>@EndUserText.quickInfo</strong>: Title</td></tr>
<tr><td><strong id="costcenter.costcenter-logicalsystem">LogicalSystem</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Logical System<br /><strong>@EndUserText.heading</strong>: Log.System<br /><strong>@EndUserText.quickInfo</strong>: Logical System</td></tr>
<tr><td><strong id="costcenter.costcenter-teleboxnumber">TeleboxNumber</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Telebox Number<br /><strong>@EndUserText.heading</strong>: Telebox<br /><strong>@EndUserText.quickInfo</strong>: Telebox Number</td></tr>
<tr><td><strong id="costcenter.costcenter-teletexnumber">TeletexNumber</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Teletex Number<br /><strong>@EndUserText.heading</strong>: Teletex Number<br /><strong>@EndUserText.quickInfo</strong>: Teletex Number</td></tr>
<tr><td><strong id="costcenter.costcenter-conditionusage">ConditionUsage</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Usage<br /><strong>@EndUserText.heading</strong>: U<br /><strong>@EndUserText.quickInfo</strong>: Usage of the condition table</td></tr>
<tr><td><strong id="costcenter.costcenter-functionalarea">FunctionalArea</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Functional Area<br /><strong>@EndUserText.heading</strong>: Functional Area<br /><strong>@EndUserText.quickInfo</strong>: Functional Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _FunctionalArea</td></tr>
<tr><td><strong id="costcenter.costcenter-controllingarea">ControllingArea</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Controlling Area<br /><strong>@EndUserText.heading</strong>: COAr<br /><strong>@EndUserText.quickInfo</strong>: Controlling Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _ControllingArea</td></tr>
<tr><td><strong id="costcenter.costcenter-poboxpostalcode">POBoxPostalCode</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: P.O. Box Postal Code<br /><strong>@EndUserText.heading</strong>: PO Box pcd<br /><strong>@EndUserText.quickInfo</strong>: P.O. Box Postal Code</td></tr>
<tr><td><strong id="costcenter.costcenter-taxjurisdiction">TaxJurisdiction</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Tax Jurisdiction<br /><strong>@EndUserText.heading</strong>: Tax Jur.<br /><strong>@EndUserText.quickInfo</strong>: Tax Jurisdiction</td></tr>
<tr><td><strong id="costcenter.costcenter-validityenddate">ValidityEndDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Valid To<br /><strong>@EndUserText.heading</strong>: to<br /><strong>@EndUserText.quickInfo</strong>: Valid To Date<br /><strong>@Semantics.businessDate.to</strong>: true</td></tr>
<tr><td><strong id="costcenter.costcenter-objectinternalid">ObjectInternalID</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Object Number<br /><strong>@EndUserText.heading</strong>: Object Number<br /><strong>@EndUserText.quickInfo</strong>: Object Number</td></tr>
<tr><td><strong id="costcenter.costcenter-fundisfixassigned">FundIsFixAssigned</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Fund Fixed Assignment<br /><strong>@EndUserText.heading</strong>: Fund Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Fund with Fixed Assignment</td></tr>
<tr><td><strong id="costcenter.costcenter-jointventureclass">JointVentureClass</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: JIB/JIBE Class<br /><strong>@EndUserText.heading</strong>: Class<br /><strong>@EndUserText.quickInfo</strong>: JIB/JIBE Class</td></tr>
<tr><td><strong id="costcenter.costcenter-streetaddressname">StreetAddressName</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Street<br /><strong>@EndUserText.heading</strong>: Street<br /><strong>@EndUserText.quickInfo</strong>: Street and House Number</td></tr>
<tr><td><strong id="costcenter.costcenter-validitystartdate">ValidityStartDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Valid From<br /><strong>@EndUserText.heading</strong>: Valid From<br /><strong>@EndUserText.quickInfo</strong>: Valid-From Date<br /><strong>@Semantics.businessDate.from</strong>: true</td></tr>
<tr><td><strong id="costcenter.costcenter-costcentercategory">CostCenterCategory</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Cost Center Category<br /><strong>@EndUserText.heading</strong>: CCtC<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Category<br /><strong>@ObjectModel.foreignKey.association</strong>: _CostCenterCategory</td></tr>
<tr><td><strong id="costcenter.costcenter-costcentercurrency">CostCenterCurrency</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Currency<br /><strong>@EndUserText.heading</strong>: Crcy<br /><strong>@EndUserText.quickInfo</strong>: Currency Key<br /><strong>@Semantics.currencyCode</strong>: true<br /><strong>@ObjectModel.foreignKey.association</strong>: _Currency</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenterfunction">CostCenterFunction</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Function<br /><strong>@EndUserText.heading</strong>: Fct<br /><strong>@EndUserText.quickInfo</strong>: Function of Cost Center</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenteraddrname3">CostCenterAddrName3</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Name 3<br /><strong>@EndUserText.heading</strong>: Name 3<br /><strong>@EndUserText.quickInfo</strong>: Name 3</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenteraddrname4">CostCenterAddrName4</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Name 4<br /><strong>@EndUserText.heading</strong>: Name 4<br /><strong>@EndUserText.quickInfo</strong>: Name 4</td></tr>
<tr><td><strong id="costcenter.costcenter-conditionapplication">ConditionApplication</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Application<br /><strong>@EndUserText.heading</strong>: App<br /><strong>@EndUserText.quickInfo</strong>: Application</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenteriscomplete">CostCenterIsComplete</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Complete<br /><strong>@EndUserText.heading</strong>: Complete<br /><strong>@EndUserText.quickInfo</strong>: Completion Flag for the Cost Center Master Record</td></tr>
<tr><td><strong id="costcenter.costcenter-grantidisfixassigned">GrantIDIsFixAssigned</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Grant Fixed Assignment<br /><strong>@EndUserText.heading</strong>: Grant Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Grant with Fixed Assignment</td></tr>
<tr><td><strong id="costcenter.costcenter-jointventuresubclass">JointVentureSubClass</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: JIB/JIBE Subclass A<br /><strong>@EndUserText.heading</strong>: SCl A<br /><strong>@EndUserText.quickInfo</strong>: JIB/JIBE Subclass A</td></tr>
<tr><td><strong id="costcenter.costcenter-subsequentcostcenter">SubsequentCostCenter</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Subsequent Cost Ctr.<br /><strong>@EndUserText.heading</strong>: SCtr<br /><strong>@EndUserText.quickInfo</strong>: Subsequent Cost Center</td></tr>
<tr><td><strong id="costcenter.costcenter-addressadditionalname">AddressAdditionalName</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Name 2<br /><strong>@EndUserText.heading</strong>: Name 2<br /><strong>@EndUserText.quickInfo</strong>: Name 2</td></tr>
<tr><td><strong id="costcenter.costcenter-costcentercreationdate">CostCenterCreationDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Entered On<br /><strong>@EndUserText.heading</strong>: Ent. On<br /><strong>@EndUserText.quickInfo</strong>: Entered On</td></tr>
<tr><td><strong id="costcenter.costcenter-costctrresponsibleuser">CostCtrResponsibleUser</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: User Responsible<br /><strong>@EndUserText.heading</strong>: User Resp.<br /><strong>@EndUserText.quickInfo</strong>: User Responsible<br /><strong>@ObjectModel.foreignKey.association</strong>: _UserRespContactCard</td></tr>
<tr><td><strong id="costcenter.costcenter-jointventureequitytype">JointVentureEquityType</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Equity Type<br /><strong>@EndUserText.heading</strong>: ET<br /><strong>@EndUserText.quickInfo</strong>: Equity Type</td></tr>
<tr><td><strong id="costcenter.costcenter-jointventureobjecttype">JointVentureObjectType</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: JV Object Type<br /><strong>@EndUserText.heading</strong>: Type<br /><strong>@EndUserText.quickInfo</strong>: Joint Venture Object Type</td></tr>
<tr><td><strong id="costcenter.costcenter-costcentercreatedbyuser">CostCenterCreatedByUser</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Created By<br /><strong>@EndUserText.heading</strong>: Created By<br /><strong>@EndUserText.quickInfo</strong>: Entered By<br /><strong>@ObjectModel.foreignKey.association</strong>: _UserCrtedContactCard</td></tr>
<tr><td><strong id="costcenter.costcenter-isstatisticalcostcenter">IsStatisticalCostCenter</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Cost Center Is Stat.<br /><strong>@EndUserText.heading</strong>: CC Stat.<br /><strong>@EndUserText.quickInfo</strong>: Indicator: Cost Center is Statistical Account Assignment</td></tr>
<tr><td><strong id="costcenter.costcenter-budgetcarryingcostcenter">BudgetCarryingCostCenter</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Budget Cost Center<br /><strong>@EndUserText.heading</strong>: Budget CC<br /><strong>@EndUserText.quickInfo</strong>: Budget-Carrying Cost Center</td></tr>
<tr><td><strong id="costcenter.costcenter-consumptionqtyisrecorded">ConsumptionQtyIsRecorded</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Record Quantity<br /><strong>@EndUserText.heading</strong>: Qty<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Recording Consumption Quantities</td></tr>
<tr><td><strong id="costcenter.costcenter-isblockedforplanrevenues">IsBlockedForPlanRevenues</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Lock Planning Revn<br /><strong>@EndUserText.heading</strong>: Lock Planning Revenues<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Planning Revenues</td></tr>
<tr><td><strong id="costcenter.costcenter-jointventurerecoverycode">JointVentureRecoveryCode</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Recovery Indicator<br /><strong>@EndUserText.heading</strong>: RI<br /><strong>@EndUserText.quickInfo</strong>: Recovery Indicator</td></tr>
<tr><td><strong id="costcenter.costcenter-availabilitycontrolprofile">AvailabilityControlProfile</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Availy Ctrl Prfl<br /><strong>@EndUserText.heading</strong>: Profile<br /><strong>@EndUserText.quickInfo</strong>: Budget Availability Control: Profile</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenterallocationmethod">CostCenterAllocationMethod</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Allocation Methods<br /><strong>@EndUserText.heading</strong>: AM<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Allowed Allocation Methods</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenterstandardhierarea">CostCenterStandardHierArea</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Hierarchy Area<br /><strong>@EndUserText.heading</strong>: Area<br /><strong>@EndUserText.quickInfo</strong>: Standard Hierarchy Area</td></tr>
<tr><td><strong id="costcenter.costcenter-isblockedforrevenueposting">IsBlockedForRevenuePosting</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Actual Revenues<br /><strong>@EndUserText.heading</strong>: ActRev<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Revenue Postings</td></tr>
<tr><td><strong id="costcenter.costcenter-actydependentallocationtmpl">ActyDependentAllocationTmpl</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Acty-Dep Templ.Alloc<br /><strong>@EndUserText.heading</strong>: ActyDepTemplAlloc<br /><strong>@EndUserText.quickInfo</strong>: Template: Activity-Dependent Allocation to Cost Center<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplScd</td></tr>
<tr><td><strong id="costcenter.costcenter-availabilitycontrolisactive">AvailabilityControlIsActive</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: AVC is Active<br /><strong>@EndUserText.heading</strong>: AVC Active<br /><strong>@EndUserText.quickInfo</strong>: Budget Availability Control for Cost Centers is Active</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenterlastchangedattime">CostCenterLastChangedAtTime</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Last Changed At<br /><strong>@EndUserText.heading</strong>: Last Changed At<br /><strong>@EndUserText.quickInfo</strong>: Last Changed At</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenterlastchangedbyuser">CostCenterLastChangedByUser</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Last Changed By<br /><strong>@EndUserText.heading</strong>: Last Changed By<br /><strong>@EndUserText.quickInfo</strong>: Last Changed By<br /><strong>@ObjectModel.foreignKey.association</strong>: _LastChangedByUserContactCard</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenterlastchangedondate">CostCenterLastChangedOnDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Last Changed On<br /><strong>@EndUserText.heading</strong>: Last Changed On<br /><strong>@EndUserText.quickInfo</strong>: Last Changed On</td></tr>
<tr><td><strong id="costcenter.costcenter-functionalareaisfixassigned">FunctionalAreaIsFixAssigned</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Functional Area Fixed Assignment<br /><strong>@EndUserText.heading</strong>: Functional Area Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Functional Area with Fixed Assignment</td></tr>
<tr><td><strong id="costcenter.costcenter-actldepstatisticalkeyfigures">ActlDepStatisticalKeyFigures</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Templ.: Stat. KF<br /><strong>@EndUserText.heading</strong>: Templ.: Act. Stat. Key Figure<br /><strong>@EndUserText.quickInfo</strong>: Template: Act. Stat. Key Figure - Cost Center/Activity Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplSkd</td></tr>
<tr><td><strong id="costcenter.costcenter-actyindepformulaplanningtmpl">ActyIndepFormulaPlanningTmpl</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Activity-Indep.Temp.<br /><strong>@EndUserText.heading</strong>: Act-Ind.Temp<br /><strong>@EndUserText.quickInfo</strong>: Template for Activity-Independent Formula Planning<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplCpi</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenteraccountingoverhead">CostCenterAccountingOverhead</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Overhead Key<br /><strong>@EndUserText.heading</strong>: OH Key<br /><strong>@EndUserText.quickInfo</strong>: CO-CCA Overhead Key</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenterprinterdestination">CostCenterPrinterDestination</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Printer Destination<br /><strong>@EndUserText.heading</strong>: Prin<br /><strong>@EndUserText.quickInfo</strong>: Printer Destination for CCtr Report</td></tr>
<tr><td><strong id="costcenter.costcenter-costctrresponsiblepersonname">CostCtrResponsiblePersonName</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Person Responsible<br /><strong>@EndUserText.heading</strong>: Person Responsible<br /><strong>@EndUserText.quickInfo</strong>: Person Responsible</td></tr>
<tr><td><strong id="costcenter.costcenter-datacommunicationphonenumber">DataCommunicationPhoneNumber</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Data line<br /><strong>@EndUserText.heading</strong>: Data line<br /><strong>@EndUserText.quickInfo</strong>: Data communication line no.</td></tr>
<tr><td><strong id="costcenter.costcenter-isblkdforprimarycostsposting">IsBlkdForPrimaryCostsPosting</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Actual primary costs<br /><strong>@EndUserText.heading</strong>: ActPri<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Primary Postings</td></tr>
<tr><td><strong id="costcenter.costcenter-isblockedforplanprimarycosts">IsBlockedForPlanPrimaryCosts</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Plan primary costs<br /><strong>@EndUserText.heading</strong>: PlnPri<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Plan Primary Costs</td></tr>
<tr><td><strong id="costcenter.costcenter-actydepdntformulaplanningtmpl">ActyDepdntFormulaPlanningTmpl</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Activity-Dep.Tmp<br /><strong>@EndUserText.heading</strong>: Activity-Dep.Tmp<br /><strong>@EndUserText.quickInfo</strong>: Template for Activity-Dependent Formula Planning<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplCpd</td></tr>
<tr><td><strong id="costcenter.costcenter-actyindependentallocationtmpl">ActyIndependentAllocationTmpl</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Acty-IndepTemplAlloc<br /><strong>@EndUserText.heading</strong>: ActyIndTemplAlloc<br /><strong>@EndUserText.quickInfo</strong>: Template: Activity-Independent Allocation to Cost Center<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplSci</td></tr>
<tr><td><strong id="costcenter.costcenter-costcenteralternativefunction">CostCenterAlternativeFunction</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Altern. Function<br /><strong>@EndUserText.heading</strong>: A.Fnc<br /><strong>@EndUserText.quickInfo</strong>: Alternative Function of Cost Center</td></tr>
<tr><td><strong id="costcenter.costcenter-isblockedforcommitmentposting">IsBlockedForCommitmentPosting</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Commitment Update<br /><strong>@EndUserText.heading</strong>: Cmmt<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Commitment Update</td></tr>
<tr><td><strong id="costcenter.costcenter-actlindepstatisticalkeyfigures">ActlIndepStatisticalKeyFigures</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Templ.: Stat. KF<br /><strong>@EndUserText.heading</strong>: Templ.: Act. Stat. Key Figure<br /><strong>@EndUserText.quickInfo</strong>: CCA_TEMPL_SKI<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplSki</td></tr>
<tr><td><strong id="costcenter.costcenter-isblkdforsecondarycostsposting">IsBlkdForSecondaryCostsPosting</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Actl Sec. Costs<br /><strong>@EndUserText.heading</strong>: ActSec<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Secondary Costs</td></tr>
<tr><td><strong id="costcenter.costcenter-isblockedforplansecondarycosts">IsBlockedForPlanSecondaryCosts</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Lock Plan Sec Costs<br /><strong>@EndUserText.heading</strong>: Lock Plan Secondary Costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Plan Secondary Costs</td></tr>
<tr><td><strong id="costcenter.costcenter-zz1_red_red_12345_cos">ZZ1_red_red_12345_COS</strong></td><td>cds.String</td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "ZZ1_RED_RED_12345_V",
      "element": "Code"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_COSTCENTER.ZZ1_RED_RED_12345_COS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_COSTCENTER.ZZ1_RED_RED_12345_COS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_COSTCENTER.ZZ1_RED_RED_12345_COS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="costcenter.costcenter-zz1_additionalfield_cos">ZZ1_AdditionalField_COS</strong></td><td>cds.String</td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_COSTCENTER.ZZ1_ADDITIONALFIELD_COS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_COSTCENTER.ZZ1_ADDITIONALFIELD_COS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_COSTCENTER.ZZ1_ADDITIONALFIELD_COS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="costcenter.costcenter-zz1_testzfo_cos">ZZ1_TestZFO_COS</strong></td><td>cds.String</td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_COSTCENTER.ZZ1_TESTZFO_COS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_COSTCENTER.ZZ1_TESTZFO_COS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_COSTCENTER.ZZ1_TESTZFO_COS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="costcenter.costcenter-zz1_bco_test_1_cos">ZZ1_BCO_TEST_1_COS</strong></td><td>cds.String</td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_COSTCENTER.ZZ1_BCO_TEST_1_COS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_COSTCENTER.ZZ1_BCO_TEST_1_COS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_COSTCENTER.ZZ1_BCO_TEST_1_COS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

<div id="costcenter.costcenterhierarchynode"></div>

### CostCenter.CostCenterHierarchyNode


<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-nodetype">NodeType</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Node Type<br /><strong>@EndUserText.heading</strong>: Node Type<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy node type</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-costcenter">CostCenter</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Cost Center<br /><strong>@EndUserText.heading</strong>: Cost Center<br /><strong>@EndUserText.quickInfo</strong>: Cost Center<br /><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_CostCenterStdVH",
      "element": "CostCenter"
    &rbrace;,
    "additionalBinding": [
      &lbrace;
        "element": "ControllingArea",
        "localElement": "ControllingArea"
      &rbrace;
    ]
  &rbrace;
]</code><br /><strong>@ObjectModel.foreignKey.association</strong>: _CostCenter</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-parentnode">ParentNode</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Par. Node<br /><strong>@EndUserText.heading</strong>: Parent Node<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy parent node</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-hierarchynode">HierarchyNode</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Node<br /><strong>@EndUserText.heading</strong>: Hierarchy Node<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy node<br /><strong>@ObjectModel.text.association</strong>: _Text</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-sequencenumber">SequenceNumber</strong></td><td>cds.String</td><td></td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-controllingarea">ControllingArea</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Controlling Area<br /><strong>@EndUserText.heading</strong>: Controlling Area<br /><strong>@EndUserText.quickInfo</strong>: Controlling Area<br /><strong>@ObjectModel.text.association</strong>: _ControllingAreaText<br /><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_ControllingAreaStdVH",
      "element": "ControllingArea"
    &rbrace;
  &rbrace;
]</code><br /><strong>@ObjectModel.foreignKey.association</strong>: _ControllingArea</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-validityenddate">ValidityEndDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Validity End Date<br /><strong>@EndUserText.heading</strong>: Validity End Date<br /><strong>@EndUserText.quickInfo</strong>: Validity End Date<br /><strong>@Semantics.businessDate.to</strong>: true</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-hierarchynodeval">HierarchyNodeVal</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Value<br /><strong>@EndUserText.heading</strong>: Node Value<br /><strong>@EndUserText.quickInfo</strong>: Node value</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-hierarchyversion">HierarchyVersion</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Version<br /><strong>@EndUserText.heading</strong>: Hierarchy Version<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy version</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-validitystartdate">ValidityStartDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Validity Start Date<br /><strong>@EndUserText.heading</strong>: Validity Start Date<br /><strong>@EndUserText.quickInfo</strong>: Validity Start Date<br /><strong>@Semantics.businessDate.from</strong>: true</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-hierarchynodelevel">HierarchyNodeLevel</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Hierarchy Level<br /><strong>@EndUserText.heading</strong>: Hierarchy Level<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy Level</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-costcenterhierarchy">CostCenterHierarchy</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Cost Center Hierarchy<br /><strong>@EndUserText.heading</strong>: Cost Center Hierarchy<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Hierarchy<br /><strong>@ObjectModel.foreignKey.association</strong>: _Hierarchy</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchynode-hierarchynodesequence">HierarchyNodeSequence</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Sequence Number<br /><strong>@EndUserText.heading</strong>: Hierarchy Sequence Number<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy Sequence Number</td></tr>
</table>

<div id="costcenter.costcentercategory"></div>

### CostCenter.CostCenterCategory


<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="costcenter.costcentercategory-functionalarea">FunctionalArea</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Functional Area<br /><strong>@EndUserText.heading</strong>: Functional Area<br /><strong>@EndUserText.quickInfo</strong>: Functional Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _FunctionalArea</td></tr>
<tr><td><strong id="costcenter.costcentercategory-costcentercategory">CostCenterCategory</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Cost Center Category<br /><strong>@EndUserText.heading</strong>: CCtC<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Category<br /><strong>@ObjectModel.text.association</strong>: _Text</td></tr>
<tr><td><strong id="costcenter.costcentercategory-consumptionqtyisrecorded">ConsumptionQtyIsRecorded</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Record Quantity<br /><strong>@EndUserText.heading</strong>: Qty<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Recording Consumption Quantities</td></tr>
<tr><td><strong id="costcenter.costcentercategory-isblockedforplanrevenues">IsBlockedForPlanRevenues</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Lock Planning Revn<br /><strong>@EndUserText.heading</strong>: Lock Planning Revenues<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Planning Revenues</td></tr>
<tr><td><strong id="costcenter.costcentercategory-costcenterallocationmethod">CostCenterAllocationMethod</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Allocation Methods<br /><strong>@EndUserText.heading</strong>: Allocation Methods<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Allowed Allocation Methods</td></tr>
<tr><td><strong id="costcenter.costcentercategory-isblockedforrevenueposting">IsBlockedForRevenuePosting</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Actual Revenues<br /><strong>@EndUserText.heading</strong>: ActRev<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Revenue Postings</td></tr>
<tr><td><strong id="costcenter.costcentercategory-isblkdforprimarycostsposting">IsBlkdForPrimaryCostsPosting</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Actual primary costs<br /><strong>@EndUserText.heading</strong>: ActPri<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Primary Postings</td></tr>
<tr><td><strong id="costcenter.costcentercategory-isblockedforplanprimarycosts">IsBlockedForPlanPrimaryCosts</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Plan primary costs<br /><strong>@EndUserText.heading</strong>: PlnPri<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Plan Primary Costs</td></tr>
<tr><td><strong id="costcenter.costcentercategory-isblockedforcommitmentposting">IsBlockedForCommitmentPosting</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Commitment Update<br /><strong>@EndUserText.heading</strong>: Cmmt<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Commitment Update</td></tr>
<tr><td><strong id="costcenter.costcentercategory-isblkdforsecondarycostsposting">IsBlkdForSecondaryCostsPosting</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Actl Sec. Costs<br /><strong>@EndUserText.heading</strong>: ActSec<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Secondary Costs</td></tr>
<tr><td><strong id="costcenter.costcentercategory-isblockedforplansecondarycosts">IsBlockedForPlanSecondaryCosts</strong></td><td>cds.Boolean</td><td><strong>@EndUserText.label</strong>: Lock Plan Sec Costs<br /><strong>@EndUserText.heading</strong>: Lock Plan Secondary Costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Plan Secondary Costs</td></tr>
</table>

<div id="costcenter.costcentercategorytext"></div>

### CostCenter.CostCenterCategoryText


<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="costcenter.costcentercategorytext-language">Language</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Language Key<br /><strong>@Semantics.language</strong>: true<br /><strong>@EndUserText.heading</strong>: Language<br /><strong>@EndUserText.quickInfo</strong>: Language Key<br /><strong>@ObjectModel.foreignKey.association</strong>: _Language</td></tr>
<tr><td><strong id="costcenter.costcentercategorytext-costcentercategory">CostCenterCategory</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Cost Center Category<br /><strong>@EndUserText.heading</strong>: CCtC<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Category</td></tr>
<tr><td><strong id="costcenter.costcentercategorytext-costcentercategoryname">CostCenterCategoryName</strong></td><td>cds.String</td><td><strong>@Semantics.text</strong>: true<br /><strong>@EndUserText.label</strong>: Cost Ctr Cat Name<br /><strong>@EndUserText.heading</strong>: Cost Center Category Name<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Category Name</td></tr>
</table>

<div id="costcenter.costcenterhierarchy"></div>

### CostCenter.CostCenterHierarchy


<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="costcenter.costcenterhierarchy-lastchangetime">LastChangeTime</strong></td><td>cds.DateTime</td><td><strong>@EndUserText.label</strong>: Updated At<br /><strong>@EndUserText.heading</strong>: Last Updated At<br /><strong>@EndUserText.quickInfo</strong>: Last Updated At (Timestamp)</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchy-controllingarea">ControllingArea</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Controlling Area<br /><strong>@EndUserText.heading</strong>: Controlling Area<br /><strong>@EndUserText.quickInfo</strong>: Controlling Area<br /><strong>@ObjectModel.text.association</strong>: _ControllingAreaText<br /><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_ControllingAreaStdVH",
      "element": "ControllingArea"
    &rbrace;
  &rbrace;
]</code><br /><strong>@ObjectModel.foreignKey.association</strong>: _ControllingArea</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchy-validityenddate">ValidityEndDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Validity End Date<br /><strong>@EndUserText.heading</strong>: Validity End Date<br /><strong>@EndUserText.quickInfo</strong>: Validity End Date<br /><strong>@Semantics.businessDate.to</strong>: true</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchy-hierarchyshortid">HierarchyShortID</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Hierarchy ID<br /><strong>@EndUserText.heading</strong>: Hierarchy ID<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy ID</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchy-lastchangedbyuser">LastChangedByUser</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Last Changed By<br /><strong>@EndUserText.heading</strong>: Changed By<br /><strong>@EndUserText.quickInfo</strong>: Last Changed By</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchy-validitystartdate">ValidityStartDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Validity Start Date<br /><strong>@EndUserText.heading</strong>: Validity Start Date<br /><strong>@EndUserText.quickInfo</strong>: Validity Start Date<br /><strong>@Semantics.businessDate.from</strong>: true</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchy-lastchangedatetime">LastChangeDateTime</strong></td><td>cds.DateTime</td><td><strong>@EndUserText.label</strong>: Updated At<br /><strong>@EndUserText.heading</strong>: Last Updated At<br /><strong>@EndUserText.quickInfo</strong>: Last Updated At (Timestamp)</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchy-costcenterhierarchy">CostCenterHierarchy</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Cost Center Hierarchy<br /><strong>@EndUserText.heading</strong>: Cost Center Hierarchy<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Hierarchy<br /><strong>@ObjectModel.text.association</strong>: _Text</td></tr>
</table>

<div id="costcenter.costcenterhierarchytext"></div>

### CostCenter.CostCenterHierarchyText


<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="costcenter.costcenterhierarchytext-language">Language</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Language Key<br /><strong>@Semantics.language</strong>: true<br /><strong>@EndUserText.heading</strong>: Language<br /><strong>@EndUserText.quickInfo</strong>: Language Key</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchytext-controllingarea">ControllingArea</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Hierarchy Class<br /><strong>@EndUserText.heading</strong>: Hierarchy Class<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy Class<br /><strong>@ObjectModel.text.association</strong>: _ControllingAreaText<br /><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_ControllingAreaStdVH",
      "element": "ControllingArea"
    &rbrace;
  &rbrace;
]</code><br /><strong>@ObjectModel.foreignKey.association</strong>: _ControllingArea</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchytext-validityenddate">ValidityEndDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Valid To<br /><strong>@EndUserText.heading</strong>: to<br /><strong>@EndUserText.quickInfo</strong>: Valid To Date<br /><strong>@Semantics.businessDate.to</strong>: true</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchytext-validitystartdate">ValidityStartDate</strong></td><td>cds.Date</td><td><strong>@EndUserText.label</strong>: Valid From<br /><strong>@EndUserText.heading</strong>: Valid From<br /><strong>@EndUserText.quickInfo</strong>: Valid-From Date<br /><strong>@Semantics.businessDate.from</strong>: true</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchytext-costcenterhierarchy">CostCenterHierarchy</strong></td><td>cds.String</td><td><strong>@EndUserText.label</strong>: Cost Center Hierarchy<br /><strong>@EndUserText.heading</strong>: Cost Center Hierarchy<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Hierarchy</td></tr>
<tr><td><strong id="costcenter.costcenterhierarchytext-costcenterhierarchyname">CostCenterHierarchyName</strong></td><td>cds.String</td><td><strong>@Semantics.text</strong>: true<br /><strong>@EndUserText.label</strong>: Description<br /><strong>@EndUserText.heading</strong>: Hierarchy Description<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy description</td></tr>
</table>

