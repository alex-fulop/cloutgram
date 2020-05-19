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
      name: "Postmaker",
      input: "",
      posts: [],
      id: 0
    };
  },

  methods: {
    post() {
      if (this.input != "") {
        this.posts.push({
          id: this.id,
          body: this.input,
          avatar: "default.jpg",
          author: "guest",
          reacts: {
            like: 0,
            love: 0,
            haha: 0,
            wow: 0,
            sad: 0,
            angry: 0,
            count: 0
          }
        });
        this.id = this.id + 1;
        this.$emit("inputData", this.posts);
        this.input = "";
      }
    }
  }
};
</script>

<style scoped>
.btn-primary {
  margin-top: 2.5rem;
  background: #fcd000;
  border-radius: 1rem;
  border: none;
}

.btn-primary:hover {
  background: #daae00 !important;
}
.postmaker {
  resize: none;
  position: relative;
  top: 1.5rem;
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
  height: 14rem;
  background: #333;
  border-radius: 1rem;
}
</style>
