<template>
  <div>
    <h2>News Index page</h2>
    <p>NewID:{{ $route.params.newsId }}</p>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'news-id', params: { id: '2020_12_30' } }"
          >News-1</nuxt-link
        >
      </li>
      <li>
        <nuxt-link :to="{ name: 'news-id', params: { id: '2020_01_01' } }"
          >News-2</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
