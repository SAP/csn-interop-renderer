## Entity Definitions

### CostCenter

<table>
<tr><th>Element</th><th>Type</th><th>Description</th></tr><tr><td><strong id="costcenter-controllingarea">ControllingArea</strong><br /><br /><small></small></td><td><a href="#kokrs">KOKRS</a></td><td>key: true<br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.CONTROLLINGAREA@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.CONTROLLINGAREA@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.CONTROLLINGAREA@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_ControllingArea"</td></tr>
<tr><td><strong id="costcenter-costcenter">CostCenter</strong><br /><br /><small></small></td><td><a href="#kostl">KOSTL</a></td><td>key: true<br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTER@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.text.association: "_Text"</td></tr>
<tr><td><strong id="costcenter-validityenddate">ValidityEndDate</strong><br /><br /><small></small></td><td><a href="#datbi">DATBI</a></td><td>key: true<br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.VALIDITYENDDATE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.VALIDITYENDDATE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.VALIDITYENDDATE@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@Semantics.businessDate.to: true</td></tr>
<tr><td><strong id="costcenter-validitystartdate">ValidityStartDate</strong><br /><br /><small></small></td><td><a href="#datab">DATAB</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.VALIDITYSTARTDATE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.VALIDITYSTARTDATE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.VALIDITYSTARTDATE@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@Semantics.businessDate.from: true</td></tr>
<tr><td><strong id="costcenter-isblkdforprimarycostsposting">IsBlkdForPrimaryCostsPosting</strong><br /><br /><small></small></td><td><a href="#bkzkp">BKZKP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ISBLKDFORPRIMARYCOSTSPOSTING@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ISBLKDFORPRIMARYCOSTSPOSTING@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ISBLKDFORPRIMARYCOSTSPOSTING@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-isblockedforplanprimarycosts">IsBlockedForPlanPrimaryCosts</strong><br /><br /><small></small></td><td><a href="#pkzkp">PKZKP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORPLANPRIMARYCOSTS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORPLANPRIMARYCOSTS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORPLANPRIMARYCOSTS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-companycode">CompanyCode</strong><br /><br /><small></small></td><td><a href="#bukrs">BUKRS</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COMPANYCODE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COMPANYCODE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COMPANYCODE@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_CompanyCode"</td></tr>
<tr><td><strong id="costcenter-businessarea">BusinessArea</strong><br /><br /><small></small></td><td><a href="#gsber">GSBER</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.BUSINESSAREA@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.BUSINESSAREA@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.BUSINESSAREA@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_BusinessArea"</td></tr>
<tr><td><strong id="costcenter-costcentercategory">CostCenterCategory</strong><br /><br /><small></small></td><td><a href="#kosar">KOSAR</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERCATEGORY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERCATEGORY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERCATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_CostCenterCategory"</td></tr>
<tr><td><strong id="costcenter-costctrresponsiblepersonname">CostCtrResponsiblePersonName</strong><br /><br /><small></small></td><td><a href="#verak">VERAK</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCTRRESPONSIBLEPERSONNAME@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCTRRESPONSIBLEPERSONNAME@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCTRRESPONSIBLEPERSONNAME@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costctrresponsibleuser">CostCtrResponsibleUser</strong><br /><br /><small></small></td><td><a href="#verak_user">VERAK_USER</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCTRRESPONSIBLEUSER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCTRRESPONSIBLEUSER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCTRRESPONSIBLEUSER@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_UserRespContactCard"</td></tr>
<tr><td><strong id="costcenter-costcentercurrency">CostCenterCurrency</strong><br /><br /><small></small></td><td><a href="#waers">WAERS</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERCURRENCY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERCURRENCY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_Currency"<br />@Semantics.currencyCode: true</td></tr>
<tr><td><strong id="costcenter-costingsheet">CostingSheet</strong><br /><br /><small></small></td><td><a href="#aufkalsm">AUFKALSM</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTINGSHEET@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTINGSHEET@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTINGSHEET@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_CostingSheetProcedure"</td></tr>
<tr><td><strong id="costcenter-taxjurisdiction">TaxJurisdiction</strong><br /><br /><small></small></td><td><a href="#txjcd">TXJCD</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.TAXJURISDICTION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.TAXJURISDICTION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.TAXJURISDICTION@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-profitcenter">ProfitCenter</strong><br /><br /><small></small></td><td><a href="#prctr">PRCTR</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.PROFITCENTER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.PROFITCENTER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.PROFITCENTER@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_ProfitCenter"</td></tr>
<tr><td><strong id="costcenter-plant">Plant</strong><br /><br /><small></small></td><td><a href="#werks_d">WERKS_D</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.PLANT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.PLANT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.PLANT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-logicalsystem">LogicalSystem</strong><br /><br /><small></small></td><td><a href="#logsystem">LOGSYSTEM</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.LOGICALSYSTEM@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.LOGICALSYSTEM@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.LOGICALSYSTEM@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcentercreationdate">CostCenterCreationDate</strong><br /><br /><small></small></td><td><a href="#erfdt">ERFDT</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERCREATIONDATE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERCREATIONDATE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERCREATIONDATE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcentercreatedbyuser">CostCenterCreatedByUser</strong><br /><br /><small></small></td><td><a href="#erfnm">ERFNM</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERCREATEDBYUSER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERCREATEDBYUSER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERCREATEDBYUSER@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_UserCrtedContactCard"</td></tr>
<tr><td><strong id="costcenter-isblkdforsecondarycostsposting">IsBlkdForSecondaryCostsPosting</strong><br /><br /><small></small></td><td><a href="#bkzks">BKZKS</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ISBLKDFORSECONDARYCOSTSPOSTING@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ISBLKDFORSECONDARYCOSTSPOSTING@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ISBLKDFORSECONDARYCOSTSPOSTING@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-isblockedforrevenueposting">IsBlockedForRevenuePosting</strong><br /><br /><small></small></td><td><a href="#bkzer">BKZER</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORREVENUEPOSTING@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORREVENUEPOSTING@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORREVENUEPOSTING@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-isblockedforcommitmentposting">IsBlockedForCommitmentPosting</strong><br /><br /><small></small></td><td><a href="#bkzob">BKZOB</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORCOMMITMENTPOSTING@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORCOMMITMENTPOSTING@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORCOMMITMENTPOSTING@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-isblockedforplansecondarycosts">IsBlockedForPlanSecondaryCosts</strong><br /><br /><small></small></td><td><a href="#fis_pkzks">FIS_PKZKS</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORPLANSECONDARYCOSTS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORPLANSECONDARYCOSTS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORPLANSECONDARYCOSTS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-isblockedforplanrevenues">IsBlockedForPlanRevenues</strong><br /><br /><small></small></td><td><a href="#fis_pkzer">FIS_PKZER</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORPLANREVENUES@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORPLANREVENUES@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ISBLOCKEDFORPLANREVENUES@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcenterallocationmethod">CostCenterAllocationMethod</strong><br /><br /><small></small></td><td><a href="#vmeth">VMETH</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERALLOCATIONMETHOD@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERALLOCATIONMETHOD@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERALLOCATIONMETHOD@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-consumptionqtyisrecorded">ConsumptionQtyIsRecorded</strong><br /><br /><small></small></td><td><a href="#mgefl">MGEFL</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.CONSUMPTIONQTYISRECORDED@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.CONSUMPTIONQTYISRECORDED@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.CONSUMPTIONQTYISRECORDED@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-department">Department</strong><br /><br /><small></small></td><td><a href="#abtei">ABTEI</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.DEPARTMENT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.DEPARTMENT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.DEPARTMENT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-subsequentcostcenter">SubsequentCostCenter</strong><br /><br /><small></small></td><td><a href="#nkost">NKOST</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.SUBSEQUENTCOSTCENTER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.SUBSEQUENTCOSTCENTER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.SUBSEQUENTCOSTCENTER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-conditionusage">ConditionUsage</strong><br /><br /><small></small></td><td><a href="#kvewe">KVEWE</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.CONDITIONUSAGE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.CONDITIONUSAGE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.CONDITIONUSAGE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-conditionapplication">ConditionApplication</strong><br /><br /><small></small></td><td><a href="#kappl">KAPPL</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.CONDITIONAPPLICATION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.CONDITIONAPPLICATION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.CONDITIONAPPLICATION@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcenteraccountingoverhead">CostCenterAccountingOverhead</strong><br /><br /><small></small></td><td><a href="#koszschl">KOSZSCHL</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERACCOUNTINGOVERHEAD@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERACCOUNTINGOVERHEAD@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERACCOUNTINGOVERHEAD@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-country">Country</strong><br /><br /><small></small></td><td><a href="#land1">LAND1</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COUNTRY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COUNTRY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COUNTRY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_Country"</td></tr>
<tr><td><strong id="costcenter-formofaddress">FormOfAddress</strong><br /><br /><small></small></td><td><a href="#anred">ANRED</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.FORMOFADDRESS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.FORMOFADDRESS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.FORMOFADDRESS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-addressname">AddressName</strong><br /><br /><small></small></td><td><a href="#name1_gp">NAME1_GP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ADDRESSNAME@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ADDRESSNAME@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ADDRESSNAME@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-addressadditionalname">AddressAdditionalName</strong><br /><br /><small></small></td><td><a href="#name2_gp">NAME2_GP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ADDRESSADDITIONALNAME@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ADDRESSADDITIONALNAME@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ADDRESSADDITIONALNAME@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcenteraddrname3">CostCenterAddrName3</strong><br /><br /><small></small></td><td><a href="#name3_gp">NAME3_GP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERADDRNAME3@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERADDRNAME3@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERADDRNAME3@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcenteraddrname4">CostCenterAddrName4</strong><br /><br /><small></small></td><td><a href="#name4_gp">NAME4_GP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERADDRNAME4@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERADDRNAME4@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERADDRNAME4@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-cityname">CityName</strong><br /><br /><small></small></td><td><a href="#ort01_gp">ORT01_GP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.CITYNAME@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.CITYNAME@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.CITYNAME@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-district">District</strong><br /><br /><small></small></td><td><a href="#ort02_gp">ORT02_GP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.DISTRICT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.DISTRICT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.DISTRICT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-streetaddressname">StreetAddressName</strong><br /><br /><small></small></td><td><a href="#stras_gp">STRAS_GP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.STREETADDRESSNAME@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.STREETADDRESSNAME@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.STREETADDRESSNAME@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-pobox">POBox</strong><br /><br /><small></small></td><td><a href="#pfach">PFACH</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.POBOX@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.POBOX@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.POBOX@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-postalcode">PostalCode</strong><br /><br /><small></small></td><td><a href="#pstlz">PSTLZ</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.POSTALCODE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.POSTALCODE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.POSTALCODE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-poboxpostalcode">POBoxPostalCode</strong><br /><br /><small></small></td><td><a href="#pstl2">PSTL2</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.POBOXPOSTALCODE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.POBOXPOSTALCODE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.POBOXPOSTALCODE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-region">Region</strong><br /><br /><small></small></td><td><a href="#regio">REGIO</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.REGION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.REGION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.REGION@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_Region"</td></tr>
<tr><td><strong id="costcenter-language">Language</strong><br /><br /><small></small></td><td><a href="#spras">SPRAS</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.LANGUAGE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.LANGUAGE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.LANGUAGE@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_Language"</td></tr>
<tr><td><strong id="costcenter-teleboxnumber">TeleboxNumber</strong><br /><br /><small></small></td><td><a href="#telbx">TELBX</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.TELEBOXNUMBER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.TELEBOXNUMBER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.TELEBOXNUMBER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-phonenumber1">PhoneNumber1</strong><br /><br /><small></small></td><td><a href="#telf1">TELF1</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.PHONENUMBER1@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.PHONENUMBER1@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.PHONENUMBER1@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-phonenumber2">PhoneNumber2</strong><br /><br /><small></small></td><td><a href="#telf2">TELF2</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.PHONENUMBER2@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.PHONENUMBER2@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.PHONENUMBER2@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-faxnumber">FaxNumber</strong><br /><br /><small></small></td><td><a href="#telfx">TELFX</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.FAXNUMBER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.FAXNUMBER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.FAXNUMBER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-teletexnumber">TeletexNumber</strong><br /><br /><small></small></td><td><a href="#teltx">TELTX</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.TELETEXNUMBER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.TELETEXNUMBER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.TELETEXNUMBER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-telexnumber">TelexNumber</strong><br /><br /><small></small></td><td><a href="#telx1">TELX1</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.TELEXNUMBER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.TELEXNUMBER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.TELEXNUMBER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-datacommunicationphonenumber">DataCommunicationPhoneNumber</strong><br /><br /><small></small></td><td><a href="#datlt">DATLT</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.DATACOMMUNICATIONPHONENUMBER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.DATACOMMUNICATIONPHONENUMBER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.DATACOMMUNICATIONPHONENUMBER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcenterprinterdestination">CostCenterPrinterDestination</strong><br /><br /><small></small></td><td><a href="#kdnam">KDNAM</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERPRINTERDESTINATION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERPRINTERDESTINATION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERPRINTERDESTINATION@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcenterstandardhierarea">CostCenterStandardHierArea</strong><br /><br /><small></small></td><td><a href="#khinr">KHINR</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERSTANDARDHIERAREA@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERSTANDARDHIERAREA@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERSTANDARDHIERAREA@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcollector">CostCollector</strong><br /><br /><small></small></td><td><a href="#cckey">CCKEY</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCOLLECTOR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCOLLECTOR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCOLLECTOR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcenteriscomplete">CostCenterIsComplete</strong><br /><br /><small></small></td><td><a href="#kskom">KSKOM</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERISCOMPLETE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERISCOMPLETE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERISCOMPLETE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-isstatisticalcostcenter">IsStatisticalCostCenter</strong><br /><br /><small></small></td><td><a href="#fins_xkostl_stat">FINS_XKOSTL_STAT</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ISSTATISTICALCOSTCENTER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ISSTATISTICALCOSTCENTER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ISSTATISTICALCOSTCENTER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-objectinternalid">ObjectInternalID</strong><br /><br /><small></small></td><td><a href="#j_objnr">J_OBJNR</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.OBJECTINTERNALID@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.OBJECTINTERNALID@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.OBJECTINTERNALID@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcenterfunction">CostCenterFunction</strong><br /><br /><small></small></td><td><a href="#funkt_dlk">FUNKT_DLK</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERFUNCTION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERFUNCTION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERFUNCTION@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcenteralternativefunction">CostCenterAlternativeFunction</strong><br /><br /><small></small></td><td><a href="#afunk_dlk">AFUNK_DLK</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERALTERNATIVEFUNCTION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERALTERNATIVEFUNCTION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERALTERNATIVEFUNCTION@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-functionalarea">FunctionalArea</strong><br /><br /><small></small></td><td><a href="#fkber">FKBER</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.FUNCTIONALAREA@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.FUNCTIONALAREA@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.FUNCTIONALAREA@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_FunctionalArea"</td></tr>
<tr><td><strong id="costcenter-actyindepformulaplanningtmpl">ActyIndepFormulaPlanningTmpl</strong><br /><br /><small></small></td><td><a href="#cca_templ_cpi">CCA_TEMPL_CPI</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ACTYINDEPFORMULAPLANNINGTMPL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ACTYINDEPFORMULAPLANNINGTMPL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ACTYINDEPFORMULAPLANNINGTMPL@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_ActivityBasedCostingTmplCpi"</td></tr>
<tr><td><strong id="costcenter-actydepdntformulaplanningtmpl">ActyDepdntFormulaPlanningTmpl</strong><br /><br /><small></small></td><td><a href="#cca_templ_cpd">CCA_TEMPL_CPD</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ACTYDEPDNTFORMULAPLANNINGTMPL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ACTYDEPDNTFORMULAPLANNINGTMPL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ACTYDEPDNTFORMULAPLANNINGTMPL@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_ActivityBasedCostingTmplCpd"</td></tr>
<tr><td><strong id="costcenter-actyindependentallocationtmpl">ActyIndependentAllocationTmpl</strong><br /><br /><small></small></td><td><a href="#cca_templ_sci">CCA_TEMPL_SCI</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ACTYINDEPENDENTALLOCATIONTMPL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ACTYINDEPENDENTALLOCATIONTMPL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ACTYINDEPENDENTALLOCATIONTMPL@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_ActivityBasedCostingTmplSci"</td></tr>
<tr><td><strong id="costcenter-actydependentallocationtmpl">ActyDependentAllocationTmpl</strong><br /><br /><small></small></td><td><a href="#cca_templ_scd">CCA_TEMPL_SCD</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ACTYDEPENDENTALLOCATIONTMPL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ACTYDEPENDENTALLOCATIONTMPL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ACTYDEPENDENTALLOCATIONTMPL@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_ActivityBasedCostingTmplScd"</td></tr>
<tr><td><strong id="costcenter-actlindepstatisticalkeyfigures">ActlIndepStatisticalKeyFigures</strong><br /><br /><small></small></td><td><a href="#cca_templ_ski">CCA_TEMPL_SKI</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ACTLINDEPSTATISTICALKEYFIGURES@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ACTLINDEPSTATISTICALKEYFIGURES@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ACTLINDEPSTATISTICALKEYFIGURES@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_ActivityBasedCostingTmplSki"</td></tr>
<tr><td><strong id="costcenter-actldepstatisticalkeyfigures">ActlDepStatisticalKeyFigures</strong><br /><br /><small></small></td><td><a href="#cca_templ_skd">CCA_TEMPL_SKD</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.ACTLDEPSTATISTICALKEYFIGURES@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.ACTLDEPSTATISTICALKEYFIGURES@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.ACTLDEPSTATISTICALKEYFIGURES@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_ActivityBasedCostingTmplSkd"</td></tr>
<tr><td><strong id="costcenter-jointventure">JointVenture</strong><br /><br /><small></small></td><td><a href="#jv_name">JV_NAME</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.JOINTVENTURE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.JOINTVENTURE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.JOINTVENTURE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-jointventurerecoverycode">JointVentureRecoveryCode</strong><br /><br /><small></small></td><td><a href="#jv_recind">JV_RECIND</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.JOINTVENTURERECOVERYCODE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.JOINTVENTURERECOVERYCODE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.JOINTVENTURERECOVERYCODE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-jointventureequitytype">JointVentureEquityType</strong><br /><br /><small></small></td><td><a href="#jv_etype">JV_ETYPE</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.JOINTVENTUREEQUITYTYPE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.JOINTVENTUREEQUITYTYPE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.JOINTVENTUREEQUITYTYPE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-jointventureobjecttype">JointVentureObjectType</strong><br /><br /><small></small></td><td><a href="#jv_otype">JV_OTYPE</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.JOINTVENTUREOBJECTTYPE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.JOINTVENTUREOBJECTTYPE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.JOINTVENTUREOBJECTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-jointventureclass">JointVentureClass</strong><br /><br /><small></small></td><td><a href="#jv_jibcl">JV_JIBCL</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.JOINTVENTURECLASS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.JOINTVENTURECLASS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.JOINTVENTURECLASS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-jointventuresubclass">JointVentureSubClass</strong><br /><br /><small></small></td><td><a href="#jv_jibsa">JV_JIBSA</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.JOINTVENTURESUBCLASS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.JOINTVENTURESUBCLASS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.JOINTVENTURESUBCLASS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-budgetcarryingcostcenter">BudgetCarryingCostCenter</strong><br /><br /><small></small></td><td><a href="#fco_budget_carrying_cost_ctr">FCO_BUDGET_CARRYING_COST_CTR</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.BUDGETCARRYINGCOSTCENTER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.BUDGETCARRYINGCOSTCENTER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.BUDGETCARRYINGCOSTCENTER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-availabilitycontrolprofile">AvailabilityControlProfile</strong><br /><br /><small></small></td><td><a href="#fco_avc_profile">FCO_AVC_PROFILE</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.AVAILABILITYCONTROLPROFILE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.AVAILABILITYCONTROLPROFILE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.AVAILABILITYCONTROLPROFILE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-availabilitycontrolisactive">AvailabilityControlIsActive</strong><br /><br /><small></small></td><td><a href="#fco_avc_for_cost_center_active">FCO_AVC_FOR_COST_CENTER_ACTIVE</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.AVAILABILITYCONTROLISACTIVE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.AVAILABILITYCONTROLISACTIVE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.AVAILABILITYCONTROLISACTIVE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-fund">Fund</strong><br /><br /><small></small></td><td><a href="#bp_geber">BP_GEBER</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.FUND@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.FUND@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.FUND@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-grantid">GrantID</strong><br /><br /><small></small></td><td><a href="#gm_grant_nbr">GM_GRANT_NBR</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.GRANTID@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.GRANTID@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.GRANTID@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-fundisfixassigned">FundIsFixAssigned</strong><br /><br /><small></small></td><td><a href="#psm_fund_fix_assigned">PSM_FUND_FIX_ASSIGNED</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.FUNDISFIXASSIGNED@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.FUNDISFIXASSIGNED@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.FUNDISFIXASSIGNED@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-grantidisfixassigned">GrantIDIsFixAssigned</strong><br /><br /><small></small></td><td><a href="#psm_grant_fix_assigned">PSM_GRANT_FIX_ASSIGNED</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.GRANTIDISFIXASSIGNED@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.GRANTIDISFIXASSIGNED@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.GRANTIDISFIXASSIGNED@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-functionalareaisfixassigned">FunctionalAreaIsFixAssigned</strong><br /><br /><small></small></td><td><a href="#psm_func_area_fix_assigned">PSM_FUNC_AREA_FIX_ASSIGNED</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.FUNCTIONALAREAISFIXASSIGNED@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.FUNCTIONALAREAISFIXASSIGNED@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.FUNCTIONALAREAISFIXASSIGNED@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcenterlastchangedbyuser">CostCenterLastChangedByUser</strong><br /><br /><small></small></td><td><a href="#fco_last_changed_by">FCO_LAST_CHANGED_BY</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERLASTCHANGEDBYUSER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERLASTCHANGEDBYUSER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERLASTCHANGEDBYUSER@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_LastChangedByUserContactCard"</td></tr>
<tr><td><strong id="costcenter-costcenterlastchangedondate">CostCenterLastChangedOnDate</strong><br /><br /><small></small></td><td><a href="#fco_last_changed_on">FCO_LAST_CHANGED_ON</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERLASTCHANGEDONDATE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERLASTCHANGEDONDATE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERLASTCHANGEDONDATE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-costcenterlastchangedattime">CostCenterLastChangedAtTime</strong><br /><br /><small></small></td><td><a href="#fco_last_changed_at">FCO_LAST_CHANGED_AT</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_COSTCENTER.COSTCENTERLASTCHANGEDATTIME@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_COSTCENTER.COSTCENTERLASTCHANGEDATTIME@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_COSTCENTER.COSTCENTERLASTCHANGEDATTIME@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplcpd">_ActivityBasedCostingTmplCpd</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplcpi">_ActivityBasedCostingTmplCpi</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplscd">_ActivityBasedCostingTmplScd</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplsci">_ActivityBasedCostingTmplSci</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplskd">_ActivityBasedCostingTmplSkd</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_activitybasedcostingtmplski">_ActivityBasedCostingTmplSki</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a> (path: <a href="#i_activitybasedcostingtmpl">I_ActivityBasedCostingTmpl</a>.<a href="#i_activitybasedcostingtmpl-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_availabilityctrlprofile">_AvailabilityCtrlProfile</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_availabilityctrlprofile">I_AvailabilityCtrlProfile</a> (path: <a href="#i_availabilityctrlprofile">I_AvailabilityCtrlProfile</a>.<a href="#i_availabilityctrlprofile-availabilitycontrolprofile">AvailabilityControlProfile</a>) via <a href="#costcenter-availabilitycontrolprofile">AvailabilityControlProfile</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_businessarea">_BusinessArea</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_businessarea">I_BusinessArea</a> (path: <a href="#i_businessarea">I_BusinessArea</a>.<a href="#i_businessarea-businessarea">BusinessArea</a>) via <a href="#costcenter-businessarea">BusinessArea</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_companycode">_CompanyCode</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_companycode">I_CompanyCode</a> (path: <a href="#i_companycode">I_CompanyCode</a>.<a href="#i_companycode-companycode">CompanyCode</a>) via <a href="#costcenter-companycode">CompanyCode</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_controllingarea">_ControllingArea</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_controllingarea">I_ControllingArea</a> (path: <a href="#i_controllingarea">I_ControllingArea</a>.<a href="#i_controllingarea-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_costcentercategory">_CostCenterCategory</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_costcentercategory">I_CostCenterCategory</a> (path: <a href="#i_costcentercategory">I_CostCenterCategory</a>.<a href="#i_costcentercategory-costcentercategory">CostCenterCategory</a>) via <a href="#costcenter-costcentercategory">CostCenterCategory</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_costcenterhierarchynode">_CostCenterHierarchyNode</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to many <a href="#i_costcenterhierarchynode">I_CostCenterHierarchyNode</a> (path: <a href="#i_costcenterhierarchynode">I_CostCenterHierarchyNode</a>.<a href="#i_costcenterhierarchynode-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_costingsheetprocedure">_CostingSheetProcedure</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_costingsheetprocedure">I_CostingSheetProcedure</a> (path: <a href="#i_costingsheetprocedure">I_CostingSheetProcedure</a>.<a href="#i_costingsheetprocedure-conditionusage">ConditionUsage</a>) via <a href="#costcenter"></a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_country">_Country</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_country">I_Country</a> (path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#costcenter-country">Country</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_currency">_Currency</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_currency">I_Currency</a> (path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#costcenter-costcentercurrency">CostCenterCurrency</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_functionalarea">_FunctionalArea</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_functionalarea">I_FunctionalArea</a> (path: <a href="#i_functionalarea">I_FunctionalArea</a>.<a href="#i_functionalarea-functionalarea">FunctionalArea</a>) via <a href="#costcenter-functionalarea">FunctionalArea</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_language">_Language</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_language">I_Language</a> (path: <a href="#i_language">I_Language</a>.<a href="#i_language-language">Language</a>) via <a href="#costcenter-language">Language</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_lastchangedbyusercontactcard">_LastChangedByUserContactCard</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_usercontactcard">I_UserContactCard</a> (path: <a href="#i_usercontactcard">I_UserContactCard</a>.<a href="#i_usercontactcard-contactcardid">ContactCardID</a>) via <a href="#costcenter-costcenterlastchangedbyuser">CostCenterLastChangedByUser</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_profitcenter">_ProfitCenter</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to many <a href="#i_profitcenter">I_ProfitCenter</a> (path: <a href="#i_profitcenter">I_ProfitCenter</a>.<a href="#i_profitcenter-profitcenter">ProfitCenter</a>) via <a href="#costcenter-profitcenter">ProfitCenter</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_region">_Region</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_region">I_Region</a> (path: <a href="#i_region">I_Region</a>.<a href="#i_region-region">Region</a>) via <a href="#costcenter-region">Region</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_text">_Text</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to many <a href="#i_costcentertext">I_CostCenterText</a> (path: <a href="#i_costcentertext">I_CostCenterText</a>.<a href="#i_costcentertext-controllingarea">ControllingArea</a>) via <a href="#costcenter-controllingarea">ControllingArea</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_usercrtedcontactcard">_UserCrtedContactCard</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_usercontactcard">I_UserContactCard</a> (path: <a href="#i_usercontactcard">I_UserContactCard</a>.<a href="#i_usercontactcard-contactcardid">ContactCardID</a>) via <a href="#costcenter-costcentercreatedbyuser">CostCenterCreatedByUser</a><br /><br /></td></tr>
<tr><td><strong id="costcenter-_userrespcontactcard">_UserRespContactCard</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_usercontactcard">I_UserContactCard</a> (path: <a href="#i_usercontactcard">I_UserContactCard</a>.<a href="#i_usercontactcard-contactcardid">ContactCardID</a>) via <a href="#costcenter-costctrresponsibleuser">CostCtrResponsibleUser</a><br /><br /></td></tr>
</table>

## Type Definitions

### ABTEI

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>ABTEI@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>ABTEI@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>ABTEI@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### AFUNK_DLK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>AFUNK_DLK@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>AFUNK_DLK@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>AFUNK_DLK@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### ANRED

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(15)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>ANRED@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>ANRED@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>ANRED@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### AUFKALSM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>AUFKALSM@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>AUFKALSM@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>AUFKALSM@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### BKZER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>BKZER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>BKZER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>BKZER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### BKZKP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>BKZKP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>BKZKP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>BKZKP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### BKZKS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>BKZKS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>BKZKS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>BKZKS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### BKZOB

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>BKZOB@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>BKZOB@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>BKZOB@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### BP_GEBER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>BP_GEBER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>BP_GEBER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>BP_GEBER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### BUKRS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>BUKRS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>BUKRS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>BUKRS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### CCA_TEMPL_CPD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>CCA_TEMPL_CPD@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>CCA_TEMPL_CPD@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>CCA_TEMPL_CPD@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### CCA_TEMPL_CPI

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>CCA_TEMPL_CPI@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>CCA_TEMPL_CPI@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>CCA_TEMPL_CPI@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### CCA_TEMPL_SCD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>CCA_TEMPL_SCD@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>CCA_TEMPL_SCD@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>CCA_TEMPL_SCD@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### CCA_TEMPL_SCI

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>CCA_TEMPL_SCI@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>CCA_TEMPL_SCI@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>CCA_TEMPL_SCI@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### CCA_TEMPL_SKD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>CCA_TEMPL_SKD@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>CCA_TEMPL_SKD@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>CCA_TEMPL_SKD@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### CCA_TEMPL_SKI

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>CCA_TEMPL_SKI@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>CCA_TEMPL_SKI@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>CCA_TEMPL_SKI@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### CCKEY

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(23)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>CCKEY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>CCKEY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>CCKEY@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### DATAB

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>DATAB@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>DATAB@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>DATAB@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### DATBI

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>DATBI@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>DATBI@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>DATBI@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### DATLT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(14)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>DATLT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>DATLT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>DATLT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### ERFDT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>ERFDT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>ERFDT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>ERFDT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### ERFNM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>ERFNM@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>ERFNM@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>ERFNM@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FCO_AVC_FOR_COST_CENTER_ACTIVE

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FCO_AVC_FOR_COST_CENTER_ACTIVE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FCO_AVC_FOR_COST_CENTER_ACTIVE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FCO_AVC_FOR_COST_CENTER_ACTIVE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FCO_AVC_PROFILE

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FCO_AVC_PROFILE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FCO_AVC_PROFILE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FCO_AVC_PROFILE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FCO_BUDGET_CARRYING_COST_CTR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FCO_BUDGET_CARRYING_COST_CTR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FCO_BUDGET_CARRYING_COST_CTR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FCO_BUDGET_CARRYING_COST_CTR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FCO_LAST_CHANGED_AT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Time</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FCO_LAST_CHANGED_AT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FCO_LAST_CHANGED_AT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FCO_LAST_CHANGED_AT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FCO_LAST_CHANGED_BY

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FCO_LAST_CHANGED_BY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FCO_LAST_CHANGED_BY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FCO_LAST_CHANGED_BY@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FCO_LAST_CHANGED_ON

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FCO_LAST_CHANGED_ON@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FCO_LAST_CHANGED_ON@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FCO_LAST_CHANGED_ON@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FINS_XKOSTL_STAT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FINS_XKOSTL_STAT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FINS_XKOSTL_STAT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FINS_XKOSTL_STAT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FIS_PKZER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FIS_PKZER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FIS_PKZER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FIS_PKZER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FIS_PKZKS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FIS_PKZKS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FIS_PKZKS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FIS_PKZKS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FKBER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(16)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FKBER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FKBER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FKBER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FUNKT_DLK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FUNKT_DLK@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FUNKT_DLK@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FUNKT_DLK@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### GM_GRANT_NBR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(20)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>GM_GRANT_NBR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>GM_GRANT_NBR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>GM_GRANT_NBR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### GSBER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>GSBER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>GSBER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>GSBER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### JV_ETYPE

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>JV_ETYPE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>JV_ETYPE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>JV_ETYPE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### JV_JIBCL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>JV_JIBCL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>JV_JIBCL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>JV_JIBCL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### JV_JIBSA

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(5)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>JV_JIBSA@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>JV_JIBSA@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>JV_JIBSA@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### JV_NAME

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>JV_NAME@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>JV_NAME@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>JV_NAME@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### JV_OTYPE

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>JV_OTYPE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>JV_OTYPE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>JV_OTYPE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### JV_RECIND

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>JV_RECIND@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>JV_RECIND@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>JV_RECIND@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### J_OBJNR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(22)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>J_OBJNR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>J_OBJNR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>J_OBJNR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KAPPL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KAPPL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KAPPL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KAPPL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KDNAM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KDNAM@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KDNAM@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KDNAM@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KHINR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KHINR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KHINR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KHINR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KOKRS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KOKRS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KOKRS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KOKRS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KOSAR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KOSAR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KOSAR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KOSAR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KOSTL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KOSTL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KOSTL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KOSTL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KOSZSCHL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KOSZSCHL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KOSZSCHL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KOSZSCHL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KSKOM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KSKOM@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KSKOM@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KSKOM@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KVEWE

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KVEWE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KVEWE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KVEWE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### LAND1

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>LAND1@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>LAND1@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>LAND1@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### LOGSYSTEM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>LOGSYSTEM@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>LOGSYSTEM@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>LOGSYSTEM@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### MGEFL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>MGEFL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>MGEFL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>MGEFL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### NAME1_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>NAME1_GP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>NAME1_GP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>NAME1_GP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### NAME2_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>NAME2_GP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>NAME2_GP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>NAME2_GP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### NAME3_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>NAME3_GP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>NAME3_GP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>NAME3_GP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### NAME4_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>NAME4_GP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>NAME4_GP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>NAME4_GP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### NKOST

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>NKOST@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>NKOST@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>NKOST@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### ORT01_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>ORT01_GP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>ORT01_GP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>ORT01_GP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### ORT02_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>ORT02_GP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>ORT02_GP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>ORT02_GP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### PFACH

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>PFACH@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>PFACH@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>PFACH@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### PKZKP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>PKZKP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>PKZKP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>PKZKP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### PRCTR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>PRCTR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>PRCTR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>PRCTR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### PSM_FUNC_AREA_FIX_ASSIGNED

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>PSM_FUNC_AREA_FIX_ASSIGNED@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>PSM_FUNC_AREA_FIX_ASSIGNED@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>PSM_FUNC_AREA_FIX_ASSIGNED@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### PSM_FUND_FIX_ASSIGNED

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>PSM_FUND_FIX_ASSIGNED@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>PSM_FUND_FIX_ASSIGNED@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>PSM_FUND_FIX_ASSIGNED@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### PSM_GRANT_FIX_ASSIGNED

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>PSM_GRANT_FIX_ASSIGNED@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>PSM_GRANT_FIX_ASSIGNED@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>PSM_GRANT_FIX_ASSIGNED@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### PSTL2

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>PSTL2@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>PSTL2@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>PSTL2@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### PSTLZ

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>PSTLZ@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>PSTLZ@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>PSTLZ@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### REGIO

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>REGIO@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>REGIO@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>REGIO@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### SPRAS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>SPRAS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>SPRAS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>SPRAS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### STRAS_GP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>STRAS_GP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>STRAS_GP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>STRAS_GP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TELBX

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(15)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TELBX@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TELBX@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TELBX@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TELF1

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(16)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TELF1@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TELF1@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TELF1@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TELF2

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(16)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TELF2@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TELF2@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TELF2@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TELFX

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(31)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TELFX@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TELFX@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TELFX@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TELTX

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(30)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TELTX@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TELTX@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TELTX@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TELX1

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(30)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TELX1@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TELX1@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TELX1@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TXJCD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(15)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TXJCD@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TXJCD@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TXJCD@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VERAK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(20)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VERAK@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VERAK@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VERAK@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VERAK_USER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VERAK_USER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VERAK_USER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VERAK_USER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VMETH

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VMETH@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VMETH@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VMETH@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### WAERS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(5)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>WAERS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>WAERS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>WAERS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### WERKS_D

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>WERKS_D@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>WERKS_D@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>WERKS_D@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

