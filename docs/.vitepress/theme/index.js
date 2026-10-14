import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HomeTaskFinder from './components/HomeTaskFinder.vue'
import HomeOnboarding from './components/HomeOnboarding.vue'

export default {
  extends: DefaultTheme,
  // Pencari tugas ditaruh di antara hero dan kartu fitur lewat slot layout, supaya muncul
  // sebelum daftar fitur; checklist langkah pertama dipanggil langsung dari docs/index.md.
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'home-features-before': () => h(HomeTaskFinder),
    }),
  enhanceApp({ app }) {
    app.component('HomeOnboarding', HomeOnboarding)
  },
}
