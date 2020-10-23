<template>
  <div >
    <!-- <div class="all">
      <div class="left"></div>
      <div class="right"></div>
      <div class="loat"></div>

    </div>
    <div class="bottom"></div> -->
    <span @click="changes">改变原始对象</span>
  </div>
</template>

<script>
  import {Button} from 'vant'
import counts from '../common/count.js'
import Clickoutside from '.././common/clickoutside.js'
import maps from './map.vue'
import store from '.././store/index.js'
import {post,get} from '../common/axios.js'
import {mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      myVal:"测试sync",
      obj1:{
        name:'张三',
        sex:"男",
        info:{
          age:15
        }
      },
      obj2:{},
      num:'3245667.23',
      checks:7,
      tableList:[
        {
          j1:'数据一',
          j2:"数据二",
          j3:"数据三"
        },
        {
          j1:'数据2',
          j2:"数据二",
          j3:"数据三"
        },
        {
          j1:'数据3',
          j2:"数据二",
          j3:"数据三"
        }
      ],
      pro:['j1','j2','j3'],
      options:[
        {
          name:'数据一',
          value:'1'
        },
        {
          name:'数据二',
          value:'3'
        },
        {
          name:'数据三',
          value:'3'
        },
        {
          name:'数据一',
          value:'4'
        }
      ]
    }
  },
  directives:{Clickoutside},
  beforeMount(){
    console.log(this.$refs.di)
  },
  created(){
    console.log('hello created')
  },
  mounted(){
    console.log('hello mounted')
  },
  activated(){
    console.log('hello activated')
  },
  deactivated(){
    console.log('hello deactivated')
  },
  destroyed(){
    console.log('hello destroyed')
  },
  computed:{
    ...mapGetters(['getCount'])
  },
  filters:{
    qian(val){
      var n = parseFloat(val).toFixed(4);
            var re = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
            return n.replace(re, "$1,");
      // if(val.indexOf('.')==-1){
      //   val =val +'.00'
      // }else{
      //   val=Number(val).toFixed(4)
      // }
      // return val.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,')
    }
  },
  methods:{
    changes(){
      this.obj2=Object.assign({},this.obj1)
      console.log(this.obj2)
      this.obj1.name="李四"
      this.obj2.info.age=27;
      console.log(this.obj1)
      console.log(this.obj2)
    },
    deepClone(obj){
      let result=Array.isArray(obj)?[]:{}
      for(  key in obj){
        if(typeof obj[key]=='object'){
         result[key]=this.deepClone(obj[key])
        }else{
          result[key]=obj[key]
        }
      }
      return result;
    },
    ceshi(){
      console.log(this)
    },
    login(){
         
         new Promise(resolve => {
          throw new Error('fail')

         })
         .then(() => {
           console.log('success')
         })
         .catch(error => {
           console.log(error)
         })
         
    }
  },
  components:{
    maps,
    [Button.name]:Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .all{
    overflow: hidden;
  }
  .left{
    width: 200px;
    height: 100px;
    border:1px solid red;
    margin-bottom: 20px;
  }
  .right{
    height: 200px;
    width: 100px;
    border:1px solid yellow;
    margin-top:30px;
  }
  .loat{
    float: left;
    border:1px solid blue;
    width: 50px;height: 50px;
  }
  .bottom{
    width:100px;
    height: 100px;
    border:1px solid green;
  }
</style>
