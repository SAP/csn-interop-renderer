## Entity Definitions

### BillingDocument

<table>
<tr><th>Element</th><th>Type</th><th>Description</th></tr><tr><td><strong id="billingdocument-billingdocument">BillingDocument</strong><br /><br /><small></small></td><td><a href="#vbeln_vf">VBELN_VF</a></td><td>key: true<br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-sddocumentcategory">SDDocumentCategory</strong><br /><br /><small></small></td><td><a href="#vbtypl">VBTYPL</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.SDDOCUMENTCATEGORY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.SDDOCUMENTCATEGORY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.SDDOCUMENTCATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_SDDocumentCategory"</td></tr>
<tr><td><strong id="billingdocument-billingdocumentcategory">BillingDocumentCategory</strong><br /><br /><small></small></td><td><a href="#fktyp">FKTYP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTCATEGORY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTCATEGORY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTCATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_BillingDocumentCategory"</td></tr>
<tr><td><strong id="billingdocument-billingdocumenttype">BillingDocumentType</strong><br /><br /><small></small></td><td><a href="#fkart">FKART</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTTYPE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTTYPE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_BillingDocumentType"</td></tr>
<tr><td><strong id="billingdocument-createdbyuser">CreatedByUser</strong><br /><br /><small></small></td><td><a href="#ernam">ERNAM</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CREATEDBYUSER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CREATEDBYUSER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CREATEDBYUSER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-creationdate">CreationDate</strong><br /><br /><small></small></td><td><a href="#erdat">ERDAT</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CREATIONDATE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CREATIONDATE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CREATIONDATE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-creationtime">CreationTime</strong><br /><br /><small></small></td><td><a href="#erzet">ERZET</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CREATIONTIME@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CREATIONTIME@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CREATIONTIME@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-lastchangedate">LastChangeDate</strong><br /><br /><small></small></td><td><a href="#aedat">AEDAT</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.LASTCHANGEDATE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.LASTCHANGEDATE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.LASTCHANGEDATE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-lastchangedatetime">LastChangeDateTime</strong><br /><br /><small></small></td><td><a href="#timestampl">TIMESTAMPL</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.LASTCHANGEDATETIME@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.LASTCHANGEDATETIME@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.LASTCHANGEDATETIME@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-logicalsystem">LogicalSystem</strong><br /><br /><small></small></td><td><a href="#logsys">LOGSYS</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.LOGICALSYSTEM@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.LOGICALSYSTEM@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.LOGICALSYSTEM@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_LogicalSystem"</td></tr>
<tr><td><strong id="billingdocument-salesorganization">SalesOrganization</strong><br /><br /><small></small></td><td><a href="#vkorg">VKORG</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.SALESORGANIZATION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.SALESORGANIZATION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.SALESORGANIZATION@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_SalesOrganization"</td></tr>
<tr><td><strong id="billingdocument-distributionchannel">DistributionChannel</strong><br /><br /><small></small></td><td><a href="#vtweg">VTWEG</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.DISTRIBUTIONCHANNEL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.DISTRIBUTIONCHANNEL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.DISTRIBUTIONCHANNEL@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_DistributionChannel"</td></tr>
<tr><td><strong id="billingdocument-division">Division</strong><br /><br /><small></small></td><td><a href="#spart">SPART</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.DIVISION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.DIVISION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.DIVISION@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_Division"</td></tr>
<tr><td><strong id="billingdocument-billingdocumentdate">BillingDocumentDate</strong><br /><br /><small></small></td><td><a href="#fkdat">FKDAT</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTDATE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTDATE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTDATE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-billingdocumentiscancelled">BillingDocumentIsCancelled</strong><br /><br /><small></small></td><td><a href="#fksto">FKSTO</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTISCANCELLED@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTISCANCELLED@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTISCANCELLED@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-cancelledbillingdocument">CancelledBillingDocument</strong><br /><br /><small></small></td><td><a href="#sfakn">SFAKN</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_BillingDocumentStdVH","element":"BillingDocument"&rbrace;&rbrace;]</code><br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CANCELLEDBILLINGDOCUMENT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CANCELLEDBILLINGDOCUMENT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CANCELLEDBILLINGDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_CancelledBillingDocument"</td></tr>
<tr><td><strong id="billingdocument-billingdoccombinationcriteria">BillingDocCombinationCriteria</strong><br /><br /><small></small></td><td><a href="#dzukri">DZUKRI</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCCOMBINATIONCRITERIA@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCCOMBINATIONCRITERIA@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCCOMBINATIONCRITERIA@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-manualinvoicemaintisrelevant">ManualInvoiceMaintIsRelevant</strong><br /><br /><small></small></td><td><a href="#mrnkz">MRNKZ</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.MANUALINVOICEMAINTISRELEVANT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.MANUALINVOICEMAINTISRELEVANT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.MANUALINVOICEMAINTISRELEVANT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-nmbrofpages">NmbrOfPages</strong><br /><br /><small></small></td><td><a href="#j_1anopg">J_1ANOPG</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.NMBROFPAGES@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.NMBROFPAGES@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.NMBROFPAGES@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-isintrastatreportingrelevant">IsIntrastatReportingRelevant</strong><br /><br /><small></small></td><td><a href="#intra_rel">INTRA_REL</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.ISINTRASTATREPORTINGRELEVANT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.ISINTRASTATREPORTINGRELEVANT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.ISINTRASTATREPORTINGRELEVANT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-isintrastatreportingexcluded">IsIntrastatReportingExcluded</strong><br /><br /><small></small></td><td><a href="#intra_excl">INTRA_EXCL</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.ISINTRASTATREPORTINGEXCLUDED@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.ISINTRASTATREPORTINGEXCLUDED@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.ISINTRASTATREPORTINGEXCLUDED@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-billingdocumentistemporary">BillingDocumentIsTemporary</strong><br /><br /><small></small></td><td><a href="#vf_draft_indicator">VF_DRAFT_INDICATOR</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTISTEMPORARY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTISTEMPORARY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGDOCUMENTISTEMPORARY@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-totalnetamount">TotalNetAmount</strong><br /><br /><small></small></td><td><a href="#netwr">NETWR</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.TOTALNETAMOUNT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.TOTALNETAMOUNT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.TOTALNETAMOUNT@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@Semantics.amount.currencyCode: "TransactionCurrency"</td></tr>
<tr><td><strong id="billingdocument-transactioncurrency">TransactionCurrency</strong><br /><br /><small></small></td><td><a href="#waerk">WAERK</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.TRANSACTIONCURRENCY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.TRANSACTIONCURRENCY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.TRANSACTIONCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_TransactionCurrency"<br />@Semantics.currencyCode: true</td></tr>
<tr><td><strong id="billingdocument-statisticscurrency">StatisticsCurrency</strong><br /><br /><small></small></td><td><a href="#stwae">STWAE</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.STATISTICSCURRENCY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.STATISTICSCURRENCY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.STATISTICSCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_StatisticsCurrency"<br />@Semantics.currencyCode: true</td></tr>
<tr><td><strong id="billingdocument-totaltaxamount">TotalTaxAmount</strong><br /><br /><small></small></td><td><a href="#mwsbp">MWSBP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.TOTALTAXAMOUNT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.TOTALTAXAMOUNT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.TOTALTAXAMOUNT@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@Semantics.amount.currencyCode: "TransactionCurrency"</td></tr>
<tr><td><strong id="billingdocument-customerpricegroup">CustomerPriceGroup</strong><br /><br /><small></small></td><td><a href="#konda">KONDA</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERPRICEGROUP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERPRICEGROUP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERPRICEGROUP@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_CustomerPriceGroup"</td></tr>
<tr><td><strong id="billingdocument-pricelisttype">PriceListType</strong><br /><br /><small></small></td><td><a href="#pltyp">PLTYP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.PRICELISTTYPE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.PRICELISTTYPE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.PRICELISTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_PriceListType"</td></tr>
<tr><td><strong id="billingdocument-taxdeparturecountry">TaxDepartureCountry</strong><br /><br /><small></small></td><td><a href="#landtx">LANDTX</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.TAXDEPARTURECOUNTRY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.TAXDEPARTURECOUNTRY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.TAXDEPARTURECOUNTRY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_TaxDepartureCountry"</td></tr>
<tr><td><strong id="billingdocument-vatregistration">VATRegistration</strong><br /><br /><small></small></td><td><a href="#stceg">STCEG</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.VATREGISTRATION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.VATREGISTRATION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.VATREGISTRATION@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-vatregistrationorigin">VATRegistrationOrigin</strong><br /><br /><small></small></td><td><a href="#stceg_h">STCEG_H</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.VATREGISTRATIONORIGIN@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.VATREGISTRATIONORIGIN@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.VATREGISTRATIONORIGIN@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_VATRegistrationOrigin"</td></tr>
<tr><td><strong id="billingdocument-vatregistrationcountry">VATRegistrationCountry</strong><br /><br /><small></small></td><td><a href="#stceg_l">STCEG_L</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.VATREGISTRATIONCOUNTRY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.VATREGISTRATIONCOUNTRY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.VATREGISTRATIONCOUNTRY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_VATRegistrationCountry"</td></tr>
<tr><td><strong id="billingdocument-hierarchytypepricing">HierarchyTypePricing</strong><br /><br /><small></small></td><td><a href="#hityp_pr">HITYP_PR</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.HIERARCHYTYPEPRICING@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.HIERARCHYTYPEPRICING@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.HIERARCHYTYPEPRICING@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification1">CustomerTaxClassification1</strong><br /><br /><small></small></td><td><a href="#taxk1">TAXK1</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION1@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION1@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION1@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification2">CustomerTaxClassification2</strong><br /><br /><small></small></td><td><a href="#taxk2">TAXK2</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION2@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION2@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION2@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification3">CustomerTaxClassification3</strong><br /><br /><small></small></td><td><a href="#taxk3">TAXK3</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION3@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION3@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION3@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification4">CustomerTaxClassification4</strong><br /><br /><small></small></td><td><a href="#taxk4">TAXK4</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION4@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION4@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION4@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification5">CustomerTaxClassification5</strong><br /><br /><small></small></td><td><a href="#taxk5">TAXK5</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION5@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION5@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION5@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification6">CustomerTaxClassification6</strong><br /><br /><small></small></td><td><a href="#taxk6">TAXK6</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION6@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION6@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION6@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification7">CustomerTaxClassification7</strong><br /><br /><small></small></td><td><a href="#taxk7">TAXK7</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION7@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION7@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION7@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification8">CustomerTaxClassification8</strong><br /><br /><small></small></td><td><a href="#taxk8">TAXK8</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION8@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION8@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION8@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification9">CustomerTaxClassification9</strong><br /><br /><small></small></td><td><a href="#taxk9">TAXK9</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION9@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION9@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERTAXCLASSIFICATION9@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-iseutriangulardeal">IsEUTriangularDeal</strong><br /><br /><small></small></td><td><a href="#xegdr">XEGDR</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.ISEUTRIANGULARDEAL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.ISEUTRIANGULARDEAL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.ISEUTRIANGULARDEAL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-sdpricingprocedure">SDPricingProcedure</strong><br /><br /><small></small></td><td><a href="#kalsmasd">KALSMASD</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.SDPRICINGPROCEDURE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.SDPRICINGPROCEDURE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.SDPRICINGPROCEDURE@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_SDPricingProcedure"</td></tr>
<tr><td><strong id="billingdocument-shippingcondition">ShippingCondition</strong><br /><br /><small></small></td><td><a href="#vsbed">VSBED</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.SHIPPINGCONDITION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.SHIPPINGCONDITION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.SHIPPINGCONDITION@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_ShippingCondition"</td></tr>
<tr><td><strong id="billingdocument-plantsupplier">PlantSupplier</strong><br /><br /><small></small></td><td><a href="#lifnr_wk">LIFNR_WK</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.PLANTSUPPLIER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.PLANTSUPPLIER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.PLANTSUPPLIER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-incotermsversion">IncotermsVersion</strong><br /><br /><small></small></td><td><a href="#incov">INCOV</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSVERSION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSVERSION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSVERSION@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_IncotermsVersion"</td></tr>
<tr><td><strong id="billingdocument-incotermsclassification">IncotermsClassification</strong><br /><br /><small></small></td><td><a href="#inco1">INCO1</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSCLASSIFICATION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSCLASSIFICATION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSCLASSIFICATION@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_IncotermsClassification"</td></tr>
<tr><td><strong id="billingdocument-incotermstransferlocation">IncotermsTransferLocation</strong><br /><br /><small></small></td><td><a href="#inco2">INCO2</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSTRANSFERLOCATION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSTRANSFERLOCATION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSTRANSFERLOCATION@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-incotermslocation1">IncotermsLocation1</strong><br /><br /><small></small></td><td><a href="#inco2_l">INCO2_L</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSLOCATION1@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSLOCATION1@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSLOCATION1@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-incotermslocation2">IncotermsLocation2</strong><br /><br /><small></small></td><td><a href="#inco3_l">INCO3_L</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSLOCATION2@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSLOCATION2@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSLOCATION2@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-payerparty">PayerParty</strong><br /><br /><small></small></td><td><a href="#kunrg">KUNRG</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_Customer_VH","element":"Customer"&rbrace;&rbrace;]</code><br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.PAYERPARTY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.PAYERPARTY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.PAYERPARTY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_PayerParty"</td></tr>
<tr><td><strong id="billingdocument-contractaccount">ContractAccount</strong><br /><br /><small></small></td><td><a href="#corr_vkont_kk">CORR_VKONT_KK</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CONTRACTACCOUNT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CONTRACTACCOUNT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CONTRACTACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-customerpaymentterms">CustomerPaymentTerms</strong><br /><br /><small></small></td><td><a href="#dzterm">DZTERM</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERPAYMENTTERMS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERPAYMENTTERMS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERPAYMENTTERMS@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_CustomerPaymentTerms"</td></tr>
<tr><td><strong id="billingdocument-paymentmethod">PaymentMethod</strong><br /><br /><small></small></td><td><a href="#schzw_bseg">SCHZW_BSEG</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.PAYMENTMETHOD@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.PAYMENTMETHOD@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.PAYMENTMETHOD@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_PaymentMethod"</td></tr>
<tr><td><strong id="billingdocument-paymentreference">PaymentReference</strong><br /><br /><small></small></td><td><a href="#kidno">KIDNO</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.PAYMENTREFERENCE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.PAYMENTREFERENCE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.PAYMENTREFERENCE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-fixedvaluedate">FixedValueDate</strong><br /><br /><small></small></td><td><a href="#valdt">VALDT</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.FIXEDVALUEDATE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.FIXEDVALUEDATE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.FIXEDVALUEDATE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-additionalvaluedays">AdditionalValueDays</strong><br /><br /><small></small></td><td><a href="#valtg">VALTG</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.ADDITIONALVALUEDAYS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.ADDITIONALVALUEDAYS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.ADDITIONALVALUEDAYS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-sepamandate">SEPAMandate</strong><br /><br /><small></small></td><td><a href="#sepa_mndid">SEPA_MNDID</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.SEPAMANDATE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.SEPAMANDATE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.SEPAMANDATE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-companycode">CompanyCode</strong><br /><br /><small></small></td><td><a href="#bukrs">BUKRS</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_CompanyCodeStdVH","element":"CompanyCode"&rbrace;&rbrace;]</code><br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.COMPANYCODE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.COMPANYCODE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.COMPANYCODE@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_CompanyCode"</td></tr>
<tr><td><strong id="billingdocument-fiscalyear">FiscalYear</strong><br /><br /><small></small></td><td><a href="#gjahr">GJAHR</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.FISCALYEAR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.FISCALYEAR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.FISCALYEAR@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_FiscalYear"</td></tr>
<tr><td><strong id="billingdocument-accountingdocument">AccountingDocument</strong><br /><br /><small></small></td><td><a href="#belnr_d">BELNR_D</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_AccountingDocumentStdVH","element":"AccountingDocument"&rbrace;,"additionalBinding":[&lbrace;"localElement":"CompanyCode","element":"CompanyCode"&rbrace;,&lbrace;"localElement":"FiscalYear","element":"FiscalYear"&rbrace;]&rbrace;]</code><br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGDOCUMENT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGDOCUMENT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_AccountingDocument"</td></tr>
<tr><td><strong id="billingdocument-fiscalperiod">FiscalPeriod</strong><br /><br /><small></small></td><td><a href="#poper">POPER</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.FISCALPERIOD@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.FISCALPERIOD@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.FISCALPERIOD@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-customeraccountassignmentgroup">CustomerAccountAssignmentGroup</strong><br /><br /><small></small></td><td><a href="#ktgrd">KTGRD</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERACCOUNTASSIGNMENTGROUP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERACCOUNTASSIGNMENTGROUP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERACCOUNTASSIGNMENTGROUP@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_CustomerAccountAssgmtGroup"</td></tr>
<tr><td><strong id="billingdocument-accountingexchangerateisset">AccountingExchangeRateIsSet</strong><br /><br /><small></small></td><td><a href="#cpkur">CPKUR</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGEXCHANGERATEISSET@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGEXCHANGERATEISSET@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGEXCHANGERATEISSET@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-accountingexchangerate">AccountingExchangeRate</strong><br /><br /><small></small></td><td><a href="#kurrf_not_converted">KURRF_NOT_CONVERTED</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGEXCHANGERATE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGEXCHANGERATE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGEXCHANGERATE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-exchangeratedate">ExchangeRateDate</strong><br /><br /><small></small></td><td><a href="#wwert_d">WWERT_D</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.EXCHANGERATEDATE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.EXCHANGERATEDATE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.EXCHANGERATEDATE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-exchangeratetype">ExchangeRateType</strong><br /><br /><small></small></td><td><a href="#kurst">KURST</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.EXCHANGERATETYPE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.EXCHANGERATETYPE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.EXCHANGERATETYPE@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_ExchangeRateType"</td></tr>
<tr><td><strong id="billingdocument-documentreferenceid">DocumentReferenceID</strong><br /><br /><small></small></td><td><a href="#xblnr_v1">XBLNR_V1</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.DOCUMENTREFERENCEID@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.DOCUMENTREFERENCEID@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.DOCUMENTREFERENCEID@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-assignmentreference">AssignmentReference</strong><br /><br /><small></small></td><td><a href="#ordnr_v">ORDNR_V</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.ASSIGNMENTREFERENCE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.ASSIGNMENTREFERENCE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.ASSIGNMENTREFERENCE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-reversalreason">ReversalReason</strong><br /><br /><small></small></td><td><a href="#stgrd">STGRD</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.REVERSALREASON@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.REVERSALREASON@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.REVERSALREASON@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_ReversalReason"</td></tr>
<tr><td><strong id="billingdocument-dunningarea">DunningArea</strong><br /><br /><small></small></td><td><a href="#maber">MABER</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_DunningAreaStdVH","element":"DunningArea"&rbrace;,"additionalBinding":[&lbrace;"localElement":"CompanyCode","element":"CompanyCode"&rbrace;]&rbrace;]</code><br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.DUNNINGAREA@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.DUNNINGAREA@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.DUNNINGAREA@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_DunningArea"<br />@ObjectModel.text.association: "_DunningAreaText"</td></tr>
<tr><td><strong id="billingdocument-dunningblockingreason">DunningBlockingReason</strong><br /><br /><small></small></td><td><a href="#mansp">MANSP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.DUNNINGBLOCKINGREASON@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.DUNNINGBLOCKINGREASON@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.DUNNINGBLOCKINGREASON@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_DunningBlockingReason"</td></tr>
<tr><td><strong id="billingdocument-dunningkey">DunningKey</strong><br /><br /><small></small></td><td><a href="#mschl">MSCHL</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.DUNNINGKEY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.DUNNINGKEY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.DUNNINGKEY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_DunningKey"</td></tr>
<tr><td><strong id="billingdocument-internalfinancialdocument">InternalFinancialDocument</strong><br /><br /><small></small></td><td><a href="#lcnum">LCNUM</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.INTERNALFINANCIALDOCUMENT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.INTERNALFINANCIALDOCUMENT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.INTERNALFINANCIALDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-isrelevantforaccrual">IsRelevantForAccrual</strong><br /><br /><small></small></td><td><a href="#isaccrualrelevant">ISACCRUALRELEVANT</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.ISRELEVANTFORACCRUAL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.ISRELEVANTFORACCRUAL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.ISRELEVANTFORACCRUAL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-soldtoparty">SoldToParty</strong><br /><br /><small></small></td><td><a href="#kunag">KUNAG</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_Customer_VH","element":"Customer"&rbrace;&rbrace;]</code><br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.SOLDTOPARTY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.SOLDTOPARTY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.SOLDTOPARTY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_SoldToParty"</td></tr>
<tr><td><strong id="billingdocument-partnercompany">PartnerCompany</strong><br /><br /><small></small></td><td><a href="#rassc">RASSC</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.PARTNERCOMPANY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.PARTNERCOMPANY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.PARTNERCOMPANY@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-purchaseorderbycustomer">PurchaseOrderByCustomer</strong><br /><br /><small></small></td><td><a href="#bstkd">BSTKD</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.PURCHASEORDERBYCUSTOMER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.PURCHASEORDERBYCUSTOMER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.PURCHASEORDERBYCUSTOMER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-customergroup">CustomerGroup</strong><br /><br /><small></small></td><td><a href="#kdgrp">KDGRP</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERGROUP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERGROUP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERGROUP@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_CustomerGroup"</td></tr>
<tr><td><strong id="billingdocument-country">Country</strong><br /><br /><small></small></td><td><a href="#lland">LLAND</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.COUNTRY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.COUNTRY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.COUNTRY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_Country"</td></tr>
<tr><td><strong id="billingdocument-citycode">CityCode</strong><br /><br /><small></small></td><td><a href="#cityc">CITYC</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CITYCODE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CITYCODE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CITYCODE@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_CityCode"</td></tr>
<tr><td><strong id="billingdocument-salesdistrict">SalesDistrict</strong><br /><br /><small></small></td><td><a href="#bzirk">BZIRK</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.SALESDISTRICT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.SALESDISTRICT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.SALESDISTRICT@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_SalesDistrict"</td></tr>
<tr><td><strong id="billingdocument-region">Region</strong><br /><br /><small></small></td><td><a href="#regio">REGIO</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.REGION@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.REGION@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.REGION@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_Region"</td></tr>
<tr><td><strong id="billingdocument-county">County</strong><br /><br /><small></small></td><td><a href="#counc">COUNC</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.COUNTY@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.COUNTY@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.COUNTY@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_County_2"</td></tr>
<tr><td><strong id="billingdocument-creditcontrolarea">CreditControlArea</strong><br /><br /><small></small></td><td><a href="#kkber">KKBER</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_CreditControlAreaStdVH","element":"CreditControlArea"&rbrace;&rbrace;]</code><br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CREDITCONTROLAREA@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CREDITCONTROLAREA@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CREDITCONTROLAREA@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_CreditControlArea"<br />@ObjectModel.text.association: "_CreditControlAreaText"</td></tr>
<tr><td><strong id="billingdocument-customerrebateagreement">CustomerRebateAgreement</strong><br /><br /><small></small></td><td><a href="#knuma">KNUMA</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERREBATEAGREEMENT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERREBATEAGREEMENT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.CUSTOMERREBATEAGREEMENT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-pricingdocument">PricingDocument</strong><br /><br /><small></small></td><td><a href="#knumv">KNUMV</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.PRICINGDOCUMENT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.PRICINGDOCUMENT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.PRICINGDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-overallsdprocessstatus">OverallSDProcessStatus</strong><br /><br /><small></small></td><td><a href="#gbstk">GBSTK</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.OVERALLSDPROCESSSTATUS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.OVERALLSDPROCESSSTATUS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.OVERALLSDPROCESSSTATUS@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_OverallSDProcessStatus"</td></tr>
<tr><td><strong id="billingdocument-overallbillingstatus">OverallBillingStatus</strong><br /><br /><small></small></td><td><a href="#vf_status">VF_STATUS</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.OVERALLBILLINGSTATUS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.OVERALLBILLINGSTATUS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.OVERALLBILLINGSTATUS@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_OverallBillingStatus"</td></tr>
<tr><td><strong id="billingdocument-accountingpostingstatus">AccountingPostingStatus</strong><br /><br /><small></small></td><td><a href="#buchk">BUCHK</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGPOSTINGSTATUS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGPOSTINGSTATUS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGPOSTINGSTATUS@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_AccountingPostingStatus"</td></tr>
<tr><td><strong id="billingdocument-accountingtransferstatus">AccountingTransferStatus</strong><br /><br /><small></small></td><td><a href="#rfbsk">RFBSK</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGTRANSFERSTATUS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGTRANSFERSTATUS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGTRANSFERSTATUS@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_AccountingTransferStatus"</td></tr>
<tr><td><strong id="billingdocument-billingissuetype">BillingIssueType</strong><br /><br /><small></small></td><td><a href="#vf_todo">VF_TODO</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGISSUETYPE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGISSUETYPE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.BILLINGISSUETYPE@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_BillingIssueType"</td></tr>
<tr><td><strong id="billingdocument-invoiceliststatus">InvoiceListStatus</strong><br /><br /><small></small></td><td><a href="#relik">RELIK</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.INVOICELISTSTATUS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.INVOICELISTSTATUS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.INVOICELISTSTATUS@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_InvoiceListStatus"</td></tr>
<tr><td><strong id="billingdocument-ovrlitmgeneralincompletionsts">OvrlItmGeneralIncompletionSts</strong><br /><br /><small></small></td><td><a href="#uvall_su">UVALL_SU</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.OVRLITMGENERALINCOMPLETIONSTS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.OVRLITMGENERALINCOMPLETIONSTS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.OVRLITMGENERALINCOMPLETIONSTS@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_OvrlItmGeneralIncompletionSts"</td></tr>
<tr><td><strong id="billingdocument-overallpricingincompletionsts">OverallPricingIncompletionSts</strong><br /><br /><small></small></td><td><a href="#uvprs_uk">UVPRS_UK</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.OVERALLPRICINGINCOMPLETIONSTS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.OVERALLPRICINGINCOMPLETIONSTS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.OVERALLPRICINGINCOMPLETIONSTS@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_OverallPricingIncompletionSts"</td></tr>
<tr><td><strong id="billingdocument-invoiceclearingstatus">InvoiceClearingStatus</strong><br /><br /><small></small></td><td><a href="#clrst">CLRST</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.INVOICECLEARINGSTATUS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.INVOICECLEARINGSTATUS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.INVOICECLEARINGSTATUS@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_InvoiceClearingStatus"</td></tr>
<tr><td><strong id="billingdocument-invoicelisttype">InvoiceListType</strong><br /><br /><small></small></td><td><a href="#fkart_rl">FKART_RL</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.INVOICELISTTYPE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.INVOICELISTTYPE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.INVOICELISTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;"<br />@ObjectModel.foreignKey.association: "_InvoiceListType"</td></tr>
<tr><td><strong id="billingdocument-invoicelistbillingdate">InvoiceListBillingDate</strong><br /><br /><small></small></td><td><a href="#fkdat_rl">FKDAT_RL</a></td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>I_BILLINGDOCUMENT.INVOICELISTBILLINGDATE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>I_BILLINGDOCUMENT.INVOICELISTBILLINGDATE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>I_BILLINGDOCUMENT.INVOICELISTBILLINGDATE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
<tr><td><strong id="billingdocument-_accountingdocument">_AccountingDocument</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_accountingdocument">I_AccountingDocument</a> (path: <a href="#i_accountingdocument">I_AccountingDocument</a>.<a href="#i_accountingdocument-companycode">CompanyCode</a>) via <a href="#billingdocument-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="billingdocument-_accountingpostingstatus">_AccountingPostingStatus</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_accountingpostingstatus">I_AccountingPostingStatus</a> (path: <a href="#i_accountingpostingstatus">I_AccountingPostingStatus</a>.<a href="#i_accountingpostingstatus-accountingpostingstatus">AccountingPostingStatus</a>) via <a href="#billingdocument-accountingpostingstatus">AccountingPostingStatus</a></td></tr>
<tr><td><strong id="billingdocument-_accountingtransferstatus">_AccountingTransferStatus</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_accountingtransferstatus">I_AccountingTransferStatus</a> (path: <a href="#i_accountingtransferstatus">I_AccountingTransferStatus</a>.<a href="#i_accountingtransferstatus-accountingtransferstatus">AccountingTransferStatus</a>) via <a href="#billingdocument-accountingtransferstatus">AccountingTransferStatus</a></td></tr>
<tr><td><strong id="billingdocument-_billingdocumentcategory">_BillingDocumentCategory</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_billingdocumentcategory">I_BillingDocumentCategory</a> (path: <a href="#i_billingdocumentcategory">I_BillingDocumentCategory</a>.<a href="#i_billingdocumentcategory-billingdocumentcategory">BillingDocumentCategory</a>) via <a href="#billingdocument-billingdocumentcategory">BillingDocumentCategory</a></td></tr>
<tr><td><strong id="billingdocument-_billingdocumenttype">_BillingDocumentType</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_billingdocumenttype">I_BillingDocumentType</a> (path: <a href="#i_billingdocumenttype">I_BillingDocumentType</a>.<a href="#i_billingdocumenttype-billingdocumenttype">BillingDocumentType</a>) via <a href="#billingdocument-billingdocumenttype">BillingDocumentType</a></td></tr>
<tr><td><strong id="billingdocument-_billingissuetype">_BillingIssueType</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_billingissuetype">I_BillingIssueType</a> (path: <a href="#i_billingissuetype">I_BillingIssueType</a>.<a href="#i_billingissuetype-billingissuetype">BillingIssueType</a>) via <a href="#billingdocument-billingissuetype">BillingIssueType</a></td></tr>
<tr><td><strong id="billingdocument-_cancelledbillingdocument">_CancelledBillingDocument</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#billingdocument">BillingDocument</a> (path: <a href="#billingdocument">BillingDocument</a>.<a href="#billingdocument-billingdocument">BillingDocument</a>) via <a href="#billingdocument-cancelledbillingdocument">CancelledBillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_citycode">_CityCode</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_citycode">I_CityCode</a> (path: <a href="#i_citycode">I_CityCode</a>.<a href="#i_citycode-citycode">CityCode</a>) via <a href="#billingdocument-citycode">CityCode</a></td></tr>
<tr><td><strong id="billingdocument-_companycode">_CompanyCode</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_companycode">I_CompanyCode</a> (path: <a href="#i_companycode">I_CompanyCode</a>.<a href="#i_companycode-companycode">CompanyCode</a>) via <a href="#billingdocument-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="billingdocument-_country">_Country</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_country">I_Country</a> (path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#billingdocument-country">Country</a></td></tr>
<tr><td><strong id="billingdocument-_county">_County</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_countycode">I_CountyCode</a> (path: <a href="#i_countycode">I_CountyCode</a>.<a href="#i_countycode-country">Country</a>) via <a href="#billingdocument-country">Country</a></td></tr>
<tr><td><strong id="billingdocument-_county_2">_County_2</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_taxingcounty">I_TaxingCounty</a> (path: <a href="#i_taxingcounty">I_TaxingCounty</a>.<a href="#i_taxingcounty-country">Country</a>) via <a href="#billingdocument-country">Country</a></td></tr>
<tr><td><strong id="billingdocument-_createdbyuser">_CreatedByUser</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_user">I_User</a> (path: <a href="#i_user">I_User</a>.<a href="#i_user-userid">UserID</a>) via <a href="#billingdocument-createdbyuser">CreatedByUser</a></td></tr>
<tr><td><strong id="billingdocument-_creditcontrolarea">_CreditControlArea</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_creditcontrolarea">I_CreditControlArea</a> (path: <a href="#i_creditcontrolarea">I_CreditControlArea</a>.<a href="#i_creditcontrolarea-creditcontrolarea">CreditControlArea</a>) via <a href="#billingdocument-creditcontrolarea">CreditControlArea</a></td></tr>
<tr><td><strong id="billingdocument-_creditcontrolareatext">_CreditControlAreaText</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to many <a href="#i_creditcontrolareatext">I_CreditControlAreaText</a> (path: <a href="#i_creditcontrolareatext">I_CreditControlAreaText</a>.<a href="#i_creditcontrolareatext-creditcontrolarea">CreditControlArea</a>) via <a href="#billingdocument-creditcontrolarea">CreditControlArea</a></td></tr>
<tr><td><strong id="billingdocument-_customeraccountassgmtgroup">_CustomerAccountAssgmtGroup</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_customeraccountassgmtgroup">I_CustomerAccountAssgmtGroup</a> (path: <a href="#i_customeraccountassgmtgroup">I_CustomerAccountAssgmtGroup</a>.<a href="#i_customeraccountassgmtgroup-customeraccountassignmentgroup">CustomerAccountAssignmentGroup</a>) via <a href="#billingdocument-customeraccountassignmentgroup">CustomerAccountAssignmentGroup</a></td></tr>
<tr><td><strong id="billingdocument-_customergroup">_CustomerGroup</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_customergroup">I_CustomerGroup</a> (path: <a href="#i_customergroup">I_CustomerGroup</a>.<a href="#i_customergroup-customergroup">CustomerGroup</a>) via <a href="#billingdocument-customergroup">CustomerGroup</a></td></tr>
<tr><td><strong id="billingdocument-_customerpaymentterms">_CustomerPaymentTerms</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_customerpaymentterms">I_CustomerPaymentTerms</a> (path: <a href="#i_customerpaymentterms">I_CustomerPaymentTerms</a>.<a href="#i_customerpaymentterms-customerpaymentterms">CustomerPaymentTerms</a>) via <a href="#billingdocument-customerpaymentterms">CustomerPaymentTerms</a></td></tr>
<tr><td><strong id="billingdocument-_customerpricegroup">_CustomerPriceGroup</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_customerpricegroup">I_CustomerPriceGroup</a> (path: <a href="#i_customerpricegroup">I_CustomerPriceGroup</a>.<a href="#i_customerpricegroup-customerpricegroup">CustomerPriceGroup</a>) via <a href="#billingdocument-customerpricegroup">CustomerPriceGroup</a></td></tr>
<tr><td><strong id="billingdocument-_distributionchannel">_DistributionChannel</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_distributionchannel">I_DistributionChannel</a> (path: <a href="#i_distributionchannel">I_DistributionChannel</a>.<a href="#i_distributionchannel-distributionchannel">DistributionChannel</a>) via <a href="#billingdocument-distributionchannel">DistributionChannel</a></td></tr>
<tr><td><strong id="billingdocument-_division">_Division</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_division">I_Division</a> (path: <a href="#i_division">I_Division</a>.<a href="#i_division-division">Division</a>) via <a href="#billingdocument-division">Division</a></td></tr>
<tr><td><strong id="billingdocument-_dunningarea">_DunningArea</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_dunningarea">I_DunningArea</a> (path: <a href="#i_dunningarea">I_DunningArea</a>.<a href="#i_dunningarea-dunningarea">DunningArea</a>) via <a href="#billingdocument-dunningarea">DunningArea</a></td></tr>
<tr><td><strong id="billingdocument-_dunningareatext">_DunningAreaText</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to many <a href="#i_dunningareatext">I_DunningAreaText</a> (path: <a href="#i_dunningareatext">I_DunningAreaText</a>.<a href="#i_dunningareatext-dunningarea">DunningArea</a>) via <a href="#billingdocument-dunningarea">DunningArea</a></td></tr>
<tr><td><strong id="billingdocument-_dunningblockingreason">_DunningBlockingReason</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_dunningblockingreasoncode">I_DunningBlockingReasonCode</a> (path: <a href="#i_dunningblockingreasoncode">I_DunningBlockingReasonCode</a>.<a href="#i_dunningblockingreasoncode-dunningblockingreason">DunningBlockingReason</a>) via <a href="#billingdocument-dunningblockingreason">DunningBlockingReason</a></td></tr>
<tr><td><strong id="billingdocument-_dunningkey">_DunningKey</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_dunningkey">I_DunningKey</a> (path: <a href="#i_dunningkey">I_DunningKey</a>.<a href="#i_dunningkey-dunningkey">DunningKey</a>) via <a href="#billingdocument-dunningkey">DunningKey</a></td></tr>
<tr><td><strong id="billingdocument-_enhancedfields">_EnhancedFields</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_billingdocenhancedfields">I_BillingDocEnhancedFields</a> (path: <a href="#i_billingdocenhancedfields">I_BillingDocEnhancedFields</a>.<a href="#i_billingdocenhancedfields-billingdocument">BillingDocument</a>) via <a href="#billingdocument-billingdocument">BillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_exchangeratetype">_ExchangeRateType</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_exchangeratetype">I_ExchangeRateType</a> (path: <a href="#i_exchangeratetype">I_ExchangeRateType</a>.<a href="#i_exchangeratetype-exchangeratetype">ExchangeRateType</a>) via <a href="#billingdocument-exchangeratetype">ExchangeRateType</a></td></tr>
<tr><td><strong id="billingdocument-_fiscalyear">_FiscalYear</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_fiscalyearforcompanycode">I_FiscalYearForCompanyCode</a> (path: <a href="#i_fiscalyearforcompanycode">I_FiscalYearForCompanyCode</a>.<a href="#i_fiscalyearforcompanycode-fiscalyear">FiscalYear</a>) via <a href="#billingdocument-fiscalyear">FiscalYear</a></td></tr>
<tr><td><strong id="billingdocument-_incotermsclassification">_IncotermsClassification</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_incotermsclassification">I_IncotermsClassification</a> (path: <a href="#i_incotermsclassification">I_IncotermsClassification</a>.<a href="#i_incotermsclassification-incotermsclassification">IncotermsClassification</a>) via <a href="#billingdocument-incotermsclassification">IncotermsClassification</a></td></tr>
<tr><td><strong id="billingdocument-_incotermsversion">_IncotermsVersion</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_incotermsversion">I_IncotermsVersion</a> (path: <a href="#i_incotermsversion">I_IncotermsVersion</a>.<a href="#i_incotermsversion-incotermsversion">IncotermsVersion</a>) via <a href="#billingdocument-incotermsversion">IncotermsVersion</a></td></tr>
<tr><td><strong id="billingdocument-_invoiceclearingstatus">_InvoiceClearingStatus</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_invoiceclearingstatus">I_InvoiceClearingStatus</a> (path: <a href="#i_invoiceclearingstatus">I_InvoiceClearingStatus</a>.<a href="#i_invoiceclearingstatus-invoiceclearingstatus">InvoiceClearingStatus</a>) via <a href="#billingdocument-invoiceclearingstatus">InvoiceClearingStatus</a></td></tr>
<tr><td><strong id="billingdocument-_invoiceliststatus">_InvoiceListStatus</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_invoiceliststatus">I_InvoiceListStatus</a> (path: <a href="#i_invoiceliststatus">I_InvoiceListStatus</a>.<a href="#i_invoiceliststatus-invoiceliststatus">InvoiceListStatus</a>) via <a href="#billingdocument-invoiceliststatus">InvoiceListStatus</a></td></tr>
<tr><td><strong id="billingdocument-_invoicelisttype">_InvoiceListType</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_billingdocumenttype">I_BillingDocumentType</a> (path: <a href="#i_billingdocumenttype">I_BillingDocumentType</a>.<a href="#i_billingdocumenttype-billingdocumenttype">BillingDocumentType</a>) via <a href="#billingdocument-invoicelisttype">InvoiceListType</a></td></tr>
<tr><td><strong id="billingdocument-_item">_Item</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to many <a href="#i_billingdocumentitem">I_BillingDocumentItem</a> (path: <a href="#i_billingdocumentitem">I_BillingDocumentItem</a>.<a href="#i_billingdocumentitem-billingdocument">BillingDocument</a>) via <a href="#billingdocument-billingdocument">BillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_logicalsystem">_LogicalSystem</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_logicalsystem">I_LogicalSystem</a> (path: <a href="#i_logicalsystem">I_LogicalSystem</a>.<a href="#i_logicalsystem-logicalsystem">LogicalSystem</a>) via <a href="#billingdocument-logicalsystem">LogicalSystem</a></td></tr>
<tr><td><strong id="billingdocument-_overallbillingstatus">_OverallBillingStatus</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_overallbillingstatus">I_OverallBillingStatus</a> (path: <a href="#i_overallbillingstatus">I_OverallBillingStatus</a>.<a href="#i_overallbillingstatus-overallbillingstatus">OverallBillingStatus</a>) via <a href="#billingdocument-overallbillingstatus">OverallBillingStatus</a></td></tr>
<tr><td><strong id="billingdocument-_overallpricingincompletionsts">_OverallPricingIncompletionSts</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_overallprcincompletionsts">I_OverallPrcIncompletionSts</a> (path: <a href="#i_overallprcincompletionsts">I_OverallPrcIncompletionSts</a>.<a href="#i_overallprcincompletionsts-overallpricingincompletionsts">OverallPricingIncompletionSts</a>) via <a href="#billingdocument-overallpricingincompletionsts">OverallPricingIncompletionSts</a></td></tr>
<tr><td><strong id="billingdocument-_overallsdprocessstatus">_OverallSDProcessStatus</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_overallsdprocessstatus">I_OverallSDProcessStatus</a> (path: <a href="#i_overallsdprocessstatus">I_OverallSDProcessStatus</a>.<a href="#i_overallsdprocessstatus-overallsdprocessstatus">OverallSDProcessStatus</a>) via <a href="#billingdocument-overallsdprocessstatus">OverallSDProcessStatus</a></td></tr>
<tr><td><strong id="billingdocument-_ovrlitmgeneralincompletionsts">_OvrlItmGeneralIncompletionSts</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_ovrlitmgenincompletionsts">I_OvrlItmGenIncompletionSts</a> (path: <a href="#i_ovrlitmgenincompletionsts">I_OvrlItmGenIncompletionSts</a>.<a href="#i_ovrlitmgenincompletionsts-ovrlitmgeneralincompletionsts">OvrlItmGeneralIncompletionSts</a>) via <a href="#billingdocument-ovrlitmgeneralincompletionsts">OvrlItmGeneralIncompletionSts</a></td></tr>
<tr><td><strong id="billingdocument-_partner">_Partner</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to many <a href="#i_billingdocumentpartner">I_BillingDocumentPartner</a> (path: <a href="#i_billingdocumentpartner">I_BillingDocumentPartner</a>.<a href="#i_billingdocumentpartner-billingdocument">BillingDocument</a>) via <a href="#billingdocument-billingdocument">BillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_payerparty">_PayerParty</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_customer">I_Customer</a> (path: <a href="#i_customer">I_Customer</a>.<a href="#i_customer-customer">Customer</a>) via <a href="#billingdocument-payerparty">PayerParty</a></td></tr>
<tr><td><strong id="billingdocument-_paymentmethod">_PaymentMethod</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_paymentmethod">I_PaymentMethod</a> (path: <a href="#i_paymentmethod">I_PaymentMethod</a>.<a href="#i_paymentmethod-paymentmethod">PaymentMethod</a>) via <a href="#billingdocument-paymentmethod">PaymentMethod</a></td></tr>
<tr><td><strong id="billingdocument-_pricelisttype">_PriceListType</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_pricelisttype">I_PriceListType</a> (path: <a href="#i_pricelisttype">I_PriceListType</a>.<a href="#i_pricelisttype-pricelisttype">PriceListType</a>) via <a href="#billingdocument-pricelisttype">PriceListType</a></td></tr>
<tr><td><strong id="billingdocument-_pricingelement">_PricingElement</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to many <a href="#i_billingdocumentprcgelmnt">I_BillingDocumentPrcgElmnt</a> (path: <a href="#i_billingdocumentprcgelmnt">I_BillingDocumentPrcgElmnt</a>.<a href="#i_billingdocumentprcgelmnt-billingdocument">BillingDocument</a>) via <a href="#billingdocument-billingdocument">BillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_region">_Region</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_region">I_Region</a> (path: <a href="#i_region">I_Region</a>.<a href="#i_region-region">Region</a>) via <a href="#billingdocument-region">Region</a></td></tr>
<tr><td><strong id="billingdocument-_reversalreason">_ReversalReason</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_reversalreason">I_ReversalReason</a> (path: <a href="#i_reversalreason">I_ReversalReason</a>.<a href="#i_reversalreason-reversalreason">ReversalReason</a>) via <a href="#billingdocument-reversalreason">ReversalReason</a></td></tr>
<tr><td><strong id="billingdocument-_salesdistrict">_SalesDistrict</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_salesdistrict">I_SalesDistrict</a> (path: <a href="#i_salesdistrict">I_SalesDistrict</a>.<a href="#i_salesdistrict-salesdistrict">SalesDistrict</a>) via <a href="#billingdocument-salesdistrict">SalesDistrict</a></td></tr>
<tr><td><strong id="billingdocument-_salesorganization">_SalesOrganization</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_salesorganization">I_SalesOrganization</a> (path: <a href="#i_salesorganization">I_SalesOrganization</a>.<a href="#i_salesorganization-salesorganization">SalesOrganization</a>) via <a href="#billingdocument-salesorganization">SalesOrganization</a></td></tr>
<tr><td><strong id="billingdocument-_sddocumentcategory">_SDDocumentCategory</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_sddocumentcategory">I_SDDocumentCategory</a> (path: <a href="#i_sddocumentcategory">I_SDDocumentCategory</a>.<a href="#i_sddocumentcategory-sddocumentcategory">SDDocumentCategory</a>) via <a href="#billingdocument-sddocumentcategory">SDDocumentCategory</a></td></tr>
<tr><td><strong id="billingdocument-_sdpricingprocedure">_SDPricingProcedure</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_slspricingprocedure">I_SlsPricingProcedure</a> (path: <a href="#i_slspricingprocedure">I_SlsPricingProcedure</a>.<a href="#i_slspricingprocedure-pricingprocedure">PricingProcedure</a>) via <a href="#billingdocument-sdpricingprocedure">SDPricingProcedure</a></td></tr>
<tr><td><strong id="billingdocument-_shippingcondition">_ShippingCondition</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_shippingcondition">I_ShippingCondition</a> (path: <a href="#i_shippingcondition">I_ShippingCondition</a>.<a href="#i_shippingcondition-shippingcondition">ShippingCondition</a>) via <a href="#billingdocument-shippingcondition">ShippingCondition</a></td></tr>
<tr><td><strong id="billingdocument-_soldtoparty">_SoldToParty</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_customer">I_Customer</a> (path: <a href="#i_customer">I_Customer</a>.<a href="#i_customer-customer">Customer</a>) via <a href="#billingdocument-soldtoparty">SoldToParty</a></td></tr>
<tr><td><strong id="billingdocument-_statisticscurrency">_StatisticsCurrency</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_currency">I_Currency</a> (path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#billingdocument-statisticscurrency">StatisticsCurrency</a></td></tr>
<tr><td><strong id="billingdocument-_taxdeparturecountry">_TaxDepartureCountry</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_country">I_Country</a> (path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#billingdocument-taxdeparturecountry">TaxDepartureCountry</a></td></tr>
<tr><td><strong id="billingdocument-_transactioncurrency">_TransactionCurrency</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_currency">I_Currency</a> (path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#billingdocument-transactioncurrency">TransactionCurrency</a></td></tr>
<tr><td><strong id="billingdocument-_vatregistrationcountry">_VATRegistrationCountry</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_country">I_Country</a> (path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#billingdocument-vatregistrationcountry">VATRegistrationCountry</a></td></tr>
<tr><td><strong id="billingdocument-_vatregistrationorigin">_VATRegistrationOrigin</strong><br /><br /><small></small></td><td>cds.Association</td><td>Association to one <a href="#i_vatregistrationorigin">I_VATRegistrationOrigin</a> (path: <a href="#i_vatregistrationorigin">I_VATRegistrationOrigin</a>.<a href="#i_vatregistrationorigin-vatregistrationorigin">VATRegistrationOrigin</a>) via <a href="#billingdocument-vatregistrationorigin">VATRegistrationOrigin</a></td></tr>
</table>

## Type Definitions

### AEDAT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>AEDAT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>AEDAT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>AEDAT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### BELNR_D

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>BELNR_D@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>BELNR_D@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>BELNR_D@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### BSTKD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>BSTKD@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>BSTKD@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>BSTKD@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### BUCHK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;&rbrace;</code><br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>BUCHK@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>BUCHK@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>BUCHK@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### BUKRS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>BUKRS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>BUKRS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>BUKRS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### BZIRK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>BZIRK@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>BZIRK@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>BZIRK@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### CITYC

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>CITYC@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>CITYC@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>CITYC@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### CLRST

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;&rbrace;</code><br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>CLRST@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>CLRST@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>CLRST@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### CORR_VKONT_KK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>CORR_VKONT_KK@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>CORR_VKONT_KK@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>CORR_VKONT_KK@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### COUNC

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>COUNC@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>COUNC@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>COUNC@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### CPKUR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>CPKUR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>CPKUR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>CPKUR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### DZTERM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>DZTERM@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>DZTERM@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>DZTERM@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### DZUKRI

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(40)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>DZUKRI@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>DZUKRI@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>DZUKRI@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### ERDAT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>ERDAT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>ERDAT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>ERDAT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### ERNAM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>ERNAM@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>ERNAM@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>ERNAM@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### ERZET

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Time</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>ERZET@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>ERZET@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>ERZET@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FKART

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FKART@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FKART@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FKART@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FKART_RL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FKART_RL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FKART_RL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FKART_RL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FKDAT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FKDAT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FKDAT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FKDAT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FKDAT_RL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FKDAT_RL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FKDAT_RL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FKDAT_RL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FKSTO

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FKSTO@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FKSTO@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FKSTO@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### FKTYP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;,"D":&lbrace;"val":"D"&rbrace;,"E":&lbrace;"val":"E"&rbrace;,"F":&lbrace;"val":"F"&rbrace;,"I":&lbrace;"val":"I"&rbrace;,"K":&lbrace;"val":"K"&rbrace;,"L":&lbrace;"val":"L"&rbrace;,"P":&lbrace;"val":"P"&rbrace;,"R":&lbrace;"val":"R"&rbrace;,"U":&lbrace;"val":"U"&rbrace;,"W":&lbrace;"val":"W"&rbrace;,"X":&lbrace;"val":"X"&rbrace;,"S":&lbrace;"val":"S"&rbrace;&rbrace;</code><br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>FKTYP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>FKTYP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>FKTYP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### GBSTK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;&rbrace;</code><br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>GBSTK@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>GBSTK@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>GBSTK@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### GJAHR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>GJAHR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>GJAHR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>GJAHR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### HITYP_PR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>HITYP_PR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>HITYP_PR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>HITYP_PR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### INCO1

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>INCO1@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>INCO1@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>INCO1@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### INCO2

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(28)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>INCO2@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>INCO2@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>INCO2@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### INCO2_L

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(70)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>INCO2_L@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>INCO2_L@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>INCO2_L@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### INCO3_L

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(70)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>INCO3_L@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>INCO3_L@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>INCO3_L@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### INCOV

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>INCOV@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>INCOV@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>INCOV@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### INTRA_EXCL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>INTRA_EXCL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>INTRA_EXCL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>INTRA_EXCL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### INTRA_REL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>INTRA_REL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>INTRA_REL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>INTRA_REL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### ISACCRUALRELEVANT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>ISACCRUALRELEVANT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>ISACCRUALRELEVANT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>ISACCRUALRELEVANT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### J_1ANOPG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>J_1ANOPG@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>J_1ANOPG@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>J_1ANOPG@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KALSMASD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KALSMASD@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KALSMASD@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KALSMASD@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KDGRP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KDGRP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KDGRP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KDGRP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KIDNO

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(30)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KIDNO@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KIDNO@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KIDNO@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KKBER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KKBER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KKBER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KKBER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KNUMA

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KNUMA@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KNUMA@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KNUMA@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KNUMV

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KNUMV@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KNUMV@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KNUMV@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KONDA

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KONDA@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KONDA@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KONDA@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KTGRD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KTGRD@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KTGRD@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KTGRD@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KUNAG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KUNAG@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KUNAG@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KUNAG@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KUNRG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KUNRG@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KUNRG@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KUNRG@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KURRF_NOT_CONVERTED

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Decimal</td><td>precision: 9<br />scale: 5<br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KURRF_NOT_CONVERTED@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KURRF_NOT_CONVERTED@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KURRF_NOT_CONVERTED@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### KURST

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>KURST@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>KURST@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>KURST@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### LANDTX

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>LANDTX@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>LANDTX@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>LANDTX@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### LCNUM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>LCNUM@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>LCNUM@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>LCNUM@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### LIFNR_WK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>LIFNR_WK@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>LIFNR_WK@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>LIFNR_WK@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### LLAND

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>LLAND@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>LLAND@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>LLAND@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### LOGSYS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>LOGSYS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>LOGSYS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>LOGSYS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### MABER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>MABER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>MABER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>MABER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### MANSP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>MANSP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>MANSP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>MANSP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### MRNKZ

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>MRNKZ@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>MRNKZ@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>MRNKZ@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### MSCHL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>MSCHL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>MSCHL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>MSCHL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### MWSBP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Decimal</td><td>precision: 34<br />scale: floating<br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>MWSBP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>MWSBP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>MWSBP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### NETWR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Decimal</td><td>precision: 34<br />scale: floating<br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>NETWR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>NETWR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>NETWR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### ORDNR_V

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(18)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>ORDNR_V@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>ORDNR_V@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>ORDNR_V@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### PLTYP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>PLTYP@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>PLTYP@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>PLTYP@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### POPER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>POPER@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>POPER@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>POPER@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### RASSC

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>RASSC@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>RASSC@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>RASSC@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### REGIO

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>REGIO@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>REGIO@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>REGIO@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### RELIK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;&rbrace;</code><br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>RELIK@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>RELIK@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>RELIK@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### RFBSK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;,"D":&lbrace;"val":"D"&rbrace;,"E":&lbrace;"val":"E"&rbrace;,"F":&lbrace;"val":"F"&rbrace;,"G":&lbrace;"val":"G"&rbrace;,"H":&lbrace;"val":"H"&rbrace;,"I":&lbrace;"val":"I"&rbrace;,"K":&lbrace;"val":"K"&rbrace;,"L":&lbrace;"val":"L"&rbrace;,"M":&lbrace;"val":"M"&rbrace;,"N":&lbrace;"val":"N"&rbrace;&rbrace;</code><br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>RFBSK@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>RFBSK@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>RFBSK@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### SCHZW_BSEG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>SCHZW_BSEG@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>SCHZW_BSEG@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>SCHZW_BSEG@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### SEPA_MNDID

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>SEPA_MNDID@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>SEPA_MNDID@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>SEPA_MNDID@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### SFAKN

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>SFAKN@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>SFAKN@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>SFAKN@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### SPART

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>SPART@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>SPART@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>SPART@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### STCEG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(20)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>STCEG@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>STCEG@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>STCEG@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### STCEG_H

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;,"D":&lbrace;"val":"D"&rbrace;,"E":&lbrace;"val":"E"&rbrace;,"F":&lbrace;"val":"F"&rbrace;,"G":&lbrace;"val":"G"&rbrace;,"H":&lbrace;"val":"H"&rbrace;,"I":&lbrace;"val":"I"&rbrace;,"J":&lbrace;"val":"J"&rbrace;,"K":&lbrace;"val":"K"&rbrace;&rbrace;</code><br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>STCEG_H@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>STCEG_H@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>STCEG_H@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### STCEG_L

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>STCEG_L@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>STCEG_L@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>STCEG_L@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### STGRD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>STGRD@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>STGRD@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>STGRD@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### STWAE

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(5)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>STWAE@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>STWAE@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>STWAE@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TAXK1

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TAXK1@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TAXK1@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TAXK1@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TAXK2

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TAXK2@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TAXK2@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TAXK2@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TAXK3

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TAXK3@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TAXK3@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TAXK3@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TAXK4

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TAXK4@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TAXK4@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TAXK4@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TAXK5

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TAXK5@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TAXK5@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TAXK5@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TAXK6

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TAXK6@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TAXK6@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TAXK6@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TAXK7

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TAXK7@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TAXK7@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TAXK7@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TAXK8

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TAXK8@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TAXK8@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TAXK8@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TAXK9

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TAXK9@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TAXK9@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TAXK9@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### TIMESTAMPL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Timestamp</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>TIMESTAMPL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>TIMESTAMPL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>TIMESTAMPL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### UVALL_SU

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;&rbrace;</code><br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>UVALL_SU@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>UVALL_SU@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>UVALL_SU@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### UVPRS_UK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;&rbrace;</code><br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>UVPRS_UK@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>UVPRS_UK@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>UVPRS_UK@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VALDT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VALDT@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VALDT@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VALDT@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VALTG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VALTG@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VALTG@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VALTG@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VBELN_VF

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VBELN_VF@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VBELN_VF@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VBELN_VF@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VBTYPL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>enum: <code>&lbrace;"0":&lbrace;"val":"0"&rbrace;,"1":&lbrace;"val":"1"&rbrace;,"2":&lbrace;"val":"2"&rbrace;,"3":&lbrace;"val":"3"&rbrace;,"4":&lbrace;"val":"4"&rbrace;,"5":&lbrace;"val":"5"&rbrace;,"6":&lbrace;"val":"6"&rbrace;,"7":&lbrace;"val":"7"&rbrace;,"8":&lbrace;"val":"8"&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;,"D":&lbrace;"val":"D"&rbrace;,"E":&lbrace;"val":"E"&rbrace;,"F":&lbrace;"val":"F"&rbrace;,"G":&lbrace;"val":"G"&rbrace;,"H":&lbrace;"val":"H"&rbrace;,"I":&lbrace;"val":"I"&rbrace;,"J":&lbrace;"val":"J"&rbrace;,"K":&lbrace;"val":"K"&rbrace;,"L":&lbrace;"val":"L"&rbrace;,"M":&lbrace;"val":"M"&rbrace;,"N":&lbrace;"val":"N"&rbrace;,"O":&lbrace;"val":"O"&rbrace;,"P":&lbrace;"val":"P"&rbrace;,"Q":&lbrace;"val":"Q"&rbrace;,"R":&lbrace;"val":"R"&rbrace;,"S":&lbrace;"val":"S"&rbrace;,"T":&lbrace;"val":"T"&rbrace;,"U":&lbrace;"val":"U"&rbrace;,"V":&lbrace;"val":"V"&rbrace;,"W":&lbrace;"val":"W"&rbrace;,"X":&lbrace;"val":"X"&rbrace;,"Y":&lbrace;"val":"Y"&rbrace;,"a":&lbrace;"val":"a"&rbrace;,"b":&lbrace;"val":"b"&rbrace;,"c":&lbrace;"val":"c"&rbrace;,"d":&lbrace;"val":"d"&rbrace;,"e":&lbrace;"val":"e"&rbrace;,"g":&lbrace;"val":"g"&rbrace;,"h":&lbrace;"val":"h"&rbrace;,"i":&lbrace;"val":"i"&rbrace;,"j":&lbrace;"val":"j"&rbrace;,"k":&lbrace;"val":"k"&rbrace;,"n":&lbrace;"val":"n"&rbrace;,"o":&lbrace;"val":"o"&rbrace;,"p":&lbrace;"val":"p"&rbrace;,"q":&lbrace;"val":"q"&rbrace;,"r":&lbrace;"val":"r"&rbrace;,"s":&lbrace;"val":"s"&rbrace;,"t":&lbrace;"val":"t"&rbrace;,"u":&lbrace;"val":"u"&rbrace;,"v":&lbrace;"val":"v"&rbrace;,"w":&lbrace;"val":"w"&rbrace;,"x":&lbrace;"val":"x"&rbrace;,"$":&lbrace;"val":"$"&rbrace;,"+":&lbrace;"val":"+"&rbrace;,"-":&lbrace;"val":"-"&rbrace;,"#":&lbrace;"val":"#"&rbrace;,"~":&lbrace;"val":"~"&rbrace;,"§":&lbrace;"val":"§"&rbrace;,":":&lbrace;"val":":"&rbrace;,".":&lbrace;"val":"."&rbrace;,"&":&lbrace;"val":"&"&rbrace;,"*":&lbrace;"val":"*"&rbrace;,",":&lbrace;"val":","&rbrace;,"^":&lbrace;"val":"^"&rbrace;,"|":&lbrace;"val":"|"&rbrace;,"f001":&lbrace;"val":"f001"&rbrace;,"f002":&lbrace;"val":"f002"&rbrace;,"f003":&lbrace;"val":"f003"&rbrace;,"f004":&lbrace;"val":"f004"&rbrace;,"CEM":&lbrace;"val":"CEM"&rbrace;,"BOS":&lbrace;"val":"BOS"&rbrace;,"EBDR":&lbrace;"val":"EBDR"&rbrace;,"PBDR":&lbrace;"val":"PBDR"&rbrace;,"PBD":&lbrace;"val":"PBD"&rbrace;,"CSVO":&lbrace;"val":"CSVO"&rbrace;,"CSCO":&lbrace;"val":"CSCO"&rbrace;,"CSCT":&lbrace;"val":"CSCT"&rbrace;,"TMFU":&lbrace;"val":"TMFU"&rbrace;,"TMFO":&lbrace;"val":"TMFO"&rbrace;,"CMMA":&lbrace;"val":"CMMA"&rbrace;,"PBRQ":&lbrace;"val":"PBRQ"&rbrace;,"SOLO":&lbrace;"val":"SOLO"&rbrace;,"SBRQ":&lbrace;"val":"SBRQ"&rbrace;,"GBRQ":&lbrace;"val":"GBRQ"&rbrace;,"ICPF":&lbrace;"val":"ICPF"&rbrace;,"DPRQ":&lbrace;"val":"DPRQ"&rbrace;,"DPIN":&lbrace;"val":"DPIN"&rbrace;,"DPCC":&lbrace;"val":"DPCC"&rbrace;,"JITC":&lbrace;"val":"JITC"&rbrace;,"JITP":&lbrace;"val":"JITP"&rbrace;&rbrace;</code><br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VBTYPL@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VBTYPL@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VBTYPL@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VF_DRAFT_INDICATOR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VF_DRAFT_INDICATOR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VF_DRAFT_INDICATOR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VF_DRAFT_INDICATOR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VF_STATUS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;,"D":&lbrace;"val":"D"&rbrace;&rbrace;</code><br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VF_STATUS@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VF_STATUS@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VF_STATUS@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VF_TODO

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;,"D":&lbrace;"val":"D"&rbrace;&rbrace;</code><br /><br /><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VF_TODO@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VF_TODO@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VF_TODO@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VKORG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VKORG@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VKORG@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VKORG@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VSBED

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VSBED@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VSBED@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VSBED@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### VTWEG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>VTWEG@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>VTWEG@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>VTWEG@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### WAERK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(5)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>WAERK@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>WAERK@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>WAERK@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### WWERT_D

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>WWERT_D@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>WWERT_D@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>WWERT_D@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### XBLNR_V1

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(16)</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>XBLNR_V1@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>XBLNR_V1@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>XBLNR_V1@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

### XEGDR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td><a href="https://sap.github.io/csn-interop-specification/spec-v1/extensions/" target="_blank">Annotations</a>:<br />@EndUserText.heading: "&lbrace;i18n>XEGDR@ENDUSERTEXT.HEADING&rbrace;"<br />@EndUserText.label: "&lbrace;i18n>XEGDR@ENDUSERTEXT.LABEL&rbrace;"<br />@EndUserText.quickInfo: "&lbrace;i18n>XEGDR@ENDUSERTEXT.QUICKINFO&rbrace;"</td></tr>
</table>

