<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { withBase } from 'vitepress'

// Urutan sama dengan "Langkah Pertama" di /panduan/mulai — ubah keduanya bersamaan.
const steps = [
  {
    id: 'router',
    title: 'Tambah router',
    desc: 'Daftarkan router MikroTik lewat wizard 3 langkah, lalu tempel konfigurasi VPN-nya di MikroTik.',
    link: '/panduan/router#menambah-router-baru',
  },
  {
    id: 'profil',
    title: 'Buat profil layanan',
    desc: 'Definisikan paket internet: kecepatan, harga, dan PPN bila Anda memungutnya.',
    link: '/panduan/pppoe/profil#membuat-profil-baru',
  },
  {
    id: 'pelanggan',
    title: 'Tambah pelanggan',
    desc: 'Daftarkan pelanggan PPPoE. Tagihan pertamanya dibuat sekaligus saat disimpan.',
    link: '/panduan/pppoe/pelanggan',
  },
  {
    id: 'notifikasi',
    title: 'Atur notifikasi',
    desc: 'Hubungkan WhatsApp agar pengingat jatuh tempo terkirim otomatis.',
    link: '/panduan/notifikasi#konfigurasi-awal',
  },
  {
    id: 'pembayaran',
    title: 'Atur pembayaran',
    desc: 'Aktifkan payment gateway dan/atau transfer manual supaya pelanggan bisa bayar sendiri.',
    link: '/panduan/pembayaran',
  },
  {
    id: 'operator',
    title: 'Aktifkan notifikasi operator',
    desc: 'Pasang eznom sebagai aplikasi agar kabar router mati sampai ke HP Anda.',
    link: '/panduan/notifikasi-operator#memasang-eznom-sebagai-aplikasi-pwa',
  },
]

const STORAGE_KEY = 'eznom-docs:langkah-pertama'

const done = ref(new Set())
const open = ref(steps[0].id)

const doneCount = computed(() => steps.filter((s) => done.value.has(s.id)).length)
const percent = computed(() => Math.round((doneCount.value / steps.length) * 100))
const allDone = computed(() => doneCount.value === steps.length)

// Progres hanya kenyamanan per pembaca; kalau storage diblokir, checklist tetap jalan tanpa ingatan.
onMounted(() => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    done.value = new Set(saved.filter((id) => steps.some((s) => s.id === id)))
  } catch {}
  open.value = steps.find((s) => !done.value.has(s.id))?.id ?? null

  watch(done, (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...value]))
    } catch {}
  })
})

function toggleDone(id) {
  const next = new Set(done.value)
  if (next.has(id)) {
    next.delete(id)
  } else {
    next.add(id)
    // Lanjut ke langkah berikutnya yang belum selesai.
    open.value = steps.find((s) => !next.has(s.id))?.id ?? null
  }
  done.value = next
}

function toggleOpen(id) {
  open.value = open.value === id ? null : id
}

function reset() {
  done.value = new Set()
  open.value = steps[0].id
}
</script>

<template>
  <section class="onboarding" aria-labelledby="onboarding-title">
    <div class="panel">
      <header class="head">
        <div>
          <h2 id="onboarding-title">Baru mulai? Ikuti 6 langkah ini</h2>
          <p>Centang tiap langkah setelah selesai — progres Anda tersimpan di browser ini.</p>
        </div>
        <div class="progress" :aria-label="`${doneCount} dari ${steps.length} langkah selesai`">
          <span class="progress-text">{{ doneCount }}/{{ steps.length }}</span>
          <div
            class="bar"
            role="progressbar"
            :aria-valuenow="percent"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="fill" :style="{ width: `${percent}%` }" />
          </div>
        </div>
      </header>

      <ol class="steps">
        <li
          v-for="(s, i) in steps"
          :key="s.id"
          class="step"
          :class="{ done: done.has(s.id), open: open === s.id }"
        >
          <button
            type="button"
            class="check"
            :aria-pressed="done.has(s.id)"
            :aria-label="`Tandai “${s.title}” ${done.has(s.id) ? 'belum' : 'sudah'} selesai`"
            @click="toggleDone(s.id)"
          >
            <svg v-if="done.has(s.id)" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span v-else>{{ i + 1 }}</span>
          </button>

          <div class="body">
            <button
              type="button"
              class="step-title"
              :aria-expanded="open === s.id"
              :aria-controls="`step-${s.id}`"
              @click="toggleOpen(s.id)"
            >
              {{ s.title }}
              <svg class="chevron" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" />
              </svg>
            </button>
            <div v-show="open === s.id" :id="`step-${s.id}`" class="detail">
              <p>{{ s.desc }}</p>
              <div class="actions">
                <a :href="withBase(s.link)" class="link">Buka panduan →</a>
                <button type="button" class="mark" @click="toggleDone(s.id)">
                  {{ done.has(s.id) ? 'Tandai belum selesai' : 'Tandai selesai' }}
                </button>
              </div>
            </div>
          </div>
        </li>
      </ol>

      <div v-if="allDone" class="finish">
        <p>
          🎉 Semua langkah selesai! Selanjutnya pelajari
          <a :href="withBase('/panduan/pppoe/billing')">cara kerja billing</a>
          atau mulai <a :href="withBase('/panduan/hotspot/voucher')">jual voucher hotspot</a>.
        </p>
      </div>
      <div v-if="doneCount > 0" class="reset">
        <button type="button" @click="reset">Ulangi dari awal</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Grid fitur di atasnya memakan ~8px dari margin ini, jadi jarak yang terlihat sedikit lebih kecil. */
.onboarding {
  margin-top: 72px;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .onboarding {
    margin-top: 88px;
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .onboarding {
    margin-top: 104px;
    padding: 0 64px;
  }
}

.panel {
  margin: 0 auto;
  max-width: 1152px;
  padding: 24px;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

@media (min-width: 640px) {
  .panel {
    padding: 32px;
  }
}

.head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}

.head h2 {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
}

.head p {
  margin-top: 6px;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.progress {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 180px;
}

.progress-text {
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.bar {
  flex: 1;
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--vp-c-default-soft);
}

.fill {
  height: 100%;
  border-radius: inherit;
  background: var(--vp-c-brand-1);
  transition: width 0.4s ease;
}

.steps {
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.step {
  position: relative;
  display: flex;
  gap: 14px;
  padding-bottom: 6px;
}

/* Garis penghubung antar langkah */
.step:not(:last-child)::before {
  content: '';
  position: absolute;
  top: 34px;
  bottom: -2px;
  left: 15px;
  width: 2px;
  background: var(--vp-c-divider);
}

.step.done:not(:last-child)::before {
  background: var(--vp-c-brand-1);
}

.check {
  position: relative;
  z-index: 1;
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 50%;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-weight: 600;
  transition: border-color 0.2s, background-color 0.2s, color 0.2s;
}

.check:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.step.done .check {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.check svg {
  width: 18px;
  height: 18px;
}

.body {
  flex: 1;
  min-width: 0;
  padding-bottom: 12px;
}

.step-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 32px;
  color: var(--vp-c-text-1);
  font-size: 16px;
  font-weight: 600;
  text-align: left;
}

.step.done .step-title {
  color: var(--vp-c-text-2);
  text-decoration: line-through;
  text-decoration-color: var(--vp-c-text-3);
}

.chevron {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  color: var(--vp-c-text-3);
  transition: transform 0.2s;
}

.step.open .chevron {
  transform: rotate(180deg);
}

.detail p {
  margin-top: 4px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 10px;
}

.link {
  color: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.mark {
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
}

.mark:hover {
  color: var(--vp-c-text-1);
}

.finish {
  margin-top: 8px;
  padding: 14px 16px;
  border-radius: 10px;
  background: var(--vp-c-brand-soft);
  font-size: 14px;
  line-height: 1.6;
}

.finish a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.reset {
  margin-top: 12px;
  text-align: right;
}

.reset button {
  color: var(--vp-c-text-3);
  font-size: 13px;
}

.reset button:hover {
  color: var(--vp-c-text-1);
}

@media (prefers-reduced-motion: reduce) {
  .fill,
  .chevron {
    transition: none;
  }
}
</style>
