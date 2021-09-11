<template>
  <div class="min-h-screen bg-not-black">
    <nav>
      <Auth />
      <router-link to="/reviews">Reviews</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
