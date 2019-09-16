<template>
  <div class="flex flex-col md:flex-row">
    <div class="mr-8 mb-8 w-full md:w-1/4 md:text-right">
      <div class="sticky top-0 pt-2">
        <h1 class="text-4xl text-brand-500 leading-none">{{ title }}</h1>
      </div>
    </div>

    <section class="content text-xl md:text-2xl pt-2">
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: "page-container",
  props: ["title"]
};
</script>