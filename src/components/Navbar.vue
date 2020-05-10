<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-main">
      <a class="logo" href="#">CloutGram</a>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a href="#" class="nav-link">Notification</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Explore</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Messages</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo {
  font-family: "Roboto Slab", serif;
  margin-left: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
}
.bg-main {
  background: linear-gradient(90deg, #fcd000, #76daff);
  height: 6rem;
  width: auto;
  border-radius: 5rem;
  margin: 2rem;
}
</style>
