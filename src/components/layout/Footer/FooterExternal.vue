<template>
  <div class="mt-12 md:mt-0">
    <h3 class="text-sm font-medium text-gray-400">External:</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in external" :key="item.name">
        <a :href="item.href"
          class="px-2 py-1 text-sm dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-900">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const external = [
  { name: "James' Resume", href: "https://cv.jamesturner.dev/" },
  { name: "James on Twitter", href: "https://twitter.com/JamesTurnerDev" },
  { name: "Tweet 'O the Day", href: "https://tweetotheday.com" },
  { name: "Headlin3s", href: "https://headlin3s.com" },
]
</script>