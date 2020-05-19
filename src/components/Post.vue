<template>
  <div>
    <div class="post">
      <div class="d-flex align-items-start">
        <img
          class="avatar"
          :src="require(`../assets/images/${post.avatar}`)"
          alt="avatar"
        />
        <a href="#" class="name">{{ post.author }}</a>
      </div>
      <div class="d-flex body">{{ post.body }}</div>
      <div class="container">
        <Reacts v-if="this.showReacts" class="reacts" :post="post" />
        <div class="d-flex stats">
          <div class="d-flex">
            <div class="mr-3 count">
              {{ post.reacts.count > 0 ? post.reacts.count : "" }}
            </div>
            <Icon v-if="post.reacts.like > 0" :type="'like-small'" />
            <Icon v-if="post.reacts.love > 0" :type="'love-small'" />
            <Icon v-if="post.reacts.haha > 0" :type="'haha-small'" />
            <Icon v-if="post.reacts.wow > 0" :type="'wow-small'" />
            <Icon v-if="post.reacts.sad > 0" :type="'sad-small'" />
            <Icon v-if="post.reacts.angry > 0" :type="'angry-small'" />
          </div>
        </div>
      </div>

      <div class="btns">
        <button
          id="reactBut"
          @mouseover="show"
          @click.prevent="addReact('like')"
          class="btn"
          v-if="this.reacted == false"
        >
          Like
        </button>
        <button @mouseover="show" class="btn" v-else>
          <div :class="this.react" @click.prevent="addReact('like', true)">
            {{ this.react.charAt(0).toUpperCase() + this.react.slice(1) }}
          </div>
        </button>
        <button
          class="btn"
          @click="
            toggleComments ? (toggleComments = false) : (toggleComments = true)
          "
        >
          Comment
        </button>
        <button class="btn">Share</button>

        <div class="comments">
          <div class="comment" v-for="comment in this.commments" :key="comment">
            <Comment :comment="comment" />
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="toggleComments"
      class="form-group d-flex commentMaker
      "
    >
      <div style="display: block;">
        <input
          type="text"
          class="form-control comment"
          aria-describedby="helpId"
          placeholder="Your comment goes here"
        />
        <button type="submit" class="btn btn-primary">post</button>
      </div>
    </div>
  </div>
</template>

<script>
import Reacts from "@/components/Reacts.vue";
import Icon from "@/components/Icon.vue";
import Comment from "@/components/Comment.vue";
export default {
  props: ["post"],
  components: {
    Reacts,
    Icon,
    Comment
  },
  data() {
    return {
      showReacts: false,
      reacted: false,
      react: "",
      comments: [],
      toggleComments: false
    };
  },
  name: "post",
  methods: {
    show() {
      this.showReacts ? (this.showReacts = false) : (this.showReacts = true);
    },
    addReact(option, btn = false) {
      if (btn == true) {
        this.reacted = false;
        this.post.reacts[this.react] -= 1;
        this.post.reacts.count -= 1;
        this.react = "";
      } else if (this.reacted == false) {
        this.reacted = true;
        this.post.reacts[option] += 1;
        this.post.reacts.count += 1;
        this.showReacts = false;
        this.react = option;
      }
    }
  }
};
</script>

<style scoped>
.comment {
  border: none;
  border-radius: 1rem;
  width: 40%;
}

.commentMaker {
  position: relative;
  bottom: 0.8rem;
  width: 100%;
  padding: 1rem;
  background: #ddd;
  border-radius: 0rem 0rem 1rem 1rem;
  transition: all 1s ease;
  z-index: -1;
  padding-top: 2rem;
}

.commentMaker input {
  position: fixed;
}

.btn-primary {
  background: #76daff;
  border: none;
  border-radius: 1rem;
  margin-left: 1rem;
}

.btn-primary:hover {
  background: #5ccdf7;
}
.count {
  height: 2rem;
}
.like {
  color: #0086da;
}
.love {
  color: #ca0043;
}
.haha {
  color: #f2b544;
}
.wow {
  color: #f2b544;
}
.sad {
  color: #f2b544;
}
.angry {
  color: #ac1f1f;
}
.btns {
  position: relative;
}

.container {
  position: relative;
}
.stats {
  display: flex;
}

.stats > * {
  width: 2.5rem;
}
.reacts {
  position: absolute;
  bottom: 0.4rem;
  left: 0.2rem;
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
  height: 12.5rem;
  animation: slide 1s ease-in-out;
}

@keyframes slide {
  0% {
    height: 15rem;
  }
}
</style>
