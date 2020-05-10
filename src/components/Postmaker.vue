<template>
  <div class="form-maker">
    <div class="form-group background">
      <textarea
        class="form-control postmaker"
        name=""
        id=""
        rows="3"
        v-model="input"
      ></textarea>

      <button @click="post" type="submit" class="btn btn-primary">
        Post
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      posts: []
    };
  },

  methods: {
    post() {
      if (this.input != "") {
        this.posts.push({
          body: this.input,
          avatar: "default.jpg",
          author: "guest"
        });
        this.$emit("inputData", this.posts);
        this.input = "";
      }
    }
  }
};
</script>

<style scoped>
.btn-primary {
  margin-top: 2rem;
  background: #fcd000;
  border: none;
}

.btn-primary:hover {
  background: #daae00 !important;
}
.postmaker {
  position: relative;
  top: 1rem;
  left: 4%;
  color: #fff;
  width: 92%;
  background: #282828;
  border-radius: 1rem;
  border: none;
}

.postmaker:focus {
  color: #fff;
  background: #282828;
  border-radius: 1rem;
  border: none;
}

.background {
  height: 26vh;
  background: #333;
  border-radius: 1rem;
}
</style>
