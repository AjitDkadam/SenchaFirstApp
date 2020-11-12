/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Student Information',   
    
    store: {
        type: 'personnel'
    },
	
	id:'studGridStore',
	plugins : 'gridfilters',
	frame : true,
	
    columns: [
         { text: 'Roll No',  dataIndex: 'rollNo' ,align:'center'},
		{ text: 'Name',  dataIndex: 'name',align:'center',
			filter:{
				type : 'string'
			}
		},
        { text: 'Email', dataIndex: 'email', flex: 1,align:'center' },
        { text: 'Phone', dataIndex: 'phone', flex: 1 ,align:'center'},
		{ text: 'Address', dataIndex: 'address', flex: 1 ,align:'center',
			filter : {
				type : 'list',
				options : ['Pune','Mumbai','Delhi','Bhopal']
			}
		},
		 { text: 'Salary',  dataIndex: 'salary' ,align:'center',
			filter : {
				type : 'number'
			}
		},
		//Add action button.
		 {
            text:'Edit',
			align:'center',
			xtype:'actioncolumn',
			iconCls: 'x-fa fa-pencil',  // Use a URL in the icon config
            color:'red',
			tooltip: 'Edit',
            handler: 'editData'            

        },
 		{
            text:'Delete',
			align:'center',
			xtype:'actioncolumn',
			icon: 'images/deleteIcon-1.jpg',
            tooltip: 'Delete',
            handler: 'deleteData'            

        }
		
    ],
	
	tbar : [
		{
			xtype  : 'textfield',
			emptyText : 'Search..',
			id : 'searchText',
			width : 200,
			
		},
		{
			xtype : 'button',
			text : 'search',
			iconCls : 'x-fa fa-search blue',
			handler : 'searchData'
		}
	],
	
	
	
	//add pagination.
	/*bbar: {
		xtype : 'pagingtoolbar',
		displayInfo : true,
		displayMsg : 'Display Records {0} - {1} of {2}',
		emptyMsg : 'No record to display.'
	}*/
	//add pagination. This will work for EXT JS 6.0.2
	dockedItems :[{
		xtype :'pagingtoolbar',
		store: {
        	type: 'personnel'
    	},
        dock: 'bottom',
        displayInfo: true
	}]    

});
