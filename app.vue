<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-300 flex items-center justify-center py-10 relative overflow-hidden">
    <!-- Parallax Background -->
    <div class="absolute inset-0 z-0 bg-cover bg-center opacity-20" style="background-image: url('/background-image.jpg');"></div>

    <!-- Particle Animation -->
    <div id="particles-js" class="absolute inset-0 z-0"></div>

    <div class="mt-4">
  <nuxt-link to="/showcase" class="bg-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-800 transition-colors duration-300">Lihat Proyek Saya</nuxt-link>
</div>

    <!-- Card Profil -->
    <div class="relative bg-white shadow-2xl rounded-3xl p-10 max-w-5xl w-full transform hover:scale-105 transition-all duration-500 hover:shadow-3xl z-10">
      <div class="flex flex-col md:flex-row items-center md:items-start">
        <!-- Foto Profil -->
        <div class="relative mb-6 md:mb-0 md:mr-8 floating-element">
          <img src="/profile.jpg" alt="Foto Profil" class="rounded-full w-50 h-72 object-cover border-4 border-indigo-600 shadow-lg transition-transform duration-300 hover:scale-110" />
                  <!-- Bagian ikon medsos di bawah foto profil -->
                  <div class="flex justify-center mt-4 space-x-4">
            <!-- Ikon LinkedIn -->
            <div class="icon-container rotate-on-hover">
              <a href="https://linkedin.com" target="_blank" class="text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-current" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.12 20.45H3.56V9.23h3.56zm-1.78-12.8a2.06 2.06 0 01-2.06-2.06A2.06 2.06 0 015.34 3.5a2.06 2.06 0 110 4.1zm16.09 12.8h-3.56v-5.88c0-1.4-.02-3.2-1.95-3.2s-2.26 1.52-2.26 3.1v5.98H9.76V9.23h3.41v1.53h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.26 2.37 4.26 5.45v6.08z" />
                </svg>
              </a>
            </div>

            <!-- Ikon WhatsApp -->
            <div class="icon-container rotate-on-hover">
              <a href="https://wa.me/08999379480" target="_blank" class="text-green-500 hover:text-green-700 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.148-1.762-.867-2.035-.967-.273-.099-.471-.148-.669.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.256-.463-2.39-1.475-.883-.785-1.48-1.753-1.654-2.05-.173-.297-.018-.458.13-.606.133-.132.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.203-.241-.579-.487-.5-.669-.51-.173-.007-.372-.008-.571-.008-.198 0-.52.075-.793.372-.272.297-1.041 1.016-1.041 2.48 0 1.463 1.066 2.875 1.215 3.074.148.198 2.1 3.219 5.082 4.379.71.306 1.263.489 1.696.625.712.227 1.36.195 1.87.118.571-.085 1.762-.718 2.011-1.412.248-.694.248-1.29.173-1.412-.074-.123-.272-.198-.57-.347zM12 .003C5.373.003 0 5.375 0 12c0 2.109.552 4.119 1.606 5.902L.036 23.856a.752.752 0 00-.006.747c.125.241.365.396.63.396.068 0 .137-.01.204-.031l5.396-1.687A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627.003 12 .003z" />
                </svg>
              </a>
            </div>

            <!-- Ikon Instagram -->
            <div class="icon-container rotate-on-hover">
              <a href="https://instagram.com" target="_blank" class="text-pink-600 hover:text-pink-800 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c3.28 0 3.67.013 4.95.07 1.27.058 2.142.278 2.92.592.793.319 1.46.749 2.12 1.407a5.002 5.002 0 011.41 2.117c.314.777.533 1.65.59 2.917C23.987 10.32 24 10.719 24 12s-.013 1.68-.07 2.95c-.057 1.27-.276 2.14-.59 2.92a5.002 5.002 0 01-1.41 2.12 5.002 5.002 0 01-2.12 1.41c-.777.314-1.65.533-2.92.59-1.28.057-1.67.07-4.95.07s-3.67-.013-4.95-.07c-1.27-.057-2.142-.276-2.92-.59a5.002 5.002 0 01-2.12-1.41 5.002 5.002 0 01-1.41-2.12c-.314-.777-.533-1.65-.59-2.92C.013 13.68 0 13.28 0 12s.013-1.68.07-2.95c.057-1.27.276-2.142.59-2.92a5.002 5.002 0 011.41-2.12A5.002 5.002 0 014.12.662C4.9.348 5.773.128 7.05.07 8.32.013 8.719 0 12 0zm0 2.162c-3.22 0-3.6.012-4.87.07-1.17.054-1.805.25-2.23.417a3.84 3.84 0 00-1.45.946c-.413.413-.7.88-.946 1.45-.166.425-.362 1.062-.415 2.23-.058 1.27-.07 1.65-.07 4.87s.012 3.6.07 4.87c.054 1.17.25 1.805.417 2.23.247.57.534 1.038.946 1.45.413.413.88.7 1.45.946.425.166 1.062.362 2.23.415 1.27.058 1.65.07 4.87.07s3.6-.012 4.87-.07c1.17-.054 1.805-.25 2.23-.417a3.84 3.84 0 001.45-.946c.413-.413.7-.88.946-1.45.166-.425.362-1.062.415-2.23.058-1.27.07-1.65.07-4.87s-.012-3.6-.07-4.87c-.054-1.17-.25-1.805-.417-2.23a3.84 3.84 0 00-.946-1.45 3.84 3.84 0 00-1.45-.946c-.425-.166-1.062-.362-2.23-.415-1.27-.058-1.65-.07-4.87-.07zm0 4.297a5.545 5.545 0 110 11.09 5.545 5.545 0 010-11.09zm0 2.162a3.383 3.383 0 100 6.766 3.383 3.383 0 000-6.766zm6.656-.796a1.297 1.297 0 110 2.595 1.297 1.297 0 010-2.595z" />
                </svg>
              </a>
            </div>
          </div>
          <div class="mt-4">
  <nuxt-link to="/showcase" class="bg-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-800 transition-colors duration-300">Lihat Proyek Saya</nuxt-link>
</div>
        </div>

        <!-- Informasi Dasar -->
        <div>
          <h1 class="text-4xl font-extrabold text-gray-900 hover:text-indigo-700 transition-colors duration-300 animated-text">Daffa Freda Muhammad Nehru</h1>
          <p class="text-xl text-gray-600 mt-2">Mahasiswa </p>
          <p class="text-lg text-gray-500 mt-2">Malang, Indonesia</p>
          <p class="text-base text-gray-500 mt-4 leading-relaxed">
            Saya seorang developer dengan pengalaman dalam JavaScript, Vue.js, dan Nuxt.js. Saya suka membangun aplikasi yang responsif dan performa tinggi.
          </p>
          <!-- Button CTA -->
          <div class="mt-4">
            <a href="/download-cv.pdf" class="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-800 transition-colors duration-300">Download CV</a>
          </div>
        </div>
      </div>

      <!-- Bagian Skill dan Pengalaman -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Keahlian -->
        <div>
          <h3 class="text-xl font-semibold text-indigo-700 mb-4">Keahlian</h3>
          <!-- Skill dengan Progress Bar -->
          <div class="mb-4">
            <span class="block text-gray-700">JavaScript, Vue.js, Nuxt.js</span>
            <div class="bg-gray-300 rounded-full h-2 w-full">
              <div class="bg-indigo-600 h-2 rounded-full progress-bar" style="width: 85%;"></div>
            </div>
          </div>
          <div class="mb-4">
            <span class="block text-gray-700">HTML, CSS, Tailwind CSS</span>
            <div class="bg-gray-300 rounded-full h-2 w-full">
              <div class="bg-indigo-600 h-2 rounded-full progress-bar" style="width: 90%;"></div>
            </div>
          </div>
          <div class="mb-4">
            <span class="block text-gray-700">Git, Version Control</span>
            <div class="bg-gray-300 rounded-full h-2 w-full">
              <div class="bg-indigo-600 h-2 rounded-full progress-bar" style="width: 75%;"></div>
            </div>
          </div>
          <div>
            <span class="block text-gray-700">API Integration</span>
            <div class="bg-gray-300 rounded-full h-2 w-full">
              <div class="bg-indigo-600 h-2 rounded-full progress-bar" style="width: 80%;"></div>
            </div>
          </div>
        </div>

        <!-- Pengalaman Kerja -->
        <div>
          <h3 class="text-xl font-semibold text-indigo-700 mb-4">Pengalaman Kerja</h3>
          <ul class="space-y-4 text-gray-700">
            <li class="transition-transform duration-200 hover:scale-105 hover:text-indigo-600">
              <strong>Software Developer</strong> - PT. Teknologi XYZ (2020 - Sekarang)
              <br />
              Bertanggung jawab atas pengembangan aplikasi frontend menggunakan Vue.js dan Nuxt.js.
            </li>
            <li class="transition-transform duration-200 hover:scale-105 hover:text-indigo-600">
              <strong>Frontend Developer</strong> - Startup ABC (2018 - 2020)
              <br />
              Mengembangkan aplikasi web interaktif menggunakan JavaScript dan Tailwind CSS.
            </li>
          </ul>
        </div>
      </div>

      <!-- Pendidikan -->
      <div class="mt-10">
        <h3 class="text-xl font-semibold text-indigo-700 mb-4">Pendidikan</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="transition-transform duration-200 hover:scale-105 hover:text-indigo-600">
            <strong>Universitas Brawijaya</strong> - Sarjana Teknik Informatika (2023 - 2027)
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "Profil Saya",
    };
  },
};
</script>

<style scoped>
/* Hover efek pada card */
.bg-white:hover {
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
}

/* Parallax background */
.bg-cover {
  background-attachment: fixed;
}

/* Floating Elements */
.floating-element {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Rotate on Hover */
.rotate-on-hover:hover {
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Animated Text */
.animated-text {
  animation: fadeInUp 1.5s ease-in-out;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Wave Effect */
.bg-wave {
  background-image: url('/wave.svg');
  background-size: cover;
}


/* Animasi untuk progress bar */
.progress-bar {
  animation: fillProgress 2s ease-in-out forwards;
}

@keyframes fillProgress {
  0% {
    width: 0;
  }
  100% {
    /* width tetap akan mengikuti nilai yang diberikan secara inline */
  }
}

.icon-container {
  transition: transform 0.5s ease-in-out;
}

.icon-container:hover {
  transform: rotate(360deg) scale(1.2);
}

.rotate-on-hover {
  transition: transform 0.5s ease-in-out;
}

.rotate-on-hover:hover {
  transform: rotate(360deg);
}

</style>
