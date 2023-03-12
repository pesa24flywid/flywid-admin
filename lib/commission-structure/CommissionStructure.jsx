import React from "react"
import {
    HStack,
    Button,
    Switch,
} from '@chakra-ui/react'
import { BsPlus, BsTrash } from 'react-icons/bs'


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
                field: "retailerCommission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributorCommission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "superDistributorCommission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
                editable: true,
                cellEditor: "switchCellRenderer",
            },
            {
                field: "isFlat",
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
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "BSNL SPECIAL",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "BSNL TOPUP",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "JIO",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "VODAFONE IDEA",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Airtel Postpaid	",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "BSNL Postpaid	",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Idea Postpaid	",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Jio Postpaid	",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Tata Docomo CDMA Postpaid	",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Tata Docomo GSM Postpaid	",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Vodafone Idea Postpaid",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "AIRTEL DIGITAL TV",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "DISH TV",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "SUN DIRECT TV",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "TATA SKY",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "VIDEOCON D2H",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Datacard Recharge Operator",
                operatorName: "Reliance NetConnect 1X",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "Airtel Landline",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "BSNL Landline - Corporate",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "BSNL Landline - Individual",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "MTNL Mumbai",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "Tata TeleServices (CDMA)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "Tikona",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Aavantika Gas Ltd",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Adani Gas",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Assam Gas Company Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Bhagyanagar Gas Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Central U.P. Gas Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Charotar Gas Sahakari Mandali Ltd",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Gail Gas Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Green Gas Limited(GGL)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Gujarat Gas Company Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Haryana City Gas",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Indane Gas",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Indian Oil-Adani Gas Private Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Indraprastha Gas",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "IRM Energy Private Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Mahanagar Gas Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Maharashtra Natural Gas Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Megha Gas",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Sabarmati Gas Limited (SGL)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Sanwariya Gas Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Siti Energy",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Torrent Gas",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Tripura Natural Gas",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Unique Central Piped Gases Pvt Ltd (UCPGPL)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Vadodara Gas Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Aegon Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Aviva Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Bajaj Allianz General Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Bajaj Allianz Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Bharti Axa Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Canara HSBC Oriental Bank of Commerce",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "DHFL Pramerica Life Insurance Co. Ltd",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Edelweiss Tokio Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Exide Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Future Generali India Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "HDFC Life Insurance Co. Ltd.	",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "ICICI Prudential Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "IDBI federal Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "INDIA FIRST Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Magma HDI - Health Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Magma HDI - Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Magma HDI - Motor Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Max Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "PNB Metlife",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Pramerica Life Insurance Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Reliance General Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Reliance Nippon Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Religare Health Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Royal Sundaram General Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "SBI Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "SBIG",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Shriram General Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Shriram Life Insurance Co Ltd",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Star Union Dai Ichi Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "TATA AIA Life Insurance",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "EMI Payment Operator",
                operatorName: "AEON Credit",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "ACT Fibernet",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Airtel Broadband",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Asianet Broadband",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Comway Broadband",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Connect Broadband",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Fusionnet Web Services Private Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Hathway Broadband",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Instalinks",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "ION",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Nextra Broadband",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Spectra",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Tikona Infinet Pvt Ltd",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "TTN BroadBand",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Cable TV Recharge Operator",
                operatorName: "Hathway",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Credit Card Operator",
                operatorName: "Master Card",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Credit Card Operator",
                operatorName: "VISA",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Ahmedabad Municipal Corporation",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Bangalore Water Supply and Sewerage Board",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Bhopal Municipal Corporation",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Delhi Development Authority (DDA)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Delhi Jal Board",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Department of Public Health Engineering - Mizoram",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Greater Warangal Municipal Corporation",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Greater Warangal Municipal Corporation Water",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Gwalior Municipal Corporation",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Haryana Urban Development Authority",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Hyderabad Metropolitan Water Supply and Sewerage Board",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Indore Municipal Corporation",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Jabalpur Municipal Corporation",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Jalkal Vibhag Nagar Nigam Prayagraj",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Kalyan Dombivali Municipal Corporation",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Kerala Water Authority (KWA)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Madhya Pradesh Urban",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation Chandigarh",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation Jalandhar",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation Ludhiana",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation of Amritsar",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation of Gurugram",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Mysuru Citi Corporation",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "New Delhi Municipal Council (NDMC)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Phed - Rajasthan",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Pune Municipal Corporation",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Punjab Municipal Corporations/Councils",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Ranchi Municipal Corporation",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Silvassa Municipal Council",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Surat Municipal Corporation",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Ujjain Nagar Nigam - PHED",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Urban Improvement Trust (UIT)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Urban Improvement Trust (UIT) - Bhiwadi",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Uttarakhand Jal Sansthan",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Adani Electricity Mumbai Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Adani Electricity Mumbai Limited - Old",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Ajmer Vidyut Vitran Nigam Limited (AVVNL)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "APEPDCL-Eastern Power Distribution CO AP Ltd",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "APSPDCL-Southern Power Distribution CO AP Ltd",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Assam Power Distribution Company Ltd (NON-RAPDR)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Assam Power Distribution Company Ltd (RAPDR)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "B.E.S.T Mumbai",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bangalore Electricity Supply Co . Ltd (BESCOM)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bharatpur Electricity Services Ltd. (BESL)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bharatpur Electricity Services Ltd. (BESL) - Old",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bikaner Electricity Supply Limited (BkESL) - Old",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bikaner Electricity Supply Limited (BkESL) - Old",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "BSES Rajdhani Power Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "BSES Yamuna Power Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Calcutta Electric Supply Corporation (CESC)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "CESU, Odisha",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Chamundeshwari Electricity Supply Corp Ltd (CESCOM)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Chandigarh Electricity Department",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Chhattisgarh State Power Distribution Co. Ltd",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Dakshin Gujarat Vij Company Lim ited (DGVCL)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Dakshin Haryana Bijli Vitran Nigam (DHBVN)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Department of Power, Government of Arunachal Pradesh",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Department of Power, Nagaland",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "DNH Power Distribution Company Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Government of Puducherry Electricity Department",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Gulbarga Electricity Supply Company Limited",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Himachal Pradesh State Electricity Board",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Hubli Electricity Supply Company Ltd (HESCOM)",
                retailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
        ]
    },
    {
        id: "2",
        title: "aeps withdrawal",
        columnDefs: [
            {
                field: "fromValue",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "toValue",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailerCommission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributorCommission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "superDistributorCommission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
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
                cellRenderer: 'actionsCellRender'
            },
        ],
        rowData: [
            {
                fromValue: "",
                toValue: "",
                commission: "",
                isFlat: "No",
                isSurcharge: "No",
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
                field: "fromValue",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "toValue",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailerCommission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributorCommission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "superDistributorCommission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
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
                cellRenderer: 'actionsCellRender'
            },
        ],
        rowData: [
            {
                fromValue: "",
                toValue: "",
                commission: "",
                isFlat: "No",
                isSurcharge: "No",
                gst: "",
                actions: ""
            }
        ]
    },
    {
        id: "4",
        title: "payout",
        columnDefs: [
            {
                field: "fromValue",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "toValue",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailerCommission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributorCommission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "superDistributorCommission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
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
                cellRenderer: 'actionsCellRender'
            },
        ],
        rowData: [
            {
                fromValue: "",
                toValue: "",
                commission: "",
                isFlat: "No",
                isSurcharge: "No",
                gst: "",
                actions: ""
            }
        ]
    },
    {
        id: "5",
        title: "dmt",
        columnDefs: [
            {
                field: "serialNumber",
                headerName: "#",
            },
            {
                field: "fromValue",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "toValue",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailerCommission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributorCommission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "superDistributorCommission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
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
                cellRenderer: 'actionsCellRender'
            },
        ],
        rowData: [
            {
                serialNumber: "1",
                fromValue: "",
                toValue: "",
                retailerretailerCommission: "0",
                distributorCommission: "0",
                superDistributorCommission: "0",
                // retailerSurcharge: "",
                distributorCommission: "",
                superDistributorCommission: "",
                isFlat: "",
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
                field: "fromValue",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "toValue",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailerCommission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributorCommission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "superDistributorCommission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
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
                cellRenderer: 'actionsCellRender'
            },
        ],
        rowData: [
            {
                fromValue: "",
                toValue: "",
                commission: "",
                isFlat: "No",
                isSurcharge: "No",
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
                field: "fromValue",
                headerName: "From Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "toValue",
                headerName: "To Value",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "retailerCommission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributorCommission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "superDistributorCommission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
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
                cellRenderer: 'actionsCellRender'
            },
        ],
        rowData: [
            {
                fromValue: "",
                toValue: "",
                commission: "",
                isFlat: "No",
                isSurcharge: "No",
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
                field: "retailerCommission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributorCommission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "superDistributorCommission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
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
                commission: "",
                isFlat: "",
                isSurcharge: "",
                gst: ""
            }
        ]
    },
    {
        id: "9",
        title: "lic services",
        columnDefs: [
            {
                field: "serial",
                headerName: "#",
            },
            {
                field: "serviceType",
                headerName: "Service Type",
            },
            {
                field: "retailerCommission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributorCommission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "superDistributorCommission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
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
                serial: "1",
                serviceType: "Offline",
                commission: "",
                isFlat: "",
                isSurcharge: "",
                gst: ""
            },
            {
                serial: "2",
                serviceType: "Online",
                commission: "",
                isFlat: "",
                isSurcharge: "",
                gst: ""
            }
        ]
    },
    {
        id: "10",
        title: "pan services",
        columnDefs: [
            {
                field: "serial",
                headerName: "#",
            },
            {
                field: "serviceType",
                headerName: "Service Type",
            },
            {
                field: "retailerCommission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributorCommission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "superDistributorCommission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
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
                serial: "1",
                serviceType: "Physical",
                commission: "",
                isFlat: "",
                isSurcharge: "",
                gst: ""
            },
            {
                serial: "2",
                serviceType: "Digital",
                commission: "",
                isFlat: "",
                isSurcharge: "",
                gst: ""
            }
        ]
    },
    {
        id: "11",
        title: "AePS Mini Statement",
        columnDefs: [
            {
                field: "serial",
                headerName: "#",
            },
            {
                field: "serviceType",
                headerName: "Service Type",
            },
            {
                field: "retailerCommission",
                headerName: "Retailer Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "distributorCommission",
                headerName: "Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "superDistributorCommission",
                headerName: "Super Distributor Commission",
                editable: true,
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: 'switchCellRender'
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
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
                serial: "1",
                serviceType: "Mini Statement",
                commission: "",
                isFlat: "",
                isSurcharge: "",
                gst: ""
            }
        ]
    },
]

export default CommissionStructure