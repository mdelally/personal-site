<template>
  <div class="flex flex-col md:flex-row">
    <div class="mr-8 mb-8 w-full md:w-1/4 md:text-right">
      <div class="sticky top-0 pt-2">
        <h1 class="text-4xl mb-4 text-brand-500 leading-none">{{ post.title }}</h1>
        <p class="text-gray-0 uppercase font-black">{{ post.date }}</p>
        <p class="text-gray-400 uppercase font-black">{{ post.timeToRead }} min read</p>
      </div>
    </div>

    <div class="content text-xl break-words w-full md:w-3/4 pt-2">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-container",
  props: ["post"]
};
</script>

<style lang="scss">
div.content {
  a {
    span.heading-link:before {
      display: inline-block;
      content: "#";
      padding: 0 3px;
    }
  }

  h1,
  h2,
  h3 {
    position: sticky;
    top: 0;
    padding: 0.5rem 0;
    background-color: black;
    box-shadow: 0 0 10px black;
  }

  p {
    margin-bottom: 2em;
  }
}
</style>