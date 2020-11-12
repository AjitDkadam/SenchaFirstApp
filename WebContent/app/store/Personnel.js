
var itemsPerPage = 2; // set the number of items you want per page

Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
	models: ['MyApp.model.StudentModel'],
	id : 'studStore',
    fields: [
        'rollNo','name', 'email', 'phone','address','salary'
    ],
	pageSize: itemsPerPage,
	
    
	data: [
         { rollNo : '101', name: 'Jean Luc', email: "Jean@enterprise.com", phone: "123232",address:'Pune',salary:'20000' },
         { rollNo : '102', name: 'John Lee', email: "John@enterprise.com", phone: "222222222",address:'Mumbai',salary:'25000' },
		
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

	autoLoad: {start: 0, limit: itemsPerPage},
});


