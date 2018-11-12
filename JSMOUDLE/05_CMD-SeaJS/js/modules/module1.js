define(function(require,exports,module){
    let msg = 'module1';
    function foo(){
        return msg;
    }
    module.exports = {foo};
});