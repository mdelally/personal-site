<template>
  <div>
    <header class="bg-gray-200 p-4">
      <div class="container m-auto flex justify-between items-center">
        <strong>
          <g-link to="/">Michael DeLally</g-link>
        </strong>
        <nav class="flex">
          <g-link class="p-4" to="/">Home</g-link>
          <g-link class="p-4" to="/about">About</g-link>
          <g-link class="p-4" to="/blog">Blog</g-link>
        </nav>
      </div>
    </header>
    <div class="container m-auto pt-8">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
