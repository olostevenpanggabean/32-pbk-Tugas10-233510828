<template>
  <div class="rencana-container">
    <h1>Modul Pembelajaran</h1>
    <div class="info-header">
      <h2>Teknik Informatika - Semester 4 (Tingkat Menengah)</h2>
      <p class="subtitle">Berikut modul pembelajaran untuk semester ini:</p>
    </div>

    <!-- Timeline belajar -->
    <div class="timeline">
      <div v-for="(step, index) in learningSteps" :key="index" class="timeline-step">
        <div class="step-header">
          <div class="step-number">Step {{ index + 1 }}</div>
          <div class="step-duration">{{ step.week }}</div>
        </div>
        
        <div class="step-content">
          <div v-for="(module, modIndex) in step.modules" :key="module.id" class="module-card">
            <h3>{{ module.nama }}</h3>
            <p>{{ module.deskripsi }}</p>
            <div class="module-meta">
              <span><strong>Durasi:</strong> {{ module.durasi }}</span>
              <span><strong>Sumber:</strong> {{ module.sumber }}</span>
            </div>
            <div class="module-actions">
              <button @click="downloadModule(module)" class="download-btn">
                <i class="fas fa-download"></i> Download Modul
              </button>
              <a :href="module.video_link" target="_blank" class="video-link" v-if="module.video_link">
                <i class="fas fa-play-circle"></i> Video Pembelajaran
              </a>
            </div>
            <div class="progress-container">
              <label>Progress Belajar:</label>
              <input type="range" v-model="module.progress" min="0" max="100">
              <span>{{ module.progress }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RencanaBelajar',
  data() {
    return {
      learningSteps: [
        {
          week: 'Minggu 1-2',
          modules: [
            {
              id: 4011,
              nama: 'Pemrograman Web Lanjut',
              deskripsi: 'Membangun aplikasi web dengan framework modern seperti Vue.js atau React',
              durasi: '10 jam',
              sumber: 'Modul 4.1 - 4.3',
              video_link: 'https://example.com/vuejs-intro',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 3-4',
          modules: [
            {
              id: 4012,
              nama: 'Basis Data Lanjut',
              deskripsi: 'Konsep database relational dan NoSQL dengan optimasi query',
              durasi: '12 jam',
              sumber: 'Modul 4.4 - 4.6',
              video_link: 'https://example.com/nosql',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 5-6',
          modules: [
            {
              id: 4013,
              nama: 'Algoritma dan Struktur Data Lanjut',
              deskripsi: 'Graph, tree, dan algoritma kompleks dengan analisis big-O',
              durasi: '15 jam',
              sumber: 'Modul 4.7 - 4.9',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 7-8',
          modules: [
            {
              id: 4014,
              nama: 'Jaringan Komputer Lanjut',
              deskripsi: 'Protokol jaringan, socket programming, dan keamanan jaringan',
              durasi: '12 jam',
              sumber: 'Modul 4.10 - 4.12',
              video_link: 'https://example.com/networking',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 9-10',
          modules: [
            {
              id: 4015,
              nama: 'Pemrograman Mobile',
              deskripsi: 'Pengembangan aplikasi Android dengan Kotlin atau Flutter',
              durasi: '14 jam',
              sumber: 'Modul 4.13 - 4.15',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 11-12',
          modules: [
            {
              id: 4016,
              nama: 'Kecerdasan Buatan Dasar',
              deskripsi: 'Pengenalan machine learning dan neural networks',
              durasi: '16 jam',
              sumber: 'Modul 4.16 - 4.18',
              video_link: 'https://example.com/ai-intro',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 13-14',
          modules: [
            {
              id: 4017,
              nama: 'Rekayasa Perangkat Lunak',
              deskripsi: 'Software development lifecycle dan metodologi agile',
              durasi: '10 jam',
              sumber: 'Modul 4.19 - 4.21',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 15-16',
          modules: [
            {
              id: 4018,
              nama: 'Sistem Operasi Lanjut',
              deskripsi: 'Manajemen memori, proses, dan thread pada sistem operasi',
              durasi: '12 jam',
              sumber: 'Modul 4.22 - 4.24',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 17-18',
          modules: [
            {
              id: 4019,
              nama: 'Keamanan Sistem Informasi',
              deskripsi: 'Kriptografi, ethical hacking, dan pengamanan sistem',
              durasi: '14 jam',
              sumber: 'Modul 4.25 - 4.27',
              video_link: 'https://example.com/cybersecurity',
              progress: 0
            }
          ]
        },
        {
          week: 'Minggu 19-20',
          modules: [
            {
              id: 4020,
              nama: 'Proyek Akhir Semester',
              deskripsi: 'Implementasi seluruh materi dalam proyek terintegrasi',
              durasi: '20 jam',
              sumber: 'Modul 4.28 - 4.30',
              progress: 0
            }
          ]
        }
      ]
    }
  },
  methods: {
    downloadModule(module) {
      // Simulasi download
      alert(`Modul "${module.nama}" akan diunduh (simulasi)\nSumber: ${module.sumber}`)
    }
  }
}
</script>

<style scoped>
.rencana-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.info-header {
  text-align: center;
  margin-bottom: 40px;
}

.info-header h2 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.subtitle {
  color: #7f8c8d;
  font-size: 1.1em;
}

.timeline {
  position: relative;
  padding-left: 50px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e0e0e0;
}

.timeline-step {
  position: relative;
  margin-bottom: 30px;
}

.step-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.step-number {
  background: #3498db;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  font-size: 1.1em;
}

.step-duration {
  font-weight: bold;
  color: #555;
  font-size: 1.1em;
}

.step-content {
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  margin-left: 30px;
}

.module-card {
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.module-card:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.module-card h3 {
  margin-top: 0;
  color: #2c3e50;
  font-size: 1.3em;
}

.module-card p {
  color: #34495e;
  line-height: 1.6;
}

.module-meta {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  color: #555;
  font-size: 0.95em;
}

.module-actions {
  display: flex;
  gap: 10px;
  margin: 15px 0;
}

.download-btn, .video-link {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  font-size: 0.9em;
}

.download-btn {
  background: #2ecc71;
  color: white;
  border: none;
}

.download-btn:hover {
  background: #27ae60;
}

.video-link {
  background: #e74c3c;
  color: white;
}

.video-link:hover {
  background: #c0392b;
}

.progress-container {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.progress-container label {
  font-weight: 600;
  color: #555;
}

.progress-container input[type="range"] {
  flex-grow: 1;
  height: 6px;
  border-radius: 3px;
  background: #ddd;
  outline: none;
}

.progress-container span {
  font-weight: bold;
  color: #3498db;
  min-width: 40px;
  text-align: right;
}

/* Ikon Font Awesome */
.fas {
  margin-right: 5px;
}
</style>