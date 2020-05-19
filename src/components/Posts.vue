<template>
  <div>
    <appPostmaker @inputData="updateFeed" />

    <div v-for="(post, index) in this.posts" :key="index">
      <appPost :post="post" />
    </div>
  </div>
</template>

<script>
import Postmaker from "@/components/Postmaker.vue";
import Post from "@/components/Post.vue";
export default {
  props: [],
  components: { appPostmaker: Postmaker, appPost: Post },
  data() {
    return {
      posts: ""
    };
  },
  methods: {
    updateFeed(posts) {
      this.posts = posts;
    }
  }
};
</script>

<style scoped></style>
