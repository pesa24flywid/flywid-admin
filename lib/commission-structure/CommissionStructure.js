const CommissionStructure = [
    {
        id: "bbps",
        title: "bbps",
        columnDefs: [
            {
                field: "operator_name",
                headerName: "Operator Name",
                editable: true,
                cellEditor: "operatorNamesCellEditor"
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
                editable: true,
                cellEditor: "agTextCellEditor",
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
                operator_name: "",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                fixed_charge: "",
                is_flat: "",
                gst: ""
            },
        ]
    },
    {
        id: "aeps-cash-withdrawal",
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
        id: "aeps-aadhaar-pay",
        title: "aeps-aadhaar-pay",
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
        id: "aeps-mini-statement",
        title: "aeps mini statement",
        columnDefs: [
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
            // {
            //     field: "actions",
            //     headerName: "Actions",
            //     cellRenderer: 'actionsCellRender',
            //     editable: false
            // },
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