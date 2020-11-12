/**
 * 
 */

Ext.define('MyApp.view.main.StudentView',{
	
	extend : 'Ext.form.Panel',
	xtype : 'studForm',
	title: 'Student Detail Form',
    bodyPadding: 10,
    id : 'studentForm',
	defaultType: 'textfield',
    items: [
        {
            xtype: 'numberfield',
			fieldLabel: 'Roll No',
            name : 'rollNo',
  			id : 'rollNo',
			anchor: '50%',
			allowBlank: false,  // requires a non-empty value
			 // Remove spinner buttons, and arrow key and mouse wheel listeners
	        hideTrigger: true,
	        keyNavEnabled: false,
	        mouseWheelEnabled: false
	       
        },
        {
            fieldLabel: 'Name',
            name: 'name',
 			id: 'name',
			anchor: '50%',
			allowBlank: false
        },
		{
            fieldLabel: 'Email',
            name: 'email',
			id: 'email',
			vtype: 'email',
			anchor: '50%',
			allowBlank: false
        },
		{
			xtype: 'numberfield',
			fieldLabel: 'Phone',
            name: 'phone',
			id: 'phone',
			anchor: '50%',
			allowBlank: false,
			hideTrigger : true,
			minLength : 10,
			maxLength : 10
        },
		{
			xtype : 'checkbox',
			boxLabel : 'is Local',
			reference : 'isLocal'	
		},	
		{
            fieldLabel: 'Address',
            name: 'address',
			id: 'address',
			anchor: '50%',
			allowBlank: false,
			bind : {
				disabled : '{!isLocal.checked}'
			}
        },
        {
			xtype: 'numberfield',
			fieldLabel: 'Salary',
            name: 'salary',
			id: 'salary',
			anchor: '50%',
			allowBlank: false,
			 // Remove spinner buttons, and arrow key and mouse wheel listeners
	        hideTrigger: true,
	        keyNavEnabled: false,
	        mouseWheelEnabled: false
		},
		{
		   xtype: 'button', 
		   text : 'Save',
		   handler : 'saveData',
		   formBind: true
		}
	]
	
});