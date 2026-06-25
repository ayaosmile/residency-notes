<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <GiscusComment v-if="showComments" />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import GiscusComment from './components/GiscusComment.vue'

const { frontmatter, page } = useData()

// Only show comments on content pages (not index pages)
const showComments = computed(() => {
  // Disable if frontmatter explicitly sets comment: false
  if (frontmatter.value.comment === false) return false
  // Disable on home page and index/listing pages
  const path = page.value.filePath
  if (path === 'index.md') return false
  if (path.endsWith('/index.md')) return false// category index pages
  return true
})
</script>
