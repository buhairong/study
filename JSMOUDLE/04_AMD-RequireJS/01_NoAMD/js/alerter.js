(function(window,dataService){
   let msg = 'alerter.js';
   function showMsg(){
       console.log(msg,dataService.getName());
   }
   window.alerter = {showMsg};

})(window,dataService)