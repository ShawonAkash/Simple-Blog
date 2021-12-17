<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePosts :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePosts from './SinglePosts.vue'
export default {
 props: ['posts'],
 components: {SinglePosts},
 setup(props){
   onMounted(()=>{
     
   })
   onUnmounted(()=>{
     
   })
   onUpdated(()=>{
     
   })

 }
}
</script>

<style>
</style>