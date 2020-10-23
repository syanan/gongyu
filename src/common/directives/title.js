import Vue from 'vue'
import Tip from '../../components/tip.vue'
const Tips = Vue.extend(Tip),
      normalTip=new Tips().$mount(),
      warnTip=new Tips().$mount();
document.body.appendChild(normalTip.$el);
document.body.appendChild(warnTip.$el)


function toggle(el,open){
        const tip= el.dataset.warn?warnTip:normalTip;
        console.log(tip.$el)
        if(open){
                tip.message=el.dataset.title
                tip.direction = el.dataset.titleDirection;
                tip.line = el.dataset.line; 
                tip.warn = el.dataset.warn;
                let {left,right,top,bottom,width,height} =el.getBoundingClientRect()
                tip.show();
        }else{
                tip.close();  
        }
}
function show(evt){
        toggle(evt.target,true)
}
function hide(evt){
        toggle(evt.target,false)
}

export default{
        bind(el,binding,vnode,oldVnode){
                el.addEventListener('mouseenter',show,false)
                el.addEventListener('mouseleave',hide,false)
                el.dataset.title = binding.value; 
                el.dataset.titleDirection=binding.arg || 'bottom';
                if (binding.modifiers.line) el.dataset.line = true;
                if (binding.modifiers.warn) el.dataset.warn = true; 
        },
        update(el,{oldValue,value}){
                console.log(oldValue)
                console.log(value)
        },
        unbind(el){
                console.log('解绑')
        }
}