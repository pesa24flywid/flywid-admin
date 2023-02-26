import React from "react"
import {
    HStack,
    Button,
    Switch,
} from '@chakra-ui/react'
import { BsPlus, BsTrash } from 'react-icons/bs'

const switchCellRender = (params) =>{
    return(
        <Switch></Switch>
    )
}

const actionsCellRender = (params) => {
    return (
        <HStack spacing={4} h={'full'} alignItems={'center'}>
            <Button
                rounded={'full'}
                size={'xs'}
                colorScheme={'whatsapp'}
                fontSize={'sm'}
            >
                +
            </Button>
            <Button
                rounded={'full'}
                size={'xs'}
                colorScheme={'red'}
            >
                <BsTrash />
            </Button>
        </HStack>
    )

}

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
                field: "commission",
                headerName: "Commission",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
                cellEditor: "agSelectCellEditor",
                cellEditorParams: {
                    values: ['Yes', 'No']
                }
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellEditor: "agSelectCellEditor",
                cellEditorParams: {
                    values: ['Yes', 'No']
                }
            },
            {
                field: "gst",
                headerName: "GST(%)",
                cellEditor: 'agTextCellEditor',
            },
        ],
        rowData: [
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "AIRTEL",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "BSNL SPECIAL",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "BSNL TOPUP",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "JIO",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE PREPAID",
                operatorName: "VODAFONE IDEA",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Airtel Postpaid	",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "BSNL Postpaid	",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Idea Postpaid	",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Jio Postpaid	",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Tata Docomo CDMA Postpaid	",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Tata Docomo GSM Postpaid	",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "MOBILE POSTPAID",
                operatorName: "Vodafone Idea Postpaid",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "AIRTEL DIGITAL TV",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "DISH TV",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "SUN DIRECT TV",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "TATA SKY",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "DTH RECHARGE",
                operatorName: "VIDEOCON D2H",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Datacard Recharge Operator",
                operatorName: "Reliance NetConnect 1X",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "Airtel Landline",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "BSNL Landline - Corporate",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "BSNL Landline - Individual",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "MTNL Mumbai",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "Tata TeleServices (CDMA)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Landline Recharge Operator",
                operatorName: "Tikona",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Aavantika Gas Ltd",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Adani Gas",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Assam Gas Company Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Bhagyanagar Gas Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Central U.P. Gas Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Charotar Gas Sahakari Mandali Ltd",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Gail Gas Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Green Gas Limited(GGL)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Gujarat Gas Company Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Haryana City Gas",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Indane Gas",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Indian Oil-Adani Gas Private Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Indraprastha Gas",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "IRM Energy Private Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Mahanagar Gas Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Maharashtra Natural Gas Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Megha Gas",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Sabarmati Gas Limited (SGL)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Sanwariya Gas Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Siti Energy",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Torrent Gas",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Tripura Natural Gas",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Unique Central Piped Gases Pvt Ltd (UCPGPL)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Gas Bill Payment Operator",
                operatorName: "Vadodara Gas Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Aegon Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Aviva Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Bajaj Allianz General Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Bajaj Allianz Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Bharti Axa Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Canara HSBC Oriental Bank of Commerce",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "DHFL Pramerica Life Insurance Co. Ltd",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Edelweiss Tokio Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Exide Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Future Generali India Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "HDFC Life Insurance Co. Ltd.	",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "ICICI Prudential Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "IDBI federal Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "INDIA FIRST Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Magma HDI - Health Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Magma HDI - Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Magma HDI - Motor Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Max Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "PNB Metlife",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Pramerica Life Insurance Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Reliance General Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Reliance Nippon Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Religare Health Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Royal Sundaram General Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "SBI Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "SBIG",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Shriram General Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Shriram Life Insurance Co Ltd",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "Star Union Dai Ichi Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "INSURANCE OPERATOR",
                operatorName: "TATA AIA Life Insurance",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "EMI Payment Operator",
                operatorName: "AEON Credit",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "ACT Fibernet",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Airtel Broadband",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Asianet Broadband",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Comway Broadband",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Connect Broadband",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Fusionnet Web Services Private Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Hathway Broadband",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Instalinks",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "ION",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Nextra Broadband",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Spectra",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "Tikona Infinet Pvt Ltd",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Broadband Bill Payment Operator",
                operatorName: "TTN BroadBand",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Cable TV Recharge Operator",
                operatorName: "Hathway",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Credit Card Operator",
                operatorName: "Master Card",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Credit Card Operator",
                operatorName: "VISA",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Ahmedabad Municipal Corporation",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Bangalore Water Supply and Sewerage Board",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Bhopal Municipal Corporation",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Delhi Development Authority (DDA)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Delhi Jal Board",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Department of Public Health Engineering - Mizoram",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Greater Warangal Municipal Corporation",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Greater Warangal Municipal Corporation Water",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Gwalior Municipal Corporation",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Haryana Urban Development Authority",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Hyderabad Metropolitan Water Supply and Sewerage Board",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Indore Municipal Corporation",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Jabalpur Municipal Corporation",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Jalkal Vibhag Nagar Nigam Prayagraj",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Kalyan Dombivali Municipal Corporation",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Kerala Water Authority (KWA)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Madhya Pradesh Urban",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation Chandigarh",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation Jalandhar",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation Ludhiana",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation of Amritsar",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Municipal Corporation of Gurugram",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Mysuru Citi Corporation",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "New Delhi Municipal Council (NDMC)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Phed - Rajasthan",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Pune Municipal Corporation",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Punjab Municipal Corporations/Councils",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Ranchi Municipal Corporation",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Silvassa Municipal Council",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Surat Municipal Corporation",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Ujjain Nagar Nigam - PHED",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Urban Improvement Trust (UIT)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Urban Improvement Trust (UIT) - Bhiwadi",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Water Operator",
                operatorName: "Uttarakhand Jal Sansthan",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Adani Electricity Mumbai Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Adani Electricity Mumbai Limited - Old",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Ajmer Vidyut Vitran Nigam Limited (AVVNL)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "APEPDCL-Eastern Power Distribution CO AP Ltd",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "APSPDCL-Southern Power Distribution CO AP Ltd",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Assam Power Distribution Company Ltd (NON-RAPDR)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Assam Power Distribution Company Ltd (RAPDR)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "B.E.S.T Mumbai",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bangalore Electricity Supply Co . Ltd (BESCOM)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bharatpur Electricity Services Ltd. (BESL)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bharatpur Electricity Services Ltd. (BESL) - Old",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bikaner Electricity Supply Limited (BkESL) - Old",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Bikaner Electricity Supply Limited (BkESL) - Old",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "BSES Rajdhani Power Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "BSES Yamuna Power Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Calcutta Electric Supply Corporation (CESC)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "CESU, Odisha",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Chamundeshwari Electricity Supply Corp Ltd (CESCOM)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Chandigarh Electricity Department",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Chhattisgarh State Power Distribution Co. Ltd",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Dakshin Gujarat Vij Company Lim ited (DGVCL)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Dakshin Haryana Bijli Vitran Nigam (DHBVN)",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Department of Power, Government of Arunachal Pradesh",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Department of Power, Nagaland",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "DNH Power Distribution Company Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Government of Puducherry Electricity Department",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Gulbarga Electricity Supply Company Limited",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Himachal Pradesh State Electricity Board",
                commission: "0",
                isSurcharge: "No",
                isFlat: "No",
                gst: ""
            },
            {
                operatorType: "Electricity Operator",
                operatorName: "Hubli Electricity Supply Company Ltd (HESCOM)",
                commission: "0",
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
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "toValue",
                headerName: "To Value",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "commission",
                headerName: "Commission",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: switchCellRender
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
                cellRenderer: switchCellRender
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: actionsCellRender
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
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "toValue",
                headerName: "To Value",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "commission",
                headerName: "Commission",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: switchCellRender
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
                cellRenderer: switchCellRender
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: actionsCellRender
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
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "toValue",
                headerName: "To Value",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "commission",
                headerName: "Commission",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: switchCellRender
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
                cellRenderer: switchCellRender
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: actionsCellRender
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
                field: "fromValue",
                headerName: "From Value",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "toValue",
                headerName: "To Value",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "commission",
                headerName: "Commission",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: switchCellRender
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
                cellRenderer: switchCellRender
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: actionsCellRender
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
        id: "6",
        title: "matm",
        columnDefs: [
            {
                field: "fromValue",
                headerName: "From Value",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "toValue",
                headerName: "To Value",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "commission",
                headerName: "Commission",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: switchCellRender
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
                cellRenderer: switchCellRender
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: actionsCellRender
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
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "toValue",
                headerName: "To Value",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "commission",
                headerName: "Commission",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: switchCellRender
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
                cellRenderer: switchCellRender
            },
            {
                field: "gst",
                headerName: "GST (in %)",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "actions",
                headerName: "Actions",
                cellRenderer: actionsCellRender
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
                field: "commission",
                headerName: "Commission",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: switchCellRender
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
                cellRenderer: switchCellRender
            },
            {
                field: "gst",
                headerName: "GST (in %)",
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
                field: "commission",
                headerName: "Commission",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: switchCellRender
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
                cellRenderer: switchCellRender
            },
            {
                field: "gst",
                headerName: "GST (in %)",
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
                field: "commission",
                headerName: "Commission",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: switchCellRender
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
                cellRenderer: switchCellRender
            },
            {
                field: "gst",
                headerName: "GST (in %)",
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
                field: "commission",
                headerName: "Commission",
                cellEditor: 'agTextCellEditor',
            },
            {
                field: "isFlat",
                headerName: "Is Flat",
                cellRenderer: switchCellRender
            },
            {
                field: "isSurcharge",
                headerName: "Is Surcharge",
                cellRenderer: switchCellRender
            },
            {
                field: "gst",
                headerName: "GST (in %)",
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