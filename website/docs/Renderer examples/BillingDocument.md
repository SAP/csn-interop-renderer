## Entity Definitions

### BillingDocument


<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="billingdocument-billingdocument">BillingDocument</strong></td><td><a href="#vbeln_vf">VBELN_VF</a></td><td><strong>Key</strong>: true<br /><strong>@EndUserText.heading</strong>: Bill. Doc.<br /><strong>@EndUserText.label</strong>: Billing Document<br /><strong>@EndUserText.quickInfo</strong>: Billing Document</td></tr>
<tr><td><strong id="billingdocument-sddocumentcategory">SDDocumentCategory</strong></td><td><a href="#vbtypl">VBTYPL</a></td><td><strong>@EndUserText.heading</strong>: Doc.Cat.<br /><strong>@EndUserText.label</strong>: SD Document Category<br /><strong>@EndUserText.quickInfo</strong>: SD Document Category<br /><strong>@ObjectModel.foreignKey.association</strong>: _SDDocumentCategory</td></tr>
<tr><td><strong id="billingdocument-billingdocumentcategory">BillingDocumentCategory</strong></td><td><a href="#fktyp">FKTYP</a></td><td><strong>@EndUserText.heading</strong>: BlCat<br /><strong>@EndUserText.label</strong>: Billing Category<br /><strong>@EndUserText.quickInfo</strong>: Billing Category<br /><strong>@ObjectModel.foreignKey.association</strong>: _BillingDocumentCategory</td></tr>
<tr><td><strong id="billingdocument-billingdocumenttype">BillingDocumentType</strong></td><td><a href="#fkart">FKART</a></td><td><strong>@EndUserText.heading</strong>: BillT<br /><strong>@EndUserText.label</strong>: Billing Type<br /><strong>@EndUserText.quickInfo</strong>: Billing Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _BillingDocumentType</td></tr>
<tr><td><strong id="billingdocument-createdbyuser">CreatedByUser</strong></td><td><a href="#ernam">ERNAM</a></td><td><strong>@EndUserText.heading</strong>: Created By<br /><strong>@EndUserText.label</strong>: Created By<br /><strong>@EndUserText.quickInfo</strong>: Name of Person Responsible for Creating the Object</td></tr>
<tr><td><strong id="billingdocument-creationdate">CreationDate</strong></td><td><a href="#erdat">ERDAT</a></td><td><strong>@EndUserText.heading</strong>: Created On<br /><strong>@EndUserText.label</strong>: Created On<br /><strong>@EndUserText.quickInfo</strong>: Record Creation Date</td></tr>
<tr><td><strong id="billingdocument-creationtime">CreationTime</strong></td><td><a href="#erzet">ERZET</a></td><td><strong>@EndUserText.heading</strong>: Time<br /><strong>@EndUserText.label</strong>: Time<br /><strong>@EndUserText.quickInfo</strong>: Entry time</td></tr>
<tr><td><strong id="billingdocument-lastchangedate">LastChangeDate</strong></td><td><a href="#aedat">AEDAT</a></td><td><strong>@EndUserText.heading</strong>: Chngd On<br /><strong>@EndUserText.label</strong>: Changed On<br /><strong>@EndUserText.quickInfo</strong>: Last Changed On</td></tr>
<tr><td><strong id="billingdocument-lastchangedatetime">LastChangeDateTime</strong></td><td><a href="#timestampl">TIMESTAMPL</a></td><td><strong>@EndUserText.heading</strong>: Time Stamp<br /><strong>@EndUserText.label</strong>: Time Stamp<br /><strong>@EndUserText.quickInfo</strong>: UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun)</td></tr>
<tr><td><strong id="billingdocument-logicalsystem">LogicalSystem</strong></td><td><a href="#logsys">LOGSYS</a></td><td><strong>@EndUserText.heading</strong>: Log.System<br /><strong>@EndUserText.label</strong>: Logical System<br /><strong>@EndUserText.quickInfo</strong>: Logical System<br /><strong>@ObjectModel.foreignKey.association</strong>: _LogicalSystem</td></tr>
<tr><td><strong id="billingdocument-salesorganization">SalesOrganization</strong></td><td><a href="#vkorg">VKORG</a></td><td><strong>@EndUserText.heading</strong>: SOrg.<br /><strong>@EndUserText.label</strong>: Sales Organization<br /><strong>@EndUserText.quickInfo</strong>: Sales Organization<br /><strong>@ObjectModel.foreignKey.association</strong>: _SalesOrganization</td></tr>
<tr><td><strong id="billingdocument-distributionchannel">DistributionChannel</strong></td><td><a href="#vtweg">VTWEG</a></td><td><strong>@EndUserText.heading</strong>: DChl<br /><strong>@EndUserText.label</strong>: Distribution Channel<br /><strong>@EndUserText.quickInfo</strong>: Distribution Channel<br /><strong>@ObjectModel.foreignKey.association</strong>: _DistributionChannel</td></tr>
<tr><td><strong id="billingdocument-division">Division</strong></td><td><a href="#spart">SPART</a></td><td><strong>@EndUserText.heading</strong>: Dv<br /><strong>@EndUserText.label</strong>: Division<br /><strong>@EndUserText.quickInfo</strong>: Division<br /><strong>@ObjectModel.foreignKey.association</strong>: _Division</td></tr>
<tr><td><strong id="billingdocument-billingdocumentdate">BillingDocumentDate</strong></td><td><a href="#fkdat">FKDAT</a></td><td><strong>@EndUserText.heading</strong>: Billing Date<br /><strong>@EndUserText.label</strong>: Billing Date<br /><strong>@EndUserText.quickInfo</strong>: Billing Date</td></tr>
<tr><td><strong id="billingdocument-billingdocumentiscancelled">BillingDocumentIsCancelled</strong></td><td><a href="#fksto">FKSTO</a></td><td><strong>@EndUserText.heading</strong>: Can<br /><strong>@EndUserText.label</strong>: Canceled<br /><strong>@EndUserText.quickInfo</strong>: Billing document is canceled</td></tr>
<tr><td><strong id="billingdocument-cancelledbillingdocument">CancelledBillingDocument</strong></td><td><a href="#sfakn">SFAKN</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_BillingDocumentStdVH",
      "element": "BillingDocument"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: CancBillDc<br /><strong>@EndUserText.label</strong>: Canceled Bill. Doc.<br /><strong>@EndUserText.quickInfo</strong>: Number of canceled billing document<br /><strong>@ObjectModel.foreignKey.association</strong>: _CancelledBillingDocument</td></tr>
<tr><td><strong id="billingdocument-billingdoccombinationcriteria">BillingDocCombinationCriteria</strong></td><td><a href="#dzukri">DZUKRI</a></td><td><strong>@EndUserText.heading</strong>: Combination Criteria in the Billing Doc.<br /><strong>@EndUserText.label</strong>: Combination Criteria<br /><strong>@EndUserText.quickInfo</strong>: Combination criteria in the billing document</td></tr>
<tr><td><strong id="billingdocument-manualinvoicemaintisrelevant">ManualInvoiceMaintIsRelevant</strong></td><td><a href="#mrnkz">MRNKZ</a></td><td><strong>@EndUserText.heading</strong>: InM<br /><strong>@EndUserText.label</strong>: Man. Invoice Maint.<br /><strong>@EndUserText.quickInfo</strong>: Manual Invoice Maintenance</td></tr>
<tr><td><strong id="billingdocument-nmbrofpages">NmbrOfPages</strong></td><td><a href="#j_1anopg">J_1ANOPG</a></td><td><strong>@EndUserText.heading</strong>: Pages<br /><strong>@EndUserText.label</strong>: Number of Pages<br /><strong>@EndUserText.quickInfo</strong>: Number of pages of invoice</td></tr>
<tr><td><strong id="billingdocument-isintrastatreportingrelevant">IsIntrastatReportingRelevant</strong></td><td><a href="#intra_rel">INTRA_REL</a></td><td><strong>@EndUserText.heading</strong>: relevant for Intrastat<br /><strong>@EndUserText.label</strong>: Intrastat Relevance<br /><strong>@EndUserText.quickInfo</strong>: Relevant for Intrastat Reporting</td></tr>
<tr><td><strong id="billingdocument-isintrastatreportingexcluded">IsIntrastatReportingExcluded</strong></td><td><a href="#intra_excl">INTRA_EXCL</a></td><td><strong>@EndUserText.heading</strong>: exclude from Intrastat<br /><strong>@EndUserText.label</strong>: Intrastat Exclusion<br /><strong>@EndUserText.quickInfo</strong>: Exclude from Intrastat Reporting</td></tr>
<tr><td><strong id="billingdocument-billingdocumentistemporary">BillingDocumentIsTemporary</strong></td><td><a href="#vf_draft_indicator">VF_DRAFT_INDICATOR</a></td><td><strong>@EndUserText.heading</strong>: Is Draft<br /><strong>@EndUserText.label</strong>: Draft Indicator<br /><strong>@EndUserText.quickInfo</strong>: IsDraft Indicator</td></tr>
<tr><td><strong id="billingdocument-totalnetamount">TotalNetAmount</strong></td><td><a href="#netwr">NETWR</a></td><td><strong>@EndUserText.heading</strong>: Net Value<br /><strong>@EndUserText.label</strong>: Net Value<br /><strong>@EndUserText.quickInfo</strong>: Net Value in Document Currency<br /><strong>@Semantics.amount.currencyCode</strong>: TransactionCurrency</td></tr>
<tr><td><strong id="billingdocument-transactioncurrency">TransactionCurrency</strong></td><td><a href="#waerk">WAERK</a></td><td><strong>@EndUserText.heading</strong>: Crcy<br /><strong>@EndUserText.label</strong>: Document Currency<br /><strong>@EndUserText.quickInfo</strong>: SD Document Currency<br /><strong>@ObjectModel.foreignKey.association</strong>: _TransactionCurrency<br /><strong>@Semantics.currencyCode</strong>: true</td></tr>
<tr><td><strong id="billingdocument-statisticscurrency">StatisticsCurrency</strong></td><td><a href="#stwae">STWAE</a></td><td><strong>@EndUserText.heading</strong>: Curr.<br /><strong>@EndUserText.label</strong>: Statistics Currency<br /><strong>@EndUserText.quickInfo</strong>: Statistics Currency<br /><strong>@ObjectModel.foreignKey.association</strong>: _StatisticsCurrency<br /><strong>@Semantics.currencyCode</strong>: true</td></tr>
<tr><td><strong id="billingdocument-totaltaxamount">TotalTaxAmount</strong></td><td><a href="#mwsbp">MWSBP</a></td><td><strong>@EndUserText.heading</strong>: Tax Amount<br /><strong>@EndUserText.label</strong>: Tax Amount<br /><strong>@EndUserText.quickInfo</strong>: Tax Amount in Document Currency<br /><strong>@Semantics.amount.currencyCode</strong>: TransactionCurrency</td></tr>
<tr><td><strong id="billingdocument-customerpricegroup">CustomerPriceGroup</strong></td><td><a href="#konda">KONDA</a></td><td><strong>@EndUserText.heading</strong>: CPG<br /><strong>@EndUserText.label</strong>: Customer Price Group<br /><strong>@EndUserText.quickInfo</strong>: Customer Price Group<br /><strong>@ObjectModel.foreignKey.association</strong>: _CustomerPriceGroup</td></tr>
<tr><td><strong id="billingdocument-pricelisttype">PriceListType</strong></td><td><a href="#pltyp">PLTYP</a></td><td><strong>@EndUserText.heading</strong>: PL<br /><strong>@EndUserText.label</strong>: Price List Type<br /><strong>@EndUserText.quickInfo</strong>: Price List Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _PriceListType</td></tr>
<tr><td><strong id="billingdocument-taxdeparturecountry">TaxDepartureCountry</strong></td><td><a href="#landtx">LANDTX</a></td><td><strong>@EndUserText.heading</strong>: TDC<br /><strong>@EndUserText.label</strong>: Tax Departure C/R<br /><strong>@EndUserText.quickInfo</strong>: Tax Departure Country/Region<br /><strong>@ObjectModel.foreignKey.association</strong>: _TaxDepartureCountry</td></tr>
<tr><td><strong id="billingdocument-vatregistration">VATRegistration</strong></td><td><a href="#stceg">STCEG</a></td><td><strong>@EndUserText.heading</strong>: VAT Registration No.<br /><strong>@EndUserText.label</strong>: VAT Registration No.<br /><strong>@EndUserText.quickInfo</strong>: VAT Registration Number</td></tr>
<tr><td><strong id="billingdocument-vatregistrationorigin">VATRegistrationOrigin</strong></td><td><a href="#stceg_h">STCEG_H</a></td><td><strong>@EndUserText.heading</strong>: OSI<br /><strong>@EndUserText.label</strong>: Origin Sales Tax No.<br /><strong>@EndUserText.quickInfo</strong>: Origin of Sales Tax Number<br /><strong>@ObjectModel.foreignKey.association</strong>: _VATRegistrationOrigin</td></tr>
<tr><td><strong id="billingdocument-vatregistrationcountry">VATRegistrationCountry</strong></td><td><a href="#stceg_l">STCEG_L</a></td><td><strong>@EndUserText.heading</strong>: STC<br /><strong>@EndUserText.label</strong>: Ctry/Rgn Sls Tax No.<br /><strong>@EndUserText.quickInfo</strong>: Country/Region of Sales Tax ID Number<br /><strong>@ObjectModel.foreignKey.association</strong>: _VATRegistrationCountry</td></tr>
<tr><td><strong id="billingdocument-hierarchytypepricing">HierarchyTypePricing</strong></td><td><a href="#hityp_pr">HITYP_PR</a></td><td><strong>@EndUserText.heading</strong>: HPr<br /><strong>@EndUserText.label</strong>: HierarchyTypePricing<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy type for pricing</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification1">CustomerTaxClassification1</strong></td><td><a href="#taxk1">TAXK1</a></td><td><strong>@EndUserText.heading</strong>: Tx2Cs<br /><strong>@EndUserText.label</strong>: Tax Class.1 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 1 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification2">CustomerTaxClassification2</strong></td><td><a href="#taxk2">TAXK2</a></td><td><strong>@EndUserText.heading</strong>: Tx2Cs<br /><strong>@EndUserText.label</strong>: Tax Class.2 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 2 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification3">CustomerTaxClassification3</strong></td><td><a href="#taxk3">TAXK3</a></td><td><strong>@EndUserText.heading</strong>: Tx3Cs<br /><strong>@EndUserText.label</strong>: Tax Class.3 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 3 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification4">CustomerTaxClassification4</strong></td><td><a href="#taxk4">TAXK4</a></td><td><strong>@EndUserText.heading</strong>: Tx4Cs<br /><strong>@EndUserText.label</strong>: Tax Class.4 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 4 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification5">CustomerTaxClassification5</strong></td><td><a href="#taxk5">TAXK5</a></td><td><strong>@EndUserText.heading</strong>: Tx5Cs<br /><strong>@EndUserText.label</strong>: Tax Class.5 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 5 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification6">CustomerTaxClassification6</strong></td><td><a href="#taxk6">TAXK6</a></td><td><strong>@EndUserText.heading</strong>: Tx6Cs<br /><strong>@EndUserText.label</strong>: Tax Class.6 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 6 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification7">CustomerTaxClassification7</strong></td><td><a href="#taxk7">TAXK7</a></td><td><strong>@EndUserText.heading</strong>: Tx7Cs<br /><strong>@EndUserText.label</strong>: Tax Class.7 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 7 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification8">CustomerTaxClassification8</strong></td><td><a href="#taxk8">TAXK8</a></td><td><strong>@EndUserText.heading</strong>: Tx8Cs<br /><strong>@EndUserText.label</strong>: Tax Class.8 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 8 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification9">CustomerTaxClassification9</strong></td><td><a href="#taxk9">TAXK9</a></td><td><strong>@EndUserText.heading</strong>: Tx9Cs<br /><strong>@EndUserText.label</strong>: Tax Class.9 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 9 for Customer</td></tr>
<tr><td><strong id="billingdocument-iseutriangulardeal">IsEUTriangularDeal</strong></td><td><a href="#xegdr">XEGDR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_BILLINGDOCUMENT.ISEUTRIANGULARDEAL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: EU Triangular Deal<br /><strong>@EndUserText.quickInfo</strong>: Indicator: Triangular Deal Within the EU</td></tr>
<tr><td><strong id="billingdocument-sdpricingprocedure">SDPricingProcedure</strong></td><td><a href="#kalsmasd">KALSMASD</a></td><td><strong>@EndUserText.heading</strong>: PriPr.<br /><strong>@EndUserText.label</strong>: Pricing Procedure<br /><strong>@EndUserText.quickInfo</strong>: Pricing Procedure in Pricing<br /><strong>@ObjectModel.foreignKey.association</strong>: _SDPricingProcedure</td></tr>
<tr><td><strong id="billingdocument-shippingcondition">ShippingCondition</strong></td><td><a href="#vsbed">VSBED</a></td><td><strong>@EndUserText.heading</strong>: Shipping Conditions<br /><strong>@EndUserText.label</strong>: Shipping Conditions<br /><strong>@EndUserText.quickInfo</strong>: Shipping Conditions<br /><strong>@ObjectModel.foreignKey.association</strong>: _ShippingCondition</td></tr>
<tr><td><strong id="billingdocument-plantsupplier">PlantSupplier</strong></td><td><a href="#lifnr_wk">LIFNR_WK</a></td><td><strong>@EndUserText.heading</strong>: Supplier Number Plant<br /><strong>@EndUserText.label</strong>: Sppl. No. Plnt<br /><strong>@EndUserText.quickInfo</strong>: Supplier Number of Plant</td></tr>
<tr><td><strong id="billingdocument-incotermsversion">IncotermsVersion</strong></td><td><a href="#incov">INCOV</a></td><td><strong>@EndUserText.heading</strong>: IncoV<br /><strong>@EndUserText.label</strong>: Incoterms Version<br /><strong>@EndUserText.quickInfo</strong>: Incoterms Version<br /><strong>@ObjectModel.foreignKey.association</strong>: _IncotermsVersion</td></tr>
<tr><td><strong id="billingdocument-incotermsclassification">IncotermsClassification</strong></td><td><a href="#inco1">INCO1</a></td><td><strong>@EndUserText.heading</strong>: IncoT<br /><strong>@EndUserText.label</strong>: Incoterms<br /><strong>@EndUserText.quickInfo</strong>: Incoterms (Part 1)<br /><strong>@ObjectModel.foreignKey.association</strong>: _IncotermsClassification</td></tr>
<tr><td><strong id="billingdocument-incotermstransferlocation">IncotermsTransferLocation</strong></td><td><a href="#inco2">INCO2</a></td><td><strong>@EndUserText.heading</strong>: Inco. 2<br /><strong>@EndUserText.label</strong>: Incoterms (Part 2)<br /><strong>@EndUserText.quickInfo</strong>: Incoterms (Part 2)</td></tr>
<tr><td><strong id="billingdocument-incotermslocation1">IncotermsLocation1</strong></td><td><a href="#inco2_l">INCO2_L</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSLOCATION1@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: Incoterms Location 1<br /><strong>@EndUserText.quickInfo</strong>: Incoterms Location 1</td></tr>
<tr><td><strong id="billingdocument-incotermslocation2">IncotermsLocation2</strong></td><td><a href="#inco3_l">INCO3_L</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSLOCATION2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: Incoterms Location 2<br /><strong>@EndUserText.quickInfo</strong>: Incoterms Location 2</td></tr>
<tr><td><strong id="billingdocument-payerparty">PayerParty</strong></td><td><a href="#kunrg">KUNRG</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_Customer_VH",
      "element": "Customer"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: Payer<br /><strong>@EndUserText.label</strong>: Payer<br /><strong>@EndUserText.quickInfo</strong>: Payer<br /><strong>@ObjectModel.foreignKey.association</strong>: _PayerParty</td></tr>
<tr><td><strong id="billingdocument-contractaccount">ContractAccount</strong></td><td><a href="#corr_vkont_kk">CORR_VKONT_KK</a></td><td><strong>@EndUserText.heading</strong>: Cont.Account<br /><strong>@EndUserText.label</strong>: Contract Account<br /><strong>@EndUserText.quickInfo</strong>: Contract Account Number</td></tr>
<tr><td><strong id="billingdocument-customerpaymentterms">CustomerPaymentTerms</strong></td><td><a href="#dzterm">DZTERM</a></td><td><strong>@EndUserText.heading</strong>: Terms of Payment<br /><strong>@EndUserText.label</strong>: Terms of Payment<br /><strong>@EndUserText.quickInfo</strong>: Key for Terms of Payment<br /><strong>@ObjectModel.foreignKey.association</strong>: _CustomerPaymentTerms</td></tr>
<tr><td><strong id="billingdocument-paymentmethod">PaymentMethod</strong></td><td><a href="#schzw_bseg">SCHZW_BSEG</a></td><td><strong>@EndUserText.heading</strong>: PM<br /><strong>@EndUserText.label</strong>: Payment Method<br /><strong>@EndUserText.quickInfo</strong>: Payment Method<br /><strong>@ObjectModel.foreignKey.association</strong>: _PaymentMethod</td></tr>
<tr><td><strong id="billingdocument-paymentreference">PaymentReference</strong></td><td><a href="#kidno">KIDNO</a></td><td><strong>@EndUserText.heading</strong>: Payment Reference<br /><strong>@EndUserText.label</strong>: Payment Reference<br /><strong>@EndUserText.quickInfo</strong>: Payment Reference</td></tr>
<tr><td><strong id="billingdocument-fixedvaluedate">FixedValueDate</strong></td><td><a href="#valdt">VALDT</a></td><td><strong>@EndUserText.heading</strong>: FixValDate<br /><strong>@EndUserText.label</strong>: Fixed Value Date<br /><strong>@EndUserText.quickInfo</strong>: Fixed Value Date</td></tr>
<tr><td><strong id="billingdocument-additionalvaluedays">AdditionalValueDays</strong></td><td><a href="#valtg">VALTG</a></td><td><strong>@EndUserText.heading</strong>: AValD<br /><strong>@EndUserText.label</strong>: Addit. Value Days<br /><strong>@EndUserText.quickInfo</strong>: Additional Value Days</td></tr>
<tr><td><strong id="billingdocument-sepamandate">SEPAMandate</strong></td><td><a href="#sepa_mndid">SEPA_MNDID</a></td><td><strong>@EndUserText.heading</strong>: Mandate Reference<br /><strong>@EndUserText.label</strong>: Mandate Reference<br /><strong>@EndUserText.quickInfo</strong>: Unique Reference to Mandate for each Payee</td></tr>
<tr><td><strong id="billingdocument-companycode">CompanyCode</strong></td><td><a href="#bukrs">BUKRS</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_CompanyCodeStdVH",
      "element": "CompanyCode"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: CoCd<br /><strong>@EndUserText.label</strong>: Company Code<br /><strong>@EndUserText.quickInfo</strong>: Company Code<br /><strong>@ObjectModel.foreignKey.association</strong>: _CompanyCode</td></tr>
<tr><td><strong id="billingdocument-fiscalyear">FiscalYear</strong></td><td><a href="#gjahr">GJAHR</a></td><td><strong>@EndUserText.heading</strong>: Year<br /><strong>@EndUserText.label</strong>: Fiscal Year<br /><strong>@EndUserText.quickInfo</strong>: Fiscal Year<br /><strong>@ObjectModel.foreignKey.association</strong>: _FiscalYear</td></tr>
<tr><td><strong id="billingdocument-accountingdocument">AccountingDocument</strong></td><td><a href="#belnr_d">BELNR_D</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_AccountingDocumentStdVH",
      "element": "AccountingDocument"
    &rbrace;,
    "additionalBinding": [
      &lbrace;
        "localElement": "CompanyCode",
        "element": "CompanyCode"
      &rbrace;,
      &lbrace;
        "localElement": "FiscalYear",
        "element": "FiscalYear"
      &rbrace;
    ]
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: Doc. No.<br /><strong>@EndUserText.label</strong>: Document Number<br /><strong>@EndUserText.quickInfo</strong>: Document Number of an Accounting Document<br /><strong>@ObjectModel.foreignKey.association</strong>: _AccountingDocument</td></tr>
<tr><td><strong id="billingdocument-fiscalperiod">FiscalPeriod</strong></td><td><a href="#poper">POPER</a></td><td><strong>@EndUserText.heading</strong>: Period<br /><strong>@EndUserText.label</strong>: Posting Period<br /><strong>@EndUserText.quickInfo</strong>: Posting Period</td></tr>
<tr><td><strong id="billingdocument-customeraccountassignmentgroup">CustomerAccountAssignmentGroup</strong></td><td><a href="#ktgrd">KTGRD</a></td><td><strong>@EndUserText.heading</strong>: AAGC<br /><strong>@EndUserText.label</strong>: Acct Assmt Grp Cust.<br /><strong>@EndUserText.quickInfo</strong>: Account Assignment Group for Customer<br /><strong>@ObjectModel.foreignKey.association</strong>: _CustomerAccountAssgmtGroup</td></tr>
<tr><td><strong id="billingdocument-accountingexchangerateisset">AccountingExchangeRateIsSet</strong></td><td><a href="#cpkur">CPKUR</a></td><td><strong>@EndUserText.heading</strong>: SRate<br /><strong>@EndUserText.label</strong>: Set Exchange Rate<br /><strong>@EndUserText.quickInfo</strong>: Exchange Rate Setting</td></tr>
<tr><td><strong id="billingdocument-accountingexchangerate">AccountingExchangeRate</strong></td><td><a href="#kurrf_not_converted">KURRF_NOT_CONVERTED</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGEXCHANGERATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: Accounting Exchange Rate<br /><strong>@EndUserText.quickInfo</strong>: Exchange Rate for FI Postings</td></tr>
<tr><td><strong id="billingdocument-exchangeratedate">ExchangeRateDate</strong></td><td><a href="#wwert_d">WWERT_D</a></td><td><strong>@EndUserText.heading</strong>: TranslDate<br /><strong>@EndUserText.label</strong>: Translation Date<br /><strong>@EndUserText.quickInfo</strong>: Translation Date</td></tr>
<tr><td><strong id="billingdocument-exchangeratetype">ExchangeRateType</strong></td><td><a href="#kurst">KURST</a></td><td><strong>@EndUserText.heading</strong>: Exchange Rate Type<br /><strong>@EndUserText.label</strong>: Exchange Rate Type<br /><strong>@EndUserText.quickInfo</strong>: Exchange Rate Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _ExchangeRateType</td></tr>
<tr><td><strong id="billingdocument-documentreferenceid">DocumentReferenceID</strong></td><td><a href="#xblnr_v1">XBLNR_V1</a></td><td><strong>@EndUserText.heading</strong>: Reference<br /><strong>@EndUserText.label</strong>: Reference<br /><strong>@EndUserText.quickInfo</strong>: Reference Document Number</td></tr>
<tr><td><strong id="billingdocument-assignmentreference">AssignmentReference</strong></td><td><a href="#ordnr_v">ORDNR_V</a></td><td><strong>@EndUserText.heading</strong>: Assignment<br /><strong>@EndUserText.label</strong>: Assignment<br /><strong>@EndUserText.quickInfo</strong>: Assignment Number</td></tr>
<tr><td><strong id="billingdocument-reversalreason">ReversalReason</strong></td><td><a href="#stgrd">STGRD</a></td><td><strong>@EndUserText.heading</strong>: Rev.Reas.<br /><strong>@EndUserText.label</strong>: Reversal Reason<br /><strong>@EndUserText.quickInfo</strong>: Reason for Reversal or Inverse Posting<br /><strong>@ObjectModel.foreignKey.association</strong>: _ReversalReason</td></tr>
<tr><td><strong id="billingdocument-dunningarea">DunningArea</strong></td><td><a href="#maber">MABER</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_DunningAreaStdVH",
      "element": "DunningArea"
    &rbrace;,
    "additionalBinding": [
      &lbrace;
        "localElement": "CompanyCode",
        "element": "CompanyCode"
      &rbrace;
    ]
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: Area<br /><strong>@EndUserText.label</strong>: Dunning Area<br /><strong>@EndUserText.quickInfo</strong>: Dunning Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _DunningArea<br /><strong>@ObjectModel.text.association</strong>: _DunningAreaText</td></tr>
<tr><td><strong id="billingdocument-dunningblockingreason">DunningBlockingReason</strong></td><td><a href="#mansp">MANSP</a></td><td><strong>@EndUserText.heading</strong>: Block<br /><strong>@EndUserText.label</strong>: Dunning Block<br /><strong>@EndUserText.quickInfo</strong>: Dunning Block<br /><strong>@ObjectModel.foreignKey.association</strong>: _DunningBlockingReason</td></tr>
<tr><td><strong id="billingdocument-dunningkey">DunningKey</strong></td><td><a href="#mschl">MSCHL</a></td><td><strong>@EndUserText.heading</strong>: Dunn.Key<br /><strong>@EndUserText.label</strong>: Dunning Key<br /><strong>@EndUserText.quickInfo</strong>: Dunning Key<br /><strong>@ObjectModel.foreignKey.association</strong>: _DunningKey</td></tr>
<tr><td><strong id="billingdocument-internalfinancialdocument">InternalFinancialDocument</strong></td><td><a href="#lcnum">LCNUM</a></td><td><strong>@EndUserText.heading</strong>: FD No.<br /><strong>@EndUserText.label</strong>: Financial Doc. No.<br /><strong>@EndUserText.quickInfo</strong>: Financial doc. processing: Internal financial doc. number</td></tr>
<tr><td><strong id="billingdocument-isrelevantforaccrual">IsRelevantForAccrual</strong></td><td><a href="#isaccrualrelevant">ISACCRUALRELEVANT</a></td><td><strong>@EndUserText.heading</strong>: Is Relevant for Accrual<br /><strong>@EndUserText.label</strong>: Relevant for Accrual<br /><strong>@EndUserText.quickInfo</strong>: Is relevant for accrual</td></tr>
<tr><td><strong id="billingdocument-soldtoparty">SoldToParty</strong></td><td><a href="#kunag">KUNAG</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_Customer_VH",
      "element": "Customer"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: Sold-to<br /><strong>@EndUserText.label</strong>: Sold-to Party<br /><strong>@EndUserText.quickInfo</strong>: Sold-to Party<br /><strong>@ObjectModel.foreignKey.association</strong>: _SoldToParty</td></tr>
<tr><td><strong id="billingdocument-partnercompany">PartnerCompany</strong></td><td><a href="#rassc">RASSC</a></td><td><strong>@EndUserText.heading</strong>: Tr.Prt<br /><strong>@EndUserText.label</strong>: Trading Partner No.<br /><strong>@EndUserText.quickInfo</strong>: Company ID of Trading Partner</td></tr>
<tr><td><strong id="billingdocument-purchaseorderbycustomer">PurchaseOrderByCustomer</strong></td><td><a href="#bstkd">BSTKD</a></td><td><strong>@EndUserText.heading</strong>: Customer Reference<br /><strong>@EndUserText.label</strong>: Customer Reference<br /><strong>@EndUserText.quickInfo</strong>: Customer Reference</td></tr>
<tr><td><strong id="billingdocument-customergroup">CustomerGroup</strong></td><td><a href="#kdgrp">KDGRP</a></td><td><strong>@EndUserText.heading</strong>: CGrp<br /><strong>@EndUserText.label</strong>: Customer Group<br /><strong>@EndUserText.quickInfo</strong>: Customer Group<br /><strong>@ObjectModel.foreignKey.association</strong>: _CustomerGroup</td></tr>
<tr><td><strong id="billingdocument-country">Country</strong></td><td><a href="#lland">LLAND</a></td><td><strong>@EndUserText.heading</strong>: Dest. Ctry/Reg<br /><strong>@EndUserText.label</strong>: Dest. Country/Region<br /><strong>@EndUserText.quickInfo</strong>: Destination Country/Region<br /><strong>@ObjectModel.foreignKey.association</strong>: _Country</td></tr>
<tr><td><strong id="billingdocument-citycode">CityCode</strong></td><td><a href="#cityc">CITYC</a></td><td><strong>@EndUserText.heading</strong>: Code<br /><strong>@EndUserText.label</strong>: City Code<br /><strong>@EndUserText.quickInfo</strong>: City Code<br /><strong>@ObjectModel.foreignKey.association</strong>: _CityCode</td></tr>
<tr><td><strong id="billingdocument-salesdistrict">SalesDistrict</strong></td><td><a href="#bzirk">BZIRK</a></td><td><strong>@EndUserText.heading</strong>: SDst<br /><strong>@EndUserText.label</strong>: Sales District<br /><strong>@EndUserText.quickInfo</strong>: Sales District<br /><strong>@ObjectModel.foreignKey.association</strong>: _SalesDistrict</td></tr>
<tr><td><strong id="billingdocument-region">Region</strong></td><td><a href="#regio">REGIO</a></td><td><strong>@EndUserText.heading</strong>: Rg<br /><strong>@EndUserText.label</strong>: Region<br /><strong>@EndUserText.quickInfo</strong>: Region (State, Province, County)<br /><strong>@ObjectModel.foreignKey.association</strong>: _Region</td></tr>
<tr><td><strong id="billingdocument-county">County</strong></td><td><a href="#counc">COUNC</a></td><td><strong>@EndUserText.heading</strong>: CCd<br /><strong>@EndUserText.label</strong>: County Code<br /><strong>@EndUserText.quickInfo</strong>: County Code<br /><strong>@ObjectModel.foreignKey.association</strong>: _County_2</td></tr>
<tr><td><strong id="billingdocument-creditcontrolarea">CreditControlArea</strong></td><td><a href="#kkber">KKBER</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_CreditControlAreaStdVH",
      "element": "CreditControlArea"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: CCAr<br /><strong>@EndUserText.label</strong>: Credit Control Area<br /><strong>@EndUserText.quickInfo</strong>: Credit Control Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _CreditControlArea<br /><strong>@ObjectModel.text.association</strong>: _CreditControlAreaText</td></tr>
<tr><td><strong id="billingdocument-customerrebateagreement">CustomerRebateAgreement</strong></td><td><a href="#knuma">KNUMA</a></td><td><strong>@EndUserText.heading</strong>: Agreement<br /><strong>@EndUserText.label</strong>: Agreement<br /><strong>@EndUserText.quickInfo</strong>: Agreement (various conditions grouped together)</td></tr>
<tr><td><strong id="billingdocument-pricingdocument">PricingDocument</strong></td><td><a href="#knumv">KNUMV</a></td><td><strong>@EndUserText.heading</strong>: Doc.Cond.<br /><strong>@EndUserText.label</strong>: Doc. Condition No.<br /><strong>@EndUserText.quickInfo</strong>: Number of the Document Condition</td></tr>
<tr><td><strong id="billingdocument-overallsdprocessstatus">OverallSDProcessStatus</strong></td><td><a href="#gbstk">GBSTK</a></td><td><strong>@EndUserText.heading</strong>: OS<br /><strong>@EndUserText.label</strong>: Overall Status<br /><strong>@EndUserText.quickInfo</strong>: Overall Processing Status (Header/All Items)<br /><strong>@ObjectModel.foreignKey.association</strong>: _OverallSDProcessStatus</td></tr>
<tr><td><strong id="billingdocument-overallbillingstatus">OverallBillingStatus</strong></td><td><a href="#vf_status">VF_STATUS</a></td><td><strong>@EndUserText.heading</strong>: Status<br /><strong>@EndUserText.label</strong>: Status<br /><strong>@EndUserText.quickInfo</strong>: SD Billing Status<br /><strong>@ObjectModel.foreignKey.association</strong>: _OverallBillingStatus</td></tr>
<tr><td><strong id="billingdocument-accountingpostingstatus">AccountingPostingStatus</strong></td><td><a href="#buchk">BUCHK</a></td><td><strong>@EndUserText.heading</strong>: PS<br /><strong>@EndUserText.label</strong>: Posting Status<br /><strong>@EndUserText.quickInfo</strong>: Posting Status of Billing Document<br /><strong>@ObjectModel.foreignKey.association</strong>: _AccountingPostingStatus</td></tr>
<tr><td><strong id="billingdocument-accountingtransferstatus">AccountingTransferStatus</strong></td><td><a href="#rfbsk">RFBSK</a></td><td><strong>@EndUserText.heading</strong>: PsSt<br /><strong>@EndUserText.label</strong>: Posting Status<br /><strong>@EndUserText.quickInfo</strong>: Status for Transfer to Accounting<br /><strong>@ObjectModel.foreignKey.association</strong>: _AccountingTransferStatus</td></tr>
<tr><td><strong id="billingdocument-billingissuetype">BillingIssueType</strong></td><td><a href="#vf_todo">VF_TODO</a></td><td><strong>@EndUserText.heading</strong>: Issue Type<br /><strong>@EndUserText.label</strong>: Issue Type<br /><strong>@EndUserText.quickInfo</strong>: Billing Issue Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _BillingIssueType</td></tr>
<tr><td><strong id="billingdocument-invoiceliststatus">InvoiceListStatus</strong></td><td><a href="#relik">RELIK</a></td><td><strong>@EndUserText.heading</strong>: ILSt<br /><strong>@EndUserText.label</strong>: Invoice List Status<br /><strong>@EndUserText.quickInfo</strong>: Invoice list status of billing document<br /><strong>@ObjectModel.foreignKey.association</strong>: _InvoiceListStatus</td></tr>
<tr><td><strong id="billingdocument-ovrlitmgeneralincompletionsts">OvrlItmGeneralIncompletionSts</strong></td><td><a href="#uvall_su">UVALL_SU</a></td><td><strong>@EndUserText.heading</strong>: AI<br /><strong>@EndUserText.label</strong>: All Items<br /><strong>@EndUserText.quickInfo</strong>: Incompletion Status (All Items)<br /><strong>@ObjectModel.foreignKey.association</strong>: _OvrlItmGeneralIncompletionSts</td></tr>
<tr><td><strong id="billingdocument-overallpricingincompletionsts">OverallPricingIncompletionSts</strong></td><td><a href="#uvprs_uk">UVPRS_UK</a></td><td><strong>@EndUserText.heading</strong>: PI<br /><strong>@EndUserText.label</strong>: Pricing – All Items<br /><strong>@EndUserText.quickInfo</strong>: Pricing Incompletion Status (All Items)<br /><strong>@ObjectModel.foreignKey.association</strong>: _OverallPricingIncompletionSts</td></tr>
<tr><td><strong id="billingdocument-invoiceclearingstatus">InvoiceClearingStatus</strong></td><td><a href="#clrst">CLRST</a></td><td><strong>@EndUserText.heading</strong>: Clearing Status<br /><strong>@EndUserText.label</strong>: Clearing Status<br /><strong>@EndUserText.quickInfo</strong>: Clearing Status of Billing Document<br /><strong>@ObjectModel.foreignKey.association</strong>: _InvoiceClearingStatus</td></tr>
<tr><td><strong id="billingdocument-invoicelisttype">InvoiceListType</strong></td><td><a href="#fkart_rl">FKART_RL</a></td><td><strong>@EndUserText.heading</strong>: ILTyp<br /><strong>@EndUserText.label</strong>: Invoice List Type<br /><strong>@EndUserText.quickInfo</strong>: Invoice List Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _InvoiceListType</td></tr>
<tr><td><strong id="billingdocument-invoicelistbillingdate">InvoiceListBillingDate</strong></td><td><a href="#fkdat_rl">FKDAT_RL</a></td><td><strong>@EndUserText.heading</strong>: InvList BD<br /><strong>@EndUserText.label</strong>: Inv. List Bill. Date<br /><strong>@EndUserText.quickInfo</strong>: Billing date for the invoice list</td></tr>
<tr><td><strong id="billingdocument-_accountingdocument">_AccountingDocument</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accountingdocument">I_AccountingDocument</a> (Path: <a href="#i_accountingdocument">I_AccountingDocument</a>.<a href="#i_accountingdocument-companycode">CompanyCode</a>) via <a href="#billingdocument-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="billingdocument-_accountingpostingstatus">_AccountingPostingStatus</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accountingpostingstatus">I_AccountingPostingStatus</a> (Path: <a href="#i_accountingpostingstatus">I_AccountingPostingStatus</a>.<a href="#i_accountingpostingstatus-accountingpostingstatus">AccountingPostingStatus</a>) via <a href="#billingdocument-accountingpostingstatus">AccountingPostingStatus</a></td></tr>
<tr><td><strong id="billingdocument-_accountingtransferstatus">_AccountingTransferStatus</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accountingtransferstatus">I_AccountingTransferStatus</a> (Path: <a href="#i_accountingtransferstatus">I_AccountingTransferStatus</a>.<a href="#i_accountingtransferstatus-accountingtransferstatus">AccountingTransferStatus</a>) via <a href="#billingdocument-accountingtransferstatus">AccountingTransferStatus</a></td></tr>
<tr><td><strong id="billingdocument-_billingdocumentcategory">_BillingDocumentCategory</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_billingdocumentcategory">I_BillingDocumentCategory</a> (Path: <a href="#i_billingdocumentcategory">I_BillingDocumentCategory</a>.<a href="#i_billingdocumentcategory-billingdocumentcategory">BillingDocumentCategory</a>) via <a href="#billingdocument-billingdocumentcategory">BillingDocumentCategory</a></td></tr>
<tr><td><strong id="billingdocument-_billingdocumenttype">_BillingDocumentType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_billingdocumenttype">I_BillingDocumentType</a> (Path: <a href="#i_billingdocumenttype">I_BillingDocumentType</a>.<a href="#i_billingdocumenttype-billingdocumenttype">BillingDocumentType</a>) via <a href="#billingdocument-billingdocumenttype">BillingDocumentType</a></td></tr>
<tr><td><strong id="billingdocument-_billingissuetype">_BillingIssueType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_billingissuetype">I_BillingIssueType</a> (Path: <a href="#i_billingissuetype">I_BillingIssueType</a>.<a href="#i_billingissuetype-billingissuetype">BillingIssueType</a>) via <a href="#billingdocument-billingissuetype">BillingIssueType</a></td></tr>
<tr><td><strong id="billingdocument-_cancelledbillingdocument">_CancelledBillingDocument</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#billingdocument">BillingDocument</a> (Path: <a href="#billingdocument">BillingDocument</a>.<a href="#billingdocument-billingdocument">BillingDocument</a>) via <a href="#billingdocument-cancelledbillingdocument">CancelledBillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_citycode">_CityCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_citycode">I_CityCode</a> (Path: <a href="#i_citycode">I_CityCode</a>.<a href="#i_citycode-citycode">CityCode</a>) via <a href="#billingdocument-citycode">CityCode</a></td></tr>
<tr><td><strong id="billingdocument-_companycode">_CompanyCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_companycode">I_CompanyCode</a> (Path: <a href="#i_companycode">I_CompanyCode</a>.<a href="#i_companycode-companycode">CompanyCode</a>) via <a href="#billingdocument-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="billingdocument-_country">_Country</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_country">I_Country</a> (Path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#billingdocument-country">Country</a></td></tr>
<tr><td><strong id="billingdocument-_county">_County</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_countycode">I_CountyCode</a> (Path: <a href="#i_countycode">I_CountyCode</a>.<a href="#i_countycode-country">Country</a>) via <a href="#billingdocument-country">Country</a></td></tr>
<tr><td><strong id="billingdocument-_county_2">_County_2</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_taxingcounty">I_TaxingCounty</a> (Path: <a href="#i_taxingcounty">I_TaxingCounty</a>.<a href="#i_taxingcounty-country">Country</a>) via <a href="#billingdocument-country">Country</a></td></tr>
<tr><td><strong id="billingdocument-_createdbyuser">_CreatedByUser</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_user">I_User</a> (Path: <a href="#i_user">I_User</a>.<a href="#i_user-userid">UserID</a>) via <a href="#billingdocument-createdbyuser">CreatedByUser</a></td></tr>
<tr><td><strong id="billingdocument-_creditcontrolarea">_CreditControlArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_creditcontrolarea">I_CreditControlArea</a> (Path: <a href="#i_creditcontrolarea">I_CreditControlArea</a>.<a href="#i_creditcontrolarea-creditcontrolarea">CreditControlArea</a>) via <a href="#billingdocument-creditcontrolarea">CreditControlArea</a></td></tr>
<tr><td><strong id="billingdocument-_creditcontrolareatext">_CreditControlAreaText</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_creditcontrolareatext">I_CreditControlAreaText</a> (Path: <a href="#i_creditcontrolareatext">I_CreditControlAreaText</a>.<a href="#i_creditcontrolareatext-creditcontrolarea">CreditControlArea</a>) via <a href="#billingdocument-creditcontrolarea">CreditControlArea</a></td></tr>
<tr><td><strong id="billingdocument-_customeraccountassgmtgroup">_CustomerAccountAssgmtGroup</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customeraccountassgmtgroup">I_CustomerAccountAssgmtGroup</a> (Path: <a href="#i_customeraccountassgmtgroup">I_CustomerAccountAssgmtGroup</a>.<a href="#i_customeraccountassgmtgroup-customeraccountassignmentgroup">CustomerAccountAssignmentGroup</a>) via <a href="#billingdocument-customeraccountassignmentgroup">CustomerAccountAssignmentGroup</a></td></tr>
<tr><td><strong id="billingdocument-_customergroup">_CustomerGroup</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customergroup">I_CustomerGroup</a> (Path: <a href="#i_customergroup">I_CustomerGroup</a>.<a href="#i_customergroup-customergroup">CustomerGroup</a>) via <a href="#billingdocument-customergroup">CustomerGroup</a></td></tr>
<tr><td><strong id="billingdocument-_customerpaymentterms">_CustomerPaymentTerms</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customerpaymentterms">I_CustomerPaymentTerms</a> (Path: <a href="#i_customerpaymentterms">I_CustomerPaymentTerms</a>.<a href="#i_customerpaymentterms-customerpaymentterms">CustomerPaymentTerms</a>) via <a href="#billingdocument-customerpaymentterms">CustomerPaymentTerms</a></td></tr>
<tr><td><strong id="billingdocument-_customerpricegroup">_CustomerPriceGroup</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customerpricegroup">I_CustomerPriceGroup</a> (Path: <a href="#i_customerpricegroup">I_CustomerPriceGroup</a>.<a href="#i_customerpricegroup-customerpricegroup">CustomerPriceGroup</a>) via <a href="#billingdocument-customerpricegroup">CustomerPriceGroup</a></td></tr>
<tr><td><strong id="billingdocument-_distributionchannel">_DistributionChannel</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_distributionchannel">I_DistributionChannel</a> (Path: <a href="#i_distributionchannel">I_DistributionChannel</a>.<a href="#i_distributionchannel-distributionchannel">DistributionChannel</a>) via <a href="#billingdocument-distributionchannel">DistributionChannel</a></td></tr>
<tr><td><strong id="billingdocument-_division">_Division</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_division">I_Division</a> (Path: <a href="#i_division">I_Division</a>.<a href="#i_division-division">Division</a>) via <a href="#billingdocument-division">Division</a></td></tr>
<tr><td><strong id="billingdocument-_dunningarea">_DunningArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_dunningarea">I_DunningArea</a> (Path: <a href="#i_dunningarea">I_DunningArea</a>.<a href="#i_dunningarea-dunningarea">DunningArea</a>) via <a href="#billingdocument-dunningarea">DunningArea</a></td></tr>
<tr><td><strong id="billingdocument-_dunningareatext">_DunningAreaText</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_dunningareatext">I_DunningAreaText</a> (Path: <a href="#i_dunningareatext">I_DunningAreaText</a>.<a href="#i_dunningareatext-dunningarea">DunningArea</a>) via <a href="#billingdocument-dunningarea">DunningArea</a></td></tr>
<tr><td><strong id="billingdocument-_dunningblockingreason">_DunningBlockingReason</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_dunningblockingreasoncode">I_DunningBlockingReasonCode</a> (Path: <a href="#i_dunningblockingreasoncode">I_DunningBlockingReasonCode</a>.<a href="#i_dunningblockingreasoncode-dunningblockingreason">DunningBlockingReason</a>) via <a href="#billingdocument-dunningblockingreason">DunningBlockingReason</a></td></tr>
<tr><td><strong id="billingdocument-_dunningkey">_DunningKey</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_dunningkey">I_DunningKey</a> (Path: <a href="#i_dunningkey">I_DunningKey</a>.<a href="#i_dunningkey-dunningkey">DunningKey</a>) via <a href="#billingdocument-dunningkey">DunningKey</a></td></tr>
<tr><td><strong id="billingdocument-_enhancedfields">_EnhancedFields</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_billingdocenhancedfields">I_BillingDocEnhancedFields</a> (Path: <a href="#i_billingdocenhancedfields">I_BillingDocEnhancedFields</a>.<a href="#i_billingdocenhancedfields-billingdocument">BillingDocument</a>) via <a href="#billingdocument-billingdocument">BillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_exchangeratetype">_ExchangeRateType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_exchangeratetype">I_ExchangeRateType</a> (Path: <a href="#i_exchangeratetype">I_ExchangeRateType</a>.<a href="#i_exchangeratetype-exchangeratetype">ExchangeRateType</a>) via <a href="#billingdocument-exchangeratetype">ExchangeRateType</a></td></tr>
<tr><td><strong id="billingdocument-_fiscalyear">_FiscalYear</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fiscalyearforcompanycode">I_FiscalYearForCompanyCode</a> (Path: <a href="#i_fiscalyearforcompanycode">I_FiscalYearForCompanyCode</a>.<a href="#i_fiscalyearforcompanycode-fiscalyear">FiscalYear</a>) via <a href="#billingdocument-fiscalyear">FiscalYear</a></td></tr>
<tr><td><strong id="billingdocument-_incotermsclassification">_IncotermsClassification</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_incotermsclassification">I_IncotermsClassification</a> (Path: <a href="#i_incotermsclassification">I_IncotermsClassification</a>.<a href="#i_incotermsclassification-incotermsclassification">IncotermsClassification</a>) via <a href="#billingdocument-incotermsclassification">IncotermsClassification</a></td></tr>
<tr><td><strong id="billingdocument-_incotermsversion">_IncotermsVersion</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_incotermsversion">I_IncotermsVersion</a> (Path: <a href="#i_incotermsversion">I_IncotermsVersion</a>.<a href="#i_incotermsversion-incotermsversion">IncotermsVersion</a>) via <a href="#billingdocument-incotermsversion">IncotermsVersion</a></td></tr>
<tr><td><strong id="billingdocument-_invoiceclearingstatus">_InvoiceClearingStatus</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_invoiceclearingstatus">I_InvoiceClearingStatus</a> (Path: <a href="#i_invoiceclearingstatus">I_InvoiceClearingStatus</a>.<a href="#i_invoiceclearingstatus-invoiceclearingstatus">InvoiceClearingStatus</a>) via <a href="#billingdocument-invoiceclearingstatus">InvoiceClearingStatus</a></td></tr>
<tr><td><strong id="billingdocument-_invoiceliststatus">_InvoiceListStatus</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_invoiceliststatus">I_InvoiceListStatus</a> (Path: <a href="#i_invoiceliststatus">I_InvoiceListStatus</a>.<a href="#i_invoiceliststatus-invoiceliststatus">InvoiceListStatus</a>) via <a href="#billingdocument-invoiceliststatus">InvoiceListStatus</a></td></tr>
<tr><td><strong id="billingdocument-_invoicelisttype">_InvoiceListType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_billingdocumenttype">I_BillingDocumentType</a> (Path: <a href="#i_billingdocumenttype">I_BillingDocumentType</a>.<a href="#i_billingdocumenttype-billingdocumenttype">BillingDocumentType</a>) via <a href="#billingdocument-invoicelisttype">InvoiceListType</a></td></tr>
<tr><td><strong id="billingdocument-_item">_Item</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_billingdocumentitem">I_BillingDocumentItem</a> (Path: <a href="#i_billingdocumentitem">I_BillingDocumentItem</a>.<a href="#i_billingdocumentitem-billingdocument">BillingDocument</a>) via <a href="#billingdocument-billingdocument">BillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_logicalsystem">_LogicalSystem</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_logicalsystem">I_LogicalSystem</a> (Path: <a href="#i_logicalsystem">I_LogicalSystem</a>.<a href="#i_logicalsystem-logicalsystem">LogicalSystem</a>) via <a href="#billingdocument-logicalsystem">LogicalSystem</a></td></tr>
<tr><td><strong id="billingdocument-_overallbillingstatus">_OverallBillingStatus</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_overallbillingstatus">I_OverallBillingStatus</a> (Path: <a href="#i_overallbillingstatus">I_OverallBillingStatus</a>.<a href="#i_overallbillingstatus-overallbillingstatus">OverallBillingStatus</a>) via <a href="#billingdocument-overallbillingstatus">OverallBillingStatus</a></td></tr>
<tr><td><strong id="billingdocument-_overallpricingincompletionsts">_OverallPricingIncompletionSts</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_overallprcincompletionsts">I_OverallPrcIncompletionSts</a> (Path: <a href="#i_overallprcincompletionsts">I_OverallPrcIncompletionSts</a>.<a href="#i_overallprcincompletionsts-overallpricingincompletionsts">OverallPricingIncompletionSts</a>) via <a href="#billingdocument-overallpricingincompletionsts">OverallPricingIncompletionSts</a></td></tr>
<tr><td><strong id="billingdocument-_overallsdprocessstatus">_OverallSDProcessStatus</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_overallsdprocessstatus">I_OverallSDProcessStatus</a> (Path: <a href="#i_overallsdprocessstatus">I_OverallSDProcessStatus</a>.<a href="#i_overallsdprocessstatus-overallsdprocessstatus">OverallSDProcessStatus</a>) via <a href="#billingdocument-overallsdprocessstatus">OverallSDProcessStatus</a></td></tr>
<tr><td><strong id="billingdocument-_ovrlitmgeneralincompletionsts">_OvrlItmGeneralIncompletionSts</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_ovrlitmgenincompletionsts">I_OvrlItmGenIncompletionSts</a> (Path: <a href="#i_ovrlitmgenincompletionsts">I_OvrlItmGenIncompletionSts</a>.<a href="#i_ovrlitmgenincompletionsts-ovrlitmgeneralincompletionsts">OvrlItmGeneralIncompletionSts</a>) via <a href="#billingdocument-ovrlitmgeneralincompletionsts">OvrlItmGeneralIncompletionSts</a></td></tr>
<tr><td><strong id="billingdocument-_partner">_Partner</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_billingdocumentpartner">I_BillingDocumentPartner</a> (Path: <a href="#i_billingdocumentpartner">I_BillingDocumentPartner</a>.<a href="#i_billingdocumentpartner-billingdocument">BillingDocument</a>) via <a href="#billingdocument-billingdocument">BillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_payerparty">_PayerParty</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customer">I_Customer</a> (Path: <a href="#i_customer">I_Customer</a>.<a href="#i_customer-customer">Customer</a>) via <a href="#billingdocument-payerparty">PayerParty</a></td></tr>
<tr><td><strong id="billingdocument-_paymentmethod">_PaymentMethod</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_paymentmethod">I_PaymentMethod</a> (Path: <a href="#i_paymentmethod">I_PaymentMethod</a>.<a href="#i_paymentmethod-paymentmethod">PaymentMethod</a>) via <a href="#billingdocument-paymentmethod">PaymentMethod</a></td></tr>
<tr><td><strong id="billingdocument-_pricelisttype">_PriceListType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_pricelisttype">I_PriceListType</a> (Path: <a href="#i_pricelisttype">I_PriceListType</a>.<a href="#i_pricelisttype-pricelisttype">PriceListType</a>) via <a href="#billingdocument-pricelisttype">PriceListType</a></td></tr>
<tr><td><strong id="billingdocument-_pricingelement">_PricingElement</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_billingdocumentprcgelmnt">I_BillingDocumentPrcgElmnt</a> (Path: <a href="#i_billingdocumentprcgelmnt">I_BillingDocumentPrcgElmnt</a>.<a href="#i_billingdocumentprcgelmnt-billingdocument">BillingDocument</a>) via <a href="#billingdocument-billingdocument">BillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_region">_Region</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_region">I_Region</a> (Path: <a href="#i_region">I_Region</a>.<a href="#i_region-region">Region</a>) via <a href="#billingdocument-region">Region</a></td></tr>
<tr><td><strong id="billingdocument-_reversalreason">_ReversalReason</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_reversalreason">I_ReversalReason</a> (Path: <a href="#i_reversalreason">I_ReversalReason</a>.<a href="#i_reversalreason-reversalreason">ReversalReason</a>) via <a href="#billingdocument-reversalreason">ReversalReason</a></td></tr>
<tr><td><strong id="billingdocument-_salesdistrict">_SalesDistrict</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_salesdistrict">I_SalesDistrict</a> (Path: <a href="#i_salesdistrict">I_SalesDistrict</a>.<a href="#i_salesdistrict-salesdistrict">SalesDistrict</a>) via <a href="#billingdocument-salesdistrict">SalesDistrict</a></td></tr>
<tr><td><strong id="billingdocument-_salesorganization">_SalesOrganization</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_salesorganization">I_SalesOrganization</a> (Path: <a href="#i_salesorganization">I_SalesOrganization</a>.<a href="#i_salesorganization-salesorganization">SalesOrganization</a>) via <a href="#billingdocument-salesorganization">SalesOrganization</a></td></tr>
<tr><td><strong id="billingdocument-_sddocumentcategory">_SDDocumentCategory</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_sddocumentcategory">I_SDDocumentCategory</a> (Path: <a href="#i_sddocumentcategory">I_SDDocumentCategory</a>.<a href="#i_sddocumentcategory-sddocumentcategory">SDDocumentCategory</a>) via <a href="#billingdocument-sddocumentcategory">SDDocumentCategory</a></td></tr>
<tr><td><strong id="billingdocument-_sdpricingprocedure">_SDPricingProcedure</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_slspricingprocedure">I_SlsPricingProcedure</a> (Path: <a href="#i_slspricingprocedure">I_SlsPricingProcedure</a>.<a href="#i_slspricingprocedure-pricingprocedure">PricingProcedure</a>) via <a href="#billingdocument-sdpricingprocedure">SDPricingProcedure</a></td></tr>
<tr><td><strong id="billingdocument-_shippingcondition">_ShippingCondition</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_shippingcondition">I_ShippingCondition</a> (Path: <a href="#i_shippingcondition">I_ShippingCondition</a>.<a href="#i_shippingcondition-shippingcondition">ShippingCondition</a>) via <a href="#billingdocument-shippingcondition">ShippingCondition</a></td></tr>
<tr><td><strong id="billingdocument-_soldtoparty">_SoldToParty</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customer">I_Customer</a> (Path: <a href="#i_customer">I_Customer</a>.<a href="#i_customer-customer">Customer</a>) via <a href="#billingdocument-soldtoparty">SoldToParty</a></td></tr>
<tr><td><strong id="billingdocument-_statisticscurrency">_StatisticsCurrency</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#billingdocument-statisticscurrency">StatisticsCurrency</a></td></tr>
<tr><td><strong id="billingdocument-_taxdeparturecountry">_TaxDepartureCountry</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_country">I_Country</a> (Path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#billingdocument-taxdeparturecountry">TaxDepartureCountry</a></td></tr>
<tr><td><strong id="billingdocument-_transactioncurrency">_TransactionCurrency</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#billingdocument-transactioncurrency">TransactionCurrency</a></td></tr>
<tr><td><strong id="billingdocument-_vatregistrationcountry">_VATRegistrationCountry</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_country">I_Country</a> (Path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#billingdocument-vatregistrationcountry">VATRegistrationCountry</a></td></tr>
<tr><td><strong id="billingdocument-_vatregistrationorigin">_VATRegistrationOrigin</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_vatregistrationorigin">I_VATRegistrationOrigin</a> (Path: <a href="#i_vatregistrationorigin">I_VATRegistrationOrigin</a>.<a href="#i_vatregistrationorigin-vatregistrationorigin">VATRegistrationOrigin</a>) via <a href="#billingdocument-vatregistrationorigin">VATRegistrationOrigin</a></td></tr>
</table>

## Type Definitions

### AEDAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Chngd On<br /><strong>@EndUserText.label</strong>: Changed On<br /><strong>@EndUserText.quickInfo</strong>: Last Changed On</td></tr>
</table>

### BELNR_D

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Doc. No.<br /><strong>@EndUserText.label</strong>: Document Number<br /><strong>@EndUserText.quickInfo</strong>: Document Number of an Accounting Document</td></tr>
</table>

### BSTKD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Customer Reference<br /><strong>@EndUserText.label</strong>: Customer Reference<br /><strong>@EndUserText.quickInfo</strong>: Customer Reference</td></tr>
</table>

### BUCHK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  " ": &lbrace;
    "val": ""
  &rbrace;,
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PS<br /><strong>@EndUserText.label</strong>: Posting Status<br /><strong>@EndUserText.quickInfo</strong>: Posting Status of Billing Document</td></tr>
</table>

### BUKRS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CoCd<br /><strong>@EndUserText.label</strong>: Company Code<br /><strong>@EndUserText.quickInfo</strong>: Company Code</td></tr>
</table>

### BZIRK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: SDst<br /><strong>@EndUserText.label</strong>: Sales District<br /><strong>@EndUserText.quickInfo</strong>: Sales District</td></tr>
</table>

### CITYC

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Code<br /><strong>@EndUserText.label</strong>: City Code<br /><strong>@EndUserText.quickInfo</strong>: City Code</td></tr>
</table>

### CLRST

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  " ": &lbrace;
    "val": ""
  &rbrace;,
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Clearing Status<br /><strong>@EndUserText.label</strong>: Clearing Status<br /><strong>@EndUserText.quickInfo</strong>: Clearing Status of Billing Document</td></tr>
</table>

### CORR_VKONT_KK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Cont.Account<br /><strong>@EndUserText.label</strong>: Contract Account<br /><strong>@EndUserText.quickInfo</strong>: Contract Account Number</td></tr>
</table>

### COUNC

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CCd<br /><strong>@EndUserText.label</strong>: County Code<br /><strong>@EndUserText.quickInfo</strong>: County Code</td></tr>
</table>

### CPKUR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: SRate<br /><strong>@EndUserText.label</strong>: Set Exchange Rate<br /><strong>@EndUserText.quickInfo</strong>: Exchange Rate Setting</td></tr>
</table>

### DZTERM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Terms of Payment<br /><strong>@EndUserText.label</strong>: Terms of Payment<br /><strong>@EndUserText.quickInfo</strong>: Key for Terms of Payment</td></tr>
</table>

### DZUKRI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(40)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Combination Criteria in the Billing Doc.<br /><strong>@EndUserText.label</strong>: Combination Criteria<br /><strong>@EndUserText.quickInfo</strong>: Combination criteria in the billing document</td></tr>
</table>

### ERDAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Created On<br /><strong>@EndUserText.label</strong>: Created On<br /><strong>@EndUserText.quickInfo</strong>: Record Creation Date</td></tr>
</table>

### ERNAM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Created By<br /><strong>@EndUserText.label</strong>: Created By<br /><strong>@EndUserText.quickInfo</strong>: Name of Person Responsible for Creating the Object</td></tr>
</table>

### ERZET

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Time</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Time<br /><strong>@EndUserText.label</strong>: Time<br /><strong>@EndUserText.quickInfo</strong>: Entry time</td></tr>
</table>

### FKART

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: BillT<br /><strong>@EndUserText.label</strong>: Billing Type<br /><strong>@EndUserText.quickInfo</strong>: Billing Type</td></tr>
</table>

### FKART_RL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ILTyp<br /><strong>@EndUserText.label</strong>: Invoice List Type<br /><strong>@EndUserText.quickInfo</strong>: Invoice List Type</td></tr>
</table>

### FKDAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Billing Date<br /><strong>@EndUserText.label</strong>: Billing Date<br /><strong>@EndUserText.quickInfo</strong>: Billing Date</td></tr>
</table>

### FKDAT_RL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: InvList BD<br /><strong>@EndUserText.label</strong>: Inv. List Bill. Date<br /><strong>@EndUserText.quickInfo</strong>: Billing date for the invoice list</td></tr>
</table>

### FKSTO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Can<br /><strong>@EndUserText.label</strong>: Canceled<br /><strong>@EndUserText.quickInfo</strong>: Billing document is canceled</td></tr>
</table>

### FKTYP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;,
  "D": &lbrace;
    "val": "D"
  &rbrace;,
  "E": &lbrace;
    "val": "E"
  &rbrace;,
  "F": &lbrace;
    "val": "F"
  &rbrace;,
  "I": &lbrace;
    "val": "I"
  &rbrace;,
  "K": &lbrace;
    "val": "K"
  &rbrace;,
  "L": &lbrace;
    "val": "L"
  &rbrace;,
  "P": &lbrace;
    "val": "P"
  &rbrace;,
  "R": &lbrace;
    "val": "R"
  &rbrace;,
  "U": &lbrace;
    "val": "U"
  &rbrace;,
  "W": &lbrace;
    "val": "W"
  &rbrace;,
  "X": &lbrace;
    "val": "X"
  &rbrace;,
  "S": &lbrace;
    "val": "S"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: BlCat<br /><strong>@EndUserText.label</strong>: Billing Category<br /><strong>@EndUserText.quickInfo</strong>: Billing Category</td></tr>
</table>

### GBSTK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  " ": &lbrace;
    "val": ""
  &rbrace;,
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: OS<br /><strong>@EndUserText.label</strong>: Overall Status<br /><strong>@EndUserText.quickInfo</strong>: Overall Processing Status (Header/All Items)</td></tr>
</table>

### GJAHR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Year<br /><strong>@EndUserText.label</strong>: Fiscal Year<br /><strong>@EndUserText.quickInfo</strong>: Fiscal Year</td></tr>
</table>

### HITYP_PR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: HPr<br /><strong>@EndUserText.label</strong>: HierarchyTypePricing<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy type for pricing</td></tr>
</table>

### INCO1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: IncoT<br /><strong>@EndUserText.label</strong>: Incoterms<br /><strong>@EndUserText.quickInfo</strong>: Incoterms (Part 1)</td></tr>
</table>

### INCO2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(28)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Inco. 2<br /><strong>@EndUserText.label</strong>: Incoterms (Part 2)<br /><strong>@EndUserText.quickInfo</strong>: Incoterms (Part 2)</td></tr>
</table>

### INCO2_L

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(70)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>INCO2_L@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: Incoterms Location 1<br /><strong>@EndUserText.quickInfo</strong>: Incoterms Location 1</td></tr>
</table>

### INCO3_L

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(70)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>INCO3_L@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: Incoterms Location 2<br /><strong>@EndUserText.quickInfo</strong>: Incoterms Location 2</td></tr>
</table>

### INCOV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: IncoV<br /><strong>@EndUserText.label</strong>: Incoterms Version<br /><strong>@EndUserText.quickInfo</strong>: Incoterms Version</td></tr>
</table>

### INTRA_EXCL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: exclude from Intrastat<br /><strong>@EndUserText.label</strong>: Intrastat Exclusion<br /><strong>@EndUserText.quickInfo</strong>: Exclude from Intrastat Reporting</td></tr>
</table>

### INTRA_REL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: relevant for Intrastat<br /><strong>@EndUserText.label</strong>: Intrastat Relevance<br /><strong>@EndUserText.quickInfo</strong>: Relevant for Intrastat Reporting</td></tr>
</table>

### ISACCRUALRELEVANT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Is Relevant for Accrual<br /><strong>@EndUserText.label</strong>: Relevant for Accrual<br /><strong>@EndUserText.quickInfo</strong>: Is relevant for accrual</td></tr>
</table>

### J_1ANOPG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Pages<br /><strong>@EndUserText.label</strong>: Number of Pages<br /><strong>@EndUserText.quickInfo</strong>: Number of pages of invoice</td></tr>
</table>

### KALSMASD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PriPr.<br /><strong>@EndUserText.label</strong>: Pricing Procedure<br /><strong>@EndUserText.quickInfo</strong>: Pricing Procedure in Pricing</td></tr>
</table>

### KDGRP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CGrp<br /><strong>@EndUserText.label</strong>: Customer Group<br /><strong>@EndUserText.quickInfo</strong>: Customer Group</td></tr>
</table>

### KIDNO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(30)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Payment Reference<br /><strong>@EndUserText.label</strong>: Payment Reference<br /><strong>@EndUserText.quickInfo</strong>: Payment Reference</td></tr>
</table>

### KKBER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CCAr<br /><strong>@EndUserText.label</strong>: Credit Control Area<br /><strong>@EndUserText.quickInfo</strong>: Credit Control Area</td></tr>
</table>

### KNUMA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Agreement<br /><strong>@EndUserText.label</strong>: Agreement<br /><strong>@EndUserText.quickInfo</strong>: Agreement (various conditions grouped together)</td></tr>
</table>

### KNUMV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Doc.Cond.<br /><strong>@EndUserText.label</strong>: Doc. Condition No.<br /><strong>@EndUserText.quickInfo</strong>: Number of the Document Condition</td></tr>
</table>

### KONDA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CPG<br /><strong>@EndUserText.label</strong>: Customer Price Group<br /><strong>@EndUserText.quickInfo</strong>: Customer Price Group</td></tr>
</table>

### KTGRD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: AAGC<br /><strong>@EndUserText.label</strong>: Acct Assmt Grp Cust.<br /><strong>@EndUserText.quickInfo</strong>: Account Assignment Group for Customer</td></tr>
</table>

### KUNAG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Sold-to<br /><strong>@EndUserText.label</strong>: Sold-to Party<br /><strong>@EndUserText.quickInfo</strong>: Sold-to Party</td></tr>
</table>

### KUNRG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Payer<br /><strong>@EndUserText.label</strong>: Payer<br /><strong>@EndUserText.quickInfo</strong>: Payer</td></tr>
</table>

### KURRF_NOT_CONVERTED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 9<br /><strong>scale</strong>: 5<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>KURRF_NOT_CONVERTED@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: Accounting Exchange Rate<br /><strong>@EndUserText.quickInfo</strong>: Exchange Rate for FI Postings</td></tr>
</table>

### KURST

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Exchange Rate Type<br /><strong>@EndUserText.label</strong>: Exchange Rate Type<br /><strong>@EndUserText.quickInfo</strong>: Exchange Rate Type</td></tr>
</table>

### LANDTX

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: TDC<br /><strong>@EndUserText.label</strong>: Tax Departure C/R<br /><strong>@EndUserText.quickInfo</strong>: Tax Departure Country/Region</td></tr>
</table>

### LCNUM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: FD No.<br /><strong>@EndUserText.label</strong>: Financial Doc. No.<br /><strong>@EndUserText.quickInfo</strong>: Financial doc. processing: Internal financial doc. number</td></tr>
</table>

### LIFNR_WK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Supplier Number Plant<br /><strong>@EndUserText.label</strong>: Sppl. No. Plnt<br /><strong>@EndUserText.quickInfo</strong>: Supplier Number of Plant</td></tr>
</table>

### LLAND

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Dest. Ctry/Reg<br /><strong>@EndUserText.label</strong>: Dest. Country/Region<br /><strong>@EndUserText.quickInfo</strong>: Destination Country/Region</td></tr>
</table>

### LOGSYS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Log.System<br /><strong>@EndUserText.label</strong>: Logical System<br /><strong>@EndUserText.quickInfo</strong>: Logical System</td></tr>
</table>

### MABER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Area<br /><strong>@EndUserText.label</strong>: Dunning Area<br /><strong>@EndUserText.quickInfo</strong>: Dunning Area</td></tr>
</table>

### MANSP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Block<br /><strong>@EndUserText.label</strong>: Dunning Block<br /><strong>@EndUserText.quickInfo</strong>: Dunning Block</td></tr>
</table>

### MRNKZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: InM<br /><strong>@EndUserText.label</strong>: Man. Invoice Maint.<br /><strong>@EndUserText.quickInfo</strong>: Manual Invoice Maintenance</td></tr>
</table>

### MSCHL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Dunn.Key<br /><strong>@EndUserText.label</strong>: Dunning Key<br /><strong>@EndUserText.quickInfo</strong>: Dunning Key</td></tr>
</table>

### MWSBP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tax Amount<br /><strong>@EndUserText.label</strong>: Tax Amount<br /><strong>@EndUserText.quickInfo</strong>: Tax Amount in Document Currency</td></tr>
</table>

### NETWR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Net Value<br /><strong>@EndUserText.label</strong>: Net Value<br /><strong>@EndUserText.quickInfo</strong>: Net Value in Document Currency</td></tr>
</table>

### ORDNR_V

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(18)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Assignment<br /><strong>@EndUserText.label</strong>: Assignment<br /><strong>@EndUserText.quickInfo</strong>: Assignment Number</td></tr>
</table>

### PLTYP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PL<br /><strong>@EndUserText.label</strong>: Price List Type<br /><strong>@EndUserText.quickInfo</strong>: Price List Type</td></tr>
</table>

### POPER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Period<br /><strong>@EndUserText.label</strong>: Posting Period<br /><strong>@EndUserText.quickInfo</strong>: Posting Period</td></tr>
</table>

### RASSC

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tr.Prt<br /><strong>@EndUserText.label</strong>: Trading Partner No.<br /><strong>@EndUserText.quickInfo</strong>: Company ID of Trading Partner</td></tr>
</table>

### REGIO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Rg<br /><strong>@EndUserText.label</strong>: Region<br /><strong>@EndUserText.quickInfo</strong>: Region (State, Province, County)</td></tr>
</table>

### RELIK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  " ": &lbrace;
    "val": ""
  &rbrace;,
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ILSt<br /><strong>@EndUserText.label</strong>: Invoice List Status<br /><strong>@EndUserText.quickInfo</strong>: Invoice list status of billing document</td></tr>
</table>

### RFBSK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  " ": &lbrace;
    "val": ""
  &rbrace;,
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;,
  "D": &lbrace;
    "val": "D"
  &rbrace;,
  "E": &lbrace;
    "val": "E"
  &rbrace;,
  "F": &lbrace;
    "val": "F"
  &rbrace;,
  "G": &lbrace;
    "val": "G"
  &rbrace;,
  "H": &lbrace;
    "val": "H"
  &rbrace;,
  "I": &lbrace;
    "val": "I"
  &rbrace;,
  "K": &lbrace;
    "val": "K"
  &rbrace;,
  "L": &lbrace;
    "val": "L"
  &rbrace;,
  "M": &lbrace;
    "val": "M"
  &rbrace;,
  "N": &lbrace;
    "val": "N"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PsSt<br /><strong>@EndUserText.label</strong>: Posting Status<br /><strong>@EndUserText.quickInfo</strong>: Status for Transfer to Accounting</td></tr>
</table>

### SCHZW_BSEG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PM<br /><strong>@EndUserText.label</strong>: Payment Method<br /><strong>@EndUserText.quickInfo</strong>: Payment Method</td></tr>
</table>

### SEPA_MNDID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Mandate Reference<br /><strong>@EndUserText.label</strong>: Mandate Reference<br /><strong>@EndUserText.quickInfo</strong>: Unique Reference to Mandate for each Payee</td></tr>
</table>

### SFAKN

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CancBillDc<br /><strong>@EndUserText.label</strong>: Canceled Bill. Doc.<br /><strong>@EndUserText.quickInfo</strong>: Number of canceled billing document</td></tr>
</table>

### SPART

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Dv<br /><strong>@EndUserText.label</strong>: Division<br /><strong>@EndUserText.quickInfo</strong>: Division</td></tr>
</table>

### STCEG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(20)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: VAT Registration No.<br /><strong>@EndUserText.label</strong>: VAT Registration No.<br /><strong>@EndUserText.quickInfo</strong>: VAT Registration Number</td></tr>
</table>

### STCEG_H

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;,
  "D": &lbrace;
    "val": "D"
  &rbrace;,
  "E": &lbrace;
    "val": "E"
  &rbrace;,
  "F": &lbrace;
    "val": "F"
  &rbrace;,
  "G": &lbrace;
    "val": "G"
  &rbrace;,
  "H": &lbrace;
    "val": "H"
  &rbrace;,
  "I": &lbrace;
    "val": "I"
  &rbrace;,
  "J": &lbrace;
    "val": "J"
  &rbrace;,
  "K": &lbrace;
    "val": "K"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: OSI<br /><strong>@EndUserText.label</strong>: Origin Sales Tax No.<br /><strong>@EndUserText.quickInfo</strong>: Origin of Sales Tax Number</td></tr>
</table>

### STCEG_L

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: STC<br /><strong>@EndUserText.label</strong>: Ctry/Rgn Sls Tax No.<br /><strong>@EndUserText.quickInfo</strong>: Country/Region of Sales Tax ID Number</td></tr>
</table>

### STGRD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Rev.Reas.<br /><strong>@EndUserText.label</strong>: Reversal Reason<br /><strong>@EndUserText.quickInfo</strong>: Reason for Reversal or Inverse Posting</td></tr>
</table>

### STWAE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Curr.<br /><strong>@EndUserText.label</strong>: Statistics Currency<br /><strong>@EndUserText.quickInfo</strong>: Statistics Currency</td></tr>
</table>

### TAXK1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx2Cs<br /><strong>@EndUserText.label</strong>: Tax Class.1 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 1 for Customer</td></tr>
</table>

### TAXK2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx2Cs<br /><strong>@EndUserText.label</strong>: Tax Class.2 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 2 for Customer</td></tr>
</table>

### TAXK3

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx3Cs<br /><strong>@EndUserText.label</strong>: Tax Class.3 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 3 for Customer</td></tr>
</table>

### TAXK4

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx4Cs<br /><strong>@EndUserText.label</strong>: Tax Class.4 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 4 for Customer</td></tr>
</table>

### TAXK5

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx5Cs<br /><strong>@EndUserText.label</strong>: Tax Class.5 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 5 for Customer</td></tr>
</table>

### TAXK6

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx6Cs<br /><strong>@EndUserText.label</strong>: Tax Class.6 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 6 for Customer</td></tr>
</table>

### TAXK7

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx7Cs<br /><strong>@EndUserText.label</strong>: Tax Class.7 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 7 for Customer</td></tr>
</table>

### TAXK8

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx8Cs<br /><strong>@EndUserText.label</strong>: Tax Class.8 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 8 for Customer</td></tr>
</table>

### TAXK9

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx9Cs<br /><strong>@EndUserText.label</strong>: Tax Class.9 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 9 for Customer</td></tr>
</table>

### TIMESTAMPL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Timestamp</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Time Stamp<br /><strong>@EndUserText.label</strong>: Time Stamp<br /><strong>@EndUserText.quickInfo</strong>: UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun)</td></tr>
</table>

### UVALL_SU

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  " ": &lbrace;
    "val": ""
  &rbrace;,
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: AI<br /><strong>@EndUserText.label</strong>: All Items<br /><strong>@EndUserText.quickInfo</strong>: Incompletion Status (All Items)</td></tr>
</table>

### UVPRS_UK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  " ": &lbrace;
    "val": ""
  &rbrace;,
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PI<br /><strong>@EndUserText.label</strong>: Pricing – All Items<br /><strong>@EndUserText.quickInfo</strong>: Pricing Incompletion Status (All Items)</td></tr>
</table>

### VALDT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: FixValDate<br /><strong>@EndUserText.label</strong>: Fixed Value Date<br /><strong>@EndUserText.quickInfo</strong>: Fixed Value Date</td></tr>
</table>

### VALTG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: AValD<br /><strong>@EndUserText.label</strong>: Addit. Value Days<br /><strong>@EndUserText.quickInfo</strong>: Additional Value Days</td></tr>
</table>

### VBELN_VF

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Bill. Doc.<br /><strong>@EndUserText.label</strong>: Billing Document<br /><strong>@EndUserText.quickInfo</strong>: Billing Document</td></tr>
</table>

### VBTYPL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>enum</strong>: <code>&lbrace;
  "0": &lbrace;
    "val": "0"
  &rbrace;,
  "1": &lbrace;
    "val": "1"
  &rbrace;,
  "2": &lbrace;
    "val": "2"
  &rbrace;,
  "3": &lbrace;
    "val": "3"
  &rbrace;,
  "4": &lbrace;
    "val": "4"
  &rbrace;,
  "5": &lbrace;
    "val": "5"
  &rbrace;,
  "6": &lbrace;
    "val": "6"
  &rbrace;,
  "7": &lbrace;
    "val": "7"
  &rbrace;,
  "8": &lbrace;
    "val": "8"
  &rbrace;,
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;,
  "D": &lbrace;
    "val": "D"
  &rbrace;,
  "E": &lbrace;
    "val": "E"
  &rbrace;,
  "F": &lbrace;
    "val": "F"
  &rbrace;,
  "G": &lbrace;
    "val": "G"
  &rbrace;,
  "H": &lbrace;
    "val": "H"
  &rbrace;,
  "I": &lbrace;
    "val": "I"
  &rbrace;,
  "J": &lbrace;
    "val": "J"
  &rbrace;,
  "K": &lbrace;
    "val": "K"
  &rbrace;,
  "L": &lbrace;
    "val": "L"
  &rbrace;,
  "M": &lbrace;
    "val": "M"
  &rbrace;,
  "N": &lbrace;
    "val": "N"
  &rbrace;,
  "O": &lbrace;
    "val": "O"
  &rbrace;,
  "P": &lbrace;
    "val": "P"
  &rbrace;,
  "Q": &lbrace;
    "val": "Q"
  &rbrace;,
  "R": &lbrace;
    "val": "R"
  &rbrace;,
  "S": &lbrace;
    "val": "S"
  &rbrace;,
  "T": &lbrace;
    "val": "T"
  &rbrace;,
  "U": &lbrace;
    "val": "U"
  &rbrace;,
  "V": &lbrace;
    "val": "V"
  &rbrace;,
  "W": &lbrace;
    "val": "W"
  &rbrace;,
  "X": &lbrace;
    "val": "X"
  &rbrace;,
  "Y": &lbrace;
    "val": "Y"
  &rbrace;,
  "a": &lbrace;
    "val": "a"
  &rbrace;,
  "b": &lbrace;
    "val": "b"
  &rbrace;,
  "c": &lbrace;
    "val": "c"
  &rbrace;,
  "d": &lbrace;
    "val": "d"
  &rbrace;,
  "e": &lbrace;
    "val": "e"
  &rbrace;,
  "g": &lbrace;
    "val": "g"
  &rbrace;,
  "h": &lbrace;
    "val": "h"
  &rbrace;,
  "i": &lbrace;
    "val": "i"
  &rbrace;,
  "j": &lbrace;
    "val": "j"
  &rbrace;,
  "k": &lbrace;
    "val": "k"
  &rbrace;,
  "n": &lbrace;
    "val": "n"
  &rbrace;,
  "o": &lbrace;
    "val": "o"
  &rbrace;,
  "p": &lbrace;
    "val": "p"
  &rbrace;,
  "q": &lbrace;
    "val": "q"
  &rbrace;,
  "r": &lbrace;
    "val": "r"
  &rbrace;,
  "s": &lbrace;
    "val": "s"
  &rbrace;,
  "t": &lbrace;
    "val": "t"
  &rbrace;,
  "u": &lbrace;
    "val": "u"
  &rbrace;,
  "v": &lbrace;
    "val": "v"
  &rbrace;,
  "w": &lbrace;
    "val": "w"
  &rbrace;,
  "x": &lbrace;
    "val": "x"
  &rbrace;,
  "$": &lbrace;
    "val": "$"
  &rbrace;,
  "+": &lbrace;
    "val": "+"
  &rbrace;,
  "-": &lbrace;
    "val": "-"
  &rbrace;,
  "#": &lbrace;
    "val": "#"
  &rbrace;,
  "~": &lbrace;
    "val": "~"
  &rbrace;,
  "§": &lbrace;
    "val": "§"
  &rbrace;,
  ":": &lbrace;
    "val": ":"
  &rbrace;,
  ".": &lbrace;
    "val": "."
  &rbrace;,
  "&": &lbrace;
    "val": "&"
  &rbrace;,
  "*": &lbrace;
    "val": "*"
  &rbrace;,
  ",": &lbrace;
    "val": ","
  &rbrace;,
  "^": &lbrace;
    "val": "^"
  &rbrace;,
  "|": &lbrace;
    "val": "|"
  &rbrace;,
  "f001": &lbrace;
    "val": "f001"
  &rbrace;,
  "f002": &lbrace;
    "val": "f002"
  &rbrace;,
  "f003": &lbrace;
    "val": "f003"
  &rbrace;,
  "f004": &lbrace;
    "val": "f004"
  &rbrace;,
  "CEM": &lbrace;
    "val": "CEM"
  &rbrace;,
  "BOS": &lbrace;
    "val": "BOS"
  &rbrace;,
  "EBDR": &lbrace;
    "val": "EBDR"
  &rbrace;,
  "PBDR": &lbrace;
    "val": "PBDR"
  &rbrace;,
  "PBD": &lbrace;
    "val": "PBD"
  &rbrace;,
  "CSVO": &lbrace;
    "val": "CSVO"
  &rbrace;,
  "CSCO": &lbrace;
    "val": "CSCO"
  &rbrace;,
  "CSCT": &lbrace;
    "val": "CSCT"
  &rbrace;,
  "TMFU": &lbrace;
    "val": "TMFU"
  &rbrace;,
  "TMFO": &lbrace;
    "val": "TMFO"
  &rbrace;,
  "CMMA": &lbrace;
    "val": "CMMA"
  &rbrace;,
  "PBRQ": &lbrace;
    "val": "PBRQ"
  &rbrace;,
  "SOLO": &lbrace;
    "val": "SOLO"
  &rbrace;,
  "SBRQ": &lbrace;
    "val": "SBRQ"
  &rbrace;,
  "GBRQ": &lbrace;
    "val": "GBRQ"
  &rbrace;,
  "ICPF": &lbrace;
    "val": "ICPF"
  &rbrace;,
  "DPRQ": &lbrace;
    "val": "DPRQ"
  &rbrace;,
  "DPIN": &lbrace;
    "val": "DPIN"
  &rbrace;,
  "DPCC": &lbrace;
    "val": "DPCC"
  &rbrace;,
  "JITC": &lbrace;
    "val": "JITC"
  &rbrace;,
  "JITP": &lbrace;
    "val": "JITP"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Doc.Cat.<br /><strong>@EndUserText.label</strong>: SD Document Category<br /><strong>@EndUserText.quickInfo</strong>: SD Document Category</td></tr>
</table>

### VF_DRAFT_INDICATOR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Is Draft<br /><strong>@EndUserText.label</strong>: Draft Indicator<br /><strong>@EndUserText.quickInfo</strong>: IsDraft Indicator</td></tr>
</table>

### VF_STATUS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  " ": &lbrace;
    "val": ""
  &rbrace;,
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;,
  "D": &lbrace;
    "val": "D"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Status<br /><strong>@EndUserText.label</strong>: Status<br /><strong>@EndUserText.quickInfo</strong>: SD Billing Status</td></tr>
</table>

### VF_TODO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;,
  "D": &lbrace;
    "val": "D"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Issue Type<br /><strong>@EndUserText.label</strong>: Issue Type<br /><strong>@EndUserText.quickInfo</strong>: Billing Issue Type</td></tr>
</table>

### VKORG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: SOrg.<br /><strong>@EndUserText.label</strong>: Sales Organization<br /><strong>@EndUserText.quickInfo</strong>: Sales Organization</td></tr>
</table>

### VSBED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Shipping Conditions<br /><strong>@EndUserText.label</strong>: Shipping Conditions<br /><strong>@EndUserText.quickInfo</strong>: Shipping Conditions</td></tr>
</table>

### VTWEG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: DChl<br /><strong>@EndUserText.label</strong>: Distribution Channel<br /><strong>@EndUserText.quickInfo</strong>: Distribution Channel</td></tr>
</table>

### WAERK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Crcy<br /><strong>@EndUserText.label</strong>: Document Currency<br /><strong>@EndUserText.quickInfo</strong>: SD Document Currency</td></tr>
</table>

### WWERT_D

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: TranslDate<br /><strong>@EndUserText.label</strong>: Translation Date<br /><strong>@EndUserText.quickInfo</strong>: Translation Date</td></tr>
</table>

### XBLNR_V1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Reference<br /><strong>@EndUserText.label</strong>: Reference<br /><strong>@EndUserText.quickInfo</strong>: Reference Document Number</td></tr>
</table>

### XEGDR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>XEGDR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: EU Triangular Deal<br /><strong>@EndUserText.quickInfo</strong>: Indicator: Triangular Deal Within the EU</td></tr>
</table>

