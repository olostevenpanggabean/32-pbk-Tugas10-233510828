<template>
  <div class="rencana-container">
    <!-- Profil Section -->
    <div class="profile-section">
      <div class="profile-card">
        <h2>Profil Pembelajaran</h2>
        <div class="profile-info">
          <div class="info-item">
            <span class="label">Nama Jurusan:</span>
            <span class="value">Teknik Informatika</span>
          </div>
          <div class="info-item">
            <span class="label">Semester:</span>
            <span class="value">4 (Empat)</span>
          </div>
          <div class="info-item">
            <span class="label">Minat/Fokus:</span>
            <span class="value">Data</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Jam Belajar Section -->
    <div class="time-selection">
      <h2>Pilih Jam Belajar</h2>
      <p class="note">*Pilih waktu belajar 2 jam</p>
      <div class="time-options">
        <button 
          v-for="timeSlot in timeSlots" 
          :key="timeSlot.value"
          :class="{ active: selectedTime === timeSlot.value }"
          @click="selectTime(timeSlot.value)"
        >
          {{ timeSlot.label }}
        </button>
      </div>
    </div>

    <!-- Rencana Belajar Section -->
    <div v-if="selectedTime" class="study-plan">
      <h2>Rencana Belajar Hari Ini ({{ selectedTimeLabel }})</h2>
      <div class="plan-items">
        <div class="plan-item" v-for="(subject, index) in todaysPlan" :key="index">
          <div class="subject-header">
            <h3>{{ subject.name }}</h3>
            <button 
              class="notification-btn"
              :class="{ active: subject.notification }"
              @click="toggleNotification(index)"
            >
              <i class="fas fa-bell"></i>
            </button>
          </div>
          <p class="duration">Durasi: {{ subject.duration }} jam</p>
          <p class="description">{{ subject.description }}</p>
          <div class="progress-container">
            <label>Progress:</label>
            <input type="range" v-model="subject.progress" min="0" max="100">
            <span>{{ subject.progress }}%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Features -->
    <div class="additional-features">
      <button class="save-btn" @click="savePlan">
        <i class="fas fa-save"></i> Simpan Rencana
      </button>
      <div class="motivation-quote">
        <p>"Konsistensi adalah kunci kesuksesan dalam belajar!"</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RencanaBelajar',
  data() {
    return {
      selectedTime: null,
      timeSlots: [
        { label: '08.00 - 10.00', value: '08-10' },
        { label: '10.00 - 12.00', value: '10-12' },
        { label: '13.00 - 15.00', value: '13-15' },
        { label: '15.00 - 17.00', value: '15-17' },
        { label: '19.00 - 21.00', value: '19-21' }
      ],
      subjects: {
        '08-10': [
          {
            name: 'Basis Data Lanjut',
            duration: 1,
            description: 'Mempelajari optimasi query dan indexing database',
            progress: 0,
            notification: false
          },
          {
            name: 'Algoritma dan Struktur Data Lanjut',
            duration: 1,
            description: 'Implementasi graph dan tree dalam pemecahan masalah',
            progress: 0,
            notification: false
          }
        ],
        '10-12': [
          {
            name: 'Pemrograman Web Lanjut',
            duration: 1,
            description: 'Membangun REST API dengan Node.js',
            progress: 0,
            notification: false
          },
          {
            name: 'Machine Learning Dasar',
            duration: 1,
            description: 'Konsep supervised learning dan regresi linier',
            progress: 0,
            notification: false
          }
        ],
        '13-15': [
          {
            name: 'Sistem Operasi',
            duration: 1,
            description: 'Manajemen memori dan proses',
            progress: 0,
            notification: false
          },
          {
            name: 'Jaringan Komputer',
            duration: 1,
            description: 'Protokol TCP/IP dan socket programming',
            progress: 0,
            notification: false
          }
        ],
        '15-17': [
          {
            name: 'Analisis Data',
            duration: 1,
            description: 'Visualisasi data dengan Python',
            progress: 0,
            notification: false
          },
          {
            name: 'Big Data',
            duration: 1,
            description: 'Pengenalan Hadoop dan Spark',
            progress: 0,
            notification: false
          }
        ],
        '19-21': [
          {
            name: 'Keamanan Sistem',
            duration: 1,
            description: 'Kriptografi dasar dan enkripsi',
            progress: 0,
            notification: false
          },
          {
            name: 'Proyek Mandiri',
            duration: 1,
            description: 'Pengembangan portfolio proyek',
            progress: 0,
            notification: false
          }
        ]
      }
    }
  },
  computed: {
    selectedTimeLabel() {
      const slot = this.timeSlots.find(slot => slot.value === this.selectedTime)
      return slot ? slot.label : ''
    },
    todaysPlan() {
      return this.selectedTime ? this.subjects[this.selectedTime] : []
    }
  },
  methods: {
    selectTime(time) {
      this.selectedTime = time
    },
    toggleNotification(index) {
      this.todaysPlan[index].notification = !this.todaysPlan[index].notification
      if (this.todaysPlan[index].notification) {
        alert(`Notifikasi untuk "${this.todaysPlan[index].name}" diaktifkan!`)
      }
    },
    savePlan() {
      alert('Rencana belajar berhasil disimpan!')
      // Simulasi penyimpanan
      console.log('Rencana tersimpan:', {
        waktu: this.selectedTimeLabel,
        mataPelajaran: this.todaysPlan
      })
    }
  }
}
</script>

<style scoped>
.rencana-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.profile-section {
  margin-bottom: 30px;
}

.profile-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.profile-card h2 {
  color: #2c3e50;
  margin-top: 0;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.profile-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.info-item {
  display: flex;
  flex-direction: column;
}

.label {
  font-weight: bold;
  color: #7f8c8d;
  font-size: 0.9em;
}

.value {
  color: #2c3e50;
  font-size: 1.1em;
}

.time-selection {
  margin-bottom: 30px;
}

.time-selection h2 {
  color: #2c3e50;
}

.note {
  color: #7f8c8d;
  font-size: 0.9em;
  margin-top: -10px;
}

.time-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.time-options button {
  background-color: #e0e0e0;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.time-options button:hover {
  background-color: #d0d0d0;
}

.time-options button.active {
  background-color: #3498db;
  color: white;
}

.study-plan {
  margin-bottom: 30px;
}

.study-plan h2 {
  color: #2c3e50;
}

.plan-items {
  display: grid;
  gap: 20px;
  margin-top: 20px;
}

.plan-item {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.subject-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.subject-header h3 {
  margin: 0;
  color: #2c3e50;
}

.notification-btn {
  background: none;
  border: none;
  font-size: 1.2em;
  color: #bdc3c7;
  cursor: pointer;
  transition: all 0.3s;
}

.notification-btn.active {
  color: #f39c12;
}

.notification-btn:hover {
  transform: scale(1.1);
}

.duration {
  color: #7f8c8d;
  font-size: 0.9em;
  margin: 5px 0;
}

.description {
  color: #34495e;
  line-height: 1.5;
  margin-bottom: 15px;
}

.progress-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
}

.progress-container label {
  font-weight: bold;
  color: #555;
  font-size: 0.9em;
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

.additional-features {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}

.save-btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.save-btn:hover {
  background-color: #27ae60;
}

.motivation-quote {
  font-style: italic;
  color: #7f8c8d;
  text-align: right;
}

.fas {
  margin-right: 5px;
}
</style>