<template>
  <div>
    <i :class="this.classes[this.type]"></i>
  </div>
</template>

<script>
export default {
  name: "icon",
  props: ["type"],
  data() {
    return {
      classes: {
        like: "fa fa-thumbs-up like fa-2x ml-2 icon",
        love: "fa fa-heart love fa-2x ml-2 icon",
        haha: "fas fa-laugh-squint haha fa-2x ml-2 icon",
        wow: "fas fa-surprise wow fa-2x ml-2 icon",
        sad: "fas fa-sad-cry sad fa-2x ml-2 icon",
        angry: "fas fa-angry angry fa-2x ml-2 icon",
        "like-small": "fa fa-thumbs-up like stat",
        "love-small": "fa fa-heart love stat",
        "haha-small": "fas fa-laugh-squint haha stat",
        "wow-small": "fas fa-surprise wow stat",
        "sad-small": "fas fa-sad-cry sad stat",
        "angry-small": "fas fa-angry angry stat"
      },
      class: ""
    };
  }
};
</script>

<style scoped>
.stat {
  margin: -0.2rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  padding: 0.25rem 0rem;
}
.stat:hover {
  transform: none;
}

.like {
  left: -0.3rem;
  z-index: 5;
  color: #0086da;
  background: #50b4f2;
}

.love {
  left: -0.3rem;
  z-index: 4;
  color: #ca0043;
  background: #f21b42;
}
.haha {
  left: -0.3rem;
  z-index: 0;
  color: #b1832d;
  background: #f2b544;
}

.wow {
  left: -0.3rem;
  z-index: 3;
  color: #b1832d;
  background: #f2b544;
}

.sad {
  left: -0.3rem;
  z-index: 2;
  color: #b1832d;
  background: #f2b544;
}
.angry {
  left: -0.3rem;
  z-index: 1;
  color: #ac3e3e;
  background: linear-gradient(#f26666, #f28444);
}
.icon {
  position: relative;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  padding: 0.5rem 0rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.icon:hover {
  transform: scale(1.5, 1.5);
  margin: 0rem 1rem !important;
}
</style>
