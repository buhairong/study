(function(){
    requirejs.config({
        baseUrl : 'js/',
        paths : {
            dataService : './modules/dataService',
            alerter : './modules/alerter',
            jquery : './libs/jquery-1.10.1',
            angular : './libs/angular'
        },
        shim : {
            angular : {
                exports : 'angular'
            }
        }
    });

    requirejs(['alerter','angular'],function(alerter,angular){
        alerter.showMsg();
        console.log(angular);
    });
})()