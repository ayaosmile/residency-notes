<template>
  <div class="giscus-container">
    <div ref="giscusEl"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { isDark, frontmatter } = useData()
const route = useRoute()
const giscusEl = ref<HTMLElement>()

const loadGiscus = () => {
  if (!giscusEl.value) return

  // Remove existing script
  const existing = document.querySelector('.giscus-script')
  if (existing) existing.remove()
  // Remove existing iframe
  giscusEl.value.innerHTML = ''

  const script = document.createElement('script')
  script.className = 'giscus-script'
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'ayaosmile/residency-notes')
  script.setAttribute('data-repo-id', 'R_kgDOTFIXAQ')
  script.setAttribute('data-category', 'General')
  script.setAttribute('data-category-id', 'DIC_kwDOTFIXAc4C_4SY')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
  script.crossOrigin = 'anonymous'
  script.async = true

  giscusEl.value.appendChild(script)
}

onMounted(() => {
  // Only load Giscus if comments are not disabled in frontmatter
  if (frontmatter.value.comment !== false) {
    loadGiscus()
  }
})

// Reload on theme change
watch(isDark, () => {
  if (frontmatter.value.comment !== false) {
    loadGiscus()
  }
})

// Reload on route change
watch(() => route.path, () => {
  if (frontmatter.value.comment !== false) {
    setTimeout(loadGiscus, 100)
  }
})
</script>

<style scoped>
.giscus-container {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
