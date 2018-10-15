(function(){
    const MyPlugin = {};
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            console.log("Vue函数对象的方法myGlobalMethod()");
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', {
            bind (el, binding, vnode, oldVnode) {
                el.textContent = binding.value.toUpperCase();
            }

        })

        // 3. 注入组件
        Vue.mixin({
            created: function () {
                // 逻辑...
            }
        })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log("Vue实例对象的方法$myMethod()");
        }
    }

    window.MyPlugin = MyPlugin;
})()