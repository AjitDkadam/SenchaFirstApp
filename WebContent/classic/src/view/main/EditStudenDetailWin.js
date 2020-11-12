/**
 * 
 */
Ext.define('MyApp.view.main.EditStudenDetailWin',{
	extend : 'Ext.window.Window',
	height : 350,
	width:300,
	padding : 10,
	title:'Update Student Details',
	defaultType: 'textfield',
    items: [
        {
            
			xtype: 'numberfield',
			fieldLabel: 'Roll No',
            name : 'urno',
  			id : 'urno',
			readOnly : true
	       
        },
		{
            fieldLabel: 'Name',
            name: 'uname',
 			id: 'uname',
			anchor: '50%',
			allowBlank: false
        },
		{
            fieldLabel: 'Email',
            name: 'uemail',
			id: 'uemail',
			anchor: '50%',
			allowBlank: false
        },
		{
            fieldLabel: 'Phone',
            name: 'uphone',
			id: 'uphone',
			anchor: '50%',
			allowBlank: false
        },	
		{
            fieldLabel: 'Address',
            name: 'uaddress',
			id: 'uaddress',
			anchor: '50%',
			allowBlank: false
        },
		{
            xtype : 'numberfield',
			fieldLabel: 'Salary',
            name: 'usalary',
			id: 'usalary',
			anchor: '50%',
			allowBlank: false,
			hideTrigger : true,
        },
        
		{
		   xtype: 'button', 
		   text : 'Update',
		   handler : 'updateData',
		   formBind: true
		}
	]
});
