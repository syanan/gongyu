<template>
        <div class="timer">
                <span @click="$emit('update:val','更改了')">{{val}}</span>
        </div>
</template>
<script>
        export default{
                name:'vue-timer',
                data(){
                        return {
                                count:""
                        }
                },
                methods:{
                      
                },
                props:['val']
        }
</script>
<style lang="less">

</style>