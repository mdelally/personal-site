<template>
  <header class="p-8 border-t-8 border-brand-500">
    <div
      class="container m-auto flex flex-wrap justify-center md:justify-between items-center border-b-2 border-gray-400"
    >
      <div class="flex flex-col flex-wrap">
        <div>
          <g-link
            to="/"
            class="brand font-bold text-3xl text-brand-500 hover:text-brand-700 uppercase no-underline hover:bg-transparent"
          >Michael DeLally</g-link>
        </div>
      </div>
      <nav class="flex">
        <g-link
          v-for="(item, index) in navItems"
          :key="'nav_' + index"
          class="px-6 py-8 font-bold text-xl text-gray-0 hover:text-brand-500 border-b-2 border-transparent hover:border-brand-500 uppercase offset-2 no-underline hover:bg-transparent"
          :to="item.route"
        >{{ item.label }}</g-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      navItems: [
        { label: "Home", route: "/" },
        { label: "Blog", route: "/blog" },
        { label: "Work", route: "/about" }
      ]
    };
  }
};
</script>