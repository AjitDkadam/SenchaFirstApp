/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'First App',

        loremIpsum: 'This text is only for testing purpose.'
    }

    //TODO - add data, formulas and/or methods to support your view
});
