/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
var updateStudwin = null;
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
	models: ['MyApp.model.StudentModel'],
	stores: ['MyApp.store.Personnel'],
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

	saveData : function(){
		var record = Ext.getCmp('studentForm').getValues();
	    var studStore=Ext.getCmp('studGridStore').getStore();
		var rollNo = Ext.getCmp('rollNo').getValue();
		var storeCount = studStore.getCount();
		var isExist = true;
		for(var i=0;i<storeCount;i++){
			var storeRecord = studStore.getAt(i);
			var extRollNo = storeRecord.get('rollNo');
			if(rollNo ==extRollNo){
				isExist = false;
				break;
			}
		}
		
		if(isExist){
			studStore.add(record);
			Ext.Msg.alert('Success!', 'Record saved successfully.');
			Ext.getCmp('studentForm').reset();
		}else{
			Ext.Msg.alert('Warning!','Entered Roll No already exist in the system.');
		}
		
	},
	
	deleteData : function(grid,rowIndex,colIndex){
		Ext.Msg.confirm("Confirmation", "Are you sure you want to delete this record?",deleteRecord);
		function  deleteRecord(ans){
			if(ans=='yes'){
				var studStore = Ext.getCmp('studGridStore').getStore();
				studStore.removeAt(rowIndex);
				Ext.Msg.alert('Success!','Record deleted successfully!');
			}
			
		}
	
	},
	
	editData : function(grid,rowIndex,colIndex){
		var record = grid.getStore().getAt(rowIndex);
		var rolNo = record.get('rollNo');
		updateStudwin = Ext.create('MyApp.view.main.EditStudenDetailWin');
		updateStudwin.show();
		Ext.getCmp('urno').setValue(record.get('rollNo'));
		Ext.getCmp('uname').setValue(record.get('name'));
		Ext.getCmp('uemail').setValue(record.get('email'));
		Ext.getCmp('uphone').setValue(record.get('phone'));
		Ext.getCmp('uaddress').setValue(record.get('address'));
		Ext.getCmp('usalary').setValue(record.get('salary'));
	},
	
	updateData : function(){
		var studStore=Ext.getCmp('studGridStore').getStore();
		var storeCount = studStore.getCount();
		var urno = Ext.getCmp('urno').getValue();
		for(var i=0;i<storeCount;i++){
			var storeRecord = studStore.getAt(i);
			var extRollNo = storeRecord.get('rollNo');
			if(urno == extRollNo){
				storeRecord.set('name',Ext.getCmp('uname').getValue());
				storeRecord.set('email',Ext.getCmp('uemail').getValue());
				storeRecord.set('phone',Ext.getCmp('uphone').getValue());
				storeRecord.set('address',Ext.getCmp('uaddress').getValue());
				storeRecord.set('salary',Ext.getCmp('usalary').getValue());
				storeRecord.commit();
				updateStudwin.close();
				Ext.Msg.alert('Success!','Record updated successfully in to system.');
			}
		}
	},
	
	searchData : function(){
		var searhText = Ext.getCmp('searchText').getValue();
		alert("searhText----->"+searhText.toUpperCase());
		var studStore=Ext.getCmp('studGridStore').getStore();
		var storeCount = studStore.getCount();
		for(var i =0;i<storeCount;i++){
			var storeRec = studStore.getAt(i);
			var name = storeRec.get('name');
			if(searhText.toUpperCase() == name.toUpperCase()){
				
			}
		}
	},
	
	addCustomer : function(){
		var custStore = Ext.getCmp('customerGridStore').getStore();
		var custCount = custStore.getCount();
		var customer = Ext.getCmp('customerform').getValues();
		console.log('customer---->'+customer);
		custStore.add(customer);
		Ext.Msg.alert('Success!', 'Record saved successfully.');
		Ext.getCmp('customerform').reset();
	},
	
	
	
	
	//Below code is for Chart Example.
	onDownload: function() {
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            return;
        }
        var chart = this.lookup('chart');
        if (Ext.os.is.Desktop) {
            chart.download({
                filename: 'Redwood City Climate Data Chart'
            });
        } else {
            chart.preview();
        }
    },

    onReloadData: function() {
        var chart = this.lookup('chart');
        chart.getStore().refreshData();
    },
	
	// The 'target' here is an object that contains information
    // about the target value when the drag operation on the column ends.
    onEditTipRender: function (tooltip, item, target, e) {
        tooltip.setHtml('Temperature °F: ' + target.yValue.toFixed(1));
    },

    onSeriesLabelRender: function (value) {
        return value.toFixed(1);
    },

	onColumnEdit: function (chart, data) {
        var threshold = 65,
            delta = 20,
            yValue = data.target.yValue,
            coldness;

        if (yValue < threshold) {
            coldness = Ext.Number.constrain((threshold - yValue) / delta, 0, 1);
            return {
                fillStyle: 'rgba(133, 231, 252, ' + coldness.toString() + ')'
            };
        } else {
            return {
                fillStyle: 'none'
            };
        }
    },
	
	onAfterRender: function () {
        var me = this,
            chart = this.lookup('chart'),
            axis = chart.getAxis(0),
            store = chart.getStore();

        function onAxisRangeChange() {
            me.onAxisRangeChange(axis);
        }

        store.on({
            datachanged: onAxisRangeChange,
            update: onAxisRangeChange
        });
    },

	onAxisRangeChange: function (axis, range) {
        // this.lookup('chart') will fail here,
        // as at the time of this call
        // the chart is not yet in the component tree,
        // so we have to use axis.getChart() instead.
        var chart = axis.getChart(),
            store = chart.getStore(),
            average = store.average('highF');

        if (average) {
            axis.setLimits({
                value: average,
                line: {
                    title: {
                        text: 'Average high: ' + average.toFixed(2) + '°F'
                    },
                    lineDash: [2,2]
                }
            });
        } else {
            axis.setLimits(null);
        }
    },

    itemAnimationDuration: 0,

    // Disable item's animaton for editing.
    onBeginItemEdit: function (chart, interaction, item) {
        var itemsMarker = item.sprite.getMarker(item.category),
            animation = itemsMarker.getTemplate().getAnimation(); // animation modifier

        this.itemAnimationDuration = animation.getDuration();
        animation.setDuration(0);
    },

    // Restore item's animation when editing is done.
    onEndItemEdit: function (chart, interaction, item, target) {
        var itemsMarker = item.sprite.getMarker(item.category),
            animation = itemsMarker.getTemplate().getAnimation();

        animation.setDuration(this.itemAnimationDuration);
    }



	
});
