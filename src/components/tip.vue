<template>
        <div class="tip" :class="[direction,{line,warn}]"
             v-show="open" v-text="message" @mouseenter="show" @mouseleave="close"></div>
      
    </template>
    <script>
     export default{
      data(){
        return {
          message:"",
          open:false,
          timer:null,
          direction:'top',
          line:false,
          warn:""
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
    <style lang="less">
          @import '../assets/style/mixin.less';
      .tip {
        position: absolute;
        padding: 3px 8px;
        z-index: 100;
        line-height: 18px;
        color: white;
        background-color: #ccc;
        &.top {
            .transform(translate(-50%, -100%))

            &:after {
                bottom: 0;
                left: 50%;
                margin-left: -5px;
                margin-bottom: -10px;
            }
        }

        &.bottom {
            .transform(translate(-50%, 0))

            &:after {
                top: 0;
                left: 50%;
                margin-left: -5px;
                margin-top: -10px;
            }
        }

        &.bottom-left {
            .transform(translate(-100%, 0))

            &:after {
                top: 0;
                right: 0;
                margin-right: 10px;
                margin-top: -10px;
            }
        }

        &.left {
            .transform(translate(-100%, -50%))

            &:after {
                right: 0;
                top: 50%;
                margin-top: -5px;
                margin-right: -10px;
            }
        }

        &.right {
            .transform(translate(0, -50%))

            &:after {
                left: 0;
                top: 50%;
                margin-top: -5px;
                margin-left: -10px;
            }
        }

      }
    </style>
    