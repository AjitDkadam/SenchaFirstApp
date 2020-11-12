/**
 * 
 */
Ext.define('MyApp.view.main.ChartExample',{
	extend : 'Ext.Panel',
	xtype: 'column-basic',
	controller: 'main',
	
	tbar: [
        '->',
        {
            text: 'Preview',
            platformConfig: {
                desktop: {
                    text: 'Download'
                }
            },
            handler: 'onDownload'
        },
        {
            text: 'Reload Data',
            handler: 'onReloadData'
        }
    ],

	items: {
        xtype: 'cartesian',
        reference: 'chart',
        captions: {
            title: {
                text: 'Redwood City Climate Data',
                align: 'left'
            }
        },
        store: {
            type: 'climate'
        },
        downloadServerUrl: '//svg.sencha.io',
        interactions: {
            type: 'itemedit',
            tooltip: {
                renderer: 'onEditTipRender'
            },
            renderer: 'onColumnEdit'
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            minimum: 30,
            titleMargin: 20,
            title: {
                text: 'Temperature in °F'
            },
            listeners: {
                rangechange: 'onAxisRangeChange'
            }
        }, {
            type: 'category',
            position: 'bottom'
        }],
        animation: Ext.isIE8 ? false : true,
        series: {
            type: 'bar',
            xField: 'month',
            yField: 'highF',
            style: {
                minGapWidth: 20
            },
            highlight: {
                strokeStyle: 'black',
                fillStyle: 'gold'
            },
            label: {
                field: 'highF',
                display: 'insideEnd',
                renderer: 'onSeriesLabelRender'
            }
        },
        listeners: {
            afterrender: 'onAfterRender',
            beginitemedit: 'onBeginItemEdit',
            enditemedit: 'onEndItemEdit'
        }
    }
	
})