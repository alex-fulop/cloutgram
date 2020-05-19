<template>
  <div>
    <Icon @click.native="addReact('like')" :type="'like'" />
    <Icon @click.native="addReact('love')" :type="'love'" />
    <Icon @click.native="addReact('haha')" :type="'haha'" />
    <Icon @click.native="addReact('sad')" :type="'sad'" />
    <Icon @click.native="addReact('wow')" :type="'wow'" />
    <Icon @click.native="addReact('angry')" :type="'angry'" />
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  props: ["post"],
  components: {
    Icon
  },
  data() {
    return {
      reacted: false
    };
  },
  methods: {
    addReact(option) {
      this.post.reacts[option] += 1;

      if (this.$parent.react) {
        this.post.reacts[this.$parent.react] -= 1;
        this.post.reacts.count -= 1;
      }
      this.post.reacts.count += 1;
      this.$parent.showReacts = false;
      this.$parent.reacted = true;
      this.$parent.react = option;
    }
  }
};
</script>

<style scoped>
/* Reacts */
.reacts {
  z-index: 10000;
  width: 25rem;
  background: rgb(48, 48, 48);
  border-radius: 1rem;
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  animation: show 1s ease-in-out;
}

.reacts::after {
  background: red;
}

.reacts:hover {
  padding-top: 1.5rem;
  height: 6rem;
}
.reacts > * {
  display: inline;
  border-radius: 50%;
  padding: 0.5rem 0rem;
}

.name {
  color: #76daff;
  font-size: 1.2rem;
}

@keyframes show {
  0% {
    transform: translateY(-1rem) scale(0.2, 0.2);
    opacity: 0%;
  }

  100% {
  }
}
</style>
