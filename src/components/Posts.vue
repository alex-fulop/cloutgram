<template>
  <div>
    <Postmaker @inputData="updateFeed" />

    <div v-for="(post, index) in this.posts" :key="index">
      <div class="post">
        <div class="d-flex align-items-start">
          <img
            class="avatar"
            :src="require(`../assets/images/${post.avatar}`)"
            alt="avatar"
          />
          <a href="#" class="name">{{ post.author }}</a>
        </div>
        <div class="d-flex body">
          {{ post.body }}
        </div>
        <div class="d-flex btns">
          <button class="btn">Like</button>
          <button class="btn">Comment</button>
          <button class="btn">Share</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Postmaker from "@/components/Postmaker.vue";
export default {
  props: [],
  components: { Postmaker },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    updateFeed(variable) {
      this.posts = variable;
    }
  }
};
</script>

<style scoped>
.name {
  color: #76daff;
  font-size: 1.2rem;
}

.body {
  margin: 1rem;
}
.avatar {
  margin: 0rem 0.7rem 0.6rem 0.1rem;
  height: 3rem;
  border-radius: 5rem;
}

.post {
  background: #ddd;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
}
</style>
