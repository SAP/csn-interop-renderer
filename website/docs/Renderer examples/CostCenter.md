>This Data Product definition description was done using the <a href="https://sap.github.io/csn-interop-specification/spec-v1/csn-interop-effective" target="_blank">Core Schema Notation Interoperability (short: CSN Interop)</a> format.

## Entity Definitions

### CostCenter

@EndUserText.label: Cost Center<br />@ObjectModel.modelingPattern: <code>&lbrace;"#":"ANALYTICAL_DIMENSION"&rbrace;</code><br />@ObjectModel.representativeKey: <code>"CostCenter"</code><br />@ObjectModel.supportedCapabilities: <code>[&lbrace;"#":"ANALYTICAL_DIMENSION"&rbrace;,&lbrace;"#":"CDS_MODELING_ASSOCIATION_TARGET"&rbrace;,&lbrace;"#":"SQL_DATA_SOURCE"&rbrace;,&lbrace;"#":"CDS_MODELING_DATA_SOURCE"&rbrace;,&lbrace;"#":"EXTRACTION_DATA_SOURCE"&rbrace;]</code>

Elements: 

<table>
<tr><th>Element</th><th>Type</th><th>Description</th></tr><tr><td><strong id="costcenter-controllingarea">ControllingArea</strong><br /><br /></td><td><a href="#kokrs">KOKRS</a></td><td>key: <code>true</code><br />@EndUserText.heading: COAr<br />@EndUserText.label: Controlling Area<br />@EndUserText.quickInfo: Controlling Area<br />@ObjectModel.foreignKey.association: <code>"_ControllingArea"</code></td></tr>
<tr><td><strong id="costcenter-costcenter">CostCenter</strong><br /><br /></td><td><a href="#kostl">KOSTL</a></td><td>key: <code>true</code><br />@EndUserText.heading: Cost Ctr<br />@EndUserText.label: Cost Center<br />@EndUserText.quickInfo: Cost Center<br />@ObjectModel.text.association: <code>"_Text"</code></td></tr>
<tr><td><strong id="costcenter-validityenddate">ValidityEndDate</strong><br /><br /></td><td><a href="#datbi">DATBI</a></td><td>key: <code>true</code><br />@EndUserText.heading: to<br />@EndUserText.label: Valid To<br />@EndUserText.quickInfo: Valid To Date<br />@Semantics.businessDate.to: <code>true</code></td></tr>
<tr><td><strong id="costcenter-validitystartdate">ValidityStartDate</strong><br /><br /></td><td><a href="#datab">DATAB</a></td><td>@EndUserText.heading: Valid From<br />@EndUserText.label: Valid From<br />@EndUserText.quickInfo: Valid-From Date<br />@Semantics.businessDate.from: <code>true</code></td></tr>
<tr><td><strong id="costcenter-isblkdforprimarycostsposting">IsBlkdForPrimaryCostsPosting</strong><br /><br /></td><td><a href="#bkzkp">BKZKP</a></td><td>@EndUserText.heading: ActPri<br />@EndUserText.label: Actual primary costs<br />@EndUserText.quickInfo: Lock Indicator for Actual Primary Postings</td></tr>
<tr><td><strong id="costcenter-isblockedforplanprimarycosts">IsBlockedForPlanPrimaryCosts</strong><br /><br /></td><td><a href="#pkzkp">PKZKP</a></td><td>@EndUserText.heading: PlnPri<br />@EndUserText.label: Plan primary costs<br />@EndUserText.quickInfo: Lock Indicator for Plan Primary Costs</td></tr>
<tr><td><strong id="costcenter-companycode">CompanyCode</strong><br /><br /></td><td><a href="#bukrs">BUKRS</a></td><td>@EndUserText.heading: CoCd<br />@EndUserText.label: Company Code<br />@EndUserText.quickInfo: Company Code<br />@ObjectModel.foreignKey.association: <code>"_CompanyCode"</code></td></tr>
<tr><td><strong id="costcenter-businessarea">BusinessArea</strong><br /><br /></td><td><a href="#gsber">GSBER</a></td><td>@EndUserText.heading: BusA<br />@EndUserText.label: Business Area<br />@EndUserText.quickInfo: Business Area<br />@ObjectModel.foreignKey.association: <code>"_BusinessArea"</code></td></tr>
<tr><td><strong id="costcenter-costcentercategory">CostCenterCategory</strong><br /><br /></td><td><a href="#kosar">KOSAR</a></td><td>@EndUserText.heading: CCtC<br />@EndUserText.label: Cost Center Category<br />@EndUserText.quickInfo: Cost Center Category<br />@ObjectModel.foreignKey.association: <code>"_CostCenterCategory"</code></td></tr>
<tr><td><strong id="costcenter-costctrresponsiblepersonname">CostCtrResponsiblePersonName</strong><br /><br /></td><td><a href="#verak">VERAK</a></td><td>@EndUserText.heading: Person Responsible<br />@EndUserText.label: Person Responsible<br />@EndUserText.quickInfo: Person Responsible</td></tr>
<tr><td><strong id="costcenter-costctrresponsibleuser">CostCtrResponsibleUser</strong><br /><br /></td><td><a href="#verak_user">VERAK_USER</a></td><td>@EndUserText.heading: User Resp.<br />@EndUserText.label: User Responsible<br />@EndUserText.quickInfo: User Responsible<br />@ObjectModel.foreignKey.association: <code>"_UserRespContactCard"</code></td></tr>
<tr><td><strong id="costcenter-costcentercurrency">CostCenterCurrency</strong><br /><br /></td><td><a href="#waers">WAERS</a></td><td>@EndUserText.heading: Crcy<br />@EndUserText.label: Currency<br />@EndUserText.quickInfo: Currency Key<br />@ObjectModel.foreignKey.association: <code>"_Currency"</code><br />@Semantics.currencyCode: <code>true</code></td></tr>
<tr><td><strong id="costcenter-costingsheet">CostingSheet</strong><br /><br /></td><td><a href="#aufkalsm">AUFKALSM</a></td><td>@EndUserText.heading: CostSh<br />@EndUserText.label: Costing Sheet<br />@EndUserText.quickInfo: Costing Sheet<br />@ObjectModel.foreignKey.association: <code>"_CostingSheetProcedure"</code></td></tr>
<tr><td><strong id="costcenter-taxjurisdiction">TaxJurisdiction</strong><br /><br /></td><td><a href="#txjcd">TXJCD</a></td><td>@EndUserText.heading: Tax Jur.<br />@EndUserText.label: Tax Jurisdiction<br />@EndUserText.quickInfo: Tax Jurisdiction</td></tr>
<tr><td><strong id="costcenter-profitcenter">ProfitCenter</strong><br /><br /></td><td><a href="#prctr">PRCTR</a></td><td>@EndUserText.heading: Profit Ctr<br />@EndUserText.label: Profit Center<br />@EndUserText.quickInfo: Profit Center<br />@ObjectModel.foreignKey.association: <code>"_ProfitCenter"</code></td></tr>
<tr><td><strong id="costcenter-plant">Plant</strong><br /><br /></td><td><a href="#werks_d">WERKS_D</a></td><td>@EndUserText.heading: Plnt<br />@EndUserText.label: Plant<br />@EndUserText.quickInfo: Plant</td></tr>
<tr><td><strong id="costcenter-logicalsystem">LogicalSystem</strong><br /><br /></td><td><a href="#logsystem">LOGSYSTEM</a></td><td>@EndUserText.heading: Log.System<br />@EndUserText.label: Logical System<br />@EndUserText.quickInfo: Logical System</td></tr>
<tr><td><strong id="costcenter-costcentercreationdate">CostCenterCreationDate</strong><br /><br /></td><td><a href="#erfdt">ERFDT</a></td><td>@EndUserText.heading: Ent. On<br />@EndUserText.label: Entered On<br />@EndUserText.quickInfo: Entered On</td></tr>
<tr><td><strong id="costcenter-costcentercreatedbyuser">CostCenterCreatedByUser</strong><br /><br /></td><td><a href="#erfnm">ERFNM</a></td><td>@EndUserText.heading: Created By<br />@EndUserText.label: Created By<br />@EndUserText.quickInfo: Entered By<br />@ObjectModel.foreignKey.association: <code>"_UserCrtedContactCard"</code></td></tr>
<tr><td><strong id="costcenter-isblkdforsecondarycostsposting">IsBlkdForSecondaryCostsPosting</strong><br /><br /></td><td><a href="#bkzks">BKZKS</a></td><td>@EndUserText.heading: ActSec<br />@EndUserText.label: Actl Sec. Costs<br />@EndUserText.quickInfo: Lock Indicator for Actual Secondary Costs</td></tr>
<tr><td><strong id="costcenter-isblockedforrevenueposting">IsBlockedForRevenuePosting</strong><br /><br /></td><td><a href="#bkzer">BKZER</a></td><td>@EndUserText.heading: ActRev<br />@EndUserText.label: Actual Revenues<br />@EndUserText.quickInfo: Lock Indicator for Actual Revenue Postings</td></tr>
<tr><td><strong id="costcenter-isblockedforcommitmentposting">IsBlockedForCommitmentPosting</strong><br /><br /></td><td><a href="#bkzob">BKZOB</a></td><td>@EndUserText.heading: Cmmt<br />@EndUserText.label: Commitment Update<br />@EndUserText.quickInfo: Lock Indicator for Commitment Update</td></tr>
<tr><td><strong id="costcenter-isblockedforplansecondarycosts">IsBlockedForPlanSecondaryCosts</strong><br /><br /></td><td><a href="#fis_pkzks">FIS_PKZKS</a></td><td>@EndUserText.heading: Lock Plan Secondary Costs<br />@EndUserText.label: Lock Plan Sec Costs<br />@EndUserText.quickInfo: Lock Indicator for Plan Secondary Costs</td></tr>
<tr><td><strong id="costcenter-isblockedforplanrevenues">IsBlockedForPlanRevenues</strong><br /><br /></td><td><a href="#fis_pkzer">FIS_PKZER</a></td><td>@EndUserText.heading: Lock Planning Revenues<br />@EndUserText.label: Lock Planning Revn<br />@EndUserText.quickInfo: Lock Indicator for Planning Revenues</td></tr>
<tr><td><strong id="costcenter-costcenterallocationmethod">CostCenterAllocationMethod</strong><br /><br /></td><td><a href="#vmeth">VMETH</a></td><td>@EndUserText.heading: AM<br />@EndUserText.label: Allocation Methods<br />@EndUserText.quickInfo: Indicator for Allowed Allocation Methods</td></tr>
<tr><td><strong id="costcenter-consumptionqtyisrecorded">ConsumptionQtyIsRecorded</strong><br /><br /></td><td><a href="#mgefl">MGEFL</a></td><td>@EndUserText.heading: Qty<br />@EndUserText.label: Record Quantity<br />@EndUserText.quickInfo: Indicator for Recording Consumption Quantities</td></tr>
<tr><td><strong id="costcenter-department">Department</strong><br /><br /></td><td><a href="#abtei">ABTEI</a></td><td>@EndUserText.heading: Department<br />@EndUserText.label: Department<br />@EndUserText.quickInfo: Department</td></tr>
<tr><td><strong id="costcenter-subsequentcostcenter">SubsequentCostCenter</strong><br /><br /></td><td><a href="#nkost">NKOST</a></td><td>@EndUserText.heading: SCtr<br />@EndUserText.label: Subsequent Cost Ctr.<br />@EndUserText.quickInfo: Subsequent Cost Center</td></tr>
<tr><td><strong id="costcenter-conditionusage">ConditionUsage</strong><br /><br /></td><td><a href="#kvewe">KVEWE</a></td><td>@EndUserText.heading: U<br />@EndUserText.label: Usage<br />@EndUserText.quickInfo: Usage of the condition table</td></tr>
<tr><td><strong id="costcenter-conditionapplication">ConditionApplication</strong><br /><br /></td><td><a href="#kappl">KAPPL</a></td><td>@EndUserText.heading: App<br />@EndUserText.label: Application<br />@EndUserText.quickInfo: Application</td></tr>
<tr><td><strong id="costcenter-costcenteraccountingoverhead">CostCenterAccountingOverhead</strong><br /><br /></td><td><a href="#koszschl">KOSZSCHL</a></td><td>@EndUserText.heading: OH Key<br />@EndUserText.label: Overhead Key<br />@EndUserText.quickInfo: CO-CCA Overhead Key</td></tr>
<tr><td><strong id="costcenter-country">Country</strong><br /><br /></td><td><a href="#land1">LAND1</a></td><td>@EndUserText.heading: C/R<br />@EndUserText.label: Country/Region Key<br />@EndUserText.quickInfo: Country/Region Key<br />@ObjectModel.foreignKey.association: <code>"_Country"</code></td></tr>
<tr><td><strong id="costcenter-formofaddress">FormOfAddress</strong><br /><br /></td><td><a href="#anred">ANRED</a></td><td>@EndUserText.heading: Title<br />@EndUserText.label: Title<br />@EndUserText.quickInfo: Title</td></tr>
<tr><td><strong id="costcenter-addressname">AddressName</strong><br /><br /></td><td><a href="#name1_gp">NAME1_GP</a></td><td>@EndUserText.heading: Name<br />@EndUserText.label: Name<br />@EndUserText.quickInfo: Name</td></tr>
<tr><td><strong id="costcenter-addressadditionalname">AddressAdditionalName</strong><br /><br /></td><td><a href="#name2_gp">NAME2_GP</a></td><td>@EndUserText.heading: Name 2<br />@EndUserText.label: Name 2<br />@EndUserText.quickInfo: Name 2</td></tr>
<tr><td><strong id="costcenter-costcenteraddrname3">CostCenterAddrName3</strong><br /><br /></td><td><a href="#name3_gp">NAME3_GP</a></td><td>@EndUserText.heading: Name 3<br />@EndUserText.label: Name 3<br />@EndUserText.quickInfo: Name 3</td></tr>
<tr><td><strong id="costcenter-costcenteraddrname4">CostCenterAddrName4</strong><br /><br /></td><td><a href="#name4_gp">NAME4_GP</a></td><td>@EndUserText.heading: Name 4<br />@EndUserText.label: Name 4<br />@EndUserText.quickInfo: Name 4</td></tr>
<tr><td><strong id="costcenter-cityname">CityName</strong><br /><br /></td><td><a href="#ort01_gp">ORT01_GP</a></td><td>@EndUserText.heading: City<br />@EndUserText.label: City<br />@EndUserText.quickInfo: City</td></tr>
<tr><td><strong id="costcenter-district">District</strong><br /><br /></td><td><a href="#ort02_gp">ORT02_GP</a></td><td>@EndUserText.heading: District<br />@EndUserText.label: District<br />@EndUserText.quickInfo: District</td></tr>
<tr><td><strong id="costcenter-streetaddressname">StreetAddressName</strong><br /><br /></td><td><a href="#stras_gp">STRAS_GP</a></td><td>@EndUserText.heading: Street<br />@EndUserText.label: Street<br />@EndUserText.quickInfo: Street and House Number</td></tr>
<tr><td><strong id="costcenter-pobox">POBox</strong><br /><br /></td><td><a href="#pfach">PFACH</a></td><td>@EndUserText.heading: PO Box<br />@EndUserText.label: PO Box<br />@EndUserText.quickInfo: PO Box</td></tr>
<tr><td><strong id="costcenter-postalcode">PostalCode</strong><br /><br /></td><td><a href="#pstlz">PSTLZ</a></td><td>@EndUserText.heading: PostalCode<br />@EndUserText.label: Postal Code<br />@EndUserText.quickInfo: Postal Code</td></tr>
<tr><td><strong id="costcenter-poboxpostalcode">POBoxPostalCode</strong><br /><br /></td><td><a href="#pstl2">PSTL2</a></td><td>@EndUserText.heading: PO Box pcd<br />@EndUserText.label: P.O. Box Postal Code<br />@EndUserText.quickInfo: P.O. Box Postal Code</td></tr>
<tr><td><strong id="costcenter-region">Region</strong><br /><br /></td><td><a href="#regio">REGIO</a></td><td>@EndUserText.heading: Rg<br />@EndUserText.label: Region<br />@EndUserText.quickInfo: Region (State, Province, County)<br />@ObjectModel.foreignKey.association: <code>"_Region"</code></td></tr>
<tr><td><strong id="costcenter-language">Language</strong><br /><br /></td><td><a href="#spras">SPRAS</a></td><td>@EndUserText.heading: Language<br />@EndUserText.label: Language Key<br />@EndUserText.quickInfo: Language Key<br />@ObjectModel.foreignKey.association: <code>"_Language"</code></td></tr>
<tr><td><strong id="costcenter-teleboxnumber">TeleboxNumber</strong><br /><br /></td><td><a href="#telbx">TELBX</a></td><td>@EndUserText.heading: Telebox<br />@EndUserText.label: Telebox Number<br />@EndUserText.quickInfo: Telebox Number</td></tr>
<tr><td><strong id="costcenter-phonenumber1">PhoneNumber1</strong><br /><br /></td><td><a href="#telf1">TELF1</a></td><td>@EndUserText.heading: Telephone 1<br />@EndUserText.label: Telephone 1<br />@EndUserText.quickInfo: First telephone number</td></tr>
<tr><td><strong id="costcenter-phonenumber2">PhoneNumber2</strong><br /><br /></td><td><a href="#telf2">TELF2</a></td><td>@EndUserText.heading: Telephone 2<br />@EndUserText.label: Telephone 2<br />@EndUserText.quickInfo: Second telephone number</td></tr>
<tr><td><strong id="costcenter-faxnumber">FaxNumber</strong><br /><br /></td><td><a href="#telfx">TELFX</a></td><td>@EndUserText.heading: Fax Number<br />@EndUserText.label: Fax Number<br />@EndUserText.quickInfo: Fax Number</td></tr>
<tr><td><strong id="costcenter-teletexnumber">TeletexNumber</strong><br /><br /></td><td><a href="#teltx">TELTX</a></td><td>@EndUserText.heading: Teletex Number<br />@EndUserText.label: Teletex Number<br />@EndUserText.quickInfo: Teletex Number</td></tr>
<tr><td><strong id="costcenter-telexnumber">TelexNumber</strong><br /><br /></td><td><a href="#telx1">TELX1</a></td><td>@EndUserText.heading: Telex Number<br />@EndUserText.label: Telex Number<br />@EndUserText.quickInfo: Telex Number</td></tr>
<tr><td><strong id="costcenter-datacommunicationphonenumber">DataCommunicationPhoneNumber</strong><br /><br /></td><td><a href="#datlt">DATLT</a></td><td>@EndUserText.heading: Data line<br />@EndUserText.label: Data line<br />@EndUserText.quickInfo: Data communication line no.</td></tr>
<tr><td><strong id="costcenter-costcenterprinterdestination">CostCenterPrinterDestination</strong><br /><br /></td><td><a href="#kdnam">KDNAM</a></td><td>@EndUserText.heading: Prin<br />@EndUserText.label: Printer Destination<br />@EndUserText.quickInfo: Printer Destination for CCtr Report</td></tr>
<tr><td><strong id="costcenter-costcenterstandardhierarea">CostCenterStandardHierArea</strong><br /><br /></td><td><a href="#khinr">KHINR</a></td><td>@EndUserText.heading: Area<br />@EndUserText.label: Hierarchy Area<br />@EndUserText.quickInfo: Standard Hierarchy Area</td></tr>
<tr><td><strong id="costcenter-costcollector">CostCollector</strong><br /><br /></td><td><a href="#cckey">CCKEY</a></td><td>@EndUserText.heading: Cost Collector Key<br />@EndUserText.label: Cost Collector Key<br />@EndUserText.quickInfo: Cost Collector Key</td></tr>
<tr><td><strong id="costcenter-costcenteriscomplete">CostCenterIsComplete</strong><br /><br /></td><td><a href="#kskom">KSKOM</a></td><td>@EndUserText.heading: Complete<br />@EndUserText.label: Complete<br />@EndUserText.quickInfo: Completion Flag for the Cost Center Master Record</td></tr>
<tr><td><strong id="costcenter-isstatisticalcostcenter">IsStatisticalCostCenter</strong><br /><br /></td><td><a href="#fins_xkostl_stat">FINS_XKOSTL_STAT</a></td><td>@EndUserText.heading: CC Stat.<br />@EndUserText.label: Cost Center Is Stat.<br />@EndUserText.quickInfo: Indicator: Cost Center is Statistical Account Assignment</td></tr>
<tr><td><strong id="costcenter-objectinternalid">ObjectInternalID</strong><br /><br /></td><td><a href="#j_objnr">J_OBJNR</a></td><td>@EndUserText.heading: Object Number<br />@EndUserText.label: Object Number<br />@EndUserText.quickInfo: Object Number</td></tr>
<tr><td><strong id="costcenter-costcenterfunction">CostCenterFunction</strong><br /><br /></td><td><a href="#funkt_dlk">FUNKT_DLK</a></td><td>@EndUserText.heading: Fct<br />@EndUserText.label: Function<br />@EndUserText.quickInfo: Function of Cost Center</td></tr>
<tr><td><strong id="costcenter-costcenteralternativefunction">CostCenterAlternativeFunction</strong><br /><br /></td><td><a href="#afunk_dlk">AFUNK_DLK</a></td><td>@EndUserText.heading: A.Fnc<br />@EndUserText.label: Altern. Function<br />@EndUserText.quickInfo: Alternative Function of Cost Center</td></tr>
<tr><td><strong id="costcenter-functionalarea">FunctionalArea</strong><br /><br /></td><td><a href="#fkber">FKBER</a></td><td>@EndUserText.heading: Functional Area<br />@EndUserText.label: Functional Area<br />@EndUserText.quickInfo: Functional Area<br />@ObjectModel.foreignKey.association: <code>"_FunctionalArea"</code></td></tr>
<tr><td><strong id="costcenter-actyindepformulaplanningtmpl">ActyIndepFormulaPlanningTmpl</strong><br /><br /></td><td><a href="#cca_templ_cpi">CCA_TEMPL_CPI</a></td><td>@EndUserText.heading: Act-Ind.Temp<br />@EndUserText.label: Activity-Indep.Temp.<br />@EndUserText.quickInfo: Template for Activity-Independent Formula Planning<br />@ObjectModel.foreignKey.association: <code>"_ActivityBasedCostingTmplCpi"</code></td></tr>
<tr><td><strong id="costcenter-actydepdntformulaplanningtmpl">ActyDepdntFormulaPlanningTmpl</strong><br /><br /></td><td><a href="#cca_templ_cpd">CCA_TEMPL_CPD</a></td><td>@EndUserText.heading: Activity-Dep.Tmp<br />@EndUserText.label: Activity-Dep.Tmp<br />@EndUserText.quickInfo: Template for Activity-Dependent Formula Planning<br />@ObjectModel.foreignKey.association: <code>"_ActivityBasedCostingTmplCpd"</code></td></tr>
<tr><td><strong id="costcenter-actyindependentallocationtmpl">ActyIndependentAllocationTmpl</strong><br /><br /></td><td><a href="#cca_templ_sci">CCA_TEMPL_SCI</a></td><td>@EndUserText.heading: ActyIndTemplAlloc<br />@EndUserText.label: Acty-IndepTemplAlloc<br />@EndUserText.quickInfo: Template: Activity-Independent Allocation to Cost Center<br />@ObjectModel.foreignKey.association: <code>"_ActivityBasedCostingTmplSci"</code></td></tr>
<tr><td><strong id="costcenter-actydependentallocationtmpl">ActyDependentAllocationTmpl</strong><br /><br /></td><td><a href="#cca_templ_scd">CCA_TEMPL_SCD</a></td><td>@EndUserText.heading: ActyDepTemplAlloc<br />@EndUserText.label: Acty-Dep Templ.Alloc<br />@EndUserText.quickInfo: Template: Activity-Dependent Allocation to Cost Center<br />@ObjectModel.foreignKey.association: <code>"_ActivityBasedCostingTmplScd"</code></td></tr>
<tr><td><strong id="costcenter-actlindepstatisticalkeyfigures">ActlIndepStatisticalKeyFigures</strong><br /><br /></td><td><a href="#cca_templ_ski">CCA_TEMPL_SKI</a></td><td>@EndUserText.heading: Templ.: Act. Stat. Key Figure<br />@EndUserText.label: Templ.: Stat. KF<br />@EndUserText.quickInfo: CCA_TEMPL_SKI<br />@ObjectModel.foreignKey.association: <code>"_ActivityBasedCostingTmplSki"</code></td></tr>
<tr><td><strong id="costcenter-actldepstatisticalkeyfigures">ActlDepStatisticalKeyFigures</strong><br /><br /></td><td><a href="#cca_templ_skd">CCA_TEMPL_SKD</a></td><td>@EndUserText.heading: Templ.: Act. Stat. Key Figure<br />@EndUserText.label: Templ.: Stat. KF<br />@EndUserText.quickInfo: Template: Act. Stat. Key Figure - Cost Center/Activity Type<br />@ObjectModel.foreignKey.association: <code>"_ActivityBasedCostingTmplSkd"</code></td></tr>
<tr><td><strong id="costcenter-jointventure">JointVenture</strong><br /><br /></td><td><a href="#jv_name">JV_NAME</a></td><td>@EndUserText.heading: JV<br />@EndUserText.label: Joint Venture<br />@EndUserText.quickInfo: Joint Venture</td></tr>
<tr><td><strong id="costcenter-jointventurerecoverycode">JointVentureRecoveryCode</strong><br /><br /></td><td><a href="#jv_recind">JV_RECIND</a></td><td>@EndUserText.heading: RI<br />@EndUserText.label: Recovery Indicator<br />@EndUserText.quickInfo: Recovery Indicator</td></tr>
<tr><td><strong id="costcenter-jointventureequitytype">JointVentureEquityType</strong><br /><br /></td><td><a href="#jv_etype">JV_ETYPE</a></td><td>@EndUserText.heading: ET<br />@EndUserText.label: Equity Type<br />@EndUserText.quickInfo: Equity Type</td></tr>
<tr><td><strong id="costcenter-jointventureobjecttype">JointVentureObjectType</strong><br /><br /></td><td><a href="#jv_otype">JV_OTYPE</a></td><td>@EndUserText.heading: Type<br />@EndUserText.label: JV Object Type<br />@EndUserText.quickInfo: Joint Venture Object Type</td></tr>
<tr><td><strong id="costcenter-jointventureclass">JointVentureClass</strong><br /><br /></td><td><a href="#jv_jibcl">JV_JIBCL</a></td><td>@EndUserText.heading: Class<br />@EndUserText.label: JIB/JIBE Class<br />@EndUserText.quickInfo: JIB/JIBE Class</td></tr>
<tr><td><strong id="costcenter-jointventuresubclass">JointVentureSubClass</strong><br /><br /></td><td><a href="#jv_jibsa">JV_JIBSA</a></td><td>@EndUserText.heading: SCl A<br />@EndUserText.label: JIB/JIBE Subclass A<br />@EndUserText.quickInfo: JIB/JIBE Subclass A</td></tr>
<tr><td><strong id="costcenter-budgetcarryingcostcenter">BudgetCarryingCostCenter</strong><br /><br /></td><td><a href="#fco_budget_carrying_cost_ctr">FCO_BUDGET_CARRYING_COST_CTR</a></td><td>@EndUserText.heading: Budget CC<br />@EndUserText.label: Budget Cost Center<br />@EndUserText.quickInfo: Budget-Carrying Cost Center</td></tr>
<tr><td><strong id="costcenter-availabilitycontrolprofile">AvailabilityControlProfile</strong><br /><br /></td><td><a href="#fco_avc_profile">FCO_AVC_PROFILE</a></td><td>@EndUserText.heading: Profile<br />@EndUserText.label: Availy Ctrl Prfl<br />@EndUserText.quickInfo: Budget Availability Control: Profile</td></tr>
<tr><td><strong id="costcenter-availabilitycontrolisactive">AvailabilityControlIsActive</strong><br /><br /></td><td><a href="#fco_avc_for_cost_center_active">FCO_AVC_FOR_COST_CENTER_ACTIVE</a></td><td>@EndUserText.heading: AVC Active<br />@EndUserText.label: AVC is Active<br />@EndUserText.quickInfo: Budget Availability Control for Cost Centers is Active</td></tr>
<tr><td><strong id="costcenter-fund">Fund</strong><br /><br /></td><td><a href="#bp_geber">BP_GEBER</a></td><td>@EndUserText.heading: Fund<br />@EndUserText.label: Fund<br />@EndUserText.quickInfo: Fund</td></tr>
<tr><td><strong id="costcenter-grantid">GrantID</strong><br /><br /></td><td><a href="#gm_grant_nbr">GM_GRANT_NBR</a></td><td>@EndUserText.heading: Grant<br />@EndUserText.label: Grant<br />@EndUserText.quickInfo: Grant</td></tr>
<tr><td><strong id="costcenter-fundisfixassigned">FundIsFixAssigned</strong><br /><br /></td><td><a href="#psm_fund_fix_assigned">PSM_FUND_FIX_ASSIGNED</a></td><td>@EndUserText.heading: Fund Fixed Assignment<br />@EndUserText.label: Fund Fixed Assignment<br />@EndUserText.quickInfo: Indicator for Fund with Fixed Assignment</td></tr>
<tr><td><strong id="costcenter-grantidisfixassigned">GrantIDIsFixAssigned</strong><br /><br /></td><td><a href="#psm_grant_fix_assigned">PSM_GRANT_FIX_ASSIGNED</a></td><td>@EndUserText.heading: Grant Fixed Assignment<br />@EndUserText.label: Grant Fixed Assignment<br />@EndUserText.quickInfo: Indicator for Grant with Fixed Assignment</td></tr>
<tr><td><strong id="costcenter-functionalareaisfixassigned">FunctionalAreaIsFixAssigned</strong><br /><br /></td><td><a href="#psm_func_area_fix_assigned">PSM_FUNC_AREA_FIX_ASSIGNED</a></td><td>@EndUserText.heading: Functional Area Fixed Assignment<br />@EndUserText.label: Functional Area Fixed Assignment<br />@EndUserText.quickInfo: Indicator for Functional Area with Fixed Assignment</td></tr>
<tr><td><strong id="costcenter-costcenterlastchangedbyuser">CostCenterLastChangedByUser</strong><br /><br /></td><td><a href="#fco_last_changed_by">FCO_LAST_CHANGED_BY</a></td><td>@EndUserText.heading: Last Changed By<br />@EndUserText.label: Last Changed By<br />@EndUserText.quickInfo: Last Changed By<br />@ObjectModel.foreignKey.association: <code>"_LastChangedByUserContactCard"</code></td></tr>
<tr><td><strong id="costcenter-costcenterlastchangedondate">CostCenterLastChangedOnDate</strong><br /><br /></td><td><a href="#fco_last_changed_on">FCO_LAST_CHANGED_ON</a></td><td>@EndUserText.heading: Last Changed On<br />@EndUserText.label: Last Changed On<br />@EndUserText.quickInfo: Last Changed On</td></tr>
<tr><td><strong id="costcenter-costcenterlastchangedattime">CostCenterLastChangedAtTime</strong><br /><br /></td><td><a href="#fco_last_changed_at">FCO_LAST_CHANGED_AT</a></td><td>@EndUserText.heading: Last Changed At<br />@EndUserText.label: Last Changed At<br />@EndUserText.quickInfo: Last Changed At</td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplcpd">_ActivityBasedCostingTmplCpd</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplcpi">_ActivityBasedCostingTmplCpi</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplscd">_ActivityBasedCostingTmplScd</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplsci">_ActivityBasedCostingTmplSci</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplskd">_ActivityBasedCostingTmplSkd</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplski">_ActivityBasedCostingTmplSki</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_availabilityctrlprofile">_AvailabilityCtrlProfile</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_availabilityctrlprofile">I_AvailabilityCtrlProfile</a> (path: <a href="#i_availabilityctrlprofile">I_AvailabilityCtrlProfile</a>.<a href="#i_availabilityctrlprofile-availabilitycontrolprofile">AvailabilityControlProfile</a>) via <a href="#costcenter-availabilitycontrolprofile">AvailabilityControlProfile</a></td></tr>
<tr><td><strong id="costcenter-_businessarea">_BusinessArea</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_businessarea">I_BusinessArea</a> (path: <a href="#i_businessarea">I_BusinessArea</a>.<a href="#i_businessarea-businessarea">BusinessArea</a>) via <a href="#costcenter-businessarea">BusinessArea</a></td></tr>
<tr><td><strong id="costcenter-_companycode">_CompanyCode</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_companycode">I_CompanyCode</a> (path: <a href="#i_companycode">I_CompanyCode</a>.<a href="#i_companycode-companycode">CompanyCode</a>) via <a href="#costcenter-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="costcenter-_controllingarea">_ControllingArea</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_controllingarea">I_ControllingArea</a> (path: <a href="#i_controllingarea">I_ControllingArea</a>.<a href="#i_controllingarea-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_costcentercategory">_CostCenterCategory</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_costcentercategory">I_CostCenterCategory</a> (path: <a href="#i_costcentercategory">I_CostCenterCategory</a>.<a href="#i_costcentercategory-costcentercategory">CostCenterCategory</a>) via <a href="#costcenter-costcentercategory">CostCenterCategory</a></td></tr>
<tr><td><strong id="costcenter-_costcenterhierarchynode">_CostCenterHierarchyNode</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#i_costcenterhierarchynode">I_CostCenterHierarchyNode</a> (path: <a href="#i_costcenterhierarchynode">I_CostCenterHierarchyNode</a>.<a href="#i_costcenterhierarchynode-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_costingsheetprocedure">_CostingSheetProcedure</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_costingsheetprocedure">I_CostingSheetProcedure</a> (path: <a href="#i_costingsheetprocedure">I_CostingSheetProcedure</a>.<a href="#i_costingsheetprocedure-conditionusage">ConditionUsage</a>) via <a href="#costcenter"></a></td></tr>
<tr><td><strong id="costcenter-_country">_Country</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_country">I_Country</a> (path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#costcenter-country">Country</a></td></tr>
<tr><td><strong id="costcenter-_currency">_Currency</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_currency">I_Currency</a> (path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#costcenter-costcentercurrency">CostCenterCurrency</a></td></tr>
<tr><td><strong id="costcenter-_functionalarea">_FunctionalArea</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_functionalarea">I_FunctionalArea</a> (path: <a href="#i_functionalarea">I_FunctionalArea</a>.<a href="#i_functionalarea-functionalarea">FunctionalArea</a>) via <a href="#costcenter-functionalarea">FunctionalArea</a></td></tr>
<tr><td><strong id="costcenter-_language">_Language</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_language">I_Language</a> (path: <a href="#i_language">I_Language</a>.<a href="#i_language-language">Language</a>) via <a href="#costcenter-language">Language</a></td></tr>
<tr><td><strong id="costcenter-_lastchangedbyusercontactcard">_LastChangedByUserContactCard</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_usercontactcard">I_UserContactCard</a> (path: <a href="#i_usercontactcard">I_UserContactCard</a>.<a href="#i_usercontactcard-contactcardid">ContactCardID</a>) via <a href="#costcenter-costcenterlastchangedbyuser">CostCenterLastChangedByUser</a></td></tr>
<tr><td><strong id="costcenter-_profitcenter">_ProfitCenter</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#i_profitcenter">I_ProfitCenter</a> (path: <a href="#i_profitcenter">I_ProfitCenter</a>.<a href="#i_profitcenter-profitcenter">ProfitCenter</a>) via <a href="#costcenter-profitcenter">ProfitCenter</a></td></tr>
<tr><td><strong id="costcenter-_region">_Region</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_region">I_Region</a> (path: <a href="#i_region">I_Region</a>.<a href="#i_region-region">Region</a>) via <a href="#costcenter-region">Region</a></td></tr>
<tr><td><strong id="costcenter-_text">_Text</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#i_costcentertext">I_CostCenterText</a> (path: <a href="#i_costcentertext">I_CostCenterText</a>.<a href="#i_costcentertext-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_usercrtedcontactcard">_UserCrtedContactCard</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_usercontactcard">I_UserContactCard</a> (path: <a href="#i_usercontactcard">I_UserContactCard</a>.<a href="#i_usercontactcard-contactcardid">ContactCardID</a>) via <a href="#costcenter-costcentercreatedbyuser">CostCenterCreatedByUser</a></td></tr>
<tr><td><strong id="costcenter-_userrespcontactcard">_UserRespContactCard</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_usercontactcard">I_UserContactCard</a> (path: <a href="#i_usercontactcard">I_UserContactCard</a>.<a href="#i_usercontactcard-contactcardid">ContactCardID</a>) via <a href="#costcenter-costctrresponsibleuser">CostCtrResponsibleUser</a></td></tr>
</table>

## Type Definitions

### ABTEI

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td>@EndUserText.heading: Department<br />@EndUserText.label: Department<br />@EndUserText.quickInfo: Department</td></tr>
</table>

### AFUNK_DLK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: A.Fnc<br />@EndUserText.label: Altern. Function<br />@EndUserText.quickInfo: Alternative Function of Cost Center</td></tr>
</table>

### ANRED

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(15)</td><td>@EndUserText.heading: Title<br />@EndUserText.label: Title<br />@EndUserText.quickInfo: Title</td></tr>
</table>

### AUFKALSM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td>@EndUserText.heading: CostSh<br />@EndUserText.label: Costing Sheet<br />@EndUserText.quickInfo: Costing Sheet</td></tr>
</table>

### BKZER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: ActRev<br />@EndUserText.label: Actual Revenues<br />@EndUserText.quickInfo: Lock Indicator for Actual Revenue Postings</td></tr>
</table>

### BKZKP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: ActPri<br />@EndUserText.label: Actual primary costs<br />@EndUserText.quickInfo: Lock Indicator for Actual Primary Postings</td></tr>
</table>

### BKZKS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: ActSec<br />@EndUserText.label: Actl Sec. Costs<br />@EndUserText.quickInfo: Lock Indicator for Actual Secondary Costs</td></tr>
</table>

### BKZOB

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: Cmmt<br />@EndUserText.label: Commitment Update<br />@EndUserText.quickInfo: Lock Indicator for Commitment Update</td></tr>
</table>

### BP_GEBER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Fund<br />@EndUserText.label: Fund<br />@EndUserText.quickInfo: Fund</td></tr>
</table>

### BUKRS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: CoCd<br />@EndUserText.label: Company Code<br />@EndUserText.quickInfo: Company Code</td></tr>
</table>

### CCA_TEMPL_CPD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Activity-Dep.Tmp<br />@EndUserText.label: Activity-Dep.Tmp<br />@EndUserText.quickInfo: Template for Activity-Dependent Formula Planning</td></tr>
</table>

### CCA_TEMPL_CPI

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Act-Ind.Temp<br />@EndUserText.label: Activity-Indep.Temp.<br />@EndUserText.quickInfo: Template for Activity-Independent Formula Planning</td></tr>
</table>

### CCA_TEMPL_SCD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: ActyDepTemplAlloc<br />@EndUserText.label: Acty-Dep Templ.Alloc<br />@EndUserText.quickInfo: Template: Activity-Dependent Allocation to Cost Center</td></tr>
</table>

### CCA_TEMPL_SCI

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: ActyIndTemplAlloc<br />@EndUserText.label: Acty-IndepTemplAlloc<br />@EndUserText.quickInfo: Template: Activity-Independent Allocation to Cost Center</td></tr>
</table>

### CCA_TEMPL_SKD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Templ.: Act. Stat. Key Figure<br />@EndUserText.label: Templ.: Stat. KF<br />@EndUserText.quickInfo: Template: Act. Stat. Key Figure - Cost Center/Activity Type</td></tr>
</table>

### CCA_TEMPL_SKI

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Templ.: Act. Stat. Key Figure<br />@EndUserText.label: Templ.: Stat. KF<br />@EndUserText.quickInfo: CCA_TEMPL_SKI</td></tr>
</table>

### CCKEY

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(23)</td><td>@EndUserText.heading: Cost Collector Key<br />@EndUserText.label: Cost Collector Key<br />@EndUserText.quickInfo: Cost Collector Key</td></tr>
</table>

### DATAB

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td>@EndUserText.heading: Valid From<br />@EndUserText.label: Valid From<br />@EndUserText.quickInfo: Valid-From Date</td></tr>
</table>

### DATBI

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td>@EndUserText.heading: to<br />@EndUserText.label: Valid To<br />@EndUserText.quickInfo: Valid To Date</td></tr>
</table>

### DATLT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(14)</td><td>@EndUserText.heading: Data line<br />@EndUserText.label: Data line<br />@EndUserText.quickInfo: Data communication line no.</td></tr>
</table>

### ERFDT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td>@EndUserText.heading: Ent. On<br />@EndUserText.label: Entered On<br />@EndUserText.quickInfo: Entered On</td></tr>
</table>

### ERFNM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td>@EndUserText.heading: Created By<br />@EndUserText.label: Created By<br />@EndUserText.quickInfo: Entered By</td></tr>
</table>

### FCO_AVC_FOR_COST_CENTER_ACTIVE

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: AVC Active<br />@EndUserText.label: AVC is Active<br />@EndUserText.quickInfo: Budget Availability Control for Cost Centers is Active</td></tr>
</table>

### FCO_AVC_PROFILE

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td>@EndUserText.heading: Profile<br />@EndUserText.label: Availy Ctrl Prfl<br />@EndUserText.quickInfo: Budget Availability Control: Profile</td></tr>
</table>

### FCO_BUDGET_CARRYING_COST_CTR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Budget CC<br />@EndUserText.label: Budget Cost Center<br />@EndUserText.quickInfo: Budget-Carrying Cost Center</td></tr>
</table>

### FCO_LAST_CHANGED_AT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Time</td><td>@EndUserText.heading: Last Changed At<br />@EndUserText.label: Last Changed At<br />@EndUserText.quickInfo: Last Changed At</td></tr>
</table>

### FCO_LAST_CHANGED_BY

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td>@EndUserText.heading: Last Changed By<br />@EndUserText.label: Last Changed By<br />@EndUserText.quickInfo: Last Changed By</td></tr>
</table>

### FCO_LAST_CHANGED_ON

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td>@EndUserText.heading: Last Changed On<br />@EndUserText.label: Last Changed On<br />@EndUserText.quickInfo: Last Changed On</td></tr>
</table>

### FINS_XKOSTL_STAT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: CC Stat.<br />@EndUserText.label: Cost Center Is Stat.<br />@EndUserText.quickInfo: Indicator: Cost Center is Statistical Account Assignment</td></tr>
</table>

### FIS_PKZER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: Lock Planning Revenues<br />@EndUserText.label: Lock Planning Revn<br />@EndUserText.quickInfo: Lock Indicator for Planning Revenues</td></tr>
</table>

### FIS_PKZKS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: Lock Plan Secondary Costs<br />@EndUserText.label: Lock Plan Sec Costs<br />@EndUserText.quickInfo: Lock Indicator for Plan Secondary Costs</td></tr>
</table>

### FKBER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(16)</td><td>@EndUserText.heading: Functional Area<br />@EndUserText.label: Functional Area<br />@EndUserText.quickInfo: Functional Area</td></tr>
</table>

### FUNKT_DLK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: Fct<br />@EndUserText.label: Function<br />@EndUserText.quickInfo: Function of Cost Center</td></tr>
</table>

### GM_GRANT_NBR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(20)</td><td>@EndUserText.heading: Grant<br />@EndUserText.label: Grant<br />@EndUserText.quickInfo: Grant</td></tr>
</table>

### GSBER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: BusA<br />@EndUserText.label: Business Area<br />@EndUserText.quickInfo: Business Area</td></tr>
</table>

### JV_ETYPE

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: ET<br />@EndUserText.label: Equity Type<br />@EndUserText.quickInfo: Equity Type</td></tr>
</table>

### JV_JIBCL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: Class<br />@EndUserText.label: JIB/JIBE Class<br />@EndUserText.quickInfo: JIB/JIBE Class</td></tr>
</table>

### JV_JIBSA

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(5)</td><td>@EndUserText.heading: SCl A<br />@EndUserText.label: JIB/JIBE Subclass A<br />@EndUserText.quickInfo: JIB/JIBE Subclass A</td></tr>
</table>

### JV_NAME

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td>@EndUserText.heading: JV<br />@EndUserText.label: Joint Venture<br />@EndUserText.quickInfo: Joint Venture</td></tr>
</table>

### JV_OTYPE

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: Type<br />@EndUserText.label: JV Object Type<br />@EndUserText.quickInfo: Joint Venture Object Type</td></tr>
</table>

### JV_RECIND

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: RI<br />@EndUserText.label: Recovery Indicator<br />@EndUserText.quickInfo: Recovery Indicator</td></tr>
</table>

### J_OBJNR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(22)</td><td>@EndUserText.heading: Object Number<br />@EndUserText.label: Object Number<br />@EndUserText.quickInfo: Object Number</td></tr>
</table>

### KAPPL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: App<br />@EndUserText.label: Application<br />@EndUserText.quickInfo: Application</td></tr>
</table>

### KDNAM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: Prin<br />@EndUserText.label: Printer Destination<br />@EndUserText.quickInfo: Printer Destination for CCtr Report</td></tr>
</table>

### KHINR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td>@EndUserText.heading: Area<br />@EndUserText.label: Hierarchy Area<br />@EndUserText.quickInfo: Standard Hierarchy Area</td></tr>
</table>

### KOKRS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: COAr<br />@EndUserText.label: Controlling Area<br />@EndUserText.quickInfo: Controlling Area</td></tr>
</table>

### KOSAR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: CCtC<br />@EndUserText.label: Cost Center Category<br />@EndUserText.quickInfo: Cost Center Category</td></tr>
</table>

### KOSTL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Cost Ctr<br />@EndUserText.label: Cost Center<br />@EndUserText.quickInfo: Cost Center</td></tr>
</table>

### KOSZSCHL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td>@EndUserText.heading: OH Key<br />@EndUserText.label: Overhead Key<br />@EndUserText.quickInfo: CO-CCA Overhead Key</td></tr>
</table>

### KSKOM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: Complete<br />@EndUserText.label: Complete<br />@EndUserText.quickInfo: Completion Flag for the Cost Center Master Record</td></tr>
</table>

### KVEWE

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: U<br />@EndUserText.label: Usage<br />@EndUserText.quickInfo: Usage of the condition table</td></tr>
</table>

### LAND1

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: C/R<br />@EndUserText.label: Country/Region Key<br />@EndUserText.quickInfo: Country/Region Key</td></tr>
</table>

### LOGSYSTEM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Log.System<br />@EndUserText.label: Logical System<br />@EndUserText.quickInfo: Logical System</td></tr>
</table>

### MGEFL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: Qty<br />@EndUserText.label: Record Quantity<br />@EndUserText.quickInfo: Indicator for Recording Consumption Quantities</td></tr>
</table>

### NAME1_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td>@EndUserText.heading: Name<br />@EndUserText.label: Name<br />@EndUserText.quickInfo: Name</td></tr>
</table>

### NAME2_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td>@EndUserText.heading: Name 2<br />@EndUserText.label: Name 2<br />@EndUserText.quickInfo: Name 2</td></tr>
</table>

### NAME3_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td>@EndUserText.heading: Name 3<br />@EndUserText.label: Name 3<br />@EndUserText.quickInfo: Name 3</td></tr>
</table>

### NAME4_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td>@EndUserText.heading: Name 4<br />@EndUserText.label: Name 4<br />@EndUserText.quickInfo: Name 4</td></tr>
</table>

### NKOST

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: SCtr<br />@EndUserText.label: Subsequent Cost Ctr.<br />@EndUserText.quickInfo: Subsequent Cost Center</td></tr>
</table>

### ORT01_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td>@EndUserText.heading: City<br />@EndUserText.label: City<br />@EndUserText.quickInfo: City</td></tr>
</table>

### ORT02_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td>@EndUserText.heading: District<br />@EndUserText.label: District<br />@EndUserText.quickInfo: District</td></tr>
</table>

### PFACH

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: PO Box<br />@EndUserText.label: PO Box<br />@EndUserText.quickInfo: PO Box</td></tr>
</table>

### PKZKP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: PlnPri<br />@EndUserText.label: Plan primary costs<br />@EndUserText.quickInfo: Lock Indicator for Plan Primary Costs</td></tr>
</table>

### PRCTR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Profit Ctr<br />@EndUserText.label: Profit Center<br />@EndUserText.quickInfo: Profit Center</td></tr>
</table>

### PSM_FUNC_AREA_FIX_ASSIGNED

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: Functional Area Fixed Assignment<br />@EndUserText.label: Functional Area Fixed Assignment<br />@EndUserText.quickInfo: Indicator for Functional Area with Fixed Assignment</td></tr>
</table>

### PSM_FUND_FIX_ASSIGNED

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: Fund Fixed Assignment<br />@EndUserText.label: Fund Fixed Assignment<br />@EndUserText.quickInfo: Indicator for Fund with Fixed Assignment</td></tr>
</table>

### PSM_GRANT_FIX_ASSIGNED

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: Grant Fixed Assignment<br />@EndUserText.label: Grant Fixed Assignment<br />@EndUserText.quickInfo: Indicator for Grant with Fixed Assignment</td></tr>
</table>

### PSTL2

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: PO Box pcd<br />@EndUserText.label: P.O. Box Postal Code<br />@EndUserText.quickInfo: P.O. Box Postal Code</td></tr>
</table>

### PSTLZ

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: PostalCode<br />@EndUserText.label: Postal Code<br />@EndUserText.quickInfo: Postal Code</td></tr>
</table>

### REGIO

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: Rg<br />@EndUserText.label: Region<br />@EndUserText.quickInfo: Region (State, Province, County)</td></tr>
</table>

### SPRAS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: Language<br />@EndUserText.label: Language Key<br />@EndUserText.quickInfo: Language Key</td></tr>
</table>

### STRAS_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td>@EndUserText.heading: Street<br />@EndUserText.label: Street<br />@EndUserText.quickInfo: Street and House Number</td></tr>
</table>

### TELBX

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(15)</td><td>@EndUserText.heading: Telebox<br />@EndUserText.label: Telebox Number<br />@EndUserText.quickInfo: Telebox Number</td></tr>
</table>

### TELF1

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(16)</td><td>@EndUserText.heading: Telephone 1<br />@EndUserText.label: Telephone 1<br />@EndUserText.quickInfo: First telephone number</td></tr>
</table>

### TELF2

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(16)</td><td>@EndUserText.heading: Telephone 2<br />@EndUserText.label: Telephone 2<br />@EndUserText.quickInfo: Second telephone number</td></tr>
</table>

### TELFX

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(31)</td><td>@EndUserText.heading: Fax Number<br />@EndUserText.label: Fax Number<br />@EndUserText.quickInfo: Fax Number</td></tr>
</table>

### TELTX

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(30)</td><td>@EndUserText.heading: Teletex Number<br />@EndUserText.label: Teletex Number<br />@EndUserText.quickInfo: Teletex Number</td></tr>
</table>

### TELX1

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(30)</td><td>@EndUserText.heading: Telex Number<br />@EndUserText.label: Telex Number<br />@EndUserText.quickInfo: Telex Number</td></tr>
</table>

### TXJCD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(15)</td><td>@EndUserText.heading: Tax Jur.<br />@EndUserText.label: Tax Jurisdiction<br />@EndUserText.quickInfo: Tax Jurisdiction</td></tr>
</table>

### VERAK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(20)</td><td>@EndUserText.heading: Person Responsible<br />@EndUserText.label: Person Responsible<br />@EndUserText.quickInfo: Person Responsible</td></tr>
</table>

### VERAK_USER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td>@EndUserText.heading: User Resp.<br />@EndUserText.label: User Responsible<br />@EndUserText.quickInfo: User Responsible</td></tr>
</table>

### VMETH

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: AM<br />@EndUserText.label: Allocation Methods<br />@EndUserText.quickInfo: Indicator for Allowed Allocation Methods</td></tr>
</table>

### WAERS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(5)</td><td>@EndUserText.heading: Crcy<br />@EndUserText.label: Currency<br />@EndUserText.quickInfo: Currency Key</td></tr>
</table>

### WERKS_D

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: Plnt<br />@EndUserText.label: Plant<br />@EndUserText.quickInfo: Plant</td></tr>
</table>

