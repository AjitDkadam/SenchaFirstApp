/**
 * 
 */
Ext.define('MyApp.view.main.AllCustomerDetails',{
	extend : 'Ext.grid.Panel',
	xtype : 'custList',
	
	requires: [
        'MyApp.store.Customer'
    ],
	
	
	title  : 'All Customer Details.',
	
	 store: {
        type: 'customer'
    },
	
	id : 'customerGridStore',
	
	frame : true,
	
	columns : [
		 { text: 'Cust Code',  dataIndex: 'custCode', flex: 1, align:'center'},
		 { text: 'Cust Name',  dataIndex: 'custName', flex: 1, align:'center'},
	 	 { text: 'Contact',  dataIndex: 'custContact', flex: 1, align:'center'},
		 { text: 'Address',  dataIndex: 'custAddress', flex: 1, align:'center'},
	 	 { text: 'Currency',  dataIndex: 'currency', flex: 1, align:'center'},
	]
}) 