<template>
  <div class="ml-5">
    <h3 class="text-sm font-medium text-gray-400">Tags:</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in categories" :key="item.name">
        <a :href="item.href"
          class="px-2 text-sm dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-900">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const categories =  [
    { name: "The Media", href: "/tag/media" },
    { name: "Culture", href: "/tag/culture" },
    { name: "Podcasters", href: "/tag/podcaster" },
    { name: "Health Links", href: "/tag/health" },
  ];
</script>