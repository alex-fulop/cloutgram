<template>
  <div>
    <nav class="navbar navbar-expand navbar-light bg-main">
      <a class="logo" href="#">CloutGram</a>
      <form class="form-inline mr-auto">
        <input
          class="form-control mr-sm-2 search-box"
          type="search"
          placeholder="Search Cloutgram"
          aria-label="Search"
        />
      </form>
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
.search-box {
  border: none !important;
  border-radius: 2rem !important;
  background: rgba(0, 0, 0, 0.5) !important;
}

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
