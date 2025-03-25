## Entity Definitions

### CostCenter


<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="costcenter-controllingarea">ControllingArea</strong></td><td><a href="#kokrs">KOKRS</a></td><td><strong>Key</strong>: true<br /><strong>@EndUserText.heading</strong>: COAr<br /><strong>@EndUserText.label</strong>: Controlling Area<br /><strong>@EndUserText.quickInfo</strong>: Controlling Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _ControllingArea</td></tr>
<tr><td><strong id="costcenter-costcenter">CostCenter</strong></td><td><a href="#kostl">KOSTL</a></td><td><strong>Key</strong>: true<br /><strong>@EndUserText.heading</strong>: Cost Ctr<br /><strong>@EndUserText.label</strong>: Cost Center<br /><strong>@EndUserText.quickInfo</strong>: Cost Center<br /><strong>@ObjectModel.text.association</strong>: _Text</td></tr>
<tr><td><strong id="costcenter-validityenddate">ValidityEndDate</strong></td><td><a href="#datbi">DATBI</a></td><td><strong>Key</strong>: true<br /><strong>@EndUserText.heading</strong>: to<br /><strong>@EndUserText.label</strong>: Valid To<br /><strong>@EndUserText.quickInfo</strong>: Valid To Date<br /><strong>@Semantics.businessDate.to</strong>: true</td></tr>
<tr><td><strong id="costcenter-validitystartdate">ValidityStartDate</strong></td><td><a href="#datab">DATAB</a></td><td><strong>@EndUserText.heading</strong>: Valid From<br /><strong>@EndUserText.label</strong>: Valid From<br /><strong>@EndUserText.quickInfo</strong>: Valid-From Date<br /><strong>@Semantics.businessDate.from</strong>: true</td></tr>
<tr><td><strong id="costcenter-isblkdforprimarycostsposting">IsBlkdForPrimaryCostsPosting</strong></td><td><a href="#bkzkp">BKZKP</a></td><td><strong>@EndUserText.heading</strong>: ActPri<br /><strong>@EndUserText.label</strong>: Actual primary costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Primary Postings</td></tr>
<tr><td><strong id="costcenter-isblockedforplanprimarycosts">IsBlockedForPlanPrimaryCosts</strong></td><td><a href="#pkzkp">PKZKP</a></td><td><strong>@EndUserText.heading</strong>: PlnPri<br /><strong>@EndUserText.label</strong>: Plan primary costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Plan Primary Costs</td></tr>
<tr><td><strong id="costcenter-companycode">CompanyCode</strong></td><td><a href="#bukrs">BUKRS</a></td><td><strong>@EndUserText.heading</strong>: CoCd<br /><strong>@EndUserText.label</strong>: Company Code<br /><strong>@EndUserText.quickInfo</strong>: Company Code<br /><strong>@ObjectModel.foreignKey.association</strong>: _CompanyCode</td></tr>
<tr><td><strong id="costcenter-businessarea">BusinessArea</strong></td><td><a href="#gsber">GSBER</a></td><td><strong>@EndUserText.heading</strong>: BusA<br /><strong>@EndUserText.label</strong>: Business Area<br /><strong>@EndUserText.quickInfo</strong>: Business Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _BusinessArea</td></tr>
<tr><td><strong id="costcenter-costcentercategory">CostCenterCategory</strong></td><td><a href="#kosar">KOSAR</a></td><td><strong>@EndUserText.heading</strong>: CCtC<br /><strong>@EndUserText.label</strong>: Cost Center Category<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Category<br /><strong>@ObjectModel.foreignKey.association</strong>: _CostCenterCategory</td></tr>
<tr><td><strong id="costcenter-costctrresponsiblepersonname">CostCtrResponsiblePersonName</strong></td><td><a href="#verak">VERAK</a></td><td><strong>@EndUserText.heading</strong>: Person Responsible<br /><strong>@EndUserText.label</strong>: Person Responsible<br /><strong>@EndUserText.quickInfo</strong>: Person Responsible</td></tr>
<tr><td><strong id="costcenter-costctrresponsibleuser">CostCtrResponsibleUser</strong></td><td><a href="#verak_user">VERAK_USER</a></td><td><strong>@EndUserText.heading</strong>: User Resp.<br /><strong>@EndUserText.label</strong>: User Responsible<br /><strong>@EndUserText.quickInfo</strong>: User Responsible<br /><strong>@ObjectModel.foreignKey.association</strong>: _UserRespContactCard</td></tr>
<tr><td><strong id="costcenter-costcentercurrency">CostCenterCurrency</strong></td><td><a href="#waers">WAERS</a></td><td><strong>@EndUserText.heading</strong>: Crcy<br /><strong>@EndUserText.label</strong>: Currency<br /><strong>@EndUserText.quickInfo</strong>: Currency Key<br /><strong>@ObjectModel.foreignKey.association</strong>: _Currency<br /><strong>@Semantics.currencyCode</strong>: true</td></tr>
<tr><td><strong id="costcenter-costingsheet">CostingSheet</strong></td><td><a href="#aufkalsm">AUFKALSM</a></td><td><strong>@EndUserText.heading</strong>: CostSh<br /><strong>@EndUserText.label</strong>: Costing Sheet<br /><strong>@EndUserText.quickInfo</strong>: Costing Sheet<br /><strong>@ObjectModel.foreignKey.association</strong>: _CostingSheetProcedure</td></tr>
<tr><td><strong id="costcenter-taxjurisdiction">TaxJurisdiction</strong></td><td><a href="#txjcd">TXJCD</a></td><td><strong>@EndUserText.heading</strong>: Tax Jur.<br /><strong>@EndUserText.label</strong>: Tax Jurisdiction<br /><strong>@EndUserText.quickInfo</strong>: Tax Jurisdiction</td></tr>
<tr><td><strong id="costcenter-profitcenter">ProfitCenter</strong></td><td><a href="#prctr">PRCTR</a></td><td><strong>@EndUserText.heading</strong>: Profit Ctr<br /><strong>@EndUserText.label</strong>: Profit Center<br /><strong>@EndUserText.quickInfo</strong>: Profit Center<br /><strong>@ObjectModel.foreignKey.association</strong>: _ProfitCenter</td></tr>
<tr><td><strong id="costcenter-plant">Plant</strong></td><td><a href="#werks_d">WERKS_D</a></td><td><strong>@EndUserText.heading</strong>: Plnt<br /><strong>@EndUserText.label</strong>: Plant<br /><strong>@EndUserText.quickInfo</strong>: Plant</td></tr>
<tr><td><strong id="costcenter-logicalsystem">LogicalSystem</strong></td><td><a href="#logsystem">LOGSYSTEM</a></td><td><strong>@EndUserText.heading</strong>: Log.System<br /><strong>@EndUserText.label</strong>: Logical System<br /><strong>@EndUserText.quickInfo</strong>: Logical System</td></tr>
<tr><td><strong id="costcenter-costcentercreationdate">CostCenterCreationDate</strong></td><td><a href="#erfdt">ERFDT</a></td><td><strong>@EndUserText.heading</strong>: Ent. On<br /><strong>@EndUserText.label</strong>: Entered On<br /><strong>@EndUserText.quickInfo</strong>: Entered On</td></tr>
<tr><td><strong id="costcenter-costcentercreatedbyuser">CostCenterCreatedByUser</strong></td><td><a href="#erfnm">ERFNM</a></td><td><strong>@EndUserText.heading</strong>: Created By<br /><strong>@EndUserText.label</strong>: Created By<br /><strong>@EndUserText.quickInfo</strong>: Entered By<br /><strong>@ObjectModel.foreignKey.association</strong>: _UserCrtedContactCard</td></tr>
<tr><td><strong id="costcenter-isblkdforsecondarycostsposting">IsBlkdForSecondaryCostsPosting</strong></td><td><a href="#bkzks">BKZKS</a></td><td><strong>@EndUserText.heading</strong>: ActSec<br /><strong>@EndUserText.label</strong>: Actl Sec. Costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Secondary Costs</td></tr>
<tr><td><strong id="costcenter-isblockedforrevenueposting">IsBlockedForRevenuePosting</strong></td><td><a href="#bkzer">BKZER</a></td><td><strong>@EndUserText.heading</strong>: ActRev<br /><strong>@EndUserText.label</strong>: Actual Revenues<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Revenue Postings</td></tr>
<tr><td><strong id="costcenter-isblockedforcommitmentposting">IsBlockedForCommitmentPosting</strong></td><td><a href="#bkzob">BKZOB</a></td><td><strong>@EndUserText.heading</strong>: Cmmt<br /><strong>@EndUserText.label</strong>: Commitment Update<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Commitment Update</td></tr>
<tr><td><strong id="costcenter-isblockedforplansecondarycosts">IsBlockedForPlanSecondaryCosts</strong></td><td><a href="#fis_pkzks">FIS_PKZKS</a></td><td><strong>@EndUserText.heading</strong>: Lock Plan Secondary Costs<br /><strong>@EndUserText.label</strong>: Lock Plan Sec Costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Plan Secondary Costs</td></tr>
<tr><td><strong id="costcenter-isblockedforplanrevenues">IsBlockedForPlanRevenues</strong></td><td><a href="#fis_pkzer">FIS_PKZER</a></td><td><strong>@EndUserText.heading</strong>: Lock Planning Revenues<br /><strong>@EndUserText.label</strong>: Lock Planning Revn<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Planning Revenues</td></tr>
<tr><td><strong id="costcenter-costcenterallocationmethod">CostCenterAllocationMethod</strong></td><td><a href="#vmeth">VMETH</a></td><td><strong>@EndUserText.heading</strong>: AM<br /><strong>@EndUserText.label</strong>: Allocation Methods<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Allowed Allocation Methods</td></tr>
<tr><td><strong id="costcenter-consumptionqtyisrecorded">ConsumptionQtyIsRecorded</strong></td><td><a href="#mgefl">MGEFL</a></td><td><strong>@EndUserText.heading</strong>: Qty<br /><strong>@EndUserText.label</strong>: Record Quantity<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Recording Consumption Quantities</td></tr>
<tr><td><strong id="costcenter-department">Department</strong></td><td><a href="#abtei">ABTEI</a></td><td><strong>@EndUserText.heading</strong>: Department<br /><strong>@EndUserText.label</strong>: Department<br /><strong>@EndUserText.quickInfo</strong>: Department</td></tr>
<tr><td><strong id="costcenter-subsequentcostcenter">SubsequentCostCenter</strong></td><td><a href="#nkost">NKOST</a></td><td><strong>@EndUserText.heading</strong>: SCtr<br /><strong>@EndUserText.label</strong>: Subsequent Cost Ctr.<br /><strong>@EndUserText.quickInfo</strong>: Subsequent Cost Center</td></tr>
<tr><td><strong id="costcenter-conditionusage">ConditionUsage</strong></td><td><a href="#kvewe">KVEWE</a></td><td><strong>@EndUserText.heading</strong>: U<br /><strong>@EndUserText.label</strong>: Usage<br /><strong>@EndUserText.quickInfo</strong>: Usage of the condition table</td></tr>
<tr><td><strong id="costcenter-conditionapplication">ConditionApplication</strong></td><td><a href="#kappl">KAPPL</a></td><td><strong>@EndUserText.heading</strong>: App<br /><strong>@EndUserText.label</strong>: Application<br /><strong>@EndUserText.quickInfo</strong>: Application</td></tr>
<tr><td><strong id="costcenter-costcenteraccountingoverhead">CostCenterAccountingOverhead</strong></td><td><a href="#koszschl">KOSZSCHL</a></td><td><strong>@EndUserText.heading</strong>: OH Key<br /><strong>@EndUserText.label</strong>: Overhead Key<br /><strong>@EndUserText.quickInfo</strong>: CO-CCA Overhead Key</td></tr>
<tr><td><strong id="costcenter-country">Country</strong></td><td><a href="#land1">LAND1</a></td><td><strong>@EndUserText.heading</strong>: C/R<br /><strong>@EndUserText.label</strong>: Country/Region Key<br /><strong>@EndUserText.quickInfo</strong>: Country/Region Key<br /><strong>@ObjectModel.foreignKey.association</strong>: _Country</td></tr>
<tr><td><strong id="costcenter-formofaddress">FormOfAddress</strong></td><td><a href="#anred">ANRED</a></td><td><strong>@EndUserText.heading</strong>: Title<br /><strong>@EndUserText.label</strong>: Title<br /><strong>@EndUserText.quickInfo</strong>: Title</td></tr>
<tr><td><strong id="costcenter-addressname">AddressName</strong></td><td><a href="#name1_gp">NAME1_GP</a></td><td><strong>@EndUserText.heading</strong>: Name<br /><strong>@EndUserText.label</strong>: Name<br /><strong>@EndUserText.quickInfo</strong>: Name</td></tr>
<tr><td><strong id="costcenter-addressadditionalname">AddressAdditionalName</strong></td><td><a href="#name2_gp">NAME2_GP</a></td><td><strong>@EndUserText.heading</strong>: Name 2<br /><strong>@EndUserText.label</strong>: Name 2<br /><strong>@EndUserText.quickInfo</strong>: Name 2</td></tr>
<tr><td><strong id="costcenter-costcenteraddrname3">CostCenterAddrName3</strong></td><td><a href="#name3_gp">NAME3_GP</a></td><td><strong>@EndUserText.heading</strong>: Name 3<br /><strong>@EndUserText.label</strong>: Name 3<br /><strong>@EndUserText.quickInfo</strong>: Name 3</td></tr>
<tr><td><strong id="costcenter-costcenteraddrname4">CostCenterAddrName4</strong></td><td><a href="#name4_gp">NAME4_GP</a></td><td><strong>@EndUserText.heading</strong>: Name 4<br /><strong>@EndUserText.label</strong>: Name 4<br /><strong>@EndUserText.quickInfo</strong>: Name 4</td></tr>
<tr><td><strong id="costcenter-cityname">CityName</strong></td><td><a href="#ort01_gp">ORT01_GP</a></td><td><strong>@EndUserText.heading</strong>: City<br /><strong>@EndUserText.label</strong>: City<br /><strong>@EndUserText.quickInfo</strong>: City</td></tr>
<tr><td><strong id="costcenter-district">District</strong></td><td><a href="#ort02_gp">ORT02_GP</a></td><td><strong>@EndUserText.heading</strong>: District<br /><strong>@EndUserText.label</strong>: District<br /><strong>@EndUserText.quickInfo</strong>: District</td></tr>
<tr><td><strong id="costcenter-streetaddressname">StreetAddressName</strong></td><td><a href="#stras_gp">STRAS_GP</a></td><td><strong>@EndUserText.heading</strong>: Street<br /><strong>@EndUserText.label</strong>: Street<br /><strong>@EndUserText.quickInfo</strong>: Street and House Number</td></tr>
<tr><td><strong id="costcenter-pobox">POBox</strong></td><td><a href="#pfach">PFACH</a></td><td><strong>@EndUserText.heading</strong>: PO Box<br /><strong>@EndUserText.label</strong>: PO Box<br /><strong>@EndUserText.quickInfo</strong>: PO Box</td></tr>
<tr><td><strong id="costcenter-postalcode">PostalCode</strong></td><td><a href="#pstlz">PSTLZ</a></td><td><strong>@EndUserText.heading</strong>: PostalCode<br /><strong>@EndUserText.label</strong>: Postal Code<br /><strong>@EndUserText.quickInfo</strong>: Postal Code</td></tr>
<tr><td><strong id="costcenter-poboxpostalcode">POBoxPostalCode</strong></td><td><a href="#pstl2">PSTL2</a></td><td><strong>@EndUserText.heading</strong>: PO Box pcd<br /><strong>@EndUserText.label</strong>: P.O. Box Postal Code<br /><strong>@EndUserText.quickInfo</strong>: P.O. Box Postal Code</td></tr>
<tr><td><strong id="costcenter-region">Region</strong></td><td><a href="#regio">REGIO</a></td><td><strong>@EndUserText.heading</strong>: Rg<br /><strong>@EndUserText.label</strong>: Region<br /><strong>@EndUserText.quickInfo</strong>: Region (State, Province, County)<br /><strong>@ObjectModel.foreignKey.association</strong>: _Region</td></tr>
<tr><td><strong id="costcenter-language">Language</strong></td><td><a href="#spras">SPRAS</a></td><td><strong>@EndUserText.heading</strong>: Language<br /><strong>@EndUserText.label</strong>: Language Key<br /><strong>@EndUserText.quickInfo</strong>: Language Key<br /><strong>@ObjectModel.foreignKey.association</strong>: _Language</td></tr>
<tr><td><strong id="costcenter-teleboxnumber">TeleboxNumber</strong></td><td><a href="#telbx">TELBX</a></td><td><strong>@EndUserText.heading</strong>: Telebox<br /><strong>@EndUserText.label</strong>: Telebox Number<br /><strong>@EndUserText.quickInfo</strong>: Telebox Number</td></tr>
<tr><td><strong id="costcenter-phonenumber1">PhoneNumber1</strong></td><td><a href="#telf1">TELF1</a></td><td><strong>@EndUserText.heading</strong>: Telephone 1<br /><strong>@EndUserText.label</strong>: Telephone 1<br /><strong>@EndUserText.quickInfo</strong>: First telephone number</td></tr>
<tr><td><strong id="costcenter-phonenumber2">PhoneNumber2</strong></td><td><a href="#telf2">TELF2</a></td><td><strong>@EndUserText.heading</strong>: Telephone 2<br /><strong>@EndUserText.label</strong>: Telephone 2<br /><strong>@EndUserText.quickInfo</strong>: Second telephone number</td></tr>
<tr><td><strong id="costcenter-faxnumber">FaxNumber</strong></td><td><a href="#telfx">TELFX</a></td><td><strong>@EndUserText.heading</strong>: Fax Number<br /><strong>@EndUserText.label</strong>: Fax Number<br /><strong>@EndUserText.quickInfo</strong>: Fax Number</td></tr>
<tr><td><strong id="costcenter-teletexnumber">TeletexNumber</strong></td><td><a href="#teltx">TELTX</a></td><td><strong>@EndUserText.heading</strong>: Teletex Number<br /><strong>@EndUserText.label</strong>: Teletex Number<br /><strong>@EndUserText.quickInfo</strong>: Teletex Number</td></tr>
<tr><td><strong id="costcenter-telexnumber">TelexNumber</strong></td><td><a href="#telx1">TELX1</a></td><td><strong>@EndUserText.heading</strong>: Telex Number<br /><strong>@EndUserText.label</strong>: Telex Number<br /><strong>@EndUserText.quickInfo</strong>: Telex Number</td></tr>
<tr><td><strong id="costcenter-datacommunicationphonenumber">DataCommunicationPhoneNumber</strong></td><td><a href="#datlt">DATLT</a></td><td><strong>@EndUserText.heading</strong>: Data line<br /><strong>@EndUserText.label</strong>: Data line<br /><strong>@EndUserText.quickInfo</strong>: Data communication line no.</td></tr>
<tr><td><strong id="costcenter-costcenterprinterdestination">CostCenterPrinterDestination</strong></td><td><a href="#kdnam">KDNAM</a></td><td><strong>@EndUserText.heading</strong>: Prin<br /><strong>@EndUserText.label</strong>: Printer Destination<br /><strong>@EndUserText.quickInfo</strong>: Printer Destination for CCtr Report</td></tr>
<tr><td><strong id="costcenter-costcenterstandardhierarea">CostCenterStandardHierArea</strong></td><td><a href="#khinr">KHINR</a></td><td><strong>@EndUserText.heading</strong>: Area<br /><strong>@EndUserText.label</strong>: Hierarchy Area<br /><strong>@EndUserText.quickInfo</strong>: Standard Hierarchy Area</td></tr>
<tr><td><strong id="costcenter-costcollector">CostCollector</strong></td><td><a href="#cckey">CCKEY</a></td><td><strong>@EndUserText.heading</strong>: Cost Collector Key<br /><strong>@EndUserText.label</strong>: Cost Collector Key<br /><strong>@EndUserText.quickInfo</strong>: Cost Collector Key</td></tr>
<tr><td><strong id="costcenter-costcenteriscomplete">CostCenterIsComplete</strong></td><td><a href="#kskom">KSKOM</a></td><td><strong>@EndUserText.heading</strong>: Complete<br /><strong>@EndUserText.label</strong>: Complete<br /><strong>@EndUserText.quickInfo</strong>: Completion Flag for the Cost Center Master Record</td></tr>
<tr><td><strong id="costcenter-isstatisticalcostcenter">IsStatisticalCostCenter</strong></td><td><a href="#fins_xkostl_stat">FINS_XKOSTL_STAT</a></td><td><strong>@EndUserText.heading</strong>: CC Stat.<br /><strong>@EndUserText.label</strong>: Cost Center Is Stat.<br /><strong>@EndUserText.quickInfo</strong>: Indicator: Cost Center is Statistical Account Assignment</td></tr>
<tr><td><strong id="costcenter-objectinternalid">ObjectInternalID</strong></td><td><a href="#j_objnr">J_OBJNR</a></td><td><strong>@EndUserText.heading</strong>: Object Number<br /><strong>@EndUserText.label</strong>: Object Number<br /><strong>@EndUserText.quickInfo</strong>: Object Number</td></tr>
<tr><td><strong id="costcenter-costcenterfunction">CostCenterFunction</strong></td><td><a href="#funkt_dlk">FUNKT_DLK</a></td><td><strong>@EndUserText.heading</strong>: Fct<br /><strong>@EndUserText.label</strong>: Function<br /><strong>@EndUserText.quickInfo</strong>: Function of Cost Center</td></tr>
<tr><td><strong id="costcenter-costcenteralternativefunction">CostCenterAlternativeFunction</strong></td><td><a href="#afunk_dlk">AFUNK_DLK</a></td><td><strong>@EndUserText.heading</strong>: A.Fnc<br /><strong>@EndUserText.label</strong>: Altern. Function<br /><strong>@EndUserText.quickInfo</strong>: Alternative Function of Cost Center</td></tr>
<tr><td><strong id="costcenter-functionalarea">FunctionalArea</strong></td><td><a href="#fkber">FKBER</a></td><td><strong>@EndUserText.heading</strong>: Functional Area<br /><strong>@EndUserText.label</strong>: Functional Area<br /><strong>@EndUserText.quickInfo</strong>: Functional Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _FunctionalArea</td></tr>
<tr><td><strong id="costcenter-actyindepformulaplanningtmpl">ActyIndepFormulaPlanningTmpl</strong></td><td><a href="#cca_templ_cpi">CCA_TEMPL_CPI</a></td><td><strong>@EndUserText.heading</strong>: Act-Ind.Temp<br /><strong>@EndUserText.label</strong>: Activity-Indep.Temp.<br /><strong>@EndUserText.quickInfo</strong>: Template for Activity-Independent Formula Planning<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplCpi</td></tr>
<tr><td><strong id="costcenter-actydepdntformulaplanningtmpl">ActyDepdntFormulaPlanningTmpl</strong></td><td><a href="#cca_templ_cpd">CCA_TEMPL_CPD</a></td><td><strong>@EndUserText.heading</strong>: Activity-Dep.Tmp<br /><strong>@EndUserText.label</strong>: Activity-Dep.Tmp<br /><strong>@EndUserText.quickInfo</strong>: Template for Activity-Dependent Formula Planning<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplCpd</td></tr>
<tr><td><strong id="costcenter-actyindependentallocationtmpl">ActyIndependentAllocationTmpl</strong></td><td><a href="#cca_templ_sci">CCA_TEMPL_SCI</a></td><td><strong>@EndUserText.heading</strong>: ActyIndTemplAlloc<br /><strong>@EndUserText.label</strong>: Acty-IndepTemplAlloc<br /><strong>@EndUserText.quickInfo</strong>: Template: Activity-Independent Allocation to Cost Center<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplSci</td></tr>
<tr><td><strong id="costcenter-actydependentallocationtmpl">ActyDependentAllocationTmpl</strong></td><td><a href="#cca_templ_scd">CCA_TEMPL_SCD</a></td><td><strong>@EndUserText.heading</strong>: ActyDepTemplAlloc<br /><strong>@EndUserText.label</strong>: Acty-Dep Templ.Alloc<br /><strong>@EndUserText.quickInfo</strong>: Template: Activity-Dependent Allocation to Cost Center<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplScd</td></tr>
<tr><td><strong id="costcenter-actlindepstatisticalkeyfigures">ActlIndepStatisticalKeyFigures</strong></td><td><a href="#cca_templ_ski">CCA_TEMPL_SKI</a></td><td><strong>@EndUserText.heading</strong>: Templ.: Act. Stat. Key Figure<br /><strong>@EndUserText.label</strong>: Templ.: Stat. KF<br /><strong>@EndUserText.quickInfo</strong>: CCA_TEMPL_SKI<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplSki</td></tr>
<tr><td><strong id="costcenter-actldepstatisticalkeyfigures">ActlDepStatisticalKeyFigures</strong></td><td><a href="#cca_templ_skd">CCA_TEMPL_SKD</a></td><td><strong>@EndUserText.heading</strong>: Templ.: Act. Stat. Key Figure<br /><strong>@EndUserText.label</strong>: Templ.: Stat. KF<br /><strong>@EndUserText.quickInfo</strong>: Template: Act. Stat. Key Figure - Cost Center/Activity Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _ActivityBasedCostingTmplSkd</td></tr>
<tr><td><strong id="costcenter-jointventure">JointVenture</strong></td><td><a href="#jv_name">JV_NAME</a></td><td><strong>@EndUserText.heading</strong>: JV<br /><strong>@EndUserText.label</strong>: Joint Venture<br /><strong>@EndUserText.quickInfo</strong>: Joint Venture</td></tr>
<tr><td><strong id="costcenter-jointventurerecoverycode">JointVentureRecoveryCode</strong></td><td><a href="#jv_recind">JV_RECIND</a></td><td><strong>@EndUserText.heading</strong>: RI<br /><strong>@EndUserText.label</strong>: Recovery Indicator<br /><strong>@EndUserText.quickInfo</strong>: Recovery Indicator</td></tr>
<tr><td><strong id="costcenter-jointventureequitytype">JointVentureEquityType</strong></td><td><a href="#jv_etype">JV_ETYPE</a></td><td><strong>@EndUserText.heading</strong>: ET<br /><strong>@EndUserText.label</strong>: Equity Type<br /><strong>@EndUserText.quickInfo</strong>: Equity Type</td></tr>
<tr><td><strong id="costcenter-jointventureobjecttype">JointVentureObjectType</strong></td><td><a href="#jv_otype">JV_OTYPE</a></td><td><strong>@EndUserText.heading</strong>: Type<br /><strong>@EndUserText.label</strong>: JV Object Type<br /><strong>@EndUserText.quickInfo</strong>: Joint Venture Object Type</td></tr>
<tr><td><strong id="costcenter-jointventureclass">JointVentureClass</strong></td><td><a href="#jv_jibcl">JV_JIBCL</a></td><td><strong>@EndUserText.heading</strong>: Class<br /><strong>@EndUserText.label</strong>: JIB/JIBE Class<br /><strong>@EndUserText.quickInfo</strong>: JIB/JIBE Class</td></tr>
<tr><td><strong id="costcenter-jointventuresubclass">JointVentureSubClass</strong></td><td><a href="#jv_jibsa">JV_JIBSA</a></td><td><strong>@EndUserText.heading</strong>: SCl A<br /><strong>@EndUserText.label</strong>: JIB/JIBE Subclass A<br /><strong>@EndUserText.quickInfo</strong>: JIB/JIBE Subclass A</td></tr>
<tr><td><strong id="costcenter-budgetcarryingcostcenter">BudgetCarryingCostCenter</strong></td><td><a href="#fco_budget_carrying_cost_ctr">FCO_BUDGET_CARRYING_COST_CTR</a></td><td><strong>@EndUserText.heading</strong>: Budget CC<br /><strong>@EndUserText.label</strong>: Budget Cost Center<br /><strong>@EndUserText.quickInfo</strong>: Budget-Carrying Cost Center</td></tr>
<tr><td><strong id="costcenter-availabilitycontrolprofile">AvailabilityControlProfile</strong></td><td><a href="#fco_avc_profile">FCO_AVC_PROFILE</a></td><td><strong>@EndUserText.heading</strong>: Profile<br /><strong>@EndUserText.label</strong>: Availy Ctrl Prfl<br /><strong>@EndUserText.quickInfo</strong>: Budget Availability Control: Profile</td></tr>
<tr><td><strong id="costcenter-availabilitycontrolisactive">AvailabilityControlIsActive</strong></td><td><a href="#fco_avc_for_cost_center_active">FCO_AVC_FOR_COST_CENTER_ACTIVE</a></td><td><strong>@EndUserText.heading</strong>: AVC Active<br /><strong>@EndUserText.label</strong>: AVC is Active<br /><strong>@EndUserText.quickInfo</strong>: Budget Availability Control for Cost Centers is Active</td></tr>
<tr><td><strong id="costcenter-fund">Fund</strong></td><td><a href="#bp_geber">BP_GEBER</a></td><td><strong>@EndUserText.heading</strong>: Fund<br /><strong>@EndUserText.label</strong>: Fund<br /><strong>@EndUserText.quickInfo</strong>: Fund</td></tr>
<tr><td><strong id="costcenter-grantid">GrantID</strong></td><td><a href="#gm_grant_nbr">GM_GRANT_NBR</a></td><td><strong>@EndUserText.heading</strong>: Grant<br /><strong>@EndUserText.label</strong>: Grant<br /><strong>@EndUserText.quickInfo</strong>: Grant</td></tr>
<tr><td><strong id="costcenter-fundisfixassigned">FundIsFixAssigned</strong></td><td><a href="#psm_fund_fix_assigned">PSM_FUND_FIX_ASSIGNED</a></td><td><strong>@EndUserText.heading</strong>: Fund Fixed Assignment<br /><strong>@EndUserText.label</strong>: Fund Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Fund with Fixed Assignment</td></tr>
<tr><td><strong id="costcenter-grantidisfixassigned">GrantIDIsFixAssigned</strong></td><td><a href="#psm_grant_fix_assigned">PSM_GRANT_FIX_ASSIGNED</a></td><td><strong>@EndUserText.heading</strong>: Grant Fixed Assignment<br /><strong>@EndUserText.label</strong>: Grant Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Grant with Fixed Assignment</td></tr>
<tr><td><strong id="costcenter-functionalareaisfixassigned">FunctionalAreaIsFixAssigned</strong></td><td><a href="#psm_func_area_fix_assigned">PSM_FUNC_AREA_FIX_ASSIGNED</a></td><td><strong>@EndUserText.heading</strong>: Functional Area Fixed Assignment<br /><strong>@EndUserText.label</strong>: Functional Area Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Functional Area with Fixed Assignment</td></tr>
<tr><td><strong id="costcenter-costcenterlastchangedbyuser">CostCenterLastChangedByUser</strong></td><td><a href="#fco_last_changed_by">FCO_LAST_CHANGED_BY</a></td><td><strong>@EndUserText.heading</strong>: Last Changed By<br /><strong>@EndUserText.label</strong>: Last Changed By<br /><strong>@EndUserText.quickInfo</strong>: Last Changed By<br /><strong>@ObjectModel.foreignKey.association</strong>: _LastChangedByUserContactCard</td></tr>
<tr><td><strong id="costcenter-costcenterlastchangedondate">CostCenterLastChangedOnDate</strong></td><td><a href="#fco_last_changed_on">FCO_LAST_CHANGED_ON</a></td><td><strong>@EndUserText.heading</strong>: Last Changed On<br /><strong>@EndUserText.label</strong>: Last Changed On<br /><strong>@EndUserText.quickInfo</strong>: Last Changed On</td></tr>
<tr><td><strong id="costcenter-costcenterlastchangedattime">CostCenterLastChangedAtTime</strong></td><td><a href="#fco_last_changed_at">FCO_LAST_CHANGED_AT</a></td><td><strong>@EndUserText.heading</strong>: Last Changed At<br /><strong>@EndUserText.label</strong>: Last Changed At<br /><strong>@EndUserText.quickInfo</strong>: Last Changed At</td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplcpd">_ActivityBasedCostingTmplCpd</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (Path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplcpi">_ActivityBasedCostingTmplCpi</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (Path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplscd">_ActivityBasedCostingTmplScd</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (Path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplsci">_ActivityBasedCostingTmplSci</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (Path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplskd">_ActivityBasedCostingTmplSkd</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (Path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplski">_ActivityBasedCostingTmplSki</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (Path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_availabilityctrlprofile">_AvailabilityCtrlProfile</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_availabilityctrlprofile">I_AvailabilityCtrlProfile</a> (Path: <a href="#i_availabilityctrlprofile">I_AvailabilityCtrlProfile</a>.<a href="#i_availabilityctrlprofile-availabilitycontrolprofile">AvailabilityControlProfile</a>) via <a href="#costcenter-availabilitycontrolprofile">AvailabilityControlProfile</a></td></tr>
<tr><td><strong id="costcenter-_businessarea">_BusinessArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_businessarea">I_BusinessArea</a> (Path: <a href="#i_businessarea">I_BusinessArea</a>.<a href="#i_businessarea-businessarea">BusinessArea</a>) via <a href="#costcenter-businessarea">BusinessArea</a></td></tr>
<tr><td><strong id="costcenter-_companycode">_CompanyCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_companycode">I_CompanyCode</a> (Path: <a href="#i_companycode">I_CompanyCode</a>.<a href="#i_companycode-companycode">CompanyCode</a>) via <a href="#costcenter-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="costcenter-_controllingarea">_ControllingArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_controllingarea">I_ControllingArea</a> (Path: <a href="#i_controllingarea">I_ControllingArea</a>.<a href="#i_controllingarea-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_costcentercategory">_CostCenterCategory</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_costcentercategory">I_CostCenterCategory</a> (Path: <a href="#i_costcentercategory">I_CostCenterCategory</a>.<a href="#i_costcentercategory-costcentercategory">CostCenterCategory</a>) via <a href="#costcenter-costcentercategory">CostCenterCategory</a></td></tr>
<tr><td><strong id="costcenter-_costcenterhierarchynode">_CostCenterHierarchyNode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_costcenterhierarchynode">I_CostCenterHierarchyNode</a> (Path: <a href="#i_costcenterhierarchynode">I_CostCenterHierarchyNode</a>.<a href="#i_costcenterhierarchynode-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_costingsheetprocedure">_CostingSheetProcedure</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_costingsheetprocedure">I_CostingSheetProcedure</a> (Path: <a href="#i_costingsheetprocedure">I_CostingSheetProcedure</a>.<a href="#i_costingsheetprocedure-conditionusage">ConditionUsage</a>) via <a href="#costcenter"></a></td></tr>
<tr><td><strong id="costcenter-_country">_Country</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_country">I_Country</a> (Path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#costcenter-country">Country</a></td></tr>
<tr><td><strong id="costcenter-_currency">_Currency</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#costcenter-costcentercurrency">CostCenterCurrency</a></td></tr>
<tr><td><strong id="costcenter-_functionalarea">_FunctionalArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_functionalarea">I_FunctionalArea</a> (Path: <a href="#i_functionalarea">I_FunctionalArea</a>.<a href="#i_functionalarea-functionalarea">FunctionalArea</a>) via <a href="#costcenter-functionalarea">FunctionalArea</a></td></tr>
<tr><td><strong id="costcenter-_language">_Language</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_language">I_Language</a> (Path: <a href="#i_language">I_Language</a>.<a href="#i_language-language">Language</a>) via <a href="#costcenter-language">Language</a></td></tr>
<tr><td><strong id="costcenter-_lastchangedbyusercontactcard">_LastChangedByUserContactCard</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_usercontactcard">I_UserContactCard</a> (Path: <a href="#i_usercontactcard">I_UserContactCard</a>.<a href="#i_usercontactcard-contactcardid">ContactCardID</a>) via <a href="#costcenter-costcenterlastchangedbyuser">CostCenterLastChangedByUser</a></td></tr>
<tr><td><strong id="costcenter-_profitcenter">_ProfitCenter</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_profitcenter">I_ProfitCenter</a> (Path: <a href="#i_profitcenter">I_ProfitCenter</a>.<a href="#i_profitcenter-profitcenter">ProfitCenter</a>) via <a href="#costcenter-profitcenter">ProfitCenter</a></td></tr>
<tr><td><strong id="costcenter-_region">_Region</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_region">I_Region</a> (Path: <a href="#i_region">I_Region</a>.<a href="#i_region-region">Region</a>) via <a href="#costcenter-region">Region</a></td></tr>
<tr><td><strong id="costcenter-_text">_Text</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_costcentertext">I_CostCenterText</a> (Path: <a href="#i_costcentertext">I_CostCenterText</a>.<a href="#i_costcentertext-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="costcenter-_usercrtedcontactcard">_UserCrtedContactCard</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_usercontactcard">I_UserContactCard</a> (Path: <a href="#i_usercontactcard">I_UserContactCard</a>.<a href="#i_usercontactcard-contactcardid">ContactCardID</a>) via <a href="#costcenter-costcentercreatedbyuser">CostCenterCreatedByUser</a></td></tr>
<tr><td><strong id="costcenter-_userrespcontactcard">_UserRespContactCard</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_usercontactcard">I_UserContactCard</a> (Path: <a href="#i_usercontactcard">I_UserContactCard</a>.<a href="#i_usercontactcard-contactcardid">ContactCardID</a>) via <a href="#costcenter-costctrresponsibleuser">CostCtrResponsibleUser</a></td></tr>
</table>

## Type Definitions

### ABTEI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Department<br /><strong>@EndUserText.label</strong>: Department<br /><strong>@EndUserText.quickInfo</strong>: Department</td></tr>
</table>

### AFUNK_DLK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: A.Fnc<br /><strong>@EndUserText.label</strong>: Altern. Function<br /><strong>@EndUserText.quickInfo</strong>: Alternative Function of Cost Center</td></tr>
</table>

### ANRED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(15)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Title<br /><strong>@EndUserText.label</strong>: Title<br /><strong>@EndUserText.quickInfo</strong>: Title</td></tr>
</table>

### AUFKALSM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CostSh<br /><strong>@EndUserText.label</strong>: Costing Sheet<br /><strong>@EndUserText.quickInfo</strong>: Costing Sheet</td></tr>
</table>

### BKZER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ActRev<br /><strong>@EndUserText.label</strong>: Actual Revenues<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Revenue Postings</td></tr>
</table>

### BKZKP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ActPri<br /><strong>@EndUserText.label</strong>: Actual primary costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Primary Postings</td></tr>
</table>

### BKZKS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ActSec<br /><strong>@EndUserText.label</strong>: Actl Sec. Costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Actual Secondary Costs</td></tr>
</table>

### BKZOB

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Cmmt<br /><strong>@EndUserText.label</strong>: Commitment Update<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Commitment Update</td></tr>
</table>

### BP_GEBER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Fund<br /><strong>@EndUserText.label</strong>: Fund<br /><strong>@EndUserText.quickInfo</strong>: Fund</td></tr>
</table>

### BUKRS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CoCd<br /><strong>@EndUserText.label</strong>: Company Code<br /><strong>@EndUserText.quickInfo</strong>: Company Code</td></tr>
</table>

### CCA_TEMPL_CPD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Activity-Dep.Tmp<br /><strong>@EndUserText.label</strong>: Activity-Dep.Tmp<br /><strong>@EndUserText.quickInfo</strong>: Template for Activity-Dependent Formula Planning</td></tr>
</table>

### CCA_TEMPL_CPI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Act-Ind.Temp<br /><strong>@EndUserText.label</strong>: Activity-Indep.Temp.<br /><strong>@EndUserText.quickInfo</strong>: Template for Activity-Independent Formula Planning</td></tr>
</table>

### CCA_TEMPL_SCD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ActyDepTemplAlloc<br /><strong>@EndUserText.label</strong>: Acty-Dep Templ.Alloc<br /><strong>@EndUserText.quickInfo</strong>: Template: Activity-Dependent Allocation to Cost Center</td></tr>
</table>

### CCA_TEMPL_SCI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ActyIndTemplAlloc<br /><strong>@EndUserText.label</strong>: Acty-IndepTemplAlloc<br /><strong>@EndUserText.quickInfo</strong>: Template: Activity-Independent Allocation to Cost Center</td></tr>
</table>

### CCA_TEMPL_SKD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Templ.: Act. Stat. Key Figure<br /><strong>@EndUserText.label</strong>: Templ.: Stat. KF<br /><strong>@EndUserText.quickInfo</strong>: Template: Act. Stat. Key Figure - Cost Center/Activity Type</td></tr>
</table>

### CCA_TEMPL_SKI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Templ.: Act. Stat. Key Figure<br /><strong>@EndUserText.label</strong>: Templ.: Stat. KF<br /><strong>@EndUserText.quickInfo</strong>: CCA_TEMPL_SKI</td></tr>
</table>

### CCKEY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(23)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Cost Collector Key<br /><strong>@EndUserText.label</strong>: Cost Collector Key<br /><strong>@EndUserText.quickInfo</strong>: Cost Collector Key</td></tr>
</table>

### DATAB

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Valid From<br /><strong>@EndUserText.label</strong>: Valid From<br /><strong>@EndUserText.quickInfo</strong>: Valid-From Date</td></tr>
</table>

### DATBI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: to<br /><strong>@EndUserText.label</strong>: Valid To<br /><strong>@EndUserText.quickInfo</strong>: Valid To Date</td></tr>
</table>

### DATLT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(14)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Data line<br /><strong>@EndUserText.label</strong>: Data line<br /><strong>@EndUserText.quickInfo</strong>: Data communication line no.</td></tr>
</table>

### ERFDT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Ent. On<br /><strong>@EndUserText.label</strong>: Entered On<br /><strong>@EndUserText.quickInfo</strong>: Entered On</td></tr>
</table>

### ERFNM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Created By<br /><strong>@EndUserText.label</strong>: Created By<br /><strong>@EndUserText.quickInfo</strong>: Entered By</td></tr>
</table>

### FCO_AVC_FOR_COST_CENTER_ACTIVE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: AVC Active<br /><strong>@EndUserText.label</strong>: AVC is Active<br /><strong>@EndUserText.quickInfo</strong>: Budget Availability Control for Cost Centers is Active</td></tr>
</table>

### FCO_AVC_PROFILE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Profile<br /><strong>@EndUserText.label</strong>: Availy Ctrl Prfl<br /><strong>@EndUserText.quickInfo</strong>: Budget Availability Control: Profile</td></tr>
</table>

### FCO_BUDGET_CARRYING_COST_CTR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Budget CC<br /><strong>@EndUserText.label</strong>: Budget Cost Center<br /><strong>@EndUserText.quickInfo</strong>: Budget-Carrying Cost Center</td></tr>
</table>

### FCO_LAST_CHANGED_AT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Time</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Last Changed At<br /><strong>@EndUserText.label</strong>: Last Changed At<br /><strong>@EndUserText.quickInfo</strong>: Last Changed At</td></tr>
</table>

### FCO_LAST_CHANGED_BY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Last Changed By<br /><strong>@EndUserText.label</strong>: Last Changed By<br /><strong>@EndUserText.quickInfo</strong>: Last Changed By</td></tr>
</table>

### FCO_LAST_CHANGED_ON

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Last Changed On<br /><strong>@EndUserText.label</strong>: Last Changed On<br /><strong>@EndUserText.quickInfo</strong>: Last Changed On</td></tr>
</table>

### FINS_XKOSTL_STAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CC Stat.<br /><strong>@EndUserText.label</strong>: Cost Center Is Stat.<br /><strong>@EndUserText.quickInfo</strong>: Indicator: Cost Center is Statistical Account Assignment</td></tr>
</table>

### FIS_PKZER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Lock Planning Revenues<br /><strong>@EndUserText.label</strong>: Lock Planning Revn<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Planning Revenues</td></tr>
</table>

### FIS_PKZKS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Lock Plan Secondary Costs<br /><strong>@EndUserText.label</strong>: Lock Plan Sec Costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Plan Secondary Costs</td></tr>
</table>

### FKBER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Functional Area<br /><strong>@EndUserText.label</strong>: Functional Area<br /><strong>@EndUserText.quickInfo</strong>: Functional Area</td></tr>
</table>

### FUNKT_DLK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Fct<br /><strong>@EndUserText.label</strong>: Function<br /><strong>@EndUserText.quickInfo</strong>: Function of Cost Center</td></tr>
</table>

### GM_GRANT_NBR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(20)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Grant<br /><strong>@EndUserText.label</strong>: Grant<br /><strong>@EndUserText.quickInfo</strong>: Grant</td></tr>
</table>

### GSBER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: BusA<br /><strong>@EndUserText.label</strong>: Business Area<br /><strong>@EndUserText.quickInfo</strong>: Business Area</td></tr>
</table>

### JV_ETYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ET<br /><strong>@EndUserText.label</strong>: Equity Type<br /><strong>@EndUserText.quickInfo</strong>: Equity Type</td></tr>
</table>

### JV_JIBCL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Class<br /><strong>@EndUserText.label</strong>: JIB/JIBE Class<br /><strong>@EndUserText.quickInfo</strong>: JIB/JIBE Class</td></tr>
</table>

### JV_JIBSA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: SCl A<br /><strong>@EndUserText.label</strong>: JIB/JIBE Subclass A<br /><strong>@EndUserText.quickInfo</strong>: JIB/JIBE Subclass A</td></tr>
</table>

### JV_NAME

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: JV<br /><strong>@EndUserText.label</strong>: Joint Venture<br /><strong>@EndUserText.quickInfo</strong>: Joint Venture</td></tr>
</table>

### JV_OTYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Type<br /><strong>@EndUserText.label</strong>: JV Object Type<br /><strong>@EndUserText.quickInfo</strong>: Joint Venture Object Type</td></tr>
</table>

### JV_RECIND

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: RI<br /><strong>@EndUserText.label</strong>: Recovery Indicator<br /><strong>@EndUserText.quickInfo</strong>: Recovery Indicator</td></tr>
</table>

### J_OBJNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(22)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Object Number<br /><strong>@EndUserText.label</strong>: Object Number<br /><strong>@EndUserText.quickInfo</strong>: Object Number</td></tr>
</table>

### KAPPL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: App<br /><strong>@EndUserText.label</strong>: Application<br /><strong>@EndUserText.quickInfo</strong>: Application</td></tr>
</table>

### KDNAM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Prin<br /><strong>@EndUserText.label</strong>: Printer Destination<br /><strong>@EndUserText.quickInfo</strong>: Printer Destination for CCtr Report</td></tr>
</table>

### KHINR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Area<br /><strong>@EndUserText.label</strong>: Hierarchy Area<br /><strong>@EndUserText.quickInfo</strong>: Standard Hierarchy Area</td></tr>
</table>

### KOKRS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: COAr<br /><strong>@EndUserText.label</strong>: Controlling Area<br /><strong>@EndUserText.quickInfo</strong>: Controlling Area</td></tr>
</table>

### KOSAR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CCtC<br /><strong>@EndUserText.label</strong>: Cost Center Category<br /><strong>@EndUserText.quickInfo</strong>: Cost Center Category</td></tr>
</table>

### KOSTL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Cost Ctr<br /><strong>@EndUserText.label</strong>: Cost Center<br /><strong>@EndUserText.quickInfo</strong>: Cost Center</td></tr>
</table>

### KOSZSCHL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: OH Key<br /><strong>@EndUserText.label</strong>: Overhead Key<br /><strong>@EndUserText.quickInfo</strong>: CO-CCA Overhead Key</td></tr>
</table>

### KSKOM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Complete<br /><strong>@EndUserText.label</strong>: Complete<br /><strong>@EndUserText.quickInfo</strong>: Completion Flag for the Cost Center Master Record</td></tr>
</table>

### KVEWE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: U<br /><strong>@EndUserText.label</strong>: Usage<br /><strong>@EndUserText.quickInfo</strong>: Usage of the condition table</td></tr>
</table>

### LAND1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: C/R<br /><strong>@EndUserText.label</strong>: Country/Region Key<br /><strong>@EndUserText.quickInfo</strong>: Country/Region Key</td></tr>
</table>

### LOGSYSTEM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Log.System<br /><strong>@EndUserText.label</strong>: Logical System<br /><strong>@EndUserText.quickInfo</strong>: Logical System</td></tr>
</table>

### MGEFL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Qty<br /><strong>@EndUserText.label</strong>: Record Quantity<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Recording Consumption Quantities</td></tr>
</table>

### NAME1_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Name<br /><strong>@EndUserText.label</strong>: Name<br /><strong>@EndUserText.quickInfo</strong>: Name</td></tr>
</table>

### NAME2_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Name 2<br /><strong>@EndUserText.label</strong>: Name 2<br /><strong>@EndUserText.quickInfo</strong>: Name 2</td></tr>
</table>

### NAME3_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Name 3<br /><strong>@EndUserText.label</strong>: Name 3<br /><strong>@EndUserText.quickInfo</strong>: Name 3</td></tr>
</table>

### NAME4_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Name 4<br /><strong>@EndUserText.label</strong>: Name 4<br /><strong>@EndUserText.quickInfo</strong>: Name 4</td></tr>
</table>

### NKOST

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: SCtr<br /><strong>@EndUserText.label</strong>: Subsequent Cost Ctr.<br /><strong>@EndUserText.quickInfo</strong>: Subsequent Cost Center</td></tr>
</table>

### ORT01_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: City<br /><strong>@EndUserText.label</strong>: City<br /><strong>@EndUserText.quickInfo</strong>: City</td></tr>
</table>

### ORT02_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: District<br /><strong>@EndUserText.label</strong>: District<br /><strong>@EndUserText.quickInfo</strong>: District</td></tr>
</table>

### PFACH

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PO Box<br /><strong>@EndUserText.label</strong>: PO Box<br /><strong>@EndUserText.quickInfo</strong>: PO Box</td></tr>
</table>

### PKZKP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PlnPri<br /><strong>@EndUserText.label</strong>: Plan primary costs<br /><strong>@EndUserText.quickInfo</strong>: Lock Indicator for Plan Primary Costs</td></tr>
</table>

### PRCTR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Profit Ctr<br /><strong>@EndUserText.label</strong>: Profit Center<br /><strong>@EndUserText.quickInfo</strong>: Profit Center</td></tr>
</table>

### PSM_FUNC_AREA_FIX_ASSIGNED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Functional Area Fixed Assignment<br /><strong>@EndUserText.label</strong>: Functional Area Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Functional Area with Fixed Assignment</td></tr>
</table>

### PSM_FUND_FIX_ASSIGNED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Fund Fixed Assignment<br /><strong>@EndUserText.label</strong>: Fund Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Fund with Fixed Assignment</td></tr>
</table>

### PSM_GRANT_FIX_ASSIGNED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Grant Fixed Assignment<br /><strong>@EndUserText.label</strong>: Grant Fixed Assignment<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Grant with Fixed Assignment</td></tr>
</table>

### PSTL2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PO Box pcd<br /><strong>@EndUserText.label</strong>: P.O. Box Postal Code<br /><strong>@EndUserText.quickInfo</strong>: P.O. Box Postal Code</td></tr>
</table>

### PSTLZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PostalCode<br /><strong>@EndUserText.label</strong>: Postal Code<br /><strong>@EndUserText.quickInfo</strong>: Postal Code</td></tr>
</table>

### REGIO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Rg<br /><strong>@EndUserText.label</strong>: Region<br /><strong>@EndUserText.quickInfo</strong>: Region (State, Province, County)</td></tr>
</table>

### SPRAS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Language<br /><strong>@EndUserText.label</strong>: Language Key<br /><strong>@EndUserText.quickInfo</strong>: Language Key</td></tr>
</table>

### STRAS_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Street<br /><strong>@EndUserText.label</strong>: Street<br /><strong>@EndUserText.quickInfo</strong>: Street and House Number</td></tr>
</table>

### TELBX

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(15)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Telebox<br /><strong>@EndUserText.label</strong>: Telebox Number<br /><strong>@EndUserText.quickInfo</strong>: Telebox Number</td></tr>
</table>

### TELF1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Telephone 1<br /><strong>@EndUserText.label</strong>: Telephone 1<br /><strong>@EndUserText.quickInfo</strong>: First telephone number</td></tr>
</table>

### TELF2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Telephone 2<br /><strong>@EndUserText.label</strong>: Telephone 2<br /><strong>@EndUserText.quickInfo</strong>: Second telephone number</td></tr>
</table>

### TELFX

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(31)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Fax Number<br /><strong>@EndUserText.label</strong>: Fax Number<br /><strong>@EndUserText.quickInfo</strong>: Fax Number</td></tr>
</table>

### TELTX

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(30)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Teletex Number<br /><strong>@EndUserText.label</strong>: Teletex Number<br /><strong>@EndUserText.quickInfo</strong>: Teletex Number</td></tr>
</table>

### TELX1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(30)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Telex Number<br /><strong>@EndUserText.label</strong>: Telex Number<br /><strong>@EndUserText.quickInfo</strong>: Telex Number</td></tr>
</table>

### TXJCD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(15)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tax Jur.<br /><strong>@EndUserText.label</strong>: Tax Jurisdiction<br /><strong>@EndUserText.quickInfo</strong>: Tax Jurisdiction</td></tr>
</table>

### VERAK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(20)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Person Responsible<br /><strong>@EndUserText.label</strong>: Person Responsible<br /><strong>@EndUserText.quickInfo</strong>: Person Responsible</td></tr>
</table>

### VERAK_USER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: User Resp.<br /><strong>@EndUserText.label</strong>: User Responsible<br /><strong>@EndUserText.quickInfo</strong>: User Responsible</td></tr>
</table>

### VMETH

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: AM<br /><strong>@EndUserText.label</strong>: Allocation Methods<br /><strong>@EndUserText.quickInfo</strong>: Indicator for Allowed Allocation Methods</td></tr>
</table>

### WAERS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Crcy<br /><strong>@EndUserText.label</strong>: Currency<br /><strong>@EndUserText.quickInfo</strong>: Currency Key</td></tr>
</table>

### WERKS_D

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Plnt<br /><strong>@EndUserText.label</strong>: Plant<br /><strong>@EndUserText.quickInfo</strong>: Plant</td></tr>
</table>

