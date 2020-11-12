/**
 * 
 */
Ext.define('MyApp.store.Customer',{
	extend : 'Ext.data.Store',
	alias : 'store.customer',

	fields : ['custCode','custName','custContact','custAddress','currency'],
	
	data : [
		  { custCode : '101', custName: 'Jean Luc', custContact: "123232",custAddress:'Pune',currency:'INR' },	
	],
	proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

	autoLoad: true,
})