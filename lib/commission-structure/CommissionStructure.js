const CommissionStructure = [
    {
        id: "bbps",
        title: "bbps",
        columnDefs: [
            {
                field: "operator_name",
                headerName: "Operator Name",
                editable: true,
                cellEditor: "agSelectCellEditor",
                cellEditorParams : {
                    values: []
                }
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
                editable: false,
                cellRenderer: "switchCellRenderer",
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
                editable: false,
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
                editable: false,
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
                editable: false,
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
                editable: false,
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
        id: "matm",
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
                editable: false,
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
        id: "money-deposit",
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
        id: "cms",
        title: "cms",
        columnDefs: [
            {
                field: "biller_id",
                headerName: "Biller ID",
                cellEditor: 'agSelectCellEditor'
            },
            // {
            //     field: "biller_name",
            //     headerName: "Biller Name",
            // },
            // {
            //     field: "provider",
            //     headerName: "Provider",
            //     editable: true,
            //     cellEditor: 'agSelectCellEditor',
            //     cellEditorParams: {
            //         values: ['airtel', 'fino']
            //     }
            // },
            // {
            //     field: "from",
            //     headerName: "From Value",
            //     editable: true,
            //     cellEditor: 'agTextCellEditor',
            // },
            // {
            //     field: "to",
            //     headerName: "To Value",
            //     editable: true,
            //     cellEditor: 'agTextCellEditor',
            // },
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
                editable: false,
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
                biller_id: "",
                // biller_name: "",
                // from: "",
                // to: "",
                retailer_commission: "",
                distributor_commission: "",
                super_distributor_commission: "",
                fixed_charge: "",
                is_flat: "",
                gst: "",
                actions: ""
            }
        ]
    },
    {
        id: "lic",
        title: "lic services",
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
                editable: false,
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
        id: "pan",
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
                editable: false,
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
        id: "aeps-mini-statement",
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
                editable: false,
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
                editable: false,
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
                from: "",
                to: "",
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
        id: "fastag",
        title: "Fastag",
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
                editable: false,
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
                from: "",
                to: "",
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