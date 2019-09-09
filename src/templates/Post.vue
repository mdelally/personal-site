<template>
  <Internal>
    <blog-container :post="$page.post">
      <div class="content" v-html="$page.post.content" />
    </blog-container>
  </Internal>
</template>

<script>
import BlogContainer from "@/layouts/partials/BlogContainer.vue";

export default {
  components: {
    BlogContainer
  }
};
</script>

<page-query>
  query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "MMMM D, YYYY")
    timeToRead
  }
}
</page-query>