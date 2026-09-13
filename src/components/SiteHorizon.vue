<script setup>
// Full-width image at the very bottom of the page — swaps by theme.
// Place your files at:
//   public/images/landscape-bottom-light.jpg  (shown in light mode)
//   public/images/landscape-bottom-dark.jpg   (shown in dark mode)
// (any filenames work — just update the two src values below to match)
</script>

<template>
  <img
    src="/src/images/landscape-bottom.png"
    alt=""
    aria-hidden="true"
    class="w-full h-auto block dark:hidden"
  />
  <img
    src="/src/images/landscape-bottom-dark.png"
    alt=""
    aria-hidden="true"
    class="w-full h-auto hidden dark:block"
  />
</template>