/**
 * 
 */
Ext.define('MyApp.view.main.TreeViewExample',{
	extend : 'Ext.tree.Panel',
	title : 'Development Team Tree',
	xtype :'treeExmp',
	frame : true,
	root : {
		text : 'Impact Systems',
		expanded : false,
		children : [
			{
				text:'Mangesh Honwad',
				expanded : false,
				children :[
					{
						text : 'Aniket Raje',
						expanded : false,
						children : [
							{
								text : 'Girish Patil',
								expanded : false,
								children :[
									{
										text:'Amol Edewar',
										leaf : true
									},
									{
										text : 'Ajit Kadam',
										leaf : true
									},
									{
										text : 'Laxaman Sangade',
										leaf : true
									},
									{
										text : 'Hemmanand Raju',
										leaf : true
									}
								]
							}
						]
					}
				]
			},
			
			
		]
	}
})