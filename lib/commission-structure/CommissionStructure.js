const CommissionStructure = [
    {
        id: "1",
        title: "operator commission",
        columnDefs: [
            {
                field: "operatorType",
                headerName: "Operator Type"
            },
            {
                field: "operatorName",
                headerName: "Operator Name"
            },
            {
                field: "retailer_commission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributor_commission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "super_distributor_commission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "fixed_charge",
                headerName: "Is Charge",
                editable: true,
                cellEditor: "switchCellRenderer",
            },
            {
                field: "is_flat",
                headerName: "Is Flat",
                editable: true,
                cellEditor: "switchCellRenderer",
            },
            {
                field: "gst",
                headerName: "GST(%)",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
        ],
        rowData: [
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "AIRTEL",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "BSNL SPECIAL",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "BSNL TOPUP",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "JIO",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "VODAFONE IDEA",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Airtel Postpaid	",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "BSNL Postpaid	",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Idea Postpaid	",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Jio Postpaid	",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Tata Docomo CDMA Postpaid	",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Tata Docomo GSM Postpaid	",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Vodafone Idea Postpaid",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "AIRTEL DIGITAL TV",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "DISH TV",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "SUN DIRECT TV",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "TATA SKY",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "VIDEOCON D2H",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Datacard Recharge Operator",
                operatorName: "Reliance NetConnect 1X",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "Airtel Landline",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "BSNL Landline - Corporate",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "BSNL Landline - Individual",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "MTNL Mumbai",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "Tata TeleServices (CDMA)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "Tikona",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Aavantika Gas Ltd",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Adani Gas",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Assam Gas Company Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Bhagyanagar Gas Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Central U.P. Gas Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Charotar Gas Sahakari Mandali Ltd",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Gail Gas Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Green Gas Limited(GGL)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Gujarat Gas Company Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Haryana City Gas",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Indane Gas",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Indian Oil-Adani Gas Private Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Indraprastha Gas",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "IRM Energy Private Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Mahanagar Gas Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Maharashtra Natural Gas Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Megha Gas",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Sabarmati Gas Limited (SGL)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Sanwariya Gas Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Siti Energy",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Torrent Gas",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Tripura Natural Gas",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Unique Central Piped Gases Pvt Ltd (UCPGPL)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Vadodara Gas Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Aegon Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Aviva Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Bajaj Allianz General Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Bajaj Allianz Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Bharti Axa Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Canara HSBC Oriental Bank of Commerce",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "DHFL Pramerica Life Insurance Co. Ltd",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Edelweiss Tokio Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Exide Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Future Generali India Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "HDFC Life Insurance Co. Ltd.	",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "ICICI Prudential Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "IDBI federal Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "INDIA FIRST Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Magma HDI - Health Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Magma HDI - Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Magma HDI - Motor Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Max Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "PNB Metlife",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Pramerica Life Insurance Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Reliance General Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Reliance Nippon Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Religare Health Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Royal Sundaram General Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "SBI Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "SBIG",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Shriram General Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Shriram Life Insurance Co Ltd",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Star Union Dai Ichi Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "TATA AIA Life Insurance",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "EMI Payment Operator",
                operatorName: "AEON Credit",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "ACT Fibernet",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Airtel Broadband",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Asianet Broadband",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Comway Broadband",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Connect Broadband",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Fusionnet Web Services Private Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Hathway Broadband",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Instalinks",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "ION",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Nextra Broadband",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Spectra",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Tikona Infinet Pvt Ltd",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "TTN BroadBand",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Cable TV Recharge Operator",
                operatorName: "Hathway",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Credit Card Operator",
                operatorName: "Master Card",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Credit Card Operator",
                operatorName: "VISA",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Ahmedabad Municipal Corporation",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Bangalore Water Supply and Sewerage Board",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Bhopal Municipal Corporation",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Delhi Development Authority (DDA)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Delhi Jal Board",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Department of Public Health Engineering - Mizoram",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Greater Warangal Municipal Corporation",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Greater Warangal Municipal Corporation Water",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Gwalior Municipal Corporation",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Haryana Urban Development Authority",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Hyderabad Metropolitan Water Supply and Sewerage Board",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Indore Municipal Corporation",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Jabalpur Municipal Corporation",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Jalkal Vibhag Nagar Nigam Prayagraj",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Kalyan Dombivali Municipal Corporation",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Kerala Water Authority (KWA)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Madhya Pradesh Urban",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation Chandigarh",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation Jalandhar",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation Ludhiana",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation of Amritsar",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation of Gurugram",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Mysuru Citi Corporation",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "New Delhi Municipal Council (NDMC)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Phed - Rajasthan",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Pune Municipal Corporation",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Punjab Municipal Corporations/Councils",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Ranchi Municipal Corporation",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Silvassa Municipal Council",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Surat Municipal Corporation",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Ujjain Nagar Nigam - PHED",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Urban Improvement Trust (UIT)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Urban Improvement Trust (UIT) - Bhiwadi",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Uttarakhand Jal Sansthan",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Adani Electricity Mumbai Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Adani Electricity Mumbai Limited - Old",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Ajmer Vidyut Vitran Nigam Limited (AVVNL)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "APEPDCL-Eastern Power Distribution CO AP Ltd",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "APSPDCL-Southern Power Distribution CO AP Ltd",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Assam Power Distribution Company Ltd (NON-RAPDR)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Assam Power Distribution Company Ltd (RAPDR)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "B.E.S.T Mumbai",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bangalore Electricity Supply Co . Ltd (BESCOM)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bharatpur Electricity Services Ltd. (BESL)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bharatpur Electricity Services Ltd. (BESL) - Old",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bikaner Electricity Supply Limited (BkESL) - Old",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bikaner Electricity Supply Limited (BkESL) - Old",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "BSES Rajdhani Power Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "BSES Yamuna Power Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Calcutta Electric Supply Corporation (CESC)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "CESU, Odisha",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Chamundeshwari Electricity Supply Corp Ltd (CESCOM)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Chandigarh Electricity Department",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Chhattisgarh State Power Distribution Co. Ltd",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Dakshin Gujarat Vij Company Lim ited (DGVCL)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Dakshin Haryana Bijli Vitran Nigam (DHBVN)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Department of Power, Government of Arunachal Pradesh",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Department of Power, Nagaland",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "DNH Power Distribution Company Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Government of Puducherry Electricity Department",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Gulbarga Electricity Supply Company Limited",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Himachal Pradesh State Electricity Board",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Hubli Electricity Supply Company Ltd (HESCOM)",
                retailer_commission: "0",
                distributor_commission: "0",
                super_distributor_commission: "0",
                fixed_charge: "No",
                is_flat: "No",
                gst: ""
            },
        ]
    },
    {
        id: "2",
        title: "aeps withdrawal",
        columnDefs: [
            {
                field: "from",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "to",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailer_commission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributor_commission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "super_distributor_commission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "fixed_charge",
                headerName: "Fixed Charge",
                cellEditor: 'agTextCellEditor'
            },
            {
                field: "is_flat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: 'actionsCellRender',
                editable: false
            },
        ],
        rowData: [
            {
                from: "",
                to: "",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                fixed_charge: "",
                is_flat: "1",
                gst: "",
                actions: ""
            }
        ]
    },
    {
        id: "3",
        title: "aeps (aadhaar pay)",
        columnDefs: [
            {
                field: "from",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "to",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailer_commission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributor_commission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "super_distributor_commission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "fixed_charge",
                headerName: "Fixed Charge",
                cellEditor: 'agTextCellEditor'
            },
            {
                field: "is_flat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: 'actionsCellRender',
                editable: false
            },
        ],
        rowData: [
            {
                from: "",
                to: "",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                fixed_charge: "",
                is_flat: "1",
                gst: "",
                actions: ""
            }
        ]
    },
    {
        id: "payout",
        title: "payout",
        columnDefs: [
            {
                field: "from",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "to",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailer_commission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributor_commission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "super_distributor_commission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "fixed_charge",
                headerName: "Fixed Charge",
                cellEditor: 'agTextCellEditor'
            },
            {
                field: "is_flat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: 'actionsCellRender',
                editable: false
            },
        ],
        rowData: [
            {
                from: "",
                to: "",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                fixed_charge: "",
                is_flat: "1",
                gst: "",
                actions: ""
            }
        ]
    },
    {
        id: "dmt",
        title: "dmt",
        columnDefs: [
            {
                field: "from",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "to",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailer_commission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributor_commission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "super_distributor_commission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "fixed_charge",
                headerName: "Fixed Charge",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "is_flat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender',
                editable: false
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: 'actionsCellRender',
                editable: false
            },
        ],
        rowData: [
            {
                from: "",
                to: "",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                fixed_charge: "",
                is_flat: "1",
                gst: "",
                actions: ""
            }
        ]
    },
    {
        id: "6",
        title: "matm",
        columnDefs: [
            {
                field: "from",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "to",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailer_commission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributor_commission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "super_distributor_commission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "fixed_charge",
                headerName: "Fixed Charge",
                cellEditor: 'agTextCellEditor'
            },
            {
                field: "is_flat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: 'actionsCellRender',
                editable: false
            },
        ],
        rowData: [
            {
                from: "",
                to: "",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                fixed_charge: "",
                is_flat: "1",
                gst: "",
                actions: ""
            }
        ]
    },
    {
        id: "7",
        title: "money deposit",
        columnDefs: [
            {
                field: "from",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "to",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailer_commission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributor_commission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "super_distributor_commission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "fixed_charge",
                headerName: "Fixed Charge",
                cellEditor: 'agTextCellEditor',
                editable: true
            },
            {
                field: "is_flat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender',
                editable: false
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: 'actionsCellRender',
                editable: false
            },
        ],
        rowData: [
            {
                from: "",
                to: "",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                fixed_charge: "",
                is_flat: "1",
                gst: "",
                actions: ""
            }
        ]
    },
    {
        id: "8",
        title: "cms",
        columnDefs: [
            {
                field: "billerId",
                headerName: "Biller ID",
            },
            {
                field: "billerName",
                headerName: "Biller Name",
            },
            {
                field: "retailer_commission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributor_commission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "super_distributor_commission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "fixed_charge",
                headerName: "Is Charge",
                cellEditor: 'agTextCellEditor'
            },
            {
                field: "is_flat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
        ],
        rowData: [
            {
                billerId: "",
                billerName: "",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                fixed_charge: "",
                is_flat: "",
                gst: ""
            }
        ]
    },
    {
        id: "9",
        title: "lic services",
        columnDefs: [
            {
                field: "serviceType",
                headerName: "Service Type",
            },
            {
                field: "retailer_commission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributor_commission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "super_distributor_commission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "is_flat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "fixed_charge",
                headerName: "Fixed Charge",
                cellEditor: 'agTextCellEditor'
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
        ],
        rowData: [
            {
                serviceType: "Offline",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                is_flat: "",
                fixed_charge: "",
                gst: ""
            },
            {
                serial: "2",
                serviceType: "Online",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                is_flat: "",
                fixed_charge: "",
                gst: ""
            }
        ]
    },
    {
        id: "10",
        title: "pan services",
        columnDefs: [
            {
                field: "serviceType",
                headerName: "Service Type",
            },
            {
                field: "retailer_commission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributor_commission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "super_distributor_commission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "is_flat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "fixed_charge",
                headerName: "Fixed Charge",
                cellEditor: 'agTextCellEditor'
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
        ],
        rowData: [
            {
                serviceType: "Physical",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                is_flat: "",
                fixed_charge: "",
                gst: ""
            },
            {
                serial: "2",
                serviceType: "Digital",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                is_flat: "",
                fixed_charge: "",
                gst: ""
            }
        ]
    },
    {
        id: "11",
        title: "AePS Mini Statement",
        columnDefs: [
            {
                field: "serviceType",
                headerName: "Service Type",
            },
            {
                field: "retailer_commission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributor_commission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "super_distributor_commission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "is_flat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "fixed_charge",
                headerName: "Fixed Charge",
                cellEditor: 'agTextCellEditor'
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
        ],
        rowData: [
            {
                serviceType: "Mini Statement",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                is_flat: "",
                fixed_charge: "",
                gst: ""
            }
        ]
    },
    {
        id: "recharge",
        title: "Recharge",
        columnDefs: [
            {
                field: "from",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "to",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailer_commission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributor_commission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "super_distributor_commission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "is_flat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "fixed_charge",
                headerName: "Fixed Charge",
                cellEditor: 'agTextCellEditor'
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: 'actionsCellRender',
                editable: false
            },
        ],
        rowData: [
            {
                serviceType: "Mini Statement",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                is_flat: "",
                fixed_charge: "",
                gst: ""
            }
        ]
    },
]

export default CommissionStructure