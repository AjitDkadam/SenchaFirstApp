/**
 * 
 */
Ext.define('MyApp.model.StudentModel',{
	extend: 'Ext.data.Model',
    fields: [
        {name: 'rollNo',   type: 'int', convert: null},
		{name: 'name',     type: 'string'},
        {name: 'email',    type: 'string'},
		{name: 'phone',    type: 'string'},
		{name: 'address',  type: 'string'},
    ],
	
	//below code is not used yet. This is just inly for reference.
	validations: [
       {type: 'presence', name: 'name',message:"Enter Name"},
       {type: 'format',   name: 'email', matcher: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message:"Wrong Email Format"}
    ]
})

