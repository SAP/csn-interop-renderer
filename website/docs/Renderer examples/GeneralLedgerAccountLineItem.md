## Entity Definitions

### GeneralLedgerAccountLineItem


<table>
<tr><th><strong>Element</strong></th><th><strong>Type</strong></th><th><strong>Description</strong></th></tr>
<tr><td><strong id="generalledgeraccountlineitem-sourceledger">SourceLedger</strong></td><td><a href="#fins_ledger_pers">FINS_LEDGER_PERS</a></td><td><strong>Key</strong>: true<br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCELEDGER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCELEDGER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCELEDGER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _Ledger</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-companycode">CompanyCode</strong></td><td><a href="#fis_bukrs">FIS_BUKRS</a></td><td><strong>Key</strong>: true<br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPANYCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPANYCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPANYCODE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CompanyCode</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fiscalyear">FiscalYear</strong></td><td><a href="#fis_gjahr_no_conv">FIS_GJAHR_NO_CONV</a></td><td><strong>Key</strong>: true<br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FISCALYEAR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FISCALYEAR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FISCALYEAR@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FiscalYear</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accountingdocument">AccountingDocument</strong></td><td><a href="#fis_belnr">FIS_BELNR</a></td><td><strong>Key</strong>: true<br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _JournalEntry</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-ledgergllineitem">LedgerGLLineItem</strong></td><td><a href="#fis_docln">FIS_DOCLN</a></td><td><strong>Key</strong>: true<br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LEDGERGLLINEITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LEDGERGLLINEITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LEDGERGLLINEITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-ledgerfiscalyear">LedgerFiscalYear</strong></td><td><a href="#fis_ryear_no_conv">FIS_RYEAR_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LEDGERFISCALYEAR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LEDGERFISCALYEAR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LEDGERFISCALYEAR@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _LedgerFiscalYearForVariant<br /><strong>@Semantics.fiscal.year</strong>: true</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-glrecordtype">GLRecordType</strong></td><td><a href="#rrcty">RRCTY</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLRECORDTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLRECORDTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLRECORDTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jrnlentraltvfyconsecutiveid">JrnlEntrAltvFYConsecutiveID</strong></td><td><a href="#fis_docnr_ld">FIS_DOCNR_LD</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JRNLENTRALTVFYCONSECUTIVEID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JRNLENTRALTVFYCONSECUTIVEID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JRNLENTRALTVFYCONSECUTIVEID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-chartofaccounts">ChartOfAccounts</strong></td><td><a href="#fis_ktopl">FIS_KTOPL</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CHARTOFACCOUNTS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CHARTOFACCOUNTS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CHARTOFACCOUNTS@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ChartOfAccounts</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-controllingarea">ControllingArea</strong></td><td><a href="#fis_kokrs">FIS_KOKRS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGAREA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGAREA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGAREA@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ControllingArea</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-financialtransactiontype">FinancialTransactionType</strong></td><td><a href="#fis_rmvct">FIS_RMVCT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALTRANSACTIONTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALTRANSACTIONTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALTRANSACTIONTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FinancialTransactionType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-glbusinesstransactiontype">GLBusinessTransactionType</strong></td><td><a href="#fis_vorgn">FIS_VORGN</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLBUSINESSTRANSACTIONTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLBUSINESSTRANSACTIONTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLBUSINESSTRANSACTIONTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-businesstransactioncategory">BusinessTransactionCategory</strong></td><td><a href="#fis_bttype">FIS_BTTYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSTRANSACTIONCATEGORY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSTRANSACTIONCATEGORY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSTRANSACTIONCATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _BusinessTransactionCategory</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-businesstransactiontype">BusinessTransactionType</strong></td><td><a href="#fis_custbttype">FIS_CUSTBTTYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSTRANSACTIONTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSTRANSACTIONTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSTRANSACTIONTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _BusinessTransactionType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-financialclosingstep">FinancialClosingStep</strong></td><td><a href="#fis_closingstep">FIS_CLOSINGSTEP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALCLOSINGSTEP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALCLOSINGSTEP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALCLOSINGSTEP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-controllingbustransactype">ControllingBusTransacType</strong></td><td><a href="#co_vorgang">CO_VORGANG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGBUSTRANSACTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGBUSTRANSACTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGBUSTRANSACTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-referencedocumenttype">ReferenceDocumentType</strong></td><td><a href="#fis_awtyp">FIS_AWTYP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ReferenceDocumentType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-logicalsystem">LogicalSystem</strong></td><td><a href="#logsystem">LOGSYSTEM</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LOGICALSYSTEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LOGICALSYSTEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LOGICALSYSTEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-referencedocumentcontext">ReferenceDocumentContext</strong></td><td><a href="#fis_aworg">FIS_AWORG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENTCONTEXT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENTCONTEXT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENTCONTEXT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-referencedocument">ReferenceDocument</strong></td><td><a href="#awref">AWREF</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-referencedocumentitem">ReferenceDocumentItem</strong></td><td><a href="#fis_awitem">FIS_AWITEM</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENTITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-referencedocumentitemgroup">ReferenceDocumentItemGroup</strong></td><td><a href="#fis_awitgrp">FIS_AWITGRP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENTITEMGROUP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENTITEMGROUP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEDOCUMENTITEMGROUP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-transactionsubitem">TransactionSubitem</strong></td><td><a href="#fins_subta">FINS_SUBTA</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TRANSACTIONSUBITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TRANSACTIONSUBITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TRANSACTIONSUBITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accountingnotificationuuid">AccountingNotificationUUID</strong></td><td><a href="#fis_hdr_technical_id">FIS_HDR_TECHNICAL_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGNOTIFICATIONUUID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGNOTIFICATIONUUID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGNOTIFICATIONUUID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-isreversal">IsReversal</strong></td><td><a href="#fins_xreversing">FINS_XREVERSING</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISREVERSAL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISREVERSAL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISREVERSAL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-isreversed">IsReversed</strong></td><td><a href="#fins_xreversed">FINS_XREVERSED</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISREVERSED@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISREVERSED@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISREVERSED@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-reversalreferencedocumenttype">ReversalReferenceDocumentType</strong></td><td><a href="#fis_awtyp_rev">FIS_AWTYP_REV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVERSALREFERENCEDOCUMENTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVERSALREFERENCEDOCUMENTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVERSALREFERENCEDOCUMENTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-reversalreferencedocumentcntxt">ReversalReferenceDocumentCntxt</strong></td><td><a href="#fis_aworg_rev">FIS_AWORG_REV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVERSALREFERENCEDOCUMENTCNTXT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVERSALREFERENCEDOCUMENTCNTXT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVERSALREFERENCEDOCUMENTCNTXT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-reversalreferencedocument">ReversalReferenceDocument</strong></td><td><a href="#fis_awref_rev">FIS_AWREF_REV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVERSALREFERENCEDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVERSALREFERENCEDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVERSALREFERENCEDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-reversaltransactionsubitem">ReversalTransactionSubitem</strong></td><td><a href="#fis_subta_rev">FIS_SUBTA_REV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVERSALTRANSACTIONSUBITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVERSALTRANSACTIONSUBITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVERSALTRANSACTIONSUBITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-issettlement">IsSettlement</strong></td><td><a href="#fins_xsettling">FINS_XSETTLING</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISSETTLEMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISSETTLEMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISSETTLEMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-issettled">IsSettled</strong></td><td><a href="#fins_xsettled">FINS_XSETTLED</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISSETTLED@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISSETTLED@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISSETTLED@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-predecessorreferencedoctype">PredecessorReferenceDocType</strong></td><td><a href="#fis_prec_awtyp">FIS_PREC_AWTYP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORREFERENCEDOCTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORREFERENCEDOCTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORREFERENCEDOCTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-predecessorreferencedoccntxt">PredecessorReferenceDocCntxt</strong></td><td><a href="#fis_prec_aworg">FIS_PREC_AWORG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORREFERENCEDOCCNTXT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORREFERENCEDOCCNTXT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORREFERENCEDOCCNTXT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-predecessorreferencedocument">PredecessorReferenceDocument</strong></td><td><a href="#fis_prec_awref">FIS_PREC_AWREF</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORREFERENCEDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORREFERENCEDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORREFERENCEDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-predecessorreferencedocitem">PredecessorReferenceDocItem</strong></td><td><a href="#fis_prec_awitem">FIS_PREC_AWITEM</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORREFERENCEDOCITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORREFERENCEDOCITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORREFERENCEDOCITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-prdcssrjournalentrycompanycode">PrdcssrJournalEntryCompanyCode</strong></td><td><a href="#fins_prec_bukrs_gfc">FINS_PREC_BUKRS_GFC</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRDCSSRJOURNALENTRYCOMPANYCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRDCSSRJOURNALENTRYCOMPANYCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRDCSSRJOURNALENTRYCOMPANYCODE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-prdcssrjournalentryfiscalyear">PrdcssrJournalEntryFiscalYear</strong></td><td><a href="#fins_prec_gjahr_gfc_no_conv">FINS_PREC_GJAHR_GFC_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRDCSSRJOURNALENTRYFISCALYEAR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRDCSSRJOURNALENTRYFISCALYEAR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRDCSSRJOURNALENTRYFISCALYEAR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-predecessorjournalentry">PredecessorJournalEntry</strong></td><td><a href="#fins_prec_belnr_gfc">FINS_PREC_BELNR_GFC</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORJOURNALENTRY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORJOURNALENTRY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORJOURNALENTRY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-predecessorjournalentryitem">PredecessorJournalEntryItem</strong></td><td><a href="#fins_prec_docln_gfc">FINS_PREC_DOCLN_GFC</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORJOURNALENTRYITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORJOURNALENTRYITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PREDECESSORJOURNALENTRYITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-sourcereferencedocumenttype">SourceReferenceDocumentType</strong></td><td><a href="#fis_src_awtyp">FIS_SRC_AWTYP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCUMENTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCUMENTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCUMENTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-sourcelogicalsystem">SourceLogicalSystem</strong></td><td><a href="#fis_src_awsys">FIS_SRC_AWSYS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCELOGICALSYSTEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCELOGICALSYSTEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCELOGICALSYSTEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-sourcereferencedocumentcntxt">SourceReferenceDocumentCntxt</strong></td><td><a href="#fis_src_aworg">FIS_SRC_AWORG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCUMENTCNTXT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCUMENTCNTXT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCUMENTCNTXT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-sourcereferencedocument">SourceReferenceDocument</strong></td><td><a href="#fis_src_awref">FIS_SRC_AWREF</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-sourcereferencedocumentitem">SourceReferenceDocumentItem</strong></td><td><a href="#fis_src_awitem">FIS_SRC_AWITEM</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCUMENTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCUMENTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCUMENTITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-sourcereferencedocsubitem">SourceReferenceDocSubitem</strong></td><td><a href="#fis_src_awsubit">FIS_SRC_AWSUBIT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCSUBITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCSUBITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOURCEREFERENCEDOCSUBITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-iscommitment">IsCommitment</strong></td><td><a href="#fis_xcommitment">FIS_XCOMMITMENT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISCOMMITMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISCOMMITMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISCOMMITMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jrnlentryitemobsoletereason">JrnlEntryItemObsoleteReason</strong></td><td><a href="#fis_obsolete_item_reason">FIS_OBSOLETE_ITEM_REASON</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JRNLENTRYITEMOBSOLETEREASON@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JRNLENTRYITEMOBSOLETEREASON@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JRNLENTRYITEMOBSOLETEREASON@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _JrnlEntryItemObsoleteRsn</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-journalentryissecondaryentry">JournalEntryIsSecondaryEntry</strong></td><td><a href="#journalentryissecondaryentry">JOURNALENTRYISSECONDARYENTRY</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOURNALENTRYISSECONDARYENTRY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOURNALENTRYISSECONDARYENTRY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOURNALENTRYISSECONDARYENTRY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jrnlperiodendclosingrunloguuid">JrnlPeriodEndClosingRunLogUUID</strong></td><td><a href="#cls_run_id">CLS_RUN_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JRNLPERIODENDCLOSINGRUNLOGUUID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JRNLPERIODENDCLOSINGRUNLOGUUID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JRNLPERIODENDCLOSINGRUNLOGUUID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-organizationalchange">OrganizationalChange</strong></td><td><a href="#finoc_orgl_change">FINOC_ORGL_CHANGE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORGANIZATIONALCHANGE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORGANIZATIONALCHANGE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORGANIZATIONALCHANGE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-glaccount">GLAccount</strong></td><td><a href="#fis_racct">FIS_RACCT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLACCOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLACCOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _GLAccountInChartOfAccounts</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-costcenter">CostCenter</strong></td><td><a href="#fis_kostl">FIS_KOSTL</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTCENTER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTCENTER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTCENTER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CostCenter</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-profitcenter">ProfitCenter</strong></td><td><a href="#fis_prctr">FIS_PRCTR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROFITCENTER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROFITCENTER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROFITCENTER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ProfitCenter</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-functionalarea">FunctionalArea</strong></td><td><a href="#fm_farea">FM_FAREA</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNCTIONALAREA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNCTIONALAREA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNCTIONALAREA@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FunctionalArea</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-businessarea">BusinessArea</strong></td><td><a href="#fis_rbusa">FIS_RBUSA</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSAREA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSAREA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSAREA@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _BusinessArea</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-segment">Segment</strong></td><td><a href="#fb_segment">FB_SEGMENT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SEGMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SEGMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SEGMENT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _Segment</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnercostcenter">PartnerCostCenter</strong></td><td><a href="#fis_skost">FIS_SKOST</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOSTCENTER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOSTCENTER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOSTCENTER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerCostCenter</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerprofitcenter">PartnerProfitCenter</strong></td><td><a href="#fis_pprctr">FIS_PPRCTR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROFITCENTER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROFITCENTER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROFITCENTER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerProfitCenter</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerfunctionalarea">PartnerFunctionalArea</strong></td><td><a href="#fis_sfkber">FIS_SFKBER</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERFUNCTIONALAREA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERFUNCTIONALAREA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERFUNCTIONALAREA@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerFunctionalArea</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerbusinessarea">PartnerBusinessArea</strong></td><td><a href="#fis_pargb">FIS_PARGB</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERBUSINESSAREA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERBUSINESSAREA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERBUSINESSAREA@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerBusinessArea</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnercompany">PartnerCompany</strong></td><td><a href="#fis_rassc">FIS_RASSC</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOMPANY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOMPANY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOMPANY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerCompany</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnersegment">PartnerSegment</strong></td><td><a href="#fb_psegment">FB_PSEGMENT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSEGMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSEGMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSEGMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-balancetransactioncurrency">BalanceTransactionCurrency</strong></td><td><a href="#fis_rtcur">FIS_RTCUR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BALANCETRANSACTIONCURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BALANCETRANSACTIONCURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BALANCETRANSACTIONCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _BalanceTransactionCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountinbalancetransaccrcy">AmountInBalanceTransacCrcy</strong></td><td><a href="#fis_tsl">FIS_TSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINBALANCETRANSACCRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINBALANCETRANSACCRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINBALANCETRANSACCRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: BalanceTransactionCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-transactioncurrency">TransactionCurrency</strong></td><td><a href="#fis_rwcur">FIS_RWCUR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TRANSACTIONCURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TRANSACTIONCURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TRANSACTIONCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _TransactionCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountintransactioncurrency">AmountInTransactionCurrency</strong></td><td><a href="#fis_wsl">FIS_WSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINTRANSACTIONCURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINTRANSACTIONCURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINTRANSACTIONCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: TransactionCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-companycodecurrency">CompanyCodeCurrency</strong></td><td><a href="#fis_hwaer">FIS_HWAER</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPANYCODECURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPANYCODECURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPANYCODECURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CompanyCodeCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountincompanycodecurrency">AmountInCompanyCodeCurrency</strong></td><td><a href="#fis_hsl">FIS_HSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINCOMPANYCODECURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINCOMPANYCODECURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINCOMPANYCODECURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: CompanyCodeCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-globalcurrency">GlobalCurrency</strong></td><td><a href="#fis_rkcur">FIS_RKCUR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLOBALCURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLOBALCURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLOBALCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _GlobalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountinglobalcurrency">AmountInGlobalCurrency</strong></td><td><a href="#fis_ksl">FIS_KSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINGLOBALCURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINGLOBALCURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINGLOBALCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: GlobalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-functionalcurrency">FunctionalCurrency</strong></td><td><a href="#fins_currfc">FINS_CURRFC</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNCTIONALCURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNCTIONALCURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNCTIONALCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FunctionalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountinfunctionalcurrency">AmountInFunctionalCurrency</strong></td><td><a href="#fis_vfccur12">FIS_VFCCUR12</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFUNCTIONALCURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFUNCTIONALCURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFUNCTIONALCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: FunctionalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-freedefinedcurrency1">FreeDefinedCurrency1</strong></td><td><a href="#fis_rocur">FIS_ROCUR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY1@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY1@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY1@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FreeDefinedCurrency1</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountinfreedefinedcurrency1">AmountInFreeDefinedCurrency1</strong></td><td><a href="#fis_osl">FIS_OSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY1@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY1@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY1@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: FreeDefinedCurrency1</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-freedefinedcurrency2">FreeDefinedCurrency2</strong></td><td><a href="#fis_rvcur">FIS_RVCUR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY2@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FreeDefinedCurrency2</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountinfreedefinedcurrency2">AmountInFreeDefinedCurrency2</strong></td><td><a href="#fis_vsl">FIS_VSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY2@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: FreeDefinedCurrency2</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-freedefinedcurrency3">FreeDefinedCurrency3</strong></td><td><a href="#fis_curr3">FIS_CURR3</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY3@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY3@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY3@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FreeDefinedCurrency3</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountinfreedefinedcurrency3">AmountInFreeDefinedCurrency3</strong></td><td><a href="#fis_bsl">FIS_BSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY3@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY3@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY3@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: FreeDefinedCurrency3</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-freedefinedcurrency4">FreeDefinedCurrency4</strong></td><td><a href="#fis_curr4">FIS_CURR4</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY4@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY4@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY4@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FreeDefinedCurrency4</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountinfreedefinedcurrency4">AmountInFreeDefinedCurrency4</strong></td><td><a href="#fis_csl">FIS_CSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY4@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY4@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY4@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: FreeDefinedCurrency4</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-freedefinedcurrency5">FreeDefinedCurrency5</strong></td><td><a href="#fis_curr5">FIS_CURR5</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY5@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY5@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY5@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FreeDefinedCurrency5</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountinfreedefinedcurrency5">AmountInFreeDefinedCurrency5</strong></td><td><a href="#fis_dsl">FIS_DSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY5@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY5@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY5@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: FreeDefinedCurrency5</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-freedefinedcurrency6">FreeDefinedCurrency6</strong></td><td><a href="#fis_curr6">FIS_CURR6</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY6@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY6@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY6@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FreeDefinedCurrency6</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountinfreedefinedcurrency6">AmountInFreeDefinedCurrency6</strong></td><td><a href="#fis_esl">FIS_ESL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY6@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY6@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY6@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: FreeDefinedCurrency6</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-freedefinedcurrency7">FreeDefinedCurrency7</strong></td><td><a href="#fis_rfcur">FIS_RFCUR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY7@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY7@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY7@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FreeDefinedCurrency7</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountinfreedefinedcurrency7">AmountInFreeDefinedCurrency7</strong></td><td><a href="#fis_fsl">FIS_FSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY7@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY7@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY7@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: FreeDefinedCurrency7</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-freedefinedcurrency8">FreeDefinedCurrency8</strong></td><td><a href="#fis_curr8">FIS_CURR8</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY8@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY8@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FREEDEFINEDCURRENCY8@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FreeDefinedCurrency8</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountinfreedefinedcurrency8">AmountInFreeDefinedCurrency8</strong></td><td><a href="#fis_gsl">FIS_GSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY8@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY8@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINFREEDEFINEDCURRENCY8@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: FreeDefinedCurrency8</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fixedamountinglobalcrcy">FixedAmountInGlobalCrcy</strong></td><td><a href="#fis_kfsl">FIS_KFSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDAMOUNTINGLOBALCRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDAMOUNTINGLOBALCRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDAMOUNTINGLOBALCRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: GlobalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-grpvalnfixedamtinglobcrcy">GrpValnFixedAmtInGlobCrcy</strong></td><td><a href="#fis_vgcur12_fix2">FIS_VGCUR12_FIX2</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRPVALNFIXEDAMTINGLOBCRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRPVALNFIXEDAMTINGLOBCRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRPVALNFIXEDAMTINGLOBCRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: GlobalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-prftctrvalnfxdamtinglobcrcy">PrftCtrValnFxdAmtInGlobCrcy</strong></td><td><a href="#fis_vgcur12_fix3">FIS_VGCUR12_FIX3</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRFTCTRVALNFXDAMTINGLOBCRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRFTCTRVALNFXDAMTINGLOBCRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRFTCTRVALNFXDAMTINGLOBCRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: GlobalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fixedamountincocodecrcy">FixedAmountInCoCodeCrcy</strong></td><td><a href="#fis_hfsl">FIS_HFSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDAMOUNTINCOCODECRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDAMOUNTINCOCODECRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDAMOUNTINCOCODECRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: CompanyCodeCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fixedamountintranscrcy">FixedAmountInTransCrcy</strong></td><td><a href="#fis_wfsl">FIS_WFSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDAMOUNTINTRANSCRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDAMOUNTINTRANSCRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDAMOUNTINTRANSCRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: TransactionCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-totalpricevarcinglobalcrcy">TotalPriceVarcInGlobalCrcy</strong></td><td><a href="#fis_psl">FIS_PSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TOTALPRICEVARCINGLOBALCRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TOTALPRICEVARCINGLOBALCRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TOTALPRICEVARCINGLOBALCRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: GlobalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-grpvalntotprcvarcinglobcrcy">GrpValnTotPrcVarcInGlobCrcy</strong></td><td><a href="#fis_vpcur12_2">FIS_VPCUR12_2</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRPVALNTOTPRCVARCINGLOBCRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRPVALNTOTPRCVARCINGLOBCRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRPVALNTOTPRCVARCINGLOBCRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: GlobalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-prftctrvalntotprcvarcinglbcrcy">PrftCtrValnTotPrcVarcInGlbCrcy</strong></td><td><a href="#fis_vpcur12_3">FIS_VPCUR12_3</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRFTCTRVALNTOTPRCVARCINGLBCRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRFTCTRVALNTOTPRCVARCINGLBCRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRFTCTRVALNTOTPRCVARCINGLBCRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: GlobalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fixedpricevarcinglobalcrcy">FixedPriceVarcInGlobalCrcy</strong></td><td><a href="#fis_pfsl">FIS_PFSL</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDPRICEVARCINGLOBALCRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDPRICEVARCINGLOBALCRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDPRICEVARCINGLOBALCRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: GlobalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-grpvalnfixedprcvarcinglobcrcy">GrpValnFixedPrcVarcInGlobCrcy</strong></td><td><a href="#fis_vpfcur12_2">FIS_VPFCUR12_2</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRPVALNFIXEDPRCVARCINGLOBCRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRPVALNFIXEDPRCVARCINGLOBCRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRPVALNFIXEDPRCVARCINGLOBCRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: GlobalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-prftctrvalnfxdprcvarcinglbcrcy">PrftCtrValnFxdPrcVarcInGlbCrcy</strong></td><td><a href="#fis_vpfcur12_3">FIS_VPFCUR12_3</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRFTCTRVALNFXDPRCVARCINGLBCRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRFTCTRVALNFXDPRCVARCINGLBCRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRFTCTRVALNFXDPRCVARCINGLBCRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: GlobalCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-controllingobjectcurrency">ControllingObjectCurrency</strong></td><td><a href="#fins_co_ocur">FINS_CO_OCUR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGOBJECTCURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGOBJECTCURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGOBJECTCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountinobjectcurrency">AmountInObjectCurrency</strong></td><td><a href="#fis_vco_ocur12">FIS_VCO_OCUR12</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINOBJECTCURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINOBJECTCURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINOBJECTCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: ControllingObjectCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-grantcurrency">GrantCurrency</strong></td><td><a href="#gm_grant_currency">GM_GRANT_CURRENCY</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRANTCURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRANTCURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRANTCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-amountingrantcurrency">AmountInGrantCurrency</strong></td><td><a href="#gm_grant_amount">GM_GRANT_AMOUNT</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINGRANTCURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINGRANTCURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.AMOUNTINGRANTCURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: GrantCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-baseunit">BaseUnit</strong></td><td><a href="#meins">MEINS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BASEUNIT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BASEUNIT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BASEUNIT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _BaseUnit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-quantity">Quantity</strong></td><td><a href="#quan1_12">QUAN1_12</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.QUANTITY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.QUANTITY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.QUANTITY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.quantity.unitOfMeasure</strong>: BaseUnit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fixedquantity">FixedQuantity</strong></td><td><a href="#fis_quan1_12_fix">FIS_QUAN1_12_FIX</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDQUANTITY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDQUANTITY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDQUANTITY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.quantity.unitOfMeasure</strong>: BaseUnit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-costsourceunit">CostSourceUnit</strong></td><td><a href="#fis_co_meinh">FIS_CO_MEINH</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTSOURCEUNIT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTSOURCEUNIT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTSOURCEUNIT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CostSourceUnit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-valuationquantity">ValuationQuantity</strong></td><td><a href="#fis_vquan1_12">FIS_VQUAN1_12</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VALUATIONQUANTITY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VALUATIONQUANTITY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VALUATIONQUANTITY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.quantity.unitOfMeasure</strong>: CostSourceUnit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-valuationfixedquantity">ValuationFixedQuantity</strong></td><td><a href="#fis_vquan1_12_fix">FIS_VQUAN1_12_FIX</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VALUATIONFIXEDQUANTITY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VALUATIONFIXEDQUANTITY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VALUATIONFIXEDQUANTITY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.quantity.unitOfMeasure</strong>: CostSourceUnit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-referencequantityunit">ReferenceQuantityUnit</strong></td><td><a href="#fis_ref_qty_uom">FIS_REF_QTY_UOM</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEQUANTITYUNIT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEQUANTITYUNIT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEQUANTITYUNIT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ReferenceQuantityUnit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-referencequantity">ReferenceQuantity</strong></td><td><a href="#rquan1_12">RQUAN1_12</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEQUANTITY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEQUANTITY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEQUANTITY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.quantity.unitOfMeasure</strong>: ReferenceQuantityUnit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-additionalquantity1unit">AdditionalQuantity1Unit</strong></td><td><a href="#fis_qunit1">FIS_QUNIT1</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY1UNIT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY1UNIT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY1UNIT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _AdditionalQuantity1Unit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-additionalquantity1">AdditionalQuantity1</strong></td><td><a href="#fis_quan1_l">FIS_QUAN1_L</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY1@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY1@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY1@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.quantity.unitOfMeasure</strong>: AdditionalQuantity1Unit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-additionalquantity2unit">AdditionalQuantity2Unit</strong></td><td><a href="#fis_qunit2">FIS_QUNIT2</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY2UNIT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY2UNIT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY2UNIT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _AdditionalQuantity2Unit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-additionalquantity2">AdditionalQuantity2</strong></td><td><a href="#fis_quan2_l">FIS_QUAN2_L</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY2@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.quantity.unitOfMeasure</strong>: AdditionalQuantity2Unit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-additionalquantity3unit">AdditionalQuantity3Unit</strong></td><td><a href="#fis_qunit3">FIS_QUNIT3</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY3UNIT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY3UNIT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY3UNIT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _AdditionalQuantity3Unit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-additionalquantity3">AdditionalQuantity3</strong></td><td><a href="#fis_quan3_l">FIS_QUAN3_L</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY3@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY3@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ADDITIONALQUANTITY3@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.quantity.unitOfMeasure</strong>: AdditionalQuantity3Unit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-incmpltsummablevalnqtyunt">IncmpltSummableValnQtyUnt</strong></td><td><a href="#fis_fco_meinh">FIS_FCO_MEINH</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INCMPLTSUMMABLEVALNQTYUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INCMPLTSUMMABLEVALNQTYUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INCMPLTSUMMABLEVALNQTYUNT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _IncmpltSummableValnQtyUnt</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-incmpltsummablevalnqty">IncmpltSummableValnQty</strong></td><td><a href="#fis_fco_megbtr">FIS_FCO_MEGBTR</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INCMPLTSUMMABLEVALNQTY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INCMPLTSUMMABLEVALNQTY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INCMPLTSUMMABLEVALNQTY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.quantity.unitOfMeasure</strong>: IncmpltSummableValnQtyUnt</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-incmpltsummablevalnfxdqty">IncmpltSummableValnFxdQty</strong></td><td><a href="#fis_fco_mefbtr">FIS_FCO_MEFBTR</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INCMPLTSUMMABLEVALNFXDQTY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INCMPLTSUMMABLEVALNFXDQTY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INCMPLTSUMMABLEVALNFXDQTY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.quantity.unitOfMeasure</strong>: IncmpltSummableValnQtyUnt</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-debitcreditcode">DebitCreditCode</strong></td><td><a href="#fis_shkzg">FIS_SHKZG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DEBITCREDITCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DEBITCREDITCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DEBITCREDITCODE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _DebitCreditCode</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fiscalperiod">FiscalPeriod</strong></td><td><a href="#fins_fiscalperiod">FINS_FISCALPERIOD</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FISCALPERIOD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FISCALPERIOD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FISCALPERIOD@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FiscalPeriodForVariant<br /><strong>@Semantics.fiscal.period</strong>: true</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fiscalyearvariant">FiscalYearVariant</strong></td><td><a href="#fis_periv">FIS_PERIV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FISCALYEARVARIANT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FISCALYEARVARIANT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FISCALYEARVARIANT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FiscalYearVariant<br /><strong>@Semantics.fiscal.yearVariant</strong>: true</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fiscalyearperiod">FiscalYearPeriod</strong></td><td><a href="#fis_jahrper_conv">FIS_JAHRPER_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FISCALYEARPERIOD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FISCALYEARPERIOD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FISCALYEARPERIOD@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FiscalYearPeriodForVariant<br /><strong>@Semantics.fiscal.yearPeriod</strong>: true</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-postingdate">PostingDate</strong></td><td><a href="#fis_budat">FIS_BUDAT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.POSTINGDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.POSTINGDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.POSTINGDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-documentdate">DocumentDate</strong></td><td><a href="#fis_bldat">FIS_BLDAT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DOCUMENTDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DOCUMENTDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DOCUMENTDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accountingdocumenttype">AccountingDocumentType</strong></td><td><a href="#fis_blart">FIS_BLART</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCUMENTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCUMENTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCUMENTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _AccountingDocumentType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accountingdocumentitem">AccountingDocumentItem</strong></td><td><a href="#fis_buzei">FIS_BUZEI</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCUMENTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCUMENTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCUMENTITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-assignmentreference">AssignmentReference</strong></td><td><a href="#fis_zuonr">FIS_ZUONR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSIGNMENTREFERENCE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSIGNMENTREFERENCE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSIGNMENTREFERENCE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accountingdocumentcategory">AccountingDocumentCategory</strong></td><td><a href="#fis_bstat">FIS_BSTAT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCUMENTCATEGORY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCUMENTCATEGORY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCUMENTCATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _AccountingDocumentCategory</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-journalentryitemcategory">JournalEntryItemCategory</strong></td><td><a href="#fis_linetype">FIS_LINETYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOURNALENTRYITEMCATEGORY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOURNALENTRYITEMCATEGORY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOURNALENTRYITEMCATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-postingkey">PostingKey</strong></td><td><a href="#fis_bschl">FIS_BSCHL</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.POSTINGKEY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.POSTINGKEY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.POSTINGKEY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PostingKey</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-transactiontypedetermination">TransactionTypeDetermination</strong></td><td><a href="#fac_ktosl">FAC_KTOSL</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TRANSACTIONTYPEDETERMINATION@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TRANSACTIONTYPEDETERMINATION@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TRANSACTIONTYPEDETERMINATION@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-subledgeracctlineitemtype">SubLedgerAcctLineItemType</strong></td><td><a href="#slalittype">SLALITTYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SUBLEDGERACCTLINEITEMTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SUBLEDGERACCTLINEITEMTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SUBLEDGERACCTLINEITEMTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _SubLedgerAccLineItemType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accountingdoccreatedbyuser">AccountingDocCreatedByUser</strong></td><td><a href="#fis_usnam">FIS_USNAM</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCCREATEDBYUSER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCCREATEDBYUSER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTINGDOCCREATEDBYUSER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-lastchangedatetime">LastChangeDateTime</strong></td><td><a href="#fis_lastchange_datetime">FIS_LASTCHANGE_DATETIME</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LASTCHANGEDATETIME@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LASTCHANGEDATETIME@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LASTCHANGEDATETIME@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-creationdatetime">CreationDateTime</strong></td><td><a href="#fis_creation_datetime">FIS_CREATION_DATETIME</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CREATIONDATETIME@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CREATIONDATETIME@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CREATIONDATETIME@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-creationdate">CreationDate</strong></td><td><a href="#fis_cpdat">FIS_CPDAT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CREATIONDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CREATIONDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CREATIONDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-eliminationprofitcenter">EliminationProfitCenter</strong></td><td><a href="#fis_eprctr">FIS_EPRCTR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ELIMINATIONPROFITCENTER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ELIMINATIONPROFITCENTER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ELIMINATIONPROFITCENTER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _EliminationProfitCenter</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-originobjecttype">OriginObjectType</strong></td><td><a href="#fis_hoart">FIS_HOART</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINOBJECTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINOBJECTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINOBJECTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-glaccounttype">GLAccountType</strong></td><td><a href="#glaccount_type">GLACCOUNT_TYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLACCOUNTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLACCOUNTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GLACCOUNTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _GLAccountType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-alternativeglaccount">AlternativeGLAccount</strong></td><td><a href="#fis_alternativeglaccount">FIS_ALTERNATIVEGLACCOUNT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ALTERNATIVEGLACCOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ALTERNATIVEGLACCOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ALTERNATIVEGLACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _AlternativeGLAccount</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-countrychartofaccounts">CountryChartOfAccounts</strong></td><td><a href="#fis_ktop2">FIS_KTOP2</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COUNTRYCHARTOFACCOUNTS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COUNTRYCHARTOFACCOUNTS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COUNTRYCHARTOFACCOUNTS@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CountryChartOfAccounts</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-itemissplit">ItemIsSplit</strong></td><td><a href="#xsplitmod_acd">XSPLITMOD_ACD</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ITEMISSPLIT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ITEMISSPLIT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ITEMISSPLIT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-consolidationunit">ConsolidationUnit</strong></td><td><a href="#fis_md_bunit">FIS_MD_BUNIT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONSOLIDATIONUNIT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONSOLIDATIONUNIT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONSOLIDATIONUNIT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ConsolidationUnit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerconsolidationunit">PartnerConsolidationUnit</strong></td><td><a href="#fis_md_buptr">FIS_MD_BUPTR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCONSOLIDATIONUNIT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCONSOLIDATIONUNIT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCONSOLIDATIONUNIT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerConsolidationUnit</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-company">Company</strong></td><td><a href="#fis_rcomp">FIS_RCOMP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPANY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPANY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPANY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _Company</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-consolidationchartofaccounts">ConsolidationChartOfAccounts</strong></td><td><a href="#fis_itclg">FIS_ITCLG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONSOLIDATIONCHARTOFACCOUNTS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONSOLIDATIONCHARTOFACCOUNTS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONSOLIDATIONCHARTOFACCOUNTS@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ConsolidationChartOfAccounts</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-cnsldtnfinancialstatementitem">CnsldtnFinancialStatementItem</strong></td><td><a href="#fis_fsi_item">FIS_FSI_ITEM</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CNSLDTNFINANCIALSTATEMENTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CNSLDTNFINANCIALSTATEMENTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CNSLDTNFINANCIALSTATEMENTITEM@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CnsldtnFinancialStatementItem</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-cnsldtnsubitemcategory">CnsldtnSubitemCategory</strong></td><td><a href="#fis_fc_sityp">FIS_FC_SITYP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CNSLDTNSUBITEMCATEGORY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CNSLDTNSUBITEMCATEGORY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CNSLDTNSUBITEMCATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CnsldtnSubitemCategory</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-cnsldtnsubitem">CnsldtnSubitem</strong></td><td><a href="#fis_fc_sitem">FIS_FC_SITEM</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CNSLDTNSUBITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CNSLDTNSUBITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CNSLDTNSUBITEM@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CnsldtnSubitem</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-invoicereference">InvoiceReference</strong></td><td><a href="#fis_rebzg">FIS_REBZG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVOICEREFERENCE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVOICEREFERENCE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVOICEREFERENCE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-invoicereferencefiscalyear">InvoiceReferenceFiscalYear</strong></td><td><a href="#fis_rebzj_no_conv">FIS_REBZJ_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVOICEREFERENCEFISCALYEAR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVOICEREFERENCEFISCALYEAR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVOICEREFERENCEFISCALYEAR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-followondocumenttype">FollowOnDocumentType</strong></td><td><a href="#fis_rebzt">FIS_REBZT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FOLLOWONDOCUMENTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FOLLOWONDOCUMENTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FOLLOWONDOCUMENTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-invoiceitemreference">InvoiceItemReference</strong></td><td><a href="#fis_rebzz">FIS_REBZZ</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVOICEITEMREFERENCE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVOICEITEMREFERENCE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVOICEITEMREFERENCE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-referencepurchaseordercategory">ReferencePurchaseOrderCategory</strong></td><td><a href="#fis_refbtyp">FIS_REFBTYP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEPURCHASEORDERCATEGORY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEPURCHASEORDERCATEGORY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REFERENCEPURCHASEORDERCATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-purchasingdocument">PurchasingDocument</strong></td><td><a href="#fis_ebeln">FIS_EBELN</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PURCHASINGDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PURCHASINGDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PURCHASINGDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-purchasingdocumentitem">PurchasingDocumentItem</strong></td><td><a href="#fis_ebelp">FIS_EBELP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PURCHASINGDOCUMENTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PURCHASINGDOCUMENTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PURCHASINGDOCUMENTITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accountassignmentnumber">AccountAssignmentNumber</strong></td><td><a href="#fis_dzekkn">FIS_DZEKKN</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTASSIGNMENTNUMBER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTASSIGNMENTNUMBER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTASSIGNMENTNUMBER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-documentitemtext">DocumentItemText</strong></td><td><a href="#farp_sgtxt">FARP_SGTXT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DOCUMENTITEMTEXT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DOCUMENTITEMTEXT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DOCUMENTITEMTEXT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-salesdocument">SalesDocument</strong></td><td><a href="#vbeln_va">VBELN_VA</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SALESDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SALESDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SALESDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _SalesDocument</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-salesdocumentitem">SalesDocumentItem</strong></td><td><a href="#posnr_va">POSNR_VA</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SALESDOCUMENTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SALESDOCUMENTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SALESDOCUMENTITEM@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _SalesDocumentItem</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-product">Product</strong></td><td><a href="#productnumber">PRODUCTNUMBER</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRODUCT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRODUCT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRODUCT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _Product</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-plant">Plant</strong></td><td><a href="#werks_d">WERKS_D</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PLANT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PLANT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PLANT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _Plant</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-supplier">Supplier</strong></td><td><a href="#md_supplier">MD_SUPPLIER</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SUPPLIER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SUPPLIER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SUPPLIER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _Supplier</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-customer">Customer</strong></td><td><a href="#kunnr">KUNNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _Customer</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-servicesrendereddate">ServicesRenderedDate</strong></td><td><a href="#fbuda">FBUDA</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICESRENDEREDDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICESRENDEREDDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICESRENDEREDDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-performanceperiodstartdate">PerformancePeriodStartDate</strong></td><td><a href="#fm_perop_fi_low">FM_PEROP_FI_LOW</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PERFORMANCEPERIODSTARTDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PERFORMANCEPERIODSTARTDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PERFORMANCEPERIODSTARTDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-performanceperiodenddate">PerformancePeriodEndDate</strong></td><td><a href="#fm_perop_fi_high">FM_PEROP_FI_HIGH</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PERFORMANCEPERIODENDDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PERFORMANCEPERIODENDDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PERFORMANCEPERIODENDDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-conditioncontract">ConditionContract</strong></td><td><a href="#wcb_coco_num">WCB_COCO_NUM</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONDITIONCONTRACT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONDITIONCONTRACT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONDITIONCONTRACT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ConditionContract</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-exchangeratedate">ExchangeRateDate</strong></td><td><a href="#wwert_d">WWERT_D</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.EXCHANGERATEDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.EXCHANGERATEDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.EXCHANGERATEDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-componentbreakdown">ComponentBreakdown</strong></td><td><a href="#fis_fucb_id">FIS_FUCB_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPONENTBREAKDOWN@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPONENTBREAKDOWN@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPONENTBREAKDOWN@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-compbreakdownscalenumerator">CompBreakdownScaleNumerator</strong></td><td><a href="#fin_fucb_scale_numerator">FIN_FUCB_SCALE_NUMERATOR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPBREAKDOWNSCALENUMERATOR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPBREAKDOWNSCALENUMERATOR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMPBREAKDOWNSCALENUMERATOR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-financialaccounttype">FinancialAccountType</strong></td><td><a href="#farp_koart">FARP_KOART</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALACCOUNTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALACCOUNTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALACCOUNTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FinancialAccountType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-specialglcode">SpecialGLCode</strong></td><td><a href="#fac_umskz">FAC_UMSKZ</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SPECIALGLCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SPECIALGLCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SPECIALGLCODE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _SpecialGLCode</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-taxcode">TaxCode</strong></td><td><a href="#fis_mwskz">FIS_MWSKZ</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TAXCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TAXCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TAXCODE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-taxcountry">TaxCountry</strong></td><td><a href="#fot_tax_country">FOT_TAX_COUNTRY</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TAXCOUNTRY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TAXCOUNTRY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TAXCOUNTRY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _TaxCountry</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-housebank">HouseBank</strong></td><td><a href="#farp_hbkid">FARP_HBKID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.HOUSEBANK@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.HOUSEBANK@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.HOUSEBANK@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-housebankaccount">HouseBankAccount</strong></td><td><a href="#fac_hktid">FAC_HKTID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.HOUSEBANKACCOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.HOUSEBANKACCOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.HOUSEBANKACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-isopenitemmanaged">IsOpenItemManaged</strong></td><td><a href="#fis_xopvw">FIS_XOPVW</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISOPENITEMMANAGED@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISOPENITEMMANAGED@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISOPENITEMMANAGED@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-clearingdate">ClearingDate</strong></td><td><a href="#fis_augdt">FIS_AUGDT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-clearingdocfiscalyear">ClearingDocFiscalYear</strong></td><td><a href="#fis_auggj_no_conv_depre">FIS_AUGGJ_NO_CONV_DEPRE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGDOCFISCALYEAR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGDOCFISCALYEAR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGDOCFISCALYEAR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-clearingaccountingdocument">ClearingAccountingDocument</strong></td><td><a href="#fis_augbl_depre">FIS_AUGBL_DEPRE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGACCOUNTINGDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGACCOUNTINGDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGACCOUNTINGDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ClearingAccountingDocument</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-clearingjournalentryfiscalyear">ClearingJournalEntryFiscalYear</strong></td><td><a href="#fis_auggj_no_conv">FIS_AUGGJ_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGJOURNALENTRYFISCALYEAR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGJOURNALENTRYFISCALYEAR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGJOURNALENTRYFISCALYEAR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-clearingjournalentry">ClearingJournalEntry</strong></td><td><a href="#fis_augbl">FIS_AUGBL</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGJOURNALENTRY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGJOURNALENTRY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CLEARINGJOURNALENTRY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-valuedate">ValueDate</strong></td><td><a href="#valut">VALUT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VALUEDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VALUEDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VALUEDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-generalledgeragingscope">GeneralLedgerAgingScope</strong></td><td><a href="#fis_aging">FIS_AGING</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GENERALLEDGERAGINGSCOPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GENERALLEDGERAGINGSCOPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GENERALLEDGERAGINGSCOPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-generalledgeragingincrement">GeneralLedgerAgingIncrement</strong></td><td><a href="#fis_incrmnt">FIS_INCRMNT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GENERALLEDGERAGINGINCREMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GENERALLEDGERAGINGINCREMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GENERALLEDGERAGINGINCREMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-assetdepreciationarea">AssetDepreciationArea</strong></td><td><a href="#fis_afabe_d">FIS_AFABE_D</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETDEPRECIATIONAREA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETDEPRECIATIONAREA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETDEPRECIATIONAREA@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-masterfixedasset">MasterFixedAsset</strong></td><td><a href="#fis_anln1">FIS_ANLN1</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MASTERFIXEDASSET@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MASTERFIXEDASSET@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MASTERFIXEDASSET@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _MasterFixedAsset</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fixedasset">FixedAsset</strong></td><td><a href="#fis_anln2">FIS_ANLN2</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDASSET@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDASSET@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FIXEDASSET@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FixedAsset</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-assetvaluedate">AssetValueDate</strong></td><td><a href="#bzdat">BZDAT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETVALUEDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETVALUEDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETVALUEDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-assettransactiontype">AssetTransactionType</strong></td><td><a href="#fis_anbwa_vdm">FIS_ANBWA_VDM</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETTRANSACTIONTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETTRANSACTIONTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETTRANSACTIONTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _AssetTransactionType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-assetaccttransclassfctn">AssetAcctTransClassfctn</strong></td><td><a href="#faa_movcat">FAA_MOVCAT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETACCTTRANSCLASSFCTN@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETACCTTRANSCLASSFCTN@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETACCTTRANSCLASSFCTN@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _MovementCategory</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-depreciationfiscalperiod">DepreciationFiscalPeriod</strong></td><td><a href="#fis_peraf">FIS_PERAF</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DEPRECIATIONFISCALPERIOD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DEPRECIATIONFISCALPERIOD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DEPRECIATIONFISCALPERIOD@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-groupmasterfixedasset">GroupMasterFixedAsset</strong></td><td><a href="#fis_anlgr">FIS_ANLGR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GROUPMASTERFIXEDASSET@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GROUPMASTERFIXEDASSET@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GROUPMASTERFIXEDASSET@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _GroupMasterFixedAsset</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-groupfixedasset">GroupFixedAsset</strong></td><td><a href="#fis_anlgr2">FIS_ANLGR2</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GROUPFIXEDASSET@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GROUPFIXEDASSET@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GROUPFIXEDASSET@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _GroupFixedAsset</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-assetclass">AssetClass</strong></td><td><a href="#anlkl">ANLKL</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETCLASS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETCLASS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSETCLASS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnermasterfixedasset">PartnerMasterFixedAsset</strong></td><td><a href="#fis_panl1">FIS_PANL1</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERMASTERFIXEDASSET@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERMASTERFIXEDASSET@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERMASTERFIXEDASSET@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerMasterFixedAsset</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerfixedasset">PartnerFixedAsset</strong></td><td><a href="#fis_panl2">FIS_PANL2</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERFIXEDASSET@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERFIXEDASSET@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERFIXEDASSET@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerFixedAsset</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-costestimate">CostEstimate</strong></td><td><a href="#fis_kalnr">FIS_KALNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTESTIMATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTESTIMATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTESTIMATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-inventoryspecialstockvalntype">InventorySpecialStockValnType</strong></td><td><a href="#fis_inventoryspclstockvalntype">FIS_INVENTORYSPCLSTOCKVALNTYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPECIALSTOCKVALNTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPECIALSTOCKVALNTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPECIALSTOCKVALNTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _InventorySpclStockValnType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-issupplierstockvaluation">IsSupplierStockValuation</strong></td><td><a href="#fis_mlxobew">FIS_MLXOBEW</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISSUPPLIERSTOCKVALUATION@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISSUPPLIERSTOCKVALUATION@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ISSUPPLIERSTOCKVALUATION@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-inventoryspecialstocktype">InventorySpecialStockType</strong></td><td><a href="#fis_inventoryspecialstocktype">FIS_INVENTORYSPECIALSTOCKTYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPECIALSTOCKTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPECIALSTOCKTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPECIALSTOCKTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _InventorySpecialStockType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-inventoryspclstksalesdocument">InventorySpclStkSalesDocument</strong></td><td><a href="#fis_mlmat_kdauf">FIS_MLMAT_KDAUF</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPCLSTKSALESDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPCLSTKSALESDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPCLSTKSALESDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _InventorySpclStkSalesDocument</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-inventoryspclstksalesdocitm">InventorySpclStkSalesDocItm</strong></td><td><a href="#fis_mlmat_kdpos">FIS_MLMAT_KDPOS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPCLSTKSALESDOCITM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPCLSTKSALESDOCITM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPCLSTKSALESDOCITM@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _InventorySpclStkSalesDocItm</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-invtryspclstockwbselmntintid">InvtrySpclStockWBSElmntIntID</strong></td><td><a href="#fis_invspstock_wbsint_no_conv">FIS_INVSPSTOCK_WBSINT_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVTRYSPCLSTOCKWBSELMNTINTID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVTRYSPCLSTOCKWBSELMNTINTID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVTRYSPCLSTOCKWBSELMNTINTID@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _InvtrySpclStockWBSElmntBasic</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-inventoryspclstockwbselement">InventorySpclStockWBSElement</strong></td><td><a href="#fis_invspstock_wbs_no_conv">FIS_INVSPSTOCK_WBS_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPCLSTOCKWBSELEMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPCLSTOCKWBSELEMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPCLSTOCKWBSELEMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-inventoryspecialstocksupplier">InventorySpecialStockSupplier</strong></td><td><a href="#fis_mlmat_lifnr">FIS_MLMAT_LIFNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPECIALSTOCKSUPPLIER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPECIALSTOCKSUPPLIER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYSPECIALSTOCKSUPPLIER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _InventorySpecialStockSupplier</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-inventoryvaluationtype">InventoryValuationType</strong></td><td><a href="#fis_bwtar_d">FIS_BWTAR_D</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYVALUATIONTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYVALUATIONTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.INVENTORYVALUATIONTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _InventoryValuationType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-valuationarea">ValuationArea</strong></td><td><a href="#bwkey">BWKEY</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VALUATIONAREA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VALUATIONAREA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VALUATIONAREA@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-materialledgerprocesstype">MaterialLedgerProcessType</strong></td><td><a href="#fml_process_type">FML_PROCESS_TYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MATERIALLEDGERPROCESSTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MATERIALLEDGERPROCESSTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MATERIALLEDGERPROCESSTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-materialledgercategory">MaterialLedgerCategory</strong></td><td><a href="#fml_category">FML_CATEGORY</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MATERIALLEDGERCATEGORY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MATERIALLEDGERCATEGORY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MATERIALLEDGERCATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-slspriceamountincocodecrcy">SlsPriceAmountInCoCodeCrcy</strong></td><td><a href="#fis_lcrcy_sp_value">FIS_LCRCY_SP_VALUE</a></td><td><strong>@Aggregation.default</strong>: <code>&lbrace;
  "#": "SUM"
&rbrace;</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SLSPRICEAMOUNTINCOCODECRCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SLSPRICEAMOUNTINCOCODECRCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SLSPRICEAMOUNTINCOCODECRCY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@Semantics.amount.currencyCode</strong>: CompanyCodeCurrency</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-productpricecontrol">ProductPriceControl</strong></td><td><a href="#fml_price_control">FML_PRICE_CONTROL</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRODUCTPRICECONTROL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRODUCTPRICECONTROL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRODUCTPRICECONTROL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-procurementalternative">ProcurementAlternative</strong></td><td><a href="#fis_ml_qsbvalt">FIS_ML_QSBVALT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROCUREMENTALTERNATIVE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROCUREMENTALTERNATIVE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROCUREMENTALTERNATIVE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-productionprocess">ProductionProcess</strong></td><td><a href="#fis_ml_qsprocess">FIS_ML_QSPROCESS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRODUCTIONPROCESS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRODUCTIONPROCESS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRODUCTIONPROCESS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-sendercompanycode">SenderCompanyCode</strong></td><td><a href="#fis_bukrs_sender">FIS_BUKRS_SENDER</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERCOMPANYCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERCOMPANYCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERCOMPANYCODE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-senderglaccount">SenderGLAccount</strong></td><td><a href="#fis_racct_sender">FIS_RACCT_SENDER</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERGLACCOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERGLACCOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERGLACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-senderaccountassignment">SenderAccountAssignment</strong></td><td><a href="#fis_accas_sender">FIS_ACCAS_SENDER</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERACCOUNTASSIGNMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERACCOUNTASSIGNMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERACCOUNTASSIGNMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-senderaccountassignmenttype">SenderAccountAssignmentType</strong></td><td><a href="#fis_accasty_sender">FIS_ACCASTY_SENDER</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERACCOUNTASSIGNMENTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERACCOUNTASSIGNMENTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERACCOUNTASSIGNMENTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-controllingobject">ControllingObject</strong></td><td><a href="#fis_objnr">FIS_OBJNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGOBJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGOBJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGOBJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-costorigingroup">CostOriginGroup</strong></td><td><a href="#hrkft">HRKFT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTORIGINGROUP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTORIGINGROUP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTORIGINGROUP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-originsenderobject">OriginSenderObject</strong></td><td><a href="#fis_uspob">FIS_USPOB</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINSENDEROBJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINSENDEROBJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINSENDEROBJECT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _OriginSenderObject</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-controllingdebitcreditcode">ControllingDebitCreditCode</strong></td><td><a href="#fis_co_belkz">FIS_CO_BELKZ</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGDEBITCREDITCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGDEBITCREDITCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGDEBITCREDITCODE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ControllingDebitCreditCode</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-originctrlgdebitcreditcode">OriginCtrlgDebitCreditCode</strong></td><td><a href="#fins_co_beknz">FINS_CO_BEKNZ</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINCTRLGDEBITCREDITCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINCTRLGDEBITCREDITCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINCTRLGDEBITCREDITCODE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _OriginCtrlgDebitCreditCode</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-controllingobjectdebittype">ControllingObjectDebitType</strong></td><td><a href="#fis_bp_inout">FIS_BP_INOUT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGOBJECTDEBITTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGOBJECTDEBITTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGOBJECTDEBITTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-quantityisincomplete">QuantityIsIncomplete</strong></td><td><a href="#fco_muv_code">FCO_MUV_CODE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.QUANTITYISINCOMPLETE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.QUANTITYISINCOMPLETE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.QUANTITYISINCOMPLETE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-offsettingaccount">OffsettingAccount</strong></td><td><a href="#fis_gkont">FIS_GKONT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.OFFSETTINGACCOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.OFFSETTINGACCOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.OFFSETTINGACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _OffsettingAccount</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-offsettingaccounttype">OffsettingAccountType</strong></td><td><a href="#fis_gkoar">FIS_GKOAR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.OFFSETTINGACCOUNTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.OFFSETTINGACCOUNTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.OFFSETTINGACCOUNTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _OffsettingAccountType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-offsettingchartofaccounts">OffsettingChartOfAccounts</strong></td><td><a href="#fis_offsettingktopl">FIS_OFFSETTINGKTOPL</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.OFFSETTINGCHARTOFACCOUNTS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.OFFSETTINGCHARTOFACCOUNTS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.OFFSETTINGCHARTOFACCOUNTS@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _OffsettingChartOfAccounts</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-lineitemiscompleted">LineItemIsCompleted</strong></td><td><a href="#fis_kblerlkz">FIS_KBLERLKZ</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LINEITEMISCOMPLETED@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LINEITEMISCOMPLETED@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.LINEITEMISCOMPLETED@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-personnelnumber">PersonnelNumber</strong></td><td><a href="#pernr_d">PERNR_D</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PERSONNELNUMBER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PERSONNELNUMBER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PERSONNELNUMBER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-controllingobjectclass">ControllingObjectClass</strong></td><td><a href="#fis_scope_cv_conv_co">FIS_SCOPE_CV_CONV_CO</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGOBJECTCLASS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGOBJECTCLASS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGOBJECTCLASS@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ControllingObjectClass</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnercompanycode">PartnerCompanyCode</strong></td><td><a href="#fis_pbukrs">FIS_PBUKRS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOMPANYCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOMPANYCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOMPANYCODE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerCompanyCode</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnercontrollingobjectclass">PartnerControllingObjectClass</strong></td><td><a href="#fis_pscope_cv_conv_co">FIS_PSCOPE_CV_CONV_CO</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCONTROLLINGOBJECTCLASS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCONTROLLINGOBJECTCLASS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCONTROLLINGOBJECTCLASS@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerControllingObjectClass</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-originprofitcenter">OriginProfitCenter</strong></td><td><a href="#fins_origin_prctr">FINS_ORIGIN_PRCTR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINPROFITCENTER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINPROFITCENTER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINPROFITCENTER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _OriginProfitCenter</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-originorder">OriginOrder</strong></td><td><a href="#fco_aufnr_org">FCO_AUFNR_ORG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINORDER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINORDER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINORDER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _OriginOrder</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-origincostctractivitytype">OriginCostCtrActivityType</strong></td><td><a href="#fins_usp_lstar">FINS_USP_LSTAR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINCOSTCTRACTIVITYTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINCOSTCTRACTIVITYTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINCOSTCTRACTIVITYTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _OriginCostCtrActivityType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-origincostcenter">OriginCostCenter</strong></td><td><a href="#fis_usp_kostl">FIS_USP_KOSTL</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINCOSTCENTER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINCOSTCENTER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINCOSTCENTER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _OriginCostCenter</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-originproduct">OriginProduct</strong></td><td><a href="#fis_origin_matnr">FIS_ORIGIN_MATNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINPRODUCT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINPRODUCT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINPRODUCT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _OriginProduct</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-varianceoriginglaccount">VarianceOriginGLAccount</strong></td><td><a href="#fis_varc_origin_acct">FIS_VARC_ORIGIN_ACCT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VARIANCEORIGINGLACCOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VARIANCEORIGINGLACCOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VARIANCEORIGINGLACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accountassignment">AccountAssignment</strong></td><td><a href="#accas">ACCAS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTASSIGNMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTASSIGNMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTASSIGNMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accountassignmenttype">AccountAssignmentType</strong></td><td><a href="#fis_accasty">FIS_ACCASTY</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTASSIGNMENTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTASSIGNMENTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCOUNTASSIGNMENTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _AccountAssignmentType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-costctractivitytype">CostCtrActivityType</strong></td><td><a href="#lstar">LSTAR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTCTRACTIVITYTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTCTRACTIVITYTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTCTRACTIVITYTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CostCtrActivityType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-orderid">OrderID</strong></td><td><a href="#fis_aufnr">FIS_AUFNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDERID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDERID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDERID@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _Order</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-ordercategory">OrderCategory</strong></td><td><a href="#auftyp">AUFTYP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDERCATEGORY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDERCATEGORY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDERCATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _OrderCategory</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-wbselementinternalid">WBSElementInternalID</strong></td><td><a href="#fis_wbsint_no_conv">FIS_WBSINT_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WBSELEMENTINTERNALID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WBSELEMENTINTERNALID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WBSELEMENTINTERNALID@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _WBSElementBasicData</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-wbselement">WBSElement</strong></td><td><a href="#fis_wbs_no_conv">FIS_WBS_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WBSELEMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WBSELEMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WBSELEMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerwbselementinternalid">PartnerWBSElementInternalID</strong></td><td><a href="#fis_partner_wbsint_no_conv">FIS_PARTNER_WBSINT_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERWBSELEMENTINTERNALID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERWBSELEMENTINTERNALID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERWBSELEMENTINTERNALID@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerWBSElementBasicData</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerwbselement">PartnerWBSElement</strong></td><td><a href="#fis_partner_wbs_no_conv">FIS_PARTNER_WBS_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERWBSELEMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERWBSELEMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERWBSELEMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-projectinternalid">ProjectInternalID</strong></td><td><a href="#fis_projectint_no_conv">FIS_PROJECTINT_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROJECTINTERNALID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROJECTINTERNALID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROJECTINTERNALID@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ProjectBasicData</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-project">Project</strong></td><td><a href="#fis_project_no_conv">FIS_PROJECT_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerprojectinternalid">PartnerProjectInternalID</strong></td><td><a href="#fis_part_projectint_no_conv">FIS_PART_PROJECTINT_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROJECTINTERNALID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROJECTINTERNALID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROJECTINTERNALID@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerProjectBasicData</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerproject">PartnerProject</strong></td><td><a href="#fis_part_project_no_conv">FIS_PART_PROJECT_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-operatingconcern">OperatingConcern</strong></td><td><a href="#erkrs">ERKRS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.OPERATINGCONCERN@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.OPERATINGCONCERN@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.OPERATINGCONCERN@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _OperatingConcern</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-projectnetwork">ProjectNetwork</strong></td><td><a href="#nplnr">NPLNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROJECTNETWORK@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROJECTNETWORK@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROJECTNETWORK@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-relatednetworkactivity">RelatedNetworkActivity</strong></td><td><a href="#fis_npvrg_no_conv">FIS_NPVRG_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.RELATEDNETWORKACTIVITY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.RELATEDNETWORKACTIVITY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.RELATEDNETWORKACTIVITY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-businessprocess">BusinessProcess</strong></td><td><a href="#co_prznr">CO_PRZNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSPROCESS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSPROCESS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSPROCESS@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _BusinessProcess</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-costobject">CostObject</strong></td><td><a href="#kstrg">KSTRG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTOBJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTOBJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTOBJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-billablecontrol">BillableControl</strong></td><td><a href="#fis_bemot">FIS_BEMOT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BILLABLECONTROL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BILLABLECONTROL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BILLABLECONTROL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-costanalysisresource">CostAnalysisResource</strong></td><td><a href="#fis_co_resource">FIS_CO_RESOURCE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTANALYSISRESOURCE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTANALYSISRESOURCE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COSTANALYSISRESOURCE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CostAnalysisResource</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-customerservicenotification">CustomerServiceNotification</strong></td><td><a href="#fis_qmnum">FIS_QMNUM</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERSERVICENOTIFICATION@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERSERVICENOTIFICATION@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERSERVICENOTIFICATION@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-servicedocumenttype">ServiceDocumentType</strong></td><td><a href="#fco_srvdoc_type">FCO_SRVDOC_TYPE</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_AcctgServiceDocumentTypeVH",
      "element": "ServiceDocumentType"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICEDOCUMENTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICEDOCUMENTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICEDOCUMENTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-servicedocument">ServiceDocument</strong></td><td><a href="#fco_srvdoc_id">FCO_SRVDOC_ID</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_AcctgServiceDocumentVH",
      "element": "ServiceDocument"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICEDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICEDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICEDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-servicedocumentitem">ServiceDocumentItem</strong></td><td><a href="#fco_srvdoc_item_id">FCO_SRVDOC_ITEM_ID</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_AcctgServiceDocumentItemVH",
      "element": "ServiceDocumentItem"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICEDOCUMENTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICEDOCUMENTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICEDOCUMENTITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerservicedocumenttype">PartnerServiceDocumentType</strong></td><td><a href="#fis_psrvdoc_type">FIS_PSRVDOC_TYPE</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_AcctgServiceDocumentTypeVH",
      "element": "ServiceDocumentType"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSERVICEDOCUMENTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSERVICEDOCUMENTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSERVICEDOCUMENTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerservicedocument">PartnerServiceDocument</strong></td><td><a href="#fis_psrvdoc_id">FIS_PSRVDOC_ID</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_AcctgServiceDocumentVH",
      "element": "ServiceDocument"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSERVICEDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSERVICEDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSERVICEDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerservicedocumentitem">PartnerServiceDocumentItem</strong></td><td><a href="#fis_psrvdoc_item_id">FIS_PSRVDOC_ITEM_ID</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_AcctgServiceDocumentItemVH",
      "element": "ServiceDocumentItem"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSERVICEDOCUMENTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSERVICEDOCUMENTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSERVICEDOCUMENTITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-servicecontracttype">ServiceContractType</strong></td><td><a href="#fco_srvcontract_type">FCO_SRVCONTRACT_TYPE</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_ServiceContractTypeStdVH",
      "element": "ServiceDocumentType"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICECONTRACTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICECONTRACTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICECONTRACTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-servicecontract">ServiceContract</strong></td><td><a href="#fco_srvcontract_id">FCO_SRVCONTRACT_ID</a></td><td><strong>@Consumption.valueHelpDefinition</strong>: <code>[
  &lbrace;
    "entity": &lbrace;
      "name": "I_AcctgServiceContractVH",
      "element": "ServiceContract"
    &rbrace;
  &rbrace;
]</code><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICECONTRACT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICECONTRACT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICECONTRACT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-servicecontractitem">ServiceContractItem</strong></td><td><a href="#fco_srvcontract_item_id">FCO_SRVCONTRACT_ITEM_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICECONTRACTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICECONTRACTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SERVICECONTRACTITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-businesssolutionorder">BusinessSolutionOrder</strong></td><td><a href="#crms4_solo_object_id">CRMS4_SOLO_OBJECT_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSSOLUTIONORDER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSSOLUTIONORDER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSSOLUTIONORDER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-businesssolutionorderitem">BusinessSolutionOrderItem</strong></td><td><a href="#crms4_solo_number_int">CRMS4_SOLO_NUMBER_INT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSSOLUTIONORDERITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSSOLUTIONORDERITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUSINESSSOLUTIONORDERITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-providercontract">ProviderContract</strong></td><td><a href="#fis_vtkey_kk">FIS_VTKEY_KK</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROVIDERCONTRACT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROVIDERCONTRACT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROVIDERCONTRACT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ProviderContract</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-providercontractitem">ProviderContractItem</strong></td><td><a href="#fis_vtpos_kk">FIS_VTPOS_KK</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROVIDERCONTRACTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROVIDERCONTRACTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PROVIDERCONTRACTITEM@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ProviderContractItem</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-revenueaccountingcontract">RevenueAccountingContract</strong></td><td><a href="#fis_contract_id">FIS_CONTRACT_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVENUEACCOUNTINGCONTRACT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVENUEACCOUNTINGCONTRACT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REVENUEACCOUNTINGCONTRACT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-performanceobligation">PerformanceObligation</strong></td><td><a href="#fis_pob_id">FIS_POB_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PERFORMANCEOBLIGATION@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PERFORMANCEOBLIGATION@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PERFORMANCEOBLIGATION@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-timesheetovertimecategory">TimeSheetOvertimeCategory</strong></td><td><a href="#cats_overtime_category">CATS_OVERTIME_CATEGORY</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TIMESHEETOVERTIMECATEGORY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TIMESHEETOVERTIMECATEGORY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.TIMESHEETOVERTIMECATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partneraccountassignment">PartnerAccountAssignment</strong></td><td><a href="#fis_paccas">FIS_PACCAS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERACCOUNTASSIGNMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERACCOUNTASSIGNMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERACCOUNTASSIGNMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partneraccountassignmenttype">PartnerAccountAssignmentType</strong></td><td><a href="#fins_paccasty">FINS_PACCASTY</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERACCOUNTASSIGNMENTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERACCOUNTASSIGNMENTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERACCOUNTASSIGNMENTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-ststclaccountassignmenttype1">StstclAccountAssignmentType1</strong></td><td><a href="#fis_accasty_n1">FIS_ACCASTY_N1</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.STSTCLACCOUNTASSIGNMENTTYPE1@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.STSTCLACCOUNTASSIGNMENTTYPE1@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.STSTCLACCOUNTASSIGNMENTTYPE1@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-ststclaccountassignmenttype2">StstclAccountAssignmentType2</strong></td><td><a href="#fis_accasty_n2">FIS_ACCASTY_N2</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.STSTCLACCOUNTASSIGNMENTTYPE2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.STSTCLACCOUNTASSIGNMENTTYPE2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.STSTCLACCOUNTASSIGNMENTTYPE2@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-ststclaccountassignmenttype3">StstclAccountAssignmentType3</strong></td><td><a href="#fis_accasty_n3">FIS_ACCASTY_N3</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.STSTCLACCOUNTASSIGNMENTTYPE3@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.STSTCLACCOUNTASSIGNMENTTYPE3@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.STSTCLACCOUNTASSIGNMENTTYPE3@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-workpackage">WorkPackage</strong></td><td><a href="#/cpd/plan_item_id">/CPD/PLAN_ITEM_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WORKPACKAGE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WORKPACKAGE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WORKPACKAGE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-workitem">WorkItem</strong></td><td><a href="#/cpd/pfp_workitem_id">/CPD/PFP_WORKITEM_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WORKITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WORKITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WORKITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnercostctractivitytype">PartnerCostCtrActivityType</strong></td><td><a href="#fis_par_lstar">FIS_PAR_LSTAR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOSTCTRACTIVITYTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOSTCTRACTIVITYTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOSTCTRACTIVITYTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerCostCtrActivityType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerorder">PartnerOrder</strong></td><td><a href="#fis_par_aufnr">FIS_PAR_AUFNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERORDER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERORDER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERORDER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerOrder</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerordercategory">PartnerOrderCategory</strong></td><td><a href="#fis_par_auftyp">FIS_PAR_AUFTYP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERORDERCATEGORY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERORDERCATEGORY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERORDERCATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerOrderCategory</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnersalesdocument">PartnerSalesDocument</strong></td><td><a href="#fis_par_kdauf">FIS_PAR_KDAUF</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSALESDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSALESDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSALESDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerSalesDocument</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnersalesdocumentitem">PartnerSalesDocumentItem</strong></td><td><a href="#fis_par_kdpos">FIS_PAR_KDPOS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSALESDOCUMENTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSALESDOCUMENTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSALESDOCUMENTITEM@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerSalesDocumentItem</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerprojectnetwork">PartnerProjectNetwork</strong></td><td><a href="#fis_par_npln">FIS_PAR_NPLN</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROJECTNETWORK@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROJECTNETWORK@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROJECTNETWORK@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerprojectnetworkactivity">PartnerProjectNetworkActivity</strong></td><td><a href="#fis_par_vornr_auf_no_conv">FIS_PAR_VORNR_AUF_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROJECTNETWORKACTIVITY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROJECTNETWORKACTIVITY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERPROJECTNETWORKACTIVITY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerbusinessprocess">PartnerBusinessProcess</strong></td><td><a href="#fis_par_prznr">FIS_PAR_PRZNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERBUSINESSPROCESS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERBUSINESSPROCESS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERBUSINESSPROCESS@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerBusinessProcess</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnercostobject">PartnerCostObject</strong></td><td><a href="#par_kstrg">PAR_KSTRG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOSTOBJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOSTOBJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERCOSTOBJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-controllingdocumentitem">ControllingDocumentItem</strong></td><td><a href="#co_buzei_acd">CO_BUZEI_ACD</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGDOCUMENTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGDOCUMENTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CONTROLLINGDOCUMENTITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-varianceorigingroup">VarianceOriginGroup</strong></td><td><a href="#fins_varc_origin_group">FINS_VARC_ORIGIN_GROUP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VARIANCEORIGINGROUP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VARIANCEORIGINGROUP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.VARIANCEORIGINGROUP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-billingdocumenttype">BillingDocumentType</strong></td><td><a href="#fkart">FKART</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BILLINGDOCUMENTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BILLINGDOCUMENTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BILLINGDOCUMENTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _BillingDocumentType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-salesorganization">SalesOrganization</strong></td><td><a href="#vkorg">VKORG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SALESORGANIZATION@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SALESORGANIZATION@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SALESORGANIZATION@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _SalesOrganization</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-distributionchannel">DistributionChannel</strong></td><td><a href="#vtweg">VTWEG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DISTRIBUTIONCHANNEL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DISTRIBUTIONCHANNEL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.DISTRIBUTIONCHANNEL@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _DistributionChannel</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-organizationdivision">OrganizationDivision</strong></td><td><a href="#spart">SPART</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORGANIZATIONDIVISION@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORGANIZATIONDIVISION@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORGANIZATIONDIVISION@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-soldproduct">SoldProduct</strong></td><td><a href="#fins_matnr_pa">FINS_MATNR_PA</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOLDPRODUCT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOLDPRODUCT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOLDPRODUCT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _SoldProduct</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-soldproductgroup">SoldProductGroup</strong></td><td><a href="#fins_matkl_pa">FINS_MATKL_PA</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOLDPRODUCTGROUP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOLDPRODUCTGROUP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SOLDPRODUCTGROUP@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _SoldProductGroup</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-customergroup">CustomerGroup</strong></td><td><a href="#kdgrp">KDGRP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERGROUP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERGROUP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERGROUP@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CustomerGroup</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-customersuppliercountry">CustomerSupplierCountry</strong></td><td><a href="#fis_land1_gp">FIS_LAND1_GP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERSUPPLIERCOUNTRY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERSUPPLIERCOUNTRY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERSUPPLIERCOUNTRY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CustomerSupplierCountry</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-customersupplierindustry">CustomerSupplierIndustry</strong></td><td><a href="#fis_brsch">FIS_BRSCH</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERSUPPLIERINDUSTRY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERSUPPLIERINDUSTRY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERSUPPLIERINDUSTRY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-salesdistrict">SalesDistrict</strong></td><td><a href="#bzirk">BZIRK</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SALESDISTRICT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SALESDISTRICT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SALESDISTRICT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _SalesDistrict</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-billtoparty">BillToParty</strong></td><td><a href="#kunre">KUNRE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BILLTOPARTY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BILLTOPARTY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BILLTOPARTY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-shiptoparty">ShipToParty</strong></td><td><a href="#kunwe">KUNWE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SHIPTOPARTY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SHIPTOPARTY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SHIPTOPARTY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-customersuppliercorporategroup">CustomerSupplierCorporateGroup</strong></td><td><a href="#fis_konzs">FIS_KONZS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERSUPPLIERCORPORATEGROUP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERSUPPLIERCORPORATEGROUP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUSTOMERSUPPLIERCORPORATEGROUP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-cashledgercompanycode">CashLedgerCompanyCode</strong></td><td><a href="#fis_re_bukrs">FIS_RE_BUKRS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CASHLEDGERCOMPANYCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CASHLEDGERCOMPANYCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CASHLEDGERCOMPANYCODE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CashLedgerCompanyCode</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-cashledgeraccount">CashLedgerAccount</strong></td><td><a href="#fis_re_account">FIS_RE_ACCOUNT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CASHLEDGERACCOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CASHLEDGERACCOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CASHLEDGERACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _CashLedgerAccount</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-financialmanagementarea">FinancialManagementArea</strong></td><td><a href="#fikrs">FIKRS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALMANAGEMENTAREA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALMANAGEMENTAREA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALMANAGEMENTAREA@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FinancialManagementArea</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-commitmentitem">CommitmentItem</strong></td><td><a href="#fm_fipex">FM_FIPEX</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMMITMENTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMMITMENTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.COMMITMENTITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fundscenter">FundsCenter</strong></td><td><a href="#farp_fistl">FARP_FISTL</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNDSCENTER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNDSCENTER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNDSCENTER@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FundsCenter</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fundedprogram">FundedProgram</strong></td><td><a href="#fm_measure">FM_MEASURE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNDEDPROGRAM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNDEDPROGRAM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNDEDPROGRAM@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FundedProgram</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-fund">Fund</strong></td><td><a href="#bp_geber">BP_GEBER</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUND@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUND@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUND@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _Fund</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-grantid">GrantID</strong></td><td><a href="#gm_grant_nbr">GM_GRANT_NBR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRANTID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRANTID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GRANTID@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _Grant</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-budgetperiod">BudgetPeriod</strong></td><td><a href="#fm_budget_period">FM_BUDGET_PERIOD</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUDGETPERIOD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUDGETPERIOD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.BUDGETPERIOD@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _BudgetPeriod</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerfund">PartnerFund</strong></td><td><a href="#bp_p_geber">BP_P_GEBER</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERFUND@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERFUND@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERFUND@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerFund</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnergrant">PartnerGrant</strong></td><td><a href="#gm_grant_partner">GM_GRANT_PARTNER</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERGRANT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERGRANT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERGRANT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerGrant</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerbudgetperiod">PartnerBudgetPeriod</strong></td><td><a href="#fis_fm_pbudget_period">FIS_FM_PBUDGET_PERIOD</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERBUDGETPERIOD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERBUDGETPERIOD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERBUDGETPERIOD@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PartnerBudgetPeriod</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-pubsecbudgetaccount">PubSecBudgetAccount</strong></td><td><a href="#psm_bdgt_account">PSM_BDGT_ACCOUNT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETACCOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETACCOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PubSecBudgetAccount</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-pubsecbudgetaccountcocode">PubSecBudgetAccountCoCode</strong></td><td><a href="#psm_bdgt_account_cocode">PSM_BDGT_ACCOUNT_COCODE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETACCOUNTCOCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETACCOUNTCOCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETACCOUNTCOCODE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PubSecBudgetAccountCoCode</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-pubsecbudgetcnsmpndate">PubSecBudgetCnsmpnDate</strong></td><td><a href="#psm_bdgt_cnsmpn_date">PSM_BDGT_CNSMPN_DATE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNDATE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PubSecBudgetCnsmpnDate</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-pubsecbudgetcnsmpnfsclperiod">PubSecBudgetCnsmpnFsclPeriod</strong></td><td><a href="#psm_bdgt_cnsmpn_period">PSM_BDGT_CNSMPN_PERIOD</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNFSCLPERIOD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNFSCLPERIOD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNFSCLPERIOD@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PubSecBudgetCnsmpnFsclPeriod</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-pubsecbudgetcnsmpnfsclyear">PubSecBudgetCnsmpnFsclYear</strong></td><td><a href="#psm_bdgt_cnsmpn_year_no_conv">PSM_BDGT_CNSMPN_YEAR_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNFSCLYEAR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNFSCLYEAR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNFSCLYEAR@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PubSecBudgetCnsmpnFsclYear</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-pubsecbudgetisrelevant">PubSecBudgetIsRelevant</strong></td><td><a href="#psm_bdgt_relevant">PSM_BDGT_RELEVANT</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETISRELEVANT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETISRELEVANT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETISRELEVANT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-pubsecbudgetcnsmpntype">PubSecBudgetCnsmpnType</strong></td><td><a href="#psm_bdgt_cnsmpn_type">PSM_BDGT_CNSMPN_TYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PubSecBudgetCnsmpnType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-pubsecbudgetcnsmpnamttype">PubSecBudgetCnsmpnAmtType</strong></td><td><a href="#psm_bdgt_cnsmpn_amount_type">PSM_BDGT_CNSMPN_AMOUNT_TYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNAMTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNAMTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PUBSECBUDGETCNSMPNAMTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _PubSecBudgetCnsmpnAmtType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-sponsoredprogram">SponsoredProgram</strong></td><td><a href="#gm_sponsored_prog">GM_SPONSORED_PROG</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SPONSOREDPROGRAM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SPONSOREDPROGRAM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SPONSOREDPROGRAM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-sponsoredclass">SponsoredClass</strong></td><td><a href="#gm_sponsored_class">GM_SPONSORED_CLASS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SPONSOREDCLASS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SPONSOREDCLASS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SPONSOREDCLASS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-gteembudgetvaliditynumber">GteeMBudgetValidityNumber</strong></td><td><a href="#gm_bdgt_vldty_nbr">GM_BDGT_VLDTY_NBR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GTEEMBUDGETVALIDITYNUMBER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GTEEMBUDGETVALIDITYNUMBER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.GTEEMBUDGETVALIDITYNUMBER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-earmarkedfundsdocument">EarmarkedFundsDocument</strong></td><td><a href="#fis_kblnr_fi">FIS_KBLNR_FI</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.EARMARKEDFUNDSDOCUMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.EARMARKEDFUNDSDOCUMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.EARMARKEDFUNDSDOCUMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-earmarkedfundsdocumentitem">EarmarkedFundsDocumentItem</strong></td><td><a href="#fis_kblpos">FIS_KBLPOS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.EARMARKEDFUNDSDOCUMENTITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.EARMARKEDFUNDSDOCUMENTITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.EARMARKEDFUNDSDOCUMENTITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-financialservicesproductgroup">FinancialServicesProductGroup</strong></td><td><a href="#fis_ffs_product_group">FIS_FFS_PRODUCT_GROUP</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALSERVICESPRODUCTGROUP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALSERVICESPRODUCTGROUP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALSERVICESPRODUCTGROUP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-financialservicesbranch">FinancialServicesBranch</strong></td><td><a href="#fis_ffs_branch_id">FIS_FFS_BRANCH_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALSERVICESBRANCH@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALSERVICESBRANCH@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALSERVICESBRANCH@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-financialdatasource">FinancialDataSource</strong></td><td><a href="#fis_ffs_datasource_id">FIS_FFS_DATASOURCE_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALDATASOURCE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALDATASOURCE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALDATASOURCE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jointventure">JointVenture</strong></td><td><a href="#jv_name">JV_NAME</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTURE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTURE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTURE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jointventureequitygroup">JointVentureEquityGroup</strong></td><td><a href="#jv_egroup_cds">JV_EGROUP_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREEQUITYGROUP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREEQUITYGROUP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREEQUITYGROUP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jointventurecostrecoverycode">JointVentureCostRecoveryCode</strong></td><td><a href="#jv_recind_cds">JV_RECIND_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTURECOSTRECOVERYCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTURECOSTRECOVERYCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTURECOSTRECOVERYCODE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jointventurepartner">JointVenturePartner</strong></td><td><a href="#jv_part_cds">JV_PART_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREPARTNER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREPARTNER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREPARTNER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jointventurebillingtype">JointVentureBillingType</strong></td><td><a href="#jv_bilind_cds">JV_BILIND_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREBILLINGTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREBILLINGTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREBILLINGTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jointventureequitytype">JointVentureEquityType</strong></td><td><a href="#jv_etype_cds">JV_ETYPE_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREEQUITYTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREEQUITYTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREEQUITYTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jointventureproductiondate">JointVentureProductionDate</strong></td><td><a href="#jv_prodper_cds">JV_PRODPER_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREPRODUCTIONDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREPRODUCTIONDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREPRODUCTIONDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jointventurebillingdate">JointVentureBillingDate</strong></td><td><a href="#jv_billm_cds">JV_BILLM_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREBILLINGDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREBILLINGDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREBILLINGDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jointventureoperationaldate">JointVentureOperationalDate</strong></td><td><a href="#jv_pom_cds">JV_POM_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREOPERATIONALDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREOPERATIONALDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREOPERATIONALDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-cutbackrun">CutbackRun</strong></td><td><a href="#jv_cbrunid_cds">JV_CBRUNID_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUTBACKRUN@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUTBACKRUN@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUTBACKRUN@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jointventureaccountingactivity">JointVentureAccountingActivity</strong></td><td><a href="#jv_activity_cds">JV_ACTIVITY_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREACCOUNTINGACTIVITY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREACCOUNTINGACTIVITY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JOINTVENTUREACCOUNTINGACTIVITY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerventure">PartnerVenture</strong></td><td><a href="#jv_pvname_cds">JV_PVNAME_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERVENTURE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERVENTURE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERVENTURE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerequitygroup">PartnerEquityGroup</strong></td><td><a href="#jv_pegrup_cds">JV_PEGRUP_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNEREQUITYGROUP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNEREQUITYGROUP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNEREQUITYGROUP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-sendercostrecoverycode">SenderCostRecoveryCode</strong></td><td><a href="#jv_srecind_cds">JV_SRECIND_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERCOSTRECOVERYCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERCOSTRECOVERYCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SENDERCOSTRECOVERYCODE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-cutbackaccount">CutbackAccount</strong></td><td><a href="#jv_cbracct_cds">JV_CBRACCT_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUTBACKACCOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUTBACKACCOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUTBACKACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-cutbackcostobject">CutbackCostObject</strong></td><td><a href="#jv_cbobjnr_cds">JV_CBOBJNR_CDS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUTBACKCOSTOBJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUTBACKCOSTOBJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CUTBACKCOSTOBJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-rebusinessentity">REBusinessEntity</strong></td><td><a href="#rebdvdmbeno">REBDVDMBENO</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REBUSINESSENTITY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REBUSINESSENTITY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REBUSINESSENTITY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-realestatebuilding">RealEstateBuilding</strong></td><td><a href="#rebdvdmbuno">REBDVDMBUNO</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEBUILDING@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEBUILDING@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEBUILDING@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-realestateproperty">RealEstateProperty</strong></td><td><a href="#rebdvdmprno">REBDVDMPRNO</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEPROPERTY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEPROPERTY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEPROPERTY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-rerentalobject">RERentalObject</strong></td><td><a href="#rebdvdmrono">REBDVDMRONO</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.RERENTALOBJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.RERENTALOBJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.RERENTALOBJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-realestatecontract">RealEstateContract</strong></td><td><a href="#recnvdmcnnr">RECNVDMCNNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATECONTRACT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATECONTRACT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATECONTRACT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-reservicechargekey">REServiceChargeKey</strong></td><td><a href="#rescvdmsckey">RESCVDMSCKEY</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.RESERVICECHARGEKEY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.RESERVICECHARGEKEY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.RESERVICECHARGEKEY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-resettlementunitid">RESettlementUnitID</strong></td><td><a href="#rescvdmsuid">RESCVDMSUID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.RESETTLEMENTUNITID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.RESETTLEMENTUNITID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.RESETTLEMENTUNITID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-settlementreferencedate">SettlementReferenceDate</strong></td><td><a href="#fis_dabrbez">FIS_DABRBEZ</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SETTLEMENTREFERENCEDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SETTLEMENTREFERENCEDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SETTLEMENTREFERENCEDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-repartnerbusinessentity">REPartnerBusinessEntity</strong></td><td><a href="#rebdvdmpbeno">REBDVDMPBENO</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REPARTNERBUSINESSENTITY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REPARTNERBUSINESSENTITY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REPARTNERBUSINESSENTITY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-realestatepartnerbuilding">RealEstatePartnerBuilding</strong></td><td><a href="#rebdvdmpbuno">REBDVDMPBUNO</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEPARTNERBUILDING@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEPARTNERBUILDING@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEPARTNERBUILDING@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-realestatepartnerproperty">RealEstatePartnerProperty</strong></td><td><a href="#rebdvdmpprno">REBDVDMPPRNO</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEPARTNERPROPERTY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEPARTNERPROPERTY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEPARTNERPROPERTY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-repartnerrentalobject">REPartnerRentalObject</strong></td><td><a href="#rebdvdmprono">REBDVDMPRONO</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REPARTNERRENTALOBJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REPARTNERRENTALOBJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REPARTNERRENTALOBJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-realestatepartnercontract">RealEstatePartnerContract</strong></td><td><a href="#recnvdmpcnnr">RECNVDMPCNNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEPARTNERCONTRACT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEPARTNERCONTRACT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REALESTATEPARTNERCONTRACT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-repartnerservicechargekey">REPartnerServiceChargeKey</strong></td><td><a href="#rescvdmpsckey">RESCVDMPSCKEY</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REPARTNERSERVICECHARGEKEY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REPARTNERSERVICECHARGEKEY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REPARTNERSERVICECHARGEKEY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-repartnersettlementunitid">REPartnerSettlementUnitID</strong></td><td><a href="#rescvdmpsuid">RESCVDMPSUID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REPARTNERSETTLEMENTUNITID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REPARTNERSETTLEMENTUNITID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.REPARTNERSETTLEMENTUNITID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnersettlementreferencedate">PartnerSettlementReferenceDate</strong></td><td><a href="#fins_par_dabrbez">FINS_PAR_DABRBEZ</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSETTLEMENTREFERENCEDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSETTLEMENTREFERENCEDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERSETTLEMENTREFERENCEDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accrualobjecttype">AccrualObjectType</strong></td><td><a href="#acr_obj_type">ACR_OBJ_TYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALOBJECTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALOBJECTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALOBJECTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accrualobjectlogicalsystem">AccrualObjectLogicalSystem</strong></td><td><a href="#acr_logsys">ACR_LOGSYS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALOBJECTLOGICALSYSTEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALOBJECTLOGICALSYSTEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALOBJECTLOGICALSYSTEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accrualobject">AccrualObject</strong></td><td><a href="#acr_obj_id">ACR_OBJ_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALOBJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALOBJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALOBJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accrualsubobject">AccrualSubobject</strong></td><td><a href="#acr_subobj_id">ACR_SUBOBJ_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALSUBOBJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALSUBOBJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALSUBOBJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accrualitemtype">AccrualItemType</strong></td><td><a href="#acr_item_type">ACR_ITEM_TYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALITEMTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALITEMTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALITEMTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accrualreferenceobject">AccrualReferenceObject</strong></td><td><a href="#fis_acr_refobj_id">FIS_ACR_REFOBJ_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALREFERENCEOBJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALREFERENCEOBJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALREFERENCEOBJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-accrualvaluedate">AccrualValueDate</strong></td><td><a href="#acr_value_date">ACR_VALUE_DATE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALVALUEDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALVALUEDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ACCRUALVALUEDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-financialvaluationobjecttype">FinancialValuationObjectType</strong></td><td><a href="#fis_val_obj_type">FIS_VAL_OBJ_TYPE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALVALUATIONOBJECTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALVALUATIONOBJECTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALVALUATIONOBJECTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-financialvaluationobject">FinancialValuationObject</strong></td><td><a href="#fis_val_obj_id">FIS_VAL_OBJ_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALVALUATIONOBJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALVALUATIONOBJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALVALUATIONOBJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-financialvaluationsubobject">FinancialValuationSubobject</strong></td><td><a href="#fis_val_subobj_id">FIS_VAL_SUBOBJ_ID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALVALUATIONSUBOBJECT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALVALUATIONSUBOBJECT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FINANCIALVALUATIONSUBOBJECT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-netduedate">NetDueDate</strong></td><td><a href="#faedt_fpos">FAEDT_FPOS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.NETDUEDATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.NETDUEDATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.NETDUEDATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-creditriskclass">CreditRiskClass</strong></td><td><a href="#credit_risk_class">CREDIT_RISK_CLASS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CREDITRISKCLASS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CREDITRISKCLASS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.CREDITRISKCLASS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-workcenterinternalid">WorkCenterInternalID</strong></td><td><a href="#cr_objid">CR_OBJID</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WORKCENTERINTERNALID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WORKCENTERINTERNALID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.WORKCENTERINTERNALID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-orderoperation">OrderOperation</strong></td><td><a href="#fis_vornr_no_conv">FIS_VORNR_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDEROPERATION@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDEROPERATION@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDEROPERATION@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-orderitem">OrderItem</strong></td><td><a href="#co_posnr">CO_POSNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDERITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDERITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDERITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-partnerorderitem">PartnerOrderItem</strong></td><td><a href="#fco_par_aufps">FCO_PAR_AUFPS</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERORDERITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERORDERITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PARTNERORDERITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-ordersuboperation">OrderSuboperation</strong></td><td><a href="#fis_uvorn_no_conv">FIS_UVORN_NO_CONV</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDERSUBOPERATION@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDERSUBOPERATION@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORDERSUBOPERATION@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-equipment">Equipment</strong></td><td><a href="#equnr">EQUNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.EQUIPMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.EQUIPMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.EQUIPMENT@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _Equipment</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-functionallocation">FunctionalLocation</strong></td><td><a href="#tplnr">TPLNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNCTIONALLOCATION@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNCTIONALLOCATION@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.FUNCTIONALLOCATION@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _FunctionalLocation</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-assembly">Assembly</strong></td><td><a href="#istru">ISTRU</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSEMBLY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSEMBLY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ASSEMBLY@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _Assembly</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-maintenanceactivitytype">MaintenanceActivityType</strong></td><td><a href="#ila">ILA</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTENANCEACTIVITYTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTENANCEACTIVITYTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTENANCEACTIVITYTYPE@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _MaintenanceActivityType</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-maintenanceorderplanningcode">MaintenanceOrderPlanningCode</strong></td><td><a href="#auf_plknz">AUF_PLKNZ</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTENANCEORDERPLANNINGCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTENANCEORDERPLANNINGCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTENANCEORDERPLANNINGCODE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-maintprioritytype">MaintPriorityType</strong></td><td><a href="#artpr">ARTPR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTPRIORITYTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTPRIORITYTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTPRIORITYTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-maintpriority">MaintPriority</strong></td><td><a href="#priok">PRIOK</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTPRIORITY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTPRIORITY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTPRIORITY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-superiororder">SuperiorOrder</strong></td><td><a href="#maufnr">MAUFNR</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SUPERIORORDER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SUPERIORORDER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.SUPERIORORDER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-productgroup">ProductGroup</strong></td><td><a href="#fis_matkl_mm">FIS_MATKL_MM</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRODUCTGROUP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRODUCTGROUP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.PRODUCTGROUP@ENDUSERTEXT.QUICKINFO&rbrace;<br /><strong>@ObjectModel.foreignKey.association</strong>: _ProductGroup</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-maintenanceorderisplanned">MaintenanceOrderIsPlanned</strong></td><td><a href="#fins_planned_parts_work">FINS_PLANNED_PARTS_WORK</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTENANCEORDERISPLANNED@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTENANCEORDERISPLANNED@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.MAINTENANCEORDERISPLANNED@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-originorderoperation">OriginOrderOperation</strong></td><td><a href="#fis_origin_order_operation">FIS_ORIGIN_ORDER_OPERATION</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINORDEROPERATION@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINORDEROPERATION@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.ORIGINORDEROPERATION@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-jrnlentryitemmigrationsource">JrnlEntryItemMigrationSource</strong></td><td><a href="#fis_acdoc_mig_source">FIS_ACDOC_MIG_SOURCE</a></td><td><strong>@EndUserText.heading</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JRNLENTRYITEMMIGRATIONSOURCE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JRNLENTRYITEMMIGRATIONSOURCE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>I_GLACCOUNTLINEITEMRAWDATA.JRNLENTRYITEMMIGRATIONSOURCE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_accountassignmenttype">_AccountAssignmentType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accountassignmenttype">I_AccountAssignmentType</a> (Path: <a href="#i_accountassignmenttype">I_AccountAssignmentType</a>.<a href="#i_accountassignmenttype-accountassignmenttype">AccountAssignmentType</a>) via <a href="#generalledgeraccountlineitem-accountassignmenttype">AccountAssignmentType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_accountingdocumentcategory">_AccountingDocumentCategory</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accountingdocumentcategory">I_AccountingDocumentCategory</a> (Path: <a href="#i_accountingdocumentcategory">I_AccountingDocumentCategory</a>.<a href="#i_accountingdocumentcategory-accountingdocumentcategory">AccountingDocumentCategory</a>) via <a href="#generalledgeraccountlineitem-accountingdocumentcategory">AccountingDocumentCategory</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_accountingdocumenttype">_AccountingDocumentType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accountingdocumenttype">I_AccountingDocumentType</a> (Path: <a href="#i_accountingdocumenttype">I_AccountingDocumentType</a>.<a href="#i_accountingdocumenttype-accountingdocumenttype">AccountingDocumentType</a>) via <a href="#generalledgeraccountlineitem-accountingdocumenttype">AccountingDocumentType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_accrualitemtype">_AccrualItemType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accrualitemtype">I_AccrualItemType</a> (Path: <a href="#i_accrualitemtype">I_AccrualItemType</a>.<a href="#i_accrualitemtype-accrualobjecttype">AccrualObjectType</a>) via <a href="#generalledgeraccountlineitem-accrualobjecttype">AccrualObjectType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_accrualobject">_AccrualObject</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accrualobject">I_AccrualObject</a> (Path: <a href="#i_accrualobject">I_AccrualObject</a>.<a href="#i_accrualobject-accrualobjecttype">AccrualObjectType</a>) via <a href="#generalledgeraccountlineitem-accrualobjecttype">AccrualObjectType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_accrualobjecttype">_AccrualObjectType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accrualobjecttype">I_AccrualObjectType</a> (Path: <a href="#i_accrualobjecttype">I_AccrualObjectType</a>.<a href="#i_accrualobjecttype-accrualobjecttype">AccrualObjectType</a>) via <a href="#generalledgeraccountlineitem-accrualobjecttype">AccrualObjectType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_accrualsubobject">_AccrualSubobject</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accrualsubobject">I_AccrualSubObject</a> (Path: <a href="#i_accrualsubobject">I_AccrualSubObject</a>.<a href="#i_accrualsubobject-accrualobjecttype">AccrualObjectType</a>) via <a href="#generalledgeraccountlineitem-accrualobjecttype">AccrualObjectType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_additionalquantity1unit">_AdditionalQuantity1Unit</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_unitofmeasure">I_UnitOfMeasure</a> (Path: <a href="#i_unitofmeasure">I_UnitOfMeasure</a>.<a href="#i_unitofmeasure-unitofmeasure">UnitOfMeasure</a>) via <a href="#generalledgeraccountlineitem-additionalquantity1unit">AdditionalQuantity1Unit</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_additionalquantity2unit">_AdditionalQuantity2Unit</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_unitofmeasure">I_UnitOfMeasure</a> (Path: <a href="#i_unitofmeasure">I_UnitOfMeasure</a>.<a href="#i_unitofmeasure-unitofmeasure">UnitOfMeasure</a>) via <a href="#generalledgeraccountlineitem-additionalquantity2unit">AdditionalQuantity2Unit</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_additionalquantity3unit">_AdditionalQuantity3Unit</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_unitofmeasure">I_UnitOfMeasure</a> (Path: <a href="#i_unitofmeasure">I_UnitOfMeasure</a>.<a href="#i_unitofmeasure-unitofmeasure">UnitOfMeasure</a>) via <a href="#generalledgeraccountlineitem-additionalquantity3unit">AdditionalQuantity3Unit</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_alternativeglaccount">_AlternativeGLAccount</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_glaccountinchartofaccounts">I_GLAccountInChartOfAccounts</a> (Path: <a href="#i_glaccountinchartofaccounts">I_GLAccountInChartOfAccounts</a>.<a href="#i_glaccountinchartofaccounts-chartofaccounts">ChartOfAccounts</a>) via <a href="#generalledgeraccountlineitem-countrychartofaccounts">CountryChartOfAccounts</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_assembly">_Assembly</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_product">I_Product</a> (Path: <a href="#i_product">I_Product</a>.<a href="#i_product-product">Product</a>) via <a href="#generalledgeraccountlineitem-assembly">Assembly</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_assettransactiontype">_AssetTransactionType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_assettransactiontype">I_AssetTransactionType</a> (Path: <a href="#i_assettransactiontype">I_AssetTransactionType</a>.<a href="#i_assettransactiontype-assettransactiontype">AssetTransactionType</a>) via <a href="#generalledgeraccountlineitem-assettransactiontype">AssetTransactionType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_balancetransactioncurrency">_BalanceTransactionCurrency</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-balancetransactioncurrency">BalanceTransactionCurrency</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_baseunit">_BaseUnit</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_unitofmeasure">I_UnitOfMeasure</a> (Path: <a href="#i_unitofmeasure">I_UnitOfMeasure</a>.<a href="#i_unitofmeasure-unitofmeasure">UnitOfMeasure</a>) via <a href="#generalledgeraccountlineitem-baseunit">BaseUnit</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_billablecontrol">_BillableControl</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_billablecontrol">I_BillableControl</a> (Path: <a href="#i_billablecontrol">I_BillableControl</a>.<a href="#i_billablecontrol-billablecontrol">BillableControl</a>) via <a href="#generalledgeraccountlineitem-billablecontrol">BillableControl</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_billingdocumenttype">_BillingDocumentType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_billingdocumenttype">I_BillingDocumentType</a> (Path: <a href="#i_billingdocumenttype">I_BillingDocumentType</a>.<a href="#i_billingdocumenttype-billingdocumenttype">BillingDocumentType</a>) via <a href="#generalledgeraccountlineitem-billingdocumenttype">BillingDocumentType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_billtoparty">_BillToParty</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customer">I_Customer</a> (Path: <a href="#i_customer">I_Customer</a>.<a href="#i_customer-customer">Customer</a>) via <a href="#generalledgeraccountlineitem-billtoparty">BillToParty</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_budgetperiod">_BudgetPeriod</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_budgetperiod">I_BudgetPeriod</a> (Path: <a href="#i_budgetperiod">I_BudgetPeriod</a>.<a href="#i_budgetperiod-budgetperiod">BudgetPeriod</a>) via <a href="#generalledgeraccountlineitem-budgetperiod">BudgetPeriod</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_businessarea">_BusinessArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_businessarea">I_BusinessArea</a> (Path: <a href="#i_businessarea">I_BusinessArea</a>.<a href="#i_businessarea-businessarea">BusinessArea</a>) via <a href="#generalledgeraccountlineitem-businessarea">BusinessArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_businessprocess">_BusinessProcess</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_businessprocess">I_BusinessProcess</a> (Path: <a href="#i_businessprocess">I_BusinessProcess</a>.<a href="#i_businessprocess-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_businesstransactioncategory">_BusinessTransactionCategory</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_businesstransactioncategory">I_BusinessTransactionCategory</a> (Path: <a href="#i_businesstransactioncategory">I_BusinessTransactionCategory</a>.<a href="#i_businesstransactioncategory-businesstransactioncategory">BusinessTransactionCategory</a>) via <a href="#generalledgeraccountlineitem-businesstransactioncategory">BusinessTransactionCategory</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_businesstransactiontype">_BusinessTransactionType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_businesstransactiontype">I_BusinessTransactionType</a> (Path: <a href="#i_businesstransactiontype">I_BusinessTransactionType</a>.<a href="#i_businesstransactiontype-businesstransactiontype">BusinessTransactionType</a>) via <a href="#generalledgeraccountlineitem-businesstransactiontype">BusinessTransactionType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_calendardate">_CalendarDate</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_calendardate">I_CalendarDate</a> (Path: <a href="#i_calendardate">I_CalendarDate</a>.<a href="#i_calendardate-calendardate">CalendarDate</a>) via <a href="#generalledgeraccountlineitem-postingdate">PostingDate</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_cashledgeraccount">_CashLedgerAccount</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_glaccountincompanycode">I_GLAccountInCompanyCode</a> (Path: <a href="#i_glaccountincompanycode">I_GLAccountInCompanyCode</a>.<a href="#i_glaccountincompanycode-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-cashledgercompanycode">CashLedgerCompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_cashledgercompanycode">_CashLedgerCompanyCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_companycode">I_CompanyCode</a> (Path: <a href="#i_companycode">I_CompanyCode</a>.<a href="#i_companycode-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-cashledgercompanycode">CashLedgerCompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_chartofaccounts">_ChartOfAccounts</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_chartofaccounts">I_ChartOfAccounts</a> (Path: <a href="#i_chartofaccounts">I_ChartOfAccounts</a>.<a href="#i_chartofaccounts-chartofaccounts">ChartOfAccounts</a>) via <a href="#generalledgeraccountlineitem-chartofaccounts">ChartOfAccounts</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_clearingaccountingdocument">_ClearingAccountingDocument</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_accountingdocument">I_AccountingDocument</a> (Path: <a href="#i_accountingdocument">I_AccountingDocument</a>.<a href="#i_accountingdocument-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_clearingjournalentry">_ClearingJournalEntry</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_journalentry">I_JournalEntry</a> (Path: <a href="#i_journalentry">I_JournalEntry</a>.<a href="#i_journalentry-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_clearingjrnlentryfiscalyear">_ClearingJrnlEntryFiscalYear</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fiscalyearforcompanycode">I_FiscalYearForCompanyCode</a> (Path: <a href="#i_fiscalyearforcompanycode">I_FiscalYearForCompanyCode</a>.<a href="#i_fiscalyearforcompanycode-fiscalyear">FiscalYear</a>) via <a href="#generalledgeraccountlineitem-clearingjournalentryfiscalyear">ClearingJournalEntryFiscalYear</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_cnsldtnfinancialstatementitem">_CnsldtnFinancialStatementItem</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_cnsldtnfinstmntitem">I_CnsldtnFinStmntItem</a> (Path: <a href="#i_cnsldtnfinstmntitem">I_CnsldtnFinStmntItem</a>.<a href="#i_cnsldtnfinstmntitem-consolidationchartofaccounts">ConsolidationChartOfAccounts</a>) via <a href="#generalledgeraccountlineitem-consolidationchartofaccounts">ConsolidationChartOfAccounts</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_cnsldtnsubitem">_CnsldtnSubitem</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_cnsldtnsubitem">I_CnsldtnSubItem</a> (Path: <a href="#i_cnsldtnsubitem">I_CnsldtnSubItem</a>.<a href="#i_cnsldtnsubitem-subitemcategory">SubItemCategory</a>) via <a href="#generalledgeraccountlineitem-cnsldtnsubitemcategory">CnsldtnSubitemCategory</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_cnsldtnsubitemcategory">_CnsldtnSubitemCategory</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_cnsldtnsubitemcategory">I_CnsldtnSubItemCategory</a> (Path: <a href="#i_cnsldtnsubitemcategory">I_CnsldtnSubItemCategory</a>.<a href="#i_cnsldtnsubitemcategory-subitemcategory">SubItemCategory</a>) via <a href="#generalledgeraccountlineitem-cnsldtnsubitemcategory">CnsldtnSubitemCategory</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_company">_Company</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_globalcompany">I_Globalcompany</a> (Path: <a href="#i_globalcompany">I_Globalcompany</a>.<a href="#i_globalcompany-company">Company</a>) via <a href="#generalledgeraccountlineitem-company">Company</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_companycode">_CompanyCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_companycode">I_CompanyCode</a> (Path: <a href="#i_companycode">I_CompanyCode</a>.<a href="#i_companycode-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_companycodecurrency">_CompanyCodeCurrency</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-companycodecurrency">CompanyCodeCurrency</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_conditioncontract">_ConditionContract</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_conditioncontract">I_ConditionContract</a> (Path: <a href="#i_conditioncontract">I_ConditionContract</a>.<a href="#i_conditioncontract-conditioncontract">ConditionContract</a>) via <a href="#generalledgeraccountlineitem-conditioncontract">ConditionContract</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_consolidationchartofaccounts">_ConsolidationChartOfAccounts</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_cnsldtnchartofaccounts">I_CnsldtnChartOfAccounts</a> (Path: <a href="#i_cnsldtnchartofaccounts">I_CnsldtnChartOfAccounts</a>.<a href="#i_cnsldtnchartofaccounts-consolidationchartofaccounts">ConsolidationChartOfAccounts</a>) via <a href="#generalledgeraccountlineitem-consolidationchartofaccounts">ConsolidationChartOfAccounts</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_consolidationunit">_ConsolidationUnit</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_cnsldtnunit_3">I_CnsldtnUnit_3</a> (Path: <a href="#i_cnsldtnunit_3">I_CnsldtnUnit_3</a>.<a href="#i_cnsldtnunit_3-consolidationunit">ConsolidationUnit</a>) via <a href="#generalledgeraccountlineitem-consolidationunit">ConsolidationUnit</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_controllingarea">_ControllingArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_controllingarea">I_ControllingArea</a> (Path: <a href="#i_controllingarea">I_ControllingArea</a>.<a href="#i_controllingarea-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_controllingdebitcreditcode">_ControllingDebitCreditCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_controllingdebitcreditcode">I_ControllingDebitCreditCode</a> (Path: <a href="#i_controllingdebitcreditcode">I_ControllingDebitCreditCode</a>.<a href="#i_controllingdebitcreditcode-controllingdebitcreditcode">ControllingDebitCreditCode</a>) via <a href="#generalledgeraccountlineitem-controllingdebitcreditcode">ControllingDebitCreditCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_controllingobjectclass">_ControllingObjectClass</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_controllingobjectclass">I_ControllingObjectClass</a> (Path: <a href="#i_controllingobjectclass">I_ControllingObjectClass</a>.<a href="#i_controllingobjectclass-controllingobjectclass">ControllingObjectClass</a>) via <a href="#generalledgeraccountlineitem-controllingobjectclass">ControllingObjectClass</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_costanalysisresource">_CostAnalysisResource</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_costanalysisresource">I_CostAnalysisResource</a> (Path: <a href="#i_costanalysisresource">I_CostAnalysisResource</a>.<a href="#i_costanalysisresource-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_costcenter">_CostCenter</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_costcenter">I_CostCenter</a> (Path: <a href="#i_costcenter">I_CostCenter</a>.<a href="#i_costcenter-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_costctractivitytype">_CostCtrActivityType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_costcenteractivitytype">I_CostCenterActivityType</a> (Path: <a href="#i_costcenteractivitytype">I_CostCenterActivityType</a>.<a href="#i_costcenteractivitytype-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_costorigingroup">_CostOriginGroup</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_costorigingroup">I_CostOriginGroup</a> (Path: <a href="#i_costorigingroup">I_CostOriginGroup</a>.<a href="#i_costorigingroup-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_costsourceunit">_CostSourceUnit</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_unitofmeasure">I_UnitOfMeasure</a> (Path: <a href="#i_unitofmeasure">I_UnitOfMeasure</a>.<a href="#i_unitofmeasure-unitofmeasure">UnitOfMeasure</a>) via <a href="#generalledgeraccountlineitem-costsourceunit">CostSourceUnit</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_countrychartofaccounts">_CountryChartOfAccounts</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_chartofaccounts">I_ChartOfAccounts</a> (Path: <a href="#i_chartofaccounts">I_ChartOfAccounts</a>.<a href="#i_chartofaccounts-chartofaccounts">ChartOfAccounts</a>) via <a href="#generalledgeraccountlineitem-countrychartofaccounts">CountryChartOfAccounts</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_creditriskclass">_CreditRiskClass</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_creditriskclass">I_CreditRiskClass</a> (Path: <a href="#i_creditriskclass">I_CreditRiskClass</a>.<a href="#i_creditriskclass-creditriskclass">CreditRiskClass</a>) via <a href="#generalledgeraccountlineitem-creditriskclass">CreditRiskClass</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_customer">_Customer</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customer">I_Customer</a> (Path: <a href="#i_customer">I_Customer</a>.<a href="#i_customer-customer">Customer</a>) via <a href="#generalledgeraccountlineitem-customer">Customer</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_customercompany">_CustomerCompany</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customercompany">I_CustomerCompany</a> (Path: <a href="#i_customercompany">I_CustomerCompany</a>.<a href="#i_customercompany-customer">Customer</a>) via <a href="#generalledgeraccountlineitem-customer">Customer</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_customergroup">_CustomerGroup</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customergroup">I_CustomerGroup</a> (Path: <a href="#i_customergroup">I_CustomerGroup</a>.<a href="#i_customergroup-customergroup">CustomerGroup</a>) via <a href="#generalledgeraccountlineitem-customergroup">CustomerGroup</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_customersuppliercountry">_CustomerSupplierCountry</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_country">I_Country</a> (Path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#generalledgeraccountlineitem-customersuppliercountry">CustomerSupplierCountry</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_debitcreditcode">_DebitCreditCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_debitcreditcode">I_DebitCreditCode</a> (Path: <a href="#i_debitcreditcode">I_DebitCreditCode</a>.<a href="#i_debitcreditcode-debitcreditcode">DebitCreditCode</a>) via <a href="#generalledgeraccountlineitem-debitcreditcode">DebitCreditCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_distributionchannel">_DistributionChannel</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_distributionchannel">I_DistributionChannel</a> (Path: <a href="#i_distributionchannel">I_DistributionChannel</a>.<a href="#i_distributionchannel-distributionchannel">DistributionChannel</a>) via <a href="#generalledgeraccountlineitem-distributionchannel">DistributionChannel</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_eliminationprofitcenter">_EliminationProfitCenter</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_profitcenter">I_ProfitCenter</a> (Path: <a href="#i_profitcenter">I_ProfitCenter</a>.<a href="#i_profitcenter-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_equipment">_Equipment</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_equipment">I_Equipment</a> (Path: <a href="#i_equipment">I_Equipment</a>.<a href="#i_equipment-equipment">Equipment</a>) via <a href="#generalledgeraccountlineitem-equipment">Equipment</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_financialaccounttype">_FinancialAccountType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_financialaccounttype">I_FinancialAccountType</a> (Path: <a href="#i_financialaccounttype">I_FinancialAccountType</a>.<a href="#i_financialaccounttype-financialaccounttype">FinancialAccountType</a>) via <a href="#generalledgeraccountlineitem-financialaccounttype">FinancialAccountType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_financialmanagementarea">_FinancialManagementArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_financialmanagementarea">I_FinancialManagementArea</a> (Path: <a href="#i_financialmanagementarea">I_FinancialManagementArea</a>.<a href="#i_financialmanagementarea-financialmanagementarea">FinancialManagementArea</a>) via <a href="#generalledgeraccountlineitem-financialmanagementarea">FinancialManagementArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_financialtransactiontype">_FinancialTransactionType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_financialtransactiontype">I_FinancialTransactionType</a> (Path: <a href="#i_financialtransactiontype">I_FinancialTransactionType</a>.<a href="#i_financialtransactiontype-financialtransactiontype">FinancialTransactionType</a>) via <a href="#generalledgeraccountlineitem-financialtransactiontype">FinancialTransactionType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_finvaluationobjecttype">_FinValuationObjectType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_finvaluationobjecttype">I_FinValuationObjectType</a> (Path: <a href="#i_finvaluationobjecttype">I_FinValuationObjectType</a>.<a href="#i_finvaluationobjecttype-financialvaluationobjecttype">FinancialValuationObjectType</a>) via <a href="#generalledgeraccountlineitem-financialvaluationobjecttype">FinancialValuationObjectType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_fiscalcalendardate">_FiscalCalendarDate</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fiscalcalendardate">I_FiscalCalendarDate</a> (Path: <a href="#i_fiscalcalendardate">I_FiscalCalendarDate</a>.<a href="#i_fiscalcalendardate-calendardate">CalendarDate</a>) via <a href="#generalledgeraccountlineitem-postingdate">PostingDate</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_fiscalperiodforvariant">_FiscalPeriodForVariant</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fiscalperiodforvariant">I_FiscalPeriodForVariant</a> (Path: <a href="#i_fiscalperiodforvariant">I_FiscalPeriodForVariant</a>.<a href="#i_fiscalperiodforvariant-fiscalyear">FiscalYear</a>) via <a href="#generalledgeraccountlineitem-ledgerfiscalyear">LedgerFiscalYear</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_fiscalyear">_FiscalYear</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fiscalyearforcompanycode">I_FiscalYearForCompanyCode</a> (Path: <a href="#i_fiscalyearforcompanycode">I_FiscalYearForCompanyCode</a>.<a href="#i_fiscalyearforcompanycode-fiscalyear">FiscalYear</a>) via <a href="#generalledgeraccountlineitem-fiscalyear">FiscalYear</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_fiscalyearperiodforvariant">_FiscalYearPeriodForVariant</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fiscalyearperiodforvariant">I_FiscalYearPeriodForVariant</a> (Path: <a href="#i_fiscalyearperiodforvariant">I_FiscalYearPeriodForVariant</a>.<a href="#i_fiscalyearperiodforvariant-fiscalyearperiod">FiscalYearPeriod</a>) via <a href="#generalledgeraccountlineitem-fiscalyearperiod">FiscalYearPeriod</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_fiscalyearvariant">_FiscalYearVariant</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fiscalyearvariant">I_FiscalYearVariant</a> (Path: <a href="#i_fiscalyearvariant">I_FiscalYearVariant</a>.<a href="#i_fiscalyearvariant-fiscalyearvariant">FiscalYearVariant</a>) via <a href="#generalledgeraccountlineitem-fiscalyearvariant">FiscalYearVariant</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_fixedasset">_FixedAsset</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fixedasset">I_FixedAsset</a> (Path: <a href="#i_fixedasset">I_FixedAsset</a>.<a href="#i_fixedasset-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_freedefinedcurrency1">_FreeDefinedCurrency1</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-freedefinedcurrency1">FreeDefinedCurrency1</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_freedefinedcurrency2">_FreeDefinedCurrency2</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-freedefinedcurrency2">FreeDefinedCurrency2</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_freedefinedcurrency3">_FreeDefinedCurrency3</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-freedefinedcurrency3">FreeDefinedCurrency3</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_freedefinedcurrency4">_FreeDefinedCurrency4</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-freedefinedcurrency4">FreeDefinedCurrency4</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_freedefinedcurrency5">_FreeDefinedCurrency5</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-freedefinedcurrency5">FreeDefinedCurrency5</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_freedefinedcurrency6">_FreeDefinedCurrency6</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-freedefinedcurrency6">FreeDefinedCurrency6</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_freedefinedcurrency7">_FreeDefinedCurrency7</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-freedefinedcurrency7">FreeDefinedCurrency7</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_freedefinedcurrency8">_FreeDefinedCurrency8</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-freedefinedcurrency8">FreeDefinedCurrency8</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_functionalarea">_FunctionalArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_functionalarea">I_FunctionalArea</a> (Path: <a href="#i_functionalarea">I_FunctionalArea</a>.<a href="#i_functionalarea-functionalarea">FunctionalArea</a>) via <a href="#generalledgeraccountlineitem-functionalarea">FunctionalArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_functionalcurrency">_FunctionalCurrency</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-functionalcurrency">FunctionalCurrency</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_functionallocation">_FunctionalLocation</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_functionallocation">I_FunctionalLocation</a> (Path: <a href="#i_functionallocation">I_FunctionalLocation</a>.<a href="#i_functionallocation-functionallocation">FunctionalLocation</a>) via <a href="#generalledgeraccountlineitem-functionallocation">FunctionalLocation</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_fund">_Fund</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fund">I_Fund</a> (Path: <a href="#i_fund">I_Fund</a>.<a href="#i_fund-financialmanagementarea">FinancialManagementArea</a>) via <a href="#generalledgeraccountlineitem-financialmanagementarea">FinancialManagementArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_fundedprogram">_FundedProgram</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fundedprogram">I_FundedProgram</a> (Path: <a href="#i_fundedprogram">I_FundedProgram</a>.<a href="#i_fundedprogram-financialmanagementarea">FinancialManagementArea</a>) via <a href="#generalledgeraccountlineitem-financialmanagementarea">FinancialManagementArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_fundscenter">_FundsCenter</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_fundscenter">I_FundsCenter</a> (Path: <a href="#i_fundscenter">I_FundsCenter</a>.<a href="#i_fundscenter-financialmanagementarea">FinancialManagementArea</a>) via <a href="#generalledgeraccountlineitem-financialmanagementarea">FinancialManagementArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_glaccountinchartofaccounts">_GLAccountInChartOfAccounts</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_glaccountinchartofaccounts">I_GLAccountInChartOfAccounts</a> (Path: <a href="#i_glaccountinchartofaccounts">I_GLAccountInChartOfAccounts</a>.<a href="#i_glaccountinchartofaccounts-chartofaccounts">ChartOfAccounts</a>) via <a href="#generalledgeraccountlineitem-chartofaccounts">ChartOfAccounts</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_glaccountincompanycode">_GLAccountInCompanyCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_glaccountincompanycode">I_GLAccountInCompanyCode</a> (Path: <a href="#i_glaccountincompanycode">I_GLAccountInCompanyCode</a>.<a href="#i_glaccountincompanycode-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_glaccounttype">_GLAccountType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_glaccounttype">I_GLAccountType</a> (Path: <a href="#i_glaccounttype">I_GLAccountType</a>.<a href="#i_glaccounttype-glaccounttype">GLAccountType</a>) via <a href="#generalledgeraccountlineitem-glaccounttype">GLAccountType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_globalcurrency">_GlobalCurrency</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-globalcurrency">GlobalCurrency</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_grant">_Grant</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_grant">I_Grant</a> (Path: <a href="#i_grant">I_Grant</a>.<a href="#i_grant-grantid">GrantID</a>) via <a href="#generalledgeraccountlineitem-grantid">GrantID</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_groupfixedasset">_GroupFixedAsset</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fixedasset">I_FixedAsset</a> (Path: <a href="#i_fixedasset">I_FixedAsset</a>.<a href="#i_fixedasset-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_groupmasterfixedasset">_GroupMasterFixedAsset</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_masterfixedasset">I_MasterFixedAsset</a> (Path: <a href="#i_masterfixedasset">I_MasterFixedAsset</a>.<a href="#i_masterfixedasset-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_incmpltsummablevalnqtyunt">_IncmpltSummableValnQtyUnt</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_unitofmeasure">I_UnitOfMeasure</a> (Path: <a href="#i_unitofmeasure">I_UnitOfMeasure</a>.<a href="#i_unitofmeasure-unitofmeasure">UnitOfMeasure</a>) via <a href="#generalledgeraccountlineitem-incmpltsummablevalnqtyunt">IncmpltSummableValnQtyUnt</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_inventoryspclstksalesdocitm">_InventorySpclStkSalesDocItm</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_salesdocumentitem">I_SalesDocumentItem</a> (Path: <a href="#i_salesdocumentitem">I_SalesDocumentItem</a>.<a href="#i_salesdocumentitem-salesdocument">SalesDocument</a>) via <a href="#generalledgeraccountlineitem-inventoryspclstksalesdocument">InventorySpclStkSalesDocument</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_inventoryspclstksalesdocument">_InventorySpclStkSalesDocument</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_salesdocument">I_SalesDocument</a> (Path: <a href="#i_salesdocument">I_SalesDocument</a>.<a href="#i_salesdocument-salesdocument">SalesDocument</a>) via <a href="#generalledgeraccountlineitem-inventoryspclstksalesdocument">InventorySpclStkSalesDocument</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_inventoryspclstockvalntype">_InventorySpclStockValnType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_invtryspecialstockvalntype">I_InvtrySpecialStockValnType</a> (Path: <a href="#i_invtryspecialstockvalntype">I_InvtrySpecialStockValnType</a>.<a href="#i_invtryspecialstockvalntype-inventoryspecialstockvalntype">InventorySpecialStockValnType</a>) via <a href="#generalledgeraccountlineitem-inventoryspecialstockvalntype">InventorySpecialStockValnType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_inventoryspecialstocksupplier">_InventorySpecialStockSupplier</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_supplier">I_Supplier</a> (Path: <a href="#i_supplier">I_Supplier</a>.<a href="#i_supplier-supplier">Supplier</a>) via <a href="#generalledgeraccountlineitem-inventoryspecialstocksupplier">InventorySpecialStockSupplier</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_inventoryspecialstocktype">_InventorySpecialStockType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_inventoryspecialstocktype">I_InventorySpecialStockType</a> (Path: <a href="#i_inventoryspecialstocktype">I_InventorySpecialStockType</a>.<a href="#i_inventoryspecialstocktype-inventoryspecialstocktype">InventorySpecialStockType</a>) via <a href="#generalledgeraccountlineitem-inventoryspecialstocktype">InventorySpecialStockType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_inventoryspecialstockvalntype">_InventorySpecialStockValnType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_inventoryvaluationtype">I_InventoryValuationType</a> (Path: <a href="#i_inventoryvaluationtype">I_InventoryValuationType</a>.<a href="#i_inventoryvaluationtype-inventoryvaluationtype">InventoryValuationType</a>) via <a href="#generalledgeraccountlineitem-inventoryspecialstockvalntype">InventorySpecialStockValnType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_inventoryvaluationtype">_InventoryValuationType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_inventoryvaluationtype">I_InventoryValuationType</a> (Path: <a href="#i_inventoryvaluationtype">I_InventoryValuationType</a>.<a href="#i_inventoryvaluationtype-inventoryvaluationtype">InventoryValuationType</a>) via <a href="#generalledgeraccountlineitem-inventoryvaluationtype">InventoryValuationType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_invtryspclstkwbselmntbscdata">_InvtrySpclStkWBSElmntBscData</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_wbselementbasicdata">I_WBSElementBasicData</a> (Path: <a href="#i_wbselementbasicdata">I_WBSElementBasicData</a>.<a href="#i_wbselementbasicdata-wbselementinternalid">WBSElementInternalID</a>) via <a href="#generalledgeraccountlineitem-invtryspclstockwbselmntintid">InvtrySpclStockWBSElmntIntID</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_invtryspclstockwbselmntbasic">_InvtrySpclStockWBSElmntBasic</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_wbselementbasicdata">I_WBSElementBasicData</a> (Path: <a href="#i_wbselementbasicdata">I_WBSElementBasicData</a>.<a href="#i_wbselementbasicdata-wbselementinternalid">WBSElementInternalID</a>) via <a href="#generalledgeraccountlineitem-invtryspclstockwbselmntintid">InvtrySpclStockWBSElmntIntID</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_journalentry">_JournalEntry</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_journalentry">I_JournalEntry</a> (Path: <a href="#i_journalentry">I_JournalEntry</a>.<a href="#i_journalentry-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_jrnlentryitemobsoletersn">_JrnlEntryItemObsoleteRsn</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_jrnlentryitemobsoletersn">I_JrnlEntryItemObsoleteRsn</a> (Path: <a href="#i_jrnlentryitemobsoletersn">I_JrnlEntryItemObsoleteRsn</a>.<a href="#i_jrnlentryitemobsoletersn-jrnlentryitemobsoletereason">JrnlEntryItemObsoleteReason</a>) via <a href="#generalledgeraccountlineitem-jrnlentryitemobsoletereason">JrnlEntryItemObsoleteReason</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_ledger">_Ledger</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_ledger">I_Ledger</a> (Path: <a href="#i_ledger">I_Ledger</a>.<a href="#i_ledger-ledger">Ledger</a>) via <a href="#generalledgeraccountlineitem-sourceledger">SourceLedger</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_ledgerfiscalyearforvariant">_LedgerFiscalYearForVariant</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fiscalyearforvariant">I_FiscalYearForVariant</a> (Path: <a href="#i_fiscalyearforvariant">I_FiscalYearForVariant</a>.<a href="#i_fiscalyearforvariant-fiscalyear">FiscalYear</a>) via <a href="#generalledgeraccountlineitem-ledgerfiscalyear">LedgerFiscalYear</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_maintenanceactivitytype">_MaintenanceActivityType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_maintenanceactivitytype">I_MaintenanceActivityType</a> (Path: <a href="#i_maintenanceactivitytype">I_MaintenanceActivityType</a>.<a href="#i_maintenanceactivitytype-maintenanceactivitytype">MaintenanceActivityType</a>) via <a href="#generalledgeraccountlineitem-maintenanceactivitytype">MaintenanceActivityType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_maintenanceorder">_MaintenanceOrder</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_maintenanceorder">I_MaintenanceOrder</a> (Path: <a href="#i_maintenanceorder">I_MaintenanceOrder</a>.<a href="#i_maintenanceorder-maintenanceorder">MaintenanceOrder</a>) via <a href="#generalledgeraccountlineitem-orderid">OrderID</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_maintenanceorderoperation">_MaintenanceOrderOperation</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_maintenanceorderoperation">I_MaintenanceOrderOperation</a> (Path: <a href="#i_maintenanceorderoperation">I_MaintenanceOrderOperation</a>.<a href="#i_maintenanceorderoperation-maintenanceorder">MaintenanceOrder</a>) via <a href="#generalledgeraccountlineitem-orderid">OrderID</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_maintenanceordersuboperation">_MaintenanceOrderSubOperation</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_maintenanceordersuboperation">I_MaintenanceOrderSubOperation</a> (Path: <a href="#i_maintenanceordersuboperation">I_MaintenanceOrderSubOperation</a>.<a href="#i_maintenanceordersuboperation-maintenanceorder">MaintenanceOrder</a>) via <a href="#generalledgeraccountlineitem-orderid">OrderID</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_masterfixedasset">_MasterFixedAsset</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_masterfixedasset">I_MasterFixedAsset</a> (Path: <a href="#i_masterfixedasset">I_MasterFixedAsset</a>.<a href="#i_masterfixedasset-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_movementcategory">_MovementCategory</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_movementcategory">I_MovementCategory</a> (Path: <a href="#i_movementcategory">I_MovementCategory</a>.<a href="#i_movementcategory-assetaccttransclassfctn">AssetAcctTransClassfctn</a>) via <a href="#generalledgeraccountlineitem-assetaccttransclassfctn">AssetAcctTransClassfctn</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_offsettingaccount">_OffsettingAccount</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_offsettingaccount">I_OffsettingAccount</a> (Path: <a href="#i_offsettingaccount">I_OffsettingAccount</a>.<a href="#i_offsettingaccount-chartofaccounts">ChartOfAccounts</a>) via <a href="#generalledgeraccountlineitem-offsettingchartofaccounts">OffsettingChartOfAccounts</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_offsettingaccounttype">_OffsettingAccountType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_financialaccounttype">I_FinancialAccountType</a> (Path: <a href="#i_financialaccounttype">I_FinancialAccountType</a>.<a href="#i_financialaccounttype-financialaccounttype">FinancialAccountType</a>) via <a href="#generalledgeraccountlineitem-offsettingaccounttype">OffsettingAccountType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_offsettingchartofaccounts">_OffsettingChartOfAccounts</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_chartofaccounts">I_ChartOfAccounts</a> (Path: <a href="#i_chartofaccounts">I_ChartOfAccounts</a>.<a href="#i_chartofaccounts-chartofaccounts">ChartOfAccounts</a>) via <a href="#generalledgeraccountlineitem-offsettingchartofaccounts">OffsettingChartOfAccounts</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_operatingconcern">_OperatingConcern</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_operatingconcern">I_OperatingConcern</a> (Path: <a href="#i_operatingconcern">I_OperatingConcern</a>.<a href="#i_operatingconcern-operatingconcern">OperatingConcern</a>) via <a href="#generalledgeraccountlineitem-operatingconcern">OperatingConcern</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_order">_Order</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_order">I_Order</a> (Path: <a href="#i_order">I_Order</a>.<a href="#i_order-orderid">OrderID</a>) via <a href="#generalledgeraccountlineitem-orderid">OrderID</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_ordercategory">_OrderCategory</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_ordercategory">I_OrderCategory</a> (Path: <a href="#i_ordercategory">I_OrderCategory</a>.<a href="#i_ordercategory-ordercategory">OrderCategory</a>) via <a href="#generalledgeraccountlineitem-ordercategory">OrderCategory</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_origincostcenter">_OriginCostCenter</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_costcenter">I_CostCenter</a> (Path: <a href="#i_costcenter">I_CostCenter</a>.<a href="#i_costcenter-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_origincostctractivitytype">_OriginCostCtrActivityType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_costcenteractivitytype">I_CostCenterActivityType</a> (Path: <a href="#i_costcenteractivitytype">I_CostCenterActivityType</a>.<a href="#i_costcenteractivitytype-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_originctrlgdebitcreditcode">_OriginCtrlgDebitCreditCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_controllingdebitcreditcode">I_ControllingDebitCreditCode</a> (Path: <a href="#i_controllingdebitcreditcode">I_ControllingDebitCreditCode</a>.<a href="#i_controllingdebitcreditcode-controllingdebitcreditcode">ControllingDebitCreditCode</a>) via <a href="#generalledgeraccountlineitem-originctrlgdebitcreditcode">OriginCtrlgDebitCreditCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_originorder">_OriginOrder</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_order">I_Order</a> (Path: <a href="#i_order">I_Order</a>.<a href="#i_order-orderid">OrderID</a>) via <a href="#generalledgeraccountlineitem-originorder">OriginOrder</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_originproduct">_OriginProduct</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_product">I_Product</a> (Path: <a href="#i_product">I_Product</a>.<a href="#i_product-product">Product</a>) via <a href="#generalledgeraccountlineitem-originproduct">OriginProduct</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_originprofitcenter">_OriginProfitCenter</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_profitcenter">I_ProfitCenter</a> (Path: <a href="#i_profitcenter">I_ProfitCenter</a>.<a href="#i_profitcenter-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_originsenderobject">_OriginSenderObject</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_controllingobject">I_ControllingObject</a> (Path: <a href="#i_controllingobject">I_ControllingObject</a>.<a href="#i_controllingobject-controllingobject">ControllingObject</a>) via <a href="#generalledgeraccountlineitem-originsenderobject">OriginSenderObject</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerbudgetperiod">_PartnerBudgetPeriod</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_budgetperiod">I_BudgetPeriod</a> (Path: <a href="#i_budgetperiod">I_BudgetPeriod</a>.<a href="#i_budgetperiod-budgetperiod">BudgetPeriod</a>) via <a href="#generalledgeraccountlineitem-partnerbudgetperiod">PartnerBudgetPeriod</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerbusinessarea">_PartnerBusinessArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_businessarea">I_BusinessArea</a> (Path: <a href="#i_businessarea">I_BusinessArea</a>.<a href="#i_businessarea-businessarea">BusinessArea</a>) via <a href="#generalledgeraccountlineitem-partnerbusinessarea">PartnerBusinessArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerbusinessprocess">_PartnerBusinessProcess</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_businessprocess">I_BusinessProcess</a> (Path: <a href="#i_businessprocess">I_BusinessProcess</a>.<a href="#i_businessprocess-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnercompany">_PartnerCompany</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_partnercompany">I_Partnercompany</a> (Path: <a href="#i_partnercompany">I_Partnercompany</a>.<a href="#i_partnercompany-partnercompany">PartnerCompany</a>) via <a href="#generalledgeraccountlineitem-partnercompany">PartnerCompany</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnercompanycode">_PartnerCompanyCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_companycode">I_CompanyCode</a> (Path: <a href="#i_companycode">I_CompanyCode</a>.<a href="#i_companycode-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-partnercompanycode">PartnerCompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerconsolidationunit">_PartnerConsolidationUnit</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_cnsldtnunit_3">I_CnsldtnUnit_3</a> (Path: <a href="#i_cnsldtnunit_3">I_CnsldtnUnit_3</a>.<a href="#i_cnsldtnunit_3-consolidationunit">ConsolidationUnit</a>) via <a href="#generalledgeraccountlineitem-partnerconsolidationunit">PartnerConsolidationUnit</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnercontrollingobjectclass">_PartnerControllingObjectClass</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_controllingobjectclass">I_ControllingObjectClass</a> (Path: <a href="#i_controllingobjectclass">I_ControllingObjectClass</a>.<a href="#i_controllingobjectclass-controllingobjectclass">ControllingObjectClass</a>) via <a href="#generalledgeraccountlineitem-partnercontrollingobjectclass">PartnerControllingObjectClass</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnercostcenter">_PartnerCostCenter</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_costcenter">I_CostCenter</a> (Path: <a href="#i_costcenter">I_CostCenter</a>.<a href="#i_costcenter-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnercostctractivitytype">_PartnerCostCtrActivityType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_costcenteractivitytype">I_CostCenterActivityType</a> (Path: <a href="#i_costcenteractivitytype">I_CostCenterActivityType</a>.<a href="#i_costcenteractivitytype-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerfixedasset">_PartnerFixedAsset</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fixedasset">I_FixedAsset</a> (Path: <a href="#i_fixedasset">I_FixedAsset</a>.<a href="#i_fixedasset-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerfunctionalarea">_PartnerFunctionalArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_functionalarea">I_FunctionalArea</a> (Path: <a href="#i_functionalarea">I_FunctionalArea</a>.<a href="#i_functionalarea-functionalarea">FunctionalArea</a>) via <a href="#generalledgeraccountlineitem-partnerfunctionalarea">PartnerFunctionalArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerfund">_PartnerFund</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fund">I_Fund</a> (Path: <a href="#i_fund">I_Fund</a>.<a href="#i_fund-financialmanagementarea">FinancialManagementArea</a>) via <a href="#generalledgeraccountlineitem-financialmanagementarea">FinancialManagementArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnergrant">_PartnerGrant</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_grant">I_Grant</a> (Path: <a href="#i_grant">I_Grant</a>.<a href="#i_grant-grantid">GrantID</a>) via <a href="#generalledgeraccountlineitem-partnergrant">PartnerGrant</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnermasterfixedasset">_PartnerMasterFixedAsset</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_masterfixedasset">I_MasterFixedAsset</a> (Path: <a href="#i_masterfixedasset">I_MasterFixedAsset</a>.<a href="#i_masterfixedasset-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-companycode">CompanyCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerorder">_PartnerOrder</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_internalorder">I_InternalOrder</a> (Path: <a href="#i_internalorder">I_InternalOrder</a>.<a href="#i_internalorder-internalorder">InternalOrder</a>) via <a href="#generalledgeraccountlineitem-partnerorder">PartnerOrder</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerordercategory">_PartnerOrderCategory</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_ordercategory">I_OrderCategory</a> (Path: <a href="#i_ordercategory">I_OrderCategory</a>.<a href="#i_ordercategory-ordercategory">OrderCategory</a>) via <a href="#generalledgeraccountlineitem-partnerordercategory">PartnerOrderCategory</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerprofitcenter">_PartnerProfitCenter</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_profitcenter">I_ProfitCenter</a> (Path: <a href="#i_profitcenter">I_ProfitCenter</a>.<a href="#i_profitcenter-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerprojectbasicdata">_PartnerProjectBasicData</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_projectbasicdata">I_ProjectBasicData</a> (Path: <a href="#i_projectbasicdata">I_ProjectBasicData</a>.<a href="#i_projectbasicdata-projectinternalid">ProjectInternalID</a>) via <a href="#generalledgeraccountlineitem-partnerprojectinternalid">PartnerProjectInternalID</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnersalesdocument">_PartnerSalesDocument</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_salesdocument">I_SalesDocument</a> (Path: <a href="#i_salesdocument">I_SalesDocument</a>.<a href="#i_salesdocument-salesdocument">SalesDocument</a>) via <a href="#generalledgeraccountlineitem-partnersalesdocument">PartnerSalesDocument</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnersalesdocumentitem">_PartnerSalesDocumentItem</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_salesdocumentitem">I_SalesDocumentItem</a> (Path: <a href="#i_salesdocumentitem">I_SalesDocumentItem</a>.<a href="#i_salesdocumentitem-salesdocument">SalesDocument</a>) via <a href="#generalledgeraccountlineitem-partnersalesdocument">PartnerSalesDocument</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnersegment">_PartnerSegment</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_segment">I_Segment</a> (Path: <a href="#i_segment">I_Segment</a>.<a href="#i_segment-segment">Segment</a>) via <a href="#generalledgeraccountlineitem-partnersegment">PartnerSegment</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerservicedocument">_PartnerServiceDocument</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_srvcdocbydocumenttype">I_SrvcDocByDocumentType</a> (Path: <a href="#i_srvcdocbydocumenttype">I_SrvcDocByDocumentType</a>.<a href="#i_srvcdocbydocumenttype-servicedocumenttype">ServiceDocumentType</a>) via <a href="#generalledgeraccountlineitem-partnerservicedocumenttype">PartnerServiceDocumentType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerservicedocumentitem">_PartnerServiceDocumentItem</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_srvcdocitembydocumenttype">I_SrvcDocItemByDocumentType</a> (Path: <a href="#i_srvcdocitembydocumenttype">I_SrvcDocItemByDocumentType</a>.<a href="#i_srvcdocitembydocumenttype-servicedocumenttype">ServiceDocumentType</a>) via <a href="#generalledgeraccountlineitem-partnerservicedocumenttype">PartnerServiceDocumentType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerservicedocumenttype">_PartnerServiceDocumentType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_servicedocumenttype">I_ServiceDocumentType</a> (Path: <a href="#i_servicedocumenttype">I_ServiceDocumentType</a>.<a href="#i_servicedocumenttype-servicedocumenttype">ServiceDocumentType</a>) via <a href="#generalledgeraccountlineitem-partnerservicedocumenttype">PartnerServiceDocumentType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_partnerwbselementbasicdata">_PartnerWBSElementBasicData</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_wbselementbasicdata">I_WBSElementBasicData</a> (Path: <a href="#i_wbselementbasicdata">I_WBSElementBasicData</a>.<a href="#i_wbselementbasicdata-wbselementinternalid">WBSElementInternalID</a>) via <a href="#generalledgeraccountlineitem-partnerwbselementinternalid">PartnerWBSElementInternalID</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_plant">_Plant</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_plant">I_Plant</a> (Path: <a href="#i_plant">I_Plant</a>.<a href="#i_plant-plant">Plant</a>) via <a href="#generalledgeraccountlineitem-plant">Plant</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_postingkey">_PostingKey</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_postingkey">I_PostingKey</a> (Path: <a href="#i_postingkey">I_PostingKey</a>.<a href="#i_postingkey-postingkey">PostingKey</a>) via <a href="#generalledgeraccountlineitem-postingkey">PostingKey</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_predecessorreferencedoctype">_PredecessorReferenceDocType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_referencedocumenttype">I_ReferenceDocumentType</a> (Path: <a href="#i_referencedocumenttype">I_ReferenceDocumentType</a>.<a href="#i_referencedocumenttype-referencedocumenttype">ReferenceDocumentType</a>) via <a href="#generalledgeraccountlineitem-predecessorreferencedoctype">PredecessorReferenceDocType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_product">_Product</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_product">I_Product</a> (Path: <a href="#i_product">I_Product</a>.<a href="#i_product-product">Product</a>) via <a href="#generalledgeraccountlineitem-product">Product</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_productgroup">_ProductGroup</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_productgroup">I_ProductGroup</a> (Path: <a href="#i_productgroup">I_ProductGroup</a>.<a href="#i_productgroup-materialgroup">MaterialGroup</a>) via <a href="#generalledgeraccountlineitem-productgroup">ProductGroup</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_productgroup_2">_ProductGroup_2</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_productgroup_2">I_ProductGroup_2</a> (Path: <a href="#i_productgroup_2">I_ProductGroup_2</a>.<a href="#i_productgroup_2-productgroup">ProductGroup</a>) via <a href="#generalledgeraccountlineitem-productgroup">ProductGroup</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_profitcenter">_ProfitCenter</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_profitcenter">I_ProfitCenter</a> (Path: <a href="#i_profitcenter">I_ProfitCenter</a>.<a href="#i_profitcenter-controllingarea">ControllingArea</a>) via <a href="#generalledgeraccountlineitem-controllingarea">ControllingArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_projectbasicdata">_ProjectBasicData</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_projectbasicdata">I_ProjectBasicData</a> (Path: <a href="#i_projectbasicdata">I_ProjectBasicData</a>.<a href="#i_projectbasicdata-projectinternalid">ProjectInternalID</a>) via <a href="#generalledgeraccountlineitem-projectinternalid">ProjectInternalID</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_providercontract">_ProviderContract</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_providercontract">I_ProviderContract</a> (Path: <a href="#i_providercontract">I_ProviderContract</a>.<a href="#i_providercontract-providercontract">ProviderContract</a>) via <a href="#generalledgeraccountlineitem-providercontract">ProviderContract</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_providercontractitem">_ProviderContractItem</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_providercontractitem">I_ProviderContractItem</a> (Path: <a href="#i_providercontractitem">I_ProviderContractItem</a>.<a href="#i_providercontractitem-providercontract">ProviderContract</a>) via <a href="#generalledgeraccountlineitem-providercontract">ProviderContract</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_pubsecbudgetaccount">_PubSecBudgetAccount</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_pubsecbudgetaccount">I_PubSecBudgetAccount</a> (Path: <a href="#i_pubsecbudgetaccount">I_PubSecBudgetAccount</a>.<a href="#i_pubsecbudgetaccount-pubsecbudgetaccountcocode">PubSecBudgetAccountCoCode</a>) via <a href="#generalledgeraccountlineitem-pubsecbudgetaccountcocode">PubSecBudgetAccountCoCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_pubsecbudgetaccountcocode">_PubSecBudgetAccountCoCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_companycode">I_CompanyCode</a> (Path: <a href="#i_companycode">I_CompanyCode</a>.<a href="#i_companycode-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-pubsecbudgetaccountcocode">PubSecBudgetAccountCoCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_pubsecbudgetcnsmpnamttype">_PubSecBudgetCnsmpnAmtType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_pubsecbdgtcnsmpnamttype">I_PubSecBdgtCnsmpnAmtType</a> (Path: <a href="#i_pubsecbdgtcnsmpnamttype">I_PubSecBdgtCnsmpnAmtType</a>.<a href="#i_pubsecbdgtcnsmpnamttype-pubsecbudgetcnsmpnamttype">PubSecBudgetCnsmpnAmtType</a>) via <a href="#generalledgeraccountlineitem-pubsecbudgetcnsmpnamttype">PubSecBudgetCnsmpnAmtType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_pubsecbudgetcnsmpndate">_PubSecBudgetCnsmpnDate</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fisccalendardateforcompcode">I_FiscCalendarDateForCompCode</a> (Path: <a href="#i_fisccalendardateforcompcode">I_FiscCalendarDateForCompCode</a>.<a href="#i_fisccalendardateforcompcode-calendardate">CalendarDate</a>) via <a href="#generalledgeraccountlineitem-pubsecbudgetcnsmpndate">PubSecBudgetCnsmpnDate</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_pubsecbudgetcnsmpnfsclperiod">_PubSecBudgetCnsmpnFsclPeriod</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fiscalyearperiodforcmpnycode">I_FiscalYearPeriodForCmpnyCode</a> (Path: <a href="#i_fiscalyearperiodforcmpnycode">I_FiscalYearPeriodForCmpnyCode</a>.<a href="#i_fiscalyearperiodforcmpnycode-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-pubsecbudgetaccountcocode">PubSecBudgetAccountCoCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_pubsecbudgetcnsmpnfsclyear">_PubSecBudgetCnsmpnFsclYear</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_fiscalyearforcompanycode">I_FiscalYearForCompanyCode</a> (Path: <a href="#i_fiscalyearforcompanycode">I_FiscalYearForCompanyCode</a>.<a href="#i_fiscalyearforcompanycode-companycode">CompanyCode</a>) via <a href="#generalledgeraccountlineitem-pubsecbudgetaccountcocode">PubSecBudgetAccountCoCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_pubsecbudgetcnsmpntype">_PubSecBudgetCnsmpnType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_pubsecbdgtcnsmpntype">I_PubSecBdgtCnsmpnType</a> (Path: <a href="#i_pubsecbdgtcnsmpntype">I_PubSecBdgtCnsmpnType</a>.<a href="#i_pubsecbdgtcnsmpntype-pubsecbudgetcnsmpntype">PubSecBudgetCnsmpnType</a>) via <a href="#generalledgeraccountlineitem-pubsecbudgetcnsmpntype">PubSecBudgetCnsmpnType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_referencedocumenttype">_ReferenceDocumentType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_referencedocumenttype">I_ReferenceDocumentType</a> (Path: <a href="#i_referencedocumenttype">I_ReferenceDocumentType</a>.<a href="#i_referencedocumenttype-referencedocumenttype">ReferenceDocumentType</a>) via <a href="#generalledgeraccountlineitem-referencedocumenttype">ReferenceDocumentType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_referencequantityunit">_ReferenceQuantityUnit</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_unitofmeasure">I_UnitOfMeasure</a> (Path: <a href="#i_unitofmeasure">I_UnitOfMeasure</a>.<a href="#i_unitofmeasure-unitofmeasure">UnitOfMeasure</a>) via <a href="#generalledgeraccountlineitem-referencequantityunit">ReferenceQuantityUnit</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_salesdistrict">_SalesDistrict</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_salesdistrict">I_SalesDistrict</a> (Path: <a href="#i_salesdistrict">I_SalesDistrict</a>.<a href="#i_salesdistrict-salesdistrict">SalesDistrict</a>) via <a href="#generalledgeraccountlineitem-salesdistrict">SalesDistrict</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_salesdocument">_SalesDocument</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_salesdocument">I_SalesDocument</a> (Path: <a href="#i_salesdocument">I_SalesDocument</a>.<a href="#i_salesdocument-salesdocument">SalesDocument</a>) via <a href="#generalledgeraccountlineitem-salesdocument">SalesDocument</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_salesdocumentitem">_SalesDocumentItem</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_salesdocumentitem">I_SalesDocumentItem</a> (Path: <a href="#i_salesdocumentitem">I_SalesDocumentItem</a>.<a href="#i_salesdocumentitem-salesdocument">SalesDocument</a>) via <a href="#generalledgeraccountlineitem-salesdocument">SalesDocument</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_salesorganization">_SalesOrganization</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_salesorganization">I_SalesOrganization</a> (Path: <a href="#i_salesorganization">I_SalesOrganization</a>.<a href="#i_salesorganization-salesorganization">SalesOrganization</a>) via <a href="#generalledgeraccountlineitem-salesorganization">SalesOrganization</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_segment">_Segment</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_segment">I_Segment</a> (Path: <a href="#i_segment">I_Segment</a>.<a href="#i_segment-segment">Segment</a>) via <a href="#generalledgeraccountlineitem-segment">Segment</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_semtagglaccount">_SemTagGLAccount</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_semtagglaccount">I_SemTagGLAccount</a> (Path: <a href="#i_semtagglaccount">I_SemTagGLAccount</a>.<a href="#i_semtagglaccount-glaccount">GLAccount</a>) via <a href="#generalledgeraccountlineitem-glaccount">GLAccount</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_servicecontract">_ServiceContract</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_srvcdocbydocumenttype">I_SrvcDocByDocumentType</a> (Path: <a href="#i_srvcdocbydocumenttype">I_SrvcDocByDocumentType</a>.<a href="#i_srvcdocbydocumenttype-servicedocumenttype">ServiceDocumentType</a>) via <a href="#generalledgeraccountlineitem-servicecontracttype">ServiceContractType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_servicecontractitem">_ServiceContractItem</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_srvcdocitembydocumenttype">I_SrvcDocItemByDocumentType</a> (Path: <a href="#i_srvcdocitembydocumenttype">I_SrvcDocItemByDocumentType</a>.<a href="#i_srvcdocitembydocumenttype-servicedocumenttype">ServiceDocumentType</a>) via <a href="#generalledgeraccountlineitem-servicecontracttype">ServiceContractType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_servicecontracttype">_ServiceContractType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_servicedocumenttype">I_ServiceDocumentType</a> (Path: <a href="#i_servicedocumenttype">I_ServiceDocumentType</a>.<a href="#i_servicedocumenttype-servicedocumenttype">ServiceDocumentType</a>) via <a href="#generalledgeraccountlineitem-servicecontracttype">ServiceContractType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_servicedocument">_ServiceDocument</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_srvcdocbydocumenttype">I_SrvcDocByDocumentType</a> (Path: <a href="#i_srvcdocbydocumenttype">I_SrvcDocByDocumentType</a>.<a href="#i_srvcdocbydocumenttype-servicedocumenttype">ServiceDocumentType</a>) via <a href="#generalledgeraccountlineitem-servicedocumenttype">ServiceDocumentType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_servicedocumentitem">_ServiceDocumentItem</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_srvcdocitembydocumenttype">I_SrvcDocItemByDocumentType</a> (Path: <a href="#i_srvcdocitembydocumenttype">I_SrvcDocItemByDocumentType</a>.<a href="#i_srvcdocitembydocumenttype-servicedocumenttype">ServiceDocumentType</a>) via <a href="#generalledgeraccountlineitem-servicedocumenttype">ServiceDocumentType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_servicedocumenttype">_ServiceDocumentType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_servicedocumenttype">I_ServiceDocumentType</a> (Path: <a href="#i_servicedocumenttype">I_ServiceDocumentType</a>.<a href="#i_servicedocumenttype-servicedocumenttype">ServiceDocumentType</a>) via <a href="#generalledgeraccountlineitem-servicedocumenttype">ServiceDocumentType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_shiptoparty">_ShipToParty</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_customer">I_Customer</a> (Path: <a href="#i_customer">I_Customer</a>.<a href="#i_customer-customer">Customer</a>) via <a href="#generalledgeraccountlineitem-shiptoparty">ShipToParty</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_soldproduct">_SoldProduct</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_product">I_Product</a> (Path: <a href="#i_product">I_Product</a>.<a href="#i_product-product">Product</a>) via <a href="#generalledgeraccountlineitem-soldproduct">SoldProduct</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_soldproductgroup">_SoldProductGroup</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_productgroup">I_ProductGroup</a> (Path: <a href="#i_productgroup">I_ProductGroup</a>.<a href="#i_productgroup-materialgroup">MaterialGroup</a>) via <a href="#generalledgeraccountlineitem-soldproductgroup">SoldProductGroup</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_soldproductgroup_2">_SoldProductGroup_2</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_productgroup_2">I_ProductGroup_2</a> (Path: <a href="#i_productgroup_2">I_ProductGroup_2</a>.<a href="#i_productgroup_2-productgroup">ProductGroup</a>) via <a href="#generalledgeraccountlineitem-soldproductgroup">SoldProductGroup</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_specialglcode">_SpecialGLCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_specialglcode">I_SpecialGLCode</a> (Path: <a href="#i_specialglcode">I_SpecialGLCode</a>.<a href="#i_specialglcode-specialglcode">SpecialGLCode</a>) via <a href="#generalledgeraccountlineitem-specialglcode">SpecialGLCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_sponsoredclass">_SponsoredClass</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_sponsoredclasscore">I_SponsoredClassCore</a> (Path: <a href="#i_sponsoredclasscore">I_SponsoredClassCore</a>.<a href="#i_sponsoredclasscore-sponsoredclass">SponsoredClass</a>) via <a href="#generalledgeraccountlineitem-sponsoredclass">SponsoredClass</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_sponsoredprogram">_SponsoredProgram</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_sponsoredprogramcore">I_SponsoredProgramCore</a> (Path: <a href="#i_sponsoredprogramcore">I_SponsoredProgramCore</a>.<a href="#i_sponsoredprogramcore-sponsoredprogram">SponsoredProgram</a>) via <a href="#generalledgeraccountlineitem-sponsoredprogram">SponsoredProgram</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_subledgeracclineitemtype">_SubLedgerAccLineItemType</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_subledgeracclineitemtype">I_SubLedgerAccLineItemType</a> (Path: <a href="#i_subledgeracclineitemtype">I_SubLedgerAccLineItemType</a>.<a href="#i_subledgeracclineitemtype-subledgeracctlineitemtype">SubLedgerAcctLineItemType</a>) via <a href="#generalledgeraccountlineitem-subledgeracctlineitemtype">SubLedgerAcctLineItemType</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_supplier">_Supplier</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_supplier">I_Supplier</a> (Path: <a href="#i_supplier">I_Supplier</a>.<a href="#i_supplier-supplier">Supplier</a>) via <a href="#generalledgeraccountlineitem-supplier">Supplier</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_suppliercompany">_SupplierCompany</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_suppliercompany">I_SupplierCompany</a> (Path: <a href="#i_suppliercompany">I_SupplierCompany</a>.<a href="#i_suppliercompany-supplier">Supplier</a>) via <a href="#generalledgeraccountlineitem-supplier">Supplier</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_taxcode">_TaxCode</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to many <a href="#i_taxcode">I_TaxCode</a> (Path: <a href="#i_taxcode">I_TaxCode</a>.<a href="#i_taxcode-taxcode">TaxCode</a>) via <a href="#generalledgeraccountlineitem-taxcode">TaxCode</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_taxcountry">_TaxCountry</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_country">I_Country</a> (Path: <a href="#i_country">I_Country</a>.<a href="#i_country-country">Country</a>) via <a href="#generalledgeraccountlineitem-taxcountry">TaxCountry</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_timesheetovertimecat">_TimeSheetOvertimeCat</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_timesheetovertimecat">I_TimeSheetOvertimeCat</a> (Path: <a href="#i_timesheetovertimecat">I_TimeSheetOvertimeCat</a>.<a href="#i_timesheetovertimecat-timesheetovertimecategory">TimeSheetOvertimeCategory</a>) via <a href="#generalledgeraccountlineitem-timesheetovertimecategory">TimeSheetOvertimeCategory</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_transactioncurrency">_TransactionCurrency</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_currency">I_Currency</a> (Path: <a href="#i_currency">I_Currency</a>.<a href="#i_currency-currency">Currency</a>) via <a href="#generalledgeraccountlineitem-transactioncurrency">TransactionCurrency</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_valuationarea">_ValuationArea</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_valuationarea">I_ValuationArea</a> (Path: <a href="#i_valuationarea">I_ValuationArea</a>.<a href="#i_valuationarea-valuationarea">ValuationArea</a>) via <a href="#generalledgeraccountlineitem-valuationarea">ValuationArea</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_wbselementbasicdata">_WBSElementBasicData</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_wbselementbasicdata">I_WBSElementBasicData</a> (Path: <a href="#i_wbselementbasicdata">I_WBSElementBasicData</a>.<a href="#i_wbselementbasicdata-wbselementinternalid">WBSElementInternalID</a>) via <a href="#generalledgeraccountlineitem-wbselementinternalid">WBSElementInternalID</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_workcenter">_WorkCenter</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_workcenter">I_WorkCenter</a> (Path: <a href="#i_workcenter">I_WorkCenter</a>.<a href="#i_workcenter-workcenterinternalid">WorkCenterInternalID</a>) via <a href="#generalledgeraccountlineitem-workcenterinternalid">WorkCenterInternalID</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_workpackage">_WorkPackage</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_workpackage">I_WorkPackage</a> (Path: <a href="#i_workpackage">I_WorkPackage</a>.<a href="#i_workpackage-workpackage">WorkPackage</a>) via <a href="#generalledgeraccountlineitem-workpackage">WorkPackage</a></td></tr>
<tr><td><strong id="generalledgeraccountlineitem-_workpackageworkitem">_WorkPackageWorkItem</strong></td><td>cds.Association</td><td><strong>Association</strong>: Links to one <a href="#i_workpackageworkitem">I_WorkPackageWorkItem</a> (Path: <a href="#i_workpackageworkitem">I_WorkPackageWorkItem</a>.<a href="#i_workpackageworkitem-workitem">WorkItem</a>) via <a href="#generalledgeraccountlineitem-workitem">WorkItem</a></td></tr>
</table>

## Type Definitions

### /CPD/PFP_WORKITEM_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>/CPD/PFP_WORKITEM_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>/CPD/PFP_WORKITEM_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>/CPD/PFP_WORKITEM_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### /CPD/PLAN_ITEM_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(50)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>/CPD/PLAN_ITEM_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>/CPD/PLAN_ITEM_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>/CPD/PLAN_ITEM_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### ACCAS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(30)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>ACCAS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>ACCAS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>ACCAS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### ACR_ITEM_TYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(11)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>ACR_ITEM_TYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>ACR_ITEM_TYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>ACR_ITEM_TYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### ACR_LOGSYS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>ACR_LOGSYS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>ACR_LOGSYS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>ACR_LOGSYS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### ACR_OBJ_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(32)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>ACR_OBJ_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>ACR_OBJ_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>ACR_OBJ_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### ACR_OBJ_TYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>ACR_OBJ_TYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>ACR_OBJ_TYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>ACR_OBJ_TYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### ACR_SUBOBJ_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(32)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>ACR_SUBOBJ_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>ACR_SUBOBJ_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>ACR_SUBOBJ_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### ACR_VALUE_DATE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>ACR_VALUE_DATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>ACR_VALUE_DATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>ACR_VALUE_DATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### ANLKL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>ANLKL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>ANLKL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>ANLKL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### ARTPR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>ARTPR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>ARTPR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>ARTPR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### AUFTYP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>enum</strong>: <code>&lbrace;
  "10": &lbrace;
    "val": "10"
  &rbrace;,
  "20": &lbrace;
    "val": "20"
  &rbrace;,
  "30": &lbrace;
    "val": "30"
  &rbrace;,
  "40": &lbrace;
    "val": "40"
  &rbrace;,
  "50": &lbrace;
    "val": "50"
  &rbrace;,
  "60": &lbrace;
    "val": "60"
  &rbrace;,
  "70": &lbrace;
    "val": "70"
  &rbrace;,
  "99": &lbrace;
    "val": "99"
  &rbrace;,
  "01": &lbrace;
    "val": "01"
  &rbrace;,
  "02": &lbrace;
    "val": "02"
  &rbrace;,
  "03": &lbrace;
    "val": "03"
  &rbrace;,
  "04": &lbrace;
    "val": "04"
  &rbrace;,
  "05": &lbrace;
    "val": "05"
  &rbrace;,
  "06": &lbrace;
    "val": "06"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>AUFTYP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>AUFTYP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>AUFTYP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### AUF_PLKNZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "1": &lbrace;
    "val": "1"
  &rbrace;,
  "2": &lbrace;
    "val": "2"
  &rbrace;,
  " ": &lbrace;
    "val": ""
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>AUF_PLKNZ@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>AUF_PLKNZ@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>AUF_PLKNZ@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### AWREF

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>AWREF@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>AWREF@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>AWREF@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### BP_GEBER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>BP_GEBER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>BP_GEBER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>BP_GEBER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### BP_P_GEBER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>BP_P_GEBER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>BP_P_GEBER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>BP_P_GEBER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### BWKEY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>BWKEY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>BWKEY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>BWKEY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### BZDAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>BZDAT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>BZDAT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>BZDAT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### BZIRK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>BZIRK@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>BZIRK@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>BZIRK@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### CATS_OVERTIME_CATEGORY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>CATS_OVERTIME_CATEGORY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>CATS_OVERTIME_CATEGORY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>CATS_OVERTIME_CATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### CLS_RUN_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>CLS_RUN_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>CLS_RUN_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>CLS_RUN_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### CO_BUZEI_ACD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>CO_BUZEI_ACD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>CO_BUZEI_ACD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>CO_BUZEI_ACD@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### CO_POSNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>CO_POSNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>CO_POSNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>CO_POSNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### CO_PRZNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>CO_PRZNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>CO_PRZNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>CO_PRZNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### CO_VORGANG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>CO_VORGANG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>CO_VORGANG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>CO_VORGANG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### CREDIT_RISK_CLASS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>CREDIT_RISK_CLASS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>CREDIT_RISK_CLASS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>CREDIT_RISK_CLASS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### CRMS4_SOLO_NUMBER_INT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>CRMS4_SOLO_NUMBER_INT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>CRMS4_SOLO_NUMBER_INT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>CRMS4_SOLO_NUMBER_INT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### CRMS4_SOLO_OBJECT_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>CRMS4_SOLO_OBJECT_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>CRMS4_SOLO_OBJECT_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>CRMS4_SOLO_OBJECT_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### CR_OBJID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>CR_OBJID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>CR_OBJID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>CR_OBJID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### EQUNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(18)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>EQUNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>EQUNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>EQUNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### ERKRS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>ERKRS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>ERKRS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>ERKRS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FAA_MOVCAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FAA_MOVCAT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FAA_MOVCAT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FAA_MOVCAT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FAC_HKTID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FAC_HKTID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FAC_HKTID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FAC_HKTID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FAC_KTOSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FAC_KTOSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FAC_KTOSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FAC_KTOSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FAC_UMSKZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FAC_UMSKZ@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FAC_UMSKZ@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FAC_UMSKZ@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FAEDT_FPOS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FAEDT_FPOS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FAEDT_FPOS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FAEDT_FPOS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FARP_FISTL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FARP_FISTL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FARP_FISTL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FARP_FISTL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FARP_HBKID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FARP_HBKID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FARP_HBKID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FARP_HBKID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FARP_KOART

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "D": &lbrace;
    "val": "D"
  &rbrace;,
  "K": &lbrace;
    "val": "K"
  &rbrace;,
  "M": &lbrace;
    "val": "M"
  &rbrace;,
  "S": &lbrace;
    "val": "S"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FARP_KOART@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FARP_KOART@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FARP_KOART@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FARP_SGTXT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(50)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FARP_SGTXT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FARP_SGTXT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FARP_SGTXT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FBUDA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FBUDA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FBUDA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FBUDA@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FB_PSEGMENT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FB_PSEGMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FB_PSEGMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FB_PSEGMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FB_SEGMENT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FB_SEGMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FB_SEGMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FB_SEGMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FCO_AUFNR_ORG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FCO_AUFNR_ORG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FCO_AUFNR_ORG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FCO_AUFNR_ORG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FCO_MUV_CODE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "0": &lbrace;
    "val": "0"
  &rbrace;,
  "1": &lbrace;
    "val": "1"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FCO_MUV_CODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FCO_MUV_CODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FCO_MUV_CODE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FCO_PAR_AUFPS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FCO_PAR_AUFPS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FCO_PAR_AUFPS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FCO_PAR_AUFPS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FCO_SRVCONTRACT_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FCO_SRVCONTRACT_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FCO_SRVCONTRACT_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FCO_SRVCONTRACT_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FCO_SRVCONTRACT_ITEM_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FCO_SRVCONTRACT_ITEM_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FCO_SRVCONTRACT_ITEM_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FCO_SRVCONTRACT_ITEM_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FCO_SRVCONTRACT_TYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FCO_SRVCONTRACT_TYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FCO_SRVCONTRACT_TYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FCO_SRVCONTRACT_TYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FCO_SRVDOC_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FCO_SRVDOC_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FCO_SRVDOC_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FCO_SRVDOC_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FCO_SRVDOC_ITEM_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FCO_SRVDOC_ITEM_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FCO_SRVDOC_ITEM_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FCO_SRVDOC_ITEM_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FCO_SRVDOC_TYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FCO_SRVDOC_TYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FCO_SRVDOC_TYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FCO_SRVDOC_TYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIKRS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIKRS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIKRS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIKRS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINOC_ORGL_CHANGE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINOC_ORGL_CHANGE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINOC_ORGL_CHANGE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINOC_ORGL_CHANGE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_CO_BEKNZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "H": &lbrace;
    "val": "H"
  &rbrace;,
  "L": &lbrace;
    "val": "L"
  &rbrace;,
  "S": &lbrace;
    "val": "S"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_CO_BEKNZ@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_CO_BEKNZ@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_CO_BEKNZ@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_CO_OCUR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_CO_OCUR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_CO_OCUR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_CO_OCUR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_CURRFC

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_CURRFC@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_CURRFC@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_CURRFC@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_FISCALPERIOD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_FISCALPERIOD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_FISCALPERIOD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_FISCALPERIOD@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_LEDGER_PERS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_LEDGER_PERS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_LEDGER_PERS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_LEDGER_PERS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_MATKL_PA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(9)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_MATKL_PA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_MATKL_PA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_MATKL_PA@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_MATNR_PA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(40)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_MATNR_PA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_MATNR_PA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_MATNR_PA@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_ORIGIN_PRCTR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_ORIGIN_PRCTR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_ORIGIN_PRCTR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_ORIGIN_PRCTR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_PACCASTY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_PACCASTY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_PACCASTY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_PACCASTY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_PAR_DABRBEZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_PAR_DABRBEZ@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_PAR_DABRBEZ@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_PAR_DABRBEZ@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_PLANNED_PARTS_WORK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_PLANNED_PARTS_WORK@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_PLANNED_PARTS_WORK@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_PLANNED_PARTS_WORK@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_PREC_BELNR_GFC

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_PREC_BELNR_GFC@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_PREC_BELNR_GFC@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_PREC_BELNR_GFC@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_PREC_BUKRS_GFC

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_PREC_BUKRS_GFC@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_PREC_BUKRS_GFC@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_PREC_BUKRS_GFC@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_PREC_DOCLN_GFC

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_PREC_DOCLN_GFC@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_PREC_DOCLN_GFC@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_PREC_DOCLN_GFC@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_PREC_GJAHR_GFC_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_PREC_GJAHR_GFC_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_PREC_GJAHR_GFC_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_PREC_GJAHR_GFC_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_SUBTA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_SUBTA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_SUBTA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_SUBTA@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_USP_LSTAR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_USP_LSTAR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_USP_LSTAR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_USP_LSTAR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_VARC_ORIGIN_GROUP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_VARC_ORIGIN_GROUP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_VARC_ORIGIN_GROUP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_VARC_ORIGIN_GROUP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_XREVERSED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_XREVERSED@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_XREVERSED@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_XREVERSED@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_XREVERSING

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_XREVERSING@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_XREVERSING@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_XREVERSING@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_XSETTLED

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_XSETTLED@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_XSETTLED@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_XSETTLED@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FINS_XSETTLING

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FINS_XSETTLING@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FINS_XSETTLING@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FINS_XSETTLING@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIN_FUCB_SCALE_NUMERATOR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 23<br /><strong>scale</strong>: 3<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIN_FUCB_SCALE_NUMERATOR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIN_FUCB_SCALE_NUMERATOR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIN_FUCB_SCALE_NUMERATOR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ACCASTY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ACCASTY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ACCASTY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ACCASTY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ACCASTY_N1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>enum</strong>: <code>&lbrace;
  "KS": &lbrace;
    "val": "KS"
  &rbrace;,
  "OR": &lbrace;
    "val": "OR"
  &rbrace;,
  "PR": &lbrace;
    "val": "PR"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ACCASTY_N1@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ACCASTY_N1@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ACCASTY_N1@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ACCASTY_N2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>enum</strong>: <code>&lbrace;
  "KS": &lbrace;
    "val": "KS"
  &rbrace;,
  "OR": &lbrace;
    "val": "OR"
  &rbrace;,
  "PR": &lbrace;
    "val": "PR"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ACCASTY_N2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ACCASTY_N2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ACCASTY_N2@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ACCASTY_N3

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>enum</strong>: <code>&lbrace;
  "KS": &lbrace;
    "val": "KS"
  &rbrace;,
  "OR": &lbrace;
    "val": "OR"
  &rbrace;,
  "PR": &lbrace;
    "val": "PR"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ACCASTY_N3@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ACCASTY_N3@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ACCASTY_N3@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ACCASTY_SENDER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ACCASTY_SENDER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ACCASTY_SENDER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ACCASTY_SENDER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ACCAS_SENDER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(30)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ACCAS_SENDER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ACCAS_SENDER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ACCAS_SENDER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ACDOC_MIG_SOURCE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  " ": &lbrace;
    "val": ""
  &rbrace;,
  "F": &lbrace;
    "val": "F"
  &rbrace;,
  "G": &lbrace;
    "val": "G"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;,
  "D": &lbrace;
    "val": "D"
  &rbrace;,
  "I": &lbrace;
    "val": "I"
  &rbrace;,
  "E": &lbrace;
    "val": "E"
  &rbrace;,
  "M": &lbrace;
    "val": "M"
  &rbrace;,
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "P": &lbrace;
    "val": "P"
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
  "N": &lbrace;
    "val": "N"
  &rbrace;,
  "H": &lbrace;
    "val": "H"
  &rbrace;,
  "B": &lbrace;
    "val": "B"
  &rbrace;,
  "J": &lbrace;
    "val": "J"
  &rbrace;,
  "K": &lbrace;
    "val": "K"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ACDOC_MIG_SOURCE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ACDOC_MIG_SOURCE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ACDOC_MIG_SOURCE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ACR_REFOBJ_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(32)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ACR_REFOBJ_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ACR_REFOBJ_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ACR_REFOBJ_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AFABE_D

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AFABE_D@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AFABE_D@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AFABE_D@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AGING

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AGING@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AGING@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AGING@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ALTERNATIVEGLACCOUNT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ALTERNATIVEGLACCOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ALTERNATIVEGLACCOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ALTERNATIVEGLACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ANBWA_VDM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ANBWA_VDM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ANBWA_VDM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ANBWA_VDM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ANLGR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ANLGR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ANLGR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ANLGR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ANLGR2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ANLGR2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ANLGR2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ANLGR2@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ANLN1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ANLN1@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ANLN1@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ANLN1@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ANLN2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ANLN2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ANLN2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ANLN2@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AUFNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AUFNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AUFNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AUFNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AUGBL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AUGBL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AUGBL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AUGBL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AUGBL_DEPRE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AUGBL_DEPRE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AUGBL_DEPRE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AUGBL_DEPRE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AUGDT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AUGDT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AUGDT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AUGDT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AUGGJ_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AUGGJ_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AUGGJ_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AUGGJ_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AUGGJ_NO_CONV_DEPRE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AUGGJ_NO_CONV_DEPRE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AUGGJ_NO_CONV_DEPRE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AUGGJ_NO_CONV_DEPRE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AWITEM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AWITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AWITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AWITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AWITGRP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AWITGRP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AWITGRP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AWITGRP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AWORG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AWORG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AWORG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AWORG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AWORG_REV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AWORG_REV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AWORG_REV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AWORG_REV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AWREF_REV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AWREF_REV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AWREF_REV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AWREF_REV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AWTYP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AWTYP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AWTYP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AWTYP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_AWTYP_REV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_AWTYP_REV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_AWTYP_REV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_AWTYP_REV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BELNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BELNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BELNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BELNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BEMOT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BEMOT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BEMOT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BEMOT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BLART

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BLART@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BLART@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BLART@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BLDAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BLDAT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BLDAT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BLDAT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BP_INOUT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "0": &lbrace;
    "val": "0"
  &rbrace;,
  "1": &lbrace;
    "val": "1"
  &rbrace;,
  "2": &lbrace;
    "val": "2"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BP_INOUT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BP_INOUT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BP_INOUT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BRSCH

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BRSCH@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BRSCH@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BRSCH@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BSCHL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BSCHL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BSCHL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BSCHL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BSTAT

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
  "D": &lbrace;
    "val": "D"
  &rbrace;,
  "L": &lbrace;
    "val": "L"
  &rbrace;,
  "M": &lbrace;
    "val": "M"
  &rbrace;,
  "S": &lbrace;
    "val": "S"
  &rbrace;,
  "V": &lbrace;
    "val": "V"
  &rbrace;,
  "W": &lbrace;
    "val": "W"
  &rbrace;,
  "Z": &lbrace;
    "val": "Z"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;,
  "U": &lbrace;
    "val": "U"
  &rbrace;,
  "O": &lbrace;
    "val": "O"
  &rbrace;,
  "T": &lbrace;
    "val": "T"
  &rbrace;,
  "P": &lbrace;
    "val": "P"
  &rbrace;,
  "J": &lbrace;
    "val": "J"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BSTAT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BSTAT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BSTAT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BTTYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BUDAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BUDAT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BUDAT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BUDAT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BUKRS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BUKRS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BUKRS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BUKRS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BUKRS_SENDER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BUKRS_SENDER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BUKRS_SENDER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BUKRS_SENDER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BUZEI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BUZEI@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BUZEI@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BUZEI@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_BWTAR_D

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_BWTAR_D@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_BWTAR_D@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_BWTAR_D@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CLOSINGSTEP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CLOSINGSTEP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CLOSINGSTEP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CLOSINGSTEP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CONTRACT_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(14)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CONTRACT_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CONTRACT_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CONTRACT_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CO_BELKZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "H": &lbrace;
    "val": "H"
  &rbrace;,
  "L": &lbrace;
    "val": "L"
  &rbrace;,
  "S": &lbrace;
    "val": "S"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CO_BELKZ@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CO_BELKZ@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CO_BELKZ@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CO_MEINH

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CO_MEINH@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CO_MEINH@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CO_MEINH@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CO_RESOURCE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CO_RESOURCE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CO_RESOURCE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CO_RESOURCE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CPDAT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CPDAT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CPDAT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CPDAT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CREATION_DATETIME

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.DateTime</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CREATION_DATETIME@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CREATION_DATETIME@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CREATION_DATETIME@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CURR3

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CURR3@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CURR3@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CURR3@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CURR4

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CURR4@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CURR4@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CURR4@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CURR5

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CURR5@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CURR5@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CURR5@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CURR6

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CURR6@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CURR6@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CURR6@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CURR8

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CURR8@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CURR8@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CURR8@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_CUSTBTTYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_CUSTBTTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_CUSTBTTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_CUSTBTTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_DABRBEZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_DABRBEZ@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_DABRBEZ@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_DABRBEZ@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_DOCLN

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_DOCLN@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_DOCLN@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_DOCLN@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_DOCNR_LD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_DOCNR_LD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_DOCNR_LD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_DOCNR_LD@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_DSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_DSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_DSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_DSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_DZEKKN

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_DZEKKN@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_DZEKKN@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_DZEKKN@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_EBELN

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_EBELN@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_EBELN@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_EBELN@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_EBELP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_EBELP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_EBELP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_EBELP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_EPRCTR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_EPRCTR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_EPRCTR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_EPRCTR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ESL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ESL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ESL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ESL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_FCO_MEFBTR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 23<br /><strong>scale</strong>: 3<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_FCO_MEFBTR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_FCO_MEFBTR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_FCO_MEFBTR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_FCO_MEGBTR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 23<br /><strong>scale</strong>: 3<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_FCO_MEGBTR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_FCO_MEGBTR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_FCO_MEGBTR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_FCO_MEINH

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_FCO_MEINH@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_FCO_MEINH@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_FCO_MEINH@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_FC_SITEM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_FC_SITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_FC_SITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_FC_SITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_FC_SITYP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_FC_SITYP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_FC_SITYP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_FC_SITYP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_FFS_BRANCH_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_FFS_BRANCH_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_FFS_BRANCH_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_FFS_BRANCH_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_FFS_DATASOURCE_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_FFS_DATASOURCE_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_FFS_DATASOURCE_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_FFS_DATASOURCE_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_FFS_PRODUCT_GROUP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_FFS_PRODUCT_GROUP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_FFS_PRODUCT_GROUP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_FFS_PRODUCT_GROUP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_FM_PBUDGET_PERIOD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_FM_PBUDGET_PERIOD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_FM_PBUDGET_PERIOD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_FM_PBUDGET_PERIOD@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_FSI_ITEM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_FSI_ITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_FSI_ITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_FSI_ITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_FSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_FSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_FSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_FSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_FUCB_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_FUCB_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_FUCB_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_FUCB_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_GJAHR_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_GJAHR_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_GJAHR_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_GJAHR_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_GKOAR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "A": &lbrace;
    "val": "A"
  &rbrace;,
  "D": &lbrace;
    "val": "D"
  &rbrace;,
  "K": &lbrace;
    "val": "K"
  &rbrace;,
  "M": &lbrace;
    "val": "M"
  &rbrace;,
  "S": &lbrace;
    "val": "S"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_GKOAR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_GKOAR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_GKOAR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_GKONT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_GKONT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_GKONT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_GKONT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_GSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_GSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_GSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_GSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_HDR_TECHNICAL_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_HDR_TECHNICAL_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_HDR_TECHNICAL_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_HDR_TECHNICAL_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_HFSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_HFSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_HFSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_HFSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_HOART

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>enum</strong>: <code>&lbrace;
  "10": &lbrace;
    "val": "10"
  &rbrace;,
  "11": &lbrace;
    "val": "11"
  &rbrace;,
  "12": &lbrace;
    "val": "12"
  &rbrace;,
  "13": &lbrace;
    "val": "13"
  &rbrace;,
  "14": &lbrace;
    "val": "14"
  &rbrace;,
  "15": &lbrace;
    "val": "15"
  &rbrace;,
  "16": &lbrace;
    "val": "16"
  &rbrace;,
  "17": &lbrace;
    "val": "17"
  &rbrace;,
  "18": &lbrace;
    "val": "18"
  &rbrace;,
  "19": &lbrace;
    "val": "19"
  &rbrace;,
  "20": &lbrace;
    "val": "20"
  &rbrace;,
  "21": &lbrace;
    "val": "21"
  &rbrace;,
  "22": &lbrace;
    "val": "22"
  &rbrace;,
  "23": &lbrace;
    "val": "23"
  &rbrace;,
  "24": &lbrace;
    "val": "24"
  &rbrace;,
  "25": &lbrace;
    "val": "25"
  &rbrace;,
  "26": &lbrace;
    "val": "26"
  &rbrace;,
  "27": &lbrace;
    "val": "27"
  &rbrace;,
  "28": &lbrace;
    "val": "28"
  &rbrace;,
  "29": &lbrace;
    "val": "29"
  &rbrace;,
  "31": &lbrace;
    "val": "31"
  &rbrace;,
  "32": &lbrace;
    "val": "32"
  &rbrace;,
  "33": &lbrace;
    "val": "33"
  &rbrace;,
  "34": &lbrace;
    "val": "34"
  &rbrace;,
  "35": &lbrace;
    "val": "35"
  &rbrace;,
  "36": &lbrace;
    "val": "36"
  &rbrace;,
  "38": &lbrace;
    "val": "38"
  &rbrace;,
  "39": &lbrace;
    "val": "39"
  &rbrace;,
  "40": &lbrace;
    "val": "40"
  &rbrace;,
  "41": &lbrace;
    "val": "41"
  &rbrace;,
  "42": &lbrace;
    "val": "42"
  &rbrace;,
  "43": &lbrace;
    "val": "43"
  &rbrace;,
  "44": &lbrace;
    "val": "44"
  &rbrace;,
  "45": &lbrace;
    "val": "45"
  &rbrace;,
  "46": &lbrace;
    "val": "46"
  &rbrace;,
  "47": &lbrace;
    "val": "47"
  &rbrace;,
  "48": &lbrace;
    "val": "48"
  &rbrace;,
  "88": &lbrace;
    "val": "88"
  &rbrace;,
  "98": &lbrace;
    "val": "98"
  &rbrace;,
  "99": &lbrace;
    "val": "99"
  &rbrace;,
  "01": &lbrace;
    "val": "01"
  &rbrace;,
  "02": &lbrace;
    "val": "02"
  &rbrace;,
  "03": &lbrace;
    "val": "03"
  &rbrace;,
  "04": &lbrace;
    "val": "04"
  &rbrace;,
  "05": &lbrace;
    "val": "05"
  &rbrace;,
  "06": &lbrace;
    "val": "06"
  &rbrace;,
  "07": &lbrace;
    "val": "07"
  &rbrace;,
  "08": &lbrace;
    "val": "08"
  &rbrace;,
  "09": &lbrace;
    "val": "09"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_HOART@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_HOART@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_HOART@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_HSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_HSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_HSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_HSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_HWAER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_HWAER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_HWAER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_HWAER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_INCRMNT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(15)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_INCRMNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_INCRMNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_INCRMNT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_INVENTORYSPCLSTOCKVALNTYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  " ": &lbrace;
    "val": ""
  &rbrace;,
  "M": &lbrace;
    "val": "M"
  &rbrace;,
  "A": &lbrace;
    "val": "A"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_INVENTORYSPCLSTOCKVALNTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_INVENTORYSPCLSTOCKVALNTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_INVENTORYSPCLSTOCKVALNTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_INVENTORYSPECIALSTOCKTYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_INVENTORYSPECIALSTOCKTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_INVENTORYSPECIALSTOCKTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_INVENTORYSPECIALSTOCKTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_INVSPSTOCK_WBSINT_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_INVSPSTOCK_WBSINT_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_INVSPSTOCK_WBSINT_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_INVSPSTOCK_WBSINT_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_INVSPSTOCK_WBS_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(24)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_INVSPSTOCK_WBS_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_INVSPSTOCK_WBS_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_INVSPSTOCK_WBS_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ITCLG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ITCLG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ITCLG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ITCLG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_JAHRPER_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(7)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_JAHRPER_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_JAHRPER_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_JAHRPER_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_KALNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_KALNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_KALNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_KALNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_KBLERLKZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_KBLERLKZ@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_KBLERLKZ@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_KBLERLKZ@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_KBLNR_FI

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_KBLNR_FI@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_KBLNR_FI@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_KBLNR_FI@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_KBLPOS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_KBLPOS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_KBLPOS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_KBLPOS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_KFSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_KFSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_KFSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_KFSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_KOKRS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_KOKRS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_KOKRS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_KOKRS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_KONZS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_KONZS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_KONZS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_KONZS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_KOSTL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_KOSTL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_KOSTL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_KOSTL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_KSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_KSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_KSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_KSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_KTOP2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_KTOP2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_KTOP2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_KTOP2@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_KTOPL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_KTOPL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_KTOPL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_KTOPL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_LAND1_GP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_LAND1_GP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_LAND1_GP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_LAND1_GP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_LASTCHANGE_DATETIME

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.DateTime</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_LASTCHANGE_DATETIME@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_LASTCHANGE_DATETIME@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_LASTCHANGE_DATETIME@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_LCRCY_SP_VALUE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_LCRCY_SP_VALUE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_LCRCY_SP_VALUE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_LCRCY_SP_VALUE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_LINETYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_LINETYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_LINETYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_LINETYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_MATKL_MM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(9)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_MATKL_MM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_MATKL_MM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_MATKL_MM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_MD_BUNIT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(18)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_MD_BUNIT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_MD_BUNIT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_MD_BUNIT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_MD_BUPTR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(18)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_MD_BUPTR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_MD_BUPTR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_MD_BUPTR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_MLMAT_KDAUF

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_MLMAT_KDAUF@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_MLMAT_KDAUF@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_MLMAT_KDAUF@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_MLMAT_KDPOS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_MLMAT_KDPOS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_MLMAT_KDPOS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_MLMAT_KDPOS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_MLMAT_LIFNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_MLMAT_LIFNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_MLMAT_LIFNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_MLMAT_LIFNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_MLXOBEW

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_MLXOBEW@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_MLXOBEW@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_MLXOBEW@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ML_QSBVALT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ML_QSBVALT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ML_QSBVALT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ML_QSBVALT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ML_QSPROCESS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ML_QSPROCESS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ML_QSPROCESS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ML_QSPROCESS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_MWSKZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_MWSKZ@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_MWSKZ@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_MWSKZ@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_NPVRG_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_NPVRG_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_NPVRG_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_NPVRG_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_OBJNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(22)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_OBJNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_OBJNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_OBJNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_OBSOLETE_ITEM_REASON

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "1": &lbrace;
    "val": "1"
  &rbrace;,
  "2": &lbrace;
    "val": "2"
  &rbrace;,
  "3": &lbrace;
    "val": "3"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_OBSOLETE_ITEM_REASON@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_OBSOLETE_ITEM_REASON@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_OBSOLETE_ITEM_REASON@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_OFFSETTINGKTOPL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_OFFSETTINGKTOPL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_OFFSETTINGKTOPL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_OFFSETTINGKTOPL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ORIGIN_MATNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(40)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ORIGIN_MATNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ORIGIN_MATNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ORIGIN_MATNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ORIGIN_ORDER_OPERATION

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ORIGIN_ORDER_OPERATION@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ORIGIN_ORDER_OPERATION@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ORIGIN_ORDER_OPERATION@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_OSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_OSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_OSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_OSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PACCAS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(30)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PACCAS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PACCAS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PACCAS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PANL1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PANL1@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PANL1@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PANL1@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PANL2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PANL2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PANL2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PANL2@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PARGB

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PARGB@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PARGB@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PARGB@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PARTNER_WBSINT_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PARTNER_WBSINT_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PARTNER_WBSINT_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PARTNER_WBSINT_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PARTNER_WBS_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(24)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PARTNER_WBS_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PARTNER_WBS_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PARTNER_WBS_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PART_PROJECTINT_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PART_PROJECTINT_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PART_PROJECTINT_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PART_PROJECTINT_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PART_PROJECT_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(24)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PART_PROJECT_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PART_PROJECT_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PART_PROJECT_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PAR_AUFNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PAR_AUFNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PAR_AUFNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PAR_AUFNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PAR_AUFTYP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>enum</strong>: <code>&lbrace;
  "10": &lbrace;
    "val": "10"
  &rbrace;,
  "20": &lbrace;
    "val": "20"
  &rbrace;,
  "30": &lbrace;
    "val": "30"
  &rbrace;,
  "40": &lbrace;
    "val": "40"
  &rbrace;,
  "50": &lbrace;
    "val": "50"
  &rbrace;,
  "60": &lbrace;
    "val": "60"
  &rbrace;,
  "70": &lbrace;
    "val": "70"
  &rbrace;,
  "99": &lbrace;
    "val": "99"
  &rbrace;,
  "01": &lbrace;
    "val": "01"
  &rbrace;,
  "02": &lbrace;
    "val": "02"
  &rbrace;,
  "03": &lbrace;
    "val": "03"
  &rbrace;,
  "04": &lbrace;
    "val": "04"
  &rbrace;,
  "05": &lbrace;
    "val": "05"
  &rbrace;,
  "06": &lbrace;
    "val": "06"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PAR_AUFTYP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PAR_AUFTYP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PAR_AUFTYP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PAR_KDAUF

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PAR_KDAUF@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PAR_KDAUF@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PAR_KDAUF@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PAR_KDPOS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PAR_KDPOS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PAR_KDPOS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PAR_KDPOS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PAR_LSTAR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PAR_LSTAR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PAR_LSTAR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PAR_LSTAR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PAR_NPLN

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PAR_NPLN@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PAR_NPLN@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PAR_NPLN@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PAR_PRZNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PAR_PRZNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PAR_PRZNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PAR_PRZNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PAR_VORNR_AUF_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PAR_VORNR_AUF_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PAR_VORNR_AUF_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PAR_VORNR_AUF_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PBUKRS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PBUKRS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PBUKRS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PBUKRS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PERAF

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PERAF@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PERAF@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PERAF@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PERIV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PERIV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PERIV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PERIV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PFSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PFSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PFSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PFSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_POB_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_POB_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_POB_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_POB_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PPRCTR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PPRCTR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PPRCTR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PPRCTR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PRCTR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PRCTR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PRCTR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PRCTR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PREC_AWITEM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PREC_AWITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PREC_AWITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PREC_AWITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PREC_AWORG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PREC_AWORG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PREC_AWORG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PREC_AWORG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PREC_AWREF

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PREC_AWREF@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PREC_AWREF@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PREC_AWREF@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PREC_AWTYP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PREC_AWTYP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PREC_AWTYP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PREC_AWTYP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PROJECTINT_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PROJECTINT_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PROJECTINT_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PROJECTINT_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PROJECT_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(24)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PROJECT_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PROJECT_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PROJECT_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PSCOPE_CV_CONV_CO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>enum</strong>: <code>&lbrace;
  "OC": &lbrace;
    "val": "OC"
  &rbrace;,
  "IV": &lbrace;
    "val": "IV"
  &rbrace;,
  "PR": &lbrace;
    "val": "PR"
  &rbrace;,
  "PA": &lbrace;
    "val": "PA"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PSCOPE_CV_CONV_CO@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PSCOPE_CV_CONV_CO@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PSCOPE_CV_CONV_CO@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PSRVDOC_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PSRVDOC_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PSRVDOC_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PSRVDOC_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PSRVDOC_ITEM_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PSRVDOC_ITEM_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PSRVDOC_ITEM_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PSRVDOC_ITEM_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_PSRVDOC_TYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_PSRVDOC_TYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_PSRVDOC_TYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_PSRVDOC_TYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_QMNUM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_QMNUM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_QMNUM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_QMNUM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_QUAN1_12_FIX

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 23<br /><strong>scale</strong>: 3<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_QUAN1_12_FIX@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_QUAN1_12_FIX@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_QUAN1_12_FIX@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_QUAN1_L

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 23<br /><strong>scale</strong>: 3<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_QUAN1_L@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_QUAN1_L@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_QUAN1_L@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_QUAN2_L

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 23<br /><strong>scale</strong>: 3<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_QUAN2_L@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_QUAN2_L@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_QUAN2_L@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_QUAN3_L

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 23<br /><strong>scale</strong>: 3<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_QUAN3_L@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_QUAN3_L@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_QUAN3_L@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_QUNIT1

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_QUNIT1@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_QUNIT1@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_QUNIT1@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_QUNIT2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_QUNIT2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_QUNIT2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_QUNIT2@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_QUNIT3

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_QUNIT3@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_QUNIT3@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_QUNIT3@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RACCT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RACCT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RACCT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RACCT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RACCT_SENDER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RACCT_SENDER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RACCT_SENDER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RACCT_SENDER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RASSC

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RASSC@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RASSC@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RASSC@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RBUSA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RBUSA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RBUSA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RBUSA@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RCOMP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RCOMP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RCOMP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RCOMP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_REBZG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_REBZG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_REBZG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_REBZG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_REBZJ_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_REBZJ_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_REBZJ_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_REBZJ_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_REBZT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_REBZT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_REBZT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_REBZT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_REBZZ

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_REBZZ@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_REBZZ@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_REBZZ@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_REFBTYP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>enum</strong>: <code>&lbrace;
  "100": &lbrace;
    "val": "100"
  &rbrace;,
  "110": &lbrace;
    "val": "110"
  &rbrace;,
  "200": &lbrace;
    "val": "200"
  &rbrace;,
  "010": &lbrace;
    "val": "010"
  &rbrace;,
  "020": &lbrace;
    "val": "020"
  &rbrace;,
  "030": &lbrace;
    "val": "030"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_REFBTYP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_REFBTYP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_REFBTYP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_REF_QTY_UOM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_REF_QTY_UOM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_REF_QTY_UOM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_REF_QTY_UOM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RE_ACCOUNT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RE_ACCOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RE_ACCOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RE_ACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RE_BUKRS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RE_BUKRS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RE_BUKRS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RE_BUKRS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RFCUR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RFCUR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RFCUR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RFCUR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RKCUR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RKCUR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RKCUR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RKCUR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RMVCT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RMVCT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RMVCT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RMVCT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ROCUR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ROCUR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ROCUR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ROCUR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RTCUR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RTCUR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RTCUR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RTCUR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RVCUR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RVCUR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RVCUR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RVCUR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RWCUR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RWCUR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RWCUR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RWCUR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_RYEAR_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_RYEAR_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_RYEAR_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_RYEAR_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_SCOPE_CV_CONV_CO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>enum</strong>: <code>&lbrace;
  "OC": &lbrace;
    "val": "OC"
  &rbrace;,
  "IV": &lbrace;
    "val": "IV"
  &rbrace;,
  "PR": &lbrace;
    "val": "PR"
  &rbrace;,
  "PA": &lbrace;
    "val": "PA"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_SCOPE_CV_CONV_CO@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_SCOPE_CV_CONV_CO@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_SCOPE_CV_CONV_CO@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_SFKBER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_SFKBER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_SFKBER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_SFKBER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_SHKZG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "H": &lbrace;
    "val": "H"
  &rbrace;,
  "S": &lbrace;
    "val": "S"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_SHKZG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_SHKZG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_SHKZG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_SKOST

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_SKOST@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_SKOST@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_SKOST@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_SRC_AWITEM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_SRC_AWITEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_SRC_AWITEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_SRC_AWITEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_SRC_AWORG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_SRC_AWORG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_SRC_AWORG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_SRC_AWORG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_SRC_AWREF

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_SRC_AWREF@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_SRC_AWREF@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_SRC_AWREF@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_SRC_AWSUBIT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_SRC_AWSUBIT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_SRC_AWSUBIT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_SRC_AWSUBIT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_SRC_AWSYS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_SRC_AWSYS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_SRC_AWSYS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_SRC_AWSYS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_SRC_AWTYP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_SRC_AWTYP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_SRC_AWTYP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_SRC_AWTYP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_SUBTA_REV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_SUBTA_REV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_SUBTA_REV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_SUBTA_REV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_TSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_TSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_TSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_TSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_USNAM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_USNAM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_USNAM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_USNAM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_USPOB

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(22)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_USPOB@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_USPOB@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_USPOB@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_USP_KOSTL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_USP_KOSTL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_USP_KOSTL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_USP_KOSTL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_UVORN_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_UVORN_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_UVORN_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_UVORN_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VAL_OBJ_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(32)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VAL_OBJ_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VAL_OBJ_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VAL_OBJ_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VAL_OBJ_TYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VAL_OBJ_TYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VAL_OBJ_TYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VAL_OBJ_TYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VAL_SUBOBJ_ID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(32)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VAL_SUBOBJ_ID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VAL_SUBOBJ_ID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VAL_SUBOBJ_ID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VARC_ORIGIN_ACCT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VARC_ORIGIN_ACCT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VARC_ORIGIN_ACCT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VARC_ORIGIN_ACCT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VCO_OCUR12

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VCO_OCUR12@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VCO_OCUR12@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VCO_OCUR12@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VFCCUR12

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VFCCUR12@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VFCCUR12@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VFCCUR12@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VGCUR12_FIX2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VGCUR12_FIX2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VGCUR12_FIX2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VGCUR12_FIX2@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VGCUR12_FIX3

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VGCUR12_FIX3@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VGCUR12_FIX3@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VGCUR12_FIX3@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VORGN

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VORGN@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VORGN@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VORGN@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VORNR_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VORNR_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VORNR_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VORNR_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VPCUR12_2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VPCUR12_2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VPCUR12_2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VPCUR12_2@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VPCUR12_3

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VPCUR12_3@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VPCUR12_3@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VPCUR12_3@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VPFCUR12_2

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VPFCUR12_2@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VPFCUR12_2@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VPFCUR12_2@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VPFCUR12_3

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VPFCUR12_3@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VPFCUR12_3@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VPFCUR12_3@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VQUAN1_12

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 23<br /><strong>scale</strong>: 3<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VQUAN1_12@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VQUAN1_12@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VQUAN1_12@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VQUAN1_12_FIX

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 23<br /><strong>scale</strong>: 3<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VQUAN1_12_FIX@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VQUAN1_12_FIX@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VQUAN1_12_FIX@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VTKEY_KK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(20)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VTKEY_KK@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VTKEY_KK@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VTKEY_KK@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_VTPOS_KK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_VTPOS_KK@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_VTPOS_KK@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_VTPOS_KK@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_WBSINT_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_WBSINT_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_WBSINT_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_WBSINT_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_WBS_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(24)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_WBS_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_WBS_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_WBS_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_WFSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_WFSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_WFSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_WFSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_WSL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_WSL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_WSL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_WSL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_XCOMMITMENT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_XCOMMITMENT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_XCOMMITMENT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_XCOMMITMENT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_XOPVW

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "X": &lbrace;
    "val": "X"
  &rbrace;,
  " ": &lbrace;
    "val": ""
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_XOPVW@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_XOPVW@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_XOPVW@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FIS_ZUONR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(18)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FIS_ZUONR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FIS_ZUONR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FIS_ZUONR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FKART

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FKART@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FKART@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FKART@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FML_CATEGORY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>enum</strong>: <code>&lbrace;
  "ZU": &lbrace;
    "val": "ZU"
  &rbrace;,
  "VP": &lbrace;
    "val": "VP"
  &rbrace;,
  "VN": &lbrace;
    "val": "VN"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FML_CATEGORY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FML_CATEGORY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FML_CATEGORY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FML_PRICE_CONTROL

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "S": &lbrace;
    "val": "S"
  &rbrace;,
  "V": &lbrace;
    "val": "V"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FML_PRICE_CONTROL@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FML_PRICE_CONTROL@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FML_PRICE_CONTROL@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FML_PROCESS_TYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FML_PROCESS_TYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FML_PROCESS_TYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FML_PROCESS_TYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FM_BUDGET_PERIOD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FM_BUDGET_PERIOD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FM_BUDGET_PERIOD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FM_BUDGET_PERIOD@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FM_FAREA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(16)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FM_FAREA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FM_FAREA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FM_FAREA@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FM_FIPEX

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(24)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FM_FIPEX@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FM_FIPEX@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FM_FIPEX@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FM_MEASURE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(24)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FM_MEASURE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FM_MEASURE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FM_MEASURE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FM_PEROP_FI_HIGH

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FM_PEROP_FI_HIGH@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FM_PEROP_FI_HIGH@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FM_PEROP_FI_HIGH@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FM_PEROP_FI_LOW

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FM_PEROP_FI_LOW@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FM_PEROP_FI_LOW@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FM_PEROP_FI_LOW@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### FOT_TAX_COUNTRY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>FOT_TAX_COUNTRY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>FOT_TAX_COUNTRY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>FOT_TAX_COUNTRY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### GLACCOUNT_TYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
  "X": &lbrace;
    "val": "X"
  &rbrace;,
  "N": &lbrace;
    "val": "N"
  &rbrace;,
  "P": &lbrace;
    "val": "P"
  &rbrace;,
  "S": &lbrace;
    "val": "S"
  &rbrace;,
  "C": &lbrace;
    "val": "C"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>GLACCOUNT_TYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>GLACCOUNT_TYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>GLACCOUNT_TYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### GM_BDGT_VLDTY_NBR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>GM_BDGT_VLDTY_NBR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>GM_BDGT_VLDTY_NBR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>GM_BDGT_VLDTY_NBR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### GM_GRANT_AMOUNT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 34<br /><strong>scale</strong>: floating<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>GM_GRANT_AMOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>GM_GRANT_AMOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>GM_GRANT_AMOUNT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### GM_GRANT_CURRENCY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>GM_GRANT_CURRENCY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>GM_GRANT_CURRENCY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>GM_GRANT_CURRENCY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### GM_GRANT_NBR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(20)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>GM_GRANT_NBR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>GM_GRANT_NBR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>GM_GRANT_NBR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### GM_GRANT_PARTNER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(20)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>GM_GRANT_PARTNER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>GM_GRANT_PARTNER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>GM_GRANT_PARTNER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### GM_SPONSORED_CLASS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(20)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>GM_SPONSORED_CLASS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>GM_SPONSORED_CLASS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>GM_SPONSORED_CLASS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### GM_SPONSORED_PROG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(20)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>GM_SPONSORED_PROG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>GM_SPONSORED_PROG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>GM_SPONSORED_PROG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### HRKFT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>HRKFT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>HRKFT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>HRKFT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### ILA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>ILA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>ILA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>ILA@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### ISTRU

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(40)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>ISTRU@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>ISTRU@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>ISTRU@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JOURNALENTRYISSECONDARYENTRY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JOURNALENTRYISSECONDARYENTRY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JOURNALENTRYISSECONDARYENTRY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JOURNALENTRYISSECONDARYENTRY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_ACTIVITY_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_ACTIVITY_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_ACTIVITY_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_ACTIVITY_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_BILIND_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_BILIND_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_BILIND_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_BILIND_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_BILLM_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_BILLM_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_BILLM_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_BILLM_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_CBOBJNR_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(22)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_CBOBJNR_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_CBOBJNR_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_CBOBJNR_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_CBRACCT_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_CBRACCT_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_CBRACCT_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_CBRACCT_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_CBRUNID_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Timestamp</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_CBRUNID_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_CBRUNID_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_CBRUNID_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_EGROUP_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_EGROUP_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_EGROUP_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_EGROUP_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_ETYPE_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_ETYPE_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_ETYPE_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_ETYPE_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_NAME

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_NAME@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_NAME@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_NAME@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_PART_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_PART_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_PART_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_PART_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_PEGRUP_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_PEGRUP_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_PEGRUP_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_PEGRUP_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_POM_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_POM_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_POM_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_POM_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_PRODPER_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_PRODPER_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_PRODPER_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_PRODPER_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_PVNAME_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_PVNAME_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_PVNAME_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_PVNAME_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_RECIND_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_RECIND_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_RECIND_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_RECIND_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### JV_SRECIND_CDS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>JV_SRECIND_CDS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>JV_SRECIND_CDS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>JV_SRECIND_CDS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### KDGRP

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>KDGRP@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>KDGRP@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>KDGRP@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### KSTRG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>KSTRG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>KSTRG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>KSTRG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### KUNNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>KUNNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>KUNNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>KUNNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### KUNRE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>KUNRE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>KUNRE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>KUNRE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### KUNWE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>KUNWE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>KUNWE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>KUNWE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### LOGSYSTEM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>LOGSYSTEM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>LOGSYSTEM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>LOGSYSTEM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### LSTAR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>LSTAR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>LSTAR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>LSTAR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### MAUFNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>MAUFNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>MAUFNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>MAUFNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### MD_SUPPLIER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>MD_SUPPLIER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>MD_SUPPLIER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>MD_SUPPLIER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### MEINS

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>MEINS@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>MEINS@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>MEINS@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### NPLNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>NPLNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>NPLNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>NPLNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### PAR_KSTRG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(12)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>PAR_KSTRG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>PAR_KSTRG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>PAR_KSTRG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### PERNR_D

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>PERNR_D@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>PERNR_D@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>PERNR_D@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### POSNR_VA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(6)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>POSNR_VA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>POSNR_VA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>POSNR_VA@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### PRIOK

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>PRIOK@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>PRIOK@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>PRIOK@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### PRODUCTNUMBER

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(40)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>PRODUCTNUMBER@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>PRODUCTNUMBER@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>PRODUCTNUMBER@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### PSM_BDGT_ACCOUNT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>PSM_BDGT_ACCOUNT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>PSM_BDGT_ACCOUNT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>PSM_BDGT_ACCOUNT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### PSM_BDGT_ACCOUNT_COCODE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>PSM_BDGT_ACCOUNT_COCODE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>PSM_BDGT_ACCOUNT_COCODE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>PSM_BDGT_ACCOUNT_COCODE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### PSM_BDGT_CNSMPN_AMOUNT_TYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>enum</strong>: <code>&lbrace;
  "ORIG": &lbrace;
    "val": "ORIG"
  &rbrace;,
  "CHIN": &lbrace;
    "val": "CHIN"
  &rbrace;,
  "CHDE": &lbrace;
    "val": "CHDE"
  &rbrace;,
  "CHAA": &lbrace;
    "val": "CHAA"
  &rbrace;,
  "DELE": &lbrace;
    "val": "DELE"
  &rbrace;,
  "REDU": &lbrace;
    "val": "REDU"
  &rbrace;,
  "REDP": &lbrace;
    "val": "REDP"
  &rbrace;,
  "UWAD": &lbrace;
    "val": "UWAD"
  &rbrace;,
  "DWAD": &lbrace;
    "val": "DWAD"
  &rbrace;,
  "UWOF": &lbrace;
    "val": "UWOF"
  &rbrace;,
  "BPPV": &lbrace;
    "val": "BPPV"
  &rbrace;,
  "BPNX": &lbrace;
    "val": "BPNX"
  &rbrace;,
  "FYPV": &lbrace;
    "val": "FYPV"
  &rbrace;,
  "FYNX": &lbrace;
    "val": "FYNX"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_AMOUNT_TYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_AMOUNT_TYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_AMOUNT_TYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### PSM_BDGT_CNSMPN_DATE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_DATE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_DATE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_DATE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### PSM_BDGT_CNSMPN_PERIOD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(3)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_PERIOD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_PERIOD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_PERIOD@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### PSM_BDGT_CNSMPN_TYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_TYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_TYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_TYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### PSM_BDGT_CNSMPN_YEAR_NO_CONV

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_YEAR_NO_CONV@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_YEAR_NO_CONV@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>PSM_BDGT_CNSMPN_YEAR_NO_CONV@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### PSM_BDGT_RELEVANT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>PSM_BDGT_RELEVANT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>PSM_BDGT_RELEVANT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>PSM_BDGT_RELEVANT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### QUAN1_12

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 23<br /><strong>scale</strong>: 3<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>QUAN1_12@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>QUAN1_12@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>QUAN1_12@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### REBDVDMBENO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>REBDVDMBENO@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>REBDVDMBENO@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>REBDVDMBENO@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### REBDVDMBUNO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>REBDVDMBUNO@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>REBDVDMBUNO@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>REBDVDMBUNO@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### REBDVDMPBENO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>REBDVDMPBENO@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>REBDVDMPBENO@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>REBDVDMPBENO@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### REBDVDMPBUNO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>REBDVDMPBUNO@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>REBDVDMPBUNO@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>REBDVDMPBUNO@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### REBDVDMPPRNO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>REBDVDMPPRNO@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>REBDVDMPPRNO@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>REBDVDMPPRNO@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### REBDVDMPRNO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>REBDVDMPRNO@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>REBDVDMPRNO@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>REBDVDMPRNO@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### REBDVDMPRONO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>REBDVDMPRONO@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>REBDVDMPRONO@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>REBDVDMPRONO@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### REBDVDMRONO

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(8)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>REBDVDMRONO@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>REBDVDMRONO@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>REBDVDMRONO@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### RECNVDMCNNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(13)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>RECNVDMCNNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>RECNVDMCNNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>RECNVDMCNNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### RECNVDMPCNNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(13)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>RECNVDMPCNNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>RECNVDMPCNNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>RECNVDMPCNNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### RESCVDMPSCKEY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>RESCVDMPSCKEY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>RESCVDMPSCKEY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>RESCVDMPSCKEY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### RESCVDMPSUID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>RESCVDMPSUID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>RESCVDMPSUID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>RESCVDMPSUID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### RESCVDMSCKEY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>RESCVDMSCKEY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>RESCVDMSCKEY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>RESCVDMSCKEY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### RESCVDMSUID

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>RESCVDMSUID@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>RESCVDMSUID@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>RESCVDMSUID@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### RQUAN1_12

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Decimal</td><td><strong>precision</strong>: 23<br /><strong>scale</strong>: 3<br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>RQUAN1_12@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>RQUAN1_12@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>RQUAN1_12@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### RRCTY

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(1)</td><td><strong>enum</strong>: <code>&lbrace;
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
  "5": &lbrace;
    "val": "5"
  &rbrace;
&rbrace;</code><br /><br /><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>RRCTY@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>RRCTY@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>RRCTY@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### SLALITTYPE

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(5)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>SLALITTYPE@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>SLALITTYPE@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>SLALITTYPE@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### SPART

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>SPART@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>SPART@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>SPART@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### TPLNR

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(30)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>TPLNR@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>TPLNR@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>TPLNR@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### VALUT

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>VALUT@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>VALUT@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>VALUT@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### VBELN_VA

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>VBELN_VA@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>VBELN_VA@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>VBELN_VA@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### VKORG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>VKORG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>VKORG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>VKORG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### VTWEG

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(2)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>VTWEG@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>VTWEG@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>VTWEG@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### WCB_COCO_NUM

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(10)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>WCB_COCO_NUM@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>WCB_COCO_NUM@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>WCB_COCO_NUM@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### WERKS_D

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.String(4)</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>WERKS_D@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>WERKS_D@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>WERKS_D@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### WWERT_D

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Date</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>WWERT_D@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>WWERT_D@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>WWERT_D@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

### XSPLITMOD_ACD

<table>
<tr><th>Type</th><th>Description</th></tr>
<tr><td>cds.Boolean</td><td><strong>Annotations</strong><br /><strong>@EndUserText.heading</strong>: &lbrace;i18n>XSPLITMOD_ACD@ENDUSERTEXT.HEADING&rbrace;<br /><strong>@EndUserText.label</strong>: &lbrace;i18n>XSPLITMOD_ACD@ENDUSERTEXT.LABEL&rbrace;<br /><strong>@EndUserText.quickInfo</strong>: &lbrace;i18n>XSPLITMOD_ACD@ENDUSERTEXT.QUICKINFO&rbrace;</td></tr>
</table>

