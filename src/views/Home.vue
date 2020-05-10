<template>
  <div>
    <navbar />
    <div class="container">
      <h1>This is the home page</h1>
      <div class="feed">
        <Posts />
      </div>
    </div>
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
export default {
  data() {
    return {
      posts: []
    };
  },
  components: {
    Posts
  },
  methods: {
    updateFeed() {}
  }
};
</script>
>
