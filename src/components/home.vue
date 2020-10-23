<template>
  <div class="container">
      <span @click="jump">ceshi1</span>
      <span>
        你好啊
      </span> 
      <p>
        嗯嗯
      </p>
      <input type="text" placeholder="home页面">
  </div>
</template>

<script>
import counts from '../common/count.js'
import Clickoutside from '.././common/clickoutside.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      show1:true,
      // counts:counts
    }
  },
  directives:{Clickoutside},
  created(){
    console.log('home created')
  },
  mounted(){
    console.log('home mounted')
  },
  activated(){
    console.log('home activated')
  },
  deactivated(){
    console.log('home deactivated')
  },
  destroyed(){
    console.log('home destroyed')
  },
  methods:{
    clickBtn(){
      this.show1=true;
      console.log(this.show1);
    },
    dateFormat2(val){
      return `${val.year}+${val.month}+${val.day}`.replace(/\d+/g,a => {
        return a.length==4?a:(a.length==2?a:'0'+a)
      })
    },
    jump(){
      this.$router.push({
        name:"ceshi1"
      },success => {
        console.log('跳转成功')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
$color:red;
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
.container{
  span{
    $color:blue;
    color:$color;
  }
  p{
    color:$color;
  }
}

</style>
