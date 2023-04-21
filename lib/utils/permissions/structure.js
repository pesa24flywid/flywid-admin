const aepsList = [{
    value: "allAeps",
    label: "All AePS Services",
    children: [
        { value: 'aepsTransaction', label: 'Basic Transactions' },
        { value: 'aadhaarPay', label: 'AePS Payouts' },
        { value: 'aepsReport', label: 'AePS Reports' },
    ]
}]


const bbpsList = [{
    value: "allBbps",
    label: "All BBPS Services",
    children: [
        { value: 'bbpsTransaction', label: 'BBPS Transactions' },
        { value: 'bbpsReport', label: 'BBPS Reports' },
    ]
}]


const dmtList = [{
    value: "alldmt",
    label: "All DMT Services",
    children: [
        { value: 'dmtTransaction', label: 'DMT Transactions' },
        { value: 'dmtReport', label: 'DMT Reports' },
    ]
}]


const payoutList = [{
    value: "allPayout",
    label: "All Payout Services",
    children: [
        { value: 'payoutTransaction', label: 'Payout Transactions' },
        { value: 'payoutReport', label: 'Payout Reports' },
    ]
}]


const rechargeList = [{
    value: "allRecharge",
    label: "All Recharge Services",
    children: [
        { value: 'rechargeTransaction', label: 'Recharge Transactions' },
        { value: 'rechargeReport', label: 'Recharge Reports' },
    ]
}]


const panList = [{
    value: "allPan",
    label: "All PAN Services",
    children: [
        { value: 'panTransaction', label: 'PAN Transactions' },
        { value: 'panReport', label: 'PAN Reports' },
    ]
}]


const cmsList = [{
    value: "allCms",
    label: "All CMS Services",
    children: [
        { value: 'cmsTransaction', label: 'CMS Transactions' },
        { value: 'cmsReport', label: 'CMS Reports' },
    ]
}]


const matmList = [{
    value: "allMatm",
    label: "All mATM Services",
    children: [
        { value: 'matmTransaction', label: 'mATM Transactions' },
        { value: 'matmReport', label: 'mATM Reports' },
    ]
}]

export {aepsList, bbpsList, cmsList, dmtList, matmList, panList, payoutList, rechargeList}

