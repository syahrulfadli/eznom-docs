<script setup>
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { categories, tasks } from '../data/tasks.js'

// Saat belum ada filter, tampilkan sebagian saja supaya kartu fitur di bawahnya tetap terlihat.
const INITIAL_LIMIT = 8

const query = ref('')
const active = ref('semua')
const expanded = ref(false)

const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]))
const countByCategory = Object.fromEntries(
  categories.map((c) => [c.id, tasks.filter((t) => t.category === c.id).length]),
)

const normalize = (s) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

const index = tasks.map((t) => ({
  ...t,
  haystack: normalize(`${t.title} ${t.desc} ${t.keywords} ${categoryById[t.category].label}`),
}))

const matches = computed(() => {
  const words = normalize(query.value).split(/\s+/).filter(Boolean)
  return index.filter(
    (t) =>
      (active.value === 'semua' || t.category === active.value) &&
      words.every((w) => t.haystack.includes(w)),
  )
})

const isFiltered = computed(() => active.value !== 'semua' || query.value.trim() !== '')
const visible = computed(() =>
  isFiltered.value || expanded.value ? matches.value : matches.value.slice(0, INITIAL_LIMIT),
)
const hiddenCount = computed(() => matches.value.length - visible.value.length)

function selectCategory(id) {
  active.value = active.value === id ? 'semua' : id
}

function reset() {
  query.value = ''
  active.value = 'semua'
}

// Buka pencarian lokal VitePress (sama dengan menekan Ctrl+K) dengan kata kunci yang sama.
function openFullSearch() {
  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, metaKey: true }))
  const text = query.value
  if (!text) return
  // Kotak pencarian dimuat secara lazy pada pemakaian pertama, jadi tunggu sampai muncul.
  let tries = 0
  const fill = () => {
    const input = document.querySelector('.VPLocalSearchBox input')
    if (!input) {
      if (++tries < 60) requestAnimationFrame(fill)
      return
    }
    input.value = text
    input.dispatchEvent(new Event('input'))
  }
  requestAnimationFrame(fill)
}
</script>

<template>
  <section class="task-finder" aria-labelledby="task-finder-title">
    <div class="container">
      <header class="head">
        <h2 id="task-finder-title">Apa yang ingin Anda lakukan?</h2>
        <p>Pilih tugas atau ketik kata kunci — langsung menuju bagian panduan yang tepat.</p>
      </header>

      <div class="search">
        <svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <input
          v-model="query"
          type="search"
          placeholder="Misal: voucher, isolir, whatsapp, midtrans…"
          aria-label="Cari tugas"
          autocomplete="off"
          @keydown.esc="reset"
        />
      </div>

      <div class="chips" role="group" aria-label="Filter kategori">
        <button
          type="button"
          class="chip"
          :class="{ active: active === 'semua' }"
          :aria-pressed="active === 'semua'"
          @click="active = 'semua'"
        >
          Semua <span class="count">{{ tasks.length }}</span>
        </button>
        <button
          v-for="c in categories"
          :key="c.id"
          type="button"
          class="chip"
          :class="{ active: active === c.id }"
          :aria-pressed="active === c.id"
          @click="selectCategory(c.id)"
        >
          <span aria-hidden="true">{{ c.icon }}</span> {{ c.label }}
          <span class="count">{{ countByCategory[c.id] }}</span>
        </button>
      </div>

      <TransitionGroup v-if="visible.length" tag="ul" name="task" class="grid" aria-live="polite">
        <li v-for="t in visible" :key="t.link">
          <a :href="withBase(t.link)" class="card">
            <span class="badge">
              <span aria-hidden="true">{{ categoryById[t.category].icon }}</span>
              {{ categoryById[t.category].label }}
            </span>
            <span class="title">{{ t.title }}</span>
            <span class="desc">{{ t.desc }}</span>
            <span class="arrow" aria-hidden="true">→</span>
          </a>
        </li>
      </TransitionGroup>

      <div v-else class="empty" aria-live="polite">
        <p>
          Belum ada tugas yang cocok dengan <strong>“{{ query }}”</strong>.
        </p>
        <div class="empty-actions">
          <button type="button" class="btn brand" @click="openFullSearch">
            Cari di seluruh dokumentasi
          </button>
          <button type="button" class="btn" @click="reset">Hapus filter</button>
        </div>
      </div>

      <div v-if="hiddenCount > 0" class="more">
        <button type="button" class="btn" @click="expanded = true">
          Tampilkan {{ hiddenCount }} tugas lainnya
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.task-finder {
  padding: 0 24px 48px;
}

@media (min-width: 640px) {
  .task-finder {
    padding: 0 48px 56px;
  }
}

@media (min-width: 960px) {
  .task-finder {
    padding: 0 64px 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.head h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.head p {
  margin-top: 6px;
  color: var(--vp-c-text-2);
  font-size: 15px;
}

.search {
  position: relative;
  margin-top: 20px;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 16px;
  width: 18px;
  height: 18px;
  color: var(--vp-c-text-3);
  transform: translateY(-50%);
  pointer-events: none;
}

.search input {
  width: 100%;
  height: 48px;
  padding: 0 16px 0 44px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 16px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search input::placeholder {
  color: var(--vp-c-text-3);
}

.search input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;
}

.chip:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}

.chip.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.chip .count {
  min-width: 18px;
  padding: 0 5px;
  border-radius: 999px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  font-size: 11px;
  line-height: 18px;
  text-align: center;
}

.chip.active .count {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.grid li {
  display: flex;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 16px 36px;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: inherit;
  text-decoration: none;
  transition: border-color 0.2s, transform 0.2s;
}

.card:hover,
.card:focus-visible {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.badge {
  align-self: flex-start;
  margin-bottom: 10px;
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
}

.title {
  color: var(--vp-c-text-1);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
}

.desc {
  margin-top: 4px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.5;
}

.arrow {
  position: absolute;
  right: 16px;
  bottom: 12px;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  transition: transform 0.2s;
}

.card:hover .arrow {
  transform: translateX(4px);
}

.empty {
  margin-top: 20px;
  padding: 28px 20px;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 12px;
  color: var(--vp-c-text-2);
  text-align: center;
}

.empty-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
}

.more {
  margin-top: 16px;
  text-align: center;
}

.btn {
  padding: 8px 16px;
  border: 1px solid var(--vp-button-alt-border);
  border-radius: 20px;
  background: var(--vp-button-alt-bg);
  color: var(--vp-button-alt-text);
  font-size: 14px;
  font-weight: 600;
  transition: border-color 0.2s, background-color 0.2s;
}

.btn:hover {
  border-color: var(--vp-button-alt-hover-border);
  background: var(--vp-button-alt-hover-bg);
}

.btn.brand {
  border-color: var(--vp-button-brand-border);
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
}

.btn.brand:hover {
  background: var(--vp-button-brand-hover-bg);
}

.task-enter-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.task-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

@media (prefers-reduced-motion: reduce) {
  .card,
  .arrow,
  .task-enter-active {
    transition: none;
  }
}
</style>
