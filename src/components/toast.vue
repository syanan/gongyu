<template>
    <transition name="fall-and-fade">
      <div class="toast" v-show="open">
        <!-- <svg aria-hidden="true">
          <use xlink :href="'#icon-zhexian'"></use>
        </svg> -->
        {{message}}
      </div>
    </transition>
  
</template>
<script>
 export default{
  data(){
    return {
      message:"",
      open:false,
      timer:null
    }
    
  },
  methods:{
    show(){
      this.open=true;
    },
    close(){
      this.open=false;
    },
    reset() {
      const enChars = this.message.match(/\w/g);
      const len = enChars ? (this.message.length - enChars.length / 2) : this.message.length;
      const time = Math.min(Math.max(1200, len * 300), 3000);
      this.timer = setTimeout(() => {
          // clearTimeout(this.timer);
          this.close();
      }, 4000);
    }
  }
}
</script>
<style>
  .toast{
    background-color: cornflowerblue;
  }
</style>
