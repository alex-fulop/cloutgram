<template>
  <div>
    <div class="comment">
      <div class="d-flex">
        <img
          class="avatar"
          :src="require(`../assets/images/${post.avatar}`)"
          alt="avatar"
        />

        <div class="body">
          {{ comment.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comment"],
  data() {
    return {
      body: "",
      reacts: ""
    };
  }
};
</script>

<style scoped></style>
