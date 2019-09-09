<template>
  <Internal>
    <page-container title="Blog">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </page-container>
  </Internal>
</template>

<script>
import PageContainer from "@/layouts/partials/PageContainer.vue";
import PostList from "@/components/PostList";
export default {
  components: {
    PageContainer,
    PostList
  },
  metaInfo: {
    title: "Blog"
  }
};
</script>

<page-query>
query {
  metaData {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "MMMM D, YYYY")
        path
      }
    }

  }
}
</page-query>