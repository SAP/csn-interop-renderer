## Entity Definitions

<div id="billingdocument"></div>

### BillingDocument

<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="billingdocument-billingdocument">BillingDocument</strong></td><td><a href="#type-vbeln_vf" target="_self">VBELN_VF</a></td><td><strong>Key</strong>: true<br /><strong>@EndUserText.heading</strong>: Bill. Doc.<br /><strong>@EndUserText.label</strong>: Billing Document<br /><strong>@EndUserText.quickInfo</strong>: Billing Document</td></tr>
<tr><td><strong id="billingdocument-sddocumentcategory">SDDocumentCategory</strong></td><td><a href="#type-vbtypl" target="_self">VBTYPL</a></td><td><strong>@EndUserText.heading</strong>: Doc.Cat.<br /><strong>@EndUserText.label</strong>: SD Document Category<br /><strong>@EndUserText.quickInfo</strong>: SD Document Category<br /><strong>@ObjectModel.foreignKey.association</strong>: _SDDocumentCategory</td></tr>
<tr><td><strong id="billingdocument-billingdocumentcategory">BillingDocumentCategory</strong></td><td><a href="#type-fktyp" target="_self">FKTYP</a></td><td><strong>@EndUserText.heading</strong>: BlCat<br /><strong>@EndUserText.label</strong>: Billing Category<br /><strong>@EndUserText.quickInfo</strong>: Billing Category<br /><strong>@ObjectModel.foreignKey.association</strong>: _BillingDocumentCategory</td></tr>
<tr><td><strong id="billingdocument-billingdocumenttype">BillingDocumentType</strong></td><td><a href="#type-fkart" target="_self">FKART</a></td><td><strong>@EndUserText.heading</strong>: BillT<br /><strong>@EndUserText.label</strong>: Billing Type<br /><strong>@EndUserText.quickInfo</strong>: Billing Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _BillingDocumentType</td></tr>
<tr><td><strong id="billingdocument-createdbyuser">CreatedByUser</strong></td><td><a href="#type-ernam" target="_self">ERNAM</a></td><td><strong>@EndUserText.heading</strong>: Created By<br /><strong>@EndUserText.label</strong>: Created By<br /><strong>@EndUserText.quickInfo</strong>: Name of Person Responsible for Creating the Object</td></tr>
<tr><td><strong id="billingdocument-creationdate">CreationDate</strong></td><td><a href="#type-erdat" target="_self">ERDAT</a></td><td><strong>@EndUserText.heading</strong>: Created On<br /><strong>@EndUserText.label</strong>: Created On<br /><strong>@EndUserText.quickInfo</strong>: Record Creation Date</td></tr>
<tr><td><strong id="billingdocument-creationtime">CreationTime</strong></td><td><a href="#type-erzet" target="_self">ERZET</a></td><td><strong>@EndUserText.heading</strong>: Time<br /><strong>@EndUserText.label</strong>: Time<br /><strong>@EndUserText.quickInfo</strong>: Entry time</td></tr>
<tr><td><strong id="billingdocument-lastchangedate">LastChangeDate</strong></td><td><a href="#type-aedat" target="_self">AEDAT</a></td><td><strong>@EndUserText.heading</strong>: Chngd On<br /><strong>@EndUserText.label</strong>: Changed On<br /><strong>@EndUserText.quickInfo</strong>: Last Changed On</td></tr>
<tr><td><strong id="billingdocument-lastchangedatetime">LastChangeDateTime</strong></td><td><a href="#type-timestampl" target="_self">TIMESTAMPL</a></td><td><strong>@EndUserText.heading</strong>: Time Stamp<br /><strong>@EndUserText.label</strong>: Time Stamp<br /><strong>@EndUserText.quickInfo</strong>: UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun)</td></tr>
<tr><td><strong id="billingdocument-logicalsystem">LogicalSystem</strong></td><td><a href="#type-logsys" target="_self">LOGSYS</a></td><td><strong>@EndUserText.heading</strong>: Log.System<br /><strong>@EndUserText.label</strong>: Logical System<br /><strong>@EndUserText.quickInfo</strong>: Logical System<br /><strong>@ObjectModel.foreignKey.association</strong>: _LogicalSystem</td></tr>
<tr><td><strong id="billingdocument-salesorganization">SalesOrganization</strong></td><td><a href="#type-vkorg" target="_self">VKORG</a></td><td><strong>@EndUserText.heading</strong>: SOrg.<br /><strong>@EndUserText.label</strong>: Sales Organization<br /><strong>@EndUserText.quickInfo</strong>: Sales Organization<br /><strong>@ObjectModel.foreignKey.association</strong>: _SalesOrganization</td></tr>
<tr><td><strong id="billingdocument-distributionchannel">DistributionChannel</strong></td><td><a href="#type-vtweg" target="_self">VTWEG</a></td><td><strong>@EndUserText.heading</strong>: DChl<br /><strong>@EndUserText.label</strong>: Distribution Channel<br /><strong>@EndUserText.quickInfo</strong>: Distribution Channel<br /><strong>@ObjectModel.foreignKey.association</strong>: _DistributionChannel</td></tr>
<tr><td><strong id="billingdocument-division">Division</strong></td><td><a href="#type-spart" target="_self">SPART</a></td><td><strong>@EndUserText.heading</strong>: Dv<br /><strong>@EndUserText.label</strong>: Division<br /><strong>@EndUserText.quickInfo</strong>: Division<br /><strong>@ObjectModel.foreignKey.association</strong>: _Division</td></tr>
<tr><td><strong id="billingdocument-billingdocumentdate">BillingDocumentDate</strong></td><td><a href="#type-fkdat" target="_self">FKDAT</a></td><td><strong>@EndUserText.heading</strong>: Billing Date<br /><strong>@EndUserText.label</strong>: Billing Date<br /><strong>@EndUserText.quickInfo</strong>: Billing Date</td></tr>
<tr><td><strong id="billingdocument-billingdocumentiscancelled">BillingDocumentIsCancelled</strong></td><td><a href="#type-fksto" target="_self">FKSTO</a></td><td><strong>@EndUserText.heading</strong>: Can<br /><strong>@EndUserText.label</strong>: Canceled<br /><strong>@EndUserText.quickInfo</strong>: Billing document is canceled</td></tr>
<tr><td><strong id="billingdocument-cancelledbillingdocument">CancelledBillingDocument</strong></td><td><a href="#type-sfakn" target="_self">SFAKN</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_BillingDocumentStdVH",
      "element": "BillingDocument"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: CancBillDc<br /><strong>@EndUserText.label</strong>: Canceled Bill. Doc.<br /><strong>@EndUserText.quickInfo</strong>: Number of canceled billing document<br /><strong>@ObjectModel.foreignKey.association</strong>: _CancelledBillingDocument</td></tr>
<tr><td><strong id="billingdocument-billingdoccombinationcriteria">BillingDocCombinationCriteria</strong></td><td><a href="#type-dzukri" target="_self">DZUKRI</a></td><td><strong>@EndUserText.heading</strong>: Combination Criteria in the Billing Doc.<br /><strong>@EndUserText.label</strong>: Combination Criteria<br /><strong>@EndUserText.quickInfo</strong>: Combination criteria in the billing document</td></tr>
<tr><td><strong id="billingdocument-manualinvoicemaintisrelevant">ManualInvoiceMaintIsRelevant</strong></td><td><a href="#type-mrnkz" target="_self">MRNKZ</a></td><td><strong>@EndUserText.heading</strong>: InM<br /><strong>@EndUserText.label</strong>: Man. Invoice Maint.<br /><strong>@EndUserText.quickInfo</strong>: Manual Invoice Maintenance</td></tr>
<tr><td><strong id="billingdocument-nmbrofpages">NmbrOfPages</strong></td><td><a href="#type-j_1anopg" target="_self">J_1ANOPG</a></td><td><strong>@EndUserText.heading</strong>: Pages<br /><strong>@EndUserText.label</strong>: Number of Pages<br /><strong>@EndUserText.quickInfo</strong>: Number of pages of invoice</td></tr>
<tr><td><strong id="billingdocument-isintrastatreportingrelevant">IsIntrastatReportingRelevant</strong></td><td><a href="#type-intra_rel" target="_self">INTRA_REL</a></td><td><strong>@EndUserText.heading</strong>: relevant for Intrastat<br /><strong>@EndUserText.label</strong>: Intrastat Relevance<br /><strong>@EndUserText.quickInfo</strong>: Relevant for Intrastat Reporting</td></tr>
<tr><td><strong id="billingdocument-isintrastatreportingexcluded">IsIntrastatReportingExcluded</strong></td><td><a href="#type-intra_excl" target="_self">INTRA_EXCL</a></td><td><strong>@EndUserText.heading</strong>: exclude from Intrastat<br /><strong>@EndUserText.label</strong>: Intrastat Exclusion<br /><strong>@EndUserText.quickInfo</strong>: Exclude from Intrastat Reporting</td></tr>
<tr><td><strong id="billingdocument-billingdocumentistemporary">BillingDocumentIsTemporary</strong></td><td><a href="#type-vf_draft_indicator" target="_self">VF_DRAFT_INDICATOR</a></td><td><strong>@EndUserText.heading</strong>: Is Draft<br /><strong>@EndUserText.label</strong>: Draft Indicator<br /><strong>@EndUserText.quickInfo</strong>: IsDraft Indicator</td></tr>
<tr><td><strong id="billingdocument-totalnetamount">TotalNetAmount</strong></td><td><a href="#type-netwr" target="_self">NETWR</a></td><td><strong>@EndUserText.heading</strong>: Net Value<br /><strong>@EndUserText.label</strong>: Net Value<br /><strong>@EndUserText.quickInfo</strong>: Net Value in Document Currency<br /><strong>@Semantics.amount.currencyCode</strong>: TransactionCurrency</td></tr>
<tr><td><strong id="billingdocument-transactioncurrency">TransactionCurrency</strong></td><td><a href="#type-waerk" target="_self">WAERK</a></td><td><strong>@EndUserText.heading</strong>: Crcy<br /><strong>@EndUserText.label</strong>: Document Currency<br /><strong>@EndUserText.quickInfo</strong>: SD Document Currency<br /><strong>@ObjectModel.foreignKey.association</strong>: _TransactionCurrency<br /><strong>@Semantics.currencyCode</strong>: true</td></tr>
<tr><td><strong id="billingdocument-statisticscurrency">StatisticsCurrency</strong></td><td><a href="#type-stwae" target="_self">STWAE</a></td><td><strong>@EndUserText.heading</strong>: Curr.<br /><strong>@EndUserText.label</strong>: Statistics Currency<br /><strong>@EndUserText.quickInfo</strong>: Statistics Currency<br /><strong>@ObjectModel.foreignKey.association</strong>: _StatisticsCurrency<br /><strong>@Semantics.currencyCode</strong>: true</td></tr>
<tr><td><strong id="billingdocument-totaltaxamount">TotalTaxAmount</strong></td><td><a href="#type-mwsbp" target="_self">MWSBP</a></td><td><strong>@EndUserText.heading</strong>: Tax Amount<br /><strong>@EndUserText.label</strong>: Tax Amount<br /><strong>@EndUserText.quickInfo</strong>: Tax Amount in Document Currency<br /><strong>@Semantics.amount.currencyCode</strong>: TransactionCurrency</td></tr>
<tr><td><strong id="billingdocument-customerpricegroup">CustomerPriceGroup</strong></td><td><a href="#type-konda" target="_self">KONDA</a></td><td><strong>@EndUserText.heading</strong>: CPG<br /><strong>@EndUserText.label</strong>: Customer Price Group<br /><strong>@EndUserText.quickInfo</strong>: Customer Price Group<br /><strong>@ObjectModel.foreignKey.association</strong>: _CustomerPriceGroup</td></tr>
<tr><td><strong id="billingdocument-pricelisttype">PriceListType</strong></td><td><a href="#type-pltyp" target="_self">PLTYP</a></td><td><strong>@EndUserText.heading</strong>: PL<br /><strong>@EndUserText.label</strong>: Price List Type<br /><strong>@EndUserText.quickInfo</strong>: Price List Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _PriceListType</td></tr>
<tr><td><strong id="billingdocument-taxdeparturecountry">TaxDepartureCountry</strong></td><td><a href="#type-landtx" target="_self">LANDTX</a></td><td><strong>@EndUserText.heading</strong>: TDC<br /><strong>@EndUserText.label</strong>: Tax Departure C/R<br /><strong>@EndUserText.quickInfo</strong>: Tax Departure Country/Region<br /><strong>@ObjectModel.foreignKey.association</strong>: _TaxDepartureCountry</td></tr>
<tr><td><strong id="billingdocument-vatregistration">VATRegistration</strong></td><td><a href="#type-stceg" target="_self">STCEG</a></td><td><strong>@EndUserText.heading</strong>: VAT Registration No.<br /><strong>@EndUserText.label</strong>: VAT Registration No.<br /><strong>@EndUserText.quickInfo</strong>: VAT Registration Number</td></tr>
<tr><td><strong id="billingdocument-vatregistrationorigin">VATRegistrationOrigin</strong></td><td><a href="#type-stceg_h" target="_self">STCEG_H</a></td><td><strong>@EndUserText.heading</strong>: OSI<br /><strong>@EndUserText.label</strong>: Origin Sales Tax No.<br /><strong>@EndUserText.quickInfo</strong>: Origin of Sales Tax Number<br /><strong>@ObjectModel.foreignKey.association</strong>: _VATRegistrationOrigin</td></tr>
<tr><td><strong id="billingdocument-vatregistrationcountry">VATRegistrationCountry</strong></td><td><a href="#type-stceg_l" target="_self">STCEG_L</a></td><td><strong>@EndUserText.heading</strong>: STC<br /><strong>@EndUserText.label</strong>: Ctry/Rgn Sls Tax No.<br /><strong>@EndUserText.quickInfo</strong>: Country/Region of Sales Tax ID Number<br /><strong>@ObjectModel.foreignKey.association</strong>: _VATRegistrationCountry</td></tr>
<tr><td><strong id="billingdocument-hierarchytypepricing">HierarchyTypePricing</strong></td><td><a href="#type-hityp_pr" target="_self">HITYP_PR</a></td><td><strong>@EndUserText.heading</strong>: HPr<br /><strong>@EndUserText.label</strong>: HierarchyTypePricing<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy type for pricing</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification1">CustomerTaxClassification1</strong></td><td><a href="#type-taxk1" target="_self">TAXK1</a></td><td><strong>@EndUserText.heading</strong>: Tx2Cs<br /><strong>@EndUserText.label</strong>: Tax Class.1 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 1 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification2">CustomerTaxClassification2</strong></td><td><a href="#type-taxk2" target="_self">TAXK2</a></td><td><strong>@EndUserText.heading</strong>: Tx2Cs<br /><strong>@EndUserText.label</strong>: Tax Class.2 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 2 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification3">CustomerTaxClassification3</strong></td><td><a href="#type-taxk3" target="_self">TAXK3</a></td><td><strong>@EndUserText.heading</strong>: Tx3Cs<br /><strong>@EndUserText.label</strong>: Tax Class.3 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 3 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification4">CustomerTaxClassification4</strong></td><td><a href="#type-taxk4" target="_self">TAXK4</a></td><td><strong>@EndUserText.heading</strong>: Tx4Cs<br /><strong>@EndUserText.label</strong>: Tax Class.4 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 4 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification5">CustomerTaxClassification5</strong></td><td><a href="#type-taxk5" target="_self">TAXK5</a></td><td><strong>@EndUserText.heading</strong>: Tx5Cs<br /><strong>@EndUserText.label</strong>: Tax Class.5 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 5 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification6">CustomerTaxClassification6</strong></td><td><a href="#type-taxk6" target="_self">TAXK6</a></td><td><strong>@EndUserText.heading</strong>: Tx6Cs<br /><strong>@EndUserText.label</strong>: Tax Class.6 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 6 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification7">CustomerTaxClassification7</strong></td><td><a href="#type-taxk7" target="_self">TAXK7</a></td><td><strong>@EndUserText.heading</strong>: Tx7Cs<br /><strong>@EndUserText.label</strong>: Tax Class.7 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 7 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification8">CustomerTaxClassification8</strong></td><td><a href="#type-taxk8" target="_self">TAXK8</a></td><td><strong>@EndUserText.heading</strong>: Tx8Cs<br /><strong>@EndUserText.label</strong>: Tax Class.8 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 8 for Customer</td></tr>
<tr><td><strong id="billingdocument-customertaxclassification9">CustomerTaxClassification9</strong></td><td><a href="#type-taxk9" target="_self">TAXK9</a></td><td><strong>@EndUserText.heading</strong>: Tx9Cs<br /><strong>@EndUserText.label</strong>: Tax Class.9 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 9 for Customer</td></tr>
<tr><td><strong id="billingdocument-iseutriangulardeal">IsEUTriangularDeal</strong></td><td><a href="#type-xegdr" target="_self">XEGDR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_BILLINGDOCUMENT.ISEUTRIANGULARDEAL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: EU Triangular Deal<br /><strong>@EndUserText.quickInfo</strong>: Indicator: Triangular Deal Within the EU</td></tr>
<tr><td><strong id="billingdocument-sdpricingprocedure">SDPricingProcedure</strong></td><td><a href="#type-kalsmasd" target="_self">KALSMASD</a></td><td><strong>@EndUserText.heading</strong>: PriPr.<br /><strong>@EndUserText.label</strong>: Pricing Procedure<br /><strong>@EndUserText.quickInfo</strong>: Pricing Procedure in Pricing<br /><strong>@ObjectModel.foreignKey.association</strong>: _SDPricingProcedure</td></tr>
<tr><td><strong id="billingdocument-shippingcondition">ShippingCondition</strong></td><td><a href="#type-vsbed" target="_self">VSBED</a></td><td><strong>@EndUserText.heading</strong>: Shipping Conditions<br /><strong>@EndUserText.label</strong>: Shipping Conditions<br /><strong>@EndUserText.quickInfo</strong>: Shipping Conditions<br /><strong>@ObjectModel.foreignKey.association</strong>: _ShippingCondition</td></tr>
<tr><td><strong id="billingdocument-plantsupplier">PlantSupplier</strong></td><td><a href="#type-lifnr_wk" target="_self">LIFNR_WK</a></td><td><strong>@EndUserText.heading</strong>: Supplier Number Plant<br /><strong>@EndUserText.label</strong>: Sppl. No. Plnt<br /><strong>@EndUserText.quickInfo</strong>: Supplier Number of Plant</td></tr>
<tr><td><strong id="billingdocument-incotermsversion">IncotermsVersion</strong></td><td><a href="#type-incov" target="_self">INCOV</a></td><td><strong>@EndUserText.heading</strong>: IncoV<br /><strong>@EndUserText.label</strong>: Incoterms Version<br /><strong>@EndUserText.quickInfo</strong>: Incoterms Version<br /><strong>@ObjectModel.foreignKey.association</strong>: _IncotermsVersion</td></tr>
<tr><td><strong id="billingdocument-incotermsclassification">IncotermsClassification</strong></td><td><a href="#type-inco1" target="_self">INCO1</a></td><td><strong>@EndUserText.heading</strong>: IncoT<br /><strong>@EndUserText.label</strong>: Incoterms<br /><strong>@EndUserText.quickInfo</strong>: Incoterms (Part 1)<br /><strong>@ObjectModel.foreignKey.association</strong>: _IncotermsClassification</td></tr>
<tr><td><strong id="billingdocument-incotermstransferlocation">IncotermsTransferLocation</strong></td><td><a href="#type-inco2" target="_self">INCO2</a></td><td><strong>@EndUserText.heading</strong>: Inco. 2<br /><strong>@EndUserText.label</strong>: Incoterms (Part 2)<br /><strong>@EndUserText.quickInfo</strong>: Incoterms (Part 2)</td></tr>
<tr><td><strong id="billingdocument-incotermslocation1">IncotermsLocation1</strong></td><td><a href="#type-inco2_l" target="_self">INCO2_L</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSLOCATION1@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: Incoterms Location 1<br /><strong>@EndUserText.quickInfo</strong>: Incoterms Location 1</td></tr>
<tr><td><strong id="billingdocument-incotermslocation2">IncotermsLocation2</strong></td><td><a href="#type-inco3_l" target="_self">INCO3_L</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_BILLINGDOCUMENT.INCOTERMSLOCATION2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: Incoterms Location 2<br /><strong>@EndUserText.quickInfo</strong>: Incoterms Location 2</td></tr>
<tr><td><strong id="billingdocument-payerparty">PayerParty</strong></td><td><a href="#type-kunrg" target="_self">KUNRG</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_Customer_VH",
      "element": "Customer"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: Payer<br /><strong>@EndUserText.label</strong>: Payer<br /><strong>@EndUserText.quickInfo</strong>: Payer<br /><strong>@ObjectModel.foreignKey.association</strong>: _PayerParty</td></tr>
<tr><td><strong id="billingdocument-contractaccount">ContractAccount</strong></td><td><a href="#type-corr_vkont_kk" target="_self">CORR_VKONT_KK</a></td><td><strong>@EndUserText.heading</strong>: Cont.Account<br /><strong>@EndUserText.label</strong>: Contract Account<br /><strong>@EndUserText.quickInfo</strong>: Contract Account Number</td></tr>
<tr><td><strong id="billingdocument-customerpaymentterms">CustomerPaymentTerms</strong></td><td><a href="#type-dzterm" target="_self">DZTERM</a></td><td><strong>@EndUserText.heading</strong>: Terms of Payment<br /><strong>@EndUserText.label</strong>: Terms of Payment<br /><strong>@EndUserText.quickInfo</strong>: Key for Terms of Payment<br /><strong>@ObjectModel.foreignKey.association</strong>: _CustomerPaymentTerms</td></tr>
<tr><td><strong id="billingdocument-paymentmethod">PaymentMethod</strong></td><td><a href="#type-schzw_bseg" target="_self">SCHZW_BSEG</a></td><td><strong>@EndUserText.heading</strong>: PM<br /><strong>@EndUserText.label</strong>: Payment Method<br /><strong>@EndUserText.quickInfo</strong>: Payment Method<br /><strong>@ObjectModel.foreignKey.association</strong>: _PaymentMethod</td></tr>
<tr><td><strong id="billingdocument-paymentreference">PaymentReference</strong></td><td><a href="#type-kidno" target="_self">KIDNO</a></td><td><strong>@EndUserText.heading</strong>: Payment Reference<br /><strong>@EndUserText.label</strong>: Payment Reference<br /><strong>@EndUserText.quickInfo</strong>: Payment Reference</td></tr>
<tr><td><strong id="billingdocument-fixedvaluedate">FixedValueDate</strong></td><td><a href="#type-valdt" target="_self">VALDT</a></td><td><strong>@EndUserText.heading</strong>: FixValDate<br /><strong>@EndUserText.label</strong>: Fixed Value Date<br /><strong>@EndUserText.quickInfo</strong>: Fixed Value Date</td></tr>
<tr><td><strong id="billingdocument-additionalvaluedays">AdditionalValueDays</strong></td><td><a href="#type-valtg" target="_self">VALTG</a></td><td><strong>@EndUserText.heading</strong>: AValD<br /><strong>@EndUserText.label</strong>: Addit. Value Days<br /><strong>@EndUserText.quickInfo</strong>: Additional Value Days</td></tr>
<tr><td><strong id="billingdocument-sepamandate">SEPAMandate</strong></td><td><a href="#type-sepa_mndid" target="_self">SEPA_MNDID</a></td><td><strong>@EndUserText.heading</strong>: Mandate Reference<br /><strong>@EndUserText.label</strong>: Mandate Reference<br /><strong>@EndUserText.quickInfo</strong>: Unique Reference to Mandate for each Payee</td></tr>
<tr><td><strong id="billingdocument-companycode">CompanyCode</strong></td><td><a href="#type-bukrs" target="_self">BUKRS</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_CompanyCodeStdVH",
      "element": "CompanyCode"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: CoCd<br /><strong>@EndUserText.label</strong>: Company Code<br /><strong>@EndUserText.quickInfo</strong>: Company Code<br /><strong>@ObjectModel.foreignKey.association</strong>: _CompanyCode</td></tr>
<tr><td><strong id="billingdocument-fiscalyear">FiscalYear</strong></td><td><a href="#type-gjahr" target="_self">GJAHR</a></td><td><strong>@EndUserText.heading</strong>: Year<br /><strong>@EndUserText.label</strong>: Fiscal Year<br /><strong>@EndUserText.quickInfo</strong>: Fiscal Year<br /><strong>@ObjectModel.foreignKey.association</strong>: _FiscalYear</td></tr>
<tr><td><strong id="billingdocument-accountingdocument">AccountingDocument</strong></td><td><a href="#type-belnr_d" target="_self">BELNR_D</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
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
<tr><td><strong id="billingdocument-fiscalperiod">FiscalPeriod</strong></td><td><a href="#type-poper" target="_self">POPER</a></td><td><strong>@EndUserText.heading</strong>: Period<br /><strong>@EndUserText.label</strong>: Posting Period<br /><strong>@EndUserText.quickInfo</strong>: Posting Period</td></tr>
<tr><td><strong id="billingdocument-customeraccountassignmentgroup">CustomerAccountAssignmentGroup</strong></td><td><a href="#type-ktgrd" target="_self">KTGRD</a></td><td><strong>@EndUserText.heading</strong>: AAGC<br /><strong>@EndUserText.label</strong>: Acct Assmt Grp Cust.<br /><strong>@EndUserText.quickInfo</strong>: Account Assignment Group for Customer<br /><strong>@ObjectModel.foreignKey.association</strong>: _CustomerAccountAssgmtGroup</td></tr>
<tr><td><strong id="billingdocument-accountingexchangerateisset">AccountingExchangeRateIsSet</strong></td><td><a href="#type-cpkur" target="_self">CPKUR</a></td><td><strong>@EndUserText.heading</strong>: SRate<br /><strong>@EndUserText.label</strong>: Set Exchange Rate<br /><strong>@EndUserText.quickInfo</strong>: Exchange Rate Setting</td></tr>
<tr><td><strong id="billingdocument-accountingexchangerate">AccountingExchangeRate</strong></td><td><a href="#type-kurrf_not_converted" target="_self">KURRF_NOT_CONVERTED</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_BILLINGDOCUMENT.ACCOUNTINGEXCHANGERATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: Accounting Exchange Rate<br /><strong>@EndUserText.quickInfo</strong>: Exchange Rate for FI Postings</td></tr>
<tr><td><strong id="billingdocument-exchangeratedate">ExchangeRateDate</strong></td><td><a href="#type-wwert_d" target="_self">WWERT_D</a></td><td><strong>@EndUserText.heading</strong>: TranslDate<br /><strong>@EndUserText.label</strong>: Translation Date<br /><strong>@EndUserText.quickInfo</strong>: Translation Date</td></tr>
<tr><td><strong id="billingdocument-exchangeratetype">ExchangeRateType</strong></td><td><a href="#type-kurst" target="_self">KURST</a></td><td><strong>@EndUserText.heading</strong>: Exchange Rate Type<br /><strong>@EndUserText.label</strong>: Exchange Rate Type<br /><strong>@EndUserText.quickInfo</strong>: Exchange Rate Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _ExchangeRateType</td></tr>
<tr><td><strong id="billingdocument-documentreferenceid">DocumentReferenceID</strong></td><td><a href="#type-xblnr_v1" target="_self">XBLNR_V1</a></td><td><strong>@EndUserText.heading</strong>: Reference<br /><strong>@EndUserText.label</strong>: Reference<br /><strong>@EndUserText.quickInfo</strong>: Reference Document Number</td></tr>
<tr><td><strong id="billingdocument-assignmentreference">AssignmentReference</strong></td><td><a href="#type-ordnr_v" target="_self">ORDNR_V</a></td><td><strong>@EndUserText.heading</strong>: Assignment<br /><strong>@EndUserText.label</strong>: Assignment<br /><strong>@EndUserText.quickInfo</strong>: Assignment Number</td></tr>
<tr><td><strong id="billingdocument-reversalreason">ReversalReason</strong></td><td><a href="#type-stgrd" target="_self">STGRD</a></td><td><strong>@EndUserText.heading</strong>: Rev.Reas.<br /><strong>@EndUserText.label</strong>: Reversal Reason<br /><strong>@EndUserText.quickInfo</strong>: Reason for Reversal or Inverse Posting<br /><strong>@ObjectModel.foreignKey.association</strong>: _ReversalReason</td></tr>
<tr><td><strong id="billingdocument-dunningarea">DunningArea</strong></td><td><a href="#type-maber" target="_self">MABER</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
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
<tr><td><strong id="billingdocument-dunningblockingreason">DunningBlockingReason</strong></td><td><a href="#type-mansp" target="_self">MANSP</a></td><td><strong>@EndUserText.heading</strong>: Block<br /><strong>@EndUserText.label</strong>: Dunning Block<br /><strong>@EndUserText.quickInfo</strong>: Dunning Block<br /><strong>@ObjectModel.foreignKey.association</strong>: _DunningBlockingReason</td></tr>
<tr><td><strong id="billingdocument-dunningkey">DunningKey</strong></td><td><a href="#type-mschl" target="_self">MSCHL</a></td><td><strong>@EndUserText.heading</strong>: Dunn.Key<br /><strong>@EndUserText.label</strong>: Dunning Key<br /><strong>@EndUserText.quickInfo</strong>: Dunning Key<br /><strong>@ObjectModel.foreignKey.association</strong>: _DunningKey</td></tr>
<tr><td><strong id="billingdocument-internalfinancialdocument">InternalFinancialDocument</strong></td><td><a href="#type-lcnum" target="_self">LCNUM</a></td><td><strong>@EndUserText.heading</strong>: FD No.<br /><strong>@EndUserText.label</strong>: Financial Doc. No.<br /><strong>@EndUserText.quickInfo</strong>: Financial doc. processing: Internal financial doc. number</td></tr>
<tr><td><strong id="billingdocument-isrelevantforaccrual">IsRelevantForAccrual</strong></td><td><a href="#type-isaccrualrelevant" target="_self">ISACCRUALRELEVANT</a></td><td><strong>@EndUserText.heading</strong>: Is Relevant for Accrual<br /><strong>@EndUserText.label</strong>: Relevant for Accrual<br /><strong>@EndUserText.quickInfo</strong>: Is relevant for accrual</td></tr>
<tr><td><strong id="billingdocument-soldtoparty">SoldToParty</strong></td><td><a href="#type-kunag" target="_self">KUNAG</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_Customer_VH",
      "element": "Customer"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: Sold-to<br /><strong>@EndUserText.label</strong>: Sold-to Party<br /><strong>@EndUserText.quickInfo</strong>: Sold-to Party<br /><strong>@ObjectModel.foreignKey.association</strong>: _SoldToParty</td></tr>
<tr><td><strong id="billingdocument-partnercompany">PartnerCompany</strong></td><td><a href="#type-rassc" target="_self">RASSC</a></td><td><strong>@EndUserText.heading</strong>: Tr.Prt<br /><strong>@EndUserText.label</strong>: Trading Partner No.<br /><strong>@EndUserText.quickInfo</strong>: Company ID of Trading Partner</td></tr>
<tr><td><strong id="billingdocument-purchaseorderbycustomer">PurchaseOrderByCustomer</strong></td><td><a href="#type-bstkd" target="_self">BSTKD</a></td><td><strong>@EndUserText.heading</strong>: Customer Reference<br /><strong>@EndUserText.label</strong>: Customer Reference<br /><strong>@EndUserText.quickInfo</strong>: Customer Reference</td></tr>
<tr><td><strong id="billingdocument-customergroup">CustomerGroup</strong></td><td><a href="#type-kdgrp" target="_self">KDGRP</a></td><td><strong>@EndUserText.heading</strong>: CGrp<br /><strong>@EndUserText.label</strong>: Customer Group<br /><strong>@EndUserText.quickInfo</strong>: Customer Group<br /><strong>@ObjectModel.foreignKey.association</strong>: _CustomerGroup</td></tr>
<tr><td><strong id="billingdocument-country">Country</strong></td><td><a href="#type-lland" target="_self">LLAND</a></td><td><strong>@EndUserText.heading</strong>: Dest. Ctry/Reg<br /><strong>@EndUserText.label</strong>: Dest. Country/Region<br /><strong>@EndUserText.quickInfo</strong>: Destination Country/Region<br /><strong>@ObjectModel.foreignKey.association</strong>: _Country</td></tr>
<tr><td><strong id="billingdocument-citycode">CityCode</strong></td><td><a href="#type-cityc" target="_self">CITYC</a></td><td><strong>@EndUserText.heading</strong>: Code<br /><strong>@EndUserText.label</strong>: City Code<br /><strong>@EndUserText.quickInfo</strong>: City Code<br /><strong>@ObjectModel.foreignKey.association</strong>: _CityCode</td></tr>
<tr><td><strong id="billingdocument-salesdistrict">SalesDistrict</strong></td><td><a href="#type-bzirk" target="_self">BZIRK</a></td><td><strong>@EndUserText.heading</strong>: SDst<br /><strong>@EndUserText.label</strong>: Sales District<br /><strong>@EndUserText.quickInfo</strong>: Sales District<br /><strong>@ObjectModel.foreignKey.association</strong>: _SalesDistrict</td></tr>
<tr><td><strong id="billingdocument-region">Region</strong></td><td><a href="#type-regio" target="_self">REGIO</a></td><td><strong>@EndUserText.heading</strong>: Rg<br /><strong>@EndUserText.label</strong>: Region<br /><strong>@EndUserText.quickInfo</strong>: Region (State, Province, County)<br /><strong>@ObjectModel.foreignKey.association</strong>: _Region</td></tr>
<tr><td><strong id="billingdocument-county">County</strong></td><td><a href="#type-counc" target="_self">COUNC</a></td><td><strong>@EndUserText.heading</strong>: CCd<br /><strong>@EndUserText.label</strong>: County Code<br /><strong>@EndUserText.quickInfo</strong>: County Code<br /><strong>@ObjectModel.foreignKey.association</strong>: _County_2</td></tr>
<tr><td><strong id="billingdocument-creditcontrolarea">CreditControlArea</strong></td><td><a href="#type-kkber" target="_self">KKBER</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_CreditControlAreaStdVH",
      "element": "CreditControlArea"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: CCAr<br /><strong>@EndUserText.label</strong>: Credit Control Area<br /><strong>@EndUserText.quickInfo</strong>: Credit Control Area<br /><strong>@ObjectModel.foreignKey.association</strong>: _CreditControlArea<br /><strong>@ObjectModel.text.association</strong>: _CreditControlAreaText</td></tr>
<tr><td><strong id="billingdocument-customerrebateagreement">CustomerRebateAgreement</strong></td><td><a href="#type-knuma" target="_self">KNUMA</a></td><td><strong>@EndUserText.heading</strong>: Agreement<br /><strong>@EndUserText.label</strong>: Agreement<br /><strong>@EndUserText.quickInfo</strong>: Agreement (various conditions grouped together)</td></tr>
<tr><td><strong id="billingdocument-pricingdocument">PricingDocument</strong></td><td><a href="#type-knumv" target="_self">KNUMV</a></td><td><strong>@EndUserText.heading</strong>: Doc.Cond.<br /><strong>@EndUserText.label</strong>: Doc. Condition No.<br /><strong>@EndUserText.quickInfo</strong>: Number of the Document Condition</td></tr>
<tr><td><strong id="billingdocument-overallsdprocessstatus">OverallSDProcessStatus</strong></td><td><a href="#type-gbstk" target="_self">GBSTK</a></td><td><strong>@EndUserText.heading</strong>: OS<br /><strong>@EndUserText.label</strong>: Overall Status<br /><strong>@EndUserText.quickInfo</strong>: Overall Processing Status (Header/All Items)<br /><strong>@ObjectModel.foreignKey.association</strong>: _OverallSDProcessStatus</td></tr>
<tr><td><strong id="billingdocument-overallbillingstatus">OverallBillingStatus</strong></td><td><a href="#type-vf_status" target="_self">VF_STATUS</a></td><td><strong>@EndUserText.heading</strong>: Status<br /><strong>@EndUserText.label</strong>: Status<br /><strong>@EndUserText.quickInfo</strong>: SD Billing Status<br /><strong>@ObjectModel.foreignKey.association</strong>: _OverallBillingStatus</td></tr>
<tr><td><strong id="billingdocument-accountingpostingstatus">AccountingPostingStatus</strong></td><td><a href="#type-buchk" target="_self">BUCHK</a></td><td><strong>@EndUserText.heading</strong>: PS<br /><strong>@EndUserText.label</strong>: Posting Status<br /><strong>@EndUserText.quickInfo</strong>: Posting Status of Billing Document<br /><strong>@ObjectModel.foreignKey.association</strong>: _AccountingPostingStatus</td></tr>
<tr><td><strong id="billingdocument-accountingtransferstatus">AccountingTransferStatus</strong></td><td><a href="#type-rfbsk" target="_self">RFBSK</a></td><td><strong>@EndUserText.heading</strong>: PsSt<br /><strong>@EndUserText.label</strong>: Posting Status<br /><strong>@EndUserText.quickInfo</strong>: Status for Transfer to Accounting<br /><strong>@ObjectModel.foreignKey.association</strong>: _AccountingTransferStatus</td></tr>
<tr><td><strong id="billingdocument-billingissuetype">BillingIssueType</strong></td><td><a href="#type-vf_todo" target="_self">VF_TODO</a></td><td><strong>@EndUserText.heading</strong>: Issue Type<br /><strong>@EndUserText.label</strong>: Issue Type<br /><strong>@EndUserText.quickInfo</strong>: Billing Issue Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _BillingIssueType</td></tr>
<tr><td><strong id="billingdocument-invoiceliststatus">InvoiceListStatus</strong></td><td><a href="#type-relik" target="_self">RELIK</a></td><td><strong>@EndUserText.heading</strong>: ILSt<br /><strong>@EndUserText.label</strong>: Invoice List Status<br /><strong>@EndUserText.quickInfo</strong>: Invoice list status of billing document<br /><strong>@ObjectModel.foreignKey.association</strong>: _InvoiceListStatus</td></tr>
<tr><td><strong id="billingdocument-ovrlitmgeneralincompletionsts">OvrlItmGeneralIncompletionSts</strong></td><td><a href="#type-uvall_su" target="_self">UVALL_SU</a></td><td><strong>@EndUserText.heading</strong>: AI<br /><strong>@EndUserText.label</strong>: All Items<br /><strong>@EndUserText.quickInfo</strong>: Incompletion Status (All Items)<br /><strong>@ObjectModel.foreignKey.association</strong>: _OvrlItmGeneralIncompletionSts</td></tr>
<tr><td><strong id="billingdocument-overallpricingincompletionsts">OverallPricingIncompletionSts</strong></td><td><a href="#type-uvprs_uk" target="_self">UVPRS_UK</a></td><td><strong>@EndUserText.heading</strong>: PI<br /><strong>@EndUserText.label</strong>: Pricing – All Items<br /><strong>@EndUserText.quickInfo</strong>: Pricing Incompletion Status (All Items)<br /><strong>@ObjectModel.foreignKey.association</strong>: _OverallPricingIncompletionSts</td></tr>
<tr><td><strong id="billingdocument-invoiceclearingstatus">InvoiceClearingStatus</strong></td><td><a href="#type-clrst" target="_self">CLRST</a></td><td><strong>@EndUserText.heading</strong>: Clearing Status<br /><strong>@EndUserText.label</strong>: Clearing Status<br /><strong>@EndUserText.quickInfo</strong>: Clearing Status of Billing Document<br /><strong>@ObjectModel.foreignKey.association</strong>: _InvoiceClearingStatus</td></tr>
<tr><td><strong id="billingdocument-invoicelisttype">InvoiceListType</strong></td><td><a href="#type-fkart_rl" target="_self">FKART_RL</a></td><td><strong>@EndUserText.heading</strong>: ILTyp<br /><strong>@EndUserText.label</strong>: Invoice List Type<br /><strong>@EndUserText.quickInfo</strong>: Invoice List Type<br /><strong>@ObjectModel.foreignKey.association</strong>: _InvoiceListType</td></tr>
<tr><td><strong id="billingdocument-invoicelistbillingdate">InvoiceListBillingDate</strong></td><td><a href="#type-fkdat_rl" target="_self">FKDAT_RL</a></td><td><strong>@EndUserText.heading</strong>: InvList BD<br /><strong>@EndUserText.label</strong>: Inv. List Bill. Date<br /><strong>@EndUserText.quickInfo</strong>: Billing date for the invoice list</td></tr>
<tr><td><strong id="billingdocument-_accountingdocument">_AccountingDocument</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accountingdocument" target="_self">I_AccountingDocument</a> () via <a href="#billingdocument-_accountingdocument" target="_self">_AccountingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_accountingpostingstatus">_AccountingPostingStatus</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accountingpostingstatus" target="_self">I_AccountingPostingStatus</a> () via <a href="#billingdocument-_accountingpostingstatus" target="_self">_AccountingPostingStatus</a></td></tr>
<tr><td><strong id="billingdocument-_accountingtransferstatus">_AccountingTransferStatus</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accountingtransferstatus" target="_self">I_AccountingTransferStatus</a> () via <a href="#billingdocument-_accountingtransferstatus" target="_self">_AccountingTransferStatus</a></td></tr>
<tr><td><strong id="billingdocument-_billingdocumentcategory">_BillingDocumentCategory</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_billingdocumentcategory" target="_self">I_BillingDocumentCategory</a> () via <a href="#billingdocument-_billingdocumentcategory" target="_self">_BillingDocumentCategory</a></td></tr>
<tr><td><strong id="billingdocument-_billingdocumenttype">_BillingDocumentType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_billingdocumenttype" target="_self">I_BillingDocumentType</a> () via <a href="#billingdocument-_billingdocumenttype" target="_self">_BillingDocumentType</a></td></tr>
<tr><td><strong id="billingdocument-_billingissuetype">_BillingIssueType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_billingissuetype" target="_self">I_BillingIssueType</a> () via <a href="#billingdocument-_billingissuetype" target="_self">_BillingIssueType</a></td></tr>
<tr><td><strong id="billingdocument-_cancelledbillingdocument">_CancelledBillingDocument</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#billingdocument" target="_self">BillingDocument</a> () via <a href="#billingdocument-_cancelledbillingdocument" target="_self">_CancelledBillingDocument</a></td></tr>
<tr><td><strong id="billingdocument-_citycode">_CityCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_citycode" target="_self">I_CityCode</a> () via <a href="#billingdocument-_citycode" target="_self">_CityCode</a></td></tr>
<tr><td><strong id="billingdocument-_companycode">_CompanyCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_companycode" target="_self">I_CompanyCode</a> () via <a href="#billingdocument-_companycode" target="_self">_CompanyCode</a></td></tr>
<tr><td><strong id="billingdocument-_country">_Country</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_country" target="_self">I_Country</a> () via <a href="#billingdocument-_country" target="_self">_Country</a></td></tr>
<tr><td><strong id="billingdocument-_county">_County</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_countycode" target="_self">I_CountyCode</a> () via <a href="#billingdocument-_county" target="_self">_County</a></td></tr>
<tr><td><strong id="billingdocument-_county_2">_County_2</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_taxingcounty" target="_self">I_TaxingCounty</a> () via <a href="#billingdocument-_county_2" target="_self">_County_2</a></td></tr>
<tr><td><strong id="billingdocument-_createdbyuser">_CreatedByUser</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_user" target="_self">I_User</a> () via <a href="#billingdocument-_createdbyuser" target="_self">_CreatedByUser</a></td></tr>
<tr><td><strong id="billingdocument-_creditcontrolarea">_CreditControlArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_creditcontrolarea" target="_self">I_CreditControlArea</a> () via <a href="#billingdocument-_creditcontrolarea" target="_self">_CreditControlArea</a></td></tr>
<tr><td><strong id="billingdocument-_creditcontrolareatext">_CreditControlAreaText</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_creditcontrolareatext" target="_self">I_CreditControlAreaText</a> () via <a href="#billingdocument-_creditcontrolareatext" target="_self">_CreditControlAreaText</a></td></tr>
<tr><td><strong id="billingdocument-_customeraccountassgmtgroup">_CustomerAccountAssgmtGroup</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customeraccountassgmtgroup" target="_self">I_CustomerAccountAssgmtGroup</a> () via <a href="#billingdocument-_customeraccountassgmtgroup" target="_self">_CustomerAccountAssgmtGroup</a></td></tr>
<tr><td><strong id="billingdocument-_customergroup">_CustomerGroup</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customergroup" target="_self">I_CustomerGroup</a> () via <a href="#billingdocument-_customergroup" target="_self">_CustomerGroup</a></td></tr>
<tr><td><strong id="billingdocument-_customerpaymentterms">_CustomerPaymentTerms</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customerpaymentterms" target="_self">I_CustomerPaymentTerms</a> () via <a href="#billingdocument-_customerpaymentterms" target="_self">_CustomerPaymentTerms</a></td></tr>
<tr><td><strong id="billingdocument-_customerpricegroup">_CustomerPriceGroup</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customerpricegroup" target="_self">I_CustomerPriceGroup</a> () via <a href="#billingdocument-_customerpricegroup" target="_self">_CustomerPriceGroup</a></td></tr>
<tr><td><strong id="billingdocument-_distributionchannel">_DistributionChannel</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_distributionchannel" target="_self">I_DistributionChannel</a> () via <a href="#billingdocument-_distributionchannel" target="_self">_DistributionChannel</a></td></tr>
<tr><td><strong id="billingdocument-_division">_Division</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_division" target="_self">I_Division</a> () via <a href="#billingdocument-_division" target="_self">_Division</a></td></tr>
<tr><td><strong id="billingdocument-_dunningarea">_DunningArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_dunningarea" target="_self">I_DunningArea</a> () via <a href="#billingdocument-_dunningarea" target="_self">_DunningArea</a></td></tr>
<tr><td><strong id="billingdocument-_dunningareatext">_DunningAreaText</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_dunningareatext" target="_self">I_DunningAreaText</a> () via <a href="#billingdocument-_dunningareatext" target="_self">_DunningAreaText</a></td></tr>
<tr><td><strong id="billingdocument-_dunningblockingreason">_DunningBlockingReason</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_dunningblockingreasoncode" target="_self">I_DunningBlockingReasonCode</a> () via <a href="#billingdocument-_dunningblockingreason" target="_self">_DunningBlockingReason</a></td></tr>
<tr><td><strong id="billingdocument-_dunningkey">_DunningKey</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_dunningkey" target="_self">I_DunningKey</a> () via <a href="#billingdocument-_dunningkey" target="_self">_DunningKey</a></td></tr>
<tr><td><strong id="billingdocument-_enhancedfields">_EnhancedFields</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_billingdocenhancedfields" target="_self">I_BillingDocEnhancedFields</a> () via <a href="#billingdocument-_enhancedfields" target="_self">_EnhancedFields</a></td></tr>
<tr><td><strong id="billingdocument-_exchangeratetype">_ExchangeRateType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_exchangeratetype" target="_self">I_ExchangeRateType</a> () via <a href="#billingdocument-_exchangeratetype" target="_self">_ExchangeRateType</a></td></tr>
<tr><td><strong id="billingdocument-_fiscalyear">_FiscalYear</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fiscalyearforcompanycode" target="_self">I_FiscalYearForCompanyCode</a> () via <a href="#billingdocument-_fiscalyear" target="_self">_FiscalYear</a></td></tr>
<tr><td><strong id="billingdocument-_incotermsclassification">_IncotermsClassification</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_incotermsclassification" target="_self">I_IncotermsClassification</a> () via <a href="#billingdocument-_incotermsclassification" target="_self">_IncotermsClassification</a></td></tr>
<tr><td><strong id="billingdocument-_incotermsversion">_IncotermsVersion</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_incotermsversion" target="_self">I_IncotermsVersion</a> () via <a href="#billingdocument-_incotermsversion" target="_self">_IncotermsVersion</a></td></tr>
<tr><td><strong id="billingdocument-_invoiceclearingstatus">_InvoiceClearingStatus</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_invoiceclearingstatus" target="_self">I_InvoiceClearingStatus</a> () via <a href="#billingdocument-_invoiceclearingstatus" target="_self">_InvoiceClearingStatus</a></td></tr>
<tr><td><strong id="billingdocument-_invoiceliststatus">_InvoiceListStatus</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_invoiceliststatus" target="_self">I_InvoiceListStatus</a> () via <a href="#billingdocument-_invoiceliststatus" target="_self">_InvoiceListStatus</a></td></tr>
<tr><td><strong id="billingdocument-_invoicelisttype">_InvoiceListType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_billingdocumenttype" target="_self">I_BillingDocumentType</a> () via <a href="#billingdocument-_invoicelisttype" target="_self">_InvoiceListType</a></td></tr>
<tr><td><strong id="billingdocument-_item">_Item</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_billingdocumentitem" target="_self">I_BillingDocumentItem</a> () via <a href="#billingdocument-_item" target="_self">_Item</a></td></tr>
<tr><td><strong id="billingdocument-_logicalsystem">_LogicalSystem</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_logicalsystem" target="_self">I_LogicalSystem</a> () via <a href="#billingdocument-_logicalsystem" target="_self">_LogicalSystem</a></td></tr>
<tr><td><strong id="billingdocument-_overallbillingstatus">_OverallBillingStatus</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_overallbillingstatus" target="_self">I_OverallBillingStatus</a> () via <a href="#billingdocument-_overallbillingstatus" target="_self">_OverallBillingStatus</a></td></tr>
<tr><td><strong id="billingdocument-_overallpricingincompletionsts">_OverallPricingIncompletionSts</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_overallprcincompletionsts" target="_self">I_OverallPrcIncompletionSts</a> () via <a href="#billingdocument-_overallpricingincompletionsts" target="_self">_OverallPricingIncompletionSts</a></td></tr>
<tr><td><strong id="billingdocument-_overallsdprocessstatus">_OverallSDProcessStatus</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_overallsdprocessstatus" target="_self">I_OverallSDProcessStatus</a> () via <a href="#billingdocument-_overallsdprocessstatus" target="_self">_OverallSDProcessStatus</a></td></tr>
<tr><td><strong id="billingdocument-_ovrlitmgeneralincompletionsts">_OvrlItmGeneralIncompletionSts</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_ovrlitmgenincompletionsts" target="_self">I_OvrlItmGenIncompletionSts</a> () via <a href="#billingdocument-_ovrlitmgeneralincompletionsts" target="_self">_OvrlItmGeneralIncompletionSts</a></td></tr>
<tr><td><strong id="billingdocument-_partner">_Partner</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_billingdocumentpartner" target="_self">I_BillingDocumentPartner</a> () via <a href="#billingdocument-_partner" target="_self">_Partner</a></td></tr>
<tr><td><strong id="billingdocument-_payerparty">_PayerParty</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customer" target="_self">I_Customer</a> () via <a href="#billingdocument-_payerparty" target="_self">_PayerParty</a></td></tr>
<tr><td><strong id="billingdocument-_paymentmethod">_PaymentMethod</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_paymentmethod" target="_self">I_PaymentMethod</a> () via <a href="#billingdocument-_paymentmethod" target="_self">_PaymentMethod</a></td></tr>
<tr><td><strong id="billingdocument-_pricelisttype">_PriceListType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_pricelisttype" target="_self">I_PriceListType</a> () via <a href="#billingdocument-_pricelisttype" target="_self">_PriceListType</a></td></tr>
<tr><td><strong id="billingdocument-_pricingelement">_PricingElement</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_billingdocumentprcgelmnt" target="_self">I_BillingDocumentPrcgElmnt</a> () via <a href="#billingdocument-_pricingelement" target="_self">_PricingElement</a></td></tr>
<tr><td><strong id="billingdocument-_region">_Region</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_region" target="_self">I_Region</a> () via <a href="#billingdocument-_region" target="_self">_Region</a></td></tr>
<tr><td><strong id="billingdocument-_reversalreason">_ReversalReason</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_reversalreason" target="_self">I_ReversalReason</a> () via <a href="#billingdocument-_reversalreason" target="_self">_ReversalReason</a></td></tr>
<tr><td><strong id="billingdocument-_salesdistrict">_SalesDistrict</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_salesdistrict" target="_self">I_SalesDistrict</a> () via <a href="#billingdocument-_salesdistrict" target="_self">_SalesDistrict</a></td></tr>
<tr><td><strong id="billingdocument-_salesorganization">_SalesOrganization</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_salesorganization" target="_self">I_SalesOrganization</a> () via <a href="#billingdocument-_salesorganization" target="_self">_SalesOrganization</a></td></tr>
<tr><td><strong id="billingdocument-_sddocumentcategory">_SDDocumentCategory</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_sddocumentcategory" target="_self">I_SDDocumentCategory</a> () via <a href="#billingdocument-_sddocumentcategory" target="_self">_SDDocumentCategory</a></td></tr>
<tr><td><strong id="billingdocument-_sdpricingprocedure">_SDPricingProcedure</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_slspricingprocedure" target="_self">I_SlsPricingProcedure</a> () via <a href="#billingdocument-_sdpricingprocedure" target="_self">_SDPricingProcedure</a></td></tr>
<tr><td><strong id="billingdocument-_shippingcondition">_ShippingCondition</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_shippingcondition" target="_self">I_ShippingCondition</a> () via <a href="#billingdocument-_shippingcondition" target="_self">_ShippingCondition</a></td></tr>
<tr><td><strong id="billingdocument-_soldtoparty">_SoldToParty</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customer" target="_self">I_Customer</a> () via <a href="#billingdocument-_soldtoparty" target="_self">_SoldToParty</a></td></tr>
<tr><td><strong id="billingdocument-_statisticscurrency">_StatisticsCurrency</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency" target="_self">I_Currency</a> () via <a href="#billingdocument-_statisticscurrency" target="_self">_StatisticsCurrency</a></td></tr>
<tr><td><strong id="billingdocument-_taxdeparturecountry">_TaxDepartureCountry</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_country" target="_self">I_Country</a> () via <a href="#billingdocument-_taxdeparturecountry" target="_self">_TaxDepartureCountry</a></td></tr>
<tr><td><strong id="billingdocument-_transactioncurrency">_TransactionCurrency</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency" target="_self">I_Currency</a> () via <a href="#billingdocument-_transactioncurrency" target="_self">_TransactionCurrency</a></td></tr>
<tr><td><strong id="billingdocument-_vatregistrationcountry">_VATRegistrationCountry</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_country" target="_self">I_Country</a> () via <a href="#billingdocument-_vatregistrationcountry" target="_self">_VATRegistrationCountry</a></td></tr>
<tr><td><strong id="billingdocument-_vatregistrationorigin">_VATRegistrationOrigin</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_vatregistrationorigin" target="_self">I_VATRegistrationOrigin</a> () via <a href="#billingdocument-_vatregistrationorigin" target="_self">_VATRegistrationOrigin</a></td></tr>
</table>

## Type Definitions

<div id="type-aedat"></div>

### AEDAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Chngd On<br /><strong>@EndUserText.label</strong>: Changed On<br /><strong>@EndUserText.quickInfo</strong>: Last Changed On</td></tr>
</table>

<div id="type-belnr_d"></div>

### BELNR_D

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Doc. No.<br /><strong>@EndUserText.label</strong>: Document Number<br /><strong>@EndUserText.quickInfo</strong>: Document Number of an Accounting Document</td></tr>
</table>

<div id="type-bstkd"></div>

### BSTKD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Customer Reference<br /><strong>@EndUserText.label</strong>: Customer Reference<br /><strong>@EndUserText.quickInfo</strong>: Customer Reference</td></tr>
</table>

<div id="type-buchk"></div>

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

<div id="type-bukrs"></div>

### BUKRS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CoCd<br /><strong>@EndUserText.label</strong>: Company Code<br /><strong>@EndUserText.quickInfo</strong>: Company Code</td></tr>
</table>

<div id="type-bzirk"></div>

### BZIRK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: SDst<br /><strong>@EndUserText.label</strong>: Sales District<br /><strong>@EndUserText.quickInfo</strong>: Sales District</td></tr>
</table>

<div id="type-cityc"></div>

### CITYC

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Code<br /><strong>@EndUserText.label</strong>: City Code<br /><strong>@EndUserText.quickInfo</strong>: City Code</td></tr>
</table>

<div id="type-clrst"></div>

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

<div id="type-corr_vkont_kk"></div>

### CORR_VKONT_KK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Cont.Account<br /><strong>@EndUserText.label</strong>: Contract Account<br /><strong>@EndUserText.quickInfo</strong>: Contract Account Number</td></tr>
</table>

<div id="type-counc"></div>

### COUNC

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CCd<br /><strong>@EndUserText.label</strong>: County Code<br /><strong>@EndUserText.quickInfo</strong>: County Code</td></tr>
</table>

<div id="type-cpkur"></div>

### CPKUR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: SRate<br /><strong>@EndUserText.label</strong>: Set Exchange Rate<br /><strong>@EndUserText.quickInfo</strong>: Exchange Rate Setting</td></tr>
</table>

<div id="type-dzterm"></div>

### DZTERM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Terms of Payment<br /><strong>@EndUserText.label</strong>: Terms of Payment<br /><strong>@EndUserText.quickInfo</strong>: Key for Terms of Payment</td></tr>
</table>

<div id="type-dzukri"></div>

### DZUKRI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(40)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Combination Criteria in the Billing Doc.<br /><strong>@EndUserText.label</strong>: Combination Criteria<br /><strong>@EndUserText.quickInfo</strong>: Combination criteria in the billing document</td></tr>
</table>

<div id="type-erdat"></div>

### ERDAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Created On<br /><strong>@EndUserText.label</strong>: Created On<br /><strong>@EndUserText.quickInfo</strong>: Record Creation Date</td></tr>
</table>

<div id="type-ernam"></div>

### ERNAM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Created By<br /><strong>@EndUserText.label</strong>: Created By<br /><strong>@EndUserText.quickInfo</strong>: Name of Person Responsible for Creating the Object</td></tr>
</table>

<div id="type-erzet"></div>

### ERZET

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Time</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Time<br /><strong>@EndUserText.label</strong>: Time<br /><strong>@EndUserText.quickInfo</strong>: Entry time</td></tr>
</table>

<div id="type-fkart"></div>

### FKART

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: BillT<br /><strong>@EndUserText.label</strong>: Billing Type<br /><strong>@EndUserText.quickInfo</strong>: Billing Type</td></tr>
</table>

<div id="type-fkart_rl"></div>

### FKART_RL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: ILTyp<br /><strong>@EndUserText.label</strong>: Invoice List Type<br /><strong>@EndUserText.quickInfo</strong>: Invoice List Type</td></tr>
</table>

<div id="type-fkdat"></div>

### FKDAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Billing Date<br /><strong>@EndUserText.label</strong>: Billing Date<br /><strong>@EndUserText.quickInfo</strong>: Billing Date</td></tr>
</table>

<div id="type-fkdat_rl"></div>

### FKDAT_RL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: InvList BD<br /><strong>@EndUserText.label</strong>: Inv. List Bill. Date<br /><strong>@EndUserText.quickInfo</strong>: Billing date for the invoice list</td></tr>
</table>

<div id="type-fksto"></div>

### FKSTO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Can<br /><strong>@EndUserText.label</strong>: Canceled<br /><strong>@EndUserText.quickInfo</strong>: Billing document is canceled</td></tr>
</table>

<div id="type-fktyp"></div>

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

<div id="type-gbstk"></div>

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

<div id="type-gjahr"></div>

### GJAHR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Year<br /><strong>@EndUserText.label</strong>: Fiscal Year<br /><strong>@EndUserText.quickInfo</strong>: Fiscal Year</td></tr>
</table>

<div id="type-hityp_pr"></div>

### HITYP_PR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: HPr<br /><strong>@EndUserText.label</strong>: HierarchyTypePricing<br /><strong>@EndUserText.quickInfo</strong>: Hierarchy type for pricing</td></tr>
</table>

<div id="type-inco1"></div>

### INCO1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: IncoT<br /><strong>@EndUserText.label</strong>: Incoterms<br /><strong>@EndUserText.quickInfo</strong>: Incoterms (Part 1)</td></tr>
</table>

<div id="type-inco2"></div>

### INCO2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(28)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Inco. 2<br /><strong>@EndUserText.label</strong>: Incoterms (Part 2)<br /><strong>@EndUserText.quickInfo</strong>: Incoterms (Part 2)</td></tr>
</table>

<div id="type-inco2_l"></div>

### INCO2_L

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(70)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>INCO2_L@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: Incoterms Location 1<br /><strong>@EndUserText.quickInfo</strong>: Incoterms Location 1</td></tr>
</table>

<div id="type-inco3_l"></div>

### INCO3_L

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(70)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>INCO3_L@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: Incoterms Location 2<br /><strong>@EndUserText.quickInfo</strong>: Incoterms Location 2</td></tr>
</table>

<div id="type-incov"></div>

### INCOV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: IncoV<br /><strong>@EndUserText.label</strong>: Incoterms Version<br /><strong>@EndUserText.quickInfo</strong>: Incoterms Version</td></tr>
</table>

<div id="type-intra_excl"></div>

### INTRA_EXCL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: exclude from Intrastat<br /><strong>@EndUserText.label</strong>: Intrastat Exclusion<br /><strong>@EndUserText.quickInfo</strong>: Exclude from Intrastat Reporting</td></tr>
</table>

<div id="type-intra_rel"></div>

### INTRA_REL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: relevant for Intrastat<br /><strong>@EndUserText.label</strong>: Intrastat Relevance<br /><strong>@EndUserText.quickInfo</strong>: Relevant for Intrastat Reporting</td></tr>
</table>

<div id="type-isaccrualrelevant"></div>

### ISACCRUALRELEVANT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Is Relevant for Accrual<br /><strong>@EndUserText.label</strong>: Relevant for Accrual<br /><strong>@EndUserText.quickInfo</strong>: Is relevant for accrual</td></tr>
</table>

<div id="type-j_1anopg"></div>

### J_1ANOPG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Pages<br /><strong>@EndUserText.label</strong>: Number of Pages<br /><strong>@EndUserText.quickInfo</strong>: Number of pages of invoice</td></tr>
</table>

<div id="type-kalsmasd"></div>

### KALSMASD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PriPr.<br /><strong>@EndUserText.label</strong>: Pricing Procedure<br /><strong>@EndUserText.quickInfo</strong>: Pricing Procedure in Pricing</td></tr>
</table>

<div id="type-kdgrp"></div>

### KDGRP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CGrp<br /><strong>@EndUserText.label</strong>: Customer Group<br /><strong>@EndUserText.quickInfo</strong>: Customer Group</td></tr>
</table>

<div id="type-kidno"></div>

### KIDNO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(30)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Payment Reference<br /><strong>@EndUserText.label</strong>: Payment Reference<br /><strong>@EndUserText.quickInfo</strong>: Payment Reference</td></tr>
</table>

<div id="type-kkber"></div>

### KKBER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CCAr<br /><strong>@EndUserText.label</strong>: Credit Control Area<br /><strong>@EndUserText.quickInfo</strong>: Credit Control Area</td></tr>
</table>

<div id="type-knuma"></div>

### KNUMA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Agreement<br /><strong>@EndUserText.label</strong>: Agreement<br /><strong>@EndUserText.quickInfo</strong>: Agreement (various conditions grouped together)</td></tr>
</table>

<div id="type-knumv"></div>

### KNUMV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Doc.Cond.<br /><strong>@EndUserText.label</strong>: Doc. Condition No.<br /><strong>@EndUserText.quickInfo</strong>: Number of the Document Condition</td></tr>
</table>

<div id="type-konda"></div>

### KONDA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CPG<br /><strong>@EndUserText.label</strong>: Customer Price Group<br /><strong>@EndUserText.quickInfo</strong>: Customer Price Group</td></tr>
</table>

<div id="type-ktgrd"></div>

### KTGRD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: AAGC<br /><strong>@EndUserText.label</strong>: Acct Assmt Grp Cust.<br /><strong>@EndUserText.quickInfo</strong>: Account Assignment Group for Customer</td></tr>
</table>

<div id="type-kunag"></div>

### KUNAG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Sold-to<br /><strong>@EndUserText.label</strong>: Sold-to Party<br /><strong>@EndUserText.quickInfo</strong>: Sold-to Party</td></tr>
</table>

<div id="type-kunrg"></div>

### KUNRG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Payer<br /><strong>@EndUserText.label</strong>: Payer<br /><strong>@EndUserText.quickInfo</strong>: Payer</td></tr>
</table>

<div id="type-kurrf_not_converted"></div>

### KURRF_NOT_CONVERTED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 9<br /><strong>scale</strong>: 5<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>KURRF_NOT_CONVERTED@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: Accounting Exchange Rate<br /><strong>@EndUserText.quickInfo</strong>: Exchange Rate for FI Postings</td></tr>
</table>

<div id="type-kurst"></div>

### KURST

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Exchange Rate Type<br /><strong>@EndUserText.label</strong>: Exchange Rate Type<br /><strong>@EndUserText.quickInfo</strong>: Exchange Rate Type</td></tr>
</table>

<div id="type-landtx"></div>

### LANDTX

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: TDC<br /><strong>@EndUserText.label</strong>: Tax Departure C/R<br /><strong>@EndUserText.quickInfo</strong>: Tax Departure Country/Region</td></tr>
</table>

<div id="type-lcnum"></div>

### LCNUM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: FD No.<br /><strong>@EndUserText.label</strong>: Financial Doc. No.<br /><strong>@EndUserText.quickInfo</strong>: Financial doc. processing: Internal financial doc. number</td></tr>
</table>

<div id="type-lifnr_wk"></div>

### LIFNR_WK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Supplier Number Plant<br /><strong>@EndUserText.label</strong>: Sppl. No. Plnt<br /><strong>@EndUserText.quickInfo</strong>: Supplier Number of Plant</td></tr>
</table>

<div id="type-lland"></div>

### LLAND

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Dest. Ctry/Reg<br /><strong>@EndUserText.label</strong>: Dest. Country/Region<br /><strong>@EndUserText.quickInfo</strong>: Destination Country/Region</td></tr>
</table>

<div id="type-logsys"></div>

### LOGSYS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Log.System<br /><strong>@EndUserText.label</strong>: Logical System<br /><strong>@EndUserText.quickInfo</strong>: Logical System</td></tr>
</table>

<div id="type-maber"></div>

### MABER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Area<br /><strong>@EndUserText.label</strong>: Dunning Area<br /><strong>@EndUserText.quickInfo</strong>: Dunning Area</td></tr>
</table>

<div id="type-mansp"></div>

### MANSP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Block<br /><strong>@EndUserText.label</strong>: Dunning Block<br /><strong>@EndUserText.quickInfo</strong>: Dunning Block</td></tr>
</table>

<div id="type-mrnkz"></div>

### MRNKZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: InM<br /><strong>@EndUserText.label</strong>: Man. Invoice Maint.<br /><strong>@EndUserText.quickInfo</strong>: Manual Invoice Maintenance</td></tr>
</table>

<div id="type-mschl"></div>

### MSCHL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Dunn.Key<br /><strong>@EndUserText.label</strong>: Dunning Key<br /><strong>@EndUserText.quickInfo</strong>: Dunning Key</td></tr>
</table>

<div id="type-mwsbp"></div>

### MWSBP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tax Amount<br /><strong>@EndUserText.label</strong>: Tax Amount<br /><strong>@EndUserText.quickInfo</strong>: Tax Amount in Document Currency</td></tr>
</table>

<div id="type-netwr"></div>

### NETWR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Net Value<br /><strong>@EndUserText.label</strong>: Net Value<br /><strong>@EndUserText.quickInfo</strong>: Net Value in Document Currency</td></tr>
</table>

<div id="type-ordnr_v"></div>

### ORDNR_V

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(18)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Assignment<br /><strong>@EndUserText.label</strong>: Assignment<br /><strong>@EndUserText.quickInfo</strong>: Assignment Number</td></tr>
</table>

<div id="type-pltyp"></div>

### PLTYP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PL<br /><strong>@EndUserText.label</strong>: Price List Type<br /><strong>@EndUserText.quickInfo</strong>: Price List Type</td></tr>
</table>

<div id="type-poper"></div>

### POPER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Period<br /><strong>@EndUserText.label</strong>: Posting Period<br /><strong>@EndUserText.quickInfo</strong>: Posting Period</td></tr>
</table>

<div id="type-rassc"></div>

### RASSC

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tr.Prt<br /><strong>@EndUserText.label</strong>: Trading Partner No.<br /><strong>@EndUserText.quickInfo</strong>: Company ID of Trading Partner</td></tr>
</table>

<div id="type-regio"></div>

### REGIO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Rg<br /><strong>@EndUserText.label</strong>: Region<br /><strong>@EndUserText.quickInfo</strong>: Region (State, Province, County)</td></tr>
</table>

<div id="type-relik"></div>

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

<div id="type-rfbsk"></div>

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

<div id="type-schzw_bseg"></div>

### SCHZW_BSEG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: PM<br /><strong>@EndUserText.label</strong>: Payment Method<br /><strong>@EndUserText.quickInfo</strong>: Payment Method</td></tr>
</table>

<div id="type-sepa_mndid"></div>

### SEPA_MNDID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(35)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Mandate Reference<br /><strong>@EndUserText.label</strong>: Mandate Reference<br /><strong>@EndUserText.quickInfo</strong>: Unique Reference to Mandate for each Payee</td></tr>
</table>

<div id="type-sfakn"></div>

### SFAKN

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: CancBillDc<br /><strong>@EndUserText.label</strong>: Canceled Bill. Doc.<br /><strong>@EndUserText.quickInfo</strong>: Number of canceled billing document</td></tr>
</table>

<div id="type-spart"></div>

### SPART

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Dv<br /><strong>@EndUserText.label</strong>: Division<br /><strong>@EndUserText.quickInfo</strong>: Division</td></tr>
</table>

<div id="type-stceg"></div>

### STCEG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(20)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: VAT Registration No.<br /><strong>@EndUserText.label</strong>: VAT Registration No.<br /><strong>@EndUserText.quickInfo</strong>: VAT Registration Number</td></tr>
</table>

<div id="type-stceg_h"></div>

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

<div id="type-stceg_l"></div>

### STCEG_L

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: STC<br /><strong>@EndUserText.label</strong>: Ctry/Rgn Sls Tax No.<br /><strong>@EndUserText.quickInfo</strong>: Country/Region of Sales Tax ID Number</td></tr>
</table>

<div id="type-stgrd"></div>

### STGRD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Rev.Reas.<br /><strong>@EndUserText.label</strong>: Reversal Reason<br /><strong>@EndUserText.quickInfo</strong>: Reason for Reversal or Inverse Posting</td></tr>
</table>

<div id="type-stwae"></div>

### STWAE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Curr.<br /><strong>@EndUserText.label</strong>: Statistics Currency<br /><strong>@EndUserText.quickInfo</strong>: Statistics Currency</td></tr>
</table>

<div id="type-taxk1"></div>

### TAXK1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx2Cs<br /><strong>@EndUserText.label</strong>: Tax Class.1 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 1 for Customer</td></tr>
</table>

<div id="type-taxk2"></div>

### TAXK2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx2Cs<br /><strong>@EndUserText.label</strong>: Tax Class.2 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 2 for Customer</td></tr>
</table>

<div id="type-taxk3"></div>

### TAXK3

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx3Cs<br /><strong>@EndUserText.label</strong>: Tax Class.3 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 3 for Customer</td></tr>
</table>

<div id="type-taxk4"></div>

### TAXK4

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx4Cs<br /><strong>@EndUserText.label</strong>: Tax Class.4 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 4 for Customer</td></tr>
</table>

<div id="type-taxk5"></div>

### TAXK5

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx5Cs<br /><strong>@EndUserText.label</strong>: Tax Class.5 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 5 for Customer</td></tr>
</table>

<div id="type-taxk6"></div>

### TAXK6

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx6Cs<br /><strong>@EndUserText.label</strong>: Tax Class.6 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 6 for Customer</td></tr>
</table>

<div id="type-taxk7"></div>

### TAXK7

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx7Cs<br /><strong>@EndUserText.label</strong>: Tax Class.7 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 7 for Customer</td></tr>
</table>

<div id="type-taxk8"></div>

### TAXK8

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx8Cs<br /><strong>@EndUserText.label</strong>: Tax Class.8 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 8 for Customer</td></tr>
</table>

<div id="type-taxk9"></div>

### TAXK9

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Tx9Cs<br /><strong>@EndUserText.label</strong>: Tax Class.9 Customer<br /><strong>@EndUserText.quickInfo</strong>: Tax Classification 9 for Customer</td></tr>
</table>

<div id="type-timestampl"></div>

### TIMESTAMPL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Timestamp</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Time Stamp<br /><strong>@EndUserText.label</strong>: Time Stamp<br /><strong>@EndUserText.quickInfo</strong>: UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun)</td></tr>
</table>

<div id="type-uvall_su"></div>

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

<div id="type-uvprs_uk"></div>

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

<div id="type-valdt"></div>

### VALDT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: FixValDate<br /><strong>@EndUserText.label</strong>: Fixed Value Date<br /><strong>@EndUserText.quickInfo</strong>: Fixed Value Date</td></tr>
</table>

<div id="type-valtg"></div>

### VALTG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: AValD<br /><strong>@EndUserText.label</strong>: Addit. Value Days<br /><strong>@EndUserText.quickInfo</strong>: Additional Value Days</td></tr>
</table>

<div id="type-vbeln_vf"></div>

### VBELN_VF

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Bill. Doc.<br /><strong>@EndUserText.label</strong>: Billing Document<br /><strong>@EndUserText.quickInfo</strong>: Billing Document</td></tr>
</table>

<div id="type-vbtypl"></div>

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

<div id="type-vf_draft_indicator"></div>

### VF_DRAFT_INDICATOR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Is Draft<br /><strong>@EndUserText.label</strong>: Draft Indicator<br /><strong>@EndUserText.quickInfo</strong>: IsDraft Indicator</td></tr>
</table>

<div id="type-vf_status"></div>

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

<div id="type-vf_todo"></div>

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

<div id="type-vkorg"></div>

### VKORG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: SOrg.<br /><strong>@EndUserText.label</strong>: Sales Organization<br /><strong>@EndUserText.quickInfo</strong>: Sales Organization</td></tr>
</table>

<div id="type-vsbed"></div>

### VSBED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Shipping Conditions<br /><strong>@EndUserText.label</strong>: Shipping Conditions<br /><strong>@EndUserText.quickInfo</strong>: Shipping Conditions</td></tr>
</table>

<div id="type-vtweg"></div>

### VTWEG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: DChl<br /><strong>@EndUserText.label</strong>: Distribution Channel<br /><strong>@EndUserText.quickInfo</strong>: Distribution Channel</td></tr>
</table>

<div id="type-waerk"></div>

### WAERK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Crcy<br /><strong>@EndUserText.label</strong>: Document Currency<br /><strong>@EndUserText.quickInfo</strong>: SD Document Currency</td></tr>
</table>

<div id="type-wwert_d"></div>

### WWERT_D

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: TranslDate<br /><strong>@EndUserText.label</strong>: Translation Date<br /><strong>@EndUserText.quickInfo</strong>: Translation Date</td></tr>
</table>

<div id="type-xblnr_v1"></div>

### XBLNR_V1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: Reference<br /><strong>@EndUserText.label</strong>: Reference<br /><strong>@EndUserText.quickInfo</strong>: Reference Document Number</td></tr>
</table>

<div id="type-xegdr"></div>

### XEGDR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>XEGDR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: EU Triangular Deal<br /><strong>@EndUserText.quickInfo</strong>: Indicator: Triangular Deal Within the EU</td></tr>
</table>
