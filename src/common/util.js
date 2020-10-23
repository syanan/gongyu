import Toast from '../components/toast.vue';
import Title from './directives/title.js'
import timer from '../components/timer.vue'
export default{
    install(Vue){
        let toast =null;
        Vue.prototype.$toast=function(message){
            toast =new Vue(Toast).$mount();
            document.body.appendChild(toast.$el);
            toast.message=message;
            toast.show();
            toast.reset()
        }
        Vue.directive('title',Title)
        Vue.component(timer.name,timer)
    }
}