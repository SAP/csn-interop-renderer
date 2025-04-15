>This Data Product definition description was done using the <a href="https://sap.github.io/csn-interop-specification/spec-v1/csn-interop-effective" target="_blank">Core Schema Notation Interoperability (short: CSN Interop)</a> format.

## Entity Definitions

### BillingDocument

@EndUserText.label: Billing Document<br />@ObjectModel.compositionRoot: <code>true</code><br />@ObjectModel.modelingPattern: <code>&lbrace;"#":"ANALYTICAL_DIMENSION"&rbrace;</code><br />@ObjectModel.representativeKey: <code>"BillingDocument"</code><br />@ObjectModel.supportedCapabilities: <code>[&lbrace;"#":"ANALYTICAL_DIMENSION"&rbrace;,&lbrace;"#":"CDS_MODELING_DATA_SOURCE"&rbrace;,&lbrace;"#":"CDS_MODELING_ASSOCIATION_TARGET"&rbrace;,&lbrace;"#":"SQL_DATA_SOURCE"&rbrace;,&lbrace;"#":"EXTRACTION_DATA_SOURCE"&rbrace;]</code>

Elements: 

<table>
<tr><th>Element</th><th>Type</th><th>Description</th></tr><tr><td><strong id="billingdocument-billingdocument">BillingDocument</strong><br /><br /></td><td><a href="#vbeln_vf">VBELN_VF</a></td><td>key: <code>true</code><br />@EndUserText.heading: Bill. Doc.<br />@EndUserText.label: Billing Document<br />@EndUserText.quickInfo: Billing Document</td></tr>
<tr><td><strong id="billingdocument-sddocumentcategory">SDDocumentCategory</strong><br /><br /></td><td><a href="#vbtypl">VBTYPL</a></td><td>@EndUserText.heading: Doc.Cat.<br />@EndUserText.label: SD Document Category<br />@EndUserText.quickInfo: SD Document Category<br />@ObjectModel.foreignKey.association: <code>"_SDDocumentCategory"</code></td></tr>
<tr><td><strong id="billingdocument-billingdocumentcategory">BillingDocumentCategory</strong><br /><br /></td><td><a href="#fktyp">FKTYP</a></td><td>@EndUserText.heading: BlCat<br />@EndUserText.label: Billing Category<br />@EndUserText.quickInfo: Billing Category<br />@ObjectModel.foreignKey.association: <code>"_BillingDocumentCategory"</code></td></tr>
<tr><td><strong id="billingdocument-billingdocumenttype">BillingDocumentType</strong><br /><br /></td><td><a href="#fkart">FKART</a></td><td>@EndUserText.heading: BillT<br />@EndUserText.label: Billing Type<br />@EndUserText.quickInfo: Billing Type<br />@ObjectModel.foreignKey.association: <code>"_BillingDocumentType"</code></td></tr>
<tr><td><strong id="billingdocument-createdbyuser">CreatedByUser</strong><br /><br /></td><td><a href="#ernam">ERNAM</a></td><td>@EndUserText.heading: Created By<br />@EndUserText.label: Created By<br />@EndUserText.quickInfo: Name of Person Responsible for Creating the Object</td></tr>
<tr><td><strong id="billingdocument-creationdate">CreationDate</strong><br /><br /></td><td><a href="#erdat">ERDAT</a></td><td>@EndUserText.heading: Created On<br />@EndUserText.label: Created On<br />@EndUserText.quickInfo: Record Creation Date</td></tr>
<tr><td><strong id="billingdocument-creationtime">CreationTime</strong><br /><br /></td><td><a href="#erzet">ERZET</a></td><td>@EndUserText.heading: Time<br />@EndUserText.label: Time<br />@EndUserText.quickInfo: Entry time</td></tr>
<tr><td><strong id="billingdocument-lastchangedate">LastChangeDate</strong><br /><br /></td><td><a href="#aedat">AEDAT</a></td><td>@EndUserText.heading: Chngd On<br />@EndUserText.label: Changed On<br />@EndUserText.quickInfo: Last Changed On</td></tr>
<tr><td><strong id="billingdocument-lastchangedatetime">LastChangeDateTime</strong><br /><br /></td><td><a href="#timestampl">TIMESTAMPL</a></td><td>@EndUserText.heading: Time Stamp<br />@EndUserText.label: Time Stamp<br />@EndUserText.quickInfo: UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun)</td></tr>
<tr><td><strong id="billingdocument-logicalsystem">LogicalSystem</strong><br /><br /></td><td><a href="#logsys">LOGSYS</a></td><td>@EndUserText.heading: Log.System<br />@EndUserText.label: Logical System<br />@EndUserText.quickInfo: Logical System<br />@ObjectModel.foreignKey.association: <code>"_LogicalSystem"</code></td></tr>
<tr><td><strong id="billingdocument-salesorganization">SalesOrganization</strong><br /><br /></td><td><a href="#vkorg">VKORG</a></td><td>@EndUserText.heading: SOrg.<br />@EndUserText.label: Sales Organization<br />@EndUserText.quickInfo: Sales Organization<br />@ObjectModel.foreignKey.association: <code>"_SalesOrganization"</code></td></tr>
<tr><td><strong id="billingdocument-distributionchannel">DistributionChannel</strong><br /><br /></td><td><a href="#vtweg">VTWEG</a></td><td>@EndUserText.heading: DChl<br />@EndUserText.label: Distribution Channel<br />@EndUserText.quickInfo: Distribution Channel<br />@ObjectModel.foreignKey.association: <code>"_DistributionChannel"</code></td></tr>
<tr><td><strong id="billingdocument-division">Division</strong><br /><br /></td><td><a href="#spart">SPART</a></td><td>@EndUserText.heading: Dv<br />@EndUserText.label: Division<br />@EndUserText.quickInfo: Division<br />@ObjectModel.foreignKey.association: <code>"_Division"</code></td></tr>
<tr><td><strong id="billingdocument-billingdocumentdate">BillingDocumentDate</strong><br /><br /></td><td><a href="#fkdat">FKDAT</a></td><td>@EndUserText.heading: Billing Date<br />@EndUserText.label: Billing Date<br />@EndUserText.quickInfo: Billing Date</td></tr>
<tr><td><strong id="billingdocument-billingdocumentiscancelled">BillingDocumentIsCancelled</strong><br /><br /></td><td><a href="#fksto">FKSTO</a></td><td>@EndUserText.heading: Can<br />@EndUserText.label: Canceled<br />@EndUserText.quickInfo: Billing document is canceled</td></tr>
<tr><td><strong id="billingdocument-cancelledbillingdocument">CancelledBillingDocument</strong><br /><br /></td><td><a href="#sfakn">SFAKN</a></td><td>@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_BillingDocumentStdVH","element":"BillingDocument"&rbrace;&rbrace;]</code><br />@EndUserText.heading: CancBillDc<br />@EndUserText.label: Canceled Bill. Doc.<br />@EndUserText.quickInfo: Number of canceled billing document<br />@ObjectModel.foreignKey.association: <code>"_CancelledBillingDocument"</code></td></tr>
<tr><td><strong id="billingdocument-billingdoccombinationcriteria">BillingDocCombinationCriteria</strong><br /><br /></td><td><a href="#dzukri">DZUKRI</a></td><td>@EndUserText.heading: Combination Criteria in the Billing Doc.<br />@EndUserText.label: Combination Criteria<br />@EndUserText.quickInfo: Combination criteria in the billing document</td></tr>
<tr><td><strong id="billingdocument-manualinvoicemaintisrelevant">ManualInvoiceMaintIsRelevant</strong><br /><br /></td><td><a href="#mrnkz">MRNKZ</a></td><td>@EndUserText.heading: InM<br />@EndUserText.label: Man. Invoice Maint.<br />@EndUserText.quickInfo: Manual Invoice Maintenance</td></tr>
<tr><td><strong id="billingdocument-nmbrofpages">NmbrOfPages</strong><br /><br /></td><td><a href="#j_1anopg">J_1ANOPG</a></td><td>@EndUserText.heading: Pages<br />@EndUserText.label: Number of Pages<br />@EndUserText.quickInfo: Number of pages of invoice</td></tr>
<tr><td><strong id="billingdocument-isintrastatreportingrelevant">IsIntrastatReportingRelevant</strong><br /><br /></td><td><a href="#intra_rel">INTRA_REL</a></td><td>@EndUserText.heading: relevant for Intrastat<br />@EndUserText.label: Intrastat Relevance<br />@EndUserText.quickInfo: Relevant for Intrastat Reporting</td></tr>
<tr><td><strong id="billingdocument-isintrastatreportingexcluded">IsIntrastatReportingExcluded</strong><br /><br /></td><td><a href="#intra_excl">INTRA_EXCL</a></td><td>@EndUserText.heading: exclude from Intrastat<br />@EndUserText.label: Intrastat Exclusion<br />@EndUserText.quickInfo: Exclude from Intrastat Reporting</td></tr>
<tr><td><strong id="billingdocument-billingdocumentistemporary">BillingDocumentIsTemporary</strong><br /><br /></td><td><a href="#vf_draft_indicator">VF_DRAFT_INDICATOR</a></td><td>@EndUserText.heading: Is Draft<br />@EndUserText.label: Draft Indicator<br />@EndUserText.quickInfo: IsDraft Indicator</td></tr>
<tr><td><strong id="billingdocument-totalnetamount">TotalNetAmount</strong><br /><br /></td><td><a href="#netwr">NETWR</a></td><td>@EndUserText.heading: Net Value<br />@EndUserText.label: Net Value<br />@EndUserText.quickInfo: Net Value in Document Currency<br />@Semantics.amount.currencyCode: <code>"TransactionCurrency"</code></td></tr>
<tr><td><strong id="billingdocument-transactioncurrency">TransactionCurrency</strong><br /><br /></td><td><a href="#waerk">WAERK</a></td><td>@EndUserText.heading: Crcy<br />@EndUserText.label: Document Currency<br />@EndUserText.quickInfo: SD Document Currency<br />@ObjectModel.foreignKey.association: <code>"_TransactionCurrency"</code><br />@Semantics.currencyCode: <code>true</code></td></tr>
<tr><td><strong id="billingdocument-statisticscurrency">StatisticsCurrency</strong><br /><br /></td><td><a href="#stwae">STWAE</a></td><td>@EndUserText.heading: Curr.<br />@EndUserText.label: Statistics Currency<br />@EndUserText.quickInfo: Statistics Currency<br />@ObjectModel.foreignKey.association: <code>"_StatisticsCurrency"</code><br />@Semantics.currencyCode: <code>true</code></td></tr>
<tr><td><strong id="billingdocument-totaltaxamount">TotalTaxAmount</strong><br /><br /></td><td><a href="#mwsbp">MWSBP</a></td><td>@EndUserText.heading: Tax Amount<br />@EndUserText.label: Tax Amount<br />@EndUserText.quickInfo: Tax Amount in Document Currency<br />@Semantics.amount.currencyCode: <code>"TransactionCurrency"</code></td></tr>
<tr><td><strong id="billingdocument-customerpricegroup">CustomerPriceGroup</strong><br /><br /></td><td><a href="#konda">KONDA</a></td><td>@EndUserText.heading: CPG<br />@EndUserText.label: Customer Price Group<br />@EndUserText.quickInfo: Customer Price Group<br />@ObjectModel.foreignKey.association: <code>"_CustomerPriceGroup"</code></td></tr>
<tr><td><strong id="billingdocument-pricelisttype">PriceListType</strong><br /><br /></td><td><a href="#pltyp">PLTYP</a></td><td>@EndUserText.heading: PL<br />@EndUserText.label: Price List Type<br />@EndUserText.quickInfo: Price List Type<br />@ObjectModel.foreignKey.association: <code>"_PriceListType"</code></td></tr>
<tr><td><strong id="billingdocument-taxdeparturecountry">TaxDepartureCountry</strong><br /><br /></td><td><a href="#landtx">LANDTX</a></td><td>@EndUserText.heading: TDC<br />@EndUserText.label: Tax Departure C/R<br />@EndUserText.quickInfo: Tax Departure Country/Region<br />@ObjectModel.foreignKey.association: <code>"_TaxDepartureCountry"</code></td></tr>
<tr><td><strong id="billingdocument-vatregistration">VATRegistration</strong><br /><br /></td><td><a href="#stceg">STCEG</a></td><td>@EndUserText.heading: VAT Registration No.<br />@EndUserText.label: VAT Registration No.<br />@EndUserText.quickInfo: VAT Registration Number</td></tr>
<tr><td><strong id="billingdocument-vatregistrationorigin">VATRegistrationOrigin</strong><br /><br /></td><td><a href="#stceg_h">STCEG_H</a></td><td>@EndUserText.heading: OSI<br />@EndUserText.label: Origin Sales Tax No.<br />@EndUserText.quickInfo: Origin of Sales Tax Number<br />@ObjectModel.foreignKey.association: <code>"_VATRegistrationOrigin"</code></td></tr>
<tr><td><strong id="billingdocument-vatregistrationcountry">VATRegistrationCountry</strong><br /><br /></td><td><a href="#stceg_l">STCEG_L</a></td><td>@EndUserText.heading: STC<br />@EndUserText.label: Ctry/Rgn Sls Tax No.<br />@EndUserText.quickInfo: Country/Region of Sales Tax ID Number<br />@ObjectModel.foreignKey.association: <code>"_VATRegistrationCountry"</code></td></tr>
<tr><td><strong id="billingdocument-hierarchytypepricing">HierarchyTypePricing</strong><br /><br /></td><td><a href="#hityp_pr">HITYP_PR</a></td><td>@EndUserText.heading: HPr<br />@EndUserText.label: HierarchyTypePricing<br />@EndUserText.quickInfo: Hierarchy type for pricing</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification1">CustomerTaxClassification1</strong><br /><br /></td><td><a href="#taxk1">TAXK1</a></td><td>@EndUserText.heading: Tx2Cs<br />@EndUserText.label: Tax Class.1 Customer<br />@EndUserText.quickInfo: Tax Classification 1 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification2">CustomerTaxClassification2</strong><br /><br /></td><td><a href="#taxk2">TAXK2</a></td><td>@EndUserText.heading: Tx2Cs<br />@EndUserText.label: Tax Class.2 Customer<br />@EndUserText.quickInfo: Tax Classification 2 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification3">CustomerTaxClassification3</strong><br /><br /></td><td><a href="#taxk3">TAXK3</a></td><td>@EndUserText.heading: Tx3Cs<br />@EndUserText.label: Tax Class.3 Customer<br />@EndUserText.quickInfo: Tax Classification 3 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification4">CustomerTaxClassification4</strong><br /><br /></td><td><a href="#taxk4">TAXK4</a></td><td>@EndUserText.heading: Tx4Cs<br />@EndUserText.label: Tax Class.4 Customer<br />@EndUserText.quickInfo: Tax Classification 4 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification5">CustomerTaxClassification5</strong><br /><br /></td><td><a href="#taxk5">TAXK5</a></td><td>@EndUserText.heading: Tx5Cs<br />@EndUserText.label: Tax Class.5 Customer<br />@EndUserText.quickInfo: Tax Classification 5 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification6">CustomerTaxClassification6</strong><br /><br /></td><td><a href="#taxk6">TAXK6</a></td><td>@EndUserText.heading: Tx6Cs<br />@EndUserText.label: Tax Class.6 Customer<br />@EndUserText.quickInfo: Tax Classification 6 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification7">CustomerTaxClassification7</strong><br /><br /></td><td><a href="#taxk7">TAXK7</a></td><td>@EndUserText.heading: Tx7Cs<br />@EndUserText.label: Tax Class.7 Customer<br />@EndUserText.quickInfo: Tax Classification 7 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification8">CustomerTaxClassification8</strong><br /><br /></td><td><a href="#taxk8">TAXK8</a></td><td>@EndUserText.heading: Tx8Cs<br />@EndUserText.label: Tax Class.8 Customer<br />@EndUserText.quickInfo: Tax Classification 8 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification9">CustomerTaxClassification9</strong><br /><br /></td><td><a href="#taxk9">TAXK9</a></td><td>@EndUserText.heading: Tx9Cs<br />@EndUserText.label: Tax Class.9 Customer<br />@EndUserText.quickInfo: Tax Classification 9 for Customer</td></tr>
<tr><td><strong id="billingdocument-iseutriangulardeal">IsEUTriangularDeal</strong><br /><br /></td><td><a href="#xegdr">XEGDR</a></td><td>@EndUserText.heading: <code>"&lbrace;i18n>I_BILLINGDOCUMENT.ISEUTRIANGULARDEAL@ENDUSERTEXT.HEADING&rbrace;"</code><br />@EndUserText.label: EU Triangular Deal<br />@EndUserText.quickInfo: Indicator: Triangular Deal Within the EU</td></tr>
<tr><td><strong id="billingdocument-sdpricingprocedure">SDPricingProcedure</strong><br /><br /></td><td><a href="#kalsmasd">KALSMASD</a></td><td>@EndUserText.heading: PriPr.<br />@EndUserText.label: Pricing Procedure<br />@EndUserText.quickInfo: Pricing Procedure in Pricing<br />@ObjectModel.foreignKey.association: <code>"_SDPricingProcedure"</code></td></tr>
<tr><td><strong id="billingdocument-shippingcondition">ShippingCondition</strong><br /><br /></td><td><a href="#vsbed">VSBED</a></td><td>@EndUserText.heading: Shipping Conditions<br />@EndUserText.label: Shipping Conditions<br />@EndUserText.quickInfo: Shipping Conditions<br />@ObjectModel.foreignKey.association: <code>"_ShippingCondition"</code></td></tr>
<tr><td><strong id="billingdocument-plantsupplier">PlantSupplier</strong><br /><br /></td><td><a href="#lifnr_wk">LIFNR_WK</a></td><td>@EndUserText.heading: Supplier Number Plant<br />@EndUserText.label: Sppl. No. Plnt<br />@EndUserText.quickInfo: Supplier Number of Plant</td></tr>
<tr><td><strong id="billingdocument-incotermsversion">IncotermsVersion</strong><br /><br /></td><td><a href="#incov">INCOV</a></td><td>@EndUserText.heading: IncoV<br />@EndUserText.label: Incoterms Version<br />@EndUserText.quickInfo: Incoterms Version<br />@ObjectModel.foreignKey.association: <code>"_IncotermsVersion"</code></td></tr>
<tr><td><strong id="billingdocument-incotermsclassification">IncotermsClassification</strong><br /><br /></td><td><a href="#inco1">INCO1</a></td><td>@EndUserText.heading: IncoT<br />@EndUserText.label: Incoterms<br />@EndUserText.quickInfo: Incoterms (Part 1)<br />@ObjectModel.foreignKey.association: <code>"_IncotermsClassification"</code></td></tr>
<tr><td><strong id="billingdocument-incotermstransferlocation">IncotermsTransferLocation</strong><br /><br /></td><td><a href="#inco2">INCO2</a></td><td>@EndUserText.heading: Inco. 2<br />@EndUserText.label: Incoterms (Part 2)<br />@EndUserText.quickInfo: Incoterms (Part 2)</td></tr>
<tr><td><strong id="billingdocument-incotermslocation1">IncotermsLocation1</strong><br /><br /></td><td><a href="#inco2_l">INCO2_L</a></td><td>@EndUserText.heading: <code>"&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSLOCATION1@ENDUSERTEXT.HEADING&rbrace;"</code><br />@EndUserText.label: Incoterms Location 1<br />@EndUserText.quickInfo: Incoterms Location 1</td></tr>
<tr><td><strong id="billingdocument-incotermslocation2">IncotermsLocation2</strong><br /><br /></td><td><a href="#inco3_l">INCO3_L</a></td><td>@EndUserText.heading: <code>"&lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSLOCATION2@ENDUSERTEXT.HEADING&rbrace;"</code><br />@EndUserText.label: Incoterms Location 2<br />@EndUserText.quickInfo: Incoterms Location 2</td></tr>
<tr><td><strong id="billingdocument-payerparty">PayerParty</strong><br /><br /></td><td><a href="#kunrg">KUNRG</a></td><td>@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_Customer_VH","element":"Customer"&rbrace;&rbrace;]</code><br />@EndUserText.heading: Payer<br />@EndUserText.label: Payer<br />@EndUserText.quickInfo: Payer<br />@ObjectModel.foreignKey.association: <code>"_PayerParty"</code></td></tr>
<tr><td><strong id="billingdocument-contractaccount">ContractAccount</strong><br /><br /></td><td><a href="#corr_vkont_kk">CORR_VKONT_KK</a></td><td>@EndUserText.heading: Cont.Account<br />@EndUserText.label: Contract Account<br />@EndUserText.quickInfo: Contract Account Number</td></tr>
<tr><td><strong id="billingdocument-customerpaymentterms">CustomerPaymentTerms</strong><br /><br /></td><td><a href="#dzterm">DZTERM</a></td><td>@EndUserText.heading: Terms of Payment<br />@EndUserText.label: Terms of Payment<br />@EndUserText.quickInfo: Key for Terms of Payment<br />@ObjectModel.foreignKey.association: <code>"_CustomerPaymentTerms"</code></td></tr>
<tr><td><strong id="billingdocument-paymentmethod">PaymentMethod</strong><br /><br /></td><td><a href="#schzw_bseg">SCHZW_BSEG</a></td><td>@EndUserText.heading: PM<br />@EndUserText.label: Payment Method<br />@EndUserText.quickInfo: Payment Method<br />@ObjectModel.foreignKey.association: <code>"_PaymentMethod"</code></td></tr>
<tr><td><strong id="billingdocument-paymentreference">PaymentReference</strong><br /><br /></td><td><a href="#kidno">KIDNO</a></td><td>@EndUserText.heading: Payment Reference<br />@EndUserText.label: Payment Reference<br />@EndUserText.quickInfo: Payment Reference</td></tr>
<tr><td><strong id="billingdocument-fixedvaluedate">FixedValueDate</strong><br /><br /></td><td><a href="#valdt">VALDT</a></td><td>@EndUserText.heading: FixValDate<br />@EndUserText.label: Fixed Value Date<br />@EndUserText.quickInfo: Fixed Value Date</td></tr>
<tr><td><strong id="billingdocument-additionalvaluedays">AdditionalValueDays</strong><br /><br /></td><td><a href="#valtg">VALTG</a></td><td>@EndUserText.heading: AValD<br />@EndUserText.label: Addit. Value Days<br />@EndUserText.quickInfo: Additional Value Days</td></tr>
<tr><td><strong id="billingdocument-sepamandate">SEPAMandate</strong><br /><br /></td><td><a href="#sepa_mndid">SEPA_MNDID</a></td><td>@EndUserText.heading: Mandate Reference<br />@EndUserText.label: Mandate Reference<br />@EndUserText.quickInfo: Unique Reference to Mandate for each Payee</td></tr>
<tr><td><strong id="billingdocument-companycode">CompanyCode</strong><br /><br /></td><td><a href="#bukrs">BUKRS</a></td><td>@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_CompanyCodeStdVH","element":"CompanyCode"&rbrace;&rbrace;]</code><br />@EndUserText.heading: CoCd<br />@EndUserText.label: Company Code<br />@EndUserText.quickInfo: Company Code<br />@ObjectModel.foreignKey.association: <code>"_CompanyCode"</code></td></tr>
<tr><td><strong id="billingdocument-fiscalyear">FiscalYear</strong><br /><br /></td><td><a href="#gjahr">GJAHR</a></td><td>@EndUserText.heading: Year<br />@EndUserText.label: Fiscal Year<br />@EndUserText.quickInfo: Fiscal Year<br />@ObjectModel.foreignKey.association: <code>"_FiscalYear"</code></td></tr>
<tr><td><strong id="billingdocument-accountingdocument">AccountingDocument</strong><br /><br /></td><td><a href="#belnr_d">BELNR_D</a></td><td>@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_AccountingDocumentStdVH","element":"AccountingDocument"&rbrace;,"additionalBinding":[&lbrace;"localElement":"CompanyCode","element":"CompanyCode"&rbrace;,&lbrace;"localElement":"FiscalYear","element":"FiscalYear"&rbrace;]&rbrace;]</code><br />@EndUserText.heading: Doc. No.<br />@EndUserText.label: Document Number<br />@EndUserText.quickInfo: Document Number of an Accounting Document<br />@ObjectModel.foreignKey.association: <code>"_AccountingDocument"</code></td></tr>
<tr><td><strong id="billingdocument-fiscalperiod">FiscalPeriod</strong><br /><br /></td><td><a href="#poper">POPER</a></td><td>@EndUserText.heading: Period<br />@EndUserText.label: Posting Period<br />@EndUserText.quickInfo: Posting Period</td></tr>
<tr><td><strong id="billingdocument-customeraccountassignmentgroup">CustomerAccountAssignmentGroup</strong><br /><br /></td><td><a href="#ktgrd">KTGRD</a></td><td>@EndUserText.heading: AAGC<br />@EndUserText.label: Acct Assmt Grp Cust.<br />@EndUserText.quickInfo: Account Assignment Group for Customer<br />@ObjectModel.foreignKey.association: <code>"_CustomerAccountAssgmtGroup"</code></td></tr>
<tr><td><strong id="billingdocument-accountingexchangerateisset">AccountingExchangeRateIsSet</strong><br /><br /></td><td><a href="#cpkur">CPKUR</a></td><td>@EndUserText.heading: SRate<br />@EndUserText.label: Set Exchange Rate<br />@EndUserText.quickInfo: Exchange Rate Setting</td></tr>
<tr><td><strong id="billingdocument-accountingexchangerate">AccountingExchangeRate</strong><br /><br /></td><td><a href="#kurrf_not_converted">KURRF_NOT_CONVERTED</a></td><td>@EndUserText.heading: <code>"&lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGEXCHANGERATE@ENDUSERTEXT.HEADING&rbrace;"</code><br />@EndUserText.label: Accounting Exchange Rate<br />@EndUserText.quickInfo: Exchange Rate for FI Postings</td></tr>
<tr><td><strong id="billingdocument-exchangeratedate">ExchangeRateDate</strong><br /><br /></td><td><a href="#wwert_d">WWERT_D</a></td><td>@EndUserText.heading: TranslDate<br />@EndUserText.label: Translation Date<br />@EndUserText.quickInfo: Translation Date</td></tr>
<tr><td><strong id="billingdocument-exchangeratetype">ExchangeRateType</strong><br /><br /></td><td><a href="#kurst">KURST</a></td><td>@EndUserText.heading: Exchange Rate Type<br />@EndUserText.label: Exchange Rate Type<br />@EndUserText.quickInfo: Exchange Rate Type<br />@ObjectModel.foreignKey.association: <code>"_ExchangeRateType"</code></td></tr>
<tr><td><strong id="billingdocument-documentreferenceid">DocumentReferenceID</strong><br /><br /></td><td><a href="#xblnr_v1">XBLNR_V1</a></td><td>@EndUserText.heading: Reference<br />@EndUserText.label: Reference<br />@EndUserText.quickInfo: Reference Document Number</td></tr>
<tr><td><strong id="billingdocument-assignmentreference">AssignmentReference</strong><br /><br /></td><td><a href="#ordnr_v">ORDNR_V</a></td><td>@EndUserText.heading: Assignment<br />@EndUserText.label: Assignment<br />@EndUserText.quickInfo: Assignment Number</td></tr>
<tr><td><strong id="billingdocument-reversalreason">ReversalReason</strong><br /><br /></td><td><a href="#stgrd">STGRD</a></td><td>@EndUserText.heading: Rev.Reas.<br />@EndUserText.label: Reversal Reason<br />@EndUserText.quickInfo: Reason for Reversal or Inverse Posting<br />@ObjectModel.foreignKey.association: <code>"_ReversalReason"</code></td></tr>
<tr><td><strong id="billingdocument-dunningarea">DunningArea</strong><br /><br /></td><td><a href="#maber">MABER</a></td><td>@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_DunningAreaStdVH","element":"DunningArea"&rbrace;,"additionalBinding":[&lbrace;"localElement":"CompanyCode","element":"CompanyCode"&rbrace;]&rbrace;]</code><br />@EndUserText.heading: Area<br />@EndUserText.label: Dunning Area<br />@EndUserText.quickInfo: Dunning Area<br />@ObjectModel.foreignKey.association: <code>"_DunningArea"</code><br />@ObjectModel.text.association: <code>"_DunningAreaText"</code></td></tr>
<tr><td><strong id="billingdocument-dunningblockingreason">DunningBlockingReason</strong><br /><br /></td><td><a href="#mansp">MANSP</a></td><td>@EndUserText.heading: Block<br />@EndUserText.label: Dunning Block<br />@EndUserText.quickInfo: Dunning Block<br />@ObjectModel.foreignKey.association: <code>"_DunningBlockingReason"</code></td></tr>
<tr><td><strong id="billingdocument-dunningkey">DunningKey</strong><br /><br /></td><td><a href="#mschl">MSCHL</a></td><td>@EndUserText.heading: Dunn.Key<br />@EndUserText.label: Dunning Key<br />@EndUserText.quickInfo: Dunning Key<br />@ObjectModel.foreignKey.association: <code>"_DunningKey"</code></td></tr>
<tr><td><strong id="billingdocument-internalfinancialdocument">InternalFinancialDocument</strong><br /><br /></td><td><a href="#lcnum">LCNUM</a></td><td>@EndUserText.heading: FD No.<br />@EndUserText.label: Financial Doc. No.<br />@EndUserText.quickInfo: Financial doc. processing: Internal financial doc. number</td></tr>
<tr><td><strong id="billingdocument-isrelevantforaccrual">IsRelevantForAccrual</strong><br /><br /></td><td><a href="#isaccrualrelevant">ISACCRUALRELEVANT</a></td><td>@EndUserText.heading: Is Relevant for Accrual<br />@EndUserText.label: Relevant for Accrual<br />@EndUserText.quickInfo: Is relevant for accrual</td></tr>
<tr><td><strong id="billingdocument-soldtoparty">SoldToParty</strong><br /><br /></td><td><a href="#kunag">KUNAG</a></td><td>@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_Customer_VH","element":"Customer"&rbrace;&rbrace;]</code><br />@EndUserText.heading: Sold-to<br />@EndUserText.label: Sold-to Party<br />@EndUserText.quickInfo: Sold-to Party<br />@ObjectModel.foreignKey.association: <code>"_SoldToParty"</code></td></tr>
<tr><td><strong id="billingdocument-partnercompany">PartnerCompany</strong><br /><br /></td><td><a href="#rassc">RASSC</a></td><td>@EndUserText.heading: Tr.Prt<br />@EndUserText.label: Trading Partner No.<br />@EndUserText.quickInfo: Company ID of Trading Partner</td></tr>
<tr><td><strong id="billingdocument-purchaseorderbycustomer">PurchaseOrderByCustomer</strong><br /><br /></td><td><a href="#bstkd">BSTKD</a></td><td>@EndUserText.heading: Customer Reference<br />@EndUserText.label: Customer Reference<br />@EndUserText.quickInfo: Customer Reference</td></tr>
<tr><td><strong id="billingdocument-customergroup">CustomerGroup</strong><br /><br /></td><td><a href="#kdgrp">KDGRP</a></td><td>@EndUserText.heading: CGrp<br />@EndUserText.label: Customer Group<br />@EndUserText.quickInfo: Customer Group<br />@ObjectModel.foreignKey.association: <code>"_CustomerGroup"</code></td></tr>
<tr><td><strong id="billingdocument-country">Country</strong><br /><br /></td><td><a href="#lland">LLAND</a></td><td>@EndUserText.heading: Dest. Ctry/Reg<br />@EndUserText.label: Dest. Country/Region<br />@EndUserText.quickInfo: Destination Country/Region<br />@ObjectModel.foreignKey.association: <code>"_Country"</code></td></tr>
<tr><td><strong id="billingdocument-citycode">CityCode</strong><br /><br /></td><td><a href="#cityc">CITYC</a></td><td>@EndUserText.heading: Code<br />@EndUserText.label: City Code<br />@EndUserText.quickInfo: City Code<br />@ObjectModel.foreignKey.association: <code>"_CityCode"</code></td></tr>
<tr><td><strong id="billingdocument-salesdistrict">SalesDistrict</strong><br /><br /></td><td><a href="#bzirk">BZIRK</a></td><td>@EndUserText.heading: SDst<br />@EndUserText.label: Sales District<br />@EndUserText.quickInfo: Sales District<br />@ObjectModel.foreignKey.association: <code>"_SalesDistrict"</code></td></tr>
<tr><td><strong id="billingdocument-region">Region</strong><br /><br /></td><td><a href="#regio">REGIO</a></td><td>@EndUserText.heading: Rg<br />@EndUserText.label: Region<br />@EndUserText.quickInfo: Region (State, Province, County)<br />@ObjectModel.foreignKey.association: <code>"_Region"</code></td></tr>
<tr><td><strong id="billingdocument-county">County</strong><br /><br /></td><td><a href="#counc">COUNC</a></td><td>@EndUserText.heading: CCd<br />@EndUserText.label: County Code<br />@EndUserText.quickInfo: County Code<br />@ObjectModel.foreignKey.association: <code>"_County_2"</code></td></tr>
<tr><td><strong id="billingdocument-creditcontrolarea">CreditControlArea</strong><br /><br /></td><td><a href="#kkber">KKBER</a></td><td>@Consumption.valueHelpDefinition: <code>[&lbrace;"entity":&lbrace;"name":"I_CreditControlAreaStdVH","element":"CreditControlArea"&rbrace;&rbrace;]</code><br />@EndUserText.heading: CCAr<br />@EndUserText.label: Credit Control Area<br />@EndUserText.quickInfo: Credit Control Area<br />@ObjectModel.foreignKey.association: <code>"_CreditControlArea"</code><br />@ObjectModel.text.association: <code>"_CreditControlAreaText"</code></td></tr>
<tr><td><strong id="billingdocument-customerrebateagreement">CustomerRebateAgreement</strong><br /><br /></td><td><a href="#knuma">KNUMA</a></td><td>@EndUserText.heading: Agreement<br />@EndUserText.label: Agreement<br />@EndUserText.quickInfo: Agreement (various conditions grouped together)</td></tr>
<tr><td><strong id="billingdocument-pricingdocument">PricingDocument</strong><br /><br /></td><td><a href="#knumv">KNUMV</a></td><td>@EndUserText.heading: Doc.Cond.<br />@EndUserText.label: Doc. Condition No.<br />@EndUserText.quickInfo: Number of the Document Condition</td></tr>
<tr><td><strong id="billingdocument-overallsdprocessstatus">OverallSDProcessStatus</strong><br /><br /></td><td><a href="#gbstk">GBSTK</a></td><td>@EndUserText.heading: OS<br />@EndUserText.label: Overall Status<br />@EndUserText.quickInfo: Overall Processing Status (Header/All Items)<br />@ObjectModel.foreignKey.association: <code>"_OverallSDProcessStatus"</code></td></tr>
<tr><td><strong id="billingdocument-overallbillingstatus">OverallBillingStatus</strong><br /><br /></td><td><a href="#vf_status">VF_STATUS</a></td><td>@EndUserText.heading: Status<br />@EndUserText.label: Status<br />@EndUserText.quickInfo: SD Billing Status<br />@ObjectModel.foreignKey.association: <code>"_OverallBillingStatus"</code></td></tr>
<tr><td><strong id="billingdocument-accountingpostingstatus">AccountingPostingStatus</strong><br /><br /></td><td><a href="#buchk">BUCHK</a></td><td>@EndUserText.heading: PS<br />@EndUserText.label: Posting Status<br />@EndUserText.quickInfo: Posting Status of Billing Document<br />@ObjectModel.foreignKey.association: <code>"_AccountingPostingStatus"</code></td></tr>
<tr><td><strong id="billingdocument-accountingtransferstatus">AccountingTransferStatus</strong><br /><br /></td><td><a href="#rfbsk">RFBSK</a></td><td>@EndUserText.heading: PsSt<br />@EndUserText.label: Posting Status<br />@EndUserText.quickInfo: Status for Transfer to Accounting<br />@ObjectModel.foreignKey.association: <code>"_AccountingTransferStatus"</code></td></tr>
<tr><td><strong id="billingdocument-billingissuetype">BillingIssueType</strong><br /><br /></td><td><a href="#vf_todo">VF_TODO</a></td><td>@EndUserText.heading: Issue Type<br />@EndUserText.label: Issue Type<br />@EndUserText.quickInfo: Billing Issue Type<br />@ObjectModel.foreignKey.association: <code>"_BillingIssueType"</code></td></tr>
<tr><td><strong id="billingdocument-invoiceliststatus">InvoiceListStatus</strong><br /><br /></td><td><a href="#relik">RELIK</a></td><td>@EndUserText.heading: ILSt<br />@EndUserText.label: Invoice List Status<br />@EndUserText.quickInfo: Invoice list status of billing document<br />@ObjectModel.foreignKey.association: <code>"_InvoiceListStatus"</code></td></tr>
<tr><td><strong id="billingdocument-ovrlitmgeneralincompletionsts">OvrlItmGeneralIncompletionSts</strong><br /><br /></td><td><a href="#uvall_su">UVALL_SU</a></td><td>@EndUserText.heading: AI<br />@EndUserText.label: All Items<br />@EndUserText.quickInfo: Incompletion Status (All Items)<br />@ObjectModel.foreignKey.association: <code>"_OvrlItmGeneralIncompletionSts"</code></td></tr>
<tr><td><strong id="billingdocument-overallpricingincompletionsts">OverallPricingIncompletionSts</strong><br /><br /></td><td><a href="#uvprs_uk">UVPRS_UK</a></td><td>@EndUserText.heading: PI<br />@EndUserText.label: Pricing – All Items<br />@EndUserText.quickInfo: Pricing Incompletion Status (All Items)<br />@ObjectModel.foreignKey.association: <code>"_OverallPricingIncompletionSts"</code></td></tr>
<tr><td><strong id="billingdocument-invoiceclearingstatus">InvoiceClearingStatus</strong><br /><br /></td><td><a href="#clrst">CLRST</a></td><td>@EndUserText.heading: Clearing Status<br />@EndUserText.label: Clearing Status<br />@EndUserText.quickInfo: Clearing Status of Billing Document<br />@ObjectModel.foreignKey.association: <code>"_InvoiceClearingStatus"</code></td></tr>
<tr><td><strong id="billingdocument-invoicelisttype">InvoiceListType</strong><br /><br /></td><td><a href="#fkart_rl">FKART_RL</a></td><td>@EndUserText.heading: ILTyp<br />@EndUserText.label: Invoice List Type<br />@EndUserText.quickInfo: Invoice List Type<br />@ObjectModel.foreignKey.association: <code>"_InvoiceListType"</code></td></tr>
<tr><td><strong id="billingdocument-invoicelistbillingdate">InvoiceListBillingDate</strong><br /><br /></td><td><a href="#fkdat_rl">FKDAT_RL</a></td><td>@EndUserText.heading: InvList BD<br />@EndUserText.label: Inv. List Bill. Date<br />@EndUserText.quickInfo: Billing date for the invoice list</td></tr>
<tr><td><strong id="billingdocument-_accountingdocument">_AccountingDocument</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_accountingdocument">I_AccountingDocument</a> (path: <a href="#i_accountingdocument">I_AccountingDocument</a>.<a href="#i_accountingdocument-companycode">CompanyCode</a>) via <a href="#billingdocument-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="billingdocument-_accountingpostingstatus">_AccountingPostingStatus</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_accountingpostingstatus">I_AccountingPostingStatus</a> (path: <a href="#i_accountingpostingstatus">I_AccountingPostingStatus</a>.<a href="#i_accountingpostingstatus-accountingpostingstatus">AccountingPostingStatus</a>) via <a href="#billingdocument-accountingpostingstatus">AccountingPostingStatus</a></td></tr>
<tr><td><strong id="billingdocument-_accountingtransferstatus">_AccountingTransferStatus</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_accountingtransferstatus">I_AccountingTransferStatus</a> (path: <a href="#i_accountingtransferstatus">I_AccountingTransferStatus</a>.<a href="#i_accountingtransferstatus-accountingtransferstatus">AccountingTransferStatus</a>) via <a href="#billingdocument-accountingtransferstatus">AccountingTransferStatus</a></td></tr>
<tr><td><strong id="billingdocument-_billingdocumentcategory">_BillingDocumentCategory</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_billingdocumentcategory">I_BillingDocumentCategory</a> (path: <a href="#i_billingdocumentcategory">I_BillingDocumentCategory</a>.<a href="#i_billingdocumentcategory-billingdocumentcategory">BillingDocumentCategory</a>) via <a href="#billingdocument-billingdocumentcategory">BillingDocumentCategory</a></td></tr>
<tr><td><strong id="billingdocument-_billingdocumenttype">_BillingDocumentType</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_billingdocumenttype">I_BillingDocumentType</a> (path: <a href="#i_billingdocumenttype">I_BillingDocumentType</a>.<a href="#i_billingdocumenttype-billingdocumenttype">BillingDocumentType</a>) via <a href="#billingdocument-billingdocumenttype">BillingDocumentType</a></td></tr>
<tr><td><strong id="billingdocument-_billingissuetype">_BillingIssueType</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_billingissuetype">I_BillingIssueType</a> (path: <a href="#i_billingissuetype">I_BillingIssueType</a>.<a href="#i_billingissuetype-billingissuetype">BillingIssueType</a>) via <a href="#billingdocument-billingissuetype">BillingIssueType</a></td></tr>
<tr><td><strong id="billingdocument-_cancelledbillingdocument">_CancelledBillingDocument</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#billingdocument">BillingDocument</a> (path: <a href="#billingdocument">BillingDocument</a>.<a href="#billingdocument-billingdocument">BillingDocument</a>) via <a href="#billingdocument-cancelledbillingdocument">CancelledBillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_citycode">_CityCode</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_citycode">I_CityCode</a> (path: <a href="#i_citycode">I_CityCode</a>.<a href="#i_citycode-citycode">CityCode</a>) via <a href="#billingdocument-citycode">CityCode</a></td></tr>
<tr><td><strong id="billingdocument-_companycode">_CompanyCode</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_companycode">I_CompanyCode</a> (path: <a href="#i_companycode">I_CompanyCode</a>.<a href="#i_companycode-companycode">CompanyCode</a>) via <a href="#billingdocument-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="billingdocument-_country">_Country</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_country">I_Country</a> (path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#billingdocument-country">Country</a></td></tr>
<tr><td><strong id="billingdocument-_county">_County</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_countycode">I_CountyCode</a> (path: <a href="#i_countycode">I_CountyCode</a>.<a href="#i_countycode-country">Country</a>) via <a href="#billingdocument-country">Country</a></td></tr>
<tr><td><strong id="billingdocument-_county_2">_County_2</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_taxingcounty">I_TaxingCounty</a> (path: <a href="#i_taxingcounty">I_TaxingCounty</a>.<a href="#i_taxingcounty-country">Country</a>) via <a href="#billingdocument-country">Country</a></td></tr>
<tr><td><strong id="billingdocument-_createdbyuser">_CreatedByUser</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_user">I_User</a> (path: <a href="#i_user">I_User</a>.<a href="#i_user-userid">UserID</a>) via <a href="#billingdocument-createdbyuser">CreatedByUser</a></td></tr>
<tr><td><strong id="billingdocument-_creditcontrolarea">_CreditControlArea</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_creditcontrolarea">I_CreditControlArea</a> (path: <a href="#i_creditcontrolarea">I_CreditControlArea</a>.<a href="#i_creditcontrolarea-creditcontrolarea">CreditControlArea</a>) via <a href="#billingdocument-creditcontrolarea">CreditControlArea</a></td></tr>
<tr><td><strong id="billingdocument-_creditcontrolareatext">_CreditControlAreaText</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#i_creditcontrolareatext">I_CreditControlAreaText</a> (path: <a href="#i_creditcontrolareatext">I_CreditControlAreaText</a>.<a href="#i_creditcontrolareatext-creditcontrolarea">CreditControlArea</a>) via <a href="#billingdocument-creditcontrolarea">CreditControlArea</a></td></tr>
<tr><td><strong id="billingdocument-_customeraccountassgmtgroup">_CustomerAccountAssgmtGroup</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_customeraccountassgmtgroup">I_CustomerAccountAssgmtGroup</a> (path: <a href="#i_customeraccountassgmtgroup">I_CustomerAccountAssgmtGroup</a>.<a href="#i_customeraccountassgmtgroup-customeraccountassignmentgroup">CustomerAccountAssignmentGroup</a>) via <a href="#billingdocument-customeraccountassignmentgroup">CustomerAccountAssignmentGroup</a></td></tr>
<tr><td><strong id="billingdocument-_customergroup">_CustomerGroup</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_customergroup">I_CustomerGroup</a> (path: <a href="#i_customergroup">I_CustomerGroup</a>.<a href="#i_customergroup-customergroup">CustomerGroup</a>) via <a href="#billingdocument-customergroup">CustomerGroup</a></td></tr>
<tr><td><strong id="billingdocument-_customerpaymentterms">_CustomerPaymentTerms</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_customerpaymentterms">I_CustomerPaymentTerms</a> (path: <a href="#i_customerpaymentterms">I_CustomerPaymentTerms</a>.<a href="#i_customerpaymentterms-customerpaymentterms">CustomerPaymentTerms</a>) via <a href="#billingdocument-customerpaymentterms">CustomerPaymentTerms</a></td></tr>
<tr><td><strong id="billingdocument-_customerpricegroup">_CustomerPriceGroup</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_customerpricegroup">I_CustomerPriceGroup</a> (path: <a href="#i_customerpricegroup">I_CustomerPriceGroup</a>.<a href="#i_customerpricegroup-customerpricegroup">CustomerPriceGroup</a>) via <a href="#billingdocument-customerpricegroup">CustomerPriceGroup</a></td></tr>
<tr><td><strong id="billingdocument-_distributionchannel">_DistributionChannel</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_distributionchannel">I_DistributionChannel</a> (path: <a href="#i_distributionchannel">I_DistributionChannel</a>.<a href="#i_distributionchannel-distributionchannel">DistributionChannel</a>) via <a href="#billingdocument-distributionchannel">DistributionChannel</a></td></tr>
<tr><td><strong id="billingdocument-_division">_Division</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_division">I_Division</a> (path: <a href="#i_division">I_Division</a>.<a href="#i_division-division">Division</a>) via <a href="#billingdocument-division">Division</a></td></tr>
<tr><td><strong id="billingdocument-_dunningarea">_DunningArea</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_dunningarea">I_DunningArea</a> (path: <a href="#i_dunningarea">I_DunningArea</a>.<a href="#i_dunningarea-dunningarea">DunningArea</a>) via <a href="#billingdocument-dunningarea">DunningArea</a></td></tr>
<tr><td><strong id="billingdocument-_dunningareatext">_DunningAreaText</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#i_dunningareatext">I_DunningAreaText</a> (path: <a href="#i_dunningareatext">I_DunningAreaText</a>.<a href="#i_dunningareatext-dunningarea">DunningArea</a>) via <a href="#billingdocument-dunningarea">DunningArea</a></td></tr>
<tr><td><strong id="billingdocument-_dunningblockingreason">_DunningBlockingReason</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_dunningblockingreasoncode">I_DunningBlockingReasonCode</a> (path: <a href="#i_dunningblockingreasoncode">I_DunningBlockingReasonCode</a>.<a href="#i_dunningblockingreasoncode-dunningblockingreason">DunningBlockingReason</a>) via <a href="#billingdocument-dunningblockingreason">DunningBlockingReason</a></td></tr>
<tr><td><strong id="billingdocument-_dunningkey">_DunningKey</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_dunningkey">I_DunningKey</a> (path: <a href="#i_dunningkey">I_DunningKey</a>.<a href="#i_dunningkey-dunningkey">DunningKey</a>) via <a href="#billingdocument-dunningkey">DunningKey</a></td></tr>
<tr><td><strong id="billingdocument-_enhancedfields">_EnhancedFields</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_billingdocenhancedfields">I_BillingDocEnhancedFields</a> (path: <a href="#i_billingdocenhancedfields">I_BillingDocEnhancedFields</a>.<a href="#i_billingdocenhancedfields-billingdocument">BillingDocument</a>) via <a href="#billingdocument-billingdocument">BillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_exchangeratetype">_ExchangeRateType</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_exchangeratetype">I_ExchangeRateType</a> (path: <a href="#i_exchangeratetype">I_ExchangeRateType</a>.<a href="#i_exchangeratetype-exchangeratetype">ExchangeRateType</a>) via <a href="#billingdocument-exchangeratetype">ExchangeRateType</a></td></tr>
<tr><td><strong id="billingdocument-_fiscalyear">_FiscalYear</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_fiscalyearforcompanycode">I_FiscalYearForCompanyCode</a> (path: <a href="#i_fiscalyearforcompanycode">I_FiscalYearForCompanyCode</a>.<a href="#i_fiscalyearforcompanycode-fiscalyear">FiscalYear</a>) via <a href="#billingdocument-fiscalyear">FiscalYear</a></td></tr>
<tr><td><strong id="billingdocument-_incotermsclassification">_IncotermsClassification</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_incotermsclassification">I_IncotermsClassification</a> (path: <a href="#i_incotermsclassification">I_IncotermsClassification</a>.<a href="#i_incotermsclassification-incotermsclassification">IncotermsClassification</a>) via <a href="#billingdocument-incotermsclassification">IncotermsClassification</a></td></tr>
<tr><td><strong id="billingdocument-_incotermsversion">_IncotermsVersion</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_incotermsversion">I_IncotermsVersion</a> (path: <a href="#i_incotermsversion">I_IncotermsVersion</a>.<a href="#i_incotermsversion-incotermsversion">IncotermsVersion</a>) via <a href="#billingdocument-incotermsversion">IncotermsVersion</a></td></tr>
<tr><td><strong id="billingdocument-_invoiceclearingstatus">_InvoiceClearingStatus</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_invoiceclearingstatus">I_InvoiceClearingStatus</a> (path: <a href="#i_invoiceclearingstatus">I_InvoiceClearingStatus</a>.<a href="#i_invoiceclearingstatus-invoiceclearingstatus">InvoiceClearingStatus</a>) via <a href="#billingdocument-invoiceclearingstatus">InvoiceClearingStatus</a></td></tr>
<tr><td><strong id="billingdocument-_invoiceliststatus">_InvoiceListStatus</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_invoiceliststatus">I_InvoiceListStatus</a> (path: <a href="#i_invoiceliststatus">I_InvoiceListStatus</a>.<a href="#i_invoiceliststatus-invoiceliststatus">InvoiceListStatus</a>) via <a href="#billingdocument-invoiceliststatus">InvoiceListStatus</a></td></tr>
<tr><td><strong id="billingdocument-_invoicelisttype">_InvoiceListType</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_billingdocumenttype">I_BillingDocumentType</a> (path: <a href="#i_billingdocumenttype">I_BillingDocumentType</a>.<a href="#i_billingdocumenttype-billingdocumenttype">BillingDocumentType</a>) via <a href="#billingdocument-invoicelisttype">InvoiceListType</a></td></tr>
<tr><td><strong id="billingdocument-_item">_Item</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#i_billingdocumentitem">I_BillingDocumentItem</a> (path: <a href="#i_billingdocumentitem">I_BillingDocumentItem</a>.<a href="#i_billingdocumentitem-billingdocument">BillingDocument</a>) via <a href="#billingdocument-billingdocument">BillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_logicalsystem">_LogicalSystem</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_logicalsystem">I_LogicalSystem</a> (path: <a href="#i_logicalsystem">I_LogicalSystem</a>.<a href="#i_logicalsystem-logicalsystem">LogicalSystem</a>) via <a href="#billingdocument-logicalsystem">LogicalSystem</a></td></tr>
<tr><td><strong id="billingdocument-_overallbillingstatus">_OverallBillingStatus</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_overallbillingstatus">I_OverallBillingStatus</a> (path: <a href="#i_overallbillingstatus">I_OverallBillingStatus</a>.<a href="#i_overallbillingstatus-overallbillingstatus">OverallBillingStatus</a>) via <a href="#billingdocument-overallbillingstatus">OverallBillingStatus</a></td></tr>
<tr><td><strong id="billingdocument-_overallpricingincompletionsts">_OverallPricingIncompletionSts</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_overallprcincompletionsts">I_OverallPrcIncompletionSts</a> (path: <a href="#i_overallprcincompletionsts">I_OverallPrcIncompletionSts</a>.<a href="#i_overallprcincompletionsts-overallpricingincompletionsts">OverallPricingIncompletionSts</a>) via <a href="#billingdocument-overallpricingincompletionsts">OverallPricingIncompletionSts</a></td></tr>
<tr><td><strong id="billingdocument-_overallsdprocessstatus">_OverallSDProcessStatus</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_overallsdprocessstatus">I_OverallSDProcessStatus</a> (path: <a href="#i_overallsdprocessstatus">I_OverallSDProcessStatus</a>.<a href="#i_overallsdprocessstatus-overallsdprocessstatus">OverallSDProcessStatus</a>) via <a href="#billingdocument-overallsdprocessstatus">OverallSDProcessStatus</a></td></tr>
<tr><td><strong id="billingdocument-_ovrlitmgeneralincompletionsts">_OvrlItmGeneralIncompletionSts</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_ovrlitmgenincompletionsts">I_OvrlItmGenIncompletionSts</a> (path: <a href="#i_ovrlitmgenincompletionsts">I_OvrlItmGenIncompletionSts</a>.<a href="#i_ovrlitmgenincompletionsts-ovrlitmgeneralincompletionsts">OvrlItmGeneralIncompletionSts</a>) via <a href="#billingdocument-ovrlitmgeneralincompletionsts">OvrlItmGeneralIncompletionSts</a></td></tr>
<tr><td><strong id="billingdocument-_partner">_Partner</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#i_billingdocumentpartner">I_BillingDocumentPartner</a> (path: <a href="#i_billingdocumentpartner">I_BillingDocumentPartner</a>.<a href="#i_billingdocumentpartner-billingdocument">BillingDocument</a>) via <a href="#billingdocument-billingdocument">BillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_payerparty">_PayerParty</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_customer">I_Customer</a> (path: <a href="#i_customer">I_Customer</a>.<a href="#i_customer-customer">Customer</a>) via <a href="#billingdocument-payerparty">PayerParty</a></td></tr>
<tr><td><strong id="billingdocument-_paymentmethod">_PaymentMethod</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_paymentmethod">I_PaymentMethod</a> (path: <a href="#i_paymentmethod">I_PaymentMethod</a>.<a href="#i_paymentmethod-paymentmethod">PaymentMethod</a>) via <a href="#billingdocument-paymentmethod">PaymentMethod</a></td></tr>
<tr><td><strong id="billingdocument-_pricelisttype">_PriceListType</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_pricelisttype">I_PriceListType</a> (path: <a href="#i_pricelisttype">I_PriceListType</a>.<a href="#i_pricelisttype-pricelisttype">PriceListType</a>) via <a href="#billingdocument-pricelisttype">PriceListType</a></td></tr>
<tr><td><strong id="billingdocument-_pricingelement">_PricingElement</strong><br /><br /></td><td>cds.Association</td><td>Association to many <a href="#i_billingdocumentprcgelmnt">I_BillingDocumentPrcgElmnt</a> (path: <a href="#i_billingdocumentprcgelmnt">I_BillingDocumentPrcgElmnt</a>.<a href="#i_billingdocumentprcgelmnt-billingdocument">BillingDocument</a>) via <a href="#billingdocument-billingdocument">BillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_region">_Region</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_region">I_Region</a> (path: <a href="#i_region">I_Region</a>.<a href="#i_region-region">Region</a>) via <a href="#billingdocument-region">Region</a></td></tr>
<tr><td><strong id="billingdocument-_reversalreason">_ReversalReason</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_reversalreason">I_ReversalReason</a> (path: <a href="#i_reversalreason">I_ReversalReason</a>.<a href="#i_reversalreason-reversalreason">ReversalReason</a>) via <a href="#billingdocument-reversalreason">ReversalReason</a></td></tr>
<tr><td><strong id="billingdocument-_salesdistrict">_SalesDistrict</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_salesdistrict">I_SalesDistrict</a> (path: <a href="#i_salesdistrict">I_SalesDistrict</a>.<a href="#i_salesdistrict-salesdistrict">SalesDistrict</a>) via <a href="#billingdocument-salesdistrict">SalesDistrict</a></td></tr>
<tr><td><strong id="billingdocument-_salesorganization">_SalesOrganization</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_salesorganization">I_SalesOrganization</a> (path: <a href="#i_salesorganization">I_SalesOrganization</a>.<a href="#i_salesorganization-salesorganization">SalesOrganization</a>) via <a href="#billingdocument-salesorganization">SalesOrganization</a></td></tr>
<tr><td><strong id="billingdocument-_sddocumentcategory">_SDDocumentCategory</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_sddocumentcategory">I_SDDocumentCategory</a> (path: <a href="#i_sddocumentcategory">I_SDDocumentCategory</a>.<a href="#i_sddocumentcategory-sddocumentcategory">SDDocumentCategory</a>) via <a href="#billingdocument-sddocumentcategory">SDDocumentCategory</a></td></tr>
<tr><td><strong id="billingdocument-_sdpricingprocedure">_SDPricingProcedure</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_slspricingprocedure">I_SlsPricingProcedure</a> (path: <a href="#i_slspricingprocedure">I_SlsPricingProcedure</a>.<a href="#i_slspricingprocedure-pricingprocedure">PricingProcedure</a>) via <a href="#billingdocument-sdpricingprocedure">SDPricingProcedure</a></td></tr>
<tr><td><strong id="billingdocument-_shippingcondition">_ShippingCondition</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_shippingcondition">I_ShippingCondition</a> (path: <a href="#i_shippingcondition">I_ShippingCondition</a>.<a href="#i_shippingcondition-shippingcondition">ShippingCondition</a>) via <a href="#billingdocument-shippingcondition">ShippingCondition</a></td></tr>
<tr><td><strong id="billingdocument-_soldtoparty">_SoldToParty</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_customer">I_Customer</a> (path: <a href="#i_customer">I_Customer</a>.<a href="#i_customer-customer">Customer</a>) via <a href="#billingdocument-soldtoparty">SoldToParty</a></td></tr>
<tr><td><strong id="billingdocument-_statisticscurrency">_StatisticsCurrency</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_currency">I_Currency</a> (path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#billingdocument-statisticscurrency">StatisticsCurrency</a></td></tr>
<tr><td><strong id="billingdocument-_taxdeparturecountry">_TaxDepartureCountry</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_country">I_Country</a> (path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#billingdocument-taxdeparturecountry">TaxDepartureCountry</a></td></tr>
<tr><td><strong id="billingdocument-_transactioncurrency">_TransactionCurrency</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_currency">I_Currency</a> (path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#billingdocument-transactioncurrency">TransactionCurrency</a></td></tr>
<tr><td><strong id="billingdocument-_vatregistrationcountry">_VATRegistrationCountry</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_country">I_Country</a> (path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#billingdocument-vatregistrationcountry">VATRegistrationCountry</a></td></tr>
<tr><td><strong id="billingdocument-_vatregistrationorigin">_VATRegistrationOrigin</strong><br /><br /></td><td>cds.Association</td><td>Association to one <a href="#i_vatregistrationorigin">I_VATRegistrationOrigin</a> (path: <a href="#i_vatregistrationorigin">I_VATRegistrationOrigin</a>.<a href="#i_vatregistrationorigin-vatregistrationorigin">VATRegistrationOrigin</a>) via <a href="#billingdocument-vatregistrationorigin">VATRegistrationOrigin</a></td></tr>
</table>

## Type Definitions

### AEDAT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td>@EndUserText.heading: Chngd On<br />@EndUserText.label: Changed On<br />@EndUserText.quickInfo: Last Changed On</td></tr>
</table>

### BELNR_D

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Doc. No.<br />@EndUserText.label: Document Number<br />@EndUserText.quickInfo: Document Number of an Accounting Document</td></tr>
</table>

### BSTKD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td>@EndUserText.heading: Customer Reference<br />@EndUserText.label: Customer Reference<br />@EndUserText.quickInfo: Customer Reference</td></tr>
</table>

### BUCHK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;&rbrace;</code><br />@EndUserText.heading: PS<br />@EndUserText.label: Posting Status<br />@EndUserText.quickInfo: Posting Status of Billing Document</td></tr>
</table>

### BUKRS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: CoCd<br />@EndUserText.label: Company Code<br />@EndUserText.quickInfo: Company Code</td></tr>
</table>

### BZIRK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td>@EndUserText.heading: SDst<br />@EndUserText.label: Sales District<br />@EndUserText.quickInfo: Sales District</td></tr>
</table>

### CITYC

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: Code<br />@EndUserText.label: City Code<br />@EndUserText.quickInfo: City Code</td></tr>
</table>

### CLRST

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;&rbrace;</code><br />@EndUserText.heading: Clearing Status<br />@EndUserText.label: Clearing Status<br />@EndUserText.quickInfo: Clearing Status of Billing Document</td></tr>
</table>

### CORR_VKONT_KK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td>@EndUserText.heading: Cont.Account<br />@EndUserText.label: Contract Account<br />@EndUserText.quickInfo: Contract Account Number</td></tr>
</table>

### COUNC

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: CCd<br />@EndUserText.label: County Code<br />@EndUserText.quickInfo: County Code</td></tr>
</table>

### CPKUR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: SRate<br />@EndUserText.label: Set Exchange Rate<br />@EndUserText.quickInfo: Exchange Rate Setting</td></tr>
</table>

### DZTERM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: Terms of Payment<br />@EndUserText.label: Terms of Payment<br />@EndUserText.quickInfo: Key for Terms of Payment</td></tr>
</table>

### DZUKRI

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(40)</td><td>@EndUserText.heading: Combination Criteria in the Billing Doc.<br />@EndUserText.label: Combination Criteria<br />@EndUserText.quickInfo: Combination criteria in the billing document</td></tr>
</table>

### ERDAT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td>@EndUserText.heading: Created On<br />@EndUserText.label: Created On<br />@EndUserText.quickInfo: Record Creation Date</td></tr>
</table>

### ERNAM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(12)</td><td>@EndUserText.heading: Created By<br />@EndUserText.label: Created By<br />@EndUserText.quickInfo: Name of Person Responsible for Creating the Object</td></tr>
</table>

### ERZET

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Time</td><td>@EndUserText.heading: Time<br />@EndUserText.label: Time<br />@EndUserText.quickInfo: Entry time</td></tr>
</table>

### FKART

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: BillT<br />@EndUserText.label: Billing Type<br />@EndUserText.quickInfo: Billing Type</td></tr>
</table>

### FKART_RL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: ILTyp<br />@EndUserText.label: Invoice List Type<br />@EndUserText.quickInfo: Invoice List Type</td></tr>
</table>

### FKDAT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td>@EndUserText.heading: Billing Date<br />@EndUserText.label: Billing Date<br />@EndUserText.quickInfo: Billing Date</td></tr>
</table>

### FKDAT_RL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td>@EndUserText.heading: InvList BD<br />@EndUserText.label: Inv. List Bill. Date<br />@EndUserText.quickInfo: Billing date for the invoice list</td></tr>
</table>

### FKSTO

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: Can<br />@EndUserText.label: Canceled<br />@EndUserText.quickInfo: Billing document is canceled</td></tr>
</table>

### FKTYP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;,"D":&lbrace;"val":"D"&rbrace;,"E":&lbrace;"val":"E"&rbrace;,"F":&lbrace;"val":"F"&rbrace;,"I":&lbrace;"val":"I"&rbrace;,"K":&lbrace;"val":"K"&rbrace;,"L":&lbrace;"val":"L"&rbrace;,"P":&lbrace;"val":"P"&rbrace;,"R":&lbrace;"val":"R"&rbrace;,"U":&lbrace;"val":"U"&rbrace;,"W":&lbrace;"val":"W"&rbrace;,"X":&lbrace;"val":"X"&rbrace;,"S":&lbrace;"val":"S"&rbrace;&rbrace;</code><br />@EndUserText.heading: BlCat<br />@EndUserText.label: Billing Category<br />@EndUserText.quickInfo: Billing Category</td></tr>
</table>

### GBSTK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;&rbrace;</code><br />@EndUserText.heading: OS<br />@EndUserText.label: Overall Status<br />@EndUserText.quickInfo: Overall Processing Status (Header/All Items)</td></tr>
</table>

### GJAHR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: Year<br />@EndUserText.label: Fiscal Year<br />@EndUserText.quickInfo: Fiscal Year</td></tr>
</table>

### HITYP_PR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: HPr<br />@EndUserText.label: HierarchyTypePricing<br />@EndUserText.quickInfo: Hierarchy type for pricing</td></tr>
</table>

### INCO1

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: IncoT<br />@EndUserText.label: Incoterms<br />@EndUserText.quickInfo: Incoterms (Part 1)</td></tr>
</table>

### INCO2

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(28)</td><td>@EndUserText.heading: Inco. 2<br />@EndUserText.label: Incoterms (Part 2)<br />@EndUserText.quickInfo: Incoterms (Part 2)</td></tr>
</table>

### INCO2_L

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(70)</td><td>@EndUserText.heading: <code>"&lbrace;i18n>INCO2_L@ENDUSERTEXT.HEADING&rbrace;"</code><br />@EndUserText.label: Incoterms Location 1<br />@EndUserText.quickInfo: Incoterms Location 1</td></tr>
</table>

### INCO3_L

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(70)</td><td>@EndUserText.heading: <code>"&lbrace;i18n>INCO3_L@ENDUSERTEXT.HEADING&rbrace;"</code><br />@EndUserText.label: Incoterms Location 2<br />@EndUserText.quickInfo: Incoterms Location 2</td></tr>
</table>

### INCOV

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: IncoV<br />@EndUserText.label: Incoterms Version<br />@EndUserText.quickInfo: Incoterms Version</td></tr>
</table>

### INTRA_EXCL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: exclude from Intrastat<br />@EndUserText.label: Intrastat Exclusion<br />@EndUserText.quickInfo: Exclude from Intrastat Reporting</td></tr>
</table>

### INTRA_REL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: relevant for Intrastat<br />@EndUserText.label: Intrastat Relevance<br />@EndUserText.quickInfo: Relevant for Intrastat Reporting</td></tr>
</table>

### ISACCRUALRELEVANT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: Is Relevant for Accrual<br />@EndUserText.label: Relevant for Accrual<br />@EndUserText.quickInfo: Is relevant for accrual</td></tr>
</table>

### J_1ANOPG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: Pages<br />@EndUserText.label: Number of Pages<br />@EndUserText.quickInfo: Number of pages of invoice</td></tr>
</table>

### KALSMASD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td>@EndUserText.heading: PriPr.<br />@EndUserText.label: Pricing Procedure<br />@EndUserText.quickInfo: Pricing Procedure in Pricing</td></tr>
</table>

### KDGRP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: CGrp<br />@EndUserText.label: Customer Group<br />@EndUserText.quickInfo: Customer Group</td></tr>
</table>

### KIDNO

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(30)</td><td>@EndUserText.heading: Payment Reference<br />@EndUserText.label: Payment Reference<br />@EndUserText.quickInfo: Payment Reference</td></tr>
</table>

### KKBER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: CCAr<br />@EndUserText.label: Credit Control Area<br />@EndUserText.quickInfo: Credit Control Area</td></tr>
</table>

### KNUMA

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Agreement<br />@EndUserText.label: Agreement<br />@EndUserText.quickInfo: Agreement (various conditions grouped together)</td></tr>
</table>

### KNUMV

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Doc.Cond.<br />@EndUserText.label: Doc. Condition No.<br />@EndUserText.quickInfo: Number of the Document Condition</td></tr>
</table>

### KONDA

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: CPG<br />@EndUserText.label: Customer Price Group<br />@EndUserText.quickInfo: Customer Price Group</td></tr>
</table>

### KTGRD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: AAGC<br />@EndUserText.label: Acct Assmt Grp Cust.<br />@EndUserText.quickInfo: Account Assignment Group for Customer</td></tr>
</table>

### KUNAG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Sold-to<br />@EndUserText.label: Sold-to Party<br />@EndUserText.quickInfo: Sold-to Party</td></tr>
</table>

### KUNRG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Payer<br />@EndUserText.label: Payer<br />@EndUserText.quickInfo: Payer</td></tr>
</table>

### KURRF_NOT_CONVERTED

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Decimal</td><td>precision: <code>9</code><br />scale: <code>5</code><br />@EndUserText.heading: <code>"&lbrace;i18n>KURRF_NOT_CONVERTED@ENDUSERTEXT.HEADING&rbrace;"</code><br />@EndUserText.label: Accounting Exchange Rate<br />@EndUserText.quickInfo: Exchange Rate for FI Postings</td></tr>
</table>

### KURST

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: Exchange Rate Type<br />@EndUserText.label: Exchange Rate Type<br />@EndUserText.quickInfo: Exchange Rate Type</td></tr>
</table>

### LANDTX

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: TDC<br />@EndUserText.label: Tax Departure C/R<br />@EndUserText.quickInfo: Tax Departure Country/Region</td></tr>
</table>

### LCNUM

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: FD No.<br />@EndUserText.label: Financial Doc. No.<br />@EndUserText.quickInfo: Financial doc. processing: Internal financial doc. number</td></tr>
</table>

### LIFNR_WK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Supplier Number Plant<br />@EndUserText.label: Sppl. No. Plnt<br />@EndUserText.quickInfo: Supplier Number of Plant</td></tr>
</table>

### LLAND

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: Dest. Ctry/Reg<br />@EndUserText.label: Dest. Country/Region<br />@EndUserText.quickInfo: Destination Country/Region</td></tr>
</table>

### LOGSYS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Log.System<br />@EndUserText.label: Logical System<br />@EndUserText.quickInfo: Logical System</td></tr>
</table>

### MABER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: Area<br />@EndUserText.label: Dunning Area<br />@EndUserText.quickInfo: Dunning Area</td></tr>
</table>

### MANSP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: Block<br />@EndUserText.label: Dunning Block<br />@EndUserText.quickInfo: Dunning Block</td></tr>
</table>

### MRNKZ

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: InM<br />@EndUserText.label: Man. Invoice Maint.<br />@EndUserText.quickInfo: Manual Invoice Maintenance</td></tr>
</table>

### MSCHL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: Dunn.Key<br />@EndUserText.label: Dunning Key<br />@EndUserText.quickInfo: Dunning Key</td></tr>
</table>

### MWSBP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Decimal</td><td>precision: <code>34</code><br />scale: <code>"floating"</code><br />@EndUserText.heading: Tax Amount<br />@EndUserText.label: Tax Amount<br />@EndUserText.quickInfo: Tax Amount in Document Currency</td></tr>
</table>

### NETWR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Decimal</td><td>precision: <code>34</code><br />scale: <code>"floating"</code><br />@EndUserText.heading: Net Value<br />@EndUserText.label: Net Value<br />@EndUserText.quickInfo: Net Value in Document Currency</td></tr>
</table>

### ORDNR_V

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(18)</td><td>@EndUserText.heading: Assignment<br />@EndUserText.label: Assignment<br />@EndUserText.quickInfo: Assignment Number</td></tr>
</table>

### PLTYP

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: PL<br />@EndUserText.label: Price List Type<br />@EndUserText.quickInfo: Price List Type</td></tr>
</table>

### POPER

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: Period<br />@EndUserText.label: Posting Period<br />@EndUserText.quickInfo: Posting Period</td></tr>
</table>

### RASSC

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(6)</td><td>@EndUserText.heading: Tr.Prt<br />@EndUserText.label: Trading Partner No.<br />@EndUserText.quickInfo: Company ID of Trading Partner</td></tr>
</table>

### REGIO

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: Rg<br />@EndUserText.label: Region<br />@EndUserText.quickInfo: Region (State, Province, County)</td></tr>
</table>

### RELIK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;&rbrace;</code><br />@EndUserText.heading: ILSt<br />@EndUserText.label: Invoice List Status<br />@EndUserText.quickInfo: Invoice list status of billing document</td></tr>
</table>

### RFBSK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;,"D":&lbrace;"val":"D"&rbrace;,"E":&lbrace;"val":"E"&rbrace;,"F":&lbrace;"val":"F"&rbrace;,"G":&lbrace;"val":"G"&rbrace;,"H":&lbrace;"val":"H"&rbrace;,"I":&lbrace;"val":"I"&rbrace;,"K":&lbrace;"val":"K"&rbrace;,"L":&lbrace;"val":"L"&rbrace;,"M":&lbrace;"val":"M"&rbrace;,"N":&lbrace;"val":"N"&rbrace;&rbrace;</code><br />@EndUserText.heading: PsSt<br />@EndUserText.label: Posting Status<br />@EndUserText.quickInfo: Status for Transfer to Accounting</td></tr>
</table>

### SCHZW_BSEG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: PM<br />@EndUserText.label: Payment Method<br />@EndUserText.quickInfo: Payment Method</td></tr>
</table>

### SEPA_MNDID

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(35)</td><td>@EndUserText.heading: Mandate Reference<br />@EndUserText.label: Mandate Reference<br />@EndUserText.quickInfo: Unique Reference to Mandate for each Payee</td></tr>
</table>

### SFAKN

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: CancBillDc<br />@EndUserText.label: Canceled Bill. Doc.<br />@EndUserText.quickInfo: Number of canceled billing document</td></tr>
</table>

### SPART

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: Dv<br />@EndUserText.label: Division<br />@EndUserText.quickInfo: Division</td></tr>
</table>

### STCEG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(20)</td><td>@EndUserText.heading: VAT Registration No.<br />@EndUserText.label: VAT Registration No.<br />@EndUserText.quickInfo: VAT Registration Number</td></tr>
</table>

### STCEG_H

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;,"D":&lbrace;"val":"D"&rbrace;,"E":&lbrace;"val":"E"&rbrace;,"F":&lbrace;"val":"F"&rbrace;,"G":&lbrace;"val":"G"&rbrace;,"H":&lbrace;"val":"H"&rbrace;,"I":&lbrace;"val":"I"&rbrace;,"J":&lbrace;"val":"J"&rbrace;,"K":&lbrace;"val":"K"&rbrace;&rbrace;</code><br />@EndUserText.heading: OSI<br />@EndUserText.label: Origin Sales Tax No.<br />@EndUserText.quickInfo: Origin of Sales Tax Number</td></tr>
</table>

### STCEG_L

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(3)</td><td>@EndUserText.heading: STC<br />@EndUserText.label: Ctry/Rgn Sls Tax No.<br />@EndUserText.quickInfo: Country/Region of Sales Tax ID Number</td></tr>
</table>

### STGRD

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: Rev.Reas.<br />@EndUserText.label: Reversal Reason<br />@EndUserText.quickInfo: Reason for Reversal or Inverse Posting</td></tr>
</table>

### STWAE

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(5)</td><td>@EndUserText.heading: Curr.<br />@EndUserText.label: Statistics Currency<br />@EndUserText.quickInfo: Statistics Currency</td></tr>
</table>

### TAXK1

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: Tx2Cs<br />@EndUserText.label: Tax Class.1 Customer<br />@EndUserText.quickInfo: Tax Classification 1 for Customer</td></tr>
</table>

### TAXK2

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: Tx2Cs<br />@EndUserText.label: Tax Class.2 Customer<br />@EndUserText.quickInfo: Tax Classification 2 for Customer</td></tr>
</table>

### TAXK3

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: Tx3Cs<br />@EndUserText.label: Tax Class.3 Customer<br />@EndUserText.quickInfo: Tax Classification 3 for Customer</td></tr>
</table>

### TAXK4

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: Tx4Cs<br />@EndUserText.label: Tax Class.4 Customer<br />@EndUserText.quickInfo: Tax Classification 4 for Customer</td></tr>
</table>

### TAXK5

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: Tx5Cs<br />@EndUserText.label: Tax Class.5 Customer<br />@EndUserText.quickInfo: Tax Classification 5 for Customer</td></tr>
</table>

### TAXK6

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: Tx6Cs<br />@EndUserText.label: Tax Class.6 Customer<br />@EndUserText.quickInfo: Tax Classification 6 for Customer</td></tr>
</table>

### TAXK7

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: Tx7Cs<br />@EndUserText.label: Tax Class.7 Customer<br />@EndUserText.quickInfo: Tax Classification 7 for Customer</td></tr>
</table>

### TAXK8

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: Tx8Cs<br />@EndUserText.label: Tax Class.8 Customer<br />@EndUserText.quickInfo: Tax Classification 8 for Customer</td></tr>
</table>

### TAXK9

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>@EndUserText.heading: Tx9Cs<br />@EndUserText.label: Tax Class.9 Customer<br />@EndUserText.quickInfo: Tax Classification 9 for Customer</td></tr>
</table>

### TIMESTAMPL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Timestamp</td><td>@EndUserText.heading: Time Stamp<br />@EndUserText.label: Time Stamp<br />@EndUserText.quickInfo: UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun)</td></tr>
</table>

### UVALL_SU

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;&rbrace;</code><br />@EndUserText.heading: AI<br />@EndUserText.label: All Items<br />@EndUserText.quickInfo: Incompletion Status (All Items)</td></tr>
</table>

### UVPRS_UK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;&rbrace;</code><br />@EndUserText.heading: PI<br />@EndUserText.label: Pricing – All Items<br />@EndUserText.quickInfo: Pricing Incompletion Status (All Items)</td></tr>
</table>

### VALDT

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td>@EndUserText.heading: FixValDate<br />@EndUserText.label: Fixed Value Date<br />@EndUserText.quickInfo: Fixed Value Date</td></tr>
</table>

### VALTG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: AValD<br />@EndUserText.label: Addit. Value Days<br />@EndUserText.quickInfo: Additional Value Days</td></tr>
</table>

### VBELN_VF

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(10)</td><td>@EndUserText.heading: Bill. Doc.<br />@EndUserText.label: Billing Document<br />@EndUserText.quickInfo: Billing Document</td></tr>
</table>

### VBTYPL

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>enum: <code>&lbrace;"0":&lbrace;"val":"0"&rbrace;,"1":&lbrace;"val":"1"&rbrace;,"2":&lbrace;"val":"2"&rbrace;,"3":&lbrace;"val":"3"&rbrace;,"4":&lbrace;"val":"4"&rbrace;,"5":&lbrace;"val":"5"&rbrace;,"6":&lbrace;"val":"6"&rbrace;,"7":&lbrace;"val":"7"&rbrace;,"8":&lbrace;"val":"8"&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;,"D":&lbrace;"val":"D"&rbrace;,"E":&lbrace;"val":"E"&rbrace;,"F":&lbrace;"val":"F"&rbrace;,"G":&lbrace;"val":"G"&rbrace;,"H":&lbrace;"val":"H"&rbrace;,"I":&lbrace;"val":"I"&rbrace;,"J":&lbrace;"val":"J"&rbrace;,"K":&lbrace;"val":"K"&rbrace;,"L":&lbrace;"val":"L"&rbrace;,"M":&lbrace;"val":"M"&rbrace;,"N":&lbrace;"val":"N"&rbrace;,"O":&lbrace;"val":"O"&rbrace;,"P":&lbrace;"val":"P"&rbrace;,"Q":&lbrace;"val":"Q"&rbrace;,"R":&lbrace;"val":"R"&rbrace;,"S":&lbrace;"val":"S"&rbrace;,"T":&lbrace;"val":"T"&rbrace;,"U":&lbrace;"val":"U"&rbrace;,"V":&lbrace;"val":"V"&rbrace;,"W":&lbrace;"val":"W"&rbrace;,"X":&lbrace;"val":"X"&rbrace;,"Y":&lbrace;"val":"Y"&rbrace;,"a":&lbrace;"val":"a"&rbrace;,"b":&lbrace;"val":"b"&rbrace;,"c":&lbrace;"val":"c"&rbrace;,"d":&lbrace;"val":"d"&rbrace;,"e":&lbrace;"val":"e"&rbrace;,"g":&lbrace;"val":"g"&rbrace;,"h":&lbrace;"val":"h"&rbrace;,"i":&lbrace;"val":"i"&rbrace;,"j":&lbrace;"val":"j"&rbrace;,"k":&lbrace;"val":"k"&rbrace;,"n":&lbrace;"val":"n"&rbrace;,"o":&lbrace;"val":"o"&rbrace;,"p":&lbrace;"val":"p"&rbrace;,"q":&lbrace;"val":"q"&rbrace;,"r":&lbrace;"val":"r"&rbrace;,"s":&lbrace;"val":"s"&rbrace;,"t":&lbrace;"val":"t"&rbrace;,"u":&lbrace;"val":"u"&rbrace;,"v":&lbrace;"val":"v"&rbrace;,"w":&lbrace;"val":"w"&rbrace;,"x":&lbrace;"val":"x"&rbrace;,"$":&lbrace;"val":"$"&rbrace;,"+":&lbrace;"val":"+"&rbrace;,"-":&lbrace;"val":"-"&rbrace;,"#":&lbrace;"val":"#"&rbrace;,"~":&lbrace;"val":"~"&rbrace;,"§":&lbrace;"val":"§"&rbrace;,":":&lbrace;"val":":"&rbrace;,".":&lbrace;"val":"."&rbrace;,"&":&lbrace;"val":"&"&rbrace;,"*":&lbrace;"val":"*"&rbrace;,",":&lbrace;"val":","&rbrace;,"^":&lbrace;"val":"^"&rbrace;,"|":&lbrace;"val":"|"&rbrace;,"f001":&lbrace;"val":"f001"&rbrace;,"f002":&lbrace;"val":"f002"&rbrace;,"f003":&lbrace;"val":"f003"&rbrace;,"f004":&lbrace;"val":"f004"&rbrace;,"CEM":&lbrace;"val":"CEM"&rbrace;,"BOS":&lbrace;"val":"BOS"&rbrace;,"EBDR":&lbrace;"val":"EBDR"&rbrace;,"PBDR":&lbrace;"val":"PBDR"&rbrace;,"PBD":&lbrace;"val":"PBD"&rbrace;,"CSVO":&lbrace;"val":"CSVO"&rbrace;,"CSCO":&lbrace;"val":"CSCO"&rbrace;,"CSCT":&lbrace;"val":"CSCT"&rbrace;,"TMFU":&lbrace;"val":"TMFU"&rbrace;,"TMFO":&lbrace;"val":"TMFO"&rbrace;,"CMMA":&lbrace;"val":"CMMA"&rbrace;,"PBRQ":&lbrace;"val":"PBRQ"&rbrace;,"SOLO":&lbrace;"val":"SOLO"&rbrace;,"SBRQ":&lbrace;"val":"SBRQ"&rbrace;,"GBRQ":&lbrace;"val":"GBRQ"&rbrace;,"ICPF":&lbrace;"val":"ICPF"&rbrace;,"DPRQ":&lbrace;"val":"DPRQ"&rbrace;,"DPIN":&lbrace;"val":"DPIN"&rbrace;,"DPCC":&lbrace;"val":"DPCC"&rbrace;,"JITC":&lbrace;"val":"JITC"&rbrace;,"JITP":&lbrace;"val":"JITP"&rbrace;&rbrace;</code><br />@EndUserText.heading: Doc.Cat.<br />@EndUserText.label: SD Document Category<br />@EndUserText.quickInfo: SD Document Category</td></tr>
</table>

### VF_DRAFT_INDICATOR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: Is Draft<br />@EndUserText.label: Draft Indicator<br />@EndUserText.quickInfo: IsDraft Indicator</td></tr>
</table>

### VF_STATUS

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;" ":&lbrace;"val":""&rbrace;,"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;,"D":&lbrace;"val":"D"&rbrace;&rbrace;</code><br />@EndUserText.heading: Status<br />@EndUserText.label: Status<br />@EndUserText.quickInfo: SD Billing Status</td></tr>
</table>

### VF_TODO

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(1)</td><td>enum: <code>&lbrace;"A":&lbrace;"val":"A"&rbrace;,"B":&lbrace;"val":"B"&rbrace;,"C":&lbrace;"val":"C"&rbrace;,"D":&lbrace;"val":"D"&rbrace;&rbrace;</code><br />@EndUserText.heading: Issue Type<br />@EndUserText.label: Issue Type<br />@EndUserText.quickInfo: Billing Issue Type</td></tr>
</table>

### VKORG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(4)</td><td>@EndUserText.heading: SOrg.<br />@EndUserText.label: Sales Organization<br />@EndUserText.quickInfo: Sales Organization</td></tr>
</table>

### VSBED

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: Shipping Conditions<br />@EndUserText.label: Shipping Conditions<br />@EndUserText.quickInfo: Shipping Conditions</td></tr>
</table>

### VTWEG

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(2)</td><td>@EndUserText.heading: DChl<br />@EndUserText.label: Distribution Channel<br />@EndUserText.quickInfo: Distribution Channel</td></tr>
</table>

### WAERK

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(5)</td><td>@EndUserText.heading: Crcy<br />@EndUserText.label: Document Currency<br />@EndUserText.quickInfo: SD Document Currency</td></tr>
</table>

### WWERT_D

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Date</td><td>@EndUserText.heading: TranslDate<br />@EndUserText.label: Translation Date<br />@EndUserText.quickInfo: Translation Date</td></tr>
</table>

### XBLNR_V1

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.String(16)</td><td>@EndUserText.heading: Reference<br />@EndUserText.label: Reference<br />@EndUserText.quickInfo: Reference Document Number</td></tr>
</table>

### XEGDR

<table>
<tr><th>Type</th><th>Description</th></tr><tr><td>cds.Boolean</td><td>@EndUserText.heading: <code>"&lbrace;i18n>XEGDR@ENDUSERTEXT.HEADING&rbrace;"</code><br />@EndUserText.label: EU Triangular Deal<br />@EndUserText.quickInfo: Indicator: Triangular Deal Within the EU</td></tr>
</table>

