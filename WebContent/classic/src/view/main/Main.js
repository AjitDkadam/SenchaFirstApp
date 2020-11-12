/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'tree-list',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
		'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List',
		'MyApp.view.main.StudentView',
		'MyApp.model.StudentModel',
		'MyApp.view.main.TreeViewExample',
		'MyApp.view.main.CreateCustomer',
		'MyApp.view.main.AllCustomerDetails'
    ],
	
	
	
    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'x-fa fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Student',
        iconCls: 'x-fa fa-user',
        items: [{
            xtype: 'studForm'
        }]
    }, {
        title: 'Groups',
        iconCls: 'x-fa fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Dev Team',
        iconCls: 'x-fa fa-user',
       	items: [{
            xtype: 'treeExmp'
        }]
    },{
		title : 'Customer',
		iconCls : 'x-fa fa-user',
		items : [{
			xtype :'form-hboxlayout'
		}]
	},{
		title : 'All Customer',
		iconCls : 'x-fa fa-user',
		items : [{
			xtype :'custList'
		}]
	}],
	
	

});
