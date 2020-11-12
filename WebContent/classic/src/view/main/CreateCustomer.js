/**
 * 
 */
Ext.define('MyApp.view.main.CreateCustomer',{
	extend : 'Ext.form.Panel',
	xtype : 'form-hboxlayout',
	title : 'Customer Information',
	bodypadding:'10',
	id : 'customerform',
	fieldDefaults:{
		labelAlign : 'top',
		msgTarget : 'side'
	},
	
	defaults : {
		border : false,  //this property is uded to add middle border.
		xtype : 'panel',
		flex : 1,
		layout : 'anchor'
	},
	
	layout : 'hbox',
	frame : true,
	padding : 10,
	items: [{
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Cust Code',
            anchor: '-5',
            name: 'custCode',
			id : 'custCode',
			allowBlank : false
        },{
            xtype:'textfield',
            fieldLabel: 'Contact',
            anchor: '-5',
            name: 'custContact',
			id : 'custContact',
			allowBlank : false
        },{
            xtype:'textfield',
            fieldLabel: 'Address',
            anchor: '-5',
            name: 'custAddress',
			id : 'custAddress',
			allowBlank : false
        }]
    }, {
        items: [{
            xtype : 'textfield',
            fieldLabel : 'Name',
            anchor: '100%',
            name : 'custName',
			id : 'custName',
			allowBlank : false
        },{
            xtype : 'textfield',
            fieldLabel : 'Email',
            anchor : '100%',
            name : 'custemail',
			id : 'custemail',
            vtype: 'email',
			allowBlank : false
        },{
            xtype : 'combobox',
            fieldLabel : 'Currency',
            anchor : '100%',
            name : 'currency',
			id : 'currency',
			
			 store: Ext.create('Ext.data.Store', {
             fields: ['abbr', 'name'],
             data: [{
                'value': 'USD',
                'name': 'USD'
             },{
                'value': 'EURO',
                'name': 'EURO'
             },{
                'value': 'INR',
                'name': 'INR'
             }]
          }),
          valueField: 'value',
          displayField: 'name',
		  allowBlank : false
		}]
    }],
	
	 buttons: [
        { 
			xtype: 'button', 
			text: 'SAVE',
			formBind : true,
			handler : 'addCustomer'
		},
        { text: 'Cancel' }
    ]
	
})