## Entity Definitions

<div id="costcenter"></div>

### CostCenter


<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="costcenter-controllingarea">ControllingArea</strong></td><td><a href="#type-kokrs" target="_self">KOKRS</a></td><td><strong>Key</strong>: true<br /><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: COAr<br /><strong>@EndUserText.label</strong>: Controlling Area<br /><strong>@EndUserText.quickInfo</strong>: Controlling Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _ControllingArea<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcenter">CostCenter</strong></td><td><a href="#type-kostl" target="_self">KOSTL</a></td><td><strong>Key</strong>: true<br /><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@AbapCatalog.typeSpec.conversionExit</strong>: ALPHA<br /><strong>@EndUserText.heading</strong>: Cost Ctr<br /><strong>@EndUserText.label</strong>: Cost Center<br /><strong>@EndUserText.quickInfo</strong>: Cost Center<br /><strong>@ObjectModel.hierarchy.association</strong>: _CostCenterHierarchyNode<br /><strong>@ObjectModel.text.association</strong>: _Text<br /><strong>@ObjectModel.upperCase</strong>: true<br /><strong>@Search.defaultSearchElement</strong>: true<br /><strong>@Search.fuzzinessThreshold</strong>: <code>&lbrace;
  "value": "0.8",
  "literal": "number"
&rbrace;</code></td></tr>
<tr><td><strong id="costcenter-validityenddate">ValidityEndDate</strong></td><td><a href="#type-datbi" target="_self">DATBI</a></td><td><strong>Key</strong>: true<br /><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: to<br /><strong>@EndUserText.label</strong>: Valid To<br /><strong>@EndUserText.quickInfo</strong>: Valid To Date<br /><strong>@ObjectModel.upperCase</strong>: true<br /><strong>@Semantics.businessDate.to</strong>: true</td></tr>
<tr><td><strong id="costcenter-validitystartdate">ValidityStartDate</strong></td><td><a href="#type-datab" target="_self">DATAB</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Valid From<br /><strong>@EndUserText.label</strong>: Valid From<br /><strong>@EndUserText.quickInfo</strong>: Valid-From Date<br /><strong>@ObjectModel.upperCase</strong>: true<br /><strong>@Semantics.businessDate.from</strong>: true</td></tr>
<tr><td><strong id="costcenter-isblkdforprimarycostsposting">IsBlkdForPrimaryCostsPosting</strong></td><td><a href="#type-bkzkp" target="_self">BKZKP</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: ActPri<br /><strong>@EndUserText.label</strong>: Actual primary costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Primary Postings<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-isblockedforplanprimarycosts">IsBlockedForPlanPrimaryCosts</strong></td><td><a href="#type-pkzkp" target="_self">PKZKP</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: PlnPri<br /><strong>@EndUserText.label</strong>: Plan primary costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Plan Primary Costs<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-companycode">CompanyCode</strong></td><td><a href="#type-bukrs" target="_self">BUKRS</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: CoCd<br /><strong>@EndUserText.label</strong>: Company Code<br /><strong>@EndUserText.quickInfo</strong>: Company Code<br /><strong>@ObjectModel.foreignKey.association</strong>: _CompanyCode<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-businessarea">BusinessArea</strong></td><td><a href="#type-gsber" target="_self">GSBER</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: BusA<br /><strong>@EndUserText.label</strong>: Business Area<br /><strong>@EndUserText.quickInfo</strong>: Business Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _BusinessArea<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcentercategory">CostCenterCategory</strong></td><td><a href="#type-kosar" target="_self">KOSAR</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: CCtC<br /><strong>@EndUserText.label</strong>: Cost Center Category<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Category<br /><strong>@ObjectModel.foreignKey.association</strong>: _CostCenterCategory<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costctrresponsiblepersonname">CostCtrResponsiblePersonName</strong></td><td><a href="#type-verak" target="_self">VERAK</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Person Responsible<br /><strong>@EndUserText.label</strong>: Person Responsible<br /><strong>@EndUserText.quickInfo</strong>: Person Responsible</td></tr>
<tr><td><strong id="costcenter-costctrresponsibleuser">CostCtrResponsibleUser</strong></td><td><a href="#type-verak_user" target="_self">VERAK_USER</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: User Resp.<br /><strong>@EndUserText.label</strong>: User Responsible<br /><strong>@EndUserText.quickInfo</strong>: User Responsible<br /><strong>@ObjectModel.foreignKey.association</strong>: _UserRespContactCard<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcentercurrency">CostCenterCurrency</strong></td><td><a href="#type-waers" target="_self">WAERS</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Crcy<br /><strong>@EndUserText.label</strong>: Currency<br /><strong>@EndUserText.quickInfo</strong>: Currency Key<br /><strong>@ObjectModel.foreignKey.association</strong>: _Currency<br /><strong>@ObjectModel.upperCase</strong>: true<br /><strong>@Semantics.currencyCode</strong>: true</td></tr>
<tr><td><strong id="costcenter-costingsheet">CostingSheet</strong></td><td><a href="#type-aufkalsm" target="_self">AUFKALSM</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: CostSh<br /><strong>@EndUserText.label</strong>: Costing Sheet<br /><strong>@EndUserText.quickInfo</strong>: Costing Sheet<br /><strong>@ObjectModel.foreignKey.association</strong>: _CostingSheetProcedure<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-taxjurisdiction">TaxJurisdiction</strong></td><td><a href="#type-txjcd" target="_self">TXJCD</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Tax Jur.<br /><strong>@EndUserText.label</strong>: Tax Jurisdiction<br /><strong>@EndUserText.quickInfo</strong>: Tax Jurisdiction<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-profitcenter">ProfitCenter</strong></td><td><a href="#type-prctr" target="_self">PRCTR</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@AbapCatalog.typeSpec.conversionExit</strong>: ALPHA<br /><strong>@EndUserText.heading</strong>: Profit Ctr<br /><strong>@EndUserText.label</strong>: Profit Center<br /><strong>@EndUserText.quickInfo</strong>: Profit Center<br /><strong>@ObjectModel.foreignKey.association</strong>: _ProfitCenter<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-plant">Plant</strong></td><td><a href="#type-werks_d" target="_self">WERKS_D</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Plnt<br /><strong>@EndUserText.label</strong>: Plant<br /><strong>@EndUserText.quickInfo</strong>: Plant<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-logicalsystem">LogicalSystem</strong></td><td><a href="#type-logsystem" target="_self">LOGSYSTEM</a></td><td><strong>@AbapCatalog.typeSpec.conversionExit</strong>: ALPHA<br /><strong>@EndUserText.heading</strong>: Log.System<br /><strong>@EndUserText.label</strong>: Logical System<br /><strong>@EndUserText.quickInfo</strong>: Logical System<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcentercreationdate">CostCenterCreationDate</strong></td><td><a href="#type-erfdt" target="_self">ERFDT</a></td><td><strong>@EndUserText.heading</strong>: Ent. On<br /><strong>@EndUserText.label</strong>: Entered On<br /><strong>@EndUserText.quickInfo</strong>: Entered On<br /><strong>@ObjectModel.upperCase</strong>: true<br /><strong>@Semantics.systemDate.createdAt</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcentercreatedbyuser">CostCenterCreatedByUser</strong></td><td><a href="#type-erfnm" target="_self">ERFNM</a></td><td><strong>@EndUserText.heading</strong>: Created By<br /><strong>@EndUserText.label</strong>: Created By<br /><strong>@EndUserText.quickInfo</strong>: Entered By<br /><strong>@ObjectModel.foreignKey.association</strong>: _UserCrtedContactCard<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-isblkdforsecondarycostsposting">IsBlkdForSecondaryCostsPosting</strong></td><td><a href="#type-bkzks" target="_self">BKZKS</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: ActSec<br /><strong>@EndUserText.label</strong>: Actl Sec. Costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Secondary Costs<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-isblockedforrevenueposting">IsBlockedForRevenuePosting</strong></td><td><a href="#type-bkzer" target="_self">BKZER</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: ActRev<br /><strong>@EndUserText.label</strong>: Actual Revenues<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Revenue Postings<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-isblockedforcommitmentposting">IsBlockedForCommitmentPosting</strong></td><td><a href="#type-bkzob" target="_self">BKZOB</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Cmmt<br /><strong>@EndUserText.label</strong>: Commitment Update<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Commitment Update<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-isblockedforplansecondarycosts">IsBlockedForPlanSecondaryCosts</strong></td><td><a href="#type-fis_pkzks" target="_self">FIS_PKZKS</a></td><td><strong>@EndUserText.heading</strong>: Lock Plan Secondary Costs<br /><strong>@EndUserText.label</strong>: Lock Plan Sec Costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Plan Secondary Costs<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-isblockedforplanrevenues">IsBlockedForPlanRevenues</strong></td><td><a href="#type-fis_pkzer" target="_self">FIS_PKZER</a></td><td><strong>@EndUserText.heading</strong>: Lock Planning Revenues<br /><strong>@EndUserText.label</strong>: Lock Planning Revn<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Planning Revenues<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcenterallocationmethod">CostCenterAllocationMethod</strong></td><td><a href="#type-vmeth" target="_self">VMETH</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: AM<br /><strong>@EndUserText.label</strong>: Allocation Methods<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Allowed Allocation Methods<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-consumptionqtyisrecorded">ConsumptionQtyIsRecorded</strong></td><td><a href="#type-mgefl" target="_self">MGEFL</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Qty<br /><strong>@EndUserText.label</strong>: Record Quantity<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Recording Consumption Quantities<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-department">Department</strong></td><td><a href="#type-abtei" target="_self">ABTEI</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Department<br /><strong>@EndUserText.label</strong>: Department<br /><strong>@EndUserText.quickInfo</strong>: Department</td></tr>
<tr><td><strong id="costcenter-subsequentcostcenter">SubsequentCostCenter</strong></td><td><a href="#type-nkost" target="_self">NKOST</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@AbapCatalog.typeSpec.conversionExit</strong>: ALPHA<br /><strong>@EndUserText.heading</strong>: SCtr<br /><strong>@EndUserText.label</strong>: Subsequent Cost Ctr.<br /><strong>@EndUserText.quickInfo</strong>: Subsequent Cost Center<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-conditionusage">ConditionUsage</strong></td><td><a href="#type-kvewe" target="_self">KVEWE</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: U<br /><strong>@EndUserText.label</strong>: Usage<br /><strong>@EndUserText.quickInfo</strong>: Usage of the condition table<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-conditionapplication">ConditionApplication</strong></td><td><a href="#type-kappl" target="_self">KAPPL</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: App<br /><strong>@EndUserText.label</strong>: Application<br /><strong>@EndUserText.quickInfo</strong>: Application<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcenteraccountingoverhead">CostCenterAccountingOverhead</strong></td><td><a href="#type-koszschl" target="_self">KOSZSCHL</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: OH Key<br /><strong>@EndUserText.label</strong>: Overhead Key<br /><strong>@EndUserText.quickInfo</strong>: CO-CCA Overhead Key<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-country">Country</strong></td><td><a href="#type-land1" target="_self">LAND1</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: C/R<br /><strong>@EndUserText.label</strong>: Country/Region Key<br /><strong>@EndUserText.quickInfo</strong>: Country/Region Key<br /><strong>@ObjectModel.foreignKey.association</strong>: _Country<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-formofaddress">FormOfAddress</strong></td><td><a href="#type-anred" target="_self">ANRED</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Title<br /><strong>@EndUserText.label</strong>: Title<br /><strong>@EndUserText.quickInfo</strong>: Title</td></tr>
<tr><td><strong id="costcenter-addressname">AddressName</strong></td><td><a href="#type-name1_gp" target="_self">NAME1_GP</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Name<br /><strong>@EndUserText.label</strong>: Name<br /><strong>@EndUserText.quickInfo</strong>: Name</td></tr>
<tr><td><strong id="costcenter-addressadditionalname">AddressAdditionalName</strong></td><td><a href="#type-name2_gp" target="_self">NAME2_GP</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Name 2<br /><strong>@EndUserText.label</strong>: Name 2<br /><strong>@EndUserText.quickInfo</strong>: Name 2</td></tr>
<tr><td><strong id="costcenter-costcenteraddrname3">CostCenterAddrName3</strong></td><td><a href="#type-name3_gp" target="_self">NAME3_GP</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Name 3<br /><strong>@EndUserText.label</strong>: Name 3<br /><strong>@EndUserText.quickInfo</strong>: Name 3</td></tr>
<tr><td><strong id="costcenter-costcenteraddrname4">CostCenterAddrName4</strong></td><td><a href="#type-name4_gp" target="_self">NAME4_GP</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Name 4<br /><strong>@EndUserText.label</strong>: Name 4<br /><strong>@EndUserText.quickInfo</strong>: Name 4</td></tr>
<tr><td><strong id="costcenter-cityname">CityName</strong></td><td><a href="#type-ort01_gp" target="_self">ORT01_GP</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: City<br /><strong>@EndUserText.label</strong>: City<br /><strong>@EndUserText.quickInfo</strong>: City</td></tr>
<tr><td><strong id="costcenter-district">District</strong></td><td><a href="#type-ort02_gp" target="_self">ORT02_GP</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: District<br /><strong>@EndUserText.label</strong>: District<br /><strong>@EndUserText.quickInfo</strong>: District</td></tr>
<tr><td><strong id="costcenter-streetaddressname">StreetAddressName</strong></td><td><a href="#type-stras_gp" target="_self">STRAS_GP</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Street<br /><strong>@EndUserText.label</strong>: Street<br /><strong>@EndUserText.quickInfo</strong>: Street and House Number</td></tr>
<tr><td><strong id="costcenter-pobox">POBox</strong></td><td><a href="#type-pfach" target="_self">PFACH</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: PO Box<br /><strong>@EndUserText.label</strong>: PO Box<br /><strong>@EndUserText.quickInfo</strong>: PO Box<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-postalcode">PostalCode</strong></td><td><a href="#type-pstlz" target="_self">PSTLZ</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: PostalCode<br /><strong>@EndUserText.label</strong>: Postal Code<br /><strong>@EndUserText.quickInfo</strong>: Postal Code<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-poboxpostalcode">POBoxPostalCode</strong></td><td><a href="#type-pstl2" target="_self">PSTL2</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: PO Box pcd<br /><strong>@EndUserText.label</strong>: P.O. Box Postal Code<br /><strong>@EndUserText.quickInfo</strong>: P.O. Box Postal Code<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-region">Region</strong></td><td><a href="#type-regio" target="_self">REGIO</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Rg<br /><strong>@EndUserText.label</strong>: Region<br /><strong>@EndUserText.quickInfo</strong>: Region (State, Province, County)<br /><strong>@ObjectModel.foreignKey.association</strong>: _Region<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-language">Language</strong></td><td><a href="#type-spras" target="_self">SPRAS</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@AbapCatalog.typeSpec.conversionExit</strong>: ISOLA<br /><strong>@EndUserText.heading</strong>: Language<br /><strong>@EndUserText.label</strong>: Language Key<br /><strong>@EndUserText.quickInfo</strong>: Language Key<br /><strong>@ObjectModel.foreignKey.association</strong>: _Language</td></tr>
<tr><td><strong id="costcenter-teleboxnumber">TeleboxNumber</strong></td><td><a href="#type-telbx" target="_self">TELBX</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Telebox<br /><strong>@EndUserText.label</strong>: Telebox Number<br /><strong>@EndUserText.quickInfo</strong>: Telebox Number</td></tr>
<tr><td><strong id="costcenter-phonenumber1">PhoneNumber1</strong></td><td><a href="#type-telf1" target="_self">TELF1</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Telephone 1<br /><strong>@EndUserText.label</strong>: Telephone 1<br /><strong>@EndUserText.quickInfo</strong>: First telephone number</td></tr>
<tr><td><strong id="costcenter-phonenumber2">PhoneNumber2</strong></td><td><a href="#type-telf2" target="_self">TELF2</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Telephone 2<br /><strong>@EndUserText.label</strong>: Telephone 2<br /><strong>@EndUserText.quickInfo</strong>: Second telephone number</td></tr>
<tr><td><strong id="costcenter-faxnumber">FaxNumber</strong></td><td><a href="#type-telfx" target="_self">TELFX</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Fax Number<br /><strong>@EndUserText.label</strong>: Fax Number<br /><strong>@EndUserText.quickInfo</strong>: Fax Number</td></tr>
<tr><td><strong id="costcenter-teletexnumber">TeletexNumber</strong></td><td><a href="#type-teltx" target="_self">TELTX</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Teletex Number<br /><strong>@EndUserText.label</strong>: Teletex Number<br /><strong>@EndUserText.quickInfo</strong>: Teletex Number</td></tr>
<tr><td><strong id="costcenter-telexnumber">TelexNumber</strong></td><td><a href="#type-telx1" target="_self">TELX1</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Telex Number<br /><strong>@EndUserText.label</strong>: Telex Number<br /><strong>@EndUserText.quickInfo</strong>: Telex Number</td></tr>
<tr><td><strong id="costcenter-datacommunicationphonenumber">DataCommunicationPhoneNumber</strong></td><td><a href="#type-datlt" target="_self">DATLT</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Data line<br /><strong>@EndUserText.label</strong>: Data line<br /><strong>@EndUserText.quickInfo</strong>: Data communication line no.</td></tr>
<tr><td><strong id="costcenter-costcenterprinterdestination">CostCenterPrinterDestination</strong></td><td><a href="#type-kdnam" target="_self">KDNAM</a></td><td><strong>@EndUserText.heading</strong>: Prin<br /><strong>@EndUserText.label</strong>: Printer Destination<br /><strong>@EndUserText.quickInfo</strong>: Printer Destination for CCtr Report<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcenterstandardhierarea">CostCenterStandardHierArea</strong></td><td><a href="#type-khinr" target="_self">KHINR</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Area<br /><strong>@EndUserText.label</strong>: Hierarchy Area<br /><strong>@EndUserText.quickInfo</strong>: Standard Hierarchy Area<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcollector">CostCollector</strong></td><td><a href="#type-cckey" target="_self">CCKEY</a></td><td><strong>@EndUserText.heading</strong>: Cost Collector Key<br /><strong>@EndUserText.label</strong>: Cost Collector Key<br /><strong>@EndUserText.quickInfo</strong>: Cost Collector Key<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcenteriscomplete">CostCenterIsComplete</strong></td><td><a href="#type-kskom" target="_self">KSKOM</a></td><td><strong>@EndUserText.heading</strong>: Complete<br /><strong>@EndUserText.label</strong>: Complete<br /><strong>@EndUserText.quickInfo</strong>: Completion Flag for the Cost Center Master Record<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-isstatisticalcostcenter">IsStatisticalCostCenter</strong></td><td><a href="#type-fins_xkostl_stat" target="_self">FINS_XKOSTL_STAT</a></td><td><strong>@EndUserText.heading</strong>: CC Stat.<br /><strong>@EndUserText.label</strong>: Cost Center Is Stat.<br /><strong>@EndUserText.quickInfo</strong>: Indicator: Cost Center is Statistical Account Assignment<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-objectinternalid">ObjectInternalID</strong></td><td><a href="#type-j_objnr" target="_self">J_OBJNR</a></td><td><strong>@EndUserText.heading</strong>: Object Number<br /><strong>@EndUserText.label</strong>: Object Number<br /><strong>@EndUserText.quickInfo</strong>: Object Number<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcenterfunction">CostCenterFunction</strong></td><td><a href="#type-funkt_dlk" target="_self">FUNKT_DLK</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Fct<br /><strong>@EndUserText.label</strong>: Function<br /><strong>@EndUserText.quickInfo</strong>: Function of Cost Center<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcenteralternativefunction">CostCenterAlternativeFunction</strong></td><td><a href="#type-afunk_dlk" target="_self">AFUNK_DLK</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: A.Fnc<br /><strong>@EndUserText.label</strong>: Altern. Function<br /><strong>@EndUserText.quickInfo</strong>: Alternative Function of Cost Center<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-functionalarea">FunctionalArea</strong></td><td><a href="#type-fkber" target="_self">FKBER</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Functional Area<br /><strong>@EndUserText.label</strong>: Functional Area<br /><strong>@EndUserText.quickInfo</strong>: Functional Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _FunctionalArea<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-actyindepformulaplanningtmpl">ActyIndepFormulaPlanningTmpl</strong></td><td><a href="#type-cca_templ_cpi" target="_self">CCA_TEMPL_CPI</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Act-Ind.Temp<br /><strong>@EndUserText.label</strong>: Activity-Indep.Temp.<br /><strong>@EndUserText.quickInfo</strong>: Template for Activity-Independent Formula Planning<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplCpi<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-actydepdntformulaplanningtmpl">ActyDepdntFormulaPlanningTmpl</strong></td><td><a href="#type-cca_templ_cpd" target="_self">CCA_TEMPL_CPD</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Activity-Dep.Tmp<br /><strong>@EndUserText.label</strong>: Activity-Dep.Tmp<br /><strong>@EndUserText.quickInfo</strong>: Template for Activity-Dependent Formula Planning<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplCpd<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-actyindependentallocationtmpl">ActyIndependentAllocationTmpl</strong></td><td><a href="#type-cca_templ_sci" target="_self">CCA_TEMPL_SCI</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: ActyIndTemplAlloc<br /><strong>@EndUserText.label</strong>: Acty-IndepTemplAlloc<br /><strong>@EndUserText.quickInfo</strong>: Template: Activity-Independent Allocation to Cost Center<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplSci<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-actydependentallocationtmpl">ActyDependentAllocationTmpl</strong></td><td><a href="#type-cca_templ_scd" target="_self">CCA_TEMPL_SCD</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: ActyDepTemplAlloc<br /><strong>@EndUserText.label</strong>: Acty-Dep Templ.Alloc<br /><strong>@EndUserText.quickInfo</strong>: Template: Activity-Dependent Allocation to Cost Center<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplScd<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-actlindepstatisticalkeyfigures">ActlIndepStatisticalKeyFigures</strong></td><td><a href="#type-cca_templ_ski" target="_self">CCA_TEMPL_SKI</a></td><td><strong>@EndUserText.heading</strong>: Templ.: Act. Stat. Key Figure<br /><strong>@EndUserText.label</strong>: Templ.: Stat. KF<br /><strong>@EndUserText.quickInfo</strong>: CCA_TEMPL_SKI<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplSki<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-actldepstatisticalkeyfigures">ActlDepStatisticalKeyFigures</strong></td><td><a href="#type-cca_templ_skd" target="_self">CCA_TEMPL_SKD</a></td><td><strong>@EndUserText.heading</strong>: Templ.: Act. Stat. Key Figure<br /><strong>@EndUserText.label</strong>: Templ.: Stat. KF<br /><strong>@EndUserText.quickInfo</strong>: Template: Act. Stat. Key Figure - Cost Center/Activity Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplSkd<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-jointventure">JointVenture</strong></td><td><a href="#type-jv_name" target="_self">JV_NAME</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@AbapCatalog.typeSpec.conversionExit</strong>: ALPHA<br /><strong>@EndUserText.heading</strong>: JV<br /><strong>@EndUserText.label</strong>: Joint Venture<br /><strong>@EndUserText.quickInfo</strong>: Joint Venture<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-jointventurerecoverycode">JointVentureRecoveryCode</strong></td><td><a href="#type-jv_recind" target="_self">JV_RECIND</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@AbapCatalog.typeSpec.conversionExit</strong>: ALPHA<br /><strong>@EndUserText.heading</strong>: RI<br /><strong>@EndUserText.label</strong>: Recovery Indicator<br /><strong>@EndUserText.quickInfo</strong>: Recovery Indicator<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-jointventureequitytype">JointVentureEquityType</strong></td><td><a href="#type-jv_etype" target="_self">JV_ETYPE</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@AbapCatalog.typeSpec.conversionExit</strong>: ALPHA<br /><strong>@EndUserText.heading</strong>: ET<br /><strong>@EndUserText.label</strong>: Equity Type<br /><strong>@EndUserText.quickInfo</strong>: Equity Type<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-jointventureobjecttype">JointVentureObjectType</strong></td><td><a href="#type-jv_otype" target="_self">JV_OTYPE</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@AbapCatalog.typeSpec.conversionExit</strong>: ALPHA<br /><strong>@EndUserText.heading</strong>: Type<br /><strong>@EndUserText.label</strong>: JV Object Type<br /><strong>@EndUserText.quickInfo</strong>: Joint Venture Object Type<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-jointventureclass">JointVentureClass</strong></td><td><a href="#type-jv_jibcl" target="_self">JV_JIBCL</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Class<br /><strong>@EndUserText.label</strong>: JIB/JIBE Class<br /><strong>@EndUserText.quickInfo</strong>: JIB/JIBE Class<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-jointventuresubclass">JointVentureSubClass</strong></td><td><a href="#type-jv_jibsa" target="_self">JV_JIBSA</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: SCl A<br /><strong>@EndUserText.label</strong>: JIB/JIBE Subclass A<br /><strong>@EndUserText.quickInfo</strong>: JIB/JIBE Subclass A<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-budgetcarryingcostcenter">BudgetCarryingCostCenter</strong></td><td><a href="#type-fco_budget_carrying_cost_ctr" target="_self">FCO_BUDGET_CARRYING_COST_CTR</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@AbapCatalog.typeSpec.conversionExit</strong>: ALPHA<br /><strong>@EndUserText.heading</strong>: Budget CC<br /><strong>@EndUserText.label</strong>: Budget Cost Center<br /><strong>@EndUserText.quickInfo</strong>: Budget-Carrying Cost Center<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-availabilitycontrolprofile">AvailabilityControlProfile</strong></td><td><a href="#type-fco_avc_profile" target="_self">FCO_AVC_PROFILE</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Profile<br /><strong>@EndUserText.label</strong>: Availy Ctrl Prfl<br /><strong>@EndUserText.quickInfo</strong>: Budget Availability Control: Profile<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-availabilitycontrolisactive">AvailabilityControlIsActive</strong></td><td><a href="#type-fco_avc_for_cost_center_active" target="_self">FCO_AVC_FOR_COST_CENTER_ACTIVE</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: AVC Active<br /><strong>@EndUserText.label</strong>: AVC is Active<br /><strong>@EndUserText.quickInfo</strong>: Budget Availability Control for Cost Centers is Active<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-fund">Fund</strong></td><td><a href="#type-bp_geber" target="_self">BP_GEBER</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Fund<br /><strong>@EndUserText.label</strong>: Fund<br /><strong>@EndUserText.quickInfo</strong>: Fund<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-grantid">GrantID</strong></td><td><a href="#type-gm_grant_nbr" target="_self">GM_GRANT_NBR</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@AbapCatalog.typeSpec.conversionExit</strong>: ALPHA<br /><strong>@EndUserText.heading</strong>: Grant<br /><strong>@EndUserText.label</strong>: Grant<br /><strong>@EndUserText.quickInfo</strong>: Grant<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-fundisfixassigned">FundIsFixAssigned</strong></td><td><a href="#type-psm_fund_fix_assigned" target="_self">PSM_FUND_FIX_ASSIGNED</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Fund Fixed Assignment<br /><strong>@EndUserText.label</strong>: Fund Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Fund with Fixed Assignment<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-grantidisfixassigned">GrantIDIsFixAssigned</strong></td><td><a href="#type-psm_grant_fix_assigned" target="_self">PSM_GRANT_FIX_ASSIGNED</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Grant Fixed Assignment<br /><strong>@EndUserText.label</strong>: Grant Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Grant with Fixed Assignment<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-functionalareaisfixassigned">FunctionalAreaIsFixAssigned</strong></td><td><a href="#type-psm_func_area_fix_assigned" target="_self">PSM_FUNC_AREA_FIX_ASSIGNED</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Functional Area Fixed Assignment<br /><strong>@EndUserText.label</strong>: Functional Area Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Functional Area with Fixed Assignment<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcenterlastchangedbyuser">CostCenterLastChangedByUser</strong></td><td><a href="#type-fco_last_changed_by" target="_self">FCO_LAST_CHANGED_BY</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Last Changed By<br /><strong>@EndUserText.label</strong>: Last Changed By<br /><strong>@EndUserText.quickInfo</strong>: Last Changed By<br /><strong>@ObjectModel.foreignKey.association</strong>: _LastChangedByUserContactCard<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcenterlastchangedondate">CostCenterLastChangedOnDate</strong></td><td><a href="#type-fco_last_changed_on" target="_self">FCO_LAST_CHANGED_ON</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Last Changed On<br /><strong>@EndUserText.label</strong>: Last Changed On<br /><strong>@EndUserText.quickInfo</strong>: Last Changed On<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-costcenterlastchangedattime">CostCenterLastChangedAtTime</strong></td><td><a href="#type-fco_last_changed_at" target="_self">FCO_LAST_CHANGED_AT</a></td><td><strong>@AbapCatalog.typeSpec.changeDocumentRelevant</strong>: true<br /><strong>@EndUserText.heading</strong>: Last Changed At<br /><strong>@EndUserText.label</strong>: Last Changed At<br /><strong>@EndUserText.quickInfo</strong>: Last Changed At<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplcpd">_ActivityBasedCostingTmplCpd</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_activitybasedcostingtmpl" target="_self">I_ActivityBasedCostingTmpl</a> (Path: <a href="#i_activitybasedcostingtmpl" target="_self">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea" target="_self">ControllingArea</a>) via <a href="#costcenter-controllingarea" target="_self">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplcpi">_ActivityBasedCostingTmplCpi</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_activitybasedcostingtmpl" target="_self">I_ActivityBasedCostingTmpl</a> (Path: <a href="#i_activitybasedcostingtmpl" target="_self">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea" target="_self">ControllingArea</a>) via <a href="#costcenter-controllingarea" target="_self">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplscd">_ActivityBasedCostingTmplScd</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_activitybasedcostingtmpl" target="_self">I_ActivityBasedCostingTmpl</a> (Path: <a href="#i_activitybasedcostingtmpl" target="_self">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea" target="_self">ControllingArea</a>) via <a href="#costcenter-controllingarea" target="_self">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplsci">_ActivityBasedCostingTmplSci</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_activitybasedcostingtmpl" target="_self">I_ActivityBasedCostingTmpl</a> (Path: <a href="#i_activitybasedcostingtmpl" target="_self">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea" target="_self">ControllingArea</a>) via <a href="#costcenter-controllingarea" target="_self">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplskd">_ActivityBasedCostingTmplSkd</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_activitybasedcostingtmpl" target="_self">I_ActivityBasedCostingTmpl</a> (Path: <a href="#i_activitybasedcostingtmpl" target="_self">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea" target="_self">ControllingArea</a>) via <a href="#costcenter-controllingarea" target="_self">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplski">_ActivityBasedCostingTmplSki</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_activitybasedcostingtmpl" target="_self">I_ActivityBasedCostingTmpl</a> (Path: <a href="#i_activitybasedcostingtmpl" target="_self">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea" target="_self">ControllingArea</a>) via <a href="#costcenter-controllingarea" target="_self">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_availabilityctrlprofile">_AvailabilityCtrlProfile</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_availabilityctrlprofile" target="_self">I_AvailabilityCtrlProfile</a> () via <a href="#costcenter-_availabilityctrlprofile" target="_self">_AvailabilityCtrlProfile</a></td></tr>
<tr><td><strong id="costcenter-_businessarea">_BusinessArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_businessarea" target="_self">I_BusinessArea</a> () via <a href="#costcenter-_businessarea" target="_self">_BusinessArea</a></td></tr>
<tr><td><strong id="costcenter-_companycode">_CompanyCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_companycode" target="_self">I_CompanyCode</a> () via <a href="#costcenter-_companycode" target="_self">_CompanyCode</a></td></tr>
<tr><td><strong id="costcenter-_controllingarea">_ControllingArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_controllingarea" target="_self">I_ControllingArea</a> () via <a href="#costcenter-_controllingarea" target="_self">_ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_costcentercategory">_CostCenterCategory</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_costcentercategory" target="_self">I_CostCenterCategory</a> () via <a href="#costcenter-_costcentercategory" target="_self">_CostCenterCategory</a></td></tr>
<tr><td><strong id="costcenter-_costcenterhierarchynode">_CostCenterHierarchyNode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_costcenterhierarchynode" target="_self">I_CostCenterHierarchyNode</a> () via <a href="#costcenter-_costcenterhierarchynode" target="_self">_CostCenterHierarchyNode</a></td></tr>
<tr><td><strong id="costcenter-_costingsheetprocedure">_CostingSheetProcedure</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_costingsheetprocedure" target="_self">I_CostingSheetProcedure</a> (Path: <a href="#i_costingsheetprocedure" target="_self">I_CostingSheetProcedure</a>.<a href="#i_costingsheetprocedure-conditionusage" target="_self">ConditionUsage</a>) via <a href="#costcenter-" target="_self"></a></td></tr>
<tr><td><strong id="costcenter-_country">_Country</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_country" target="_self">I_Country</a> () via <a href="#costcenter-_country" target="_self">_Country</a></td></tr>
<tr><td><strong id="costcenter-_currency">_Currency</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency" target="_self">I_Currency</a> () via <a href="#costcenter-_currency" target="_self">_Currency</a></td></tr>
<tr><td><strong id="costcenter-_functionalarea">_FunctionalArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_functionalarea" target="_self">I_FunctionalArea</a> () via <a href="#costcenter-_functionalarea" target="_self">_FunctionalArea</a></td></tr>
<tr><td><strong id="costcenter-_language">_Language</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_language" target="_self">I_Language</a> () via <a href="#costcenter-_language" target="_self">_Language</a></td></tr>
<tr><td><strong id="costcenter-_lastchangedbyusercontactcard">_LastChangedByUserContactCard</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_usercontactcard" target="_self">I_UserContactCard</a> () via <a href="#costcenter-_lastchangedbyusercontactcard" target="_self">_LastChangedByUserContactCard</a></td></tr>
<tr><td><strong id="costcenter-_profitcenter">_ProfitCenter</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_profitcenter" target="_self">I_ProfitCenter</a> () via <a href="#costcenter-_profitcenter" target="_self">_ProfitCenter</a><br /><strong>@Consumption.filter.businessDate.at</strong>: true</td></tr>
<tr><td><strong id="costcenter-_region">_Region</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_region" target="_self">I_Region</a> () via <a href="#costcenter-_region" target="_self">_Region</a></td></tr>
<tr><td><strong id="costcenter-_text">_Text</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_costcentertext" target="_self">I_CostCenterText</a> () via <a href="#costcenter-_text" target="_self">_Text</a></td></tr>
<tr><td><strong id="costcenter-_usercrtedcontactcard">_UserCrtedContactCard</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_usercontactcard" target="_self">I_UserContactCard</a> () via <a href="#costcenter-_usercrtedcontactcard" target="_self">_UserCrtedContactCard</a></td></tr>
<tr><td><strong id="costcenter-_userrespcontactcard">_UserRespContactCard</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_usercontactcard" target="_self">I_UserContactCard</a> () via <a href="#costcenter-_userrespcontactcard" target="_self">_UserRespContactCard</a></td></tr>
</table>

## Type Definitions

<div id="type-abtei"></div>

### ABTEI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Department<br /><strong>@EndUserText.label</strong>: Department<br /><strong>@EndUserText.quickInfo</strong>: Department</td></tr>
</table>

<div id="type-afunk_dlk"></div>

### AFUNK_DLK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: A.Fnc<br /><strong>@EndUserText.label</strong>: Altern. Function<br /><strong>@EndUserText.quickInfo</strong>: Alternative Function of Cost Center<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-anred"></div>

### ANRED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(15)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Title<br /><strong>@EndUserText.label</strong>: Title<br /><strong>@EndUserText.quickInfo</strong>: Title</td></tr>
</table>

<div id="type-aufkalsm"></div>

### AUFKALSM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CostSh<br /><strong>@EndUserText.label</strong>: Costing Sheet<br /><strong>@EndUserText.quickInfo</strong>: Costing Sheet<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-bkzer"></div>

### BKZER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ActRev<br /><strong>@EndUserText.label</strong>: Actual Revenues<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Revenue Postings<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-bkzkp"></div>

### BKZKP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ActPri<br /><strong>@EndUserText.label</strong>: Actual primary costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Primary Postings<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-bkzks"></div>

### BKZKS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ActSec<br /><strong>@EndUserText.label</strong>: Actl Sec. Costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Secondary Costs<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-bkzob"></div>

### BKZOB

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Cmmt<br /><strong>@EndUserText.label</strong>: Commitment Update<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Commitment Update<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-bp_geber"></div>

### BP_GEBER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Fund<br /><strong>@EndUserText.label</strong>: Fund<br /><strong>@EndUserText.quickInfo</strong>: Fund<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-bukrs"></div>

### BUKRS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CoCd<br /><strong>@EndUserText.label</strong>: Company Code<br /><strong>@EndUserText.quickInfo</strong>: Company Code<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-cca_templ_cpd"></div>

### CCA_TEMPL_CPD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Activity-Dep.Tmp<br /><strong>@EndUserText.label</strong>: Activity-Dep.Tmp<br /><strong>@EndUserText.quickInfo</strong>: Template for Activity-Dependent Formula Planning<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-cca_templ_cpi"></div>

### CCA_TEMPL_CPI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Act-Ind.Temp<br /><strong>@EndUserText.label</strong>: Activity-Indep.Temp.<br /><strong>@EndUserText.quickInfo</strong>: Template for Activity-Independent Formula Planning<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-cca_templ_scd"></div>

### CCA_TEMPL_SCD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ActyDepTemplAlloc<br /><strong>@EndUserText.label</strong>: Acty-Dep Templ.Alloc<br /><strong>@EndUserText.quickInfo</strong>: Template: Activity-Dependent Allocation to Cost Center<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-cca_templ_sci"></div>

### CCA_TEMPL_SCI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ActyIndTemplAlloc<br /><strong>@EndUserText.label</strong>: Acty-IndepTemplAlloc<br /><strong>@EndUserText.quickInfo</strong>: Template: Activity-Independent Allocation to Cost Center<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-cca_templ_skd"></div>

### CCA_TEMPL_SKD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Templ.: Act. Stat. Key Figure<br /><strong>@EndUserText.label</strong>: Templ.: Stat. KF<br /><strong>@EndUserText.quickInfo</strong>: Template: Act. Stat. Key Figure - Cost Center/Activity Type<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-cca_templ_ski"></div>

### CCA_TEMPL_SKI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Templ.: Act. Stat. Key Figure<br /><strong>@EndUserText.label</strong>: Templ.: Stat. KF<br /><strong>@EndUserText.quickInfo</strong>: CCA_TEMPL_SKI<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-cckey"></div>

### CCKEY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(23)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Cost Collector Key<br /><strong>@EndUserText.label</strong>: Cost Collector Key<br /><strong>@EndUserText.quickInfo</strong>: Cost Collector Key<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-datab"></div>

### DATAB

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Valid From<br /><strong>@EndUserText.label</strong>: Valid From<br /><strong>@EndUserText.quickInfo</strong>: Valid-From Date<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-datbi"></div>

### DATBI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: to<br /><strong>@EndUserText.label</strong>: Valid To<br /><strong>@EndUserText.quickInfo</strong>: Valid To Date<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-datlt"></div>

### DATLT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(14)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Data line<br /><strong>@EndUserText.label</strong>: Data line<br /><strong>@EndUserText.quickInfo</strong>: Data communication line no.</td></tr>
</table>

<div id="type-erfdt"></div>

### ERFDT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Ent. On<br /><strong>@EndUserText.label</strong>: Entered On<br /><strong>@EndUserText.quickInfo</strong>: Entered On<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-erfnm"></div>

### ERFNM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Created By<br /><strong>@EndUserText.label</strong>: Created By<br /><strong>@EndUserText.quickInfo</strong>: Entered By<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-fco_avc_for_cost_center_active"></div>

### FCO_AVC_FOR_COST_CENTER_ACTIVE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: AVC Active<br /><strong>@EndUserText.label</strong>: AVC is Active<br /><strong>@EndUserText.quickInfo</strong>: Budget Availability Control for Cost Centers is Active<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-fco_avc_profile"></div>

### FCO_AVC_PROFILE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Profile<br /><strong>@EndUserText.label</strong>: Availy Ctrl Prfl<br /><strong>@EndUserText.quickInfo</strong>: Budget Availability Control: Profile<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-fco_budget_carrying_cost_ctr"></div>

### FCO_BUDGET_CARRYING_COST_CTR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Budget CC<br /><strong>@EndUserText.label</strong>: Budget Cost Center<br /><strong>@EndUserText.quickInfo</strong>: Budget-Carrying Cost Center<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-fco_last_changed_at"></div>

### FCO_LAST_CHANGED_AT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Time</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Last Changed At<br /><strong>@EndUserText.label</strong>: Last Changed At<br /><strong>@EndUserText.quickInfo</strong>: Last Changed At<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-fco_last_changed_by"></div>

### FCO_LAST_CHANGED_BY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Last Changed By<br /><strong>@EndUserText.label</strong>: Last Changed By<br /><strong>@EndUserText.quickInfo</strong>: Last Changed By<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-fco_last_changed_on"></div>

### FCO_LAST_CHANGED_ON

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Last Changed On<br /><strong>@EndUserText.label</strong>: Last Changed On<br /><strong>@EndUserText.quickInfo</strong>: Last Changed On<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-fins_xkostl_stat"></div>

### FINS_XKOSTL_STAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CC Stat.<br /><strong>@EndUserText.label</strong>: Cost Center Is Stat.<br /><strong>@EndUserText.quickInfo</strong>: Indicator: Cost Center is Statistical Account Assignment<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-fis_pkzer"></div>

### FIS_PKZER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Lock Planning Revenues<br /><strong>@EndUserText.label</strong>: Lock Planning Revn<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Planning Revenues<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-fis_pkzks"></div>

### FIS_PKZKS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Lock Plan Secondary Costs<br /><strong>@EndUserText.label</strong>: Lock Plan Sec Costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Plan Secondary Costs<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-fkber"></div>

### FKBER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Functional Area<br /><strong>@EndUserText.label</strong>: Functional Area<br /><strong>@EndUserText.quickInfo</strong>: Functional Area<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-funkt_dlk"></div>

### FUNKT_DLK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Fct<br /><strong>@EndUserText.label</strong>: Function<br /><strong>@EndUserText.quickInfo</strong>: Function of Cost Center<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-gm_grant_nbr"></div>

### GM_GRANT_NBR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(20)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Grant<br /><strong>@EndUserText.label</strong>: Grant<br /><strong>@EndUserText.quickInfo</strong>: Grant<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-gsber"></div>

### GSBER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: BusA<br /><strong>@EndUserText.label</strong>: Business Area<br /><strong>@EndUserText.quickInfo</strong>: Business Area<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-jv_etype"></div>

### JV_ETYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ET<br /><strong>@EndUserText.label</strong>: Equity Type<br /><strong>@EndUserText.quickInfo</strong>: Equity Type<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-jv_jibcl"></div>

### JV_JIBCL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Class<br /><strong>@EndUserText.label</strong>: JIB/JIBE Class<br /><strong>@EndUserText.quickInfo</strong>: JIB/JIBE Class<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-jv_jibsa"></div>

### JV_JIBSA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: SCl A<br /><strong>@EndUserText.label</strong>: JIB/JIBE Subclass A<br /><strong>@EndUserText.quickInfo</strong>: JIB/JIBE Subclass A<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-jv_name"></div>

### JV_NAME

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: JV<br /><strong>@EndUserText.label</strong>: Joint Venture<br /><strong>@EndUserText.quickInfo</strong>: Joint Venture<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-jv_otype"></div>

### JV_OTYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Type<br /><strong>@EndUserText.label</strong>: JV Object Type<br /><strong>@EndUserText.quickInfo</strong>: Joint Venture Object Type<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-jv_recind"></div>

### JV_RECIND

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: RI<br /><strong>@EndUserText.label</strong>: Recovery Indicator<br /><strong>@EndUserText.quickInfo</strong>: Recovery Indicator<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-j_objnr"></div>

### J_OBJNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(22)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Object Number<br /><strong>@EndUserText.label</strong>: Object Number<br /><strong>@EndUserText.quickInfo</strong>: Object Number<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-kappl"></div>

### KAPPL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: App<br /><strong>@EndUserText.label</strong>: Application<br /><strong>@EndUserText.quickInfo</strong>: Application<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-kdnam"></div>

### KDNAM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Prin<br /><strong>@EndUserText.label</strong>: Printer Destination<br /><strong>@EndUserText.quickInfo</strong>: Printer Destination for CCtr Report<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-khinr"></div>

### KHINR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Area<br /><strong>@EndUserText.label</strong>: Hierarchy Area<br /><strong>@EndUserText.quickInfo</strong>: Standard Hierarchy Area<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-kokrs"></div>

### KOKRS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: COAr<br /><strong>@EndUserText.label</strong>: Controlling Area<br /><strong>@EndUserText.quickInfo</strong>: Controlling Area<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-kosar"></div>

### KOSAR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CCtC<br /><strong>@EndUserText.label</strong>: Cost Center Category<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Category<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-kostl"></div>

### KOSTL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Cost Ctr<br /><strong>@EndUserText.label</strong>: Cost Center<br /><strong>@EndUserText.quickInfo</strong>: Cost Center<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-koszschl"></div>

### KOSZSCHL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: OH Key<br /><strong>@EndUserText.label</strong>: Overhead Key<br /><strong>@EndUserText.quickInfo</strong>: CO-CCA Overhead Key<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-kskom"></div>

### KSKOM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Complete<br /><strong>@EndUserText.label</strong>: Complete<br /><strong>@EndUserText.quickInfo</strong>: Completion Flag for the Cost Center Master Record<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-kvewe"></div>

### KVEWE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: U<br /><strong>@EndUserText.label</strong>: Usage<br /><strong>@EndUserText.quickInfo</strong>: Usage of the condition table<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-land1"></div>

### LAND1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: C/R<br /><strong>@EndUserText.label</strong>: Country/Region Key<br /><strong>@EndUserText.quickInfo</strong>: Country/Region Key<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-logsystem"></div>

### LOGSYSTEM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Log.System<br /><strong>@EndUserText.label</strong>: Logical System<br /><strong>@EndUserText.quickInfo</strong>: Logical System<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-mgefl"></div>

### MGEFL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Qty<br /><strong>@EndUserText.label</strong>: Record Quantity<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Recording Consumption Quantities<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-name1_gp"></div>

### NAME1_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Name<br /><strong>@EndUserText.label</strong>: Name<br /><strong>@EndUserText.quickInfo</strong>: Name</td></tr>
</table>

<div id="type-name2_gp"></div>

### NAME2_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Name 2<br /><strong>@EndUserText.label</strong>: Name 2<br /><strong>@EndUserText.quickInfo</strong>: Name 2</td></tr>
</table>

<div id="type-name3_gp"></div>

### NAME3_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Name 3<br /><strong>@EndUserText.label</strong>: Name 3<br /><strong>@EndUserText.quickInfo</strong>: Name 3</td></tr>
</table>

<div id="type-name4_gp"></div>

### NAME4_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Name 4<br /><strong>@EndUserText.label</strong>: Name 4<br /><strong>@EndUserText.quickInfo</strong>: Name 4</td></tr>
</table>

<div id="type-nkost"></div>

### NKOST

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: SCtr<br /><strong>@EndUserText.label</strong>: Subsequent Cost Ctr.<br /><strong>@EndUserText.quickInfo</strong>: Subsequent Cost Center<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-ort01_gp"></div>

### ORT01_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: City<br /><strong>@EndUserText.label</strong>: City<br /><strong>@EndUserText.quickInfo</strong>: City</td></tr>
</table>

<div id="type-ort02_gp"></div>

### ORT02_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: District<br /><strong>@EndUserText.label</strong>: District<br /><strong>@EndUserText.quickInfo</strong>: District</td></tr>
</table>

<div id="type-pfach"></div>

### PFACH

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PO Box<br /><strong>@EndUserText.label</strong>: PO Box<br /><strong>@EndUserText.quickInfo</strong>: PO Box<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-pkzkp"></div>

### PKZKP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PlnPri<br /><strong>@EndUserText.label</strong>: Plan primary costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Plan Primary Costs<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-prctr"></div>

### PRCTR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Profit Ctr<br /><strong>@EndUserText.label</strong>: Profit Center<br /><strong>@EndUserText.quickInfo</strong>: Profit Center<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-psm_func_area_fix_assigned"></div>

### PSM_FUNC_AREA_FIX_ASSIGNED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Functional Area Fixed Assignment<br /><strong>@EndUserText.label</strong>: Functional Area Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Functional Area with Fixed Assignment<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-psm_fund_fix_assigned"></div>

### PSM_FUND_FIX_ASSIGNED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Fund Fixed Assignment<br /><strong>@EndUserText.label</strong>: Fund Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Fund with Fixed Assignment<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-psm_grant_fix_assigned"></div>

### PSM_GRANT_FIX_ASSIGNED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Grant Fixed Assignment<br /><strong>@EndUserText.label</strong>: Grant Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Grant with Fixed Assignment<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-pstl2"></div>

### PSTL2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PO Box pcd<br /><strong>@EndUserText.label</strong>: P.O. Box Postal Code<br /><strong>@EndUserText.quickInfo</strong>: P.O. Box Postal Code<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-pstlz"></div>

### PSTLZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PostalCode<br /><strong>@EndUserText.label</strong>: Postal Code<br /><strong>@EndUserText.quickInfo</strong>: Postal Code<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-regio"></div>

### REGIO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Rg<br /><strong>@EndUserText.label</strong>: Region<br /><strong>@EndUserText.quickInfo</strong>: Region (State, Province, County)<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-spras"></div>

### SPRAS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Language<br /><strong>@EndUserText.label</strong>: Language Key<br /><strong>@EndUserText.quickInfo</strong>: Language Key</td></tr>
</table>

<div id="type-stras_gp"></div>

### STRAS_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Street<br /><strong>@EndUserText.label</strong>: Street<br /><strong>@EndUserText.quickInfo</strong>: Street and House Number</td></tr>
</table>

<div id="type-telbx"></div>

### TELBX

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(15)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Telebox<br /><strong>@EndUserText.label</strong>: Telebox Number<br /><strong>@EndUserText.quickInfo</strong>: Telebox Number</td></tr>
</table>

<div id="type-telf1"></div>

### TELF1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Telephone 1<br /><strong>@EndUserText.label</strong>: Telephone 1<br /><strong>@EndUserText.quickInfo</strong>: First telephone number</td></tr>
</table>

<div id="type-telf2"></div>

### TELF2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Telephone 2<br /><strong>@EndUserText.label</strong>: Telephone 2<br /><strong>@EndUserText.quickInfo</strong>: Second telephone number</td></tr>
</table>

<div id="type-telfx"></div>

### TELFX

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(31)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Fax Number<br /><strong>@EndUserText.label</strong>: Fax Number<br /><strong>@EndUserText.quickInfo</strong>: Fax Number</td></tr>
</table>

<div id="type-teltx"></div>

### TELTX

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(30)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Teletex Number<br /><strong>@EndUserText.label</strong>: Teletex Number<br /><strong>@EndUserText.quickInfo</strong>: Teletex Number</td></tr>
</table>

<div id="type-telx1"></div>

### TELX1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(30)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Telex Number<br /><strong>@EndUserText.label</strong>: Telex Number<br /><strong>@EndUserText.quickInfo</strong>: Telex Number</td></tr>
</table>

<div id="type-txjcd"></div>

### TXJCD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(15)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tax Jur.<br /><strong>@EndUserText.label</strong>: Tax Jurisdiction<br /><strong>@EndUserText.quickInfo</strong>: Tax Jurisdiction<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-verak"></div>

### VERAK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(20)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Person Responsible<br /><strong>@EndUserText.label</strong>: Person Responsible<br /><strong>@EndUserText.quickInfo</strong>: Person Responsible</td></tr>
</table>

<div id="type-verak_user"></div>

### VERAK_USER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: User Resp.<br /><strong>@EndUserText.label</strong>: User Responsible<br /><strong>@EndUserText.quickInfo</strong>: User Responsible<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-vmeth"></div>

### VMETH

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: AM<br /><strong>@EndUserText.label</strong>: Allocation Methods<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Allowed Allocation Methods<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-waers"></div>

### WAERS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Crcy<br /><strong>@EndUserText.label</strong>: Currency<br /><strong>@EndUserText.quickInfo</strong>: Currency Key<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

<div id="type-werks_d"></div>

### WERKS_D

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Plnt<br /><strong>@EndUserText.label</strong>: Plant<br /><strong>@EndUserText.quickInfo</strong>: Plant<br /><strong>@ObjectModel.upperCase</strong>: true</td></tr>
</table>

