/* ==========================================================================
   SIDELILA v2.0 - SCRIPT UTAMA GABUNGAN 100% LENGKAP & UTUH (FINAL)
   ========================================================================== */

// --- 1. CEK SESI OTOMATIS & INISIALISASI DASHBOARD ---
document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem('sidelila_logged_in');
    if (isLoggedIn === 'true') {
        tampilkanDashboard();
    } else {
        const viewLogin = document.getElementById('view-login');
        const viewDash = document.getElementById('view-dashboard');
        if (viewLogin) viewLogin.style.display = 'flex';
        if (viewDash) viewDash.style.display = 'none';
    }
});

// --- 2. DATA MATERI & DIREKTORI BERTINGKAT ---
const subMateriData = {
    bkb: {
        title: "Bina Keluarga Balita (BKB)",
        parent: "poktan",
        items: [
            { name: "MATERI BKB HIU", desc: "Pedoman Bina Keluarga Balita Holistik Integratif Unggulan", icon:'<img src="images1.png" class="w-8 h-8 object-contain">', link: "https://drive.google.com/file/d/1p9KVHX5fwC2JSIu3HrLJyhmfaPzlFqWz/view?usp=sharing" },
            { name: "MATERI BKB EMAS", desc: "Bina Keluarga Balita Eliminasi Masalah Anak Stunting", icon:'<img src="images213.jpg" class="w-8 h-8 object-contain">', link: "https://drive.google.com/file/d/1hwFektsgmjnhXBOQOmcgvHuUHKpANvpR/view?usp=sharing" },
            { name: "MATERI BKB HI", desc: "Buku Panduan Penyuluhan BKB-HI Bagi Kader", icon:'<img src="icon3.png" class="w-8 h-8 object-contain">', link: "https://drive.google.com/file/d/1xzeEQrKxBgIYBa9FYIdXMO_JNxDZ3uy-/view?usp=sharing" },
            { name: "MATERI BKB", desc: "Program Penyuluhan dan Pemberdayaan Keluarga dalam Pengasuhan Tumbuh Kembang Anak Usia 0-5 Tahun", icon:'<img src="icon4.png" class="w-8 h-8 object-contain">', link: "https://docs.google.com/presentation/d/1s9vgX5cdo7OuwdXzvqVCpUc_wKMguLsL/edit?usp=sharing&ouid=104636205695945782752&rtpof=true&sd=true" },
            { name: "BUKU SAKU KADER", desc: "Bahan Penyuluhan Bina Keluarga Balita", icon: "📝", link: "https://drive.google.com/file/d/1Go8PF1u8BL_1iuf3tS2_Fm3CECuseFnE/view?usp=sharing" },
            { name: "MATERI POLA ASUH ANAK", desc: "Pola Asuh pada 1000 Hari Pertama Kehidupan", icon:'<img src="images215.jpg" class="w-8 h-8 object-contain">', link: "https://docs.google.com/presentation/d/13E8NXccD9ZTGBNpHCVpqM2Gd56XMvoR0/edit?usp=sharing&ouid=104636205695945782752&rtpof=true&sd=true" },
            { name: "Materi Kartu Kembang Anak", desc: "Panduan Praktis Cara Pengisian dan Penilaian Tumbuh Kembang Anak Bagi PKB/PLKB, Kader dan Orang Tua", icon: "📝", link: "https://docs.google.com/presentation/d/1Ps4Kk3xF2Dq2wzWik1Xmoa3ogYiRBgTro_Fozdw8Ock/edit?usp=sharing"},
            { name: "MODUL BKB", desc: "Materi Belum Tersedia", icon: "📝", link: "#" },
            { name: "MODUL BKB", desc: "Materi Belum Tersedia", icon: "📝", link: "#" }
        ]
    },
    bkr: {
        title: "Bina Keluarga Remaja (BKR)",
        parent: "poktan",
        items: [
            { name: "MODUL BKR 1", desc: "Membangun Karakter, Komunikasi Efektif dan Ketahanan Mental Menuju Generasi Berencana", icon:'<img src="icon1.png" class="w-8 h-8 object-contain">', link: "https://docs.google.com/presentation/d/1w9XOoVwaYfOyH9QtAFcp0kOiyvdosypm/edit?usp=sharing" },
            { name: "MODUL BKR 2", desc: "Pedoman Pengelolaan Bina Keluarga Remaja", icon:'<img src="images216.jpg" class="w-8 h-8 object-contain">', link: "https://drive.google.com/file/d/1n3SuYqpnVUrDgc5tfyfZ2Z1xDNEoFC8p/view?usp=sharing" },
            { name: "MODUL BKR 3", desc: "Mekanisme Pengelolaan dan Pengembangan Program BKR", icon:'<img src="icon2.png" class="w-8 h-8 object-contain">', link: "https://docs.google.com/presentation/d/1HlAgzWjNr9kZNGdap0aEcgEen7S6mBBS/edit?usp=sharing" },
            { name: "MODUL BKR 4", desc: "Pencatatan & Pelaporan Bina Keluarga Remaja", icon:'<img src="images217.jpg" class="w-8 h-8 object-contain">', link: "https://docs.google.com/presentation/d/1iTkYLkLvHs29ybiTh2PGFp0M6UHHgFBC/edit?usp=sharing&ouid=104636205695945782752&rtpof=true&sd=true" },
            { name: "MODUL BKR 5", desc: "Pengelolaan POKTAN Bina Keluarga Remaja", icon:'<img src="icon7.png" class="w-8 h-8 object-contain">', link: "https://docs.google.com/presentation/d/1g5JLV96VKcTmwSkVn4YAZXlwb-2gB-7A/edit?usp=sharing&ouid=104636205695945782752&rtpof=true&sd=true" },
            { name: "MODUL BKR 6", desc: "Indikator Keberhasilan BKR", icon:'<img src="icon6.png" class="w-8 h-8 object-contain">', link: "https://docs.google.com/presentation/d/1gtePMkxHT2WAM7q413vQigDxoZwX9coC/edit?usp=sharing&ouid=104636205695945782752&rtpof=true&sd=true" },
            { name: "MODUL BKR 7", desc: "Materi Belum Tersedia", icon:'<img src="icon1.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "MODUL BKR 8", desc: "Materi Belum Tersedia", icon:'<img src="icon1.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "MODUL BKR 9", desc: "Materi Belum Tersedia", icon:'<img src="icon1.png" class="w-8 h-8 object-contain">', link: "#" }
        ]
    },
    bkl: {
        title: "Bina Keluarga Lansia (BKL)",
        parent: "poktan",
        items: [
            { name: "Pedoman Pelaksanaan Kelompok BKL", desc: "Acuan operasional pembinaan lansia tangguh", icon:'<img src="icon021.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "Pedoman Pelaksanaan Kelompok BKL", desc: "Acuan operasional pembinaan lansia tangguh", icon:'<img src="icon8.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "MODUL BKLL", desc: "Materi Belum Tersedia", icon:'<img src="icon8.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "MODUL BKLL", desc: "Materi Belum Tersedia", icon:'<img src="icon8.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "MODUL BKLL", desc: "Materi Belum Tersedia", icon:'<img src="icon8.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "MODUL BKLL", desc: "Materi Belum Tersedia", icon:'<img src="icon8.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "MODUL BKLL", desc: "Materi Belum Tersedia", icon:'<img src="icon8.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "MODUL BKLL", desc: "Materi Belum Tersedia", icon:'<img src="icon8.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "MODUL BKLL", desc: "Materi Belum Tersedia", icon:'<img src="icon8.png" class="w-8 h-8 object-contain">', link: "#" }
        ]
    },
    pikr: { 
        title: "PIK-Remaja (PIK-R)", 
        parent: "poktan", 
        items: [
            { 
                name: "MEMAHAMI DAN MENGATASI BULLYING", 
                desc: "Membangun Lingkungan Belajar yang Aman dan Nyaman dan Saling Menghargai", 
                icon: "📄", 
                link: "https://docs.google.com/presentation/d/1pHAHpOdL4zo_4ugu7DNGRvWYM36ZsqetqZmfpiJZTNc/edit?usp=sharing" 
            }
        ] 
    },
    uppka: { title: "Sub-Direktori: UPPKA", parent: "poktan", items: [{ name: "Pedoman Umum Pengelolaan UPPKA", desc: "Penguatan ekonomi keluarga akseptor KB", icon: "📄", link: "#" }] },
    genting: {
        title: "Modul GENTING",
        parent: "quickwin",
        items: [
            { name: "PANDUAN Aplikasi SIGENTING", desc: "Pengenalan Aplikasi SiGENTING", icon: '<img src="icon109.png" class="w-8 h-8 object-contain">', link: "https://drive.google.com/file/d/1apLwoYoRZKxrERlNjiq1QhlFDXl3oE3Y/view?usp=sharing" },
            { name: "PANDUAN AKSI CEPAT PENURUNAN STUNTING", desc: "Landasan Kebijakan Gerakan Orang Tua Asuh Cegah Stunting", icon: "📄", link: "https://docs.google.com/presentation/d/1TuZ1r65vUkM1IXedOjyb4Wjw84YUWsuD3UArmK9H9ik/edit?usp=sharing" },
            { name: "PANDUAN PELAKSANAAN GENTING", desc: "Sosialisasi Keputusan Menteri Kemendukbangga", icon: "👨‍👩‍👧", link: "https://docs.google.com/presentation/d/1-OkeN-ozFKj2aBRctIVblui4VqoXGWh_JJ2nGd5FpSk/edit?usp=sharing" },
            { name: "PANDUAN PELAKSANAAN GENTING", desc: "Buku Panduan Pelaksaan GENTING 2026", icon: '<img src="icon1.png" class="w-8 h-8 object-contain">', link: "https://drive.google.com/file/d/1AmwFtK-xTBY8JU0dr9pdHsrjCeb20ffp/view?usp=sharing" }, 
           { name: "JUKNIS AKSI 1-2-3", desc: "Pedoman Pelaksanaan Intervensi Penurunan Stunting Terintegrasi", icon: "🔍", link: "https://drive.google.com/file/d/18E0u-uEx-C_aG8HnLsP3kT9YDA96gp3h/view?usp=sharing" }
        ]
    },
    gati: { title: "Modul GATI", parent: "quickwin", items: 
             [{ name: "Pedoman Pelaksanaan GATI", desc: "Gerakan Ayah Teladan Indonesia di lapangan", icon: "📄", link: "#" },
              { name: "MODUL GATI", desc: "BELUM DITAMBAHKAN", icon: "📄", link: "#" },
              { name: "MODUL GATI", desc: "BELUM DITAMBAHKAN", icon: "📄", link: "#" },
              { name: "MODUL GATI", desc: "BELUM DITAMBAHKAN", icon: "📄", link: "#" },
              { name: "MODUL GATI", desc: "BELUM DITAMBAHKAN", icon: "📄", link: "#" },
              { name: "MODUL GATI", desc: "BELUM DITAMBAHKAN", icon: "📄", link: "#" },
             ]},
    tamasya: { title: "Modul TAMASYA", parent: "quickwin", items: 
             [{ name: "Pedoman Pelaksanaan TAMASYA", desc: "Taman Asuh Sayang Anak di wilayah khusus", icon: "📄", link: "#" },
              { name: "Modul TAMASYA", desc: "Belum Ditambahkan", icon: "📄", link: "#" },
              { name: "Modul TAMASYA", desc: "Belum Ditambahkan", icon: "📄", link: "#" },
              ] },
    sidaya: { title: "Modul SIDAYA", parent: "quickwin", items: 
             [{ name: "Modul SIDAYA", desc: "Belum Ditambahkan", icon: "📄", link: "#" },
              { name: "Modul SIDAYA", desc: "Belum Ditambahkan", icon: "📄", link: "#" },
              { name: "Modul SIDAYA", desc: "Belum Ditambahkan", icon: "📄", link: "#" },
             ] },
    penyuluhan: { title: "Materi Penyuluhan Umum", parent: "lainnya", items: 
             [{ name: "Modul SATYAGATRA", desc: "Sistim Rujukan Pusat Pelayanan Keluarga Sejahtera", icon: "📂", link: "https://docs.google.com/presentation/d/1crhRv9fxUPkTYINP_9nDD5s-fCRlfZ4O/edit?usp=sharing&ouid=104636205695945782752&rtpof=true&sd=true" },
              { name: "Modul KAMPUNG KB", desc: "Strategi Peningkatan Kualitas Hidup dari tingkat Dusun/RT", icon: "📂", link: "https://docs.google.com/presentation/d/1xiixVefzwvJi7NbqYgDYopt9LH7Q5SKNrUwCf5r97ME/edit?usp=sharing" },
              { name: "Modul Penyuluhan", desc: "Belum Ditambahkan", icon: "📂", link: "#" },
              { name: "Modul Penyuluhan", desc: "Belum Ditambahkan", icon: "📂", link: "#" },
              { name: "Modul Penyuluhan", desc: "Belum Ditambahkan", icon: "📂", link: "#" },
              { name: "Modul Penyuluhan", desc: "Belum Ditambahkan", icon: "📂", link: "#" },
             ] },
    panduan: { title: "Panduan Lapangan PKB/PLKB", parent: "lainnya", items: 
             [{ name: "Panduan Tekhnis", desc: "Belum Ditambahkan", icon: "📖", link: "#" },
              { name: "Panduan Tekhnis", desc: "Belum Ditambahkan", icon: "📖", link: "#" },
              { name: "Petunjuk Tekhnis", desc: "Belum Ditambahkan", icon: "📖", link: "#" },
              { name: "Petunjuk Tekhnis", desc: "Belum Ditambahkan", icon: "📖", link: "#" },
              { name: "Petunjuk Tekhnis", desc: "Belum Ditambahkan", icon: "📖", link: "#" },
              { name: "Petunjuk Tekhnis", desc: "Belum Ditambahkan", icon: "📖", link: "#" },
             ] },
};
// --- DATA PERATURAN ---
const dataPeraturan = {
    uu: { title: "Direktori Undang-Undang", items: 
            [{ name: "UU No. 52 Tahun 2009", desc: "Perkembangan Kependudukan & Pembangunan Keluarga", icon: "📜", link: "https://drive.google.com/file/d/117CV01siCHhGE3YLmsv1Pe3oLmvDoY-h/view?usp=sharing" },
             { name: "UU No. 23 Tahun 2026", desc: "Tentang Administrasi Kependudukan", icon: "📜", link: "https://drive.google.com/file/d/1nT8papq4S9-JXx_u3FSTN-zR5pyb_-p2/view?usp=sharing" },
             { name: "UU No. 23 Tahun 2014", desc: "Tentang Pemerintah Daerah", icon: "📜", link: "https://drive.google.com/file/d/1APvsGhajjseCmfiDfXx38ADdsROgn8KN/view?usp=sharing" }, // <-- KOMA SUDAH DITAMBAHKAN DI SINI
             { name: "UU No. xx Tahun xxxx", desc: "Belum Ditambahkan", icon: "📜", link: "#" },
             { name: "UU No. xx Tahun xxxx", desc: "Belum Ditambahkan", icon: "📜", link: "#" },
             { name: "UU No. xx Tahun xxxx", desc: "Belum Ditambahkan", icon: "📜", link: "#" }
            ]},
       perpres: { title: "Direktori Peraturan Presiden", items: 
            [{ name: "Perpres No. 72 Tahun 2021", desc: "Percepatan Penurunan Stunting Nasional", icon: "🏛️", link: "https://drive.google.com/file/d/1LVLCU9TJcZGWmh0csqQlyQ6_Kd3aKuFk/view?usp=sharing" },
             { name: "Perpres No. 03 Tahun 2026", desc: "Pencegahan dan Penanganan Anak Tidak Sekolah", icon: "🏛️", link: "https://drive.google.com/file/d/1PmhSKzLYUtpZzMHAXDd9Exz8AyCern8O/view?usp=sharing" },
             { name: "Perpres No. 180 Tahun 2024", desc: "Kementerian Kependudukan dan Pembangunan Keluarga", icon: "🏛️", link: "https://drive.google.com/file/d/134oL27yWqx7OXayNxeKf3tMeXiA-diXP/view?usp=sharing" },
             { name: "Perpres No. 181 Tahun XXXX", desc: "Badan Kependudukan dan Keluarga Berencana Nasional", icon: "🏛️", link: "https://drive.google.com/file/d/1aATw2KfiBMjNouDKhTcizR0Y7bf1uZ24/view?usp=sharing" },
             { name: "Perpres No. XX Tahun XXXX", desc: "BELUM DITAMBAHKAN", icon: "🏛️", link: "#" },
             { name: "Perpres No. XX Tahun XXXX", desc: "BELUM DITAMBAHKAN", icon: "🏛️", link: "#" }
            ]},
       permen: { title: "Direktori Peraturan Menteri", items: 
            [{ name: "Permen No.03 Tahun 2026", desc: "Penyelenggaraan Layanan Informasi Publik Kemendukbangga/BKKBN", icon: "📑", link: "https://drive.google.com/file/d/10xaf96bxODsYMhe9TwzxiLLIrJr1VSWf/view?usp=sharing" },
             { name: "Permen No 01 Tahun 2026", desc: "Tim Pendamping Keluarga", icon: "📑", link: "https://drive.google.com/file/d/1h1tNRNDrVoYURQkI1xtp6CxDqMX9muBk/view?usp=sharing" },
             { name: "Permen No 05 Tahun 2025", desc: "Juknis Penggunaan Dana BOKB Tahun 2026", icon: "📑", link: "https://drive.google.com/file/d/180iy0y66eIQ77WR36wq1ULcT7PgA0pM8/view?usp=sharing" },
             { name: "Permen No 01 Tahun 2025", desc: "Pendayagunaan Tenaga Penyuluh Keluarga Berencana dan Petugas Lapangan Keluarga Berencana", icon: "📑", link: "https://drive.google.com/file/d/1JZ3BKCRtYXW4QXOJOE8FL5n412pY9Io4/view?usp=sharing" },
             { name: "Permenpan/RB No 18 Tahun 2025", desc: "Jabatan Fungsional di Bidang Kependudukan dan Pembangunan Keluarga", icon: "📑", link: "https://drive.google.com/file/d/1eNOV6hIDJLENEwhUNMZMLJeuQ2i_uqvR/view?usp=sharing" },
             { name: "Permendukbangga No 03 Tahun 2025", desc: "Uji Kompetensi Jabatan Fungsional di Bidang Kependudukan dan Pembangunan Keluarga", icon: "📑", link: "https://drive.google.com/file/d/1uYd-qXDt6B0b446hY1aspsfM1270Hyd1/view?usp=sharing" },
             { name: "Permen No xx Tahun xxxx", desc: "BELUM DITAMBAHKAN", icon: "📑", link: "#" },
             { name: "Permen No xx Tahun xxxx", desc: "BELUM DITAMBAHKAN", icon: "📑", link: "#" }
            ]},
       juknis: { title: "Direktori Petunjuk Teknis & Keputusan", items: 
            [{ name: "Juknis Pengelolaan Kampung KB", desc: "Panduan pembentukan dan klasifikasi kampung", icon: "📂", link: "#" },
             { name: "Juknis XXXXXXXXXXX", desc: "BELUM DITAMBAHKAN", icon: "📂", link: "#" },
             { name: "Juknis XXXXXXXXXXX", desc: "BELUM DITAMBAHKAN", icon: "📂", link: "#" },
             { name: "Juknis XXXXXXXXXXX", desc: "BELUM DITAMBAHKAN", icon: "📂", link: "#" },
             { name: "Juknis XXXXXXXXXXX", desc: "BELUM DITAMBAHKAN", icon: "📂", link: "#" },
             { name: "Juknis XXXXXXXXXXX", desc: "BELUM DITAMBAHKAN", icon: "📂", link: "#" }
            ]},
};

// --- 3. LOGIKA SLIDER FOTO BERANDA ---
let currentSlide = 0;
let slideInterval;

function initSlider() {
    showSlide(currentSlide);
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(() => { nextSlide(); }, 4000);
}

function showSlide(index) {
    const container = document.getElementById('slider-container');
    const dots = document.querySelectorAll('#slider-dots span');
    if (!container) return;

    const totalSlides = container.children.length;
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

    container.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, idx) => {
        dot.className = idx === currentSlide ? "w-2.5 h-2.5 rounded-full bg-white transition-all cursor-pointer" : "w-2.5 h-2.5 rounded-full bg-white/50 transition-all cursor-pointer";
    });
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }
function goToSlide(index) { showSlide(index); }

// --- 4. SISTEM LOGIN & SESSION ---
function prosesLoginManual() {
    const userEl = document.getElementById('login-user');
    const passEl = document.getElementById('login-pass');
    if (!userEl || !passEl) return;

    const u = userEl.value.trim();
    const p = passEl.value.trim();
    if (!u || !p) { alert("Silakan masukkan username dan password."); return; }

    localStorage.setItem('sidelila_username', u);
    if (u === "admin" && p === "admin2026") {
        localStorage.setItem('sidelila_logged_in', 'true');
        localStorage.setItem('sidelila_role', 'admin');
        tampilkanDashboard();
        return;
    }

    if (p !== "user123456") { alert("Password salah! Masukan Password kembali"); return; }
    localStorage.setItem('sidelila_logged_in', 'true');
    localStorage.setItem('sidelila_role', 'user');
    tampilkanDashboard();
}

function tampilkanDashboard() {
    document.getElementById('view-login').style.display = 'none';
    document.getElementById('view-dashboard').style.display = 'block';

    const role = localStorage.getItem('sidelila_role');
    const username = localStorage.getItem('sidelila_username') || 'Pengguna';

    const userDisplayEl = document.getElementById('user-display-name');
    if (userDisplayEl) userDisplayEl.innerText = username;

    document.querySelectorAll('*').forEach(el => {
        if (el.children.length === 0 && (el.innerText.trim().toLowerCase() === 'abang utam')) {
            el.innerText = username;
        }
    });

    const profileRoleEl = document.getElementById('profile-role');
    if (profileRoleEl) profileRoleEl.innerText = role === 'admin' ? 'Administrator' : 'Penyuluh KB';

    navigateTo('beranda');
}

function handleLogout() {
    if (confirm("Apakah Anda yakin ingin keluar dari SIDELILA v2.0?")) {
        localStorage.removeItem('sidelila_logged_in');
        localStorage.removeItem('sidelila_username');
        localStorage.removeItem('sidelila_role');
        localStorage.removeItem('sidelila_active_section');
        document.getElementById('view-dashboard').style.display = 'none';
        document.getElementById('view-login').style.display = 'flex';
    }
}

// --- 5. NAVIGASI HALAMAN & SIDEBAR ---
function navigateTo(sectionId, event) {
    // Perintah paksa naik ke atas paling utama
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const mainContainer = document.querySelector('main') || document.querySelector('.overflow-y-auto');
    if (mainContainer) mainContainer.scrollTop = 0;

    if (event) event.preventDefault();
    localStorage.setItem('sidelila_active_section', sectionId);

    // 1. Sembunyikan SEMUA halaman berkelas .page-section secara paksa
    document.querySelectorAll('.page-section').forEach(sec => {
        sec.classList.remove('active');
        sec.style.setProperty('display', 'none', 'important');
    });

    // 2. Paksa sembunyikan Uji Kompetensi berdasarkan ID-nya secara langsung
    const ujiKompetensiBox = document.getElementById('section-kompetensi');
    if (ujiKompetensiBox) {
        ujiKompetensiBox.style.setProperty('display', 'none', 'important');
    }

    // 3. Tampilkan hanya halaman utama yang dipilih oleh pengguna
    const targetSection = document.getElementById(`section-${sectionId}`);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.style.setProperty('display', 'block', 'important');
    }

    // 4. Atur status aktif pada menu sidebar sebelah kiri
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    const activeLink = document.getElementById(`menu-${sectionId}`);
    if (activeLink) activeLink.classList.add('active');

    // 5. Eksekusi fungsi tambahan sesuai menu yang diklik
    if (sectionId === 'beranda') initSlider();
    if (sectionId !== 'materi') showMateriCategoriesView();
    if (sectionId !== 'peraturan') showPeraturanCategoriesView();
    if (sectionId === 'form') closeFormDetailView();
    if (sectionId === 'galeri') renderGaleriView();
}

function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    const arrow = document.getElementById(`arrow-${submenuId}`);
    if (submenu) {
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
            if (arrow) arrow.style.transform = "rotate(0deg)";
        } else {
            submenu.style.display = "block";
            if (arrow) arrow.style.transform = "rotate(180deg)";
        }
    }
}

// --- 6. MENU MATERI & PERATURAN ---
function showMateriCategoriesView() {
    document.getElementById('materi-categories-view').style.display = 'block';
    document.getElementById('materi-detail-view').style.display = 'none';
}

// --- DATA UTAMA KATEGORI MATERI ---
const dataMateri = {
    poktan: {
        title: "Modul Kelompok Kegiatan (POKTAN)",
        items: [
            { isSubdirectory: true, subKey: "bkb", name: "Bina Keluarga Balita (BKB)", desc: "Materi BKB, BKB HI, EMAS, dan Kartu Kembang Anak", icon: "👶" },
            { isSubdirectory: true, subKey: "bkr", name: "Bina Keluarga Remaja (BKR)", desc: "Modul pembangunan karakter dan ketahanan remaja", icon: "👦" },
            { isSubdirectory: true, subKey: "bkl", name: "Bina Keluarga Lansia (BKL)", desc: "Pedoman pelaksanaan pembinaan lansia tangguh", icon: "👵" },
            { isSubdirectory: true, subKey: "pikr", name: "PIK-Remaja (PIK-R)", desc: "Pusat Informasi dan Konseling Remaja", icon: "📄" },
            { isSubdirectory: true, subKey: "uppka", name: "UPPKA", desc: "Usaha Peningkatan Pendapatan Keluarga Akseptor", icon: "📄" }
        ]
    },
    quickwin: {
        title: "Modul Program Unggulan (QUICKWIN)",
        items: [
            { isSubdirectory: true, subKey: "genting", name: "Modul GENTING", desc: "Gerakan Orang Tua Asuh Cegah Stunting", icon: "🌱" },
            { isSubdirectory: true, subKey: "gati", name: "Modul GATI", desc: "Gerakan Ayah Teladan Indonesia", icon: "📄" },
            { isSubdirectory: true, subKey: "tamasya", name: "Modul TAMASYA", desc: "Taman Asuh Sayang Anak di wilayah khusus", icon: "📄" },
            { isSubdirectory: true, subKey: "sidaya", name: "Modul SIDAYA", desc: "Sistem Pemberdayaan Keluarga", icon: "📄" }
        ]
    },
    lainnya: {
        title: "Modul & Bahan Penyuluhan Lainnya",
        items: [
            { isSubdirectory: true, subKey: "penyuluhan", name: "Materi Penyuluhan Umum", desc: "Modul Satyagatra, Kampung KB, dll", icon: "📂" },
            { isSubdirectory: true, subKey: "panduan", name: "Panduan Lapangan PKB/PLKB", desc: "Panduan Teknis dan Petunjuk Teknis Operasional", icon: "📖" }
        ]
    }
};

function openMateriCategory(categoryKey, event) {
    if (event) event.preventDefault();
    navigateTo('materi');
    const catData = dataMateri[categoryKey];
    if (!catData) return;

    document.getElementById('materi-categories-view').style.display = 'none';
    document.getElementById('materi-detail-view').style.display = 'block';
    document.getElementById('materi-category-title').innerText = catData.title;

    const grid = document.getElementById('materi-items-grid');
    grid.innerHTML = '';
    
    catData.items.forEach(item => {
        if (item.isSubdirectory) {
            grid.innerHTML += `
                <div onclick="openSubMateri('${item.subKey}')" class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-sky-400 transition-all block group cursor-pointer">
                    <div class="text-3xl mb-3">${item.icon}</div>
                    <h5 class="font-bold text-slate-800 text-sm group-hover:text-sky-600">${item.name}</h5>
                    <p class="text-xs text-slate-500 mt-1">${item.desc}</p>
                    <span class="inline-block mt-3 text-[10px] font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded">📂 Buka Sub-Direktori →</span>
                </div>
            `;
        } else {
            grid.innerHTML += `
                <a href="${item.link}" target="_blank" class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-sky-400 transition-all block group">
                    <div class="text-3xl mb-3">${item.icon}</div>
                    <h5 class="font-bold text-slate-800 text-sm group-hover:text-sky-600">${item.name}</h5>
                    <p class="text-xs text-slate-500 mt-1">${item.desc}</p>
                </a>
            `;
        }
    });
}

function openSubMateri(subKey) {
    const subData = subMateriData[subKey];
    if (!subData) return;

    document.getElementById('materi-category-title').innerText = subData.title;
    const grid = document.getElementById('materi-items-grid');
    grid.innerHTML = `
        <div class="col-span-full mb-3">
            <button type="button" onclick="openMateriCategory('${subData.parent}')" class="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all cursor-pointer">
                ← Kembali ke Daftar Kategori
            </button>
        </div>
    `;

    subData.items.forEach(item => {
        grid.innerHTML += `
            <a href="${item.link}" target="_blank" class="bg-sky-50/50 p-5 rounded-2xl border border-sky-200 shadow-sm hover:border-sky-500 transition-all block group">
                <div class="text-3xl mb-3">${item.icon}</div>
                <h5 class="font-bold text-slate-800 text-sm group-hover:text-sky-600">${item.name}</h5>
                <p class="text-xs text-slate-500 mt-1">${item.desc}</p>
                <span class="inline-block mt-3 text-[10px] font-bold text-sky-700 bg-sky-100 px-2.5 py-1 rounded">📄 Lihat / Unduh Dokumen</span>
            </a>
        `;
    });
}

function showPeraturanCategoriesView() {
    document.getElementById('peraturan-categories-view').style.display = 'block';
    document.getElementById('peraturan-detail-view').style.display = 'none';
}

function openPeraturanCategory(categoryKey, event) {
    if (event) event.preventDefault();
    navigateTo('peraturan');
    const catData = dataPeraturan[categoryKey];
    if (!catData) return;

    document.getElementById('peraturan-categories-view').style.display = 'none';
    document.getElementById('peraturan-detail-view').style.display = 'block';
    document.getElementById('peraturan-category-title').innerText = catData.title;

    const grid = document.getElementById('peraturan-items-grid');
    grid.innerHTML = `
        <div class="col-span-full mb-3">
            <button type="button" onclick="showPeraturanCategoriesView()" class="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all cursor-pointer">
                ← Kembali ke Daftar Kategori Peraturan
            </button>
        </div>
    `;
    
    catData.items.forEach(item => {
        grid.innerHTML += `
            <a href="${item.link}" target="_blank" class="bg-blue-50/50 p-5 rounded-2xl border border-blue-200 shadow-sm hover:border-blue-500 transition-all block group">
                <div class="text-3xl mb-3">${item.icon}</div>
                <h5 class="font-bold text-slate-800 text-sm group-hover:text-blue-600">${item.name}</h5>
                <p class="text-xs text-slate-500 mt-1">${item.desc}</p>
                <span class="inline-block mt-3 text-[10px] font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded">📜 Lihat / Unduh Regulasi</span>
            </a>
        `;
    });
}

// --- 7. ROUTER HANDLER MENU FORM ---
function openFormType(key, event) {
    if (event) event.preventDefault();
    navigateTo('form');
    if (key === 'wfh') bukaFormWFH();
    else if (key === 'estimasi-sasaran') bukaEstimasiSasaran();
    else if (key === 'estimasi-pangkat') bukaEstimasiPangkat();
    else if (key === 'usulan-pangkat') bukaFormUsulanPangkat();
}

function closeFormDetailView() {
    const catView = document.getElementById('form-categories-view');
    const detailContainer = document.getElementById('form-detail-container');
    if (catView) catView.style.display = 'block';
    if (detailContainer) {
        detailContainer.style.display = 'none';
        detailContainer.innerHTML = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 8. MODUL 1: FORM WFH RESMI ---
function bukaFormWFH() {
    const catView = document.getElementById('form-categories-view');
    const detailContainer = document.getElementById('form-detail-container');
    
    if (catView) catView.style.display = 'none';
    if (detailContainer) {
        detailContainer.style.display = 'block';
        detailContainer.innerHTML = `
            <div class="flex justify-between items-center border-b border-slate-200 pb-4">
                <button type="button" onclick="closeFormDetailView()" class="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all flex items-center gap-2 cursor-pointer">
                    ← Kembali ke Kartu Submenu
                </button>
                <span class="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">Modul Form WFH Resmi</span>
            </div>
            <div class="border-b-2 border-slate-900 pb-4 mb-6">
                <table class="w-full border-collapse">
                    <tr>
                        <td class="w-16 align-middle"><img src="logo.png" alt="Logo" class="w-12 h-12 object-contain" onerror="this.style.display='none'"></td>
                        <td class="align-middle text-xs font-bold text-slate-900 leading-tight"><p>Kemendukbangga/</p><p>BKKBN</p></td>
                        <td class="align-middle text-right text-xs text-slate-700 space-y-0.5">
                            <p class="font-bold text-slate-900">Kementerian Kependudukan dan Pembangunan Keluarga/BKKBN</p>
                            <p class="font-semibold text-slate-800">Perwakilan BKKBN Provinsi Maluku Utara</p>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="text-center space-y-2 mb-6">
                <h3 class="text-sm font-black text-slate-900 uppercase tracking-wide">LAPORAN HARIAN PELAKSANAAN WORK FROM HOME (WFH)</h3>
                <div class="flex justify-center items-center gap-2 pt-1">
                    <span class="text-xs font-bold text-slate-700">BULAN :</span>
                    <input type="text" id="wfh-bulan" placeholder="CONTOH: SEPTEMBER" class="px-3 py-1 bg-slate-50 border border-slate-300 rounded text-xs font-semibold uppercase">
                    <span class="text-xs font-bold text-slate-700">TAHUN :</span>
                    <input type="text" id="wfh-tahun" value="2026" class="w-20 px-3 py-1 bg-slate-50 border border-slate-300 rounded text-xs font-semibold text-center">
                </div>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-3 max-w-2xl mb-6">
                <div class="grid grid-cols-3 items-center"><span class="font-bold text-slate-700">NAMA</span><span class="col-span-2"><input type="text" id="wfh-nama" placeholder="Masukkan Nama Lengkap..." class="w-full px-3 py-2 bg-white border border-slate-300 rounded font-medium"></span></div>
                <div class="grid grid-cols-3 items-center"><span class="font-bold text-slate-700">NIP</span><span class="col-span-2"><input type="text" id="wfh-nip" placeholder="Masukkan NIP (18 Digit)..." class="w-full px-3 py-2 bg-white border border-slate-300 rounded font-medium"></span></div>
                <div class="grid grid-cols-3 items-center"><span class="font-bold text-slate-700">JABATAN</span><span class="col-span-2">
                    <select id="wfh-jabatan" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-500 font-medium">
    <option value="">-- Pilih Jenjang Jabatan --</option>
    <optgroup label="Kategori Keterampilan">
        <option value="Penyuluh KB Pemula">Penyuluh KB Pemula</option>
        <option value="Penyuluh KB Terampil">Penyuluh KB Terampil</option>
        <option value="Penyuluh KB Mahir">Penyuluh KB Mahir</option>
        <option value="Penyuluh KB Penyelia">Penyuluh KB Penyelia</option>
    </optgroup>
    <optgroup label="Kategori Keahlian">
        <option value="Penyuluh KB Ahli Pertama">Penyuluh KB Ahli Pertama</option>
        <option value="Penyuluh KB Ahli Muda">Penyuluh KB Ahli Muda</option>
        <option value="Penyuluh KB Ahli Madya">Penyuluh KB Ahli Madya</option>
        <option value="Penyuluh KB Ahli Utama">Penyuluh KB Ahli Utama</option>
    </optgroup>
</select>                </span></div>
            </div>
            <div class="space-y-3 mb-6">
                <h4 class="text-xs font-bold text-slate-800 uppercase">1. Pelaksanaan Kegiatan WFH</h4>
                <div class="overflow-x-auto">
                    <table class="w-full text-xs text-left border-collapse border border-slate-300">
                        <thead>
                            <tr class="bg-slate-100 text-slate-700 text-center font-bold">
                                <th class="border border-slate-300 p-2 w-12">No</th>
                                <th class="border border-slate-300 p-2 w-36">Tanggal</th>
                                <th class="border border-slate-300 p-2">Uraian Kegiatan</th>
                                <th class="border border-slate-300 p-2 w-72">Bukti Dukung (Link)</th>
                                <th class="border border-slate-300 p-2 w-16">Aksi</th>
                            </tr>
                        </thead>
                        <tbody id="wfh-tabel-body"></tbody>
                    </table>
                </div>
                <div><button type="button" onclick="tambahBarisWFH()" class="px-4 py-2 bg-sky-600 text-white text-xs font-bold rounded hover:bg-sky-700 cursor-pointer">+ Tambah Kolom</button></div>
            </div>
           <div class="space-y-4 mb-6">
                <div class="space-y-1">
                    <label class="text-xs font-bold text-slate-800 uppercase block">II. Target Perjanjian Kinerja</label>
                    <textarea id="wfh-target" rows="3" placeholder="Masukkan target perjanjian kinerja..." class="w-full p-2 bg-transparent border-b border-slate-300 focus:border-sky-600 focus:outline-none rounded-none text-xs resize-y"></textarea>
                </div>
                <div class="space-y-1">
                    <label class="text-xs font-bold text-slate-800 uppercase block">III. Kendala</label>
                    <textarea id="wfh-kendala" rows="2" placeholder="Masukkan kendala jika ada..." class="w-full p-2 bg-transparent border-b border-slate-300 focus:border-sky-600 focus:outline-none rounded-none text-xs resize-y"></textarea>
                </div>
            </div>
            <div class="mb-4 text-left">
       <label class="text-xs font-bold text-slate-800 uppercase block mb-1">Tanggal Surat / Laporan</label>
       <input type="date" id="wfh-tanggal-surat" class="w-full p-2 bg-white border border-slate-300 rounded text-xs">
   </div>
               <div class="pt-6 border-t border-slate-200 text-center">
                <button type="button" onclick="downloadPDFWFH()" class="px-8 py-3 bg-rose-600 text-white text-xs font-bold rounded-xl hover:bg-rose-700 shadow-md cursor-pointer">📥 Download PDF</button>
            </div>
        `;
        tambahBarisWFH();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

let barisWfhCount = 0;
function tambahBarisWFH() {
    barisWfhCount++;
    const tbody = document.getElementById('wfh-tabel-body');
    if (!tbody) return;
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td class="border border-slate-300 p-2 text-center font-bold">${barisWfhCount}</td>
        <td class="border border-slate-300 p-2"><input type="date" class="w-full p-1.5 bg-white border border-slate-300 rounded text-xs"></td>
        <td class="border border-slate-300 p-2"><input type="text" placeholder="Uraian kegiatan..." class="w-full p-1.5 bg-white border border-slate-300 rounded text-xs"></td>
        <td class="border border-slate-300 p-2"><input type="url" placeholder="https://..." class="w-full p-1.5 bg-white border border-slate-300 rounded text-xs"></td>
        <td class="border border-slate-300 p-2 text-center"><button type="button" onclick="hapusBarisWFH(this)" class="px-2 py-1 bg-rose-100 text-rose-600 rounded text-xs font-bold cursor-pointer">✕</button></td>
    `;
    tbody.appendChild(tr);
    penomoranUlangWFH();
}

function hapusBarisWFH(btn) {
    btn.closest('tr').remove();
    penomoranUlangWFH();
}


function penomoranUlangWFH() {
    const rows = document.querySelectorAll('#wfh-tabel-body tr');
    rows.forEach((row, index) => { row.children[0].innerText = index + 1; });
    barisWfhCount = rows.length;
}
// Fungsi untuk membalik format YYYY-MM-DD menjadi DD-MM-YYYY
function formatTanggalIndo(tanggalStr) {
    if (!tanggalStr) return "-";
    const parts = tanggalStr.split("-");
    if (parts.length === 3) {
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return tanggalStr;
}

function downloadPDFWFH() {
    const bulan = document.getElementById('wfh-bulan')?.value || '....................';
    const tahun = document.getElementById('wfh-tahun')?.value || '2026';
    const nama = document.getElementById('wfh-nama')?.value || '(Nama Pelapor)';
    const nip = document.getElementById('wfh-nip')?.value || '....................';
    const jabatan = document.getElementById('wfh-jabatan')?.value || 'Penyuluh KB';
    const target = document.getElementById('wfh-target')?.value || '-';
    const kendala = document.getElementById('wfh-kendala')?.value || '-';
    const tglSuratMentah = document.getElementById('wfh-tanggal-surat')?.value || '';
    const tanggalSuratFinal = tglSuratMentah ? formatTanggalIndo(tglSuratMentah) : `............................ ${tahun}`;
    
    const rows = document.querySelectorAll('#wfh-tabel-body tr');
    let tabelRowsHTML = '';
    
    if (rows.length === 0) {
        tabelRowsHTML = `<tr><td colspan="4" style="border: 1px solid black; padding: 8px; text-align: center;">Tidak ada data kegiatan.</td></tr>`;
    } else {
       rows.forEach((row, index) => {
            const tglMentah = row.querySelector('input[type="date"]')?.value || '-';
            const tgl = formatTanggalIndo(tglMentah); // <--- Ubah tgl menjadi memanggil fungsi formatTanggalIndo
            const uraian = row.querySelector('input[type="text"]')?.value || '-';
            const bukti = row.querySelector('input[type="url"]')?.value || '-';
            tabelRowsHTML += `
                <tr>
                    <td style="border: 1px solid black; padding: 6px; text-align: center;">${index + 1}</td>
                    <td style="border: 1px solid black; padding: 6px; text-align: center;">${tgl}</td>
                    <td style="border: 1px solid black; padding: 6px;">${uraian}</td>
                    <td style="border: 1px solid black; padding: 6px;">${bukti}</td>
                </tr>
            `;
        });
    }

    const printHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Laporan WFH - ${nama}</title>
            <style>
                @page { size: A4; margin: 15mm; }
                body { font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.3; color: #000; padding: 10px; background: #fff; }
                .kop-table { width: 100%; border-bottom: double 3px black; padding-bottom: 8px; margin-bottom: 15px; }
                .kop-table td { vertical-align: middle; border: none; }
                .judul { text-align: center; font-weight: bold; font-size: 11pt; margin-bottom: 3px; text-transform: uppercase; }
                .sub-judul { text-align: center; font-weight: bold; font-size: 10pt; margin-bottom: 15px; text-transform: uppercase; }
                .section-title { font-weight: bold; background-color: #f2f2f2; padding: 4px 8px; font-size: 10pt; border: 1px solid black; margin-top: 12px; }
                table.info { width: 100%; border-collapse: collapse; border: 1px solid black; border-top: none; margin-bottom: 12px; }
                table.info td { padding: 4px 8px; vertical-align: top; font-size: 10pt; border-bottom: 1px solid #d1d5db; }
                table.data { width: 100%; border-collapse: collapse; margin-top: 4px; margin-bottom: 12px; }
                table.data th, table.data td { border: 1px solid black; padding: 5px; font-size: 10pt; }
                table.data th { background-color: #f2f2f2; text-align: center; }
                .info-text { margin-top: 6px; margin-bottom: 12px; font-size: 10pt; white-space: pre-line; padding-left: 4px; line-height: 1.4; }
                .ttd-table { width: 100%; border: none; margin-top: 20px; page-break-inside: avoid; }
                .ttd-table td { border: none; vertical-align: top; font-size: 10pt; }
            </style>
        </head>
        <body>
            <table class="kop-table">
                <tr>
                    <td style="width: 55px;"><img src="logo.png" alt="Logo" style="width: 45px; height: 45px; object-fit: contain;" onerror="this.style.display='none'"></td>
                    <td style="width: 130px; font-weight: bold; font-size: 9pt; line-height: 1.2;">Kemendukbangga/<br>BKKBN</td>
                    <td style="text-align: right; font-size: 9pt; line-height: 1.3;">
                        <b>Kementerian Kependudukan dan</b><br>
                        <b>Pembangunan Keluarga / BKKBN</b><br>
                        Perwakilan BKKBN Provinsi Maluku Utara<br>
                        Jl. Raya Sofifi Km. 40, Kota Tidore Kepulauan | malut.bkkbn.go.id
                    </td>
                </tr>
            </table>

            <div class="judul">LAPORAN HARIAN PELAKSANAAN WORK FROM HOME (WFH)</div>
            <div class="sub-judul">BULAN : ${bulan} TAHUN ${tahun}</div>

            <div class="section-title">I. KETERANGAN PELAPOR</div>
            <table class="info">
                <tr><td style="width: 30%;">1. Nama</td><td style="width: 2%;">:</td><td style="width: 68%;"><b>${nama}</b></td></tr>
                <tr><td>2. NIP</td><td>:</td><td>${nip}</td></tr>
                <tr><td>3. Jabatan</td><td>:</td><td>${jabatan}</td></tr>
            </table>

            <div class="section-title">II. PELAKSANAAN KEGIATAN WFH</div>
            <table class="data">
                <thead>
                    <tr>
                        <th style="width: 35px;">No</th>
                        <th style="width: 85px;">Tanggal</th>
                        <th>Uraian Kegiatan</th>
                        <th style="width: 130px;">Bukti Dukung (Link)</th>
                    </tr>
                </thead>
                <tbody>
                    ${tabelRowsHTML}
                </tbody>
            </table>

            <div class="section-title">III. TARGET PERJANJIAN KINERJA</div>
            <div class="info-text">${target}</div>

            <div class="section-title">IV. KENDALA</div>
            <div class="info-text">${kendala}</div>

            <table class="ttd-table">
                <tr>
                    <td style="width: 50%; text-align: left;">
                        <p style="margin:0; font-weight: bold;">Mengetahui,</p>
                        <p style="margin:0; font-weight: bold;">Plt. Kepala Perwakilan Kemendukbangga/BKKBN</p>
                        <p style="margin:0; font-weight: bold;">Provinsi Maluku Utara,</p>
                        <br><br><br>
                        <p style="margin:0; font-weight: bold; text-decoration: underline;">Anshar Djainahu, S.Sos</p>
                        <p style="margin:0;">NIP. 198012182007011001</p>
                    </td>
                    <td style="width: 50%; text-align: right;">
                        <p style="margin:0;">Kab/Kota, ${tanggalSuratFinal}</p>
                        <p style="margin:0; font-weight: bold;">Penyuluh KB,</p>
                        <br><br><br>
                        <p style="margin:0; font-weight: bold; text-decoration: underline;">${nama}</p>
                        <p style="margin:0;">NIP. ${nip}</p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `;
    bukaJendelaCetak(printHTML);
}

// ==========================================================================
// 9. MODUL 2: ESTIMASI SASARAN (LENGKAP DENGAN TOMBOL DOWNLOAD PDF)
// ==========================================================================
function bukaEstimasiSasaran() {
    const catView = document.getElementById('form-categories-view');
    const detailContainer = document.getElementById('form-detail-container');
    
    if (catView) catView.style.display = 'none';
    if (detailContainer) {
        detailContainer.style.display = 'block';
        detailContainer.innerHTML = `
            <div class="flex justify-between items-center border-b border-slate-200 pb-4 mb-6">
                <button type="button" onclick="closeFormDetailView()" class="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all cursor-pointer">
                    ← Kembali ke Kartu Submenu
                </button>
                <span class="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">Kalkulator Estimasi Sasaran Wilayah</span>
            </div>

            <div class="mb-6">
                <h3 class="text-base font-black text-slate-900 uppercase">Estimasi Sasaran Program</h3>
                <p class="text-xs text-slate-500 mt-1">Masukkan jumlah penduduk wilayah binaan, lalu klik tombol hitung untuk memproses estimasi sasaran program.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div class="lg:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
                    <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wide">Parameter Wilayah</h4>
                    <div class="space-y-1">
                        <label class="block text-xs font-bold text-slate-700">Nama Wilayah / Desa / Kecamatan</label>
                        <input type="text" id="est-wilayah" placeholder="Contoh: Desa Wayo / Kec. Taliabu Barat" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-500 font-medium">
                    </div>
                    <div class="space-y-1">
                        <label class="block text-xs font-bold text-slate-700">Jumlah Penduduk Total (Jiwa)</label>
                        <input type="number" id="est-penduduk" placeholder="Contoh: 2500" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-500 font-bold text-sky-700 text-base">
                    </div>
                    <div class="pt-2">
                        <button type="button" onclick="hitungEstimasiSasaran()" class="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer">
                            📊 Hitung Estimasi Sasaran
                        </button>
                    </div>
                </div>

                <div class="lg:col-span-7 bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900 p-6 rounded-2xl text-white shadow-xl space-y-6 relative overflow-hidden">
                    <div class="flex justify-between items-center border-b border-slate-800 pb-4">
                        <div>
                            <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-sky-500/25 text-sky-300 border border-sky-400/30 uppercase tracking-widest">Hasil Kalkulasi Wilayah</span>
                            <h4 id="result-wilayah-title" class="text-lg font-extrabold mt-2 text-white">Wilayah Binaan Belum Dipilih</h4>
                        </div>
                        <div class="text-right">
                            <p class="text-[10px] text-slate-400 uppercase">Total Penduduk</p>
                            <p id="result-total-pddk" class="text-xl font-black text-sky-400">0 Jiwa</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div class="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                            <div class="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center text-lg font-bold">👶</div>
                            <div>
                                <p class="text-[10px] text-slate-300 uppercase font-semibold">a. Estimasi Baduta</p>
                                <p id="val-baduta" class="text-base font-black text-white">0 <span class="text-xs font-normal text-slate-300">Jiwa</span></p>
                            </div>
                        </div>
                        <div class="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                            <div class="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center text-lg font-bold">🧒</div>
                            <div>
                                <p class="text-[10px] text-slate-300 uppercase font-semibold">b. Estimasi Balita</p>
                                <p id="val-balita" class="text-base font-black text-white">0 <span class="text-xs font-normal text-slate-300">Jiwa</span></p>
                            </div>
                        </div>
                        <div class="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                            <div class="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-lg font-bold">💑</div>
                            <div>
                                <p class="text-[10px] text-slate-300 uppercase font-semibold">c. Estimasi PUS</p>
                                <p id="val-pus" class="text-base font-black text-white">0 <span class="text-xs font-normal text-slate-300">Pasang</span></p>
                            </div>
                        </div>
                        <div class="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                            <div class="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center text-lg font-bold">🎓</div>
                            <div>
                                <p class="text-[10px] text-slate-300 uppercase font-semibold">d. Estimasi Remaja</p>
                                <p id="val-remaja" class="text-base font-black text-white">0 <span class="text-xs font-normal text-slate-300">Jiwa</span></p>
                            </div>
                        </div>
                        <div class="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                            <div class="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center text-lg font-bold">🤰</div>
                            <div>
                                <p class="text-[10px] text-slate-300 uppercase font-semibold">e. Estimasi Bumil</p>
                                <p id="val-bumil" class="text-base font-black text-white">0 <span class="text-xs font-normal text-slate-300">Jiwa</span></p>
                            </div>
                        </div>
                        <div class="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center gap-3">
                            <div class="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center text-lg font-bold">🧓</div>
                            <div>
                                <p class="text-[10px] text-slate-300 uppercase font-semibold">f. Estimasi Lansia</p>
                                <p id="val-lansia" class="text-base font-black text-white">0 <span class="text-xs font-normal text-slate-300">Jiwa</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="pt-2 flex justify-end">
                        <button type="button" onclick="cetakPDFEstimasiSasaran()" class="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all backdrop-blur-sm cursor-pointer flex items-center gap-2">
                            <span>🖨️ Cetak / Simpan PDF Hasil</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ==========================================================================
// 9. MODUL 2: ESTIMASI SASARAN (LENGKAP DENGAN TOMBOL DOWNLOAD PDF)
// ==========================================================================
function hitungEstimasiSasaran() {
    const wilayah = document.getElementById('est-wilayah')?.value.trim() || 'Wilayah Binaan';
    const jmlPddkInput = document.getElementById('est-penduduk')?.value;
    const jmlPddk = parseFloat(jmlPddkInput) || 0;

    const baduta = Math.round(jmlPddk * 0.03);
    const balita = Math.round(jmlPddk * 0.10);
    const pus = Math.round(jmlPddk * 0.22);
    const remaja = Math.round(jmlPddk * 0.20);
    const bumil = Math.round(jmlPddk * 0.04);
    const lansia = Math.round(jmlPddk * 0.08);

    document.getElementById('result-wilayah-title').innerText = wilayah;
    document.getElementById('result-total-pddk').innerText = jmlPddk.toLocaleString('id-ID') + ' Jiwa';

    document.getElementById('val-baduta').innerHTML = baduta.toLocaleString('id-ID') + ' <span class="text-xs font-normal text-slate-300">Jiwa</span>';
    document.getElementById('val-balita').innerHTML = balita.toLocaleString('id-ID') + ' <span class="text-xs font-normal text-slate-300">Jiwa</span>';
    document.getElementById('val-pus').innerHTML = pus.toLocaleString('id-ID') + ' <span class="text-xs font-normal text-slate-300">Pasang</span>';
    document.getElementById('val-remaja').innerHTML = remaja.toLocaleString('id-ID') + ' <span class="text-xs font-normal text-slate-300">Jiwa</span>';
    document.getElementById('val-bumil').innerHTML = bumil.toLocaleString('id-ID') + ' <span class="text-xs font-normal text-slate-300">Jiwa</span>';
    document.getElementById('val-lansia').innerHTML = lansia.toLocaleString('id-ID') + ' <span class="text-xs font-normal text-slate-300">Jiwa</span>';
}

function cetakPDFEstimasiSasaran() {
    const wilayah = document.getElementById('result-wilayah-title')?.innerText || 'Wilayah Binaan';
    const totalPddk = document.getElementById('result-total-pddk')?.innerText || '0 Jiwa';
    const baduta = document.getElementById('val-baduta')?.innerText || '0 Jiwa';
    const balita = document.getElementById('val-balita')?.innerText || '0 Jiwa';
    const pus = document.getElementById('val-pus')?.innerText || '0 Pasang';
    const remaja = document.getElementById('val-remaja')?.innerText || '0 Jiwa';
    const bumil = document.getElementById('val-bumil')?.innerText || '0 Jiwa';
    const lansia = document.getElementById('val-lansia')?.innerText || '0 Jiwa';

    const printHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Estimasi Sasaran - ${wilayah}</title>
            <style>
                body { font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.5; color: #000; padding: 25px; }
                .kop { border-bottom: double 3px black; padding-bottom: 10px; margin-bottom: 20px; width: 100%; }
                .judul { text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 20px; text-transform: uppercase; }
                table.hasil { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 20px; }
                table.hasil th, table.hasil td { border: 1px solid black; padding: 8px; font-size: 11pt; text-align: left; }
                table.hasil th { background-color: #f2f2f2; text-align: center; }
            </style>
        </head>
        <body>
            <table class="kop" style="border-collapse: collapse; width: 100%;">
                <tr>
                    <td style="width: 60px; border: none; vertical-align: middle;"><img src="logo.png" alt="Logo" style="width: 50px; height: 50px; object-fit: contain;" onerror="this.style.display='none'"></td>
                    <td style="width: 130px; border: none; font-weight: bold; vertical-align: middle; font-size: 10pt; line-height: 1.2;">Kemendukbangga/<br>BKKBN</td>
                    <td style="border: none; text-align: right; vertical-align: middle; font-size: 10pt; line-height: 1.3;">
                        <b>Kementerian Kependudukan dan Pembangunan Keluarga/BKKBN</b><br>
                        Perwakilan BKKBN Provinsi Maluku Utara<br>
                        Jl. Raya Sofifi Km. 40, Kota Tidore Kepulauan | malut.bkkbn.go.id
                    </td>
                </tr>
            </table>
            <div class="judul">ESTIMASI SASARAN PROGRAM BANGGAKENCANA<br>WILAYAH : ${wilayah}</div>
            <p><b>Total Penduduk Wilayah:</b> ${totalPddk}</p>
            <table class="hasil">
                <thead>
                    <tr>
                        <th style="width: 50px;">No</th>
                        <th>Sasaran Program</th>
                        <th>Jumlah Estimasi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align: center;">1</td><td>Estimasi Baduta</td><td>${baduta}</td></tr>
                    <tr><td style="text-align: center;">2</td><td>Estimasi Balita</td><td>${balita}</td></tr>
                    <tr><td style="text-align: center;">3</td><td>Estimasi Pasangan Usia Subur (PUS)</td><td>${pus}</td></tr>
                    <tr><td style="text-align: center;">4</td><td>Estimasi Remaja</td><td>${remaja}</td></tr>
                    <tr><td style="text-align: center;">5</td><td>Estimasi Ibu Hamil (Bumil)</td><td>${bumil}</td></tr>
                    <tr><td style="text-align: center;">6</td><td>Estimasi Lansia</td><td>${lansia}</td></tr>
                </tbody>
            </table>
        </body>
        </html>
    `;
    bukaJendelaCetak(printHTML);
}

// ==========================================================================
// 10. MODUL 3: ESTIMASI KENAIKAN PANGKAT (LENGKAP)
// ==========================================================================
function bukaEstimasiPangkat() {
    const catView = document.getElementById('form-categories-view');
    const detailContainer = document.getElementById('form-detail-container');
    
    if (catView) catView.style.display = 'none';
    if (detailContainer) {
        detailContainer.style.display = 'block';
        detailContainer.innerHTML = `
            <div class="flex justify-between items-center border-b border-slate-200 pb-4 mb-6">
                <button type="button" onclick="closeFormDetailView()" class="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all cursor-pointer">
                    ← Kembali ke Kartu Submenu
                </button>
                <span class="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">Kalkulator Estimasi Kenaikan Pangkat Sederhana</span>
            </div>

            <div class="mb-6">
                <h3 class="text-base font-black text-slate-900 uppercase">Kapan Anda Bisa Naik Pangkat Berikutnya?</h3>
                <p class="text-xs text-slate-500 mt-1">Cukup isi data di bawah, sistem akan otomatis menghitung perkiraan waktu tercapainya target angka kredit Anda.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div class="lg:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
                    <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wide">Formulir Data Pegawai</h4>
                    <div class="space-y-1">
                        <label class="block text-xs font-bold text-slate-700">Nama Lengkap & Gelar</label>
                        <input type="text" id="pangkat-nama" placeholder="Contoh: Samsul Ifat, SKM" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-500 font-medium">
                    </div>
                    <div class="space-y-1">
                        <label class="block text-xs font-bold text-slate-700">NIP</label>
                        <input type="text" id="pangkat-nip" placeholder="Masukkan 18 Digit NIP..." class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-500 font-medium">
                    </div>
                    <div class="space-y-1">
                        <label class="block text-xs font-bold text-slate-700">Jenjang Jabatan Saat Ini</label>
                        <select id="pangkat-jenjang" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-500 font-medium">
                            <optgroup label="Kategori Keterampilan">
                                <option value="pemula">Penyuluh KB Pemula (Target AK: 15)</option>
                                <option value="terampil">Penyuluh KB Terampil (Target AK: 20)</option>
                                <option value="mahir">Penyuluh KB Mahir (Target AK: 50)</option>
                                <option value="penyelia">Penyelia (Target AK: 100)</option>
                            </optgroup>
                            <optgroup label="Kategori Keahlian">
                                <option value="pertama">Ahli Pertama (Target AK: 50)</option>
                                <option value="muda">Ahli Muda (Target AK: 100)</option>
                                <option value="madya" selected>Ahli Madya (Target AK: 150)</option>
                                <option value="utama">Ahli Utama (Target AK: 200)</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="space-y-1">
                        <label class="block text-xs font-bold text-slate-700">Total Angka Kredit (AK) Saat Ini</label>
                        <input type="number" id="pangkat-ak" placeholder="Contoh: 120" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-500 font-bold text-sky-700">
                    </div>
                    <div class="space-y-1">
                        <label class="block text-xs font-bold text-slate-700">Tanggal TMT Pangkat Terakhir</label>
                        <input type="date" id="pangkat-tgl" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-500 font-medium">
                    </div>
                    <div class="space-y-1">
                        <label class="block text-xs font-bold text-slate-700">Predikat Kinerja Tahunan</label>
                        <select id="pangkat-predikat" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-500 font-medium">
                            <option value="sangat-baik">Sangat Baik (Cepat)</option>
                            <option value="baik" selected>Baik (Normal / Standar)</option>
                            <option value="cukup">Cukup (Lambat)</option>
                        </select>
                    </div>
                    <div class="pt-2">
                        <button type="button" onclick="hitungEstimasiPangkat()" class="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer">
                            🚀 Hitung Kapan Naik Pangkat
                        </button>
                    </div>
                </div>

                <div class="lg:col-span-7 bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900 p-6 rounded-2xl text-white shadow-xl space-y-6 relative overflow-hidden">
                    <div class="flex justify-between items-center border-b border-slate-800 pb-4">
                        <div>
                            <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-sky-500/25 text-sky-300 border border-sky-400/30 uppercase tracking-widest">Hasil Analisis Otomatis</span>
                            <h4 id="res-pangkat-nama" class="text-base font-extrabold mt-2 text-white">Belum Ada Data Dihitung</h4>
                        </div>
                        <div class="text-right">
                            <p class="text-[10px] text-slate-400 uppercase">Kekurangan AK</p>
                            <p id="res-pangkat-kurang" class="text-lg font-black text-sky-400">0 Poin</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div class="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 space-y-1">
                            <p class="text-[10px] text-slate-300 uppercase font-semibold">Perolehan AK per Tahun</p>
                            <p id="res-pangkat-per-tahun" class="text-lg font-black text-white">0 <span class="text-xs font-normal text-slate-300">AK/Tahun</span></p>
                        </div>
                        <div class="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 space-y-1">
                            <p class="text-[10px] text-slate-300 uppercase font-semibold">Estimasi Waktu Dibutuhkan</p>
                            <p id="res-pangkat-durasi" class="text-lg font-black text-sky-300">0 Bulan</p>
                        </div>
                    </div>

                    <div class="bg-sky-500/20 border border-sky-400/30 p-4 rounded-xl space-y-2 text-center">
                        <p class="text-xs text-sky-200 font-semibold uppercase tracking-wider">Perkiraan Tanggal Naik Pangkat Berikutnya</p>
                        <p id="res-pangkat-tanggal" class="text-xl font-black text-white">-- / -- / ----</p>
                    </div>

                    <div class="pt-2 flex justify-end">
                        <button type="button" onclick="cetakPDFPangkat()" class="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all backdrop-blur-sm cursor-pointer flex items-center gap-2">
                            <span>🖨️ Cetak / Simpan PDF Hasil</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function hitungEstimasiPangkat() {
    const nama = document.getElementById('pangkat-nama')?.value.trim() || 'Pegawai Fungsional';
    const jenjang = document.getElementById('pangkat-jenjang')?.value;
    const akTerakhir = parseFloat(document.getElementById('pangkat-ak')?.value) || 0;
    const tmtStr = document.getElementById('pangkat-tgl')?.value;
    const predikat = document.getElementById('pangkat-predikat')?.value;

    if (!tmtStr) {
        alert("Silakan masukkan tanggal TMT Pangkat Terakhir terlebih dahulu.");
        return;
    }

    let koefisienDasar = 37.5;
    let targetAk = 150;

    switch(jenjang) {
        case 'pemula': koefisienDasar = 3.75; targetAk = 15; break;
        case 'terampil': koefisienDasar = 5.0; targetAk = 20; break;
        case 'mahir': koefisienDasar = 12.5; targetAk = 50; break;
        case 'penyelia': koefisienDasar = 25.0; targetAk = 100; break;
        case 'pertama': koefisienDasar = 12.5; targetAk = 50; break;
        case 'muda': koefisienDasar = 25.0; targetAk = 100; break;
        case 'madya': koefisienDasar = 37.5; targetAk = 150; break;
        case 'utama': koefisienDasar = 50.0; targetAk = 200; break;
    }

    let pengali = 1.0;
    if (predikat === 'sangat-baik') pengali = 1.5;
    if (predikat === 'cukup') pengali = 0.75;

    const akPerTahun = koefisienDasar * pengali;
    const kekuranganAk = targetAk - akTerakhir;

    let totalBulanDibutuhkan = 0;
    if (kekuranganAk > 0 && akPerTahun > 0) {
        const tahunDibutuhkan = kekuranganAk / akPerTahun;
        totalBulanDibutuhkan = Math.ceil(tahunDibutuhkan * 12);
    }

    const tmtDate = new Date(tmtStr);
    tmtDate.setMonth(tmtDate.getMonth() + totalBulanDibutuhkan);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const tanggalFormatted = tmtDate.toLocaleDateString('id-ID', options);

    document.getElementById('res-pangkat-nama').innerText = nama;
    document.getElementById('res-pangkat-kurang').innerText = (kekuranganAk > 0 ? kekuranganAk : 0) + ' Poin';
    document.getElementById('res-pangkat-per-tahun').innerHTML = akPerTahun.toFixed(2) + ' <span class="text-xs font-normal text-slate-300">AK/Tahun</span>';
    document.getElementById('res-pangkat-durasi').innerText = totalBulanDibutuhkan + ' Bulan (' + (totalBulanDibutuhkan / 12).toFixed(1) + ' Tahun)';
    document.getElementById('res-pangkat-tanggal').innerText = kekuranganAk <= 0 ? "Target AK Sudah Terpenuhi / Terlampaui!" : tanggalFormatted;
}

function cetakPDFPangkat() {
    const nama = document.getElementById('pangkat-nama')?.value.trim() || 'Pegawai Fungsional';
    const nip = document.getElementById('pangkat-nip')?.value.trim() || '-';
    const kurangAk = document.getElementById('res-pangkat-kurang')?.innerText || '0 Poin';
    const perTahun = document.getElementById('res-pangkat-per-tahun')?.innerText || '0';
    const durasi = document.getElementById('res-pangkat-durasi')?.innerText || '0 Bulan';
    const tglTarget = document.getElementById('res-pangkat-tanggal')?.innerText || '-';

    const printHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Hasil Estimasi Kenaikan Pangkat - ${nama}</title>
            <style>
                body { font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.5; color: #000; padding: 25px; }
                .kop { border-bottom: double 3px black; padding-bottom: 10px; margin-bottom: 20px; width: 100%; }
                .judul { text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 20px; text-transform: uppercase; }
                table.identitas { width: 100%; margin-bottom: 15px; border: none; }
                table.identitas td { padding: 3px 0; border: none; vertical-align: top; }
                table.hasil { width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 20px; }
                table.hasil th, table.hasil td { border: 1px solid black; padding: 8px; font-size: 11pt; text-align: left; }
                table.hasil th { background-color: #f2f2f2; text-align: center; }
                .catatan-box { border: 1px solid #333; background-color: #f9f9f9; padding: 12px; margin-top: 15px; border-radius: 4px; font-size: 10pt; text-align: justify; line-height: 1.4; }
            </style>
        </head>
        <body>
            <table class="kop" style="border-collapse: collapse; width: 100%;">
                <tr>
                    <td style="width: 60px; border: none; vertical-align: middle;"><img src="logo.png" alt="Logo" style="width: 50px; height: 50px; object-fit: contain;"></td>
                    <td style="width: 120px; border: none; font-weight: bold; vertical-align: middle; font-size: 10pt; line-height: 1.2;">Kemendukbangga/<br>BKKBN</td>
                    <td style="border: none; text-align: right; vertical-align: middle; font-size: 10pt; line-height: 1.3;">
                        <b>Kementerian Kependudukan dan Pembangunan Keluarga/BKKBN</b><br>
                        Perwakilan BKKBN Provinsi Maluku Utara<br>
                        Jl. Raya Sofifi Km. 40, Kota Tidore Kepulauan | malut.bkkbn.go.id
                    </td>
                </tr>
            </table>
            <div class="judul">HASIL ANALISIS ESTIMASI KENAIKAN PANGKAT FUNGSIONAL</div>
            <table class="identitas">
                <tr><td style="width: 150px; font-weight: bold;">NAMA PEGAWAI</td><td style="width: 15px;">:</td><td><b>${nama}</b></td></tr>
                <tr><td style="font-weight: bold;">NIP</td><td>:</td><td>${nip}</td></tr>
            </table>
            <table class="hasil">
                <thead><tr><th>Parameter Analisis</th><th>Hasil Perhitungan</th></tr></thead>
                <tbody>
                    <tr><td><b>Kekurangan Angka Kredit (AK)</b></td><td>${kurangAk}</td></tr>
                    <tr><td><b>Perolehan Angka Kredit per Tahun</b></td><td>${perTahun}</td></tr>
                    <tr><td><b>Estimasi Waktu yang Dibutuhkan</b></td><td>${durasi}</td></tr>
                    <tr><td><b>Perkiraan Tanggal Kenaikan Pangkat Berikutnya</b></td><td><b>${tglTarget}</b></td></tr>
                </tbody>
            </table>
            <div class="catatan-box">
                <p><b>Catatan Pengingat di Lapangan:</b></p>
                <p>Hasil ini bersifat estimasi normal berdasarkan asumsi perolehan SKP tahunan yang konsisten. Pelaksanaan kenaikan pangkat riil tetap harus memperhatikan kelengkapan berkas administratif.</p>
            </div>
        </body>
        </html>
    `;
    bukaJendelaCetak(printHTML);
}

// --- 11. MODUL 4: USULAN KENAIKAN PANGKAT (3 BERKAS BKN LENGKAP) ---
function bukaFormUsulanPangkat() {
    document.getElementById('form-categories-view').style.display = 'none';
    const detailContainer = document.getElementById('form-detail-container');
    detailContainer.style.display = 'block';
    detailContainer.innerHTML = `
        <div class="flex justify-between items-center border-b border-slate-200 pb-4 mb-6">
            <button type="button" onclick="closeFormDetailView()" class="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all cursor-pointer">← Kembali</button>
            <span class="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">Modul 3 Berkas Usulan Kenaikan Pangkat BKN</span>
        </div>
        <div class="mb-6">
            <h3 class="text-base font-black text-slate-900 uppercase">Generator 3 Berkas PAK & Kenaikan Pangkat</h3>
            <p class="text-xs text-slate-500 mt-1">Masukkan data pegawai dan angka kredit satu kali, lalu cetak Konversi Kinerja, Akumulasi AK, dan PAK secara otomatis.</p>
        </div>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-6 mb-8 shadow-sm">
            <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wide border-b border-slate-200 pb-2">📋 Data Identitas & Penilaian Pegawai</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700">Nama Lengkap & Gelar</label>
                    <input type="text" id="up-nama" placeholder="Abang Utam" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium">
                </div>
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700">NIP</label>
                    <input type="text" id="up-nip" placeholder="123456789101112131415" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium">
                </div>
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700">Nomor Seri KARPEG</label>
                    <input type="text" id="up-karpeg" placeholder="X.123456" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium">
                </div>
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700">Tempat, Tanggal Lahir</label>
                    <input type="text" id="up-ttl" placeholder="Xxxxxxx, 00 xxxxxxxx 0000" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium">
                </div>
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700">Jenis Kelamin</label>
                    <input type="text" id="up-jk" placeholder="Laki-laki / Perempuan" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium">
                </div>
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700">Pangkat / Golongan Ruang / TMT</label>
                    <input type="text" id="up-pangkat" placeholder="xxxxxxxxxx/ XX/X  /XX - XX - XXXX" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium">
                </div>
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700">Jabatan / TMT</label>
                    <input type="text" id="up-jabatan" placeholder="Penyelia / PKB / XX - XX - XXXX" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium">
                </div>
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700">Unit Kerja</label>
                    <input type="text" id="up-unitkerja" value="Perwakilan Kemendukbangga / BKKBN Provinsi Maluku Utara" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium">
                </div>
            </div>
            <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wide border-b border-slate-200 pb-2 pt-2">📊 Data Angka Kredit & Periode Penilaian</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="space-y-1"><label class="block text-xs font-bold text-slate-700">Tahun Penilaian Berjalan</label><input type="text" id="up-tahun" value="2025" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium"></div>
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700">Predikat Kinerja Berjalan</label>
                    <select id="up-predikat" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium">
                        <option value="Sangat Baik" selected>Sangat Baik (150% - 56,250 AK)</option>
                        <option value="Baik">Baik (100% - 37,500 AK)</option>
                        <option value="Cukup">Cukup (75% - 28,125 AK)</option>
                    </select>
                </div>
               <div class="space-y-1"><label class="block text-xs font-bold text-slate-700">AK Lama / s.d. Tahun Sebelumnya</label><input type="number" step="0.001" id="up-ak-lama" placeholder="Contoh: 118.480" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-sky-700"></div>
            </div>
            <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wide border-b border-slate-200 pb-2 pt-2">✍️ Data Penetapan & Pejabat Penandatangan</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="space-y-1"><label class="block text-xs font-bold text-slate-700">Nomor SK / Dokumen</label><input type="text" id="up-no-sk" placeholder="Masukkan nomor SK..." class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium"></div>
                <div class="space-y-1"><label class="block text-xs font-bold text-slate-700">Tempat Penetapan</label><input type="text" id="up-tempat" placeholder="Contoh: Sofifi" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium"></div>
                <div class="space-y-1"><label class="block text-xs font-bold text-slate-700">Tanggal Penetapan</label><input type="text" id="up-tgl-penetapan" placeholder="Contoh: 02 Januari 2026" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium"></div>
            </div>
        </div>
        <div class="bg-gradient-to-br from-slate-900 to-sky-950 p-6 rounded-2xl text-white shadow-xl space-y-4 text-center">
            <h4 class="text-sm font-black uppercase tracking-wider text-sky-300">Pilih Dokumen Resmi untuk Dicetak / Diunduh PDF</h4>
            <div class="flex flex-wrap justify-center gap-4 pt-3">
                <button type="button" onclick="cetakDokumen1()" class="px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer">📄 1. Cetak Konversi Kinerja</button>
                <button type="button" onclick="cetakDokumen2()" class="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer">📊 2. Cetak Akumulasi AK</button>
                <button type="button" onclick="cetakDokumen3()" class="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer">📑 3. Cetak PAK</button>
            </div>
        </div>
    `;
}

function cetakDokumen1() {
    const nama = document.getElementById('up-nama')?.value || 'Abang Utam';
    const nip = document.getElementById('up-nip')?.value || '123456789101112131415';
    const karpeg = document.getElementById('up-karpeg')?.value || 'X.123456';
    const ttl = document.getElementById('up-ttl')?.value || 'Xxxxxxx, 00 xxxxxxxx 0000';
    const jk = document.getElementById('up-jk')?.value || 'Laki-laki';
    const pangkat = document.getElementById('up-pangkat')?.value || 'xxxxxxxxxx/ XX/X  /XX - XX - XXXX';
    const jabatan = document.getElementById('up-jabatan')?.value || 'Penyelia / PKB / XX - XX - XXXX';
    const unitKerja = document.getElementById('up-unitkerja')?.value || 'Perwakilan Kemendukbangga / BKKBN Provinsi Maluku Utara';
    const tahun = document.getElementById('up-tahun')?.value || '2025';
    const predikat = document.getElementById('up-predikat')?.value || 'Sangat Baik';
    const noSk = document.getElementById('up-no-sk')?.value || '4/KP.09/J28/2026';
    const tempat = document.getElementById('up-tempat')?.value || 'Sofifi';
    const tglPenetapan = document.getElementById('up-tgl-penetapan')?.value || '02 Januari 2026';

    let prosentase = "150,00%", akDidapat = "56,250";
    if (predikat === "Baik") { prosentase = "100,00%"; akDidapat = "37,500"; }
    else if (predikat === "Cukup") { prosentase = "75,00%"; akDidapat = "28,125"; }

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Konversi Predikat Kinerja - ${nama}</title>
            <style>
                body { font-family: "Times New Roman", Times, serif; font-size: 10pt; line-height: 1.2; color: #000; padding: 15px; }
                .kop-table { width: 100%; border-bottom: double 3px black; padding-bottom: 4px; margin-bottom: 8px; }
                .kop-table td { vertical-align: middle; border: none; }
                .judul-dokumen { text-align: center; font-weight: bold; font-size: 11pt; margin-bottom: 2px; text-transform: uppercase; }
                .no-dokumen { text-align: center; font-weight: bold; font-size: 10pt; margin-bottom: 10px; text-transform: uppercase; }
                .info-luar { width: 100%; font-size: 8.5pt; font-weight: bold; margin-bottom: 4px; white-space: nowrap; }
                table.tabel-fungsional { width: 100%; border-collapse: collapse; border: 2px solid black; margin-bottom: 12px; table-layout: fixed; }
                table.tabel-fungsional td { border: 1px solid black; padding: 2.5px 5px; font-size: 9.5pt; vertical-align: middle; }
                table.tabel-konversi { width: 100%; border-collapse: collapse; border: 2px solid black; margin-bottom: 15px; table-layout: fixed; }
                table.tabel-konversi th, table.tabel-konversi td { border: 1px solid black; padding: 0px; font-size: 9.5pt; vertical-align: middle; }
                .section-header { text-align: center; font-weight: bold; background-color: #fff; padding: 3px; font-size: 9.5pt; border-top: 1px solid black; border-bottom: 1px solid black; text-transform: uppercase; }
                .text-center { text-align: center; }
                .font-bold { font-weight: bold; }
                .bg-gray { background-color: #f2f2f2; }
                .ttd-table { width: 100%; border: none; margin-top: 15px; }
                .ttd-table td { border: none; vertical-align: top; font-size: 10pt; }
                .tembusan { margin-top: 10px; font-size: 9pt; }
                .tembusan ol { margin: 2px 0 0 15px; padding: 0; }
            </style>
        </head>
        <body>
            <table class="kop-table">
                <tr>
                    <td style="width: 40px;"><img src="logo.png" alt="Logo" style="width: 35px; height: 35px; object-fit: contain;" onerror="this.style.display='none'"></td>
                    <td style="width: 110px; font-weight: bold; font-size: 8pt; line-height: 1.1;">Kemendukbangga/<br>BKKBN</td>
                    <td style="text-align: right; font-size: 8.5pt; line-height: 1.2;">
                        <b>Kementerian Kependudukan dan Pembangunan Keluarga / BKKBN</b><br>
                        Perwakilan BKKBN Provinsi Maluku Utara<br>
                        <span style="font-size: 7.5pt;">📍 Jl. Raya Sofifi Km.40, Kota Tidore Kepulauan, 🌐 https://malut.kemendukbangga.go.id/</span>
                    </td>
                </tr>
            </table>
            <div class="judul-dokumen">KONVERSI PREDIKAT KINERJA KE ANGKA KREDIT</div>
            <div class="no-dokumen">NOMOR: ${noSk}</div>
            <table class="info-luar">
                <tr>
                    <td style="width: 53%;"><b>INSTANSI :</b> Kementerian Kependudukan dan Pembangunan Keluarga / BKKBN</td>
                    <td style="width: 47%; text-align: right;"><b>PERIODE :</b> 01 Januari s.d. 31 Desember &nbsp;&nbsp; <b>TAHUN :</b> ${tahun}</td>
                </tr>
            </table>
            <table class="tabel-fungsional">
                <colgroup><col style="width: 5%;"><col style="width: 30%;"><col style="width: 4%;"><col style="width: 61%;"></colgroup>
                <tr><td colspan="4" class="section-header">PEJABAT FUNGSIONAL YANG DINILAI</td></tr>
                <tr><td class="text-center font-bold">1</td><td>Nama</td><td class="text-center">:</td><td class="font-bold">${nama}</td></tr>
                <tr><td class="text-center font-bold">2</td><td>NIP</td><td class="text-center">:</td><td>${nip}</td></tr>
                <tr><td class="text-center font-bold">3</td><td>Nomor Seri Karpeg</td><td class="text-center">:</td><td>${karpeg}</td></tr>
                <tr><td class="text-center font-bold">4</td><td>Tempat/Tgl. Lahir</td><td class="text-center">:</td><td>${ttl}</td></tr>
                <tr><td class="text-center font-bold">5</td><td>Jenis Kelamin</td><td class="text-center">:</td><td>${jk}</td></tr>
                <tr><td class="text-center font-bold">6</td><td>Pangkat/Golongan Ruang/TMT</td><td class="text-center">:</td><td>${pangkat}</td></tr>
                <tr><td class="text-center font-bold">7</td><td>Jabatan/TMT</td><td class="text-center">:</td><td>${jabatan}</td></tr>
                <tr><td class="text-center font-bold">8</td><td>Unit Kerja</td><td class="text-center">:</td><td>${unitKerja}</td></tr>
                <tr><td class="text-center font-bold">9</td><td>Instansi</td><td class="text-center">:</td><td>Kementerian Kependudukan dan Pembangunan Keluarga / BKKBN</td></tr>
            </table>
            <table class="tabel-konversi">
                <colgroup><col style="width: 25%;"><col style="width: 25%;"><col style="width: 25%;"><col style="width: 25%;"></colgroup>
                <tr><td colspan="4" class="section-header" style="border-left:none; border-right:none;">KONVERSI PREDIKAT KINERJA KE ANGKA KREDIT</td></tr>
                <tr>
                    <td colspan="2" class="text-center font-bold bg-gray" style="padding: 6px; border-right: 1px solid black; border-bottom: none;">Hasil Penilaian Kerja</td>
                    <td class="text-center font-bold bg-gray" style="padding: 6px; border-right: 1px solid black; vertical-align: middle;" rowspan="2">Koefisien</td>
                    <td class="text-center font-bold bg-gray" style="padding: 6px; vertical-align: middle;" rowspan="2">Angka Kredit yang didapat</td>
                </tr>
                <tr>
                    <td class="text-center font-bold bg-gray" style="padding: 5px; border-right: 1px solid black; border-top: 1px solid black;">PREDIKAT</td>
                    <td class="text-center font-bold bg-gray" style="padding: 5px; border-right: 1px solid black; border-top: 1px solid black;">PRESENTASE</td>
                </tr>
                <tr>
                    <td class="text-center font-bold bg-gray" style="padding: 4px; border-right: 1px solid black; border-top: 1px solid black;">1</td>
                    <td class="text-center font-bold bg-gray" style="padding: 4px; border-right: 1px solid black; border-top: 1px solid black;">2</td>
                    <td class="text-center font-bold bg-gray" style="padding: 4px; border-right: 1px solid black; border-top: 1px solid black;">3</td>
                    <td class="text-center font-bold bg-gray" style="padding: 4px; border-top: 1px solid black;">4</td>
                </tr>
                <tr>
                    <td class="text-center font-bold" style="padding: 16px 8px; border-right: 1px solid black; border-top: 1px solid black; vertical-align: middle;">${predikat}</td>
                    <td class="text-center font-bold" style="padding: 16px 8px; border-right: 1px solid black; border-top: 1px solid black; vertical-align: middle;">${prosentase}</td>
                    <td class="text-center font-bold" style="padding: 16px 8px; border-right: 1px solid black; border-top: 1px solid black; vertical-align: middle;">37,500</td>
                    <td class="text-center font-bold" style="padding: 16px 8px; border-top: 1px solid black; vertical-align: middle;">${akDidapat}</td>
                </tr>
            </table>
            <table class="ttd-table">
                <tr>
                    <td style="width: 50%;"></td>
                    <td style="width: 50%; text-align: right;">
                        <p style="margin:0;">Ditetapkan di : ${tempat}</p>
                        <p style="margin:0;">Pada tanggal : ${tglPenetapan}</p>
                        <br><p style="margin:0; font-weight: bold;">Plt. Kepala Perwakilan BKKBN Provinsi Maluku Utara,</p>
                        <br><br><br>
                        <p style="margin:0; font-weight: bold; text-decoration: underline;">Anshar Djainahu, S.Sos</p>
                        <p style="margin:0;">NIP. 198012182007011001</p>
                    </td>
                </tr>
            </table>
            <div class="tembusan">
                <p style="margin:0; font-weight: bold;">Tembusan disampaikan kepada:</p>
                <ol>
                    <li>Sdr. (${nama});</li>
                    <li>Sekretaris Kementerian Kependudukan dan Pembangunan Keluarga / BKKBN;</li>
                    <li>Kepala Biro Sumber Daya Manusia Kementerian Kependudukan dan Pembangunan Keluarga / BKKBN; dan</li>
                    <li>Kepala Pusat Pembinaan Jabatan Fungsional.</li>
                </ol>
            </div>
        </body>
        </html>
    `;
    bukaJendelaCetak(html);
}

function cetakDokumen2() {
    const nama = document.getElementById('up-nama')?.value || '';
    const nip = document.getElementById('up-nip')?.value || '';
    const karpeg = document.getElementById('up-karpeg')?.value || '';
    const ttl = document.getElementById('up-ttl')?.value || '';
    const pangkat = document.getElementById('up-pangkat')?.value || '';
    const jabatan = document.getElementById('up-jabatan')?.value || '';
    const tahun = document.getElementById('up-tahun')?.value || '2025';
    const predikat = document.getElementById('up-predikat')?.value || 'Sangat Baik';
    const akLama = parseFloat(document.getElementById('up-ak-lama')?.value) || 118.480;
    const noSk = document.getElementById('up-no-sk')?.value || '';
    const tempat = document.getElementById('up-tempat')?.value || 'Sofifi';
    const tglPenetapan = document.getElementById('up-tgl-penetapan')?.value || '';

    let akJalan = 56.250, pers = "150,00%";
    if (predikat === "Baik") { akJalan = 37.500; pers = "100,00%"; }
    else if (predikat === "Cukup") { akJalan = 28.125; pers = "75,00%"; }
    const total = (akLama + akJalan).toFixed(3);

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Akumulasi Angka Kredit - ${nama}</title>
            <style>
                body { font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; padding: 25px; }
                .kop-table { width: 100%; border-bottom: double 3px black; padding-bottom: 8px; margin-bottom: 20px; }
                .kop-table td { vertical-align: middle; border: none; }
                .judul { text-align: center; font-weight: bold; font-size: 11pt; margin-bottom: 5px; text-transform: uppercase; }
                .sub-judul { text-align: center; font-weight: bold; font-size: 10pt; margin-bottom: 20px; text-transform: uppercase; }
                .section-title { font-weight: bold; background-color: #f2f2f2; padding: 5px 8px; font-size: 10pt; border: 1px solid black; margin-top: 15px; }
                table.info { width: 100%; border-collapse: collapse; border: 1px solid black; border-top: none; margin-bottom: 15px; }
                table.info td { padding: 5px 8px; vertical-align: top; font-size: 10pt; border-bottom: 1px solid #d1d5db; }
                table.info tr:last-child td { border-bottom: none; }
                table.data { width: 100%; border-collapse: collapse; margin-top: 5px; margin-bottom: 25px; }
                table.data th, table.data td { border: 1px solid black; padding: 6px; font-size: 10pt; text-align: center; }
                table.data th { background-color: #f2f2f2; }
                .ttd-table { width: 100%; border: none; margin-top: 20px; }
                .ttd-table td { border: none; vertical-align: top; font-size: 10pt; }
            </style>
        </head>
        <body>
            <table class="kop-table">
                <tr>
                    <td style="width: 55px;"><img src="logo.png" alt="Logo" style="width: 45px; height: 45px; object-fit: contain;" onerror="this.style.display='none'"></td>
                    <td style="width: 130px; font-weight: bold; font-size: 9pt; line-height: 1.2;">Kemendukbangga/<br>BKKBN</td>
                    <td style="text-align: right; font-size: 9pt; line-height: 1.3;">
                        <b>Kementerian Kependudukan dan</b><br>
                        <b>Pembangunan Keluarga / BKKBN</b><br>
                        Perwakilan BKKBN Provinsi Maluku Utara<br>
                        Jl. Raya Sofifi Km. 40, Kota Tidore Kepulauan | malut.bkkbn.go.id
                    </td>
                </tr>
            </table>
            <div class="judul">AKUMULASI ANGKA KREDIT</div>
            <div class="sub-judul">
                NOMOR: ${noSk}<br>
                PERIODE: 01 Januari s.d. 31 Desember ${tahun}
            </div>
            <div class="section-title">I. KETERANGAN PERORANGAN</div>
            <table class="info">
                <tr><td style="width: 30%;">1. Nama</td><td style="width: 2%;">:</td><td style="width: 68%;"><b>${nama}</b></td></tr>
                <tr><td>2. NIP</td><td>:</td><td>${nip}</td></tr>
                <tr><td>3. Nomor Seri Karpeg</td><td>:</td><td>${karpeg}</td></tr>
                <tr><td>4. Tempat/Tgl. Lahir</td><td>:</td><td>${ttl}</td></tr>
                <tr><td>5. Pangkat/Golongan Ruang/TMT</td><td>:</td><td>${pangkat}</td></tr>
                <tr><td>6. Jabatan/TMT</td><td>:</td><td>${jabatan}</td></tr>
            </table>
            <div class="section-title">II. HASIL PENILAIAN ANGKA KREDIT KUMULATIF</div>
            <table class="data">
                <thead>
                    <tr>
                        <th style="width: 40px;">No</th>
                        <th>Tahun / Periode</th>
                        <th>Predikat</th>
                        <th>Prosentase</th>
                        <th>Koefisien per Tahun</th>
                        <th>Angka Kredit Didapat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td style="text-align: left; padding-left: 10px;">s.d. Tahun Sebelumnya</td>
                        <td>-</td><td>-</td><td>-</td>
                        <td><b>${akLama.toFixed(3)}</b></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td style="text-align: left; padding-left: 10px;">${tahun}</td>
                        <td>${predikat}</td>
                        <td>${pers}</td>
                        <td>37,500</td>
                        <td><b>${akJalan.toFixed(3)}</b></td>
                    </tr>
                    <tr style="background-color: #fafafa; font-weight: bold;">
                        <td colspan="5" style="text-align: right; padding-right: 15px;">JUMLAH ANGKA KREDIT YANG DIPEROLEH :</td>
                        <td style="color: #0284c7;">${total}</td>
                    </tr>
                </tbody>
            </table>
            <table class="ttd-table">
                <tr>
                    <td style="width: 50%;"></td>
                    <td style="width: 50%; text-align: right;">
                        <p style="margin:0;">Ditetapkan di : ${tempat}</p>
                        <p style="margin:0;">Pada tanggal : ${tglPenetapan}</p>
                        <br><p style="margin:0; font-weight: bold;">Plt. Kepala Perwakilan BKKBN Provinsi Maluku Utara,</p>
                        <br><br><br>
                        <p style="margin:0; font-weight: bold; text-decoration: underline;">Anshar Djainahu, S.Sos.</p>
                        <p style="margin:0;">NIP. 198012182007011001</p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `;
    bukaJendelaCetak(html);
}

function cetakDokumen3() {
    const nama = document.getElementById('up-nama')?.value || 'Abang Utam';
    const nip = document.getElementById('up-nip')?.value || '123456789101112131415';
    const karpeg = document.getElementById('up-karpeg')?.value || 'X.123456';
    const ttl = document.getElementById('up-ttl')?.value || 'Xxxxxxx, 00 xxxxxxxx 0000';
    const pangkat = document.getElementById('up-pangkat')?.value || 'xxxxxxxxxx/ XX/X  /XX - XX - XXXX';
    const jabatan = document.getElementById('up-jabatan')?.value || 'Penyelia / PKB / XX - XX - XXXX';
    const tahun = document.getElementById('up-tahun')?.value || '2025';
    const predikat = document.getElementById('up-predikat')?.value || 'Sangat Baik';
    const akLama = parseFloat(document.getElementById('up-ak-lama')?.value) || 118.480;
    const noSk = document.getElementById('up-no-sk')?.value || 'x/KP.xx/Jxx/20xx';
    const tempat = document.getElementById('up-tempat')?.value || 'Sofifi';
    const tglPenetapan = document.getElementById('up-tgl-penetapan')?.value || 'xx xxxxxxx xxxx';

    let akBaru = 56.250;
    if (predikat === "Baik") akBaru = 37.500;
    else if (predikat === "Cukup") akBaru = 28.125;
    
    const jumlahAk = akLama + akBaru;
    const akMinimal = 150.00; 
    const selisih = jumlahAk - akMinimal;
    const memenuhiSyarat = jumlahAk >= akMinimal;

    let statusPernyataan = "";
    let kesimpulanSk = "";

    if (memenuhiSyarat) {
        statusPernyataan = 'Kelebihan / <span style="text-decoration: line-through;">Kekurangan</span> Angka Kredit: <b>+' + selisih.toFixed(3) + ' (Memenuhi syarat AK)</b>';
        // PERBAIKAN DI SINI: Diarahkan ke IV/a (Pembina) terlebih dahulu
        kesimpulanSk = 'DAPAT DIPERTIMBANGKAN UNTUK KENAIKAN PANGKAT SETINGKAT LEBIH TINGGI MENJADI PEMBINA / IV/a';
    } else {
        statusPernyataan = '<span style="text-decoration: line-through;">Kelebihan</span> / Kekurangan Angka Kredit: <b>' + selisih.toFixed(3) + ' (Belum memenuhi syarat AK)</b>';
        kesimpulanSk = 'BELUM DAPAT DIPERTIMBANGKAN UNTUK KENAIKAN PANGKAT SETINGKAT LEBIH TINGGI KARENA BELUM MEMENUHI SYARAT ANGKA KREDIT';
    }

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>PAK - ${nama}</title>
            <style>
                body { font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; padding: 25px; }
                .kop-table { width: 100%; border-bottom: double 3px black; padding-bottom: 8px; margin-bottom: 20px; }
                .kop-table td { vertical-align: middle; border: none; }
                .judul { text-align: center; font-weight: bold; font-size: 11pt; margin-bottom: 5px; text-transform: uppercase; }
                .sub-judul { text-align: center; font-weight: bold; font-size: 10pt; margin-bottom: 20px; text-transform: uppercase; }
                .section-title { font-weight: bold; background-color: #f2f2f2; padding: 5px 8px; font-size: 10pt; border: 1px solid black; margin-top: 15px; }
                table.info { width: 100%; border-collapse: collapse; border: 1px solid black; border-top: none; margin-bottom: 15px; }
                table.info td { padding: 5px 8px; vertical-align: top; font-size: 10pt; border-bottom: 1px solid #d1d5db; }
                table.info tr:last-child td { border-bottom: none; }
                table.data { width: 100%; border-collapse: collapse; margin-top: 5px; margin-bottom: 15px; }
                table.data th, table.data td { border: 1px solid black; padding: 2px; font-size: 10pt; }
                table.data th { background-color: #f2f2f2; text-align: center; }
                .info-box { border: 1px solid black; padding: 8px; margin-top: 15px; font-size: 10pt; background-color: #fafafa; }
                .ttd-table { width: 100%; border: none; margin-top: 20px; }
                .ttd-table td { border: none; vertical-align: top; font-size: 10pt; }
            </style>
        </head>
        <body>
            <table class="kop-table">
                <tr>
                    <td style="width: 55px;"><img src="logo.png" alt="Logo" style="width: 45px; height: 45px; object-fit: contain;" onerror="this.style.display='none'"></td>
                    <td style="width: 130px; font-weight: bold; font-size: 9pt; line-height: 1.2;">Kemendukbangga/<br>BKKBN</td>
                    <td style="text-align: right; font-size: 9pt; line-height: 1.3;">
                        <b>Kementerian Kependudukan dan</b><br>
                        <b>Pembangunan Keluarga / BKKBN</b><br>
                        Perwakilan BKKBN Provinsi Maluku Utara<br>
                        Jl. Raya Sofifi Km. 40, Kota Tidore Kepulauan | malut.bkkbn.go.id
                    </td>
                </tr>
            </table>
            <div class="judul">PENETAPAN ANGKA KREDIT (PAK)</div>
            <div class="sub-judul">
                NOMOR: ${noSk}<br>
                PERIODE: s.d. 31 Desember TAHUN ${tahun}
            </div>
            <div class="section-title">I. KETERANGAN PERORANGAN</div>
            <table class="info">
                <tr><td style="width: 30%;">1. Nama</td><td style="width: 2%;">:</td><td style="width: 68%;"><b>${nama}</b></td></tr>
                <tr><td>2. NIP</td><td>:</td><td>${nip}</td></tr>
                <tr><td>3. Nomor Seri Karpeg</td><td>:</td><td>${karpeg}</td></tr>
                <tr><td>4. Tempat/Tgl. Lahir</td><td>:</td><td>${ttl}</td></tr>
                <tr><td>5. Pangkat/Golongan Ruang/TMT</td><td>:</td><td>${pangkat}</td></tr>
                <tr><td>6. Jabatan/TMT</td><td>:</td><td>${jabatan}</td></tr>
            </table>
            <div class="section-title">II. PENETAPAN ANGKA KREDIT</div>
            <table class="data">
                <thead>
                    <tr>
                        <th style="width: 40px;">No</th>
                        <th>Unsur Penilaian Angka Kredit</th>
                        <th style="width: 90px; text-align: center;">Lama</th>
                        <th style="width: 90px; text-align: center;">Baru</th>
                        <th style="width: 90px; text-align: center;">Jumlah</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="text-align:center;">1</td><td>AK Dasar yang diberikan</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr>
                    <tr><td style="text-align:center;">2</td><td>AK JF lama</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr>
                    <tr><td style="text-align:center;">3</td><td>AK Penyesuaian / Penyetaraan</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr>
                    <tr><td style="text-align:center;">4</td><td>AK Konversi</td><td style="text-align:center;">${akLama.toFixed(3)}</td><td style="text-align:center;">${akBaru.toFixed(3)}</td><td style="text-align:center;">${jumlahAk.toFixed(3)}</td></tr>
                    <tr style="font-weight: bold; background-color: #fafafa;">
                        <td colspan="2" style="text-align: right; padding-right: 15px;">JUMLAH ANGKA KREDIT KUMULATIF :</td>
                        <td style="text-align:center;">${akLama.toFixed(3)}</td>
                        <td style="text-align:center;">${akBaru.toFixed(3)}</td>
                        <td style="text-align:center; color: #0284c7;">${jumlahAk.toFixed(3)}</td>
                    </tr>
                </tbody>
            </table>
            <div class="info-box">
                <p style="margin:0 0 5px 0;"><b>III. PERTIMBANGAN KENAIKAN PANGKAT / JENJANG:</b></p>
                <p style="margin:0 0 3px 0;">- Angka Kredit Minimal yang harus dipenuhi untuk kenaikan pangkat: <b>${akMinimal.toFixed(2)}</b></p>
                <p style="margin:0 0 5px 0;">- ${statusPernyataan}</p>
                <p style="margin:5px 0 0 0; font-weight: bold; text-transform: uppercase; color: ${memenuhiSyarat ? '#0369a1' : '#b91c1c'};">
                    ${kesimpulanSk}
                </p>
            </div>
            <table class="ttd-table">
                <tr>
                    <td style="width: 50%;"></td>
                    <td style="width: 50%; text-align: right;">
                        <p style="margin:0;">Ditetapkan di : ${tempat}</p>
                        <p style="margin:0;">Pada tanggal : ${tglPenetapan}</p>
                        <br><p style="margin:0; font-weight: bold;">Plt. Kepala Perwakilan BKKBN Provinsi Maluku Utara,</p>
                        <br><br><br>
                        <p style="margin:0; font-weight: bold; text-decoration: underline;">Anshar Djainahu, S.Sos.</p>
                        <p style="margin:0;">NIP. 198012182007011001</p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `;
    
    bukaJendelaCetak(html);
}

// --- 12. MODUL GALERI FOTO KEGIATAN ---
function renderGaleriView() {
    const target = document.getElementById('section-galeri');
    if (!target) return;
    const role = localStorage.getItem('sidelila_role');
    const list = JSON.parse(localStorage.getItem('sidelila_gallery_photos') || '[]');
    let cards = '';
    if (list.length === 0) {
        cards = `<div class="col-span-full text-center py-16 bg-white rounded-2xl border shadow-sm"><p class="text-sm font-bold text-slate-700">Belum ada dokumentasi foto kegiatan.</p></div>`;
    } else {
        list.slice().reverse().forEach(item => {
            const btnDel = role === 'admin' ? `<div class="pt-2 border-t flex justify-end"><button type="button" onclick="hapusFotoGaleri(${item.id})" class="text-[11px] font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded">🗑️ Hapus</button></div>` : '';
            cards += `<div class="bg-white rounded-2xl border shadow-sm overflow-hidden flex flex-col"><div class="relative h-52 bg-slate-100"><img src="${item.image}" class="w-full h-full object-cover"><span class="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2.5 py-1 rounded-full">${item.date}</span></div><div class="p-4 flex flex-col flex-grow justify-between space-y-3"><p class="text-xs text-slate-800">${item.caption}</p>${btnDel}</div></div>`;
        });
    }
    const formAdmin = role === 'admin' ? `<div class="bg-slate-50 p-5 rounded-2xl border space-y-3 max-w-2xl mb-6"><h4 class="text-xs font-bold uppercase">➕ Panel Admin: Unggah Foto</h4><input type="file" id="galeri-file-input" accept="image/*" class="w-full p-2 bg-white border rounded text-xs"><textarea id="galeri-caption-input" rows="2" placeholder="Caption..." class="w-full p-2 bg-white border rounded text-xs"></textarea><button type="button" onclick="prosesUnggahGaleri()" class="px-4 py-2 bg-sky-600 text-white text-xs font-bold rounded">Publikasikan</button></div>` : '';
    target.innerHTML = `<div class="space-y-6"><div class="border-b pb-4"><h2 class="text-lg font-black uppercase">Galeri Dokumentasi Kegiatan</h2></div>${formAdmin}<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">${cards}</div></div>`;
}

function prosesUnggahGaleri() {
    const fileInput = document.getElementById('galeri-file-input');
    const captionInput = document.getElementById('galeri-caption-input');
    if (!fileInput || !fileInput.files[0]) { alert("Pilih foto terlebih dahulu."); return; }
    const caption = captionInput ? captionInput.value.trim() : "";
    if (!caption) { alert("Tuliskan caption foto."); return; }
    const reader = new FileReader();
    reader.onload = function(e) {
        const list = JSON.parse(localStorage.getItem('sidelila_gallery_photos') || '[]');
        list.push({ id: Date.now(), image: e.target.result, caption: caption, date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) });
        localStorage.setItem('sidelila_gallery_photos', JSON.stringify(list));
        alert("Foto berhasil dipublikasikan!");
        renderGaleriView();
    };
    reader.readAsDataURL(fileInput.files[0]);
}

function hapusFotoGaleri(id) {
    if (confirm("Hapus foto ini?")) {
        let list = JSON.parse(localStorage.getItem('sidelila_gallery_photos') || '[]');
        list = list.filter(item => item.id !== id);
        localStorage.setItem('sidelila_gallery_photos', JSON.stringify(list));
        renderGaleriView();
    }
}

// --- PENDUKUNG CETAK ---
function bukaJendelaCetak(htmlContent) {
    const win = window.open('', '_blank');
    if (!win) { alert("Izinkan pop-up browser."); return; }
    win.document.write(htmlContent);
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); }, 500);
}

// Fungsi Upload Galeri ke Firebase Firestore dengan Kompresi Otomatis
function simpanFotoGaleriFirebase(fileFoto, judulFoto, keteranganFoto) {
    if (!fileFoto) {
        alert("Silakan pilih foto terlebih dahulu!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            let width = img.width;
            let height = img.height;
            const maxDim = 800; // Batas maksimal ukuran agar ringan
            
            if (width > height && width > maxDim) {
                height *= maxDim / width;
                width = maxDim;
            } else if (height > maxDim) {
                width *= maxDim / height;
                height = maxDim;
            }
            
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            
            const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);

            // Menyimpan ke database Firestore (Koleksi: "galeri_sidelila")
            db.collection("galeri_sidelila").add({
                judul: judulFoto,
                keterangan: keteranganFoto,
                image: compressedDataUrl,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                tanggalFormatted: new Date().toLocaleDateString('id-ID', {
                    day: 'numeric', month: 'long', year: 'numeric'
                })
            })
            .then(() => {
                alert("Foto berhasil diunggah ke server SIDELILA!");
                document.getElementById('form-upload-galeri')?.reset();
            })
            .catch((error) => {
                console.error("Gagal mengunggah foto: ", error);
                alert("Gagal mengunggah foto ke server.");
            });
        };
    };
    reader.readAsDataURL(fileFoto);
}

// Fungsi untuk memuat dan menampilkan galeri secara aman dan otomatis
function muatGaleriFirebase() {
    console.log("Fungsi muatGaleriFirebase dipanggil secara mandiri...");

    if (typeof db === 'undefined') {
        console.error("Variabel database (db) belum didefinisikan!");
        return;
    }

    db.collection("galeri_sidelila")
      .onSnapshot((querySnapshot) => {
          console.log("Data Firestore berhasil diakses. Jumlah dokumen:", querySnapshot.size);
          
          // Cari area tampilan utama (main atau body) agar pasti tampil
          const mainArea = document.querySelector('main') || document.body;

          // Cek apakah wadah galeri independen sudah ada, jika belum buat langsung
          let container = document.getElementById('galeri-mandiri-container');
          if (!container) {
              container = document.createElement('div');
              container.id = 'galeri-mandiri-container';
              container.style.cssText = 'padding: 20px; background: #f8fafc; min-height: 80vh;';
              mainArea.appendChild(container);
          }

          // Pastikan section galeri bawaan lama dibuka jika ada
          const sectionGaleri = document.getElementById('section-galeri');
          if (sectionGaleri) {
              sectionGaleri.style.display = 'block';
          }

          let html = `<div class="mb-6"><h2 class="text-xl font-black uppercase text-slate-800">Galeri Dokumentasi Kegiatan</h2><p class="text-xs text-slate-500">Daftar foto kegiatan lini lapangan SIDELILA.</p></div>`;
          
          if (querySnapshot.empty) {
              html += '<div class="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm"><p class="text-xs font-bold text-slate-700">Belum ada dokumentasi foto kegiatan.</p></div>';
          } else {
              html += '<div class="grid grid-cols-1 md:grid-cols-2 gap-6">';
              querySnapshot.forEach((doc) => {
                  const data = doc.data();
                  html += `
                      <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden group">
                          <div class="aspect-video bg-slate-100 overflow-hidden">
                              <img src="${data.image}" alt="${data.judul || 'Foto Kegiatan'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                          </div>
                          <div class="p-4">
                              <p class="text-xs text-slate-700 font-medium leading-relaxed">${data.keterangan || data.judul || ''}</p>
                              <span class="text-[10px] text-slate-400 mt-2 block">${data.tanggalFormatted || ''}</span>
                          </div>
                      </div>
                  `;
              });
              html += '</div>';
          }
          
          container.innerHTML = html;
          container.style.display = 'block';
          console.log("Galeri mandiri berhasil dirender ke layar!");
      }, (error) => {
          console.error("Gagal mengambil data dari Firestore:", error);
      });
}

// 1. Jalankan sekali saat pertama kali halaman dibuka
muatGaleriFirebase();

// 2. Tangkap setiap kali menu galeri diklik melalui navigasi
document.addEventListener("click", function(e) {
    const targetLink = e.target.closest('a');
    if (targetLink) {
        const onclickAttr = targetLink.getAttribute('onclick') || '';
        // Jika tombol menu galeri yang diklik
        if (onclickAttr.includes('galeri') || targetLink.id === 'menu-galeri') {
            console.log("Menu galeri dipilih, memuat data dari Firebase...");
            setTimeout(muatGaleriFirebase, 150); // Beri jeda sepersekian detik agar elemen siap
        }
    }
});
// Pemicu tambahan jika menu diklik
document.addEventListener("click", function(e) {
    if (e.target && (e.target.textContent.includes("Galeri Kegiatan") || e.target.closest('#menu-galeri'))) {
        setTimeout(muatGaleriFirebase, 200); // Beri jeda sedikit agar elemen terbuka
    }
});

// Otomatis menghubungkan tombol Publikasikan ke Firebase
document.addEventListener("click", function(e) {
    if (e.target && e.target.textContent.trim() === "Publikasikan") {
        const wrapper = e.target.closest('div') || e.target.parentElement;
        const inputFile = document.querySelector('input[type="file"]');
        const inputCaption = document.querySelector('textarea') || document.querySelector('input[type="text"]');
        
        if (inputFile && inputFile.files[0]) {
            const file = inputFile.files[0];
            const keterangan = inputCaption ? inputCaption.value : "";
            
            // Jalankan fungsi simpan ke Firebase
            simpanFotoGaleriFirebase(file, "Dokumentasi Kegiatan SIDELILA", keterangan);
        } else {
            alert("Silakan pilih foto terlebih dahulu!");
        }
    }
});

// Memastikan galeri otomatis dimuat saat menu Galeri Kegiatan diklik oleh pengguna
document.addEventListener("click", function(e) {
    // Mengecek jika yang diklik adalah menu galeri
    if (e.target && (e.target.textContent.includes("Galeri Kegiatan") || e.target.closest('#menu-galeri'))) {
        muatGaleriFirebase();
    }
});



// --- BANK SOAL KOMPETENSI LINI LAPANGAN ---
const bankSoalKompetensi = [
    {
        pertanyaan: "Di bawah ini merupakan media penularan dari HIV dan AIDS adalah:",
        pilihan: [
            "Darah",
            "Cairan sperma",
            "Cairan vagina",
            "Air Susu Ibu (ASI)",
            "Rambut"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Penularan HIV dan AIDS dapat terjadi dengan cara ...",
        pilihan: [
            "Transplantasi organ atau jaringan tubuh",
            "Memakai alat makan bersama",
            "Tidur satu tempat tidur",
            "Melalui udara",
            "Gigitan nyamuk"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Kepanjangan dari metode ABCDE adalah",
        pilihan: [
            "Absurd, Behavior, Creative, Deep, Equipment",
            "Absent, Be Kind, Clever, Don't use drugs, Equipment",
            "Abstinence, Be faithful, Condom, Don't use drugs, Equipment",
            "Abstinence, Brave, Clear, Down, Equipment",
            "Available, Be faithfull, Condom, Don't use drugs, Equivalent"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Nama lain uji serologis yang digunakan untuk menganalisis adanya interaksi antigen dengan antibodi di dalam suatu sampel dengan menggunakan enzim adalah:",
        pilihan: [
            "ELISA (Enzyme-linked immunosorbent assay)",
            "Western Blot",
            "Jumlah Virus/Viral Load RNA HIV dalam plasma",
            "Western Union",
            "Tes Plasma"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Sebuah metode untuk mendeteksi protein pada sampel jaringan adalah:",
        pilihan: [
            "ELISA (Enzyme-linked immunosorbent assay)",
            "Western Blot",
            "Jumlah Virus/Viral Load RNA HIV dalam plasma",
            "Western Union",
            "Tes Plasma"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Manakah yang termasuk fakta tentang HIV adalah:",
        pilihan: [
            "HIV menular melalui gigitan nyamuk",
            "HIV menular melalui penggunaan toilet",
            "Bayi yang dilahirkan dari Ibu pengidap HIV pasti akan tertular HIV dari ibunya",
            "HIV hanya bias hidup dalam tubuh manusia",
            "Kondom tidak efektif dalam pencegahan penularan HIV"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Tahapan dalam rencana operasional keluarga berencana dan keluarga sejahtera sebanyak ...",
        pilihan: [
            "3 tahap",
            "4 tahap",
            "5 tahap",
            "6 tahap",
            "7 tahap"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Dibawah ini yang bukan muatan rencana operasional KB dan KS adalah ...",
        pilihan: [
            "Tujuan yang jelas",
            "Kegiatan yang akan disampaikan",
            "Standar mutu",
            "Jadwal pelaksanaan",
            "Anggaran Dana"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Isi dari Peraturan Menteri Dalam Negeri Nomor 66 Tahun 2007 adalah ...",
        pilihan: [
            "Perencanaan Pembangunan Desa",
            "Perencanaan Pembangunan Kota",
            "Perencanaan Pelebaran Jalan",
            "Perencanaan Pembangunan Pasar",
            "Perencanaan Pemanfaatan Perumahan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Musrenbang Desa adalah",
        pilihan: [
            "forum musyawarah tahunan pihak yang berkepentingan untuk mengatasi permasalahan desa",
            "forum musyawarah tahunan pihak yang berkepentingan untuk mengatasi kenakalan remaja",
            "forum musyawarah tahunan pihak yang berkepentingan untuk mengatasi pemekaran desa",
            "forum musyawarah tahunan pihak yang berkepentingan untuk mengatasi imunisasi",
            "forum musyawarah tahunan pihak yang berkepentingan untuk mengatasi kepadatan penduduk"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Di bawah ini yang bukan merupakan kehidupan seksual yang sehat sebagaimana dimaksud dalam PP tentang Kesehatan Reproduksi pasal 26 pada ayat (2) yaitu",
        pilihan: [
            "terbebas dari infeksi menular seksual",
            "terbebas dari disfungsi dan gangguan orientasi seksual",
            "terbebas dari kekerasan fisik dan mental",
            "mampu mengatur kehamilan",
            "terbebas tinggal dengan orangtua"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Di bawah ini yang bukan merupakan penanganan aspek kesehatan fisik, mental, dan seksual pada korban kekerasan seksual sebagaimana dimaksud dalam PP ttg Kesehatan Reproduksi pasal 26 pada ayat (1) adalah",
        pilihan: [
            "pemeriksaan fisik, mental, dan penunjang pengobatan luka dan/atau cedera",
            "pencegahan dan/atau penanganan penyakit menular seksual",
            "pencegahan kehamilan",
            "penanganan kehamilan",
            "rawat inap"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Menurut UU No. 52 tahun 2009, definisi keluarga adalah ...",
        pilihan: [
            "Unit terkecil dari masyarakat yang terdiri dari suami istri dan anaknya, atau ayah dan anaknya, atau ibu dan anaknya",
            "Perkumpulan dua orang atau lebih individu yang hidup bersama dalam keterikatan...",
            "Lingkungan yang pertama dan utama bagi perkembangan individu...",
            "Keluarga merupakan dua atau lebih individu yang hidup dalam satu rumah tangga...",
            "Unit terkecil dari masyarakat yang terdiri atas kepala keluarga..."
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Di bawah ini merupakan konsep-konsep utama dalam membangun keluarga, kecuali",
        pilihan: [
            "Keluarga berkumpul",
            "Keluarga berinteraksi",
            "Keluarga berdaya",
            "Keluarga peduli dan berbagi",
            "Keluarga bersatu"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Penerapan 8 fungsi keluarga dilandasi oleh empat konsep, salah satunya adalah anggota keluarga memanfaatkan waktu luang bersama... Hal tersebut termasuk dalam konsep keluarga",
        pilihan: [
            "Berkumpul",
            "Berinteraksi",
            "Peduli dan berbagi",
            "Berdiskusi",
            "Berkomunikasi"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Ketidakberfungsian keluarga akan berdampak pada masalah hubungan antar keluarga serta ...",
        pilihan: [
            "Kurangnya kontrol orang tua terhadap perilaku anaknya",
            "Kurangnya keharmonisan antar anggota keluarga",
            "Kurangnya dukungan antar anggota keluarga",
            "Kurangnya kasih sayang dalam keluarga",
            "Kurangnya nilai moral dalam anggota keluarga"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Kunci sukses pelaksanan fungsi keluarga adalah",
        pilihan: [
            "Anak-anak",
            "Ayah",
            "Ibu",
            "Orang tua",
            "Saudara"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Fungsi keluarga yang terlaksana dengan baik akan melahirkan insan-insan yang berkualitas dan keluarga yang berkualitas, hal itu dapat terlaksana jika orang tua memiliki sikap",
        pilihan: [
            "Sabar, tekun, kebersamaan",
            "Penyayang, hangat, perhatian",
            "Hangat, perhatian, menuntun",
            "Jujur, disiplin, saling menghormati",
            "Toleransi, tanggung jawab, pengertian"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Berikut ini yang tidak termasuk ke dalam 8 fungsi keluarga adalah",
        pilihan: [
            "Fungsi cinta kasih",
            "Fungsi ekonomi",
            "Fungsi keagamaan",
            "Fungsi keamanan",
            "Fungsi perlindungan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Salah satu fungsi keluarga yang paling mendasar yaitu",
        pilihan: [
            "Fungsi cinta kasih",
            "Fungsi ekonomi",
            "Fungsi keagamaan",
            "Fungsi pembinaan lingkungan",
            "Fungsi reproduksi"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Dalam keluarga, orang tua menanamkan keyakinan terhadap Tuhan Yang maha Esa dan menanamkan sikap takwa, hal tersebut termasuk fungsi keluarga dalam ...",
        pilihan: [
            "Keagamaan",
            "Pembinaan lingkungan",
            "Sosialisasi dan pendidikan",
            "Keyakinan Keluarga",
            "Bermasyarakat"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Berikut ini yang tidak termasuk dalam 12 nilai dasar yang harus dipahami dalam keluarga sebagai fungsi keagamaan yaitu ...",
        pilihan: [
            "Iman",
            "Ketaatan",
            "Kepercayaan",
            "Kesalehan",
            "Sabra dan ikhlas"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Mengungkapkan rasa kasih sayang dengan penuh perhatian, kesadaran dan kecintaan terhadap seseorang merupakan fungsi keluarga dalam ...",
        pilihan: [
            "Cinta kasih",
            "Berkasih sayang",
            "melindungi",
            "perhatian",
            "kerukunan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "1) kejujuran 2) kerukunan 3) rajin 4) sopan santun 5) tenggang rasa. Nilai-nilai yang termasuk dalam fungsi keagamaan ditunjukan oleh nomor....",
        pilihan: [
            "1, 2, dan 3",
            "1, 3, dan 5",
            "2, 3, dan 4",
            "3, 4, dan 5",
            "Benar semua"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Salah satu nilai yang ditanamkan keluarga dalam fungsi keagamaan adalah suka membantu, seperti ...",
        pilihan: [
            "Membiasakan menolong dan membantu orang lain tanpa mengharapkan imbalan",
            "Membiasakan mendermakan sesuatu tanpa mengharapkan imbalan",
            "Membiasakan memberi bantuan tanpa mengharapkan imbalan",
            "Membiasakan tolong menolong tanpa mengharapkan imbalan",
            "Membiasakan gotong royong tanpa mengharapkan imbalan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Santi ingin sekali membeli mainan baru, sedangkan dirumah masih banyak mainan yang masih baru. Santi tidak bisa menahan diri untuk membeli... Sebagai orang tua, seharusnya dapat menanamkan nilai",
        pilihan: [
            "Ketaqwaan",
            "Kesalehan",
            "Sabar dan ikhlas",
            "Disiplin",
            "Hemat"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Agar terbentuk karakter yang selalu menepati waktu dan mematuhi aturan yang telah disepakati, orang tua dapat menanamkan nilai....",
        pilihan: [
            "Disiplin",
            "Jujur",
            "Ketaatan",
            "Tanggung jawab",
            "Kepatuhan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Setiap orang memiliki perbedaan baik dalam sifat atau karakternya, dan kita sebagai makhluk tuhan harus menerima perbedaan itu. Oleh karena itu sebagai orang tua dapat menanamkan nilai....",
        pilihan: [
            "Cinta kasih",
            "Hormat menghormati",
            "Toleransi",
            "Tenggang rasa",
            "Sabar"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "1) iman 2) kerukunan 3) ketakwaan 4) peduli 5) suka menolong. Nilai-nilai yang tidak termasuk ke dalam nilai nilai yang ditanamkan dan diterapkan keluarga dalam fungsi keagamaan ditunjukan pada nomor",
        pilihan: [
            "1,2, dan 3",
            "2,3, dan 4",
            "2,4, dan 5",
            "1,3, dan 5",
            "3,3, dan 5"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Meluangkan waktu dan tenaga untuk menyelesaikan tugas dan berusaha untuk mendapat hasil yang baik, termasuk nilai-nilai",
        pilihan: [
            "Disiplin",
            "Rajin",
            "Ketaatan",
            "Tanggung jawab",
            "tekun"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Keluarga adalah wahana utama dalam pembinaan dan penanaman nilai-nilai luhur budaya yang menjadi panutan dalam tata kehidupan, merupakan fungsi...",
        pilihan: [
            "Sosial budaya",
            "ekonomi",
            "sosialisasi dan pendidikan",
            "pembinaan lingkungan",
            "keagamaan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Fungsi sosial budaya dalam keluarga diterapkan dengan harapan keluarga dapat ...",
        pilihan: [
            "menjadi wahan pertama bagi anak dalam belajar berinteraksi dan beradaptasi dengan lingkungannya",
            "menjadi wahan pertama bagi anak dalam belajar bersosialisasi dan beradaptasi dengan lingkungannya",
            "menjadi wahan pertama bagi anak dalam belajar berinteraksi dan berkomunikasi...",
            "menjadi wahan pertama bagi anak dalam belajar berkomunikasi...",
            "menjadi wahan pertama bagi anak dalam belajar berteman..."
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Keluarga merupakan tempat pertama anak untuk belajar, anak yang memiliki sikap toleransi dan saling menghargai, hal tersebut dikarenakan keluarga menerapkan fungsi ...",
        pilihan: [
            "cinta kasih",
            "social budaya",
            "sosialisasi dan pendidikan",
            "pembinaan lingkungan",
            "keagamaan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Di bawah ini yang tidak termasuk dalam 7 nilai dasar yang harus ditanamkan dan diterapkan oleh keluarga adalah",
        pilihan: [
            "Toleransi dan saling menghargai",
            "Sopan santun",
            "Gotong royong",
            "Tenggang rasa",
            "Kerukunan dan kebersamaan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "1) Toleransi 2) Saling menghargai 3) tenggang rasa 4) kerukunan dan kebersamaan 5) gotong royong. Nilai-nilai yang termasuk fungsi sosial budaya yang ditanamkan dan diterapkan oleh keluarga ditunjukan oleh nomor....",
        pilihan: [
            "1,2, dan 3",
            "2,3, dan 4",
            "2,4, dan 5",
            "1,3, dan 5",
            "3,4, dan 5"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Keluarga yang menanamkan dan menerapkan sikap sopan santun dalam keluarga, maka dapat dikatakan telah melaksanakan salah satu fungsi keluarga yaitu....",
        pilihan: [
            "Cinta kasih",
            "Keagamaan",
            "Social budaya",
            "Sosialisasi dan pendidikan",
            "Pembinaan lingkungan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Perwujudan fungsi social budaya pada nilai cinta tanah air dapat terlihat pada hal-hal di bawah ini, kecuali....",
        pilihan: [
            "Kesadaran diri sebagai bangsa Indonesia... memilih produk bangsa sendiri.",
            "Kesadaran diri sebagai bangsa Indonesia... suka produk bangsa sendiri.",
            "Kesadaran diri sebagai bangsa Indonesia... memasarkan produk bangsa sendiri",
            "Kesadaran diri sebagai bangsa Indonesia... mencintai produk bangsa sendiri",
            "Kesadaran diri sebagai bangsa Indonesia... menyukai produk luar bangsa sendiri"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Salah satu fungsi keluarga yang menciptakan suasana rumah dengan kehangatan dan rasa aman serta memberi perhatian diantara anggota keluarga, yaitu",
        pilihan: [
            "Fungsi Cinta kasih",
            "Fungsi keagamaan",
            "Fungsi social budaya",
            "Fungsi sosialisasi dan pendidikan",
            "Fungsi pembinaan lingkungan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Landasan kokoh selain keagamaan agar tetap harmoni dan merasa nyaman dan aman sehingga terbentuk hubungan orang tua dan anak, anak dengan anak... hal tersebut perwujudan dari fungsi keluarga dalam hal....",
        pilihan: [
            "Fungsi Cinta kasih",
            "Fungsi keagamaan",
            "Fungsi social budaya",
            "Fungsi sosialisasi dan pendidikan",
            "Fungsi pembinaan lingkungan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Kebiasaan yang mencirikan bahwa keluarga menerapkan fungsi cinta kasih dalam keluarga adalah",
        pilihan: [
            "Keluarga yang memiliki sikap empati",
            "Keluarga yang memiliki sikap peduli",
            "Keluarga yang memiliki sikap kebersamaan",
            "Keluarga yang memiliki sikap saling membantu",
            "Keluarga yang memiliki sikap simpati"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "1) peduli 2) Pemaaf 3) Setia 4) Suka menolong 5) Saling membantu. Nilai-nilai yang dapat dilakukan dalam keluarga guna menanamkan dan menerapkan fungsi cinta kasih ditunjukan pada nomor",
        pilihan: [
            "1,2, dan 3",
            "1, 3, dan 5",
            "2,3, dan 4",
            "2,4, dan 5",
            "3,4, dan 5"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Seorang anak yang terbiasa dapat menerima kesalahan orang lain dan selalu berfikir positif bahwa setiap manusia pasti pernah melakukan kesalah tanpa adanya dendam, dalam diri anak tersebut tertanam nilai....",
        pilihan: [
            "Toleransi",
            "Adil",
            "Pemaaf",
            "Pengorbanan",
            "Sabar dan ikhlas"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Contoh perilaku anak pelajar yang mencerminkan sikap tanggung jawab adalah....",
        pilihan: [
            "Belajar dengan rajin dan tekun serta selalu berusaha lebih baik.",
            "Membantu orang lain dengan senang hati",
            "Menyelesaikan tugasnya dengan baik dan tepat waktu",
            "Berusaha untuk tidak memihak atau tidak pilih kasih terhadap orang lain",
            "Melaksanakan tugasnya dan tanggung jawabnya dengan segera dan senang hati"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Sikap pengorbanan orang tua dalam keluarga tercermin dalam keseharian dengan melakukan kegiatan sebagaimana fungsi keluarga yaitu",
        pilihan: [
            "Merelakan waktu berharga untuk keluarga",
            "Merelakan waktu luang untuk bekerja untuk memenuhi kebutuhan",
            "Merelakan anak diasuh oleh orang lain sedangkan sibuk bekerja.",
            "Merelakan masa kecil anak terlewatkan begitu saja.",
            "Merelakan masa bermain anak untuk kepentingan diri sendiri"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Di bawah ini yang bukan merupakan nilai-nilai fungsi cinta kasih yang tertanam dan diterapkan dalam keluarga yaitu",
        pilihan: [
            "Empati",
            "Adil",
            "Setia",
            "Kasih sayang",
            "Suka menolong"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Salah satu nilai fungsi cinta kasih yang tertanam dan diterapkan dalam keluarga yaitu",
        pilihan: [
            "Suka membantu",
            "Kasih sayang",
            "Peduli",
            "Cinta tanah air",
            "Suka menolong"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Seorang anak saat libur sekolah membantu orang tuanya membersihkan rumah tanpa ada paksaan dan senang melakukannya, hal tersebut menunjukkan bahwa dalam diri anak sudah tertanam nilai",
        pilihan: [
            "Rajin",
            "Peduli",
            "Suka membantu",
            "Suka menolong",
            "Tanggung jawab"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Fungsi keluarga dalam mempertahankan dan mengembangkan kekayaan budaya bangsa yang beraneka ragam dalam satu kesatuan Nusantara yaitu",
        pilihan: [
            "Fungsi Cinta kasih",
            "Fungsi Social budaya",
            "Fungsi pelestarian budaya",
            "Fungsi pendidikan",
            "Fungsi Ekonomi"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Hidup di Negara yang memiliki keanekaragaman budaya, tradisi dan agama mengharuskan kita untuk saling menghargai satu sama lain. Hal tersebut dapat dilakukan dengan menanamkan nilai moral ...",
        pilihan: [
            "Empati",
            "Simpati",
            "Toleransi",
            "Tenggang rasa",
            "Kerukunan dan kebersamaan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Keluarga berfungsi sebagai perlindungan berarti ...",
        pilihan: [
            "Tempat bernaung atau berlindung, menumbuhkan rasa aman dan hangat bagi seluruh anggotanya.",
            "Tempat untuk mendapat perlindungan dan hidup dengan aman dan damai bagi seluruh angotanya",
            "Tempat penuh dengan kehangatan dan memiliki rasa aman dan nyaman bagi seluruh anggotanya",
            "Tempat berlindung dari segala hal-hal yang tidak menyenangkan bagi seluruh anggotanya",
            "Tempat berlindung dari tindakan-tindakan yang kurang baik dan merasa aman bagi seluruh anggotanya"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Nilai-nilai moral yang ditanamkan dan diterapkan pada fungsi perlindungan adalah ...",
        pilihan: [
            "Aman, peduli, dan adil",
            "Pengorbanan, suka menolong, dan pemaaf",
            "Tanggap, tanggung jawab, dan tabah",
            "Pemaaf, tabah, dan peduli",
            "Aman, peduli, dan tanggap"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Contoh penerapan nilai moral tanggap yaitu ...",
        pilihan: [
            "Saat kita mengetahui dan menyadari sesuatu yang kurang baik yang akan dihadapinya",
            "Saat kita mengetahui dan menyadari sesuatu yang tidak menyenangkan yang akan dihadapinya",
            "Saat kita mengetahui dan menyadari sesuatu yang menyakitkan yang akan dihadapinya",
            "Saat kita mengetahui dan menyadari sesuatu yang tidak nyaman yang akan dihadapinya",
            "Saat kita mengetahui dan menyadari sesuatu yang membahayakan yang akan dihadapinya"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Upaya untuk menanggapi perasaan dan pengalaman orang lain dan memunculkan rasa persaudaraan disebut....",
        pilihan: [
            "Empati",
            "Simpati",
            "Peduli",
            "Perhatian",
            "Cinta kasih"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Anggota keluarga yang merasa aman terbebas dari rasa takut dan kekhawatiran dalam segala aspek kehidupannya, maka keluarga tersebut menerapkan fungsi keluarga dalam,",
        pilihan: [
            "Keamanan",
            "Perlindungan",
            "kerukunan",
            "Kenyamanan",
            "Pertahanan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pengertian dari fungsi reproduksi dalam keluarga adalah ...",
        pilihan: [
            "Mengatur reproduksi keturunan secara sehat dan berencana sehingga melahirkan generasi berkualitas.",
            "Mengatur reproduksi dengan seksualitas yang sehat dan berkualitas.",
            "Mengatur reproduksi keturunan agar berkualitas",
            "Mengatur reproduksi generasi penerus yang sehat dan berkualitas",
            "Mengatur reproduksi agar terciptanya kesejahteraan keluarga"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Menanamkan kesadaran dalam menjaga kesehatan diri dan kesucian alat reproduksi agar tidak melakukan hubungan seksual diluar pernikahan termasuk sikap ...",
        pilihan: [
            "Konsisten",
            "Tangguh",
            "Teguh",
            "tegas",
            "Berpendirian"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Dalam keluarga setiap anggota keluarga diharuskan memiliki rasa tanggung jawab baik untuk diri sendiri maupun keluarga, dalam hal berhubungan dengan reproduksi dan seksual, contoh penanam dalam keluarga seperti",
        pilihan: [
            "Membicarakan secara jelas mengenai kesehatan seksual dan perilaku seksual dan akibatnya",
            "Membicarakan seara bijaksana mengenai perilaku seksual, kesehatan reproduksi dan akibatnya.",
            "Membicarakan secara bijaksana dan jelas mengenai kesehatan seksual dan perilaku seksual dan akibatnya",
            "Membicarakan dengan hati-hati mengenai perilaku seksual dan bagaimana menyikapinya.",
            "Membicarakan dengan secara jelas dengan melarang semua aktivitas berhubungan dengan seksual."
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Makna fungsi sosialisasi dan pendidikan adalah ...",
        pilihan: [
            "Keluarga sebagai tempat untuk belajar bersosialisasi serta berkomunikasi dengan baik dan sehat.",
            "Keluarga sebagai tempat pertama mendapatkan pendidikan dan belajar untuk berinteraksi dan beradaptasi terhadap lingkungan hidupnya.",
            "Keluarga sebagai tempat belajar berinteraksi, bersosialisasi, berkomunikasi dengan baik dan sehat.",
            "Keluarga sebagai tempat pertama untuk belajar berkomunikasi dan beradaptasi dengan baik terhadap lingkungan hidupnya",
            "Keluarga sebagai tempat belajar untuk pengembangan diri dalam berinteraksi, komunikasi dan sosialisasi secara baik dan sehat."
        ],
        jawaban: 1
    },
    {
        pertanyaan: "1) Percaya diri 2) Kerjasama 3) Bangga 4) Empati 5) Kreatif. Nilai-nilai yang dapat dilakukan dalam keluarga guna menanamkan dan menerapkan fungsi sosialisasi dan pendidikan ditunjukan oleh nomor,...",
        pilihan: [
            "1,2,3, dan 4",
            "2,3,4, dan 5",
            "1,2,3, dan 5",
            "1, 3, 4, dan 5",
            "1,2,4, dan 5"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Unit terkecil dari masyarakat yang terdiri dari suami istri dan anaknya, atau ayah dan anaknya, atau ibu dan anaknya merupakan definisi dari ...",
        pilihan: [
            "Penduduk",
            "Keluarga",
            "Masyarakat",
            "Kemitraan",
            "Golongan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Ukuran dari bagaimana sebuah keluarga beroperasi sebagai unit dan bagaimana anggota keluarga berinteraksi satu sama lain disebut",
        pilihan: [
            "Keluarga",
            "Bentuk Keluarga",
            "Fungsi Keluarga",
            "Peran Keluarga",
            "Tujuan keluarga"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Di bawah ini yang bukan merupakan bentuk keluarga adalah",
        pilihan: [
            "Keluarga inti",
            "Keluarga berencana",
            "Keluarga besar",
            "Orang tua tunggal",
            "Keluarga Dyadic"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Bentuk keluarga yang terdiri dari ayah, ibu, dan anak yang diperoleh dari kturunan atau adopsi maupun keduanya disebut...",
        pilihan: [
            "Keluarga inti",
            "Keluarga berencana",
            "Keluarga besar",
            "Keluarga berkomposisi",
            "Keluarga dyadic"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Bentuk keluarga inti yang ditambah dengan sanak saudaranya, misalnya kakek, nenek, keponakan, paman, bibi, saudara sepupu, dan lain sebagainya disebut",
        pilihan: [
            "Keluarga inti",
            "Keluarga berencana",
            "Keluarga besar",
            "Keluarga berkomposisi",
            "Keluarga dyadic"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Bentuk keluarga baru yang terbentuk dari pasangan yang telah bercerai atau kehilangan pasangannya disebut",
        pilihan: [
            "Keluarga inti",
            "Keluarga berencana",
            "Keluarga besar",
            "Keluarga berkomposisi",
            "Keluarga dyadic"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Bentuk keluarga yang perkawinannya berpoligami dan hidup secara bersama-sama disebut ...",
        pilihan: [
            "Keluarga inti",
            "Keluarga berencana",
            "Keluarga besar",
            "Keluarga berkomposisi",
            "Keluarga dyadic"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Peran ayah dalam keluarga di antaranya adalah ...",
        pilihan: [
            "Sebagai pengasuh dan pendidik anak-anak",
            "Sebagai pelindung anak-anak",
            "Sebagai pengurus rumah tangga",
            "Sebagai kepala keluarga",
            "Melaksanakan peranan psikososial sesuai dengan tingkat perkembangan baik fisik, mental, sosial maupun spiritual"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Salah satu peran anak dalam keluarga adalah ...",
        pilihan: [
            "Sebagai kepala keluarga",
            "Sebagai pendidik keluarga",
            "Sebagai orang yang melaksanakan peranan psikososial sesuai dengan tingkat perkembangan baik fisik, mental, sosial maupun spiritual",
            "Sebagai pelindung di keluarga",
            "Sebagai pencari nafkah"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Di bawah ini yang tidak termasuk 5 fungsi pokok keluarga yang dinilai dalam APGAR keluarga adalah",
        pilihan: [
            "Adaptasi",
            "Kemitraan",
            "Kebersamaan",
            "Penghargaan",
            "Pertumbuhan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Fungsi pokok keluarga yang menilai tingkat kepuasan anggota keluarga terhadap kebebasan yang diberikan keluarga dalam mematangkan pertumbuhan dan kedewasaan setiap anggota keluarga disebut",
        pilihan: [
            "Fungsi adaptasi",
            "Fungsi kemitraan",
            "Fungsi pertumbuhan",
            "Fungsi kasih sayang",
            "Fungsi kebersamaan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Fungsi pokok keluarga yang menilai tingkat kepuasan anggota keluarga terhadap kasih sayang serta interaksi emosional yang terjalin dalam keluarga disebut ...",
        pilihan: [
            "Fungsi adaptasi",
            "Fungsi kemitraan",
            "Fungsi pertumbuhan",
            "Fungsi kasih sayang",
            "Fungsi kebersamaan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Fungsi pokok keluarga yang menilai tingkat kepuasan anggota keluarga dalam menerima yang diperlukan dari anggota keluarga lainnya disebut",
        pilihan: [
            "Fungsi adaptasi",
            "Fungsi kemitraan",
            "Fungsi pertumbuhan",
            "Fungsi kasih sayang",
            "Fungsi kebersamaan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Fungsi pokok keluarga yang menilai tingkat kepuasan anggota keluarga terhadap komunikasi dalam keluarga, musyawarah dalam mengambil keputusan atau dalam penyelesaian masalah yang dihadapi dalam keluarga disebut",
        pilihan: [
            "Fungsi adaptasi",
            "Fungsi kemitraan",
            "Fungsi pertumbuhan",
            "Fungsi kasih sayang",
            "Fungsi kebersamaan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Fungsi pokok keluarga yang menilai tingkat kepuasan anggota keluarga terhadap kebersamaan dalam membagi waktu, kekayaan, dan ruang antar keluarga disebut...",
        pilihan: [
            "Fungsi adaptasi",
            "Fungsi kemitraan",
            "Fungsi pertumbuhan",
            "Fungsi kasih sayang",
            "Fungsi kebersamaan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Keluarga memiliki berbagai dukungan suportif. Di bawah ini yang bukan merupakan dukungan suportif adalah",
        pilihan: [
            "Dukungan intrumental",
            "Dukungan sosial",
            "Dukungan emosional",
            "Dukungan informatif",
            "Dukungan penghargaan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Suatu keadaan yang bermanfaat bagi individu yang diperoleh dari orang lain yang dapat dipercaya, sehingga seseorang akan tahu bahwa ada orang lain yang memperhatikan, mencintai, dan menghargai merupakan definisi dari ...",
        pilihan: [
            "Dukungan intrumental",
            "Dukungan sosial",
            "Dukungan emosional",
            "Dukungan informatif",
            "Dukungan penghargaan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Terdapat beberapa jenis hormon yang berperan dalam mekanisme pembentukan ASI. Hormon yang berperan dalam perkembangan kelenjar mamaria dengan menginduksi sintesis enzim-enzim yang berguna untuk produksi ASI disebut ...",
        pilihan: [
            "Hormon Estrogen",
            "Hormon Progesteron",
            "Human Chorionic Somatomammotroin (HCS)",
            "Hormon Prolaktin",
            "Hormon Oksitosin"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Hormon yang meningkatkan sekresi ASI disebut",
        pilihan: [
            "Hormon Estrogen",
            "Hormon Progesteron",
            "Human Chorionic Somatomammotroin (HCS)",
            "Hormon Prolaktin",
            "Hormon Oksitosin"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Hormon yang menyebabkan ejeksi (penyemrotan) ASI adalah",
        pilihan: [
            "Hormon Estrogen",
            "Hormon Progesteron",
            "Human Chorionic Somatomammotroin (HCS)",
            "Hormon Prolaktin",
            "Hormon Oksitosin"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Terdapat beberapa faktor yang mempengaruhi pemberian ASI eksklusif, kecuali ...",
        pilihan: [
            "Usia Ibu",
            "Paritas",
            "Cara Persalinan",
            "Berat Badan Ibu",
            "Faktor Psikis Ibu"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Data Wilayah merupakan wilayah keluarga bertempat tinggal yang terdiri dari hal-hal di bawah ini, kecuali",
        pilihan: [
            "Kode Provinsi",
            "Nomor rumah",
            "Nomor Induk Kependudukan (NIK)",
            "Nomor Urut Keluarga",
            "Kode Desa/Kelurahan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Data Individu Anggota Keluarga merupakan data per masing-masing individu keluarga yang terkait dengan hal-hal di bawah ini, kecuali",
        pilihan: [
            "Nama",
            "Jenis Kelamin",
            "Umur",
            "Hubungan Dengan Kepala Keluarga",
            "Kode Provinsi"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Data keluarga berencana berisi poin-poin di bawah ini, kecuali ...",
        pilihan: [
            "Usia kawin",
            "Jumlah anak",
            "Alasan tidak ber-KB",
            "Tempat pelayanan KB",
            "Kesertaan Dalam Jaminan Kesehatan Nasional (JKN)"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Data pembangunan keluarga meliputi hal-hal di bawah ini, kecuali ...",
        pilihan: [
            "Jenis atap rumah terluas",
            "Jenis dinding rumah terluas",
            "Jenis lantai rumah terluas",
            "Sumber penerangan utama",
            "Sumber penghasilan keluarga."
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Kegiatan pengumpulan data primer tentang data Kependudukan, data Keluarga Berencana, data Pembangunan keluarga dan data Anggota Keluarga yang dilakukan oleh masyarakat bersama pemerintah (BKKBN) secara serentak pada waktu yang telah ditentukan disebut...",
        pilihan: [
            "Pencatatan Keluarga",
            "Pendataan Keluarga",
            "Penyuluhan Keluarga",
            "Pembinaan Keluarga",
            "Advokasi"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kumpulan informasi dan data keluarga serta individu anggota keluarga hasil Pendataan Keluarga di setiap wilayah pendataan disebut ...",
        pilihan: [
            "Pendataan Keluarga",
            "Basis Data Keluarga",
            "Rumah Tangga",
            "Keluarga Khusus",
            "Pencatatan Keluarga"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Seseorang atau sekelompok orang yang mendiami sebagian atau seluruh bangunan yang biasanya tinggal bersama dan makan dari satu dapur, atau seorang yang mendiami sebagian atau seluruh bangunan serta mengurus keperluan sendiri disebut ...",
        pilihan: [
            "Pendataan Keluarga",
            "Basis Data Keluarga",
            "Rumah Tangga",
            "Keluarga Khusus",
            "Pencatatan Keluarga"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Unit terkecil dalam masyarakat yang terdiri dari suami istri, atau suami istri dan anaknya, atau ayah dan anaknya, atau ibu dan anaknya disebut...",
        pilihan: [
            "Pendataan Keluarga",
            "Keluarga",
            "Rumah Tangga",
            "Keluarga Khusus",
            "Pencatatan Keluarga"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Keluarga yang tidak memenuhi definisi keluarga, namun memiliki hubungan keluarga sesama anggotanya, misalnya kakak dan adik tanpa orang tua, seorang kakek/nenek dan cucunya, atau seorang diri (sebatang kara) disebut...",
        pilihan: [
            "Pendataan Keluarga",
            "Keluarga",
            "Rumah Tangga",
            "Keluarga Khusus",
            "Pencatatan Keluarga"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Laki laki atau perempuan yang berstatus kawin, atau janda, atau duda, atau tidak kawin, yang mengepalai suatu keluarga yang anggotanya terdiri dari istri/suaminya dan atau anak-anaknya disebut...",
        pilihan: [
            "Anak",
            "Keluarga",
            "Rumah Tangga",
            "Keluarga Khusus",
            "Kepala Keluarga"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Formulir yang digunakan untuk mencatat data keluarga yang dilakukan oleh kader pendata disebut...",
        pilihan: [
            "Formulir Data Keluarga Indonesia",
            "Formulir Pendataan Keluarga (F/I/PK/15)",
            "Diseminasi hasil Pendataan Keluarga",
            "osialisasi hasil Pendataan Keluarga",
            "Sarasehan hasil Pendataan Keluarga"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Upaya kegiatan penyebarluasan hasil Pendataan Keluarga kepada pihak atau kelompok/individu yang berkepentingan dengan data informasi laporan hasil Pendataan Keluarga, agar mereka mengetahui, memahami dan memanfaatkan data informasi keluarga disebut...",
        pilihan: [
            "Pencatatan Data Keluarga Indonesia",
            "Pendataan Keluarga (F/I/PK/15)",
            "Diseminasi hasil Pendataan Keluarga",
            "Sosialisasi hasil Pendataan Keluarga",
            "Sarasehan hasil Pendataan Keluarga"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Upaya memasyarakatkan data hasil Pendataan Keluarga, sehingga data tersebut dikenal, dipahami, dihayati oleh pihak-pihak tertentu yang berkepentingan atau masyarakat umum disebut",
        pilihan: [
            "Pencatatan Data Keluarga Indonesia",
            "Pendataan Keluarga (F/I/PK/15)",
            "Diseminasi hasil Pendataan Keluarga",
            "Sosialisasi hasil Pendataan Keluarga",
            "Sarasehan hasil Pendataan Keluarga"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pertemuan yang dilakukan oleh pengelola/petugas KB dengan pimpinan wilayah/pihak-pihak yang berkepentingan setempat, untuk melakukan verifikasi dan validasi data keluarga disebut...",
        pilihan: [
            "Pencatatan Data Keluarga Indonesia",
            "Pendataan Keluarga (F/I/PK/15)",
            "Diseminasi hasil Pendataan Keluarga",
            "Sosialisasi hasil Pendataan Keluarga",
            "Sarasehan hasil Pendataan Keluarga"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Berikut merupakan beberapa strategi pendataan keluarga, kecuali ....",
        pilihan: [
            "Memanfaatkan teknologi informasi dalam pengelolaan Pendataan Keluarga",
            "Mendayagunakan sumber daya yang ada di lini lapangan",
            "Meningkatkan kompetensi Sumber Daya Manusia pelaksana Pendataan Keluarga",
            "Menggalang kemitraan dengan berbagai mitra kerja dan stakeholder Pendataan Keluarga",
            "Melakukan evaluasi dan monitoring satu kali"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Dalam proses pencatatan data keluarga, dikembangkan formulir untuk mencatat data keluarga dan individu anggota keluarga yang disebut...",
        pilihan: [
            "F/I/PK/15",
            "F/PK/I/15",
            "F/15/I/PK",
            "F/15/PK/I",
            "F/I/15/PK"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Membentuk Pos Koordinasi (Posko) sebagai pusat rujukan yang diharapkan dapat memberikan dukungan dalam pelaksanaan Pendataan Keluarga merupakan salah satu persiapan pendataan keluarga di tingkat ...",
        pilihan: [
            "Pusat",
            "Provinsi",
            "Kota",
            "Kecamatan",
            "Dusun"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Menerbitkan Instruksi Gubernur berdasarkan Surat Edaran Menteri Dalam Negeri tentang Pelaksanaan Pendataan Keluarga kepada bupati dan walikota di wilayahnya merupakan salah satu persiapan pendataan keluarga di tingkat...",
        pilihan: [
            "Pusat",
            "Provinsi",
            "Kota",
            "Kecamatan",
            "Dusun"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Membuat sket peta keluarga sesuai dengan lokasi dan posisi rumah tangga dan keluarga yang akan didata merupakan salah satu persiapan pendataan keluarga di tingkat",
        pilihan: [
            "Pusat",
            "Provinsi",
            "Kota",
            "Kecamatan",
            "Dusun"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Pembentukan Tim Pendataan dan Tim Pos Koordinasi serta penetapan sekretariatnya untuk memantau perkembangan pelaksanaan pendataan di wilayahnya merupakan salah satu persiapan pendataan keluarga di tingkat ...",
        pilihan: [
            "Pusat",
            "Provinsi",
            "Kota",
            "Kecamatan",
            "Dusun"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Menyusun jadwal waktu pelaksanaan pengumpulan data Pendataan Keluarga di wilayah kerjanya merupakan salah satu persiapan pendataan keluarga di tingkat ...",
        pilihan: [
            "Pusat",
            "Provinsi",
            "Kota",
            "Kecamatan",
            "Dusun"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Dalam pelaksanaan pendataan keluarga, kader pendataan tingkat RT melakukan hal-hal di bawah ini, kecuali",
        pilihan: [
            "Melakukan kunjungan rumah ke rumah dengan melakukan wawancara dan observasi untuk mencatat data keluarga tersebut menggunakan Formulir Data Keluarga F/I/PK/15",
            "Menempelkan stiker tanda pendataan keluarga pada setiap rumah tangga yang sudah dikunjungi untuk setiap keluarga yang sudah didata",
            "Menandai rumah tangga dan keluarga yang sudah didata pada sket peta keluarga hingga seluruh rumah tangga dan keluarga yang menjadi sasaran pendataan selesai didata seluruhnya",
            "membuat dan menandatangani Rekapitulasi Hasil Pendataan Keluarga Tingkat Dusun/RW menggunakan Formulir Rek.Dus/F/I/PK/15",
            "Membuat dan menandatangani Rekapitulasi Hasil Pendataan Keluarga Tingkat RT menggunakan Formulir Rek. RT/F/I/PK/15"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Dalam pelaksanaan pendataan keluarga, supervisor pendataan tingkat Dusun/RW melakukan hal-hal di bawah ini, kecuali",
        pilihan: [
            "Menyampaikan hasil Pendataan Keluarga kepada Kepala Dusun/Ketua RW setempat",
            "Menempelkan stiker tanda pendataan keluarga pada setiap rumah tangga yang sudah dikunjungi untuk setiap keluarga yang sudah didata",
            "Melakukan sarasehan awal untuk memverifikasi dan memvalidasi hasil Pendataan Keluarga di wilayahnya dan menandatangani pada Formulir Rek. Dus/F/I/PK/15",
            "Membuat dan menandatangani Rekapitulasi Hasil Pendataan Keluarga Tingkat Dusun/RW menggunakan Formulir Rek. Dus/F/I/PK/15",
            "Menyampaikan hasil Pendataan Keluarga yang sudah disetujui Kepala Dusun/Ketua RW setempat kepada Manajer Pendataan Keluarga tingkat Desa/Kelurahan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Salah satu hal yang dilakukan supervisor pendataan keluarga tingkat dusun/RW dalam melaksanakan pendataan keluarga adalah",
        pilihan: [
            "Menandatangani pada Formulir Rek.RT/F/I/PK/15 dan menyerahkan lembar 2 dan lembar 3 kepada Kader Pendata dan Ketua RT",
            "Menyampaikan hasil Pendataan Keluarga kepada Kepala Dusun/Ketua RW setempat",
            "Menyampaikan hasil Pendataan Keluarga kepada Kepala Desa/Lurah setempat",
            "Membuat dan menandatangani Rekapitulasi Hasil Pendataan Keluarga Tingkat Desa/Kelurahan menggunakan Formulir Rek. Des/F/I/PK/15",
            "Melakukan verifikasi dan validasi hasil Pendataan Keluarga di wilayahnya dan menandatangani pada Formulir Rek. Kec/F/I/PK/15"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Salah satu hal yang dilakukan manajer pendataan keluarga tingkat kecamatan dalam melaksanakan pendataan keluarga adalah",
        pilihan: [
            "Menandatangani pada Formulir Rek.RT/F/I/PK/15 dan menyerahkan lembar 2 dan lembar 3 kepada Kader Pendata dan Ketua RT",
            "Menyampaikan hasil Pendataan Keluarga kepada Kepala Dusun/Ketua RW setempat",
            "Menyampaikan hasil Pendataan Keluarga kepada Kepala Desa/Lurah setempat",
            "Membuat dan menandatangani Rekapitulasi Hasil Pendataan Keluarga Tingkat Desa/Kelurahan menggunakan Formulir Rek. Des/F/I/PK/15",
            "Melakukan verifikasi dan validasi hasil Pendataan Keluarga di wilayahnya dan menandatangani pada Formulir Rek. Kec/F/I/PK/15"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Salah satu hal yang dilakukan manajer pendataan keluarga tingkat kecamatan dalam melaksanakan pendataan keluarga adalah",
        pilihan: [
            "Menandatangani pada Formulir Rek.RT/F/I/PK/15 dan menyerahkan lembar 2 dan lembar 3 kepada Kader Pendata dan Ketua RT",
            "Menyampaikan hasil Pendataan Keluarga kepada Kepala Dusun/Ketua RW setempat",
            "Menyampaikan hasil Pendataan Keluarga kepada Kepala SKPD-KB Kabupaten dan Kota setempat",
            "Membuat dan menandatangani Rekapitulasi Hasil Pendataan Keluarga Tingkat Desa/Kelurahan menggunakan Formulir Rek.Des/F/I/PK/15",
            "Melakukan verifikasi dan validasi hasil Pendataan Keluarga di wilayahnya dan menandatangani pada Formulir Rek. Kec/F/I/PK/15"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Salah satu hal yang dilakukan manajer pendataan keluarga tingkat desa/kelurahan dalam melaksanakan pendataan keluarga adalah",
        pilihan: [
            "Menyampaikan hasil Pendataan Keluarga kepada Kepala Dusun/Ketua RW setempat",
            "Menempelkan stiker tanda pendataan keluarga pada setiap rumah tangga yang sudah dikunjungi untuk setiap keluarga yang sudah didata",
            "Melakukan sarasehan awal untuk memverifikasi dan memvalidasi hasil Pendataan Keluarga di wilayahnya dan menandatangani pada Formulir Rek. Dus/F/I/PK/15",
            "Menandatangani pada Formulir Rek. Des/F/I/PK/15 dan menyerahkan lembar 2 dan lembar 3 kepada Manajer Pendataan Keluarga tingkat Desa/Kelurahan dan Kepala Desa/Lurah",
            "Menyampaikan hasil Pendataan Keluarga yang sudah disetujui Kepala Dusun/Ketua RW setempat kepada Manajer Pendataan Keluarga tingkat Desa/Kelurahan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Salah satu hal yang dilakukan Kepala Bidang Adpin perwakilan BKKBN Tingkat Provinsi dalam melaksanakan pendataan keluarga adalah",
        pilihan: [
            "Menyampaikan hasil Pendataan Keluarga kepada Kepala Dusun/Ketua RW setempat",
            "Menyampaikan hasil Pendataan Keluarga kepada Kepala SKPD-KB Kabupaten dan Kota setempat",
            "Melakukan sarasehan awal untuk memverifikasi dan memvalidasi hasil Pendataan Keluarga di wilayahnya dan menandatangani pada Formulir Rek. Dus/F/I/PK/15",
            "Menandatangani pada Formulir Rek. Des/F/I/PK/15 dan menyerahkan lembar 2 dan lembar 3 kepada Manajer Pendataan Keluarga tingkat Desa/Kelurahan dan Kepala Desa/Lurah",
            "Menyampaikan hasil Pendataan Keluarga yang sudah disetujui Kepala Dusun/Ketua RW setempat kepada Manajer Pendataan Keluarga tingkat Desa/Kelurahan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Di bawah ini yang tidak termasuk dalam aspek Sumber daya manusia pada evaluasi pelaksanaan pendataan keluarga adalah",
        pilihan: [
            "Pengetahuan",
            "Pengalaman",
            "Pelatihan",
            "Program aplikasi",
            "Langsung dan tidak langsung"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Evaluasi pelaksanaan pendataan keluarga didukung oleh sarana dan prasarana, kecuali",
        pilihan: [
            "Pengalaman Langsung",
            "Komputer",
            "Program aplikasi",
            "Jaringan internet",
            "Formulir F/I/PK/15"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Adanya teknik bertanya dalam melakukan pendataan keluarga dengan menggunakan intonasi suara harus menunjukkan",
        pilihan: [
            "Perhatian",
            "Minat",
            "Keakraban",
            "Terbata-bata",
            "Santun"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Beberapa hal yang perlu diperhatikan dalam teknik bertanya, kecuali:",
        pilihan: [
            "Menggunakan pertanyaan terbuka",
            "Menggunakan kata-kata yang mudah dipahami keluarga",
            "Memotong jawaban",
            "Menunggu jawaban dengan penuh minat",
            "Memberikan alasan yang tepat jika terkait hal yang bersifat pribadi"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pelaksanaan pendataan keluarga dapat dilakukan oleh Kader pendata yang sudah mengikuti pelatihan, terkecuali;",
        pilihan: [
            "Penduduk Asing",
            "Penduduk dusun/RW",
            "Penduduk wilayah kerja Sub PPKBD",
            "Seluruh keluarga",
            "Rukun Tetangga"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Data yang diisikan ke dalam F/I/PK/15 harus berdasarkan :",
        pilihan: [
            "Catatan PPKBD",
            "Data pada PLKB",
            "Petugas desa",
            "Pejabat berwenang",
            "Kunjungan dari rumah ke rumah secara berurutan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "F/I/PK/15 digunakan untuk mencatat secara lengkap hasil pendataan keluarga yang meliputi:",
        pilihan: [
            "Data kependudukan",
            "Data anggota keluarga",
            "Data sekunder",
            "Data keluarga berencana",
            "Data pembangunan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Dalam pengisian F/I/PK/15 harus memperhatikan petunjuk umum, kecuali:",
        pilihan: [
            "Penggunaan huruf kapital",
            "Kotak pengisian",
            "Alat tulis berwarna hitam",
            "Tanda tangan kepala keluarga",
            "Luas bangunan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Nomor kendali digunakan untuk mengetahui formulir:",
        pilihan: [
            "Pengecekan awal",
            "Telah dicetak",
            "Didistribusikan",
            "Rusak",
            "Sudah diolah"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Hal yang tidak terkait keluarga berencana, meliputi:",
        pilihan: [
            "Jumlah anak",
            "Jumlah kendaraan",
            "Kesertaan ber KB",
            "Lama penggunaan metode kontrasepsi",
            "Tempat pelayanan KB"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Informasi pembangunan keluarga mencakup beberapa indikator, kecuali:",
        pilihan: [
            "Kebutuhan Dasar Keluarga Sejahtera",
            "Kesertaan Keluarga dalam Kelompok Kegiatan",
            "Pengembangan Keluarga Sejahtera",
            "Sarana Rumah Keluarga Sehat",
            "Kebutuhan rekreasi"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Kebutuhan Dasar Keluarga Sejahtera meliputi beberapa hal, kecuali:",
        pilihan: [
            "Pangan",
            "Papan",
            "Sandang",
            "Transportasi",
            "Kesehatan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Rumah keluarga sehat terlihat dari beberapa aspek terkait, kecuali",
        pilihan: [
            "Penerangan",
            "Sandang",
            "Air minum",
            "Fasilitas MCK",
            "Bangunan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Informasi yang tidak terkait dalam tata cara pencatatan data keluarga",
        pilihan: [
            "Umur dan hubungan dengan KK",
            "Pendidikan",
            "Hak kepemilikan bangunan",
            "Pekerjaan",
            "Status kawin"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Untuk memantau dan memonitor pelaksanaan pendataan keluarga yang telah dan belum di data, sebaiknya pendata melakukan:",
        pilihan: [
            "Penempelan stiker",
            "Memberi pengumuman",
            "Mendata ulang",
            "Observasi",
            "Survey"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Alat bantu untuk operasional program KKBPK berdasarkan kesertaan ber KB yang dibuat ditingkat RT atau Rw/Dusun dapat ditunjukan dengan:",
        pilihan: [
            "Peta Keluarga",
            "Jenis bangunan",
            "Fasilitas",
            "Status Sosial",
            "Status Pendidikan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Metode yang digunakan dalam pengumpulan dan pelaporan hasil pendatan keluarga:",
        pilihan: [
            "Data entry",
            "Data langsung",
            "Data tidak langsung",
            "Data primer",
            "Data sekunder"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Apabila petugas pengamat melakukan kekeliruan dalam pengisian F/I/PK/15, maka hal yang harus dilakukan petugas adalah:",
        pilihan: [
            "Melanjutkan saja",
            "Memberikan bimbingan untuk perbaikan",
            "Tidak bertanggungjawab",
            "Menyalahkan sumber data",
            "Melempar kesalahan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Dalam aturan pengorganisasian, satu tim pendata mendapat tugas untk mendata:",
        pilihan: [
            "Satu provinsi",
            "Satu distrik",
            "Maksimal 300 KK",
            "Seluruh kepala keluarga",
            "Warga Dusun"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Manakah pasangan dibawah ini yang tidak sesuai secara pengorganisasian sebagai penanggungjawab pendataan keluarga 2015:",
        pilihan: [
            "Tk. Pusat: Presiden",
            "Tk. Provinsi : Gubernur",
            "Tk. Kab/kota: Bupati/Walikota",
            "Tk. Kecamatan: Bupati/Walikota",
            "Tk. Desa/kel.: lurah/kades"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Yang tidak terkait tugas penanggungjawab:",
        pilihan: [
            "Penyelenggaraan pendataan",
            "Dukungan regulasi pendataan",
            "Fasilitas SDM",
            "Fasilitas operasional",
            "Fasilitas kendaraan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Kualifikasi yang tidak sesuai untuk Manajer pendataan keluarga kecamatan:",
        pilihan: [
            "Ka. UPT",
            "Pejabat kecamatan",
            "Mantan PPLKB",
            "Perangkat Desa",
            "Pejabat struktural BKKBN"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Kualifikasi untuk Manajer PKB tingkat desa/kelurahan:",
        pilihan: [
            "Ka. UPT",
            "Pejabat kecamatan",
            "Mantan PPLKB",
            "Perangkat Desa",
            "Pejabat struktural BKKBN"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Yang bukan tugas supervisor:",
        pilihan: [
            "Menyusun rencana",
            "Memberikan sumbangan",
            "Penghubung manajer tingkat desa/kelurahan",
            "Rekap hasil data",
            "Memberikan masukan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kader pendataan keluarga 2015 di lapangan dilakukan oleh, kecuali:",
        pilihan: [
            "Kader PKK",
            "Kader Poktan",
            "Kader Posyandu",
            "Kader Partai",
            "Kelompok Generasi Muda"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Langkah-langkah dalam tahap persiapan pendataan keluarga, kecuali:",
        pilihan: [
            "Pembahasan anggaran",
            "Pendekatan tokoh formal dan informal",
            "Identifikasi potensi calon tim pendata",
            "Pembentukan kesepakatan",
            "Pemantapan kesepakatan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Yang tidak terkait dalam hal Pelaksanaan pendataan keluarga:",
        pilihan: [
            "KIE dan Advokasi",
            "Pelatihan tim",
            "Penyebarluasan daerah",
            "Pendataan dan pemetaan",
            "Penyebarluasan informasi"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Tindak lanjut pendataan keluarga, kecuali:",
        pilihan: [
            "Pembentukan group",
            "Pelayanan KKBPK",
            "Observasi",
            "Bimbingan dan pemantauan",
            "Pelaporan dan evaluasi"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pelayanan KKBP meliputi:",
        pilihan: [
            "Mencatat nama-nama keluarga",
            "Memberikan KIE penyuluhan kepada keluarga yang belum menjadi peserta KB",
            "Melakukan pendekatan pada keluarga",
            "Menginventarisasi",
            "Memberikan bantuan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Sumber pembiayaan dalam pendataan keluarga berasal dari:",
        pilihan: [
            "Dana pribadi",
            "Dana masyarakat",
            "Dana tim",
            "Dana anggaran BKKBN",
            "Dana kecamatan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Penggunaan anggaran diharapkan tepat sasaran, kecuali dalam hal:",
        pilihan: [
            "Pengadaan fasilitas pribadi",
            "Pengadaan formulir pendataan",
            "Pengadaan blanko peta keluarga dan stiker",
            "Monitoring",
            "Operasional pendataan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Koordinasi pertanggungjawaban keuangan dari tingkat provinsi ke daerah ditetapkan sesuai ketentuan yang berlaku. Pernyataan yang tidak sesuai yakni:",
        pilihan: [
            "Operasional tingkat RT/dusun: manajer pendataan keluarga tingkat desa/kelurahan",
            "Operasional tingkat kecamatan: manajer pendataan keluarga tingkat kecamatan",
            "Operasional tingkat Kabupaten dan Kota: petugas keuangan di SKPD-KB kabupaten dan kota",
            "Operasional tingkat Provinsi: petugas keuangan di perwakilan BKKBN Provinsi",
            "Operasional tingkat Kabupaten dan Kota: petugas keuangan di SKPD-KB Provinsi"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Yang tidak terkait pengembangan peran IMP yaitu:",
        pilihan: [
            "Pengorganisasian",
            "Pertemuan",
            "Observasi",
            "KIE dan Konseling",
            "Pelayanan kegiatan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Wadah untuk penyampaian informasi/data dalam pertemuan IMP diwujudkan dengan",
        pilihan: [
            "Bimbingan pembinaan",
            "Keputusan sepihak",
            "Evaluasi",
            "Pemecahan masalah",
            "Perencanaan kegiatan program KKBPK"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Terdapat sasaran dilaksanakannya KIE dan Konseling, manakah yang tidak termasuk sasarannya:",
        pilihan: [
            "Peningkatan kesertaan masyarakat dalam ber-KB",
            "Memberikan fasilitas secara pribadi pada satu keluarga",
            "Ikut berperan serta dan peduli pada kesehatan dan keselamatan ibu",
            "Sadar dan peduli terhadap kesehatan reproduksi dalam membina keharmonisan keluarga",
            "Ketahanan keluarga dalam rangka mewujudkan KKBS"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Data yang tidak termasuk dalam kebijakan program KKBPK di daerah sasaran khusus:",
        pilihan: [
            "Perencanaan ketahanan bina Sosial",
            "Perencanaan ketahanan bina keluarga Balita",
            "Perencanaan ketahanan bina keluarga Remaja",
            "Perencanaan ketahanan bina keluarga Lansia",
            "Perencanaan ketahanan bina keluarga PIK Remaja/Mahasiswa"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pemutakhiran basis data keluarga indonesia dilaksakan setiap tahunnya, yang tidak termasuk pemanfaatan pemakhiran:",
        pilihan: [
            "Peta sasaran",
            "Penyedia fasilitas layanan",
            "Program dukungan",
            "Sarana motivasi",
            "Pembangangunan keluarga dari berbagai bidang"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Yang tidak termasuk kategori lini lapangan:",
        pilihan: [
            "Koordinator PLKB",
            "Warga Dusun",
            "PPKBD",
            "Kader pelaksana PBDKI",
            "PLKB/PKB"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Yang tidak termasuk jenis kontrasepsi:",
        pilihan: [
            "IUD",
            "MOW",
            "Suntik",
            "Gizi",
            "Pil"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Berikut beberapa alasan untuk tidak ber-KB, kecuali:",
        pilihan: [
            "Sedang hamil",
            "Tidak tahu tentang KB",
            "Pelayanan KB jauh",
            "Fertilisasi",
            "Mampu dan terkesan murah"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Tempat pelayanan KB yang sering anda jumpai, kecuali:",
        pilihan: [
            "klinik utama",
            "Rumah Sakit",
            "Dukun",
            "Puskesmas",
            "Praktek dokter"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Lagkah-langkah yang tidak perlu dilakukan untuk pemutakhiran basis data keluarga indonesia:",
        pilihan: [
            "Persiapan",
            "Pengolahan data",
            "Pelaksanaan",
            "Pemanfaatan dan penyebarluasan informasi",
            "Penyimpanan, keamanan dan kerahasiaan data"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Menyampaikan hasil pemutakhiran basis data keluarga indonesia kepada kepala bidang ADPIN Perwakilan BKKBN provinsi dengan melampirkan seluruh bendel buku BDKI dan F/I/PK/15 dilaksanalah oleh:",
        pilihan: [
            "Camat beserta manajer PBDKI",
            "Manajer PBDKI tingkat desa",
            "Kepala desa/lurah",
            "Bupati/walikota",
            "Kepala unit pengelola data dan informasi SKPD-KB"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Penanganan terhadap proses klaim pembayaran untuk biaya operasional pemutakhiran basis data keluarga indonesia dilaksanakan oleh",
        pilihan: [
            "Camat beserta manajer PBDKI",
            "Manajer PBDKI tingkat desa",
            "Kepala desa/lurah",
            "Kepala bidang ADPIN",
            "Kepala unit pengelola data dan informasi SKPD-KB"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pemanfaatan pelayanan KB terlihat dari beberapa aspek, kecuali:",
        pilihan: [
            "Ketersediaan alkon",
            "Menurunkan Unmet Need",
            "Meningkatkan metode kontrasepsi jangka panjang (MKJP)",
            "Daerah sasaran khusus",
            "Penyedia layanan khusus"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Yang tidak termasuk Perencanaan program ketahanan keluarga:",
        pilihan: [
            "Bina keluarga menengah",
            "Bina keluarga balita",
            "Bina keluarga remaja",
            "Bina keluarga lansia",
            "PIK-R/M"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Rekapitulasi hasil pemutakhiran basis data keluarga indonesia digunakan untuk melaksanakan sarasehan di tingkat desa. Analisis sederhananya mencakup:",
        pilihan: [
            "Profil program wilayah",
            "Diskusi panel dan intervensi",
            "Cakupan jumlah kepala keluarga, jmlah jiwa,jumlah pus, jumlah peserta dan bukan peserta KB",
            "paparan evaluasi keluarga dan perkembangannya",
            "Publikasi melalui media cetak dan elektronik"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Informasi yang tidak termasuk dalam penyimpanan data dan informasi pemutakhiran basis data keluarga indonesia",
        pilihan: [
            "Data kependudukan",
            "Keluarga berencana",
            "Profil program wilayah",
            "Pembangunan keluarga",
            "Data kependudukan dan pembangunan keluarga"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Undang-Undang Nomor 52 Tahun 2009 berisi tentang...",
        pilihan: [
            "Tata cara pengelolaan data rutin program kependudukan",
            "Organisasi dan tata kerja perwakilan Badan Kependudukan dan KeluargaBerencana Nasional",
            "Perkembangan Kependudukan dan Pembangunan Keluarga",
            "Sistem Jaminan Kesehatan Nasional",
            "Mekanisme pelaksanaanpelayanan KB"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Berikut ini yang tidak termasuk tempat pelayanan KB adalah ...",
        pilihan: [
            "Fasilitas Kesehatan Tingkat Pertama",
            "Fasilitas Kesehatan Rujukan Tingkat Lanjutan(FKRTL)",
            "Posyandu",
            "Faskes KB Induk",
            "Faskes KB Bergerak"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "KB Pasca Persalinan adalah pelayanan KB yang diberikan setelah persalinan sampai dengan…",
        pilihan: [
            "1 Tahun",
            "30 Hari",
            "1 Minggu",
            "42 Hari",
            "21 Hari"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Hasil pencatatan pelayanan KB dilaporkan secara berjenjang ke tingkat lebih atas, pada tingkat Provinsi yang harus dipersiapkan adalah ...",
        pilihan: [
            "Data entry online dan data entry offline",
            "Pelatihan atau Orientasi pada petugas pengelola data",
            "Menyiapkan daftar dan kode wilayah",
            "mendistribusikan sarana dan prasarana pencatatan dan pelaporan pelayanan KB",
            "Kartu pendaftaran tempat pelayanan KB dan Kartu peserta"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Setiap pengunjung baru tempat pelayanan KB wajib dibuatkan …",
        pilihan: [
            "Informed Consent",
            "K/0/KB/15",
            "R/II/KB/15",
            "K/IV/KB/15",
            "R/I/KB/15"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pada tingkat Kabupaten/Kota, penelaahan data potensi tempat pelayanan KB di wilayah binaan, dilakukan setiap..",
        pilihan: [
            "1 Bulan",
            "2 Minggu",
            "6 Bulan",
            "20 Hari",
            "1 Tahun"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Waktu paling singkat untuk penyimpanan data dan informasi pelayanan KB untuk data elektronik dan non-elektronik adalah…",
        pilihan: [
            "10 tahun dan 15 tahun",
            "2.5 tahun dan 1 tahun",
            "25 tahun dan 15 tahun",
            "25 tahun dan 10 tahun",
            "15 tahun dan 10 tahun"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Berikut ini yang bukan tujuan monitoring dan evaluasi pencatatan dan pelaporan pelayanan KB adalah…",
        pilihan: [
            "Untuk mengetahui kendala dan permasalahan yang terjadi di setiap tingkatan wilayah",
            "Untuk mengetahui alur dan mekanisme pencatatan dan pelaporan",
            "Untuk mengetahui tata cara pencatatan dan pelaporan instrumen",
            "Untuk mengetahui ketersediaan sarana prasarana",
            "Untuk mengetahui jumlah peserta KB Aktif dan Peserta KB baru disetiap wilayah"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Agar bimbingan tidak hanya dilaksanakan secara musiman atau incidental. maka sebaiknya dilakukan…",
        pilihan: [
            "Bimbingan terpadu",
            "Bimbingan Secara Bertingkat",
            "Bimbingan Secara Berencana",
            "Bimbingan Secara Berlanjut",
            "Bimbingan Komprehensif dan Menyeluruh"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Gambar formulir Kartu Pendapatan SDM Lini Lapangan (K/0/PKB/15) merupakan contoh dari ...",
        pilihan: [
            "Formulir (K/0/PKB/15)",
            "Formulir (K/0/PPLKB/15)",
            "Formulir K/0/PPKBD",
            "Formulir K/0/Sub PPKBD",
            "Formulir K/0/POK KB/15"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Gambar formulir Kelompok KB (POK-KB) merupakan contoh dari ...",
        pilihan: [
            "Formulir (K/0/PKB/15)",
            "Formulir (K/0/PPLKB/15)",
            "Formulir K/0/PPKBD",
            "Formulir K/0/Sub PPKBD",
            "Formulir K/0/POK KB/15"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Wadah organisasi di tingkat desa/kelurahan yang diketuai oleh seorang atau beberapa orang kader yang secara sukarela berperan aktif melaksanakan/mengelola Program Kependudukan, Keluarga Berencana, dan Pembangunan Keluarga di tingkat desa/kelurahan atau yang setara disebut juga..",
        pilihan: [
            "PPKBD (Pembantu Pembina Keluarga Berencana Desa)",
            "Institusi Masyarakat Pedesaan (IMP)",
            "Sub PPKBD (Sub Pembantu Pembina Keluarga Berencana Desa)",
            "Kelompok Keluarga Berencana (KB)",
            "Sub PPKBD"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Klasifikasi Kelompok Keluarga Berencana (KB) ada…",
        pilihan: [
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pengelolaan data rutin pelayanan KB mengacu pula pada prinsip “12 Kaidah Plus”. Dibawah kalimat ini merupakan prinsip “12 Kaidah Plus”, kecuali ...",
        pilihan: [
            "Data input sangat selektif",
            "Mengutamakan data proses dan keluaran",
            "Tidak cepat berubah",
            "Memperhatikan prinsip desentralisasi",
            "Dapat diidentifikasi"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Suatu kegiatan yang berhubungan dengan pencatatan, pengumpulan, pengolahan, analisis, serta penyajian yang berkaitan dengan data rutin pelayanan KB, dilakukan mulai dari tempat pelayanan KB sampai tingkat Pusat sesuai dengan sistem yang telah ditetapkan disebut ...",
        pilihan: [
            "Pengelolaan data rutin Pelayanan KB",
            "Badan Penyelenggara Jaminan Sosial Kesehatan",
            "Penyelenggara pelayanan KB dalam Jaminan Kesehatan Nasional",
            "Pencatatan data",
            "Pengolahan data"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Petugas yang ditunjuk oleh tempat pelayanan KB setempat untuk melakukan entri data potensi tempat pelayanan KB, hasil pelayanan KB, dan mutasi alokon baik secara offline maupun online disebut ...",
        pilihan: [
            "Petugas Entri Data",
            "Petugas Pencatat Data",
            "Petugas Pengolah Data",
            "Penyelenggara pelayanan KB",
            "Penyuluh BKKBN"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Petugas yang ditunjuk oleh tempat pelayanan KB setempat untuk melakukan pencatatan data potensi tempat pelayanan KB, hasil pelayanan KB, dan mutasi alokon ke dalam instrumen disebut ...",
        pilihan: [
            "Petugas Entri Data",
            "Petugas Pencatat Data",
            "Petugas Pengolah Data",
            "Penyelenggara pelayanan KB",
            "Penyuluh BKKBN"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Fasilitas yang mampu dan berwenang memberikan pelayanan Keluarga Berencana, berlokasi dan terintegrasi di fasilitas kesehatan tingkat pertama atau rujukan tingkat lanjutan, yang dikelola oleh pemerintah, pemerintah daerah, dan atau swasta disebut ...",
        pilihan: [
            "Fasilitas Kesehatan KB (Faskes KB)",
            "Faskes KB Statis",
            "Faskes KB Bergerak",
            "Fasilitas Kesehatan Tingkat Pertama (FKTP)",
            "Fasilitas Kesehatan Rujukan Tingkat Lanjutan (FKRTL)"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Fasilitas kesehatan yang dikunjungi oleh calon akseptor/klien untuk mendapatkan pelayanan KB yang diinginkan, terdiri atas fasilitas kesehatan tingkat pertama (FKTP) beserta jaringan dan jejaringnya, serta fasilitas kesehatan rujukan tingkat lanjut (FKRTL) disebut ...",
        pilihan: [
            "Fasilitas Kesehatan KB (Faskes KB)",
            "Faskes KB Statis",
            "Faskes KB Bergerak",
            "Fasilitas Kesehatan Tingkat Pertama (FKTP)",
            "Fasilitas Kesehatan Rujukan Tingkat Lanjutan (FKRTL)"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Tempat atau sarana penunjang pelayanan KB dimana wilayah sasarannya tidak memiliki akses pelayanan KB yang memadai atau memiliki faskes KB statis tetapi belum memenuhi standar pelayanan yang optimal disebut ...",
        pilihan: [
            "Fasilitas Kesehatan KB (Faskes KB)",
            "Faskes KB Statis",
            "Faskes KB Bergerak",
            "Fasilitas Kesehatan Tingkat Pertama (FKTP)",
            "Fasilitas Kesehatan Rujukan Tingkat Lanjutan (FKRTL)"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Fasilitas kesehatan berupa Puskesmas, praktik dokter, klinik pratama, rumah sakit kelas D pertama disebut ...",
        pilihan: [
            "Fasilitas Kesehatan KB (Faskes KB)",
            "Faskes KB Statis",
            "Faskes KB Bergerak",
            "Fasilitas Kesehatan Tingkat Pertama (FKTP)",
            "Fasilitas Kesehatan Rujukan Tingkat Lanjutan (FKRTL)"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Fasilitas kesehatan berupa klinik utama, rumah sakit umum, dan rumah sakit khusus disebut ...",
        pilihan: [
            "Fasilitas Kesehatan KB (Faskes KB)",
            "Faskes KB Statis",
            "Faskes KB Bergerak",
            "Fasilitas Kesehatan Tingkat Pertama (FKTP)",
            "Fasilitas Kesehatan Rujukan Tingkat Lanjutan (FKRTL)"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Klinik yang menyelenggarakan pelayanan medik spesialistik atau pelayanan medik dasar dan spesialistik disebut ...",
        pilihan: [
            "Klinik Utama",
            "Rumah Sakit Umum",
            "Rumah Sakit Khusus",
            "Rumah Sakit Kelas D Pratama",
            "Klinik Pratama"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Rumah sakit yang memberikan pelayanan kesehatan pada semua bidang dan jenis penyakit disebut ...",
        pilihan: [
            "Klinik Utama",
            "Rumah Sakit Umum",
            "Rumah Sakit Khusus",
            "Rumah Sakit Kelas D Pratama",
            "Klinik Pratama"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Rumah sakit yang memberikan pelayanan utama pada satu bidang atau satu jenis penyakit tertentu, berdasarkan disiplin ilmu, golongan umur, organ atau jenis penyakit disebut ...",
        pilihan: [
            "Klinik Utama",
            "Rumah Sakit Umum",
            "Rumah Sakit Khusus",
            "Rumah Sakit Kelas D Pratama",
            "Klinik Pratama"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Rumah sakit umum yang hanya menyediakan pelayanan perawatan kelas 3 (tiga) untuk peningkatan akses bagi masyarakat dalam rangka menjamin upaya pelayanan kesehatan perorangan yang memberikan pelayanan rawat inap, rawat jalan, gawat darurat, serta pelayanan penunjang lainnya disebut ...",
        pilihan: [
            "Klinik Utama",
            "Rumah Sakit Umum",
            "Rumah Sakit Khusus",
            "Rumah Sakit Kelas D Pratama",
            "Klinik Pratama"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Klinik yang menyelenggarakan pelayanan medik dasar disebut ...",
        pilihan: [
            "Klinik Utama",
            "Rumah Sakit Umum",
            "Praktik Dokter",
            "Puskesmas",
            "Klinik Pratama"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Dokter yang melaksanakan praktik secara mandiri/perorangan disebut ...",
        pilihan: [
            "Klinik Utama",
            "Rumah Sakit Umum",
            "Praktik Dokter",
            "Puskesmas",
            "Klinik Pratama"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Fasilitas pelayanan kesehatan yang menyelenggarakan upaya kesehatan masyarakat dan upaya kesehatan perseorangan tingkat pertama, dengan lebih mengutamakan upaya promotif dan preventif, untuk mencapai derajat kesehatan masyarakat yang setinggi-tingginya di wilayah kerjanya disebut ...",
        pilihan: [
            "Klinik Utama",
            "Rumah Sakit Umum",
            "Praktik Dokter",
            "Puskesmas",
            "Klinik Pratama"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Fasilitas Kesehatan Tingkat Pertama yang mempunyai wilayah kerja/binaan (jaringan/jejaring) yang memberikan pelayanan KB, seperti Pustu, Pusling, Poskesdes, Polindes, Praktik Dokter, dan Praktik Bidan disebut ...",
        pilihan: [
            "Fasilitas Kesehatan KB (Faskes KB)",
            "Faskes KB Statis",
            "Faskes KB Bergerak",
            "Fasilitas KB Induk",
            "Fasilitas Kesehatan Rujukan Tingkat Lanjutan (FKRTL)"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Lembar balik yang digunakan oleh petugas yang sudah terlatih pada saat konseling untuk membantu klien dalam mengambil keputusan ber-KB disebut ...",
        pilihan: [
            "Materi Kesehatan Reproduksi",
            "Buku Panduan Praktis Pelayanan Kontrasepsi (BP3K)",
            "Materi Konseling KB",
            "Buku Panduan Kesehatan reproduksi",
            "Alat Bantu Pengambilan Keputusan (ABPK)"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Panduan bagi provider baik di tingkat pelayanan dasar maupun tingkat pelayanan rujukan baik di instansi Pemerintah maupun Swasta dalam memberikan pelayanan keluarga berencana sesuai dengan standar minimal guna memenuhi pelayanan keluarga berencana berkualitas disebut ...",
        pilihan: [
            "Materi Kesehatan Reproduksi",
            "Buku Panduan Praktis Pelayanan Kontrasepsi (BP3K)",
            "Materi Konseling KB",
            "Buku Panduan Kesehatan reproduksi",
            "Alat Bantu Pengambilan Keputusan (ABPK)"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Bahan-bahan atau materi, seperti lembar balik, leaflet, pumflet, dan lain-lain, yang digunakan oleh provider atau kader dalam memberikan informasi terkait kesehatan reproduksi disebut ...",
        pilihan: [
            "Materi Kesehatan Reproduksi",
            "Buku Panduan Praktis Pelayanan Kontrasepsi (BP3K)",
            "Materi Konseling KB",
            "Buku Panduan Kesehatan reproduksi",
            "Alat Bantu Pengambilan Keputusan (ABPK)"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pelayanan KB yang diberikan setelah persalinan sampai dengan 42 hari disebut ...",
        pilihan: [
            "KB pasca persalinan",
            "KB pasca keguguran",
            "Pelayanan pemberian suntikan, pil, dan kondom",
            "Pelayanan pemasangan IUD atau implan",
            "Pelayanan pencabutan dan pemasangan IUD atau implan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pelayanan KB yang diberikan setelah mengalami keguguran sampai dengan 14 hari disebut ...",
        pilihan: [
            "KB pasca persalinan",
            "KB pasca keguguran",
            "Pelayanan pemberian suntikan, pil, dan kondom",
            "Pelayanan pemasangan IUD atau implan",
            "Pelayanan pencabutan dan pemasangan IUD atau implan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pelayanan kepada peserta KB dengan memberikan kontrasepsi suntikan, pil, dan kondom disebut ...",
        pilihan: [
            "KB pasca persalinan",
            "KB pasca keguguran",
            "Pelayanan pemberian suntikan, pil, dan kondom",
            "Pelayanan pemasangan IUD atau implan",
            "Pelayanan pencabutan dan pemasangan IUD atau implan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pelayanan kepada peserta KB dengan melakukan pemasangan kontrasepsi IUD atau implan disebut ...",
        pilihan: [
            "KB pasca persalinan",
            "KB pasca keguguran",
            "Pelayanan pemberian suntikan, pil, dan kondom",
            "Pelayanan pemasangan IUD atau implan",
            "Pelayanan pencabutan dan pemasangan IUD atau implan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pelayanan pencabutan IUD atau implan yang disebabkan habis masa pemakaian, selanjutnya dilakukan pemasangan ulang kontrasepsi IUD atau implan disebut ...",
        pilihan: [
            "KB pasca persalinan",
            "KB pasca keguguran",
            "Pelayanan pemberian suntikan, pil, dan kondom",
            "Pelayanan pemasangan IUD atau implan",
            "Pelayanan pencabutan dan pemasangan IUD atau implan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Di bawah ini merupakan perangkat teknologi untuk kebutuhan operasional pengumpulan dan pengolahan data yang disiapkan oleh Direktorat Teknologi Informasi dan Dokumentasi, kecuali ...",
        pilihan: [
            "Basis Data Keluarga Indonesia",
            "Manajemen wilayah",
            "Data entri online",
            "Data entri offline",
            "Manajemen data pendapatan penduduk"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Perwakilan BKKBN Provinsi, dalam hal ini Bidang Advokasi, Penggerakan dan Informasi, menyiapkan sarana dan prasarana pencatatan dan pelaporan pelayanan KB. Di bawah ini yang bukan merupakan sarana dan prasarana pencatatan dan pelaporan pelayanan KB adalah ...",
        pilihan: [
            "Kartu Pendaftaran Tempat Pelayanan KB",
            "Kartu Peserta KB",
            "Kartu Status Peserta KB",
            "Informed Consent",
            "Kartu Peserta Keluarga sejahtera"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Sarana dan prasarana yang digunakan untuk melakukan pendaftaran pertama bagi faskes KB/jaringan/jejaring baru pada saat didirikan, dan untuk pendaftaran ulang bagi semua faskes KB/jaringan/jejaring lama, yang dilakukan pada setiap awal tahun anggaran adalah ...",
        pilihan: [
            "Kartu pendaftaran tempat pelayanan",
            "kartu peserta KB",
            "Kartu status peserta KB",
            "Register pelayanan KB",
            "Register alat dan obat kontrasepsi"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Sarana dan prasarana yang diberikan oleh faskes KB/jaringan/jejaring kepada peserta KB dan digunakan sebagai tanda pengenal dan bukti diri sebagai peserta KB disebut ...",
        pilihan: [
            "Kartu pendaftaran tempat pelayanan",
            "kartu peserta KB",
            "Kartu status peserta KB",
            "Register pelayanan KB",
            "Register alat dan obat kontrasepsi"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Sarana dan prasarana yang digunakan untuk mencatat identitas diri, catatan medik hasil skrining dalam pelayanan, dan pemilihan penggunaan alat/obat/cara kontrasepsi yang tepat bagi peserta KB disebut ...",
        pilihan: [
            "Kartu pendaftaran tempat pelayanan",
            "kartu peserta KB",
            "Kartu status peserta KB",
            "Register pelayanan KB",
            "Register alat dan obat kontrasepsi"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Sarana dan prasarana yang digunakan oleh faskes KB/jaringan/jejaring untuk mencatat setiap hari pelayanan KB yang diberikan kepada Pasangan Usia Subur (PUS), yang datang untuk menjadi peserta KB baru atau peserta KB lama yang datang berkunjung ulang di faskes KB tersebut disebut ...",
        pilihan: [
            "Kartu pendaftaran tempat pelayanan",
            "kartu peserta KB",
            "Kartu status peserta KB",
            "Register pelayanan KB",
            "Register alat dan obat kontrasepsi"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Sarana dan prasarana yang digunakan oleh faskes KB/jaringan/jejaring untuk mencatat setiap hari mutasi alokon, baik saldo awal bulan, penerimaan, pengeluaran, serta saldo akhir bulan dari semua jenis alat dan obat kontrasepsi disebut ...",
        pilihan: [
            "Kartu pendaftaran tempat pelayanan",
            "Kartu peserta KB",
            "Kartu status peserta KB",
            "Register pelayanan KB",
            "Register alat dan obat kontrasepsi"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Tujuan dari konseling adalah ...",
        pilihan: [
            "Membantu klien agar dapat mengambil keputusan dalam menyelesaikan permasalahannya",
            "Memberikan pemahaman yang komprehensif kepada klien",
            "Memberikan penekanan pada klien mengenai hal hal yang baik atau buruk",
            "Mengajak klien mengikuti apa yang diusulkan oleh petugas",
            "Memberikan klien berpikir mengenai hal baik dan buruk yang terjadi dalam hidupnya"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Tujuan dari KIE adalah ...",
        pilihan: [
            "Membantu klien agar dapat mengambil keputusan dalam menyelesaikan permasalahannya",
            "Memberikan pemahaman yang komprehensif kepada klien",
            "Memberikan penekanan pada klien mengenai hal hal yang baik atau buruk",
            "Mengajak klien mengikuti apa yang diusulkan oleh petugas",
            "Memberikan klien berpikir mengenai hal baik dan buruk yang terjadi dalam hidupnya"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Di bawah ini yang bukan merupakan syarat dalam melakukan KIP/Konseling adalah ...",
        pilihan: [
            "Memperlakukan klien dengan baik agar timbul rasa percaya",
            "Hadirkan interaksi yang hangat antar petugas dan klien",
            "Bantu klien untuk mengerti hal-hal yang belum dia pahami",
            "Berikan klien informasi yang diperlukan",
            "Berikan kesempatan kepada klien untuk memecahkan masalahnya sendiri"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Proses pemberian bantuan yang dilakukan seseorang (konselor) kepada orang lain (klien) dalam membuat suatu keputusan atau memecahkan masalah melalui pemahaman tentang fakta-fakta dan perasaan-perasaan yang terlibat di dalamnya merupakan definisi dari …",
        pilihan: [
            "KIP/Konselor",
            "Advokasi",
            "KIE",
            "Nasihat",
            "Motivasi"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Tingkatan ketrampilan dalam KIP/Konseling yang terakhir adalah ...",
        pilihan: [
            "Keterampilan mendengarkan",
            "Keterampilan bertanya",
            "Membantu klien mengambil keputusan",
            "Membantu klien melakukan refleksi prasaan",
            "Keterampilan observasi dan memantapkan hubungan yang baik"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Tingkatan ketrampilan dalam KIP/Konseling yang pertama adalah ...",
        pilihan: [
            "Keterampilan mendengarkan",
            "Keterampilan bertanya",
            "Membantu klien mengambil keputusan",
            "Membantu klien melakukan refleksi prasaan",
            "Keterampilan observasi dan memantapkan hubungan yang baik"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Di bawah ini merupakan jenis-jenis pertanyaan yang direkomendasikan dalam KIP/Konseling, kecuali ...",
        pilihan: [
            "Pertanyaan tertutup",
            "Pertanyaan terbuka",
            "Pertanyaan menyeluruh",
            "Pertanyaan mendalam",
            "Pertanyaan mengarahkan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Di bawah ini merupakan faktor yang dapat mempengaruhi pengambilan keputusan, kecuali ...",
        pilihan: [
            "Rasio/akal",
            "Hubungan interpersonal",
            "Kecerdasan",
            "Kondisi Fisik",
            "Kondisi Struktural"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Konselor dapat mengikuti alur proses 4K untuk mengambil keputusan yang baik dalam KIP/Konseling, salah satu alurnya adalah ...",
        pilihan: [
            "Kematangan",
            "Keberhasilan",
            "Konsekuensi",
            "Kesiapan",
            "Kegigihan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Di bawah ini yang bukan merupakan tipe pengambilan keputusan adalah ...",
        pilihan: [
            "Pengambilan keputusan intuitif",
            "Pengambilan keputusan yang terpaksa",
            "Pengambilan keputusan yang reaktif",
            "Pengambilan keputusan yang ditangguhkan",
            "Pengambilan keputusan yang subjektif"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Konseling KB memiliki 3 persyaratan dalam pelaksanaannya, yaitu ...",
        pilihan: [
            "Bahagia, sejahtera, dan Sehat",
            "Suka rela, bahagia, dan sehat",
            "Sukarela, bahagia, dan sejahtera",
            "Bahagia, sehat, dan bermanfaat",
            "Bermanfaat, sejahtera, dan bahagia"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Petugas konseling KB harus memenuhi beberapa persyaratan untuk bisa melaksanakan tugasnya, di antaranya ...",
        pilihan: [
            "Mengetahui Visi dan Misi BKKBN",
            "Mengetahui tujuan KB",
            "Mempunyai pengetahuan dan pemahaman tentang program KKB dan makna dari Keluarga Kecil Bahagia Sejahtera",
            "Memahami kondisi ekonomi peserta KB",
            "Berusaha menjalin relasi yang baik dengan peserta KB"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Sebagai konselor, PKB dalam pelaksanaan konseling haruslah memperhatikan hak-hak klien. Di bawah ini yang bukan merupakan hak-hak klien adalah ...",
        pilihan: [
            "Hak informasi",
            "Hak memilih",
            "Hak berpendapat",
            "Hak kemanusiaan",
            "Hak keamanan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Hak klien untuk memperoleh kebebasan, keamanan, dan perlindungan dalam pelayanan KB disebut ...",
        pilihan: [
            "Hak memilih",
            "Hak keselamatan",
            "Hak kebebasan",
            "Hak kenyamanan",
            "Hak Harkat Martabat"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Hak klien untuk mendapatkan jaminan bahwa informasi pribadi yang diberikan akan dirahasiakan disebut ...",
        pilihan: [
            "Hak privasi",
            "Hak harkat martabat",
            "Hak kerahasiaan",
            "Hak keamanan",
            "Hak akses"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Hak klien untuk memperoleh pelayanan tanpa membedakan jenis kelamin, agama, kepercayaan, suku, status perkawinan dan lokasi disebut ...",
        pilihan: [
            "Hak memutuskan",
            "Hak akses",
            "Hak kebebasan",
            "Hak kenyamanan",
            "Hak keseimbangan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Hak klien untuk menyampaikan pendapat secara bebas disebut ...",
        pilihan: [
            "Hak kebebasan",
            "Hak memilih",
            "Hak memutuskan",
            "Hak akses",
            "Hak berpendapat"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Suatu proses dimana seseorang membantu orang lain dalam membuat keputusan atau mencari jalan untuk mengatasi masalah, melalui pemahaman tentang fakta dan perasaan yang terlibat di dalamnya adalah pengertian dari ...",
        pilihan: [
            "KIE",
            "Nasihat",
            "Pengarahan",
            "Konseling",
            "Motivasi"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Kolom yang tidak ada dalam Formulir Pengambilan Keputusan (4K) adalah ...",
        pilihan: [
            "Kondisi Klien",
            "Status Pernikahan",
            "Daftar Kehendak",
            "Konsekuensi",
            "Keputusan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Terdapat tujuh langkah persiapan konseling KB, langkah selanjutnya setelah mengetahui \"apa masalahnya?\" adalah ...",
        pilihan: [
            "Apa tujuan yang ingin diperoleh dengan pemberian konseling, hasil apa yang diharapkan dari konseling?",
            "Siapa yang akan dihadapi?",
            "Di mana tempatnya dan berapa lama waktunya?",
            "Bagaimana cara membicarakannya?",
            "Bagaimana menilai hasil konseling?"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Langkah Persiapan Konseling KB yang terakhir (ke tujuh) adalah ...",
        pilihan: [
            "Bagaimana cara membicarakannya?",
            "Di mana tempatnya dan berapa lama waktunya?",
            "Apa bahan-bahan yang diperlukan untuk menunjang konseling?",
            "Bagaimana menilai hasil konseling?",
            "Siapa yang terlibat dalam penilaian konseling?"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Suatu usaha sistematis dan terorganisir untuk mempengaruhi dan mendesakkan terjadinya perubahan dalam kebijakan publik secara bertahap maju disebut ...",
        pilihan: [
            "KIE",
            "Penyuluhan",
            "Advokasi",
            "KIP",
            "Konseling"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "KIE adalah …",
        pilihan: [
            "Media atau cara yang digunakan dalam rangka mencapai suatu tujuan tertentu",
            "Suatu kegiatan dimana terjadi proses komunikasi dan edukasi dengan penyebaran informasi",
            "Proses penyampaian isi pesan dari seseorang kepada pihak lain untuk mendapatkan tanggapan, Informasi sebagai data dan fakta untuk diketahui dan dimanfaatkan oleh siapa saja",
            "Langkah untuk merekomendasikan gagasan kepada orang lain atau menyampaikan suatu issu penting untuk dapat diperhatikan masyarakat",
            "Aksi strategis yang ditujukan untuk menciptakan kebijakan publik yang bermanfaat bagi masyarakat"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Suatu proses penyampaian isi pesan dari seseorang kepada pihak lain untuk mendapatkan tanggapan merupakan definisi dari …",
        pilihan: [
            "KIE",
            "Informasi",
            "Komunikasi",
            "Edukasi",
            "Advokasi"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pembuat kebijakan publik, pembuat opini publik, mitra kerja, dan penentang merupakan sasaran dari kegiatan …",
        pilihan: [
            "Advokasi",
            "KIE/Penyuluhan",
            "Konseling",
            "Pembinaan IMP",
            "Edukasi KB"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Individu, keluarga, dan masyarakat merupakan sasaran dari kegiatan …",
        pilihan: [
            "Advokasi",
            "KIE/Penyuluhan",
            "Konseling",
            "Pembinaan IMP",
            "Edukasi KB"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Data, Sumber Daya, Tujuan, Aliansi merupakan beberapa komponen dari kegiatan ...",
        pilihan: [
            "KIE/Penyuluhan",
            "Konseling",
            "Pembinaan IMP",
            "Advokasi",
            "Edukasi KB"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Jenis advokasi yang dilakukan pada skala lokal dan bahkan sangat pribadi adalah …",
        pilihan: [
            "Advokasi diri",
            "Advokasi kasus",
            "Advokasi kelas",
            "Advokasi masyarakat",
            "Advokasi individu"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Jenis advokasi yang dilakukan sebagai proses pendampingan terhadap orang atau kelompok yang belum memiliki kemampuan membela diri dan kelompoknya adalah ...",
        pilihan: [
            "Advokasi diri",
            "Advokasi kasus",
            "Advokasi kelas",
            "Advokasi masyarakat",
            "Advokasi individu"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Jenis advokasi yang mendesakkan sebuah kebijakan publik atau kepentingan satu kelompok masyarakat dengan tujuan akhir terwujudnya perubahan sistematik yang berujung pada lahirnya produk adalah …",
        pilihan: [
            "Advokasi diri",
            "Advokasi kasus",
            "Advokasi kelas",
            "Advokasi masyarakat",
            "Advokasi individu"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Jenis KIE yang merupakan proses KIE timbal balik secara langsung antara petugas KIE dengan individu sasaran program GENRE disebut …",
        pilihan: [
            "KIE individu",
            "KIE kelompok",
            "KIE diri",
            "KIE masyarakat",
            "KIE massa"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Jenis KIE yang merupakan suatu proses KIE timbal balik secara langsung antara petugas KIE dengan kelompok (2-15 orang) disebut ...",
        pilihan: [
            "KIE individu",
            "KIE kelompok",
            "KIE kelas",
            "KIE masyarakat",
            "KIE massa"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Jenis KIE yang merupakan suatu proses KIE tentang program GENRE yang dapat dilakukan secara langsung maupun tidak langsung kepada masyarakat dalam jumlah yang besar disebut …",
        pilihan: [
            "KIE individu",
            "KIE kelompok",
            "KIE kelas",
            "KIE masyarakat",
            "KIE massa"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Wadah masyarakat yang berperan serta dalam pengelolaan Program KKBPK di tingkat Desa/Kelurahan, Dusun/RW dan RT adalah ...",
        pilihan: [
            "Pembantu Pembina Program KB",
            "Kelompok Keluarga Berencana",
            "Penyuluh KKBPK",
            "Petugas Lapangan KKBPK",
            "Institusi Masyarakat Pedesaan/Perkotaan (IMP)"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "PPKBD adalah ...",
        pilihan: [
            "Kader dalam wadah organisasi yang berperan aktif dalam melaksanakan dan mengelola program KKBPK tingkat Dusun",
            "Kader dalam wadah organisasi yang berperan aktif dalam melaksanakan dan mengelola program KKBPK tingkat RT",
            "Kader dalam wadah organisasi yang berperan aktif dalam melaksanakan dan mengelola program KKBPK tingkat RW",
            "Kader dalam wadah organisasi yang berperan aktif dalam melaksanakan dan mengelola program KKBPK tingkat Desa/Kelurahan",
            "Kader dalam wadah organisasi yang berperan aktif dalam melaksanakan dan mengelola program KKBPK tingkat Kota"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pembinaan Peserta KB Aktif, Rujukan, UPPKS, dan Ketahanan Keluarga merupakan pelayanan kegiatan KB dalam ...",
        pilihan: [
            "IMP klasifikasi dasar",
            "IMP klasifikasi berkembang",
            "IMP klasifikasi mandiri",
            "IMP klasifikasi individu",
            "IMP klasifikasi sosial"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "IMP klasifikasi berkembang melaksanakan upaya kemandirian sebanyak ...",
        pilihan: [
            "Satu kegiatan",
            "Dua kegiatan",
            "Tiga kegiatan",
            "Empat kegiatan",
            "Lima kegiatan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Contoh kegiatan pembinaan IMP secara langsung adalah ...",
        pilihan: [
            "Studi banding ke daerah yang lebih maju dan berpengalaman",
            "Kunjungan kepada Institusi Masyarakat Pedesaan/Perkotaan setiap periode tertentu",
            "Mengadakan lomba-lomba seperti pemilihan IMP Teladan",
            "Membuat booklet, leaflet, dan media lain yang memuat upaya pembinaan untuk mengembangkan institusi masyarakat",
            "Menganalisa feed back/umpan balik dari OPD KB sebagai upaya pembinaan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Keterampilan untuk mengumpulkan data basis meliputi ...",
        pilihan: [
            "Data kependudukan, data keluarga dinamis, dan data keluarga berencana",
            "Data kependudukan, data keluarga berencana, dan data keluarga sejahtera",
            "Data keluarga berencana, data keluarga sejahtera, dan data keluarga dinamis",
            "Data keluarga berencana, data keluarga kependudukan, data keluarga dinamis, dan data keluarga sejahtera",
            "Data kependudukan, data keluarga sejahtera, dan data keluarga dinamis"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Di bawah ini merupakan data-data kependudukan, kecuali ...",
        pilihan: [
            "Jumlah anak",
            "Jumlah peserta KB",
            "Jumlah PUS",
            "Jumlah Kepala Keluarga",
            "Daftar sasaran PUS yang belum ber-KB"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kegiatan pembangunan dalam keterampilan untuk membina kelompok kegiatan BKL di antaranya ...",
        pilihan: [
            "Penyuluhan",
            "Temu keluarga",
            "Kunjungan rumah",
            "Bina kesehatan fisik",
            "Pencatatan dan pelaporan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Materi pembinaan IMP memuat aspek-aspek di bawah ini, kecuali ...",
        pilihan: [
            "Aspek pengetahuan",
            "Aspek keterampilan",
            "Aspek semangat kerja",
            "Aspek peningkatan kemandirian ekonomi IMP",
            "Aspek sikap"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Di bawah ini merupakan hal-hal yang dapat dilakukan untuk meningkatkan peran IMP dalam masyarakat, kecuali ...",
        pilihan: [
            "Pelayanan",
            "Penyetaraan",
            "Pengorganisasian",
            "Kemandirian",
            "Advokasi, KIE, dan konseling"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Salah satu upaya kemandirian yang dilakukan oleh IMP adalah ...",
        pilihan: [
            "Memfasilitasi pelayanan kontrasepsi",
            "Mengarahkan kegiatan karang taruna",
            "Melakukan pencatatan kegiatan secara rutin",
            "Pembinaan ketahanan keluarga",
            "Memfasilitasi keluarga untuk hadir dalam pertemuan kelompok UPPKS"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pelayanan kegiatan dalam peran IMP di antaranya berkaitan dengan ...",
        pilihan: [
            "Pendanaan kelompok melalui iuran, jimpitan, dan penjualan produk setempat",
            "Melakukan pencatatan secara rutin dan ikut melaksanakan pengambilan data keluarga yang dilakukan satu tahun sekali",
            "Meningkatkan pengetahuan dan keterampilan keluarga lansia",
            "Pembinaan ketahanan keluarga melalui BKB, BKR, dan BKL",
            "Memfasilitasi pelayanan kontrasepsi"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Prosedur tahapan kegiatan yang harus dilakukan oleh petugas dalam mekanisme pembinaan IMP yaitu ...",
        pilihan: [
            "Pelaksanaan, pengawasan, evaluasi",
            "Perencanaan, pelaksanaan, pengawasan",
            "Perencanaan, pelaksanaan, pembinaan",
            "Pelaksanaan, pembinaan, evaluasi",
            "Pembinaan, pelaksanaan, pengawasan, evaluasi"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Langkah-langkah yang dilakukan dalam perencanaan yaitu ...",
        pilihan: [
            "Identifikasi, klasifikasi, dan pendataan",
            "Klasifikasi, identifikasi, dan pendataan",
            "Pendataan, klasifikasi, dan identifikasi",
            "Identifikasi, pendataan, klasifikasi",
            "Pendataan, identifikasi, klasifikasi"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Kelompok yang berperan aktif dalam merencanakan, melaksanakan, dan mengembangkan program KKBPK di tingkat Desa/Kelurahan adalah …",
        pilihan: [
            "Pojaknis Pendidikan dan Penerangan Program KB",
            "Pojaknis KB-Kesehatan",
            "Pojaknis Ekonomi Produktif",
            "Pojaknis Kebudayaan",
            "Pojaknis Keagamaan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Kelompok yang berperan aktif dalam merencanakan, melaksanakan, dan mengembangkan kegiatan pelayanan KB dan kesehatan di tingkat kelurahan adalah …",
        pilihan: [
            "Pojaknis Kesejahteraan Sosial",
            "Pojaknis KB-Kesehatan",
            "Pojaknis Ekonomi Produktif",
            "Pojaknis Pelayanan",
            "Pojaknis Keagamaan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kelompok yang berperan aktif dalam merencanakan, melaksanakan, dan mengembangkan kegiatan ekonomi di tingkat kelurahan adalah …",
        pilihan: [
            "Pojaknis Pemberdayaan Ekonomi",
            "Pojaknis Kesejahteraan Sosial",
            "Pojaknis Ekonomi Produktif",
            "Pojaknis Kebudayaan",
            "Pojaknis Pembangunan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kelompok Kegiatan (Poktan) dibentuk dan dikembangkan oleh …",
        pilihan: [
            "KKBPK",
            "PPKBD",
            "Sub PPKBD",
            "Kelompok KB",
            "Semua benar"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Di bawah ini merupakan kelompok-Kelompok Kegiatan (Poktan), kecuali ...",
        pilihan: [
            "Bina Keluarga Balita (BKB)",
            "Bina Keluarga Remaja (BKR)",
            "IMP",
            "Bina Keluarga Lansia (BKL)",
            "serta Usaha Peningkatan Pendapatan Keluarga Sejahtera (UPPKS)"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Untuk melaksanakan Kebijakan Bina Lini Lapangan, maka strategi yang diperlukan adalah sebagai berikut, kecuali ...",
        pilihan: [
            "Peningkatan komitmen dan peran serta stakeholders dalam Program KKBPK di tingkat desa/kelurahan.",
            "Pengembangan dan penguatan mitra kerja dalam penggerakan Program KKBPK di tingkat desa/kelurahan.",
            "Peningkatan kepedulian dan peran serta masyarakat dalam Program KKBPK di tingkat desa/kelurahan.",
            "Pemantapan mekanisme operasional lini lapangan dalam rangka penyelenggaraan Program KKBPK.",
            "Peningkatan lapangan pekerjaan demi tercipta keluarga yang bahagia dan sejahtera"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "PPKBD langsung membina anggota, merupakan pola pembinaan keluarga yang ke ...",
        pilihan: [
            "I",
            "II",
            "III",
            "IV",
            "V"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "PPKBD membina Sub PPKBD dan Sub PPKBD membina anggota keluarga/PUS/Peserta KB, merupakan pola pembinaan keluarga yang ke ...",
        pilihan: [
            "I",
            "II",
            "III",
            "IV",
            "V"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "PPKBD membina Sub PPKBD, kemudian Sub PPKBD membina kelompok KB, Kelompok KB membina Dasa Wisma dan Dasa Wisma membina anggota keluarga/PUS/ Peserta KB, merupakan pola pembinaan keluarga yang ke ...",
        pilihan: [
            "I",
            "II",
            "III",
            "IV",
            "V"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "PPKBD membina Sub PPKBD, kemudian Sub PPKBD membina Kelompok KB, Kelompok KB membina anggota keluarga PUS/Peserta KB, merupakan pola pembinaan keluarga yang ke ...",
        pilihan: [
            "I",
            "II",
            "III",
            "IV",
            "V"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "PPKBD membina Sub PPKBD, kemudian Sub PPKBD membina kelompok KB, Kelompok KB membina Dasa Wisma dan Dasa Wisma membina keluarga dan keluarga membina anggota keluarga/PUS/Peserta KB, merupakan pola pembinaan keluarga yang ke ...",
        pilihan: [
            "I",
            "II",
            "III",
            "IV",
            "V"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Di bawah ini merupakan data-data yang diperlukan untuk dapat mengembangkan kuantitas IMP, kecuali ...",
        pilihan: [
            "Nama Institusi",
            "Jumlah anggota keluarga",
            "Jumlah Desa / Kelurahan.",
            "Jumlah Dukuh / RK / RW.",
            "Jumlah RT"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Di bawah ini merupakan peran bakti IMP, kecuali ...",
        pilihan: [
            "Pelayanan Kegiatan",
            "KIE",
            "Konseling",
            "Kemandirian",
            "Advokasi"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Di bawah ini merupakan jenis pembinaan secara tidak langsung, kecuali …",
        pilihan: [
            "Studi banding ke daerah yang lebih maju dan berpengalaman",
            "Lomba-lomba seperti lomba IMP",
            "Kunjungan kepada institusi masyarakat pedesaan/perkotaan",
            "Feed back/umpan balik PPLKB dan PKB/PLKB untuk analisa sebagai dasar upaya pembinaan",
            "Leaflet"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pengetahuan yang harus dikuasai oleh PPKBD, Sub PPKBD, Kelompok KB diantaranya Kelompok KB Pria dan Poktan tentang program Kependudukan, Keluarga Berencana dan Pembangunan Keluarga, meliputi hal-hal di bawah ini, kecuali ...",
        pilihan: [
            "Pengetahuan yang menyangkut kesehatan reproduksi",
            "Pengetahuan yang menyangkut pembangunan keluarga",
            "Pengetahuan tentang kependudukan",
            "Pengetahuan tentang kehidupan perekonomian",
            "Pengetahuan tentang pola rasional penggunaan alat kontrasepsi"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Keterampilan yang perlu dimiliki dalam menjalankan program BKB di antaranya adalah ...",
        pilihan: [
            "Keterampilan untuk melakukan kegiatan layanan penyuluhan bagi keluarga yang punya anak remaja untuk menjadi anggota.",
            "Ketrampilan mengajak ibu-ibu anggota BKR untuk mengikuti perkembangan anak remajanya dan mulai mengajarkan tentang pentingnya perncanaan kehidupan berkeluarga bagi remaja.",
            "Keterampilan untuk melakukan kegiatan layanan penyuluhan bagi orangtua/keluarga tentang pengasuhan dan pembinaan tumbuh kembang anak usia dini",
            "Keterampilan untuk melakukan kegiatan layanan penyuluhan terhadap keluarga yang mempunyai lansia dan keluarga lansia untuk peduli lansia melalui peduli dimensi lansia tangguh",
            "Keterampilan untuk mengajak kaum ibu yang mengganggur dirumah untuk melakukan usaha"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Keterampilan yang perlu dimiliki dalam menjalankan program BKR salah satunya adalah ...",
        pilihan: [
            "Keterampilan untuk melakukan kegiatan layanan penyuluhan bagi keluarga yang punya anak remaja untuk menjadi anggota.",
            "Ketrampilan mengajak ibu-ibu anggota BKR untuk mengikuti perkembangan anak remajanya dan mulai mengajarkan tentang pentingnya perncanaan kehidupan berkeluarga bagi remaja.",
            "Keterampilan untuk melakukan kegiatan layanan penyuluhan bagi orangtua/keluarga tentang pengasuhan dan pembinaan tumbuh kembang anak usia dini",
            "Keterampilan untuk melakukan kegiatan layanan penyuluhan terhadap keluarga yang mempunyai lansia dan keluarga lansia untuk peduli lansia melalui peduli dimensi lansia Tangguh",
            "Keterampilan untuk mengajak kaum ibu yang mengganggur dirumah untuk melakukan usaha"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Keterampilan yang perlu dimiliki dalam menjalankan Kegiatan pemberdayaan Ekonomi Keluarga Sejahtera salah satunya adalah ...",
        pilihan: [
            "Keterampilan untuk melakukan kegiatan layanan penyuluhan bagi keluarga yang punya anak remaja untuk menjadi anggota.",
            "Ketrampilan mengajak ibu-ibu anggota BKR untuk mengikuti perkembangan anak remajanya dan mulai mengajarkan tentang pentingnya perncanaan kehidupan berkeluarga bagi remaja.",
            "Keterampilan untuk melakukan kegiatan layanan penyuluhan bagi orang tua/keluarga tentang pengasuhan dan pembinaan tumbuh kembang anak usia dini",
            "Keterampilan untuk melakukan kegiatan layanan penyuluhan terhadap keluarga yang mempunyai lansia dan keluarga lansia untuk peduli lansia melalui peduli dimensi lansia Tangguh",
            "Keterampilan untuk mengajak kaum ibu yang mengganggur dirumah untuk melakukan usaha dan menjadi anggota kelompok kegiatan UPPKS"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Di bawah ini merupakan keterampilan yang harus dimiliki untuk melaksanakan kegiatan pemberdayaan ekonomi keluarga sejahtera, kecuali ...",
        pilihan: [
            "Keterampilan untuk membentuk kelompok UPPKS",
            "Keterampilan untuk mengajak kaum ibu yang mengganggur dirumah untuk melakukan usaha dan menjadi anggota kelompok kegiatan UPPKS",
            "Keterampilan menghimpun ibu-ibu sasaran, yang terdiri dari keluarga yang sedang merawat orang tuanya atau yang memiliki anggota keluaraga yang sudah lansia",
            "Keterampilan untuk membina dinamika kelompok anggota UPPKS.",
            "Keterampilan untuk mengajak Keluarga PUS untuk menjadi anggota UPPKS"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Di bawah ini merupakan keterampilan yang harus dimiliki untuk melaksanakan program BKL, kecuali ...",
        pilihan: [
            "Keterampilan untuk membentuk kelompok kegiatan BKL",
            "Keterampilan untuk mengajak kaum ibu yang mengganggur dirumah untuk melakukan usaha",
            "Keterampilan untuk melakukan kegiatan layanan penyuluhan terhadap keluarga yang mempunyai lansia dan keluarga lansia untuk peduli lansia melalui peduli dimensi lansia tangguh.",
            "Keterampilan untuk membina kelompok kegiatan BKL, agar tetap melaksanakan kegiatan",
            "Keterampilan mengajak anggota BKL menjadi motivator KB."
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Dibawah ini yang termasuk tugas jabatan fungsioanal Penyuluh KB adalah",
        pilihan: [
            "Melatih dan Mengembangkan",
            "Penyuluhan dan Penggerakan",
            "Penggerakan dan Non Penyuluhan",
            "Pelayanan Medis dan Penyuluhan",
            "Penggerakan dan Pelaporan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Jabatan fungsional Penyuluh KB termasuk dalam klasifikasi/rumpun ilmu : ….",
        pilihan: [
            "MIPA",
            "Sosial",
            "Pendidikan",
            "Demografi",
            "Keluarga"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Jabatan fungsional Penyuluh KB memiliki 2 (dua) kategori, yaitu",
        pilihan: [
            "Keterampilan dan Keahlian",
            "Dasar dan Berkembang",
            "Penyelia dan Ahli Pertama",
            "Trampil dan Mahir",
            "Keterampilan dan Ahli Utama"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Jenjang jabatan fungsional Penyuluh KB kategori keterampilan adalah",
        pilihan: [
            "Penyuluh KB Pertama",
            "Penyuluh KB Penyelia",
            "Penyuluh KB Muda",
            "Penyuluh KB Madya",
            "Penyuluh KB Utama"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Jenjang jabatan Penyuluh KB kategori keahlian adalah",
        pilihan: [
            "Penyuluh KB Penyelia",
            "Penyuluh KB Mahir",
            "Penyuluh KB Tinggi",
            "Penyuluh KB Muda",
            "Penyuluh KB Terampil"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Unsur kegiatan tugas jabatan fungsional Penyuluh KB yang dapat dinilai angka kreditnya terdiri atas :",
        pilihan: [
            "Unsur Penting",
            "Unsur Prioritas",
            "Unsur Dasar",
            "Unsur Penguat",
            "Unsur Utama"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Sub unsur dalam kegiatan unsur utama jabatan fungsional Penyuluh KB yaitu",
        pilihan: [
            "Pengajar",
            "Anggota Organisasi Profesi",
            "Pendidikan dan Pelatihan",
            "Penghargaan",
            "Pelatih"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Sub Unsur penunjang dalam kegiatan unsur penunjang jabatan fungsional Penyuluh KB yaitu",
        pilihan: [
            "Pendidikan",
            "Karya Tulis Ilmiah",
            "Peran Serta Seminar",
            "Pengembangan Profesi",
            "Penyusunan Buku"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Salah satu uraian kegiatan jenjang jabatan Penyuluh KB Terampil yaitu",
        pilihan: [
            "Mengolah hasil pendataan keluarga di tingkat daerah kabupaten/kota",
            "Membuat peta pendataan IMP di tingkat desa/kelurahan",
            "Membuat peta wilayah kerja di tingkat desa/kelurahan",
            "Membuat peta pendataan IMP di tingkat daerah kabupaten/kota",
            "Menganalisis materi penyusunan panduan teknis Pelayanan KKBPK di tingkat daerah provinsi"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Salah satu uraian kegiatan jenjang jabatan Penyuluh KB Mahir yaitu",
        pilihan: [
            "Menganalisis materi penyusunan panduan teknis Penggerakan KKBPK di tingkat daerah provinsi",
            "Melakukan evaluasi Program KKBPK di tingkat desa/kelurahan",
            "Melakukan penilaian lomba Program KKBPK di tingkat daerah provinsi",
            "Melaksanakan fasilitasi pelayanan Program KKBPK di tingkat daerah kabupaten/kota",
            "Membuat peta pendataan IMP di tingkat Rukun Warga"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Salah satu uraian kegiatan jenjang jabatan Penyuluh KB Penyelia yaitu",
        pilihan: [
            "Melakukan pembentukan Poktan Bina Keluarga Lansia (BKL)",
            "Melakukan KIE kelompok",
            "Melakukan sarasehan hasil pendataan di tingkat desa/kelurahan",
            "Membuat peta pendataan IMP di tingkat daerah kabupaten/kota",
            "Melaksanakan fasilitasi pelayanan KKBPK di tingkat kecamatan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Salah satu uraian kegiatan jenjang jabatan Penyuluh KB Ahli Pertama/Pertama yaitu",
        pilihan: [
            "Menyusun rencana kerja pendataan di tingkat desa/kelurahan",
            "Melakukan pengolahan data hasil pendataan di tingkat kecamatan",
            "Menyusun materi sosialisasi hasil pendataan di tingkat desa/kelurahan",
            "Mengolah hasil pendataan keluarga di tingkat daerah kabupaten/kota",
            "Monitoring dan evaluasi Program KKBPK di tingkat daerah kabupaten/kota"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Salah satu uraian kegiatan jenjang jabatan Penyuluh KB Ahli Muda/Muda yaitu",
        pilihan: [
            "Melakukan sarasehan hasil pendataan di tingkat desa/kelurahan",
            "Mengolah hasil pendataan keluarga di tingkat daerah kabupaten/kota",
            "Merancang kegiatan pameran KKBPK di tingkat kecamatan",
            "Melakukan advokasi ke tokoh informal di tingkat kecamatan",
            "Menyusun materi saresehan di tingkat daerah kabupaten/kota"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Salah satu uraian kegiatan jenjang jabatan Penyuluh KB Ahli Madya/Madya yaitu",
        pilihan: [
            "Melaksanakan fasilitasi pelayanan KKBPK di tingkat desa/kelurahan",
            "Melakukan KIE melalui media massa",
            "Melakukan penilaian lomba Program KKBPK di tingkat daerah kabupaten/kota",
            "Monitoring dan evaluasi Program KKBPK di tingkat daerah provinsi",
            "Menyiapkan konsep model pengembangan perencanaan Penyuluhan KB"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Salah satu uraian kegiatan jenjang jabatan Penyuluh KB Ahli Utama/Utama yaitu",
        pilihan: [
            "Menyiapkan konsep model pengembangan perencanaan Penyuluhan KB",
            "Merumuskan strategi penyuluhan KKBPK di tingkat nasional",
            "Menganalisis materi penyusunan panduan teknis Penyuluhan KKBPK di tingkat daerah provinsi",
            "Melakukan persiapan dalam pelaksanaan fasilitasi kemitraan dengan organisasi informal di tingkat daerah kabupaten/kota",
            "Menyusun materi rakor/raker Program KKBPK di tingkat daerah provinsi"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Salah satu hasil kerja Penyuluh KB Terampil adalah",
        pilihan: [
            "Laporan hasil KIE perorangan",
            "Laporan materi KIE",
            "Peta pendataan IMP di tingkat daerah kabupaten/kota KB",
            "Laporan hasil melaksanakan pembinaan Poktan kegiatan sosial lainnya di tingkat daerah kabupaten/kota",
            "Dokumen materi saresehan di tingkat daerah kabupaten/kota"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Salah satu hasil kerja Penyuluh KB Mahir adalah",
        pilihan: [
            "Dokumen hasil pengembangan media KIE berbasis teknologi informasi di tingkat daerah kabupaten/kota",
            "Dokumen hasil perencanaan Program KKBPK melalui musrenbang di tingkat desa/ kelurahan",
            "Laporan hasil persiapan fasilitasi pelayanan KKBPK di tingkat desa/kelurahan",
            "Laporan hasil monitoring dan evaluasi Program KKBPK di tingkat desa/kelurahan",
            "Laporan hasil pembinaan peserta KB per 10 (sepuluh) peserta"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Salah satu hasil kerja Penyuluh KB Penyelia adalah",
        pilihan: [
            "Laporan hasil koordinasi dengan tokoh informal di tingkat desa/kelurahan",
            "Laporan hasil evaluasi Program KKBPK di tingkat desa/kelurahan",
            "Laporan hasil melakukan KIE melalui media massa",
            "Laporan hasil pembinaan Poktan holistik integratif",
            "Laporan hasil pembinaan Poktan BKL di tingkat kecamatan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Salah satu hasil kerja Penyuluh KB Ahli Pertama/Pertama adalah",
        pilihan: [
            "Laporan hasil penilaian lomba Program KKBPK di tingkat daerah kabupaten/kota",
            "Laporan hasil melakukan KIE dengan MUPEN",
            "Laporan hasil fasilitasi kemitraan dengan organisasi informal di tingkat desa/kelurahan/kecamatan",
            "Dokumen hasil pendataan keluarga di tingkat daerah kabupaten/kota",
            "Laporan hasil penilaian lomba Program KKBPK di tingkat desa/kelurahan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Salah satu hasil kerja Penyuluh KB Ahli Muda/Muda adalah",
        pilihan: [
            "Peta pendataan IMP di tingkat daerah kabupaten/kota",
            "Rencana kerja mingguan Program KKBPK di wilayah binaan",
            "Laporan hasil pembinaan Poktan holistik integratif",
            "Dokumen hasil analisis materi penyusunan panduan teknis Pelayanan KKBPK di tingkat daerah provinsi",
            "Dokumen pengembangan media KIE di tingkat daerah provinsi"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Salah satu hasil kerja Penyuluh KB Ahli Madya/Madya adalah",
        pilihan: [
            "Dokumen hasil rumusan strategi penyuluhan KKBPK di tingkat nasional",
            "Laporan hasil persiapan fasilitasi pelayanan KKBPK di tingkat daerah provinsi",
            "Laporan hasil monitoring dan evaluasi Program KKBPK di tingkat nasional.",
            "Dokumen model pembinaan Program KKBPK di tingkat daerah provinsi/nasional",
            "Buku panduan teknis Penyuluhan KKBPK di tingkat daerah provinsi"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Salah satu hasil kerja Penyuluh KB Ahli Utama/Utama adalah",
        pilihan: [
            "Dokumen grand design Program KKBPK di tingkat daerah provinsi/nasional dengan melibatkan mitra",
            "Laporan hasil penilaian lomba Program KKBPK di tingkat daerah provinsi",
            "Dokumen pengembangan Program KKBPK di tingkat daerah kabupaten/kota",
            "Laporan fasilitasi Program KKBPK kepada PPKBD/sub-PPKBD/Poktan",
            "Laporan hasil evaluasi Program KKBPK di tingkat daerah kabupaten/kota"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB termasuk jabatan Aparatur Sipil Negara …",
        pilihan: [
            "Jabatan Administrasi",
            "Jabatan Fungsional",
            "Jabatan Pimpinan Tinggi",
            "Jabatan Pelaksana",
            "Jabatan Pengawas"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pendidikan terendah jabatan Penyuluh KB sesuai Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 21 Tahun 2018 adalah",
        pilihan: [
            "Strata I",
            "Strata II",
            "Diploma III",
            "SLTA",
            "Diploma IV"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Salah satu syarat promosi dalam jabatan fungsional Penyuluh KB adalah",
        pilihan: [
            "Strata II",
            "Ada rekomendasi dari pimpinan",
            "Angka Kredit terpenuhi satu semester",
            "Nilai prestasi kerja paling rendah bernilai sangat baik",
            "Mengikuti dan lulus uji kompetensi"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Salah satu kompetensi jabatan fungsional Penyuluh KB adalah",
        pilihan: [
            "Kompetensi Sosial Kultural",
            "Kompetensi Berpikir Strategis",
            "Kompetensi KIP/Konseling",
            "Kompetensi Kreatif dan Inovatif",
            "Kompetensi Teknis Komunikasi"
        ],
        jawaban: 2
    },
{
        pertanyaan: "Seorang ibu berusia 38 tahun dengan empat anak ingin berhenti hamil, tetapi takut nyeri saat pemasangan alat kontrasepsi. Tindakan Penyuluh KB yang paling tepat adalah ...",
        pilihan: [
            "Menyerahkan keputusan hanya kepada suami",
            "Menyarankan menunggu sampai anak terakhir dewasa",
            "Menghentikan konseling karena klien ragu",
            "Memaksa memasang IUD agar target tercapai",
            "Memberikan konseling tentang MKJP, termasuk metode kontrasepsi mantap, lalu merujuk sesuai pilihan klien"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Akseptor pil KB sering lupa minum pil dan hampir hamil lagi. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Mengonseling pilihan metode lain yang sesuai kebutuhan dan kondisi klien, termasuk MKJP",
            "Menyuruh klien mencari informasi sendiri",
            "Menyalahkan akseptor atas kelalaiannya",
            "Mengganti metode tanpa bertanya kepada klien",
            "Meminta klien berhenti ber-KB"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Sebagian warga menolak KB karena menganggap bertentangan dengan agama. Langkah terbaik Penyuluh KB adalah ...",
        pilihan: [
            "Menghentikan penyuluhan di wilayah itu",
            "Berkoordinasi dengan tokoh agama untuk menjelaskan KB sebagai pengaturan jarak kelahiran demi keluarga sehat",
            "Mengabaikan penolakan tersebut",
            "Menyatakan pandangan warga keliru",
            "Memaksa warga mengikuti program"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Seorang suami melarang istrinya menggunakan kontrasepsi. Tindakan Penyuluh KB yang paling tepat adalah ...",
        pilihan: [
            "Melaporkan suami ke aparat desa",
            "Menyarankan istri melawan suami",
            "Mengajak suami berdialog dan konseling bersama, menekankan peran dan tanggung jawab pria dalam KB",
            "Mendatangi istri secara diam-diam",
            "Menghapus nama keluarga itu dari sasaran"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Stok alat dan obat kontrasepsi (alokon) di faskes binaan menipis sebelum akhir bulan. Langkah Penyuluh KB adalah ...",
        pilihan: [
            "Menghentikan pelayanan KB sementara",
            "Berkoordinasi dengan pengelola logistik dan OPD-KB untuk permintaan atau redistribusi, serta melapor kepada atasan",
            "Membeli alokon sendiri dari apotek",
            "Menunggu sampai stok datang tanpa informasi",
            "Menyarankan akseptor berhenti ber-KB"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pasangan usia subur (PUS) dengan anak terakhir berusia 8 bulan ingin segera ber-KB setelah haid kembali. Penyuluh KB perlu memastikan terlebih dahulu ...",
        pilihan: [
            "Warna kemasan alokon",
            "Jumlah tetangga yang ber-KB",
            "Kondisi menyusui dan pilihan metode yang sesuai melalui konseling",
            "Merek alokon yang sedang populer",
            "Status pekerjaan suami"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kriteria \"4 Terlalu\" dalam kesehatan reproduksi meliputi ...",
        pilihan: [
            "Terlalu cepat, terlalu lambat, terlalu muda, terlalu tua",
            "Terlalu sering, terlalu jarang, terlalu muda, terlalu kaya",
            "Terlalu miskin, terlalu kaya, terlalu jauh, terlalu dekat",
            "Terlalu muda, terlalu tua, terlalu dekat, terlalu banyak",
            "Terlalu kurus, terlalu gemuk, terlalu tinggi, terlalu pendek"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Contoh metode kontrasepsi jangka panjang (MKJP) adalah ...",
        pilihan: [
            "Kalender dan senggama terputus",
            "Pil dan kondom",
            "Kondom dan suntik 3 bulan",
            "Suntik 1 bulan dan pil",
            "IUD, implan, MOW, dan MOP"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Dalam melakukan konseling KB, langkah pertama yang seharusnya dilakukan Penyuluh KB adalah ...",
        pilihan: [
            "Menyambut klien dengan ramah, membangun hubungan, dan menggali kebutuhan serta kondisi klien",
            "Membagikan brosur lalu pergi",
            "Menyampaikan target capaian kepada klien",
            "Langsung menawarkan satu metode unggulan",
            "Menyodorkan formulir persetujuan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Seorang akseptor implan mengeluh haid tidak teratur dan ingin mencabut alat. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Melarang pencabutan",
            "Mencabut sendiri implan tersebut",
            "Menyuruh akseptor memakai jamu",
            "Mengonseling bahwa gangguan haid dapat terjadi, dan menawarkan rujukan ke tenaga kesehatan bila akseptor tetap ingin mencabut",
            "Mengabaikan keluhan karena wajar"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pelayanan KB di Posyandu desa sepi karena jadwalnya bentrok dengan kegiatan ladang warga. Langkah yang tepat adalah ...",
        pilihan: [
            "Tetap pada jadwal agar tidak merepotkan petugas",
            "Menutup pelayanan di desa itu",
            "Menunggu warga yang datang",
            "Mendiskusikan dengan kader dan tokoh masyarakat untuk menyesuaikan jadwal pelayanan yang sesuai kebiasaan warga",
            "Menyalahkan warga sebagai tidak peduli"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Seorang ibu pasca persalinan belum mendapat informasi KB. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menyarankan ibu menunda KB selama setahun",
            "Menunggu ibu datang sendiri",
            "Menunggu ibu hamil kembali",
            "Mendorong layanan KB pasca persalinan melalui konseling sejak kehamilan dan koordinasi dengan bidan",
            "Mengabaikan karena bukan tugasnya"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Data menunjukkan angka unmet need di wilayah binaan masih tinggi. Langkah strategis Penyuluh KB adalah ...",
        pilihan: [
            "Menyalahkan kader",
            "Menurunkan target pelayanan",
            "Menunggu bantuan pusat",
            "Memetakan PUS unmet need, melakukan konseling dan pelayanan KB bersama mitra faskes, serta memantau hasilnya",
            "Menganggap data tidak penting"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Cara memperluas jangkauan informasi KB kepada generasi muda di wilayah binaan yang paling efektif adalah ...",
        pilihan: [
            "Menyebarkan informasi lewat kanal yang akrab bagi mereka, seperti media sosial, sekolah, dan PIK-Remaja",
            "Membagikan leaflet tanpa pendampingan",
            "Melarang mereka mengakses informasi",
            "Hanya memasang spanduk di kantor desa",
            "Menunggu mereka bertanya"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Seorang klien mengaku mendapat informasi keliru dari medsos bahwa KB menyebabkan kemandulan permanen. Tindakan Penyuluh KB adalah ...",
        pilihan: [
            "Mengabaikan karena hoaks tidak berbahaya",
            "Marah kepada klien",
            "Meminta klien menghapus akun medsos",
            "Membiarkan klien memutuskan tanpa informasi",
            "Meluruskan dengan informasi yang benar dan bersumber terpercaya, disampaikan dengan empati"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Alokon kedaluwarsa ditemukan pada stok di Pos KB. Tindakan yang benar adalah ...",
        pilihan: [
            "Menukarnya dengan alokon baru secara diam-diam",
            "Menyembunyikannya agar tidak dipermasalahkan",
            "Membuangnya tanpa pencatatan",
            "Memisahkan, tidak mendistribusikan, dan melaporkannya sesuai prosedur pengelolaan logistik",
            "Tetap menggunakannya karena masih terlihat baik"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Prinsip pelayanan KB yang menjamin klien dapat memilih metode secara bebas dan bertanggung jawab disebut ...",
        pilihan: [
            "Target mutlak",
            "Kuota akseptor",
            "Pelayanan satu metode",
            "Hak klien memilih (informed choice) dan persetujuan tindakan (informed consent)",
            "Pemaksaan program"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Cara Penyuluh KB menyampaikan materi kepada kelompok masyarakat dengan tingkat pendidikan beragam adalah ...",
        pilihan: [
            "Menyerahkan penyampaian kepada orang lain",
            "Memakai istilah teknis agar terlihat ahli",
            "Menyampaikan sekilas agar cepat selesai",
            "Menggunakan bahasa sederhana, contoh dekat dengan keseharian, dan alat bantu visual",
            "Membaca teks panjang tanpa interaksi"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Ibu menyusui bayi berusia 4 bulan, belum haid, dan ingin ber-KB. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menyatakan ibu tidak perlu KB selama masih menyusui sampai anak 3 tahun",
            "Memberikan pil kombinasi tanpa konseling",
            "Mengonseling metode yang aman bagi ibu menyusui, bukan pil kombinasi estrogen",
            "Menyarankan kalender saja tanpa pendampingan",
            "Menyuruh ibu berhenti menyusui"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Klien dengan tekanan darah tinggi yang tidak terkontrol meminta pil KB kombinasi. Tindakan yang tepat adalah ...",
        pilihan: [
            "Meminta klien menghentikan pengobatan",
            "Memberikan pil karena klien meminta",
            "Menyarankan jamu pengganti",
            "Merujuk ke tenaga kesehatan untuk pemeriksaan dan memilih metode yang aman sesuai kondisi",
            "Menolak pelayanan KB selamanya"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pasangan muda belum memiliki anak meminta tubektomi (MOW). Penyuluh KB sebaiknya ...",
        pilihan: [
            "Langsung merujuk MOW agar target tercapai",
            "Meminta orang lain memutuskan",
            "Menyarankan pil seumur hidup",
            "Menjelaskan bahwa MOW bersifat permanen dan menawarkan metode reversibel yang sesuai",
            "Menolak memberi konseling"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Seorang suami takut vasektomi (MOP) mengurangi kejantanannya. Tindakan Penyuluh KB adalah ...",
        pilihan: [
            "Memaksa suami menjalani MOP",
            "Mengabaikan kekhawatiran",
            "Meluruskan mitos dengan informasi benar bahwa MOP tidak memengaruhi fungsi seksual, lalu merujuk bila berminat",
            "Menyuruh istri saja yang ber-KB",
            "Membenarkan kekhawatiran itu"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Akseptor suntik 3 bulan terlambat dari jadwal suntik ulang. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menyuruh berhenti ber-KB",
            "Mengonseling dan merujuk ke fasilitas kesehatan untuk pelayanan ulang sesuai ketentuan",
            "Menyarankan jamu pengganti",
            "Menyuntik sendiri di rumah",
            "Mengabaikan keterlambatan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Efek samping yang umum pada suntik KB 3 bulan adalah ...",
        pilihan: [
            "Kemandulan permanen",
            "Kanker pasti",
            "Kebotakan",
            "Gangguan penglihatan permanen",
            "Gangguan haid dan perubahan berat badan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Selain mencegah kehamilan, kondom juga berfungsi ...",
        pilihan: [
            "Menggantikan pemeriksaan kesehatan",
            "Membantu mencegah infeksi menular seksual",
            "Menyembuhkan infeksi menular seksual",
            "Meningkatkan kesuburan",
            "Menambah daya tahan tubuh"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Akseptor IUD merasa benang IUD tidak teraba. Penyuluh KB menyarankan ...",
        pilihan: [
            "Menunggu sebulan tanpa tindakan",
            "Segera memeriksakan diri ke fasilitas kesehatan dan memakai metode cadangan sementara",
            "Menarik IUD sendiri",
            "Meminum jamu",
            "Mengabaikan keluhan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Seorang klien percaya mitos bahwa implan akan berpindah ke jantung. Respons yang tepat adalah ...",
        pilihan: [
            "Menghentikan konseling",
            "Membenarkan mitos agar klien nyaman",
            "Menertawakan klien",
            "Meluruskan dengan informasi benar secara empatik dan membuka ruang tanya",
            "Menyuruh klien mencari informasi sendiri"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Ibu yang baru melahirkan ingin ber-KB sebelum pulang dari fasilitas kesehatan. Hal yang tepat adalah ...",
        pilihan: [
            "Menyarankan menunggu enam bulan",
            "Menyuruh pulang dulu tanpa informasi",
            "Mendukung pelayanan KB pasca persalinan melalui konseling dan koordinasi dengan bidan atau tenaga kesehatan",
            "Menolak karena belum haid",
            "Memberikan alokon tanpa konseling"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Metode amenore laktasi (MAL) hanya efektif apabila ...",
        pilihan: [
            "Bayi kurang dari enam bulan, diberi ASI eksklusif, dan ibu belum haid",
            "Bayi sudah makan padat",
            "ASI diberikan sesekali",
            "Ibu sudah haid kembali",
            "Bayi berusia lebih dari satu tahun"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pasangan lanjut usia reproduksi (di atas 35 tahun) dengan anak cukup ingin ber-KB yang efektif dan jangka panjang. Pilihan yang sesuai untuk dikonselingkan adalah ...",
        pilihan: [
            "Senggama terputus saja",
            "Pil harian saja",
            "Kalender saja",
            "Tanpa kontrasepsi",
            "MKJP seperti IUD, implan, atau metode kontrasepsi mantap"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Langkah SATU TUJU dalam konseling KB dimulai dengan ...",
        pilihan: [
            "Menyebutkan target",
            "Menutup konseling",
            "Menyodorkan formulir",
            "Langsung memberikan alokon",
            "Sapa dan salam kepada klien"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Pada konseling SATU TUJU, huruf \"U\" kedua (Uraikan) berarti ...",
        pilihan: [
            "Mengubah keputusan klien",
            "Mengukur berat badan",
            "Menguji klien",
            "Mengumumkan hasil",
            "Menguraikan pilihan metode yang sesuai kondisi klien"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Dalam konseling, kunjungan ulang dijadwalkan untuk ...",
        pilihan: [
            "Mencari klien baru",
            "Menagih biaya",
            "Memantau penggunaan, keluhan, dan kepuasan klien",
            "Menambah beban klien",
            "Melaporkan klien"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Seorang klien mengaku sedang hamil muda saat meminta pil KB. Tindakan Penyuluh KB adalah ...",
        pilihan: [
            "Menyuruh klien minum jamu",
            "Merujuk ke tenaga kesehatan untuk pemeriksaan sebelum memulai metode apa pun",
            "Memberikan pil agar kehamilan batal",
            "Mengabaikan pengakuan klien",
            "Menghentikan layanan tanpa penjelasan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Tenaga kesehatan menolak melayani KB karena stok alokon kosong, sementara klien sudah datang jauh. Langkah Penyuluh KB adalah ...",
        pilihan: [
            "Menyuruh klien pulang tanpa informasi",
            "Menghapus data klien",
            "Memberi konseling, mencatat kebutuhan, dan membantu klien mendapat layanan di fasilitas lain atau jadwal berikutnya",
            "Membeli alokon di toko tanpa prosedur",
            "Memarahi tenaga kesehatan di depan klien"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pelayanan KB bergerak digelar di daerah terpencil. Hal yang perlu disiapkan Penyuluh KB adalah ...",
        pilihan: [
            "Hanya dokumentasi foto",
            "Hanya spanduk",
            "Hanya laporan setelah kegiatan",
            "Sasaran, jadwal, tenaga kesehatan, alokon, dan koordinasi dengan perangkat desa serta kader",
            "Tidak perlu persiapan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Seorang penyandang disabilitas ingin mendapatkan informasi KB. Sikap Penyuluh KB adalah ...",
        pilihan: [
            "Memutuskan metode untuknya",
            "Menunda tanpa kepastian",
            "Melayani dengan komunikasi yang sesuai kebutuhannya dan menjamin hak memilih",
            "Menolak karena bukan sasaran",
            "Hanya berbicara dengan pendampingnya tanpa melibatkan klien"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kader menanyakan perbedaan KIE dan konseling. Penjelasan yang benar adalah ...",
        pilihan: [
            "Keduanya sama persis",
            "KIE hanya dilakukan setelah pelayanan",
            "KIE bersifat penyebaran informasi dan edukasi, sedangkan konseling adalah komunikasi dua arah membantu klien memilih keputusan",
            "KIE hanya untuk petugas",
            "Konseling hanya lewat media sosial"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kegiatan kunjungan rumah (home visit) oleh Penyuluh KB bermanfaat untuk ...",
        pilihan: [
            "Menagih iuran",
            "Menyebarkan gosip",
            "Mengawasi tetangga",
            "Memahami kondisi keluarga secara langsung dan memberi pendampingan sesuai kebutuhan",
            "Mencari kesalahan keluarga"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Media KIE yang paling sesuai bagi masyarakat dengan tingkat literasi rendah adalah ...",
        pilihan: [
            "Jurnal ilmiah",
            "Teks panjang",
            "Gambar, alat peraga, dan demonstrasi langsung",
            "Laporan tahunan",
            "Grafik rumit"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Seorang tokoh masyarakat berpengaruh bersedia mendukung program KB. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Memanfaatkannya tanpa informasi",
            "Menggantikan perannya",
            "Melibatkannya sebagai mitra KIE dan memberikan informasi yang benar kepadanya",
            "Membayarnya agar diam",
            "Mengabaikannya"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pria di wilayah binaan jarang ikut ber-KB. Strategi yang tepat adalah ...",
        pilihan: [
            "Memaksa pria ber-KB",
            "Hanya memberi leaflet",
            "Menghilangkan sasaran pria",
            "Meningkatkan edukasi dan pelibatan pria melalui kelompok dan tokoh yang dekat dengan mereka",
            "Menyalahkan istri"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Penyuluh KB menemukan PUS dengan jarak kelahiran sangat dekat. Tindakan yang tepat adalah ...",
        pilihan: [
            "Menyalahkan PUS",
            "Mengonseling risiko jarak dekat dan menawarkan metode kontrasepsi yang sesuai",
            "Meminta PUS menunggu hamil lagi",
            "Menyuruh minum vitamin saja",
            "Mengabaikannya"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Ibu hamil usia 40 tahun dengan anak banyak termasuk kelompok ...",
        pilihan: [
            "Sasaran lansia",
            "Sasaran program remaja",
            "Tidak memerlukan pendampingan",
            "Berisiko tinggi karena 4 Terlalu sehingga perlu pendampingan dan rujukan tenaga kesehatan",
            "Tidak berisiko"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Akseptor menyatakan puas dengan metode yang dipakai tetapi ingin berhenti karena anjuran tetangga. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menyalahkan tetangga di depan umum",
            "Memarahi akseptor",
            "Membiarkan tanpa konseling",
            "Menggali alasan dan memberi informasi yang benar tanpa memaksa",
            "Menyuruh pindah wilayah"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Tingkat putus pakai (drop out) KB meningkat di wilayah binaan. Langkah yang tepat adalah ...",
        pilihan: [
            "Menunggu laporan",
            "Menghentikan pencatatan",
            "Menurunkan target",
            "Menelusuri penyebab, memperkuat konseling, dan menindaklanjuti akseptor",
            "Menyalahkan kader"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Mobil pelayanan KB tiba di desa tetapi warga enggan datang karena takut disuntik. Tindakan yang tepat adalah ...",
        pilihan: [
            "Memaksa warga datang",
            "Menutup pelayanan segera",
            "Mengumumkan warga yang tidak hadir",
            "Memberikan penjelasan ramah melalui kader dan tokoh serta menawarkan konseling dulu tanpa paksaan",
            "Menyuruh warga pulang"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Dokumentasi pelayanan KB yang benar mencakup ...",
        pilihan: [
            "Foto wajah klien untuk diunggah",
            "Data tanpa nama",
            "Catatan lisan saja",
            "Data perkiraan",
            "Pencatatan sasaran, jenis layanan, dan hasil sesuai format dengan menjaga kerahasiaan klien"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Klien perempuan ingin ber-KB tetapi tidak mau suaminya tahu. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menelepon suami tanpa izin klien",
            "Menolak melayani",
            "Mengumumkan kepada tetangga",
            "Menghormati kerahasiaan klien sambil mengonseling metode yang sesuai dan menyarankan komunikasi dengan pasangan bila memungkinkan",
            "Memaksa klien berterus terang"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Kontrasepsi darurat digunakan ...",
        pilihan: [
            "Untuk menggugurkan kehamilan",
            "Sebelum menikah selalu",
            "Sebagai KB rutin harian",
            "Setelah hubungan seksual tanpa pelindung dalam waktu terbatas sesuai anjuran tenaga kesehatan",
            "Hanya oleh pria"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Jika seorang akseptor pil lupa minum satu pil, Penyuluh KB dapat mengarahkan ...",
        pilihan: [
            "Mengikuti petunjuk penggunaan pil dan berkonsultasi dengan tenaga kesehatan bila ragu",
            "Berhenti total tanpa konsultasi",
            "Mengabaikan jadwal",
            "Menggantinya dengan jamu",
            "Menambah dosis dua kali lipat sembarangan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pada akseptor IUD, keluhan nyeri perut hebat dan demam perlu ...",
        pilihan: [
            "Diobati dengan jamu",
            "Diabaikan",
            "Ditunda sampai bulan depan",
            "Dilaporkan pada tetangga",
            "Segera dirujuk ke fasilitas kesehatan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Berikut yang BUKAN termasuk MKJP adalah ...",
        pilihan: [
            "Tubektomi",
            "IUD",
            "Vasektomi",
            "Implan",
            "Pil KB"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Hak klien KB mencakup ...",
        pilihan: [
            "Dikenai sanksi bila menolak",
            "Dibatasi memilih",
            "Mendapat informasi, memilih metode, privasi, dan pelayanan yang aman",
            "Dipaksa memakai satu metode",
            "Dibuka datanya ke publik"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Peran kader dalam pelayanan KB di desa adalah ...",
        pilihan: [
            "Menolak klien tertentu",
            "Mengobati efek samping berat",
            "Menentukan metode untuk klien",
            "Membantu penggerakan, pencatatan, dan edukasi sesuai kewenangan, tanpa menggantikan tenaga kesehatan",
            "Memasang IUD"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Penyuluh KB perlu memberikan pelatihan penyegaran bagi kader KB karena ...",
        pilihan: [
            "Untuk mengurangi jumlah kader",
            "Pengetahuan dan keterampilan perlu diperbarui agar informasi yang disampaikan akurat",
            "Karena aturan baru tiap hari",
            "Kader tidak pernah salah",
            "Supaya kader sibuk"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Calon akseptor memiliki riwayat penyakit tertentu yang tidak dipahami Penyuluh KB. Tindakan yang tepat adalah ...",
        pilihan: [
            "Merujuk ke tenaga kesehatan agar mendapat penilaian medis",
            "Memberi pil sembarang",
            "Menebak metode yang cocok",
            "Menyuruh klien berhenti ber-KB",
            "Menolak melayani"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Cara memotivasi PUS yang ragu ber-KB tanpa memaksa adalah ...",
        pilihan: [
            "Menjanjikan hadiah yang tidak ada",
            "Mengulang pesan sama berulang kali tanpa mendengar",
            "Mengancam dengan sanksi",
            "Menyebarkan ketakutan",
            "Menjelaskan manfaat KB bagi kesehatan ibu, anak, dan keluarga serta menghormati keputusan klien"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Jarak ideal antar kelahiran yang dianjurkan untuk kesehatan ibu dan anak adalah ...",
        pilihan: [
            "Kurang dari 1 tahun",
            "Hanya 6 bulan",
            "Tidak berpengaruh",
            "Minimal sekitar 3 tahun",
            "Setiap tahun"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Sebuah desa memiliki tingkat pemakaian MKJP rendah. Strategi Penyuluh KB yang paling tepat adalah ...",
        pilihan: [
            "Membagikan alokon gratis tanpa konseling",
            "Meningkatkan konseling dan promosi MKJP, memperkuat jejaring faskes, dan melibatkan tokoh",
            "Menurunkan standar pelayanan",
            "Menyalahkan bidan",
            "Membatasi metode lain"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pemasangan implan hanya boleh dilakukan oleh ...",
        pilihan: [
            "Kader terlatih",
            "Tetangga",
            "Tenaga kesehatan terlatih yang berwenang",
            "Keluarga klien",
            "Penyuluh KB tanpa pelatihan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Persetujuan tindakan medis (informed consent) bagi klien KB diperlukan ...",
        pilihan: [
            "Hanya bagi klien laki-laki",
            "Hanya untuk metode pil",
            "Setelah tindakan dilakukan",
            "Sebelum pelayanan yang memerlukan tindakan, setelah klien memahami informasi",
            "Tidak diperlukan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Penyuluh KB mendapati klien dengan kehamilan tidak diinginkan. Sikap yang tepat adalah ...",
        pilihan: [
            "Menyuruh melakukan tindakan berbahaya",
            "Mendengarkan tanpa menghakimi, memberi informasi, dan merujuk ke layanan yang sesuai",
            "Menyebarkan cerita klien",
            "Menolak klien",
            "Menghakimi klien"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Faktor yang dapat membuat PUS tidak ber-KB padahal tidak ingin anak lagi disebut ...",
        pilihan: [
            "Drop out",
            "Unmet need KB",
            "Peserta aktif",
            "Akseptor baru",
            "Kegagalan alokon"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kebutuhan ber-KB yang belum terpenuhi (unmet need) dapat diturunkan melalui ...",
        pilihan: [
            "Pengurangan jam layanan",
            "Peningkatan akses, kualitas konseling, dan dukungan suami",
            "Pembatasan alokon",
            "Mempersulit pelayanan",
            "Pembatasan informasi"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pada kegiatan penyuluhan, tanda peserta memahami materi adalah ...",
        pilihan: [
            "Hanya foto bersama",
            "Hanya diam",
            "Hanya hadir",
            "Hanya menerima brosur",
            "Mampu menjelaskan kembali dan mengajukan pertanyaan relevan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Penyuluh KB akan membuat leaflet untuk KB bagi ibu pasca persalinan. Agar efektif, leaflet sebaiknya ...",
        pilihan: [
            "Tanpa gambar",
            "Sangat panjang",
            "Singkat, bergambar, bahasa sederhana, dan sesuai sasaran",
            "Tanpa sumber informasi",
            "Penuh istilah medis"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Dalam evaluasi KIE, indikator keberhasilan paling relevan adalah ...",
        pilihan: [
            "Jumlah spanduk",
            "Jumlah foto",
            "Jumlah brosur dicetak",
            "Jumlah rapat",
            "Perubahan pengetahuan, sikap, dan perilaku sasaran"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Kegiatan advokasi KB kepada kepala desa bertujuan ...",
        pilihan: [
            "Menutup program",
            "Mengambil alih desa",
            "Menyalahkan kepala desa",
            "Menunda kegiatan",
            "Memperoleh dukungan kebijakan, anggaran, dan sumber daya untuk program"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Dalam advokasi, bukti yang paling meyakinkan pengambil kebijakan adalah ...",
        pilihan: [
            "Janji kosong",
            "Data dan fakta lapangan yang jelas dan relevan",
            "Opini pribadi",
            "Desas-desus",
            "Cerita tanpa bukti"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Setelah kegiatan KIE, tindak lanjut yang perlu dilakukan Penyuluh KB adalah ...",
        pilihan: [
            "Menghilang",
            "Memindahkan sasaran",
            "Menunggu sasaran datang",
            "Mengganti materi tanpa evaluasi",
            "Pendampingan sasaran, pencatatan, dan pemantauan perubahan perilaku"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Akseptor mengeluh nyeri kepala setelah memakai pil KB. Tindakan Penyuluh KB adalah ...",
        pilihan: [
            "Menambah dosis",
            "Mengabaikan",
            "Mengonseling dan menyarankan pemeriksaan ke tenaga kesehatan bila keluhan menetap atau berat",
            "Menyuruh berhenti selamanya",
            "Menyalahkan akseptor"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Penyuluh KB perlu menjelaskan bahwa kegagalan kontrasepsi dapat terjadi ...",
        pilihan: [
            "Hanya bila malas",
            "Hanya pada MKJP",
            "Hanya pada pil",
            "Tidak pernah terjadi",
            "Pada semua metode, dengan tingkat berbeda, sehingga penggunaan harus benar dan konsisten"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Penyuluh KB melihat kader mencatat nama peserta KB tidak lengkap. Tindakan yang tepat adalah ...",
        pilihan: [
            "Menyalahkan kader di depan warga",
            "Mengisi sendiri tanpa pembinaan",
            "Mengabaikan",
            "Membimbing kader mengisi pencatatan lengkap sesuai format",
            "Menghapus catatan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Penyediaan Pos KB di desa memiliki fungsi ...",
        pilihan: [
            "Menjadi kantor pemerintah desa",
            "Menjadi tempat penyuluhan, konseling, dan pelayanan dasar KB di tingkat desa",
            "Tempat arisan",
            "Menyimpan arsip warga",
            "Menjual alokon bebas"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pelayanan KB yang berkualitas ditandai dengan ...",
        pilihan: [
            "Pelayanan cepat tanpa konseling",
            "Pelayanan sesuai selera petugas",
            "Target tercapai dengan paksaan",
            "Alokon tersedia tanpa pilihan",
            "Klien mendapat informasi lengkap, memilih bebas, dilayani aman, dan ditindaklanjuti"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Ketika klien bertanya tentang hal di luar kewenangannya, Penyuluh KB sebaiknya ...",
        pilihan: [
            "Mengakui keterbatasan dan merujuk ke pihak yang berwenang",
            "Mengabaikan pertanyaan",
            "Menyalahkan klien",
            "Menyuruh klien mencari di internet",
            "Menjawab sekenanya"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Klien lansia reproduksi menopause tidak perlu ber-KB bila ...",
        pilihan: [
            "Merasa sudah tua",
            "Telah dipastikan menopause oleh tenaga kesehatan",
            "Haid sering terlambat",
            "Anak sudah banyak",
            "Menurut tetangga"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kampanye KB yang paling baik untuk membangun penerimaan masyarakat adalah yang ...",
        pilihan: [
            "Menghina yang tidak ber-KB",
            "Menyalahkan keluarga besar",
            "Menggunakan pesan positif tentang keluarga sehat dan sejahtera sesuai budaya lokal",
            "Menyinggung agama tertentu",
            "Menakut-nakuti"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Penyuluh KB mengadakan diskusi kelompok terarah (FGD) dengan ibu-ibu. Tujuannya adalah ...",
        pilihan: [
            "Mengumumkan sanksi",
            "Mendiamkan peserta",
            "Menghakimi peserta",
            "Menggali pengetahuan, sikap, dan hambatan ber-KB untuk merancang intervensi",
            "Mengumpulkan uang"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Program yang menyiapkan remaja berperilaku sehat, terencana, dan bertanggung jawab di bawah BKKBN dikenal dengan nama ...",
        pilihan: [
            "PIK-R/GenRe (Generasi Berencana)",
            "Bina Keluarga Lansia",
            "Kelas Ibu Hamil",
            "Posyandu Balita",
            "Dapur Umum"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Wadah kegiatan remaja untuk informasi dan konseling kesehatan reproduksi disebut ...",
        pilihan: [
            "Sekolah Lansia",
            "Posbindu",
            "Pokja KB",
            "PIK-Remaja (Pusat Informasi dan Konseling Remaja)",
            "BKB"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Seorang remaja putri menceritakan hubungan pacarannya yang berisiko. Sikap terbaik Penyuluh KB adalah ...",
        pilihan: [
            "Mendengarkan tanpa menghakimi, memberi informasi kesehatan reproduksi yang benar, dan merujuk bila diperlukan",
            "Melaporkan ke seluruh teman sebaya",
            "Menyuruh diam",
            "Menghakimi dan memarahi",
            "Mengabaikan karena urusan pribadi"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Usia minimal perkawinan menurut UU No. 16 Tahun 2019 adalah ...",
        pilihan: [
            "16 tahun bagi perempuan",
            "18 tahun bagi perempuan",
            "19 tahun bagi laki-laki dan perempuan",
            "17 tahun bagi laki-laki",
            "21 tahun bagi laki-laki dan perempuan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Ada rencana pernikahan anak di bawah usia 19 tahun di wilayah binaan. Langkah Penyuluh KB adalah ...",
        pilihan: [
            "Mengedukasi keluarga dan remaja tentang risiko pernikahan dini serta berkoordinasi dengan perangkat desa dan lintas sektor",
            "Menghadiri sebagai tamu undangan saja",
            "Menghakimi keluarga",
            "Memaksa pernikahan dibatalkan tanpa dialog",
            "Membiarkan karena urusan keluarga"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Batas usia ideal menikah menurut BKKBN adalah ...",
        pilihan: [
            "Perempuan 25 tahun dan laki-laki 30 tahun",
            "Perempuan 17 tahun dan laki-laki 20 tahun",
            "Perempuan 21 tahun dan laki-laki 25 tahun",
            "Tidak ada batas",
            "Perempuan 19 tahun dan laki-laki 21 tahun"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kampung Keluarga Berkualitas (Kampung KB) bertujuan ...",
        pilihan: [
            "Memisahkan warga berdasarkan program",
            "Menggantikan pemerintah desa",
            "Hanya memberi bantuan uang",
            "Meningkatkan kualitas hidup masyarakat di tingkat kampung melalui pembangunan keluarga, kependudukan, dan KB secara terpadu",
            "Menjadi tempat penyimpanan alokon"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pokja Kampung KB sebaiknya melibatkan ...",
        pilihan: [
            "Perangkat desa, tokoh masyarakat, kader, dan lintas sektor",
            "Hanya penyuluh",
            "Satu keluarga saja",
            "Hanya tokoh agama",
            "Hanya petugas BKKBN"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Kegiatan di Kampung KB yang kurang aktif akan paling efektif dibina dengan ...",
        pilihan: [
            "Membiarkan sampai ada lomba",
            "Menghentikan dukungan",
            "Membubarkannya",
            "Menggali kendala, melakukan penguatan Pokja, dan menggerakkan kembali kegiatan berbasis potensi lokal",
            "Menggantikan seluruh pengurus tanpa dialog"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Untuk meningkatkan kualitas remaja di wilayah binaan, Penyuluh KB perlu bekerja sama dengan ...",
        pilihan: [
            "Hanya orang tua",
            "Tidak perlu siapa-siapa",
            "Sekolah, pemerintah desa, tokoh pemuda, dan puskesmas",
            "Hanya perangkat kecamatan",
            "Hanya kader PKK"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pernikahan dini berisiko meningkatkan ...",
        pilihan: [
            "Kualitas pengasuhan",
            "Risiko kehamilan berisiko, stunting, dan putus sekolah",
            "Kesehatan ibu otomatis",
            "Kesejahteraan ekonomi otomatis",
            "Kecerdasan anak"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Strategi Penyuluh KB agar kegiatan PIK-R tetap diminati remaja adalah ...",
        pilihan: [
            "Melibatkan remaja sebagai pengurus dan kreator dengan kegiatan kreatif sesuai minat",
            "Menutup kegiatan",
            "Hanya ceramah panjang",
            "Mewajibkan hadir dengan sanksi",
            "Hanya membagikan leaflet"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Ketika remaja di wilayah binaan banyak menunda pendidikan karena alasan ekonomi, Penyuluh KB dapat ...",
        pilihan: [
            "Menyuruh menikah",
            "Menyalahkan orang tua",
            "Mengabaikan karena di luar tugas KB",
            "Menghubungkan keluarga dengan program bantuan dan pemberdayaan melalui kolaborasi lintas sektor",
            "Meminta mereka bekerja"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pendekatan terbaik untuk menyampaikan isu kesehatan reproduksi remaja di lingkungan yang masih menganggapnya tabu adalah ...",
        pilihan: [
            "Menyerahkan kepada media sosial",
            "Menyampaikan secara vulgar",
            "Memberi brosur tanpa penjelasan",
            "Menyampaikan secara santun dengan bahasa yang diterima budaya setempat, melibatkan tokoh masyarakat dan orang tua",
            "Menghindari topik sama sekali"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Tiga isu pokok Triad KRR (Kesehatan Reproduksi Remaja) adalah ...",
        pilihan: [
            "Gizi, tidur, dan hiburan",
            "Seksualitas, NAPZA, serta HIV dan AIDS",
            "Politik, ekonomi, dan hukum",
            "Pendidikan, pekerjaan, dan pernikahan",
            "Olahraga, seni, dan musik"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Tingkatan PIK-Remaja secara berurutan dari awal adalah ...",
        pilihan: [
            "Tumbuh, Tegak, Tegar",
            "Tegak, Tegar, Tumbuh",
            "Pemula, Madya, Utama",
            "Dasar, Menengah, Lanjut",
            "Tegar, Tumbuh, Tegak"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Seorang remaja laki-laki mengaku mencoba NAPZA karena ajakan teman. Tindakan Penyuluh KB adalah ...",
        pilihan: [
            "Mengusirnya dari PIK-R",
            "Menghukumnya",
            "Mengabaikannya",
            "Mendengarkan tanpa menghakimi, memberi informasi bahaya NAPZA, dan merujuk ke layanan rehabilitasi atau konseling",
            "Melaporkan di depan umum"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Remaja putri di sekolah binaan sering mengeluh lemas dan pusing. Penyuluh KB dapat berkoordinasi untuk ...",
        pilihan: [
            "Mengabaikan karena wajar",
            "Edukasi gizi dan pemberian tablet tambah darah sesuai program serta pemeriksaan kesehatan",
            "Memberi jamu",
            "Menyuruh diet ketat",
            "Meminta berhenti sekolah"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pendidikan kecakapan hidup (life skills) bagi remaja bertujuan ...",
        pilihan: [
            "Membekali remaja dengan keterampilan mengambil keputusan, komunikasi, dan menolak ajakan negatif",
            "Menghapus sekolah",
            "Menunda kedewasaan",
            "Mengurangi kebebasan belajar",
            "Menambah beban pelajaran"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Remaja yang menjadi konselor sebaya (Pendidik Sebaya/Konselor Sebaya) sebaiknya ...",
        pilihan: [
            "Dibiarkan tanpa pelatihan",
            "Mengganti tenaga kesehatan",
            "Diberi tugas mengobati temannya",
            "Dilatih dan didampingi agar informasi yang diberikan benar",
            "Dilarang berbicara kepada teman"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Remaja putri mengalami kehamilan di luar nikah dan putus sekolah. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Mendampingi tanpa menghakimi, berkoordinasi dengan keluarga dan layanan terkait agar mendapat layanan kesehatan dan kesempatan pendidikan",
            "Mengucilkannya",
            "Menyebarluaskan kejadian",
            "Mengabaikannya",
            "Menyalahkan orang tuanya"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Orang tua enggan membicarakan kesehatan reproduksi dengan anak remaja. Tindakan Penyuluh KB adalah ...",
        pilihan: [
            "Menyalahkan orang tua",
            "Menyerahkan ke teman sebaya",
            "Menyuruh sekolah saja",
            "Mengedukasi orang tua melalui BKR tentang komunikasi terbuka dan pengasuhan remaja",
            "Membiarkannya"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Ketika remaja di sebuah sekolah mengalami perundungan (bullying), Penyuluh KB dapat ...",
        pilihan: [
            "Mengabaikan karena urusan sekolah",
            "Berkoordinasi dengan sekolah dan orangtua untuk edukasi serta penanganan, tanpa menyalahkan korban",
            "Menyuruh korban diam",
            "Menyalahkan korban",
            "Menghukum pelaku di depan umum"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Informasi kesehatan reproduksi yang sesuai bagi remaja adalah yang ...",
        pilihan: [
            "Akurat, sesuai usia, dan disampaikan dengan sikap menghargai",
            "Menghakimi",
            "Penuh mitos",
            "Vulgar",
            "Menakut-nakuti"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pernikahan usia anak dapat meningkatkan risiko ...",
        pilihan: [
            "Kesejahteraan otomatis",
            "Kesehatan ibu otomatis baik",
            "Prestasi sekolah",
            "Kematangan emosi",
            "Komplikasi kehamilan, stunting, dan putus sekolah"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Dispensasi kawin diajukan ke ...",
        pilihan: [
            "Puskesmas",
            "Sekolah",
            "Kecamatan saja",
            "Kantor desa",
            "Pengadilan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Penyuluh KB ingin bekerja sama dengan sekolah menyelenggarakan penyuluhan GenRe. Langkah awal yang tepat adalah ...",
        pilihan: [
            "Berkoordinasi dengan pihak sekolah untuk jadwal, materi, dan sasaran",
            "Menunggu undangan bertahun-tahun",
            "Datang tanpa pemberitahuan",
            "Membagikan leaflet di jalan",
            "Meminta siswa datang ke kantor"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Remaja pengguna media sosial rentan terhadap ...",
        pilihan: [
            "Kemandirian otomatis",
            "Tidak ada risiko",
            "Peningkatan prestasi otomatis",
            "Informasi keliru dan perilaku berisiko sehingga perlu literasi digital",
            "Kesehatan otomatis"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Duta GenRe berperan ...",
        pilihan: [
            "Menggantikan petugas kesehatan",
            "Menjual produk",
            "Hanya tampil di acara",
            "Menjadi teladan dan penggerak edukasi kesehatan reproduksi serta perencanaan kehidupan remaja",
            "Menentukan kebijakan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Remaja ingin mengikuti kegiatan PIK-R tetapi tidak diizinkan orang tua. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menyalahkan orang tua",
            "Menyuruh remaja membantah",
            "Menjelaskan manfaat kegiatan kepada orang tua dan mengundang mereka ikut dalam kegiatan",
            "Mengabaikan",
            "Menutup PIK-R"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Perencanaan kehidupan berkeluarga bagi remaja (GenRe) mencakup ...",
        pilihan: [
            "Pendidikan, karir, pernikahan, dan usia ideal berkeluarga",
            "Hanya pernikahan",
            "Hanya olahraga",
            "Hanya hiburan",
            "Hanya pekerjaan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Ketika remaja mengalami kecemasan berlebih, Penyuluh KB sebaiknya ...",
        pilihan: [
            "Mendengarkan dengan empati dan merujuk ke layanan konseling atau tenaga profesional",
            "Menyebarkan ceritanya",
            "Mengabaikan",
            "Menertawakan",
            "Menyuruh lebih kuat"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Kampung KB dibentuk di tingkat ...",
        pilihan: [
            "Provinsi",
            "Kecamatan saja",
            "Kabupaten",
            "Desa, kelurahan, atau setingkat dengannya",
            "Negara"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Salah satu tujuan Kampung KB adalah ...",
        pilihan: [
            "Menyimpan alokon",
            "Membatasi kegiatan desa",
            "Mewujudkan keluarga berkualitas melalui kegiatan terintegrasi lintas sektor di tingkat kampung",
            "Mengumpulkan dana",
            "Menggantikan pemerintah desa"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Rumah DataKu di Kampung KB berfungsi ...",
        pilihan: [
            "Tempat tinggal pegawai",
            "Menjual alokon",
            "Gudang arsip",
            "Menyajikan dan memanfaatkan data kependudukan dan keluarga untuk perencanaan kampung",
            "Tempat hiburan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Dalam Kampung KB, pelaksana kegiatan seperti BKB, BKR, BKL, UPPKA, dan PIK-R disebut ...",
        pilihan: [
            "Kelompok dagang",
            "Kelompok olahraga",
            "Kelompok kegiatan (Poktan) sebagai wadah pembinaan keluarga",
            "Kelompok pengajian khusus",
            "Kelompok arisan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kampung KB yang telah berjalan baik perlu terus dibina melalui ...",
        pilihan: [
            "Pemantauan, penguatan kapasitas, dan inovasi kegiatan berbasis kebutuhan warga",
            "Penggantian nama",
            "Pembiaran",
            "Penggantian seluruh pengurus",
            "Penutupan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB ingin memilih lokasi Kampung KB baru. Pertimbangan terbaik adalah ...",
        pilihan: [
            "Kemudahan akses semata",
            "Kedekatan dengan rumah penyuluh",
            "Jumlah warga paling sedikit",
            "Selera pribadi",
            "Data sasaran dan kebutuhan wilayah serta dukungan pemerintah dan masyarakat"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Warga Kampung KB kurang aktif karena kegiatan monoton. Solusi Penyuluh KB adalah ...",
        pilihan: [
            "Mengurangi kegiatan",
            "Mengajak warga merancang kegiatan menarik sesuai potensi lokal",
            "Menambah laporan saja",
            "Menutup kegiatan",
            "Menyalahkan warga"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kegiatan kreatif remaja di Kampung KB dapat berupa ...",
        pilihan: [
            "Hanya ceramah",
            "Tawuran",
            "Pelatihan keterampilan, kelompok belajar, dan kegiatan sosial",
            "Perundungan",
            "Judi online"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pengawasan kegiatan Kampung KB oleh Penyuluh KB bertujuan ...",
        pilihan: [
            "Menambah pekerjaan",
            "Memastikan kegiatan sesuai tujuan dan memberi pembinaan",
            "Mencari kesalahan",
            "Menyaingi desa",
            "Menghukum pengurus"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Ketika dana kegiatan Kampung KB terbatas, langkah terbaik adalah ...",
        pilihan: [
            "Menghentikan kegiatan",
            "Menggunakan dana pribadi sembarangan",
            "Memungut iuran paksa",
            "Menggali sumber daya lokal, bermitra dengan swasta dan lintas sektor secara transparan",
            "Menunggu tanpa upaya"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Hasil pencapaian Kampung KB yang baik dapat diukur melalui ...",
        pilihan: [
            "Banyaknya foto",
            "Banyaknya spanduk",
            "Banyaknya kunjungan pejabat",
            "Peningkatan indikator keluarga seperti kesehatan, pendidikan, dan partisipasi kegiatan",
            "Banyaknya rapat"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Perangkat desa di Kampung KB kurang peduli pada kegiatan. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Melapor tanpa dialog",
            "Membiarkan",
            "Menyalahkan perangkat desa",
            "Melakukan pendekatan dan advokasi dengan data manfaat bagi desa",
            "Mengambil alih desa"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Warga Kampung KB yang berprestasi diberi apresiasi agar ...",
        pilihan: [
            "Termotivasi dan menjadi teladan bagi warga lain",
            "Disaingkan",
            "Dihilangkan",
            "Disombongkan",
            "Dipisahkan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Dalam kegiatan Kampung KB, partisipasi perempuan dan laki-laki sebaiknya ...",
        pilihan: [
            "Hanya perempuan",
            "Dibatasi",
            "Setara dan saling mendukung",
            "Hanya laki-laki",
            "Tidak diperlukan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Remaja pelaku vandalisme di lingkungan Kampung KB perlu ...",
        pilihan: [
            "Dibina melalui kegiatan positif dan pendekatan persuasif",
            "Dilaporkan sebelum dialog",
            "Dibiarkan",
            "Dikucilkan",
            "Dihukum fisik"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Peta sosial (social mapping) di Kampung KB digunakan untuk ...",
        pilihan: [
            "Menghias kantor",
            "Menghitung pajak",
            "Mengenali potensi, masalah, dan sasaran program secara visual",
            "Menentukan batas desa",
            "Membuat laporan palsu"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Ketika kegiatan PIK-R tidak memiliki ruang, solusi yang tepat adalah ...",
        pilihan: [
            "Menghentikan kegiatan",
            "Memindahkan ke luar kota",
            "Memanfaatkan balai desa, sekolah, atau fasilitas bersama melalui kerja sama",
            "Menyewa gedung mewah",
            "Meniadakan PIK-R"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Penyuluh KB perlu memastikan kegiatan GenRe ramah bagi ...",
        pilihan: [
            "Hanya remaja laki-laki",
            "Hanya remaja kota",
            "Hanya remaja berprestasi",
            "Hanya remaja kaya",
            "Semua remaja tanpa diskriminasi"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Cara menggerakkan remaja putus sekolah agar aktif dalam program adalah ...",
        pilihan: [
            "Mengucilkan",
            "Memaksa kembali ke sekolah tanpa dialog",
            "Mengabaikan",
            "Melibatkan dalam kegiatan keterampilan dan pemberdayaan yang sesuai minat",
            "Menyalahkan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Penyuluh KB menemukan tidak ada data remaja di wilayahnya. Langkah awal adalah ...",
        pilihan: [
            "Mengabaikan sasaran remaja",
            "Mendata sasaran remaja bersama kader dan perangkat desa",
            "Menunggu data dari pusat",
            "Mengisi data fiktif",
            "Menyatakan tidak ada remaja"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Dalam komunikasi dengan remaja, Penyuluh KB sebaiknya ...",
        pilihan: [
            "Memotong pembicaraan",
            "Menggurui",
            "Menghakimi",
            "Mendengarkan aktif dan menggunakan bahasa yang mudah dipahami",
            "Mengancam"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Kegiatan penyuluhan di sekolah akan lebih berhasil bila ...",
        pilihan: [
            "Interaktif dengan permainan, diskusi, dan studi kasus",
            "Hanya membagikan brosur",
            "Hanya ceramah panjang",
            "Hanya video tanpa diskusi",
            "Dilakukan tanpa persiapan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Remaja yang menjadi korban kekerasan seksual perlu ...",
        pilihan: [
            "Dirahasiakan tanpa bantuan",
            "Disalahkan",
            "Perlindungan, pendampingan, dan rujukan ke layanan yang berwenang",
            "Dibiarkan",
            "Dinikahkan paksa"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Ketika remaja mengaku mengalami kekerasan, Penyuluh KB sebaiknya ...",
        pilihan: [
            "Mengabaikan",
            "Menyebarkan cerita",
            "Menyuruh berdamai dengan pelaku",
            "Menyalahkan korban",
            "Mendengarkan, menjaga kerahasiaan, dan segera berkoordinasi dengan pihak berwenang untuk perlindungan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Pesan kunci GenRe bagi remaja adalah ...",
        pilihan: [
            "Bebas tanpa aturan",
            "Berhenti sekolah",
            "Menikah secepatnya",
            "Menunda usia pernikahan, menghindari seks pranikah, NAPZA, dan merencanakan masa depan",
            "Menghindari keluarga"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Penyuluh KB mengundang tokoh agama pada kegiatan GenRe. Tujuannya adalah ...",
        pilihan: [
            "Menghindari remaja",
            "Memperkuat nilai moral dan dukungan masyarakat terhadap perencanaan kehidupan remaja",
            "Menunda kegiatan",
            "Memecah belah",
            "Mengganti materi"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Jika sebuah PIK-R tidak aktif, pembinaan yang tepat adalah ...",
        pilihan: [
            "Menyalahkan remaja",
            "Menutup permanen",
            "Mengidentifikasi penyebab, menguatkan pengelola, dan membangun kembali motivasi remaja",
            "Memindahkan semua anggota",
            "Membiarkan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Orang tua remaja mengeluh anak kecanduan gawai. Penyuluh KB dapat ...",
        pilihan: [
            "Mengabaikan",
            "Mengedukasi tentang pengasuhan digital dan membuat kegiatan alternatif positif",
            "Menyuruh membuang gawai",
            "Menyalahkan anak",
            "Menyita gawai tanpa komunikasi"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Instrumen untuk menilai kegiatan PIK-R meliputi ...",
        pilihan: [
            "Banyaknya rapat",
            "Banyaknya spanduk",
            "Banyaknya foto",
            "Banyaknya pengurus",
            "Jumlah anggota aktif, kegiatan rutin, dan dampak pada pengetahuan remaja"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Stunting adalah kondisi gagal tumbuh pada anak balita akibat ...",
        pilihan: [
            "Kekurangan gizi kronis dalam waktu lama, terutama pada 1.000 hari pertama kehidupan",
            "Kelebihan gizi",
            "Terlalu banyak bermain",
            "Kekurangan tidur",
            "Faktor keturunan sepenuhnya"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Periode 1.000 Hari Pertama Kehidupan (HPK) dihitung sejak ...",
        pilihan: [
            "Sekolah dasar",
            "Usia 1 sampai 3 tahun",
            "Lahir sampai usia 2 tahun",
            "Usia remaja",
            "Masa kehamilan sampai anak berusia 2 tahun"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Tim Pendamping Keluarga (TPK) terdiri dari ...",
        pilihan: [
            "Polisi dan TNI",
            "Bidan, kader KB, dan kader PKK",
            "Pengusaha dan kontraktor",
            "Guru, camat, dan lurah",
            "Dokter spesialis saja"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Aplikasi Elsimil digunakan untuk ...",
        pilihan: [
            "Menjual alokon",
            "Mengatur jadwal ibadah",
            "Memesan layanan transportasi",
            "Skrining kesehatan calon pengantin dan pendampingan calon pasangan hingga masa kehamilan",
            "Menghitung pajak"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "TPK di wilayah binaan Anda belum rutin menginput data pendampingan di Elsimil. Langkah yang tepat adalah ...",
        pilihan: [
            "Menyalahkan TPK",
            "Mengganti seluruh TPK",
            "Mendampingi dan melatih TPK, menggali kendala teknis, serta memantau kualitas pelaporan secara berkala",
            "Menunggu mereka belajar sendiri",
            "Menginput sendiri semua data tanpa melibatkan TPK"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Dapur Sehat Atasi Stunting (DASHAT) berfungsi ...",
        pilihan: [
            "Kegiatan hiburan",
            "Pusat penyimpanan beras",
            "Menjual makanan cepat saji",
            "Menyediakan makanan bergizi bagi keluarga berisiko stunting dan edukasi gizi lokal",
            "Tempat arisan warga"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Ketika kader menemukan balita dengan berat badan tidak naik dua bulan berturut-turut, tindakan yang tepat adalah ...",
        pilihan: [
            "Menunggu sampai bulan depan",
            "Memarahi kader",
            "Merujuk ke tenaga kesehatan, memberi edukasi gizi kepada orang tua, dan melakukan pendampingan lanjutan",
            "Menyuruh ganti Posyandu",
            "Menyalahkan orang tua"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Calon pengantin perempuan dengan lingkar lengan atas kurang dari 23,5 cm dan kurang gizi sebaiknya ...",
        pilihan: [
            "Segera hamil agar cepat memiliki anak",
            "Menunda sekolah",
            "Menikah tanpa pemeriksaan",
            "Menghindari semua tenaga kesehatan",
            "Mendapat pendampingan perbaikan gizi dan pemeriksaan kesehatan sebelum merencanakan kehamilan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Orang tua asuh pada gerakan GENTING bertugas ...",
        pilihan: [
            "Menyimpan data keluarga",
            "Menjadi pengganti orang tua kandung",
            "Mengelola pemerintahan desa",
            "Mengasuh anak sepenuhnya",
            "Memberikan dukungan, terutama untuk gizi dan kebutuhan lain, kepada anak berisiko stunting dan keluarganya"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Penyuluh KB perlu memastikan bahwa dalam pelaksanaan GENTING, bantuan yang diberikan ...",
        pilihan: [
            "Dipakai untuk kepentingan pribadi",
            "Tepat sasaran, dicatat, dan dilaporkan secara transparan",
            "Dihentikan setelah foto dokumentasi",
            "Disimpan sendiri dahulu",
            "Dibagikan merata ke seluruh warga tanpa data"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pencegahan stunting yang paling efektif dilakukan melalui ...",
        pilihan: [
            "Hanya menunggu program dari pusat",
            "Hanya memberi vitamin saat anak sakit",
            "Hanya pemberian susu",
            "Intervensi gizi spesifik dan sensitif dimulai dari remaja, calon pengantin, ibu hamil, hingga balita",
            "Pengobatan tradisional saja"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Keluarga berisiko stunting meliputi keluarga yang ...",
        pilihan: [
            "Tidak memiliki anak",
            "Memiliki ibu hamil dan balita dengan masalah gizi, sanitasi buruk, atau air minum tidak layak",
            "Tinggal di kota besar saja",
            "Memiliki anak sehat tanpa kendala",
            "Memiliki penghasilan tetap"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Hal pertama yang dilakukan Penyuluh KB bila di wilayahnya ada banyak keluarga berisiko stunting adalah ...",
        pilihan: [
            "Menutup data",
            "Memetakan sasaran berdasarkan data valid, lalu bersama TPK menyusun rencana pendampingan",
            "Menunggu instruksi pusat",
            "Menyerahkan ke dinas kesehatan sepenuhnya",
            "Membagi bantuan kepada semua warga"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Dalam konvergensi percepatan penurunan stunting, peran lintas sektor adalah ...",
        pilihan: [
            "Opsional",
            "Hanya dilakukan Penyuluh KB",
            "Hanya dilakukan puskesmas",
            "Dilakukan terpisah masing-masing",
            "Berkoordinasi mulai dari perencanaan hingga evaluasi agar intervensi terpadu tepat sasaran"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Anak dikatakan stunting bila tinggi badan menurut umurnya berada pada ...",
        pilihan: [
            "Lebih dari 0 SD",
            "Kurang dari -2 standar deviasi (SD) standar pertumbuhan",
            "Sama dengan rata-rata",
            "Kurang dari -1 SD",
            "Lebih dari +2 SD"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Stunting berat (severely stunted) ditandai tinggi badan menurut umur ...",
        pilihan: [
            "Sama dengan median",
            "Kurang dari -2 SD",
            "Kurang dari -1 SD",
            "Kurang dari -3 SD",
            "Lebih dari -2 SD"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Dampak jangka panjang stunting meliputi ...",
        pilihan: [
            "Peningkatan tinggi badan",
            "Prestasi akademik selalu baik",
            "Gangguan perkembangan otak, kecerdasan, dan produktivitas di masa dewasa",
            "Tidak ada dampak",
            "Kekebalan tubuh kuat"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Perpres yang mengatur percepatan penurunan stunting adalah ...",
        pilihan: [
            "Perpres Nomor 72 Tahun 2021",
            "Perpres Nomor 5 Tahun 2020",
            "Perpres Nomor 1 Tahun 2010",
            "Perpres Nomor 100 Tahun 2018",
            "Perpres Nomor 10 Tahun 2015"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Berat badan lahir rendah (BBLR) adalah bayi dengan berat lahir kurang dari ...",
        pilihan: [
            "1.000 gram",
            "2.500 gram",
            "3.500 gram",
            "4.000 gram",
            "3.000 gram"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Anemia pada ibu hamil ditandai kadar hemoglobin kurang dari ...",
        pilihan: [
            "11 g/dL",
            "13 g/dL",
            "12 g/dL",
            "15 g/dL",
            "9 g/dL"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Ibu hamil dianjurkan mengonsumsi tablet tambah darah sebanyak ...",
        pilihan: [
            "30 tablet saja",
            "10 tablet",
            "Tidak perlu",
            "Sesuka hati",
            "Minimal 90 tablet selama kehamilan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Ibu hamil dengan lingkar lengan atas (LiLA) kurang dari 23,5 cm menunjukkan ...",
        pilihan: [
            "Kondisi normal",
            "Risiko kurang energi kronis (KEK)",
            "Anemia pasti",
            "Gizi lebih",
            "Hamil kembar"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "ASI eksklusif diberikan selama ...",
        pilihan: [
            "Dua tahun",
            "Hanya sebulan",
            "Enam bulan pertama kehidupan bayi",
            "Satu tahun",
            "Tiga bulan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "MPASI mulai diberikan pada bayi berusia ...",
        pilihan: [
            "Tiga bulan",
            "Satu tahun",
            "Satu bulan",
            "Dua bulan",
            "Enam bulan dengan gizi seimbang dan kaya protein hewani"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Kader menemukan bayi berusia 3 bulan sudah diberi pisang oleh ibunya. Tindakan yang tepat adalah ...",
        pilihan: [
            "Mengabaikan",
            "Mengedukasi ibu tentang ASI eksklusif sampai enam bulan dengan cara ramah",
            "Menyuruh ibu berhenti menyusui",
            "Membenarkan",
            "Memarahi ibu"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Buku KIA berguna untuk ...",
        pilihan: [
            "Mencatat utang",
            "Menyimpan uang",
            "Mencatat dan memantau kesehatan ibu dan anak",
            "Sampul foto",
            "Hiburan anak"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pemantauan pertumbuhan balita di Posyandu mencakup ...",
        pilihan: [
            "Hanya pemberian vitamin",
            "Penimbangan berat badan dan pengukuran panjang atau tinggi badan secara rutin",
            "Tanpa pencatatan",
            "Hanya penimbangan sekali setahun",
            "Hanya pengukuran suhu"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Seorang ibu enggan membawa anaknya ke Posyandu karena merasa anaknya sehat. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menyalahkan ibu",
            "Mengabaikan",
            "Memaksa ibu",
            "Mengumumkan namanya",
            "Menjelaskan manfaat pemantauan rutin dan imunisasi bagi tumbuh kembang anak"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Imunisasi dasar lengkap penting untuk ...",
        pilihan: [
            "Mengobati stunting",
            "Melindungi anak dari penyakit berbahaya dan mendukung tumbuh kembang",
            "Menggantikan gizi",
            "Mengurangi nafsu makan",
            "Meningkatkan tinggi badan otomatis"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Penyebab langsung stunting meliputi ...",
        pilihan: [
            "Hanya kemiskinan",
            "Hanya tidak sekolah",
            "Tidak ada penyebab",
            "Asupan gizi yang tidak adekuat dan penyakit infeksi",
            "Hanya faktor keturunan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Intervensi gizi spesifik dalam penurunan stunting contohnya ...",
        pilihan: [
            "Bantuan pendidikan umum",
            "Perbaikan pasar",
            "Pembangunan irigasi",
            "Pemberian tablet tambah darah dan makanan tambahan bagi ibu hamil KEK",
            "Pembangunan jalan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Intervensi gizi sensitif contohnya ...",
        pilihan: [
            "Penyediaan air bersih, sanitasi, dan pendidikan pengasuhan",
            "Pemberian makanan tambahan balita",
            "Pemberian vitamin A",
            "Pemberian tablet tambah darah",
            "Pemberian ASI"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Rembuk Stunting adalah ...",
        pilihan: [
            "Pertemuan arisan",
            "Rapat organisasi pemuda",
            "Lomba balita sehat",
            "Pertemuan dagang",
            "Pertemuan lintas pihak untuk menyepakati rencana dan komitmen percepatan penurunan stunting"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Audit Kasus Stunting (AKS) bertujuan ...",
        pilihan: [
            "Menutup kasus",
            "Menelusuri penyebab kasus stunting dan merumuskan tindak lanjut",
            "Mengumumkan kasus",
            "Mencari kambing hitam",
            "Menghukum keluarga"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Tim Pendamping Keluarga bertugas mendampingi ...",
        pilihan: [
            "Hanya pegawai",
            "Hanya tokoh masyarakat",
            "Hanya lansia",
            "Hanya remaja",
            "Calon pengantin, ibu hamil, ibu pascapersalinan, baduta, dan balita"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Kader PKK dalam TPK berperan ...",
        pilihan: [
            "Menggantikan bidan",
            "Mengabaikan keluarga",
            "Menggerakkan dan mendampingi keluarga, termasuk edukasi dan pencatatan sesuai peran",
            "Menentukan diagnosis",
            "Mengobati penyakit"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Bidan dalam TPK berperan ...",
        pilihan: [
            "Hanya mengadministrasi",
            "Menolak sasaran",
            "Memberi pelayanan dan pemeriksaan kesehatan sesuai kewenangan serta mendampingi keluarga sasaran",
            "Menghilangkan layanan",
            "Menggantikan kader"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kader KB dalam TPK berperan ...",
        pilihan: [
            "Memasang alokon",
            "Mengabaikan data",
            "Menggantikan bidan",
            "Edukasi KB, pendampingan, dan pencatatan keluarga sasaran sesuai peran",
            "Menentukan metode untuk klien"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Elsimil dapat digunakan untuk ...",
        pilihan: [
            "Belanja daring",
            "Memesan transportasi",
            "Hiburan",
            "Menjual produk bayi",
            "Skrining kesehatan calon pengantin, pendampingan hingga masa hamil, dan pelaporan oleh TPK"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Calon pengantin sebaiknya mendaftar dan memeriksakan diri pada Elsimil ...",
        pilihan: [
            "Setelah menikah",
            "Tidak perlu",
            "Sekitar tiga bulan sebelum menikah",
            "Saat anak lahir",
            "Saat hamil besar"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Hasil skrining Elsimil menunjukkan calon pengantin berisiko. Tindakan yang tepat adalah ...",
        pilihan: [
            "Menunda pernikahan tanpa penjelasan",
            "Menyalahkan calon pengantin",
            "Pendampingan, edukasi, dan rujukan perbaikan kondisi sebelum merencanakan kehamilan",
            "Mengumumkan hasil",
            "Membiarkan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pelaporan Elsimil yang berkualitas ditandai dengan ...",
        pilihan: [
            "Data tanpa nama",
            "Data hasil salinan",
            "Data perkiraan",
            "Data lengkap, akurat, tepat waktu, dan sesuai kondisi lapangan",
            "Data lama"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Ketika TPK kesulitan menggunakan Elsimil, Penyuluh KB perlu ...",
        pilihan: [
            "Menghentikan penggunaan",
            "Memberi bimbingan teknis dan pendampingan berkelanjutan",
            "Mengganti TPK",
            "Menunggu TPK belajar sendiri",
            "Menyalahkan TPK"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Data Elsimil yang bertolak belakang dengan kondisi lapangan sebaiknya ...",
        pilihan: [
            "Diperbaiki tanpa verifikasi",
            "Dihapus",
            "Disembunyikan",
            "Dibiarkan",
            "Diverifikasi bersama TPK dan diperbaiki sesuai prosedur"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "DASHAT memberikan manfaat berupa ...",
        pilihan: [
            "Makanan bergizi berbasis pangan lokal bagi sasaran dan edukasi gizi",
            "Makanan tidak bergizi",
            "Pesta warga",
            "Makanan cepat saji",
            "Hiburan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pangan lokal yang kaya protein hewani untuk balita antara lain ...",
        pilihan: [
            "Mie instan",
            "Minuman manis",
            "Telur, ikan, dan daging sesuai ketersediaan setempat",
            "Keripik",
            "Permen"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Orang tua menolak memberi ikan kepada anak karena takut alergi tanpa bukti. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Mengedukasi dan menyarankan konsultasi tenaga kesehatan bila ada kekhawatiran alergi",
            "Melarang makan protein",
            "Menyalahkan orang tua",
            "Menyuruh memaksa anak",
            "Mengabaikan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Contoh praktik pengasuhan yang mendukung tumbuh kembang anak adalah ...",
        pilihan: [
            "Hukuman fisik",
            "Membiarkan sendirian",
            "Mengabaikan tangisan",
            "Responsif, penuh kasih sayang, stimulasi, dan pemberian gizi seimbang",
            "Membatasi makanan bergizi"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Sanitasi buruk berhubungan dengan stunting karena ...",
        pilihan: [
            "Tidak ada hubungan",
            "Meningkatkan tinggi badan",
            "Menambah gizi",
            "Meningkatkan risiko infeksi yang mengganggu penyerapan gizi",
            "Menaikkan nafsu makan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Perilaku hidup bersih dan sehat yang perlu ditanamkan adalah ...",
        pilihan: [
            "Mencuci tangan dengan sabun, memakai jamban sehat, dan air minum aman",
            "Minum air tidak dimasak",
            "Membuang sampah ke sungai",
            "Buang air sembarangan",
            "Tidak mencuci tangan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Keluarga berisiko stunting tidak memiliki jamban. Penyuluh KB dapat ...",
        pilihan: [
            "Berkoordinasi dengan desa dan mitra untuk dukungan sanitasi serta edukasi",
            "Mengabaikan",
            "Mengusir keluarga",
            "Memaksa membangun sendiri tanpa bantuan",
            "Menyalahkan keluarga"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pernikahan pasangan dengan kondisi anemia dan KEK sebaiknya ...",
        pilihan: [
            "Dibatalkan paksa",
            "Segera hamil",
            "Dibiarkan",
            "Dirahasiakan",
            "Didampingi perbaikan gizi dan kesehatan sebelum merencanakan kehamilan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Pemberian makanan tambahan (PMT) ditujukan ...",
        pilihan: [
            "Menggantikan seluruh makanan keluarga",
            "Dijual kembali",
            "Dihentikan",
            "Dibagikan ke semua warga",
            "Melengkapi asupan gizi sasaran tertentu, bukan menggantikan makanan utama"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Ketika makanan tambahan dibagikan keluarga sasaran kepada anggota lain, Penyuluh KB perlu ...",
        pilihan: [
            "Menghentikan bantuan",
            "Memarahi",
            "Membiarkan",
            "Mengedukasi bahwa makanan tambahan diperuntukkan bagi sasaran dan memantau konsumsinya",
            "Mengumumkan keluarga"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Skrining anemia remaja putri dilakukan untuk ...",
        pilihan: [
            "Menyalahkan sekolah",
            "Memberhentikan sekolah",
            "Menghukum remaja",
            "Mencegah anemia sejak dini sebelum masa kehamilan",
            "Mengurangi aktivitas"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Tablet tambah darah untuk remaja putri diminum ...",
        pilihan: [
            "Tidak perlu",
            "Sesuai anjuran program, umumnya seminggu sekali",
            "Setiap jam",
            "Hanya saat menstruasi",
            "Hanya saat sakit"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kader menemukan balita berat badan tidak naik dan tampak pendek. Tindakan awal yang tepat adalah ...",
        pilihan: [
            "Menyalahkan ibu",
            "Merujuk ke tenaga kesehatan dan mendampingi keluarga untuk perbaikan pola asuh serta gizi",
            "Menunggu sampai membaik",
            "Menyuruh makan banyak tanpa evaluasi",
            "Mengabaikan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Rujukan balita ke puskesmas harus ...",
        pilihan: [
            "Ditunda",
            "Dilakukan paksa",
            "Disertai informasi dan pendampingan agar keluarga memahami",
            "Tanpa penjelasan",
            "Dirahasiakan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pendampingan keluarga berisiko stunting berfokus pada ...",
        pilihan: [
            "Hanya foto kegiatan",
            "Hanya laporan",
            "Hanya pengumuman",
            "Hanya memberi uang",
            "Edukasi, pemantauan, rujukan, dan fasilitasi dukungan lintas sektor"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Stunting tidak hanya dipengaruhi gizi, tetapi juga ...",
        pilihan: [
            "Pola asuh, sanitasi, akses air bersih, dan layanan kesehatan",
            "Hanya hobi",
            "Tidak ada faktor lain",
            "Hanya nama anak",
            "Hanya warna kulit"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Ketika angka stunting turun di suatu desa, langkah yang tepat adalah ...",
        pilihan: [
            "Mengurangi pemantauan",
            "Menyatakan masalah selesai",
            "Menghentikan semua kegiatan",
            "Menutup Posyandu",
            "Mempertahankan intervensi dan terus memantau"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Di desa yang aksesnya sulit, intervensi stunting dapat dipermudah dengan ...",
        pilihan: [
            "Menghentikan layanan",
            "Meminta warga datang jauh",
            "Menunggu akses jalan terbangun",
            "Mengabaikan sasaran",
            "Kunjungan rumah oleh TPK dan kader serta pemanfaatan teknologi bila memungkinkan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Pemberian bantuan GENTING dilakukan kepada ...",
        pilihan: [
            "Keluarga kerabat",
            "Keluarga berisiko stunting sesuai data dan hasil verifikasi",
            "Keluarga pejabat",
            "Keluarga pilihan pribadi",
            "Semua keluarga"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pada 1.000 HPK, peran ayah yang penting adalah ...",
        pilihan: [
            "Hanya mencari nafkah",
            "Mendukung kesehatan ibu, gizi keluarga, dan pengasuhan",
            "Menyerahkan semuanya pada istri",
            "Mengabaikan kunjungan antenatal",
            "Tidak terlibat"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kelas ibu hamil bertujuan ...",
        pilihan: [
            "Membatasi aktivitas",
            "Menjual produk",
            "Menghibur ibu hamil",
            "Meningkatkan pengetahuan dan keterampilan ibu hamil dan keluarga mengenai kehamilan, persalinan, dan nifas",
            "Mengganti pemeriksaan kehamilan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Bidan desa menemukan ibu hamil dengan risiko tinggi. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Berkoordinasi dalam pendampingan dan memastikan rujukan serta dukungan keluarga",
            "Menyarankan pengobatan tradisional saja",
            "Mengabaikan",
            "Menyalahkan ibu",
            "Menunda pendampingan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Orang tua asuh tidak lagi memberikan dukungan di tengah jalan. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menjalin komunikasi, mencari penyebab, dan mengupayakan keberlanjutan dukungan melalui mitra lain",
            "Menghentikan bantuan semua anak",
            "Menyalahkan orang tua asuh di depan umum",
            "Menyembunyikan informasi",
            "Mengabaikan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Dalam penurunan stunting, konvergensi berarti ...",
        pilihan: [
            "Penyatuan upaya berbagai sektor pada sasaran dan lokasi yang sama",
            "Setiap sektor bekerja sendiri",
            "Menyaingi sektor lain",
            "Menutup program lain",
            "Menggabungkan semua anggaran tanpa data"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Dalam rapat konvergensi desa, Penyuluh KB sebaiknya membawa ...",
        pilihan: [
            "Cerita tanpa data",
            "Dokumentasi lama",
            "Opini pribadi",
            "Data sasaran dan capaian layanan sebagai dasar perencanaan",
            "Janji kosong"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Keluarga sasaran meninggalkan wilayah (pindah). Tindakan Penyuluh KB adalah ...",
        pilihan: [
            "Membiarkan",
            "Menyalahkan keluarga",
            "Mengoordinasikan pelimpahan pendampingan dan pencatatan ke wilayah baru",
            "Menunggu mereka kembali",
            "Menghapus data"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Peran pemerintah desa dalam penurunan stunting adalah ...",
        pilihan: [
            "Mengalokasikan sumber daya, menggerakkan warga, dan memastikan layanan menjangkau sasaran",
            "Hanya mengawasi",
            "Menyerahkan semuanya kepada kader",
            "Hanya menerima laporan",
            "Tidak terlibat"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB mendampingi keluarga yang meyakini mitos pantangan makanan bagi ibu hamil. Pendekatan terbaik adalah ...",
        pilihan: [
            "Memaksa mengubah kebiasaan",
            "Memahami budaya setempat, lalu mengedukasi gizi seimbang secara persuasif bersama tokoh",
            "Menertawakan",
            "Mengabaikan",
            "Menyalahkan mitos tegas"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Cara memantau status gizi ibu hamil di tingkat masyarakat adalah ...",
        pilihan: [
            "Menebak penampilan",
            "Menanyakan tetangga",
            "Pengukuran LiLA, penimbangan berat badan, dan pemeriksaan kehamilan rutin",
            "Hanya melihat wajah",
            "Tidak diperlukan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pada kunjungan rumah keluarga berisiko stunting, hal yang dikaji meliputi ...",
        pilihan: [
            "Hanya jumlah ruangan",
            "Hanya pendidikan orang tua",
            "Hanya penghasilan",
            "Hanya usia anak",
            "Kondisi gizi, sanitasi, pola asuh, dan akses layanan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Ibu balita sering tidak memberi sayur karena anak menolak. Saran Penyuluh KB adalah ...",
        pilihan: [
            "Memaksa dengan hukuman",
            "Menghentikan pemberian",
            "Mengabaikan",
            "Menyalahkan anak",
            "Mengolah dengan variasi menarik dan memberi contoh makan sayur bersama"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Kemiskinan ekstrem dan stunting saling berkaitan sehingga penanganan perlu ...",
        pilihan: [
            "Terpadu melibatkan sektor kesehatan, pendidikan, sosial, dan ekonomi",
            "Tidak perlu",
            "Hanya sektor kesehatan",
            "Hanya bantuan tunai",
            "Hanya sekolah"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pencatatan hasil pendampingan keluarga berisiko stunting perlu dilakukan ...",
        pilihan: [
            "Tidak perlu",
            "Berkala dan akurat sebagai dasar tindak lanjut",
            "Menunggu audit",
            "Satu kali",
            "Dengan data fiktif"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Quick Win Bangga Kencana yang berfokus pada penyediaan tempat pengasuhan anak balita yang aman bagi orang tua pekerja adalah ...",
        pilihan: [
            "Kelas Ibu Hamil",
            "SIDAYA",
            "GENTING",
            "Posyandu Remaja",
            "TAMASYA (Taman Asuh Sayang Anak)"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "GENTING dalam Quick Win Bangga Kencana merupakan singkatan dari ...",
        pilihan: [
            "Gerakan Edukasi Nutrisi Terpadu",
            "Gerakan Remaja Terdidik",
            "Generasi Terencana Mandiri",
            "Gerakan Orang Tua Asuh Cegah Stunting",
            "Gerakan Ibu Sehat"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Quick Win yang bertujuan memberdayakan lansia agar sehat, aktif, dan produktif adalah ...",
        pilihan: [
            "PIK-R",
            "TAMASYA",
            "Kelas Remaja",
            "GENTING",
            "Lansia Berdaya (SIDAYA)"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Quick Win Super Apps Keluarga Indonesia bertujuan ...",
        pilihan: [
            "Menyediakan layanan dan informasi keluarga yang terintegrasi dalam satu aplikasi",
            "Memantau cuaca",
            "Menjual perlengkapan bayi",
            "Hiburan keluarga saja",
            "Mengatur kendaraan umum"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Orang tua pekerja di kelurahan Anda kesulitan menitipkan anak balita. Sebagai Penyuluh KB, tindakan yang paling tepat adalah ...",
        pilihan: [
            "Menginisiasi dan mendampingi pembentukan TAMASYA bersama pemerintah kelurahan, kader, dan mitra, dengan standar pengasuhan yang layak",
            "Menyerahkan ke swasta tanpa pembinaan",
            "Menunggu program turun",
            "Menitipkan anak ke kantor kelurahan",
            "Menyarankan berhenti bekerja"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pengasuh di TAMASYA binaan Anda belum memahami pengasuhan anak berkualitas. Langkah yang tepat adalah ...",
        pilihan: [
            "Memberikan pelatihan dan pendampingan pengasuhan, serta berkoordinasi dengan lintas sektor",
            "Membiarkan",
            "Menutup TAMASYA",
            "Mengganti seluruh pengasuh",
            "Menyerahkan ke orang tua"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Di wilayah binaan ada 12 keluarga berisiko stunting dan belum ada keterlibatan pihak swasta. Langkah paling tepat dalam GENTING adalah ...",
        pilihan: [
            "Meminta kepala desa membiayai dari dana pribadi",
            "Memetakan keluarga berisiko, menggandeng pihak swasta atau tokoh setempat sebagai orang tua asuh, serta mencatat hasilnya",
            "Menunggu instruksi tertulis dari provinsi",
            "Mengabaikan karena urusan dinas kesehatan",
            "Mengumumkan data keluarga di media sosial"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Seorang calon orang tua asuh ingin membantu tetapi tidak tahu cara menyalurkan. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menyuruh langsung memberi ke siapa saja",
            "Mengarahkan sesuai mekanisme GENTING dan memastikan bantuan tepat sasaran serta dicatat",
            "Menunda tanpa kabar",
            "Menerima uang secara pribadi",
            "Menolak bantuan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Banyak lansia di wilayah binaan kesepian dan tidak aktif, sementara kegiatan BKL vakum. Tindakan Penyuluh KB adalah ...",
        pilihan: [
            "Menganggap lansia bukan sasaran",
            "Menghidupkan kembali BKL, mengaitkannya dengan layanan kesehatan lansia, dan melibatkan keluarga",
            "Mengadakan kegiatan sekali lalu berhenti",
            "Membubarkan BKL",
            "Menyerahkan lansia ke panti"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Tujuan utama program Lansia Berdaya adalah ...",
        pilihan: [
            "Menjadikan lansia bergantung pada keluarga",
            "Membatasi aktivitas lansia",
            "Menghentikan kegiatan BKL",
            "Mewujudkan lansia yang sehat, mandiri, aktif, dan produktif",
            "Menggantikan peran puskesmas"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pelayanan sekolah lansia yang berkelanjutan memerlukan ...",
        pilihan: [
            "Dukungan lintas sektor, kader terlatih, dan kurikulum sesuai kebutuhan lansia",
            "Hanya dukungan penyuluh",
            "Tanpa pencatatan",
            "Dilakukan sekali",
            "Tanpa kader"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Aplikasi layanan keluarga yang sulit digunakan warga yang kurang paham teknologi. Tindakan Penyuluh KB adalah ...",
        pilihan: [
            "Menyalahkan warga",
            "Menyerahkan semuanya kepada warga",
            "Menghapus aplikasi",
            "Melakukan pendampingan literasi digital melalui kader dan mempermudah akses informasi",
            "Meminta warga membeli perangkat baru"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Penyuluh KB akan memperkenalkan Super Apps Keluarga Indonesia kepada kader. Hal yang paling tepat dilakukan adalah ...",
        pilihan: [
            "Memberi tahu lewat satu pesan",
            "Memberikan orientasi, praktik langsung, dan pendampingan penggunaan",
            "Memberikan tautan tanpa penjelasan",
            "Menyalahkan kader bila gagal",
            "Menunggu kader belajar sendiri"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Hasil kegiatan Quick Win di wilayah binaan perlu ...",
        pilihan: [
            "Dilaporkan sekali saja",
            "Dibagikan tanpa data",
            "Dirahasiakan",
            "Diabaikan setelah foto",
            "Didokumentasikan, dilaporkan, dan dievaluasi untuk perbaikan berkelanjutan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Agar Quick Win berhasil, pihak yang perlu digerakkan Penyuluh KB adalah ...",
        pilihan: [
            "Hanya sekolah",
            "Hanya orang tua",
            "Hanya penyuluh sendiri",
            "Hanya kecamatan",
            "Pemerintah desa, kader, tokoh masyarakat, swasta, dan lintas sektor"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "TAMASYA merupakan singkatan dari ...",
        pilihan: [
            "Tempat Asuh Sehat Anak",
            "Taman Asuh Sehat Ibu",
            "Taman Asuh Sayang Anak",
            "Taman Sehat Bahagia",
            "Taman Asri Sehat Anak"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Sasaran utama TAMASYA adalah ...",
        pilihan: [
            "Calon pengantin",
            "Remaja",
            "Anak usia dini yang membutuhkan tempat pengasuhan saat orang tua bekerja",
            "Lansia",
            "Ibu hamil"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Hal utama yang harus dijaga dalam penyelenggaraan TAMASYA adalah ...",
        pilihan: [
            "Keuntungan semata",
            "Hiburan orang tua",
            "Tanpa standar",
            "Keamanan, kebersihan, pengasuhan berkualitas, dan stimulasi tumbuh kembang anak",
            "Jumlah anak sebanyak-banyaknya"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "TAMASYA yang dikelola kantor tempat orang tua bekerja bermanfaat untuk ...",
        pilihan: [
            "Mengabaikan anak",
            "Menggantikan sekolah",
            "Menambah beban kantor",
            "Membantu orang tua bekerja dengan tenang karena anak terjamin pengasuhannya",
            "Mengurangi jam kerja tanpa alasan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Kendala TAMASYA di wilayah binaan adalah tempat belum memadai. Solusi yang tepat adalah ...",
        pilihan: [
            "Memakai tempat tidak layak",
            "Memanfaatkan fasilitas yang ada sesuai standar bersama pemerintah desa dan mitra",
            "Menunggu bertahun-tahun",
            "Meminta orang tua menyediakan semua",
            "Membatalkan program"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pengasuh TAMASYA perlu ...",
        pilihan: [
            "Dipilih sembarangan",
            "Dilatih tentang pengasuhan, kesehatan, gizi, dan keselamatan anak",
            "Tidak dibina",
            "Dibiarkan tanpa pelatihan",
            "Diganti terus-menerus"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Ketika anak di TAMASYA sakit, pengasuh sebaiknya ...",
        pilihan: [
            "Menyembunyikan",
            "Memberi tahu orang tua dan membawa ke tenaga kesehatan sesuai kebutuhan",
            "Mengobati sendiri tanpa tahu",
            "Menyuruh anak diam",
            "Menyalahkan orang tua"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Penyuluh KB menemukan TAMASYA yang tidak bersih. Tindakan yang tepat adalah ...",
        pilihan: [
            "Memberi pembinaan, menyusun perbaikan bersama pengelola, dan memantau",
            "Menyalahkan anak",
            "Menyebarkan fotonya",
            "Menutup tanpa dialog",
            "Mengabaikan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Dalam TAMASYA, stimulasi anak dilakukan melalui ...",
        pilihan: [
            "Hukuman",
            "Hanya menonton televisi",
            "Permainan edukatif dan interaksi hangat sesuai usia",
            "Pelajaran berat",
            "Hanya tidur"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kerja sama TAMASYA dengan Posyandu bertujuan ...",
        pilihan: [
            "Menyaingi Posyandu",
            "Menghilangkan pengasuh",
            "Menambah kegiatan",
            "Mengganti Posyandu",
            "Memantau pertumbuhan dan kesehatan anak secara berkala"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Salah satu tujuan GENTING adalah ...",
        pilihan: [
            "Memberi hadiah",
            "Mengganti peran orang tua",
            "Menyaingi program lain",
            "Meningkatkan angka kelahiran",
            "Menurunkan angka stunting melalui dukungan orang tua asuh bagi keluarga berisiko"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Dalam GENTING, orang tua asuh dapat berasal dari ...",
        pilihan: [
            "Berbagai pihak seperti swasta, tokoh masyarakat, ASN, dan masyarakat peduli",
            "Hanya pejabat pusat",
            "Hanya Penyuluh KB",
            "Hanya warga miskin",
            "Hanya keluarga sasaran"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Bantuan orang tua asuh dalam GENTING sebaiknya berupa ...",
        pilihan: [
            "Uang tunai tanpa pencatatan",
            "Dukungan gizi, kebutuhan kesehatan, dan pendampingan sesuai kebutuhan anak",
            "Janji tanpa realisasi",
            "Barang yang tidak sesuai kebutuhan",
            "Hanya foto"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Penyuluh KB diminta memastikan data sasaran GENTING valid. Langkah yang tepat adalah ...",
        pilihan: [
            "Menebak data",
            "Menunda tanpa alasan",
            "Menggunakan data lama",
            "Memverifikasi data bersama TPK, kader, dan puskesmas",
            "Menyerahkan ke pihak lain"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Orang tua asuh meminta laporan penggunaan bantuannya. Sikap yang benar adalah ...",
        pilihan: [
            "Menolak",
            "Mengalihkan topik",
            "Memberi laporan palsu",
            "Menyembunyikan",
            "Memberikan laporan transparan dan akuntabel"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Keluarga berisiko stunting menolak bantuan karena malu. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Melakukan pendekatan persuasif dan menjaga martabat keluarga sambil menjelaskan manfaat",
            "Menghukum",
            "Mengumumkan namanya",
            "Mengabaikan",
            "Memaksa menerima"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pada GENTING, pemantauan dilakukan untuk ...",
        pilihan: [
            "Memastikan perkembangan anak dan keberlanjutan dukungan",
            "Menghentikan bantuan",
            "Menambah administrasi",
            "Menyaingi puskesmas",
            "Mencari kesalahan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "GENTING akan lebih berhasil bila dilaksanakan dengan ...",
        pilihan: [
            "Kolaborasi lintas sektor dan dukungan pemerintah daerah",
            "Tanpa data",
            "Dikerjakan sendiri",
            "Tanpa pelaporan",
            "Tanpa mitra"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB menemukan bantuan GENTING tidak tepat sasaran. Tindakan yang tepat adalah ...",
        pilihan: [
            "Menyembunyikan",
            "Membiarkan",
            "Menyalahkan pemberi bantuan",
            "Mengambil bantuan",
            "Melaporkan dan mengoreksi penyaluran berdasarkan data valid"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Lansia Berdaya bertujuan ...",
        pilihan: [
            "Mengganti peran keluarga",
            "Menggantikan layanan kesehatan",
            "Menjadikan lansia pasif",
            "Menjadikan lansia sehat, mandiri, aktif, dan produktif",
            "Membatasi aktivitas"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Salah satu bentuk kegiatan Lansia Berdaya adalah ...",
        pilihan: [
            "Hanya menonton TV",
            "Hanya kerja berat",
            "Hanya istirahat",
            "Sekolah lansia dengan kegiatan kesehatan, kerohanian, dan keterampilan",
            "Tanpa kegiatan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Lansia kesepian di wilayah binaan. Dukungan yang tepat adalah ...",
        pilihan: [
            "Mengabaikan",
            "Menyalahkan keluarga",
            "Menyerahkan ke panti",
            "Menyendirikan lansia",
            "Mengaktifkan BKL, melibatkan keluarga, dan mendorong interaksi sosial"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Keluarga lansia perlu dibina agar ...",
        pilihan: [
            "Mampu merawat dan menghargai lansia",
            "Menitipkan lansia",
            "Mengurangi interaksi",
            "Mengabaikan lansia",
            "Menganggap lansia beban"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Salah satu pilar kesehatan lansia yang didorong Penyuluh KB adalah ...",
        pilihan: [
            "Mengurung diri",
            "Makan sembarangan",
            "Aktivitas fisik, gizi seimbang, pemeriksaan rutin, dan kegiatan sosial",
            "Merokok",
            "Begadang"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Penyuluh KB mengajak kader lansia berpartisipasi. Cara yang tepat adalah ...",
        pilihan: [
            "Menghargai pengalaman lansia dan melibatkannya sebagai pelaku kegiatan",
            "Menganggap lansia tidak mampu",
            "Mengganti dengan remaja",
            "Menyuruh diam",
            "Mengabaikan usulan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Hambatan transportasi lansia ke kegiatan BKL dapat diatasi dengan ...",
        pilihan: [
            "Mengganti sasaran",
            "Kegiatan di dekat tempat tinggal atau kunjungan rumah oleh kader",
            "Tidak peduli",
            "Meniadakan kegiatan",
            "Memaksa datang"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Penyuluh KB melihat lansia tidak mau ikut kegiatan karena merasa tidak berguna. Tindakan yang tepat adalah ...",
        pilihan: [
            "Mengabaikan",
            "Menyalahkan",
            "Memberi apresiasi, menggali kemampuan, dan memberi peran bermakna",
            "Menertawakan",
            "Memaksa ikut"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pelayanan lansia di BKL bekerja sama dengan ...",
        pilihan: [
            "Tidak perlu mitra",
            "Puskesmas, Posyandu Lansia, dan lintas sektor terkait",
            "Hanya BKKBN",
            "Hanya sekolah",
            "Hanya swasta"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Lansia dikatakan produktif bila ...",
        pilihan: [
            "Tidak beraktivitas",
            "Hanya diam",
            "Bekerja berat tanpa batas",
            "Masih mampu berkontribusi sesuai kemampuan dan kondisi kesehatannya",
            "Bergantung penuh"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Super Apps Keluarga Indonesia dapat dimanfaatkan Penyuluh KB untuk ...",
        pilihan: [
            "Mengganti pelayanan tatap muka sepenuhnya",
            "Menjual produk",
            "Mengakses layanan dan informasi keluarga terintegrasi serta mendukung pendampingan",
            "Hanya bermain game",
            "Menyimpan foto pribadi"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kendala sinyal di wilayah terpencil menyulitkan penggunaan aplikasi layanan keluarga. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menghentikan penggunaan",
            "Menunggu tanpa tindakan",
            "Menyalahkan warga",
            "Mengabaikan",
            "Mencari solusi pendampingan dan pencatatan alternatif lalu menyinkronkan saat sinyal tersedia"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Agar kader dapat memanfaatkan aplikasi keluarga, Penyuluh KB perlu ...",
        pilihan: [
            "Memberi tautan saja",
            "Memberi pelatihan praktik dan pendampingan",
            "Menyalahkan kader",
            "Mengganti kader",
            "Menunggu kader belajar sendiri"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Aplikasi Super Apps Keluarga menyimpan data keluarga. Penyuluh KB harus ...",
        pilihan: [
            "Menjual data",
            "Mengunggah data ke medsos",
            "Menjaga kerahasiaan dan keamanan data pengguna",
            "Mengabaikan keamanan",
            "Membagikan data kepada siapa saja"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Quick Win dipilih karena ...",
        pilihan: [
            "Memiliki dampak cepat dan nyata bagi masyarakat",
            "Tidak butuh mitra",
            "Tidak perlu data",
            "Hanya formalitas",
            "Mudah dipalsukan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB perlu memahami indikator keberhasilan Quick Win agar ...",
        pilihan: [
            "Mengatur hasil sesuka hati",
            "Menyederhanakan kegiatan tanpa tujuan",
            "Menyalahkan pihak lain",
            "Mengabaikan data",
            "Dapat memantau dan melaporkan capaian secara tepat"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Mitra swasta ingin mendukung Quick Win tetapi belum tahu prosedur. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Meminta imbalan pribadi",
            "Menjelaskan mekanisme kerja sama secara transparan dan mengarahkan sesuai ketentuan",
            "Menunda tanpa kabar",
            "Menolak",
            "Menerima tanpa prosedur"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Ketika satu Quick Win berjalan baik, langkah berikutnya adalah ...",
        pilihan: [
            "Merahasiakan",
            "Mendokumentasikan praktik baik dan mereplikasi ke wilayah lain",
            "Menghentikan",
            "Mengubah semua",
            "Mengabaikan pemantauan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kolaborasi lintas sektor dalam Quick Win dapat melibatkan ...",
        pilihan: [
            "Pemerintah daerah, swasta, perguruan tinggi, organisasi masyarakat, dan media",
            "Hanya kader",
            "Hanya warga",
            "Hanya BKKBN",
            "Hanya satu OPD"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Ketika kader mengeluh beban kerja Quick Win bertambah, Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menghentikan kegiatan",
            "Menggantikan semua kader",
            "Menyederhanakan alur, membagi peran, dan memberi dukungan",
            "Mengabaikan keluhan",
            "Memarahi kader"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Publikasi keberhasilan Quick Win sebaiknya ...",
        pilihan: [
            "Menyebut kelemahan sasaran",
            "Tanpa data",
            "Faktual dan menghormati privasi serta martabat sasaran",
            "Menampilkan wajah sasaran tanpa izin",
            "Dilebih-lebihkan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Evaluasi Quick Win dilakukan untuk ...",
        pilihan: [
            "Menilai dampak dan memperbaiki pelaksanaan",
            "Mencari kambing hitam",
            "Menghentikan program",
            "Menambah laporan",
            "Menyaingi program lain"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Dalam melaksanakan Quick Win, hal pertama yang perlu dipahami Penyuluh KB adalah ...",
        pilihan: [
            "Siapa yang paling berkuasa",
            "Tujuan, sasaran, dan mekanisme pelaksanaan program",
            "Cara menghindari tugas",
            "Besaran anggaran pribadi",
            "Siapa yang bisa disalahkan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Bina Keluarga Balita (BKB) bertujuan ...",
        pilihan: [
            "Melayani kontrasepsi",
            "Membina lansia",
            "Mengelola dana desa",
            "Meningkatkan pengetahuan dan keterampilan orang tua dalam pengasuhan dan tumbuh kembang anak usia dini",
            "Mengelola pasar"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Bina Keluarga Remaja (BKR) ditujukan bagi ...",
        pilihan: [
            "Kader PKK",
            "Orang tua yang memiliki remaja untuk meningkatkan pola asuh",
            "Balita",
            "Pasangan baru menikah",
            "Lansia"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Bina Keluarga Lansia (BKL) bertujuan ...",
        pilihan: [
            "Mengasuh balita",
            "Mengurus akta lahir",
            "Meningkatkan kualitas hidup lansia dan peran keluarga",
            "Melayani kontrasepsi",
            "Mendidik remaja"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "UPPKA adalah kelompok yang bertujuan ...",
        pilihan: [
            "Mengatur stok alokon",
            "Meningkatkan pendapatan keluarga akseptor melalui usaha ekonomi produktif",
            "Mengelola sampah",
            "Mengajarkan membaca",
            "Mengelola layanan kesehatan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Delapan fungsi keluarga meliputi ...",
        pilihan: [
            "Politik, hukum, ekonomi, budaya, olahraga, seni, agama, teknologi",
            "Agama, hukum, politik, seni, olahraga, kesehatan, pertanian, perikanan",
            "Keuangan, pekerjaan, pendidikan, hiburan, ibadah, olahraga, wisata, belanja",
            "Pangan, sandang, papan, listrik, air, jalan, sekolah, pasar",
            "Agama, sosial budaya, cinta kasih, perlindungan, reproduksi, sosialisasi dan pendidikan, ekonomi, serta pembinaan lingkungan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Keluarga yang tidak harmonis dan sering mengalami kekerasan dalam rumah tangga (KDRT) sebaiknya ...",
        pilihan: [
            "Dipisahkan secara paksa",
            "Dihukum oleh tokoh masyarakat",
            "Dibantu dengan konseling, perlindungan, dan rujukan ke layanan atau lembaga yang berwenang",
            "Dibiarkan menyelesaikan sendiri",
            "Diumumkan di forum warga"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Keluarga di wilayah binaan menjalankan pola asuh keras kepada anak. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Membiarkan karena urusan keluarga",
            "Melapor tanpa dialog",
            "Menyalahkan orang tua di depan umum",
            "Memberikan edukasi pengasuhan positif dan melibatkan keluarga dalam BKR/BKB",
            "Menyerahkan anak pada tetangga"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pengasuhan 1.000 HPK yang berkualitas melibatkan ...",
        pilihan: [
            "Hanya tenaga kesehatan",
            "Hanya ibu",
            "Peran ayah dan ibu secara bersama",
            "Hanya pengasuh",
            "Hanya nenek"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Peran suami dalam pembangunan keluarga yang paling penting adalah ...",
        pilihan: [
            "Mengambil seluruh keputusan tanpa berdiskusi",
            "Menyerahkan semuanya pada istri",
            "Hanya mencari nafkah",
            "Menjadi mitra setara dalam pengasuhan, pengambilan keputusan, dan perencanaan keluarga",
            "Tidak terlibat urusan anak"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pendekatan pemberdayaan ekonomi keluarga yang tepat oleh Penyuluh KB adalah ...",
        pilihan: [
            "Menunggu bantuan pemerintah",
            "Memberi uang tunai tanpa pendampingan",
            "Memfasilitasi pelatihan dan akses usaha melalui UPPKA bersama mitra",
            "Menyalahkan keluarga miskin",
            "Melarang usaha rumahan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Keluarga memiliki balita, remaja, dan lansia sekaligus (tiga generasi). Pendekatan Penyuluh KB yang paling tepat adalah ...",
        pilihan: [
            "Mengaitkan keluarga dengan BKB, BKR, dan BKL secara terpadu sesuai kebutuhan anggota",
            "Mengabaikan remaja",
            "Hanya fokus pada lansia",
            "Memilih satu kelompok",
            "Hanya fokus pada balita"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Keluarga Berkualitas menurut konsep Bangga Kencana adalah keluarga yang ...",
        pilihan: [
            "Sehat, sejahtera, maju, mandiri, dan memiliki jumlah anak ideal serta berwawasan ke depan",
            "Memiliki banyak anak",
            "Memiliki harta melimpah",
            "Tidak pernah bermasalah",
            "Hidup tanpa tetangga"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Program Bangga Kencana merupakan singkatan dari ...",
        pilihan: [
            "Pembangunan Keluarga, Kependudukan, dan Keluarga Berencana",
            "Pelayanan Keluarga dan Kependudukan Nasional",
            "Pendataan Keluarga dan Kesehatan Anak",
            "Pemberdayaan Keluarga dan Perencanaan Anak",
            "Pembinaan Keluarga dan KB Nasional"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Total Fertility Rate (TFR) adalah ...",
        pilihan: [
            "Jumlah akseptor KB",
            "Angka kematian ibu",
            "Rata-rata jumlah anak yang dilahirkan seorang perempuan selama masa suburnya",
            "Rasio ketergantungan",
            "Jumlah penduduk"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Fungsi keluarga yang berkaitan dengan penanaman nilai-nilai keagamaan disebut fungsi ...",
        pilihan: [
            "Perlindungan",
            "Pembinaan lingkungan",
            "Reproduksi",
            "Agama",
            "Ekonomi"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Fungsi keluarga yang memberi rasa aman dari ancaman fisik maupun psikis disebut ...",
        pilihan: [
            "Reproduksi",
            "Perlindungan",
            "Ekonomi",
            "Sosial budaya",
            "Agama"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Fungsi keluarga untuk meneruskan keturunan dan menjaga kesehatan reproduksi disebut ...",
        pilihan: [
            "Reproduksi",
            "Cinta kasih",
            "Agama",
            "Sosialisasi",
            "Ekonomi"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Fungsi sosialisasi dan pendidikan dalam keluarga bertujuan ...",
        pilihan: [
            "Membatasi pergaulan anak",
            "Mendidik anak agar mampu beradaptasi dan berkembang",
            "Menggantikan sekolah",
            "Menghukum anak",
            "Mengurangi interaksi"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Fungsi cinta kasih dalam keluarga ditunjukkan dengan ...",
        pilihan: [
            "Hubungan saling menyayangi dan menghargai antaranggota",
            "Saling bersaing",
            "Saling menyalahkan",
            "Saling menjauh",
            "Saling mengancam"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Fungsi pembinaan lingkungan berarti ...",
        pilihan: [
            "Merusak lingkungan",
            "Tidak bersosialisasi",
            "Keluarga peduli menjaga kebersihan dan kelestarian lingkungan",
            "Hanya fokus rumah",
            "Mengabaikan sampah"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Fungsi sosial budaya berarti keluarga ...",
        pilihan: [
            "Mengisolasi diri",
            "Menghilangkan budaya",
            "Mewariskan dan menjaga nilai budaya serta norma sosial yang baik",
            "Menolak adat",
            "Mengabaikan tetangga"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Indeks Pembangunan Keluarga (iBangga) mengukur tiga dimensi, yaitu ...",
        pilihan: [
            "Kelahiran, kematian, dan migrasi",
            "Pendidikan, kesehatan, dan hiburan",
            "Pangan, sandang, dan papan",
            "Ketenteraman, kemandirian, dan kebahagiaan",
            "Ekonomi, politik, dan hukum"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Keluarga dengan dimensi kemandirian rendah ditandai dengan ...",
        pilihan: [
            "Keterbatasan kondisi ekonomi dan kemampuan keluarga untuk memenuhi kebutuhan",
            "Hubungan baik antaranggota",
            "Lingkungan aman",
            "Rasa bahagia tinggi",
            "Hubungan harmonis"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Bina Keluarga Balita (BKB) disampaikan melalui ...",
        pilihan: [
            "Kelompok pertemuan orang tua dengan materi pengasuhan, gizi, dan stimulasi anak",
            "Rapat dinas",
            "Lomba olahraga",
            "Pertunjukan hiburan",
            "Pertemuan arisan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Alat bantu yang digunakan dalam BKB untuk stimulasi anak adalah ...",
        pilihan: [
            "Kartu remi",
            "Kartu domino",
            "Alat musik elektronik saja",
            "Buku dewasa",
            "Alat permainan edukatif (APE) dan Kartu Kembang Anak"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Orang tua ingin tahu cara menstimulasi bayi usia 6 bulan. Penyuluh KB dapat menyarankan ...",
        pilihan: [
            "Mengajak bicara, bermain cilukba, dan memberi mainan aman yang sesuai usia",
            "Menghukum bila rewel",
            "Membiarkan sendirian",
            "Menempatkan di depan layar sepanjang hari",
            "Memberi tekanan belajar"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pola asuh demokratis ditandai dengan ...",
        pilihan: [
            "Membiarkan",
            "Hukuman fisik",
            "Komunikasi dua arah, aturan jelas, dan kasih sayang",
            "Tanpa aturan",
            "Aturan tanpa penjelasan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Orang tua yang sering membandingkan anak dengan temannya dapat ...",
        pilihan: [
            "Meningkatkan motivasi anak selalu",
            "Tidak berdampak",
            "Meningkatkan prestasi selalu",
            "Menurunkan rasa percaya diri anak sehingga perlu edukasi pengasuhan positif",
            "Mempererat hubungan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Kekerasan terhadap anak di keluarga perlu ditangani dengan ...",
        pilihan: [
            "Perlindungan korban, edukasi keluarga, dan rujukan ke pihak berwenang",
            "Pemisahan paksa tanpa proses",
            "Hukuman publik",
            "Pembiaran",
            "Penyembunyian"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Undang-Undang yang mengatur penghapusan kekerasan dalam rumah tangga adalah ...",
        pilihan: [
            "UU Nomor 36 Tahun 2009",
            "UU Nomor 6 Tahun 2014",
            "UU Nomor 52 Tahun 2009",
            "UU Nomor 23 Tahun 2004",
            "UU Nomor 13 Tahun 1998"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Undang-Undang yang menjadi dasar perkembangan kependudukan dan pembangunan keluarga adalah ...",
        pilihan: [
            "UU Nomor 35 Tahun 2014",
            "UU Nomor 23 Tahun 2004",
            "UU Nomor 12 Tahun 2022",
            "UU Nomor 16 Tahun 2019",
            "UU Nomor 52 Tahun 2009"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Undang-Undang tentang Tindak Pidana Kekerasan Seksual adalah ...",
        pilihan: [
            "UU Nomor 13 Tahun 1998",
            "UU Nomor 23 Tahun 2004",
            "UU Nomor 6 Tahun 2014",
            "UU Nomor 52 Tahun 2009",
            "UU Nomor 12 Tahun 2022"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Undang-Undang tentang Kesejahteraan Lanjut Usia adalah ...",
        pilihan: [
            "UU Nomor 13 Tahun 1998",
            "UU Nomor 12 Tahun 2022",
            "UU Nomor 52 Tahun 2009",
            "UU Nomor 16 Tahun 2019",
            "UU Nomor 23 Tahun 2004"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Menurut batasan umum, lanjut usia (lansia) adalah penduduk berusia ...",
        pilihan: [
            "40 tahun ke atas",
            "50 tahun ke atas",
            "70 tahun ke atas",
            "45 tahun ke atas",
            "60 tahun ke atas"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Bina Keluarga Remaja (BKR) membantu orang tua dalam ...",
        pilihan: [
            "Menghindari remaja",
            "Menyerahkan ke sekolah",
            "Memahami perkembangan remaja dan menerapkan pola asuh yang tepat",
            "Memberi hukuman",
            "Mengontrol remaja secara ketat"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Orang tua remaja kesulitan berkomunikasi dengan anaknya. Penyuluh KB menyarankan ...",
        pilihan: [
            "Menyuruh orang lain berbicara",
            "Mendengarkan tanpa menghakimi, meluangkan waktu bersama, dan menjalin komunikasi terbuka",
            "Membiarkan",
            "Menegur keras tiap hari",
            "Menyita semua hak"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Bina Keluarga Lansia (BKL) memberikan layanan berupa ...",
        pilihan: [
            "Hanya hiburan",
            "Edukasi, kegiatan kesehatan, sosial, dan keterampilan bagi lansia dan keluarganya",
            "Hanya pengobatan",
            "Hanya olahraga berat",
            "Hanya pengajaran"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "UPPKA membantu keluarga akseptor dengan ...",
        pilihan: [
            "Pembagian uang tanpa tujuan",
            "Pembatasan kegiatan",
            "Penarikan iuran",
            "Pelatihan usaha, akses modal, dan pendampingan untuk peningkatan pendapatan",
            "Larangan usaha"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Kelompok UPPKA mengalami kesulitan pemasaran produk. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menyalahkan kelompok",
            "Membeli seluruh produk sendiri",
            "Membubarkan kelompok",
            "Memfasilitasi pelatihan pemasaran dan menghubungkan dengan mitra serta pasar",
            "Mengabaikan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Prinsip usaha ekonomi produktif keluarga yang baik adalah ...",
        pilihan: [
            "Tanpa pencatatan",
            "Memanfaatkan potensi lokal, perencanaan sederhana, dan pembukuan yang rapi",
            "Berutang sebanyak-banyaknya",
            "Meniru tanpa analisis",
            "Tanpa perencanaan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kebutuhan dasar keluarga sejahtera menurut konsep BKKBN meliputi ...",
        pilihan: [
            "Hanya tabungan emas",
            "Hanya hiburan",
            "Pangan, sandang, papan, kesehatan, dan pendidikan dasar",
            "Hanya liburan",
            "Hanya kendaraan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kegiatan 'rembuk keluarga' bertujuan ...",
        pilihan: [
            "Menyalahkan anak",
            "Melibatkan seluruh anggota keluarga dalam perencanaan dan pengambilan keputusan bersama",
            "Mengambil keputusan sepihak",
            "Menghukum anggota",
            "Membatasi pendapat"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Keluarga yang menghadapi konflik berkepanjangan perlu ...",
        pilihan: [
            "Dibiarkan",
            "Dipisahkan paksa",
            "Dihukum",
            "Diumumkan",
            "Konseling keluarga dan dukungan lingkungan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Keluarga dengan anggota penyandang disabilitas sebaiknya ...",
        pilihan: [
            "Mendapat dukungan, akses layanan, dan pendampingan sesuai kebutuhan",
            "Disembunyikan",
            "Diabaikan",
            "Dikucilkan",
            "Disalahkan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Peran ayah dalam pengasuhan adalah ...",
        pilihan: [
            "Hanya menghukum",
            "Terlibat aktif dalam pengasuhan dan pendidikan anak",
            "Menyerahkan semuanya kepada ibu",
            "Tidak terlibat",
            "Hanya mencari nafkah"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kesetaraan gender dalam keluarga berarti ...",
        pilihan: [
            "Anak mengatur keluarga",
            "Istri selalu dominan",
            "Tidak ada pembagian peran",
            "Suami dan istri memiliki hak, kesempatan, dan tanggung jawab yang seimbang",
            "Suami selalu dominan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Komunikasi efektif dalam keluarga ditandai dengan ...",
        pilihan: [
            "Saling mengancam",
            "Saling berteriak",
            "Saling menghindar",
            "Saling menyalahkan",
            "Saling mendengarkan, menghargai, dan terbuka"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Keluarga yang mengalami kesulitan ekonomi sehingga anak putus sekolah perlu ...",
        pilihan: [
            "Dihubungkan dengan program bantuan pendidikan dan pemberdayaan melalui lintas sektor",
            "Dipisahkan dari anak",
            "Dibiarkan",
            "Diabaikan",
            "Dipaksa bekerja"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Kampanye 'keluarga cemara' atau sejenisnya biasanya menekankan ...",
        pilihan: [
            "Individualisme",
            "Persaingan antaranggota",
            "Kemewahan",
            "Kekerasan",
            "Nilai-nilai kasih sayang, kebersamaan, dan ketahanan keluarga"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Ketahanan keluarga dapat diperkuat melalui ...",
        pilihan: [
            "Pertengkaran terbuka",
            "Isolasi dari tetangga",
            "Ketidakpedulian",
            "Utang berlebihan",
            "Komunikasi, ekonomi stabil, nilai agama, dan hubungan sosial positif"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Keluarga yang bekerja di sektor informal tanpa jaminan sosial perlu ...",
        pilihan: [
            "Didorong mengakses perlindungan sosial dan jaminan kesehatan sesuai ketentuan",
            "Diabaikan",
            "Dibiarkan",
            "Diberi sanksi",
            "Dilarang bekerja"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pada keluarga dengan lansia sakit, dukungan yang tepat adalah ...",
        pilihan: [
            "Menyalahkan keluarga",
            "Menyerahkan lansia ke panti tanpa musyawarah",
            "Edukasi perawatan lansia kepada keluarga dan koordinasi dengan layanan kesehatan",
            "Membiarkan lansia sendirian",
            "Mengabaikan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pendamping lansia di rumah perlu memahami ...",
        pilihan: [
            "Tidak ada yang perlu",
            "Hanya kebutuhan makan",
            "Hanya kebutuhan obat",
            "Hanya kebersihan",
            "Kebutuhan fisik, psikologis, dan sosial lansia"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Kader BKB melaporkan jumlah peserta menurun. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Membubarkan BKB",
            "Menyalahkan kader",
            "Memaksa warga hadir",
            "Mencari penyebab dan merancang kegiatan yang lebih menarik serta jadwal yang sesuai",
            "Membiarkan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Materi BKB bagi baduta lebih menekankan pada ...",
        pilihan: [
            "Materi politik",
            "Materi olahraga ekstrem",
            "Materi ekonomi keluarga",
            "Materi hukum pidana",
            "Pemberian ASI, MPASI, stimulasi dini, dan perlindungan anak"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Kartu Kembang Anak (KKA) dalam BKB berfungsi ...",
        pilihan: [
            "Hanya hiasan",
            "Mengukur kecerdasan secara pasti",
            "Memantau perkembangan anak sesuai usia",
            "Menggantikan Buku KIA",
            "Menyimpan uang"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Dalam BKB, anak yang tampak mengalami keterlambatan perkembangan sebaiknya ...",
        pilihan: [
            "Dipisahkan dari kelompok",
            "Disalahkan",
            "Disarankan pemeriksaan ke tenaga kesehatan dan mendapat stimulasi tepat",
            "Dihukum",
            "Diabaikan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kebiasaan makan bersama keluarga bermanfaat karena ...",
        pilihan: [
            "Membuat anak malas",
            "Mengurangi komunikasi",
            "Mempererat hubungan dan membentuk pola makan sehat",
            "Menambah biaya",
            "Tidak berpengaruh"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Untuk mencegah KDRT, keluarga perlu ...",
        pilihan: [
            "Menghindari pertemuan keluarga",
            "Komunikasi sehat, saling menghargai, dan mengelola konflik tanpa kekerasan",
            "Membalas kekerasan",
            "Menyembunyikan masalah",
            "Menyalahkan korban"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Korban KDRT yang ingin mencari bantuan sebaiknya diarahkan ke ...",
        pilihan: [
            "Tidak ada",
            "Layanan pengaduan dan lembaga perlindungan yang berwenang",
            "Pelaku",
            "Tetangga yang tidak dipercaya",
            "Media sosial untuk menyebarkan kasus"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pernikahan harus didasari ...",
        pilihan: [
            "Perjodohan tanpa persetujuan",
            "Paksaan keluarga",
            "Kesiapan fisik, mental, ekonomi, dan persetujuan kedua calon mempelai",
            "Tekanan masyarakat",
            "Utang"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pendidikan pranikah (bimbingan perkawinan) bertujuan ...",
        pilihan: [
            "Menjadi syarat tanpa manfaat",
            "Membatasi pernikahan",
            "Menunda pernikahan tanpa alasan",
            "Menambah biaya",
            "Membekali calon pengantin dengan pengetahuan kehidupan berkeluarga"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Bimbingan calon pengantin dapat bekerja sama dengan ...",
        pilihan: [
            "Hanya swasta",
            "Hanya pemerintah desa",
            "Tidak perlu mitra",
            "Hanya sekolah",
            "KUA, puskesmas, dan lembaga keagamaan serta TPK"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Pengasuhan yang responsif terhadap kebutuhan anak berarti ...",
        pilihan: [
            "Memperhatikan sinyal anak dan memenuhi kebutuhannya dengan kasih sayang",
            "Memberi hukuman",
            "Mengatur secara keras",
            "Memanjakan sepenuhnya",
            "Mengabaikan tangis"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Kekerasan verbal terhadap anak dapat berdampak ...",
        pilihan: [
            "Tidak berdampak",
            "Meningkatkan prestasi",
            "Pada tinggi badan saja",
            "Meningkatkan disiplin otomatis",
            "Pada kepercayaan diri dan kesehatan mental anak"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Keluarga miskin yang ingin membuka usaha kecil sebaiknya didampingi dengan ...",
        pilihan: [
            "Pelarangan",
            "Pemberian uang tanpa arahan",
            "Penarikan bantuan",
            "Pelatihan keterampilan, akses permodalan, dan pendampingan usaha",
            "Penyaringan ketat"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Perempuan kepala keluarga di wilayah binaan perlu ...",
        pilihan: [
            "Pengucilan",
            "Pembatasan akses",
            "Pengabaian",
            "Stigma",
            "Dukungan pemberdayaan, perlindungan, dan akses layanan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Pembagian peran rumah tangga yang adil membantu ...",
        pilihan: [
            "Mengurangi kebersamaan",
            "Menambah konflik",
            "Menambah beban istri",
            "Mengurangi beban salah satu pihak dan memperkuat kerja sama",
            "Tidak berpengaruh"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Keluarga dengan anak banyak dan ekonomi terbatas berisiko ...",
        pilihan: [
            "Kesulitan memenuhi gizi, pendidikan, dan kesehatan anak",
            "Tidak berisiko",
            "Selalu bahagia",
            "Tidak membutuhkan bantuan",
            "Selalu sejahtera"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB mendampingi keluarga yang ingin menambah anak tetapi kondisi ekonomi sulit. Pendekatan yang tepat adalah ...",
        pilihan: [
            "Mengabaikan",
            "Menyalahkan keluarga",
            "Melarang menambah anak",
            "Memaksa ber-KB",
            "Mengonseling perencanaan keluarga yang matang tanpa memaksa dan menghargai keputusan mereka"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Lingkungan rumah yang aman bagi anak ditandai dengan ...",
        pilihan: [
            "Kotor",
            "Penuh asap rokok",
            "Banyak benda tajam",
            "Tanpa pengawasan",
            "Bebas bahaya, bersih, dan mendukung bermain"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Paparan asap rokok pada anak berisiko ...",
        pilihan: [
            "Tidak berpengaruh",
            "Menambah nafsu makan",
            "Meningkatkan tinggi",
            "Menyehatkan",
            "Mengganggu pernapasan dan kesehatan sehingga perlu dihindari"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Edukasi tentang bahaya rokok di keluarga dilakukan dengan ...",
        pilihan: [
            "Menghina perokok",
            "Memarahi tetangga",
            "Membiarkan",
            "Mengancam",
            "Pendekatan persuasif, informasi kesehatan, dan dukungan berhenti merokok"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Keluarga sering menggunakan gawai tanpa batas. Penyuluh KB menyarankan ...",
        pilihan: [
            "Menyita secara kasar",
            "Membiarkan",
            "Menetapkan aturan waktu layar dan kegiatan bersama yang positif",
            "Memberi gawai pada anak kecil",
            "Melarang total tanpa alasan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Peran tokoh agama dalam pembangunan keluarga adalah ...",
        pilihan: [
            "Tidak berperan",
            "Menguatkan nilai moral dan dukungan terhadap keluarga berkualitas",
            "Mengganti petugas",
            "Menghambat program",
            "Menentukan metode KB bagi klien"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kegiatan 'Dapur Sehat' di BKB bermanfaat untuk ...",
        pilihan: [
            "Mengganti Posyandu",
            "Hanya lomba memasak",
            "Hanya hiburan",
            "Mengganti sekolah",
            "Mengajarkan penyiapan makanan bergizi bagi anak dengan bahan lokal"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Pengasuhan bagi anak dari keluarga yang bercerai perlu ...",
        pilihan: [
            "Dukungan psikologis dan pendampingan agar anak tetap mendapat kasih sayang",
            "Penyalahan anak",
            "Pemisahan paksa",
            "Pengucilan",
            "Pengabaian"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Kegiatan pertemuan kelompok BKR yang efektif memerlukan ...",
        pilihan: [
            "Materi rumit",
            "Paksaan kehadiran",
            "Pertemuan tanpa persiapan",
            "Materi sesuai kebutuhan, fasilitator terampil, dan suasana ramah",
            "Pertemuan tanpa tujuan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pengasuhan anak oleh kakek-nenek perlu didukung dengan ...",
        pilihan: [
            "Pelarangan",
            "Pembiaran",
            "Pengabaian",
            "Penyalahan",
            "Edukasi pola asuh dan gizi agar sesuai perkembangan terkini"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Pelibatan anak dalam kegiatan keluarga bertujuan ...",
        pilihan: [
            "Menunjukkan kekuasaan",
            "Mengurangi belajar",
            "Membangun rasa tanggung jawab dan kebersamaan",
            "Menghukum",
            "Menambah beban anak"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Data keluarga yang akurat diperlukan Penyuluh KB untuk ...",
        pilihan: [
            "Menjadi arsip saja",
            "Menambah beban kerja",
            "Memetakan sasaran dan merencanakan intervensi program tepat sasaran",
            "Memenuhi laporan semata",
            "Tidak diperlukan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Menjelang akhir bulan, data pendampingan belum lengkap sementara Anda dikejar waktu laporan. Sikap yang sesuai nilai Akuntabel adalah ...",
        pilihan: [
            "Meminta kader membuat angka sendiri",
            "Memverifikasi data bersama kader, melengkapi yang kurang, dan melaporkan kendala secara jujur kepada atasan",
            "Tidak melapor",
            "Mengisi data perkiraan",
            "Menyalin data bulan lalu"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Ditemukan perbedaan data antara catatan kader dan sistem. Langkah Penyuluh KB adalah ...",
        pilihan: [
            "Menghapus data yang berbeda",
            "Melakukan verifikasi dan validasi ke lapangan sebelum memperbaiki data",
            "Menyalahkan kader",
            "Memilih angka yang lebih besar",
            "Mengabaikan perbedaan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pemutakhiran data keluarga di wilayah binaan sebaiknya dilakukan ...",
        pilihan: [
            "Tanpa kader",
            "Dengan data tahun lalu",
            "Secara berkala dengan melibatkan kader dan perangkat desa",
            "Sekali saja",
            "Hanya saat ada audit"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Data pribadi keluarga sasaran program harus ...",
        pilihan: [
            "Dijual",
            "Disebarkan di media sosial",
            "Dibagikan kepada siapa saja",
            "Dijaga kerahasiaannya dan hanya digunakan untuk kepentingan program",
            "Dipublikasikan agar transparan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Kader mengeluh tidak mampu menginput data karena sinyal buruk. Solusi yang tepat adalah ...",
        pilihan: [
            "Memberhentikan kader",
            "Memarahi kader",
            "Menghentikan pelaporan",
            "Mencari alternatif pencatatan manual sementara lalu menginput saat sinyal tersedia, serta berkoordinasi dengan pihak terkait",
            "Menunggu sinyal membaik tanpa tindakan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Laporan kegiatan yang baik harus ...",
        pilihan: [
            "Disusun tanpa bukti",
            "Singkat tanpa data",
            "Faktual, tepat waktu, dan dapat dipertanggungjawabkan",
            "Hanya berisi foto",
            "Dilebih-lebihkan agar terlihat berhasil"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pendataan keluarga yang dilakukan BKKBN bertujuan ...",
        pilihan: [
            "Memilah warga",
            "Menghitung pajak",
            "Menyediakan data keluarga sebagai dasar perencanaan dan intervensi program",
            "Menilai kekayaan keluarga",
            "Mengumumkan keluarga miskin"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Hasil Pendataan Keluarga digunakan, antara lain, untuk ...",
        pilihan: [
            "Mencari pelanggaran warga",
            "Menyeleksi pemilih",
            "Menambah pajak",
            "Menentukan sasaran, memantau capaian, dan merancang kebijakan program keluarga",
            "Menyaingi sensus"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Petugas pendataan keluarga harus ...",
        pilihan: [
            "Mengumpulkan data secara jujur, teliti, dan menjaga kerahasiaan responden",
            "Memilih responden sesuka hati",
            "Mengisi data sesuai perkiraan",
            "Menyebarkan data warga",
            "Mengubah data sesuka hati"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Responden menolak ditanya data pribadinya. Sikap petugas adalah ...",
        pilihan: [
            "Mengisi sendiri",
            "Memaksa",
            "Meninggalkan tanpa penjelasan",
            "Mengancam",
            "Menjelaskan tujuan pendataan dan menjaga kerahasiaan data dengan sopan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Data keluarga yang tidak mutakhir dapat menyebabkan ...",
        pilihan: [
            "Pelaporan akurat",
            "Program lebih efektif",
            "Tidak ada dampak",
            "Anggaran hemat",
            "Intervensi tidak tepat sasaran"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Verifikasi dan validasi data (verval) dilakukan untuk ...",
        pilihan: [
            "Menyembunyikan data",
            "Memastikan data sesuai kondisi lapangan",
            "Mengubah data sesuka hati",
            "Menambah beban kerja",
            "Menghapus data lama"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Rumah DataKu berfungsi sebagai ...",
        pilihan: [
            "Gudang arsip pribadi",
            "Pusat penyajian dan pemanfaatan data kependudukan dan keluarga tingkat kampung",
            "Rumah dinas",
            "Kantor pajak",
            "Tempat hiburan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Data yang tersaji di Rumah DataKu sebaiknya ...",
        pilihan: [
            "Dimutakhirkan berkala dan dimanfaatkan untuk perencanaan kegiatan",
            "Disembunyikan",
            "Diubah tanpa verifikasi",
            "Dipajang tanpa pemutakhiran",
            "Dibiarkan usang"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB akan menyusun rencana kerja bulanan berdasarkan data. Langkah awal adalah ...",
        pilihan: [
            "Mengabaikan data",
            "Menganalisis data sasaran dan capaian untuk menentukan prioritas kegiatan",
            "Menunggu perintah",
            "Menyalin rencana lama",
            "Menebak kebutuhan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Indikator kinerja program KB antara lain ...",
        pilihan: [
            "Jumlah kendaraan dinas",
            "Jumlah foto",
            "Peserta KB aktif, unmet need, dan pemakaian MKJP",
            "Jumlah spanduk",
            "Jumlah rapat"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "CPR (Contraceptive Prevalence Rate) adalah ...",
        pilihan: [
            "Persentase kematian ibu",
            "Persentase kelahiran hidup",
            "Persentase pernikahan",
            "Persentase kehamilan",
            "Persentase perempuan usia subur menikah yang sedang memakai kontrasepsi"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Angka unmet need yang tinggi menunjukkan ...",
        pilihan: [
            "Semua PUS ber-KB",
            "Banyak PUS yang ingin menunda atau membatasi kelahiran tetapi belum ber-KB",
            "Pelayanan sudah optimal",
            "Peserta KB bertambah",
            "Tidak ada kebutuhan KB"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pencatatan peserta KB baru dan aktif dilakukan oleh ...",
        pilihan: [
            "Hanya kepala desa",
            "Petugas dan kader sesuai format pencatatan dan pelaporan program",
            "Hanya warga",
            "Siapa saja tanpa format",
            "Tidak perlu dicatat"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Kesalahan penginputan data peserta KB ditemukan. Tindakan yang tepat adalah ...",
        pilihan: [
            "Menyalahkan kader",
            "Memperbaiki sesuai prosedur dan mencatat revisi",
            "Menyembunyikan kesalahan",
            "Mengabaikan",
            "Menghapus laporan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pelaporan yang tertib dan tepat waktu penting karena ...",
        pilihan: [
            "Tidak berguna",
            "Hanya untuk arsip",
            "Menambah beban",
            "Hanya formalitas",
            "Menjadi dasar monitoring, evaluasi, dan pengambilan keputusan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Penyuluh KB menemukan angka laporan kader tidak masuk akal. Tindakan yang tepat adalah ...",
        pilihan: [
            "Memarahi kader tanpa klarifikasi",
            "Melakukan klarifikasi dan verifikasi lapangan",
            "Menerima begitu saja",
            "Mengubah angka sendiri",
            "Menghapus laporan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Pemanfaatan data untuk advokasi kepada pemerintah desa bertujuan ...",
        pilihan: [
            "Menyaingi pemerintah",
            "Menunda program",
            "Menyalahkan desa",
            "Menakut-nakuti",
            "Menunjukkan masalah dan kebutuhan secara objektif untuk dukungan kebijakan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Tabel silang data stunting dengan sanitasi dapat menunjukkan ...",
        pilihan: [
            "Hubungan antara kondisi sanitasi dan sebaran stunting untuk penentuan prioritas intervensi",
            "Kesimpulan pasti tanpa analisis lanjut",
            "Kesalahan data",
            "Tidak ada makna",
            "Hanya hiasan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Grafik batang lebih tepat dipakai untuk ...",
        pilihan: [
            "Membandingkan nilai antarkategori",
            "Mengganti tabel",
            "Menyimpan data",
            "Menulis laporan",
            "Menunjukkan peta"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Grafik garis lebih tepat dipakai untuk ...",
        pilihan: [
            "Membandingkan warna",
            "Menyalin laporan",
            "Menyimpan data",
            "Melihat tren data dari waktu ke waktu",
            "Menunjukkan lokasi"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Rata-rata (mean) dihitung dengan ...",
        pilihan: [
            "Mengambil nilai terkecil",
            "Mengambil nilai tengah",
            "Menjumlahkan seluruh nilai lalu membagi dengan jumlah data",
            "Mengambil nilai terbesar",
            "Mengalikan seluruh nilai"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Jika dari 200 PUS terdapat 120 yang ber-KB, persentase peserta KB adalah ...",
        pilihan: [
            "80%",
            "60%",
            "40%",
            "120%",
            "30%"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Jika terdapat 40 balita stunting dari 500 balita yang diukur, prevalensi stunting adalah ...",
        pilihan: [
            "5%",
            "40%",
            "20%",
            "12,5%",
            "8%"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Dari 250 PUS, 50 PUS termasuk unmet need. Persentase unmet need adalah ...",
        pilihan: [
            "20%",
            "5%",
            "25%",
            "10%",
            "50%"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Dari 80 ibu hamil, 20 mengalami KEK. Persentase KEK adalah ...",
        pilihan: [
            "40%",
            "25%",
            "10%",
            "20%",
            "50%"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Dari 300 remaja, 90 aktif di PIK-R. Persentase keaktifan adalah ...",
        pilihan: [
            "20%",
            "30%",
            "10%",
            "90%",
            "50%"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Jika capaian peserta MKJP dari target 150 adalah 120, persentase capaian adalah ...",
        pilihan: [
            "90%",
            "120%",
            "60%",
            "75%",
            "80%"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Jika capaian TPK mendampingi 45 dari 60 sasaran, persentase pendampingan adalah ...",
        pilihan: [
            "75%",
            "80%",
            "60%",
            "45%",
            "90%"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Jumlah penduduk 1.000 orang dengan usia 0–14 tahun 300 orang dan 65+ tahun 100 orang. Penduduk usia produktif 600 orang. Rasio ketergantungannya adalah ...",
        pilihan: [
            "Sekitar 33,3",
            "Sekitar 66,7",
            "Sekitar 50",
            "Sekitar 100",
            "Sekitar 40"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Data kuantitatif adalah data yang ...",
        pilihan: [
            "Berbentuk cerita saja",
            "Tidak dapat dihitung",
            "Berbentuk angka dan dapat diukur",
            "Hanya opini",
            "Berbentuk gambar saja"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Data kualitatif contohnya ...",
        pilihan: [
            "Hasil wawancara tentang persepsi warga mengenai KB",
            "Jumlah kader",
            "Persentase CPR",
            "Jumlah akseptor",
            "Rata-rata usia"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Sampling bertujuan ...",
        pilihan: [
            "Mengambil sebagian populasi untuk mewakili keseluruhan",
            "Mengubah populasi",
            "Menyaingi sensus",
            "Menghapus populasi",
            "Menambah populasi"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Sensus berbeda dengan survei karena sensus ...",
        pilihan: [
            "Tidak mencatat data",
            "Hanya mencatat sebagian",
            "Mencatat seluruh anggota populasi",
            "Hanya mengambil sampel",
            "Hanya mencatat opini"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Penyuluh KB melaporkan data pada awal bulan tetapi kegiatan belum rampung. Sikap yang tepat adalah ...",
        pilihan: [
            "Menambah data fiktif",
            "Menyuruh kader mengisi sembarang",
            "Melaporkan apa adanya dengan keterangan kegiatan yang belum selesai",
            "Menunda laporan tanpa pemberitahuan",
            "Menyalin laporan lain"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Menyusun laporan kegiatan yang baik membutuhkan ...",
        pilihan: [
            "Foto sebanyak-banyaknya",
            "Kutipan panjang",
            "Data valid, sistematika jelas, dan bukti dukung",
            "Gaya bahasa rumit",
            "Ringkasan tanpa data"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Dokumentasi kegiatan penyuluhan sebaiknya ...",
        pilihan: [
            "Mengabaikan etika",
            "Mengunggah semua foto tanpa izin",
            "Meminta izin sebelum mengambil foto yang memuat wajah sasaran",
            "Menyebarkan data pribadi",
            "Menampilkan kondisi memalukan sasaran"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Sebelum mengolah data survei, langkah yang perlu dilakukan adalah ...",
        pilihan: [
            "Menghapus semua data",
            "Pembersihan data (data cleaning) untuk memastikan kelengkapan dan konsistensi",
            "Mengubah data",
            "Menyalin data lama",
            "Mengabaikan data kosong"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Missing value pada data berarti ...",
        pilihan: [
            "Data sangat banyak",
            "Data baru",
            "Ada data yang kosong atau tidak terisi",
            "Data tidak perlu",
            "Data selalu benar"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Penyuluh KB ingin mengetahui kecenderungan peserta KB selama setahun. Visualisasi yang cocok adalah ...",
        pilihan: [
            "Foto",
            "Diagram peta saja",
            "Teks naratif saja",
            "Grafik garis",
            "Tabel kosong"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Kerahasiaan data pribadi dalam pelaporan diwujudkan dengan ...",
        pilihan: [
            "Mengunggah data ke medsos",
            "Membagikan kepada siapa saja",
            "Menyimpan di tempat terbuka",
            "Menggunakan data agregat dan akses terbatas sesuai kebutuhan",
            "Menyebarkan data lengkap"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Perbedaan data antara kader dan puskesmas ditemukan. Langkah koordinasi yang tepat adalah ...",
        pilihan: [
            "Menghapus data",
            "Mengklarifikasi sumber dan periode data lalu menyepakati data yang valid",
            "Menyalahkan puskesmas",
            "Memilih salah satu tanpa alasan",
            "Mengabaikan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Penyuluh KB perlu menguasai teknologi pelaporan karena ...",
        pilihan: [
            "Hanya mengikuti tren",
            "Memudahkan pencatatan, analisis, dan pelaporan secara cepat dan akurat",
            "Tidak berguna",
            "Menambah beban",
            "Mengganti tugas utama"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Data kependudukan dasar yang digunakan untuk perencanaan antara lain ...",
        pilihan: [
            "Jumlah, komposisi, dan persebaran penduduk",
            "Hanya jumlah toko",
            "Hanya jumlah rumah",
            "Hanya jumlah kendaraan",
            "Hanya jumlah pohon"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Hasil monitoring menunjukkan target kegiatan belum tercapai. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menurunkan target tanpa alasan",
            "Menghentikan kegiatan",
            "Menyalahkan kader",
            "Menyembunyikan hasil",
            "Menganalisis hambatan dan menyusun langkah perbaikan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Triangulasi data dilakukan dengan ...",
        pilihan: [
            "Menggunakan satu sumber",
            "Mengubah data",
            "Membandingkan beberapa sumber data untuk memastikan kebenaran",
            "Mengabaikan sumber lain",
            "Menyalin data"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Perubahan status peserta KB (mis. berhenti) harus ...",
        pilihan: [
            "Disembunyikan",
            "Diubah tanpa catatan",
            "Dibiarkan",
            "Dihapus",
            "Dicatat dan dilaporkan sesuai alur pelaporan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Rekap data bulanan dilakukan untuk ...",
        pilihan: [
            "Memantau capaian dan menjadi bahan evaluasi serta perencanaan",
            "Hanya arsip",
            "Menyulitkan kerja",
            "Tanpa tujuan",
            "Hanya mengisi waktu"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB menerima data dari kader dalam format berbeda-beda. Tindakan yang tepat adalah ...",
        pilihan: [
            "Mengubah tanpa komunikasi",
            "Menyepakati format baku dan membimbing kader menggunakannya",
            "Menerima semuanya tanpa standar",
            "Menyalahkan kader",
            "Menolak semua data"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Dinamika kependudukan dipengaruhi oleh tiga komponen utama, yaitu ...",
        pilihan: [
            "Pajak, kredit, dan investasi",
            "Pernikahan, perceraian, dan pekerjaan",
            "Kelahiran, kematian, dan migrasi",
            "Agama, budaya, dan bahasa",
            "Pendidikan, kesehatan, dan ekonomi"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pemerintah mengatur pengendalian kuantitas penduduk melalui ...",
        pilihan: [
            "Pengaturan kelahiran, penurunan angka kematian, dan pengarahan mobilitas penduduk",
            "Pembatasan pendidikan",
            "Pembatasan bekerja",
            "Pengurangan layanan kesehatan",
            "Larangan pernikahan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Bonus demografi terjadi ketika ...",
        pilihan: [
            "Jumlah kelahiran menurun drastis tanpa kualitas",
            "Proporsi penduduk usia produktif lebih besar dibanding usia tidak produktif",
            "Penduduk usia anak sangat banyak",
            "Penduduk lansia sangat banyak",
            "Penduduk tidak bekerja"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Agar bonus demografi bermanfaat, pemerintah perlu ...",
        pilihan: [
            "Menghentikan program KB",
            "Meningkatkan kualitas SDM melalui pendidikan, kesehatan, dan lapangan kerja",
            "Membatasi pekerjaan",
            "Meningkatkan angka kelahiran",
            "Mengurangi pendidikan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Rasio ketergantungan (dependency ratio) menggambarkan ...",
        pilihan: [
            "Jumlah penduduk miskin",
            "Jumlah lansia",
            "Perbandingan penduduk usia tidak produktif dengan penduduk usia produktif",
            "Angka kematian",
            "Angka kelahiran"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Piramida penduduk yang berbentuk lebar di bagian bawah menunjukkan ...",
        pilihan: [
            "Banyak lansia",
            "Proporsi penduduk usia muda yang besar",
            "Angka kematian rendah sekali",
            "Banyak usia produktif",
            "Tidak ada penduduk muda"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Piramida penduduk yang menyempit di bagian bawah menunjukkan ...",
        pilihan: [
            "Angka kelahiran meningkat",
            "Angka kelahiran menurun dan penduduk menua",
            "Tidak ada lansia",
            "Penduduk usia muda banyak",
            "Penduduk tidak berubah"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Total Fertility Rate pada tingkat replacement level adalah ...",
        pilihan: [
            "Sekitar 5,0",
            "Sekitar 2,1 anak per perempuan",
            "Sekitar 1,0",
            "Sekitar 3,5",
            "Sekitar 0,5"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Penurunan TFR di bawah replacement level dalam jangka panjang dapat menyebabkan ...",
        pilihan: [
            "Tidak ada dampak",
            "Ledakan penduduk",
            "Penuaan penduduk dan menurunnya jumlah penduduk usia produktif",
            "Pertumbuhan penduduk sangat cepat",
            "Peningkatan penduduk usia muda tanpa batas"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Mobilitas penduduk meliputi ...",
        pilihan: [
            "Perubahan jumlah kelahiran",
            "Perubahan agama",
            "Perpindahan penduduk dari satu wilayah ke wilayah lain",
            "Perubahan jumlah kematian",
            "Perubahan pekerjaan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Urbanisasi adalah ...",
        pilihan: [
            "Perpindahan penduduk dari desa ke kota",
            "Kematian di kota",
            "Kelahiran di kota",
            "Perpindahan antarnegara",
            "Perpindahan penduduk dari kota ke desa"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Dampak urbanisasi yang tidak terkendali adalah ...",
        pilihan: [
            "Kepadatan kota, kemacetan, dan masalah permukiman",
            "Jumlah lapangan kerja selalu cukup",
            "Tidak ada dampak",
            "Desa semakin padat",
            "Kota menjadi sepi"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Transmigrasi bertujuan ...",
        pilihan: [
            "Pemerataan persebaran penduduk dan pembangunan wilayah",
            "Mengurangi pendidikan",
            "Menghambat pembangunan",
            "Menambah kemacetan",
            "Pemusatkan penduduk"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Kebijakan kependudukan bertujuan mewujudkan ...",
        pilihan: [
            "Penduduk sebanyak mungkin",
            "Penduduk yang berkualitas dan keseimbangan dengan daya dukung lingkungan",
            "Penduduk sedikit tanpa kualitas",
            "Penduduk tanpa aturan",
            "Penduduk tanpa pembangunan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Penduduk yang berkualitas ditandai dengan ...",
        pilihan: [
            "Hanya bekerja",
            "Hanya berpendidikan tinggi",
            "Berjumlah banyak",
            "Berjumlah sedikit",
            "Sehat, cerdas, produktif, dan berkarakter"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Penduduk lanjut usia yang meningkat memerlukan ...",
        pilihan: [
            "Pengurangan layanan",
            "Penghentian bantuan",
            "Pembatasan aktivitas",
            "Kebijakan kesehatan, perlindungan sosial, dan pemberdayaan lansia",
            "Pengucilan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Angka harapan hidup menggambarkan ...",
        pilihan: [
            "Jumlah migrasi",
            "Jumlah kematian",
            "Jumlah kelahiran",
            "Rata-rata usia yang diharapkan dicapai penduduk",
            "Jumlah pernikahan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Angka kematian ibu (AKI) dapat diturunkan melalui ...",
        pilihan: [
            "Pemberian jamu saja",
            "Pembatasan pemeriksaan",
            "Pengurangan layanan",
            "Pengabaian risiko",
            "Peningkatan layanan kehamilan, persalinan aman, dan KB berkualitas"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Penggunaan KB berkontribusi pada kesehatan ibu karena ...",
        pilihan: [
            "Menambah komplikasi",
            "Mengurangi layanan kesehatan",
            "Membantu mengatur jarak kehamilan dan mencegah kehamilan berisiko",
            "Meningkatkan risiko kehamilan",
            "Tidak berpengaruh"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Daya dukung lingkungan berarti ...",
        pilihan: [
            "Luas bangunan",
            "Jumlah penduduk",
            "Kemampuan lingkungan menopang kehidupan penduduk",
            "Jumlah industri",
            "Jumlah kendaraan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pertumbuhan penduduk yang tidak terkendali dapat mengakibatkan ...",
        pilihan: [
            "Tidak ada dampak",
            "Peningkatan layanan otomatis",
            "Pengurangan kemiskinan otomatis",
            "Kelebihan pangan",
            "Tekanan terhadap pangan, lingkungan, dan layanan dasar"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Parameter kependudukan meliputi ...",
        pilihan: [
            "Hanya persebaran",
            "Hanya kualitas",
            "Hanya jumlah",
            "Hanya migrasi",
            "Kuantitas, kualitas, persebaran, dan mobilitas penduduk"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Persebaran penduduk yang tidak merata dapat diatasi melalui ...",
        pilihan: [
            "Penutupan desa",
            "Pengurangan infrastruktur",
            "Pemusatan pembangunan di satu kota",
            "Pemerataan pembangunan dan penyediaan lapangan kerja di berbagai daerah",
            "Pembatasan pindah rumah tanpa alasan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Dokumen kependudukan yang mencatat susunan anggota keluarga adalah ...",
        pilihan: [
            "Ijazah",
            "Akta kematian saja",
            "Kartu Keluarga",
            "SIM",
            "Sertifikat tanah"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Akta kelahiran penting karena ...",
        pilihan: [
            "Menjadi bukti identitas dan hak anak untuk mendapat layanan publik",
            "Hanya formalitas",
            "Tidak berguna",
            "Hanya untuk dewasa",
            "Hanya untuk lansia"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penduduk yang tidak memiliki dokumen kependudukan perlu ...",
        pilihan: [
            "Dibantu mengurus ke instansi yang berwenang",
            "Dikucilkan",
            "Disalahkan",
            "Dibiarkan",
            "Dilarang mendapat layanan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Informasi kependudukan yang akurat dibutuhkan untuk ...",
        pilihan: [
            "Perencanaan pembangunan dan pelayanan publik",
            "Hanya sensus",
            "Tidak diperlukan",
            "Hanya laporan",
            "Hanya penelitian luar negeri"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Proyeksi penduduk digunakan untuk ...",
        pilihan: [
            "Menentukan pemilik tanah",
            "Mengatur migrasi",
            "Menghitung pajak",
            "Mencatat kelahiran",
            "Memperkirakan jumlah dan komposisi penduduk di masa depan sebagai dasar perencanaan"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Migrasi masuk (in-migration) adalah ...",
        pilihan: [
            "Kelahiran penduduk",
            "Kematian penduduk",
            "Perpindahan penduduk yang keluar",
            "Perpindahan penduduk yang masuk ke suatu wilayah",
            "Pernikahan penduduk"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Wilayah dengan migrasi keluar besar dapat mengalami ...",
        pilihan: [
            "Penambahan lapangan kerja otomatis",
            "Penurunan jumlah lansia",
            "Tidak ada perubahan",
            "Penurunan jumlah penduduk produktif",
            "Peningkatan jumlah penduduk produktif"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Penduduk usia produktif menurut kelompok umur umumnya adalah ...",
        pilihan: [
            "65 tahun ke atas",
            "15–64 tahun",
            "0–14 tahun",
            "10–20 tahun",
            "0–5 tahun"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Penduduk usia nonproduktif meliputi ...",
        pilihan: [
            "Usia 20–30 tahun",
            "Usia 25–60 tahun",
            "Usia 30–50 tahun",
            "Usia 0–14 tahun dan 65 tahun ke atas",
            "Usia 15–64 tahun"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Kepadatan penduduk dihitung dengan ...",
        pilihan: [
            "Luas wilayah dibagi jumlah penduduk",
            "Jumlah penduduk dibagi luas wilayah",
            "Jumlah penduduk dikali luas",
            "Jumlah kelahiran dibagi kematian",
            "Jumlah rumah dibagi penduduk"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Jika suatu desa berpenduduk 3.000 jiwa dengan luas 6 km², kepadatannya adalah ...",
        pilihan: [
            "1.000 jiwa per km²",
            "50 jiwa per km²",
            "500 jiwa per km²",
            "18.000 jiwa per km²",
            "2.994 jiwa per km²"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kelahiran kasar (crude birth rate) menggambarkan ...",
        pilihan: [
            "Jumlah migrasi",
            "Jumlah kematian per 1.000 penduduk",
            "Jumlah penduduk",
            "Jumlah pernikahan",
            "Jumlah kelahiran hidup per 1.000 penduduk dalam setahun"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Angka kematian bayi (AKB) mengukur ...",
        pilihan: [
            "Kematian penduduk dewasa",
            "Kematian lansia",
            "Kematian bayi sebelum berusia satu tahun per 1.000 kelahiran hidup",
            "Kematian balita sampai usia lima tahun",
            "Kematian ibu"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Salah satu faktor penurunan angka kematian bayi adalah ...",
        pilihan: [
            "Kurangnya air bersih",
            "Pengabaian kebersihan",
            "Pengurangan layanan",
            "Peningkatan imunisasi, gizi, dan layanan kesehatan",
            "Pembatasan pemeriksaan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pendidikan perempuan yang meningkat umumnya berkontribusi pada ...",
        pilihan: [
            "Peningkatan angka kelahiran tinggi",
            "Tidak berpengaruh",
            "Peningkatan pernikahan dini",
            "Peningkatan kesehatan keluarga dan penundaan usia pernikahan",
            "Penurunan kesehatan anak"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Penyuluh KB perlu memahami data kependudukan agar ...",
        pilihan: [
            "Menolak data",
            "Menghitung pajak",
            "Menyaingi petugas lain",
            "Dapat memetakan sasaran dan mengadvokasi kebijakan berbasis bukti",
            "Menyombongkan diri"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Wilayah dengan banyak lansia memerlukan penguatan ...",
        pilihan: [
            "Hanya layanan pendidikan",
            "Hanya layanan remaja",
            "Hanya layanan balita",
            "Hanya layanan olahraga",
            "Layanan kesehatan dan pemberdayaan lansia"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Wilayah dengan penduduk usia muda tinggi memerlukan penguatan ...",
        pilihan: [
            "Hanya layanan sosial lansia",
            "Hanya fasilitas hiburan",
            "Pendidikan, kesehatan reproduksi, dan lapangan kerja",
            "Hanya layanan lansia",
            "Hanya layanan pensiun"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kebijakan keluarga berencana berkaitan dengan kependudukan karena ...",
        pilihan: [
            "Berpengaruh pada angka kelahiran dan kualitas keluarga",
            "Tidak berkaitan",
            "Hanya soal kesehatan",
            "Hanya soal ekonomi",
            "Hanya soal agama"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Perkembangan kependudukan harus ...",
        pilihan: [
            "Mengabaikan kualitas",
            "Berjalan tanpa rencana",
            "Selaras dengan daya dukung dan daya tampung lingkungan",
            "Mengutamakan jumlah",
            "Mengabaikan lingkungan"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Penyuluh KB perlu memantau perubahan penduduk di wilayah binaan agar ...",
        pilihan: [
            "Menghindari warga",
            "Mengurangi kegiatan",
            "Laporan terlihat banyak",
            "Menambah beban",
            "Intervensi program dapat disesuaikan dengan kondisi terbaru"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Pembangunan berwawasan kependudukan berarti ...",
        pilihan: [
            "Menjadikan penduduk sebagai subjek dan objek pembangunan",
            "Hanya membangun infrastruktur",
            "Hanya membangun industri",
            "Hanya membangun gedung",
            "Mengabaikan penduduk"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Kemiskinan dapat memengaruhi dinamika kependudukan melalui ...",
        pilihan: [
            "Peningkatan akses layanan",
            "Peningkatan pendidikan",
            "Keterbatasan akses kesehatan, pendidikan, dan KB",
            "Peningkatan kesehatan",
            "Tidak berpengaruh"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Tugas pokok Penyuluh KB mencakup ...",
        pilihan: [
            "Penyuluhan, penggerakan, pendampingan, serta pembinaan program Bangga Kencana di lapangan",
            "Hanya mengawasi warga",
            "Hanya administrasi kantor",
            "Hanya laporan",
            "Hanya menghadiri rapat"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB bertugas membina kader agar ...",
        pilihan: [
            "Meninggalkan tugas",
            "Mampu melaksanakan edukasi, pencatatan, dan penggerakan program secara mandiri",
            "Bergantung penuh pada penyuluh",
            "Mengabaikan data",
            "Tidak aktif"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Dalam bekerja di lapangan, Penyuluh KB perlu menjalin kemitraan dengan ...",
        pilihan: [
            "Tidak perlu mitra",
            "Hanya sesama penyuluh",
            "Pemerintah desa, puskesmas, kader, tokoh masyarakat, dan lembaga terkait",
            "Hanya swasta",
            "Hanya warga"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Rencana kerja Penyuluh KB disusun berdasarkan ...",
        pilihan: [
            "Perkiraan",
            "Perintah satu pihak",
            "Kegiatan tahun lalu saja",
            "Analisis data sasaran, kebutuhan wilayah, dan target program",
            "Selera pribadi"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Penyuluh KB mengevaluasi kegiatan penyuluhan dengan ...",
        pilihan: [
            "Menghitung banyak foto",
            "Mengabaikan hasil",
            "Mencatat asal-asalan",
            "Menghitung banyak spanduk",
            "Mengukur perubahan pengetahuan, sikap, dan perilaku sasaran serta tindak lanjutnya"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Sebelum melaksanakan penyuluhan, hal yang perlu dipersiapkan adalah ...",
        pilihan: [
            "Hanya tempat",
            "Tidak perlu persiapan",
            "Sasaran, tujuan, materi, metode, media, dan waktu",
            "Hanya konsumsi",
            "Hanya spanduk"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Metode penyuluhan yang tepat untuk ibu-ibu di desa dengan literasi rendah adalah ...",
        pilihan: [
            "Demonstrasi dan diskusi dengan alat peraga",
            "Pelatihan daring tanpa pendampingan",
            "Pembagian teks rumit",
            "Presentasi bahasa asing",
            "Ceramah panjang"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluhan melalui kunjungan rumah cocok untuk ...",
        pilihan: [
            "Sasaran yang membutuhkan pendampingan personal dan konseling",
            "Seluruh warga sekaligus",
            "Rapat desa",
            "Seminar besar",
            "Pameran"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Seorang penyuluh baru menghadapi penolakan warga pada awal tugas. Langkah yang tepat adalah ...",
        pilihan: [
            "Membangun kepercayaan melalui komunikasi ramah, mendengarkan, dan melibatkan tokoh",
            "Memaksa warga",
            "Menyalahkan warga",
            "Mengabaikan penolakan",
            "Menyerah"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Bila kegiatan bersamaan dengan musim panen, Penyuluh KB sebaiknya ...",
        pilihan: [
            "Mengurangi sasaran",
            "Menyalahkan warga",
            "Membatalkan kegiatan",
            "Memaksa tetap jadwal",
            "Menyesuaikan jadwal dengan kegiatan warga melalui koordinasi"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Dalam penyuluhan, umpan balik dari peserta berguna untuk ...",
        pilihan: [
            "Memperbaiki materi dan cara penyampaian",
            "Tidak berguna",
            "Menyalahkan peserta",
            "Menilai peserta saja",
            "Mengakhiri kegiatan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB perlu melakukan identifikasi kader aktif dan tidak aktif untuk ...",
        pilihan: [
            "Memberhentikan kader",
            "Menyembunyikan data",
            "Mengganti kader tanpa alasan",
            "Menghukum kader",
            "Menyusun pembinaan dan penguatan peran kader"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Pembinaan kader yang berkelanjutan dilakukan melalui ...",
        pilihan: [
            "Kritik tanpa solusi",
            "Perintah sepihak",
            "Pelatihan, pendampingan, evaluasi, dan apresiasi",
            "Pemberian sanksi",
            "Pembiaran"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kader mengundurkan diri karena merasa tidak dihargai. Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menyalahkan kader",
            "Mendengarkan, mencari solusi, dan memberikan apresiasi atas kontribusi kader",
            "Mengganti segera tanpa komunikasi",
            "Membiarkan",
            "Menyebarkan keluhan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Ketika dua program berjalan bersamaan di desa, Penyuluh KB perlu ...",
        pilihan: [
            "Mengabaikan program lain",
            "Menyaingi program lain",
            "Mengoordinasikan jadwal dan sasaran agar tidak tumpang tindih",
            "Memaksa warga mengikuti keduanya",
            "Menghentikan salah satu"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Etika Penyuluh KB dalam menyampaikan informasi adalah ...",
        pilihan: [
            "Akurat, jujur, tidak memaksa, dan menghormati nilai budaya",
            "Menyesatkan",
            "Menakut-nakuti",
            "Melebih-lebihkan",
            "Mengabaikan budaya"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Perilaku Penyuluh KB yang menjaga integritas adalah ...",
        pilihan: [
            "Menyalahgunakan fasilitas",
            "Tidak menerima gratifikasi dan menjalankan tugas sesuai aturan",
            "Memanipulasi laporan",
            "Mengubah data",
            "Menerima hadiah untuk melancarkan urusan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Penyuluh KB ditawari hadiah oleh pihak yang berkepentingan dengan pelayanan. Tindakan yang tepat adalah ...",
        pilihan: [
            "Menolak dengan sopan dan melapor sesuai ketentuan gratifikasi bila diperlukan",
            "Menunda tanpa jawaban",
            "Meminta lebih banyak",
            "Menerima diam-diam",
            "Menerima dan membagi rekan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Pengelolaan alokon yang tertib meliputi ...",
        pilihan: [
            "Penjualan bebas",
            "Penyimpanan di sembarang tempat",
            "Distribusi tanpa catatan",
            "Penggunaan pribadi",
            "Pencatatan penerimaan, penyimpanan, distribusi, dan pelaporan sesuai prosedur"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Cara menyimpan alokon yang benar adalah ...",
        pilihan: [
            "Di bawah sinar matahari langsung",
            "Di tempat bersih, kering, dan sesuai petunjuk penyimpanan",
            "Di tempat terbuka",
            "Di tempat panas",
            "Di tempat lembap"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Rujukan klien KB yang tepat dilakukan ...",
        pilihan: [
            "Dengan menyalahkan klien",
            "Dengan informasi jelas dan koordinasi dengan fasilitas rujukan",
            "Dengan paksaan",
            "Tanpa persetujuan klien",
            "Tanpa penjelasan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Penyuluh KB mengikuti rapat koordinasi lintas sektor. Tujuannya adalah ...",
        pilihan: [
            "Mencari kesalahan",
            "Hanya hadir",
            "Menyaingi sektor lain",
            "Menyalahkan pihak lain",
            "Menyamakan langkah, berbagi data, dan menyepakati tindak lanjut"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Dalam rapat koordinasi, Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menyampaikan data dan usulan solusi secara jelas dan santun",
            "Meninggalkan rapat",
            "Menyalahkan pihak lain",
            "Memotong pembicaraan",
            "Diam saja"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB menghadapi hambatan anggaran kegiatan. Solusi yang tepat adalah ...",
        pilihan: [
            "Menggunakan dana tidak sesuai peruntukan",
            "Menghentikan semua kegiatan",
            "Menunggu tanpa upaya",
            "Mengusulkan melalui mekanisme perencanaan dan mencari dukungan mitra secara sah",
            "Memungut dana warga paksa"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Perencanaan kegiatan yang baik bersifat SMART, yaitu ...",
        pilihan: [
            "Spesifik, terukur, dapat dicapai, relevan, dan berbatas waktu",
            "Singkat, murah, aman, ringan, tepat",
            "Sepihak, manipulatif, abstrak, rahasia, tertunda",
            "Sederhana, mudah, acak, ringan, tertutup",
            "Sangat besar, maju, ambisius, rumit, terbuka"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Contoh tujuan yang SMART adalah ...",
        pilihan: [
            "Memperbaiki program",
            "Menjadi penyuluh terbaik",
            "Meningkatkan peserta MKJP di Desa X dari 20% menjadi 30% dalam 6 bulan",
            "Membuat warga sadar KB",
            "Meningkatkan KB secepatnya"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Monitoring dilakukan ...",
        pilihan: [
            "Hanya di akhir tahun",
            "Tidak diperlukan",
            "Selama kegiatan berlangsung untuk memantau proses dan perbaikan",
            "Tanpa tujuan",
            "Setelah program selesai"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Evaluasi dilakukan ...",
        pilihan: [
            "Tidak diperlukan",
            "Sebelum program dimulai",
            "Tanpa data",
            "Hanya untuk formalitas",
            "Untuk menilai hasil dan dampak program setelah periode tertentu"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Umpan balik kepada kader setelah kegiatan sebaiknya ...",
        pilihan: [
            "Disampaikan membangun, jelas, dan disertai apresiasi",
            "Disampaikan kasar",
            "Disampaikan di depan umum dengan kritik",
            "Tidak disampaikan",
            "Disampaikan dengan sindiran"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB mendapati ada desa yang belum memiliki kader. Tindakan tepat adalah ...",
        pilihan: [
            "Berkoordinasi dengan pemerintah desa untuk merekrut dan melatih kader",
            "Membiarkan",
            "Menyalahkan desa",
            "Menghapus desa dari wilayah binaan",
            "Mengerjakan semua sendiri"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Kader dipilih berdasarkan ...",
        pilihan: [
            "Jabatan",
            "Kekayaan",
            "Usia saja",
            "Kedekatan pribadi saja",
            "Kemauan, kepedulian, kemampuan berkomunikasi, dan diterima masyarakat"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Jika suatu wilayah memiliki banyak PUS risiko tinggi, strategi penyuluh adalah ...",
        pilihan: [
            "Memprioritaskan pendampingan dan konseling serta berkoordinasi dengan tenaga kesehatan",
            "Menunda",
            "Menyalahkan PUS",
            "Mengurangi pelayanan",
            "Mengabaikan"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB perlu meningkatkan kompetensi melalui ...",
        pilihan: [
            "Pelatihan, pembelajaran mandiri, dan berbagi praktik baik",
            "Menghindari perubahan",
            "Menunggu perintah",
            "Mengandalkan pengalaman lama",
            "Tidak perlu belajar"
        ],
        jawaban: 0
    },
    {
        pertanyaan: "Penyuluh KB mendapat kritik dari warga tentang cara penyampaian. Sikap yang tepat adalah ...",
        pilihan: [
            "Marah",
            "Mengabaikan",
            "Menerima masukan, introspeksi, dan memperbaiki cara penyampaian",
            "Membela diri berlebihan",
            "Menyalahkan warga"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Pembinaan terhadap kelompok kegiatan (Poktan) dilakukan dengan ...",
        pilihan: [
            "Pemberian sanksi",
            "Pembubaran",
            "Kunjungan rutin, penguatan kapasitas, dan pemantauan kegiatan",
            "Kunjungan sekali",
            "Pembiaran"
        ],
        jawaban: 2
    },
    {
        pertanyaan: "Kegiatan inovatif yang dikembangkan Penyuluh KB sebaiknya ...",
        pilihan: [
            "Tanpa koordinasi",
            "Berbasis kebutuhan, memanfaatkan potensi lokal, dan dapat diukur dampaknya",
            "Mengikuti tren semata",
            "Mahal dan rumit",
            "Tanpa tujuan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Praktik baik (best practice) di suatu desa sebaiknya ...",
        pilihan: [
            "Disembunyikan",
            "Didokumentasikan dan dibagikan agar dapat direplikasi di wilayah lain",
            "Dibiarkan",
            "Dilarang ditiru",
            "Dilupakan"
        ],
        jawaban: 1
    },
    {
        pertanyaan: "Dalam menghadapi misinformasi terkait program, Penyuluh KB berperan ...",
        pilihan: [
            "Menyalahkan penyebar",
            "Mengabaikan",
            "Menghapus semua informasi",
            "Memberikan klarifikasi dengan data dan sumber terpercaya",
            "Ikut menyebarkan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Pelibatan media lokal dalam sosialisasi program bertujuan ...",
        pilihan: [
            "Menyaingi media lain",
            "Menambah biaya",
            "Menyalahkan pihak lain",
            "Memperluas jangkauan informasi dan meningkatkan pemahaman masyarakat",
            "Menyembunyikan kegiatan"
        ],
        jawaban: 3
    },
    {
        pertanyaan: "Ketika sasaran tidak hadir pada kegiatan, Penyuluh KB sebaiknya ...",
        pilihan: [
            "Menghapus nama sasaran",
            "Memberi sanksi",
            "Menyalahkan sasaran",
            "Mengabaikan",
            "Menelusuri penyebab dan melakukan pendekatan atau kunjungan rumah"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Prinsip dasar penyuluhan adalah ...",
        pilihan: [
            "Memaksa",
            "Seragam untuk semua",
            "Mengabaikan sasaran",
            "Satu arah",
            "Partisipatif, sesuai kebutuhan sasaran, berkelanjutan, dan menghargai budaya"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Penyuluh KB harus mampu mengendalikan emosi ketika menghadapi warga yang marah dengan cara ...",
        pilihan: [
            "Meninggalkan warga",
            "Menyalahkan",
            "Mengabaikan",
            "Membalas dengan marah",
            "Mendengarkan, tetap tenang, dan merespons dengan santun"
        ],
        jawaban: 4
    },
    {
        pertanyaan: "Penyuluh KB menemukan kegiatan di lapangan tidak sesuai juknis. Tindakan yang tepat adalah ...",
        pilihan: [
            "Mengoreksi bersama pelaksana dan memastikan sesuai ketentuan",
            "Menyembunyikan",
            "Membiarkan",
            "Menyalahkan pelaksana",
            "Mengubah juknis sendiri"
        ],
        jawaban: 0
    }
];


let soalAktif = [];
let timerInterval = null;
let waktuSisa = 5400; // 90 menit (dalam detik)
let waktuMulaiEpoch = 0;

// 1. Fungsi saat tombol "Mulai Latihan Soal" diklik
function mulaiUjianKompetensi() {
    const nama = document.getElementById('kompetensi-nama').value.trim();
    const nip = document.getElementById('kompetensi-nip').value.trim();
    const wilayah = document.getElementById('kompetensi-wilayah').value.trim();

    if (!nama || !nip || !wilayah) {
        alert("Mohon lengkapi Nama, NIP/ID, dan Asal Wilayah terlebih dahulu!");
        return;
    }

    // Tampilkan info peserta
    document.getElementById('info-peserta').innerText = `${nama} (${wilayah})`;

    // Sembunyikan form, tampilkan kotak soal
    document.getElementById('kompetensi-form-container').style.display = 'none';
    document.getElementById('kompetensi-soal-container').style.display = 'block';

    // Acak soal dari bank soal (mengambil 50 soal secara acak)
    soalAktif = [...bankSoalKompetensi].sort(() => Math.random() - 0.5).slice(0, 50);
    
    let htmlSoal = "";
    soalAktif.forEach((item, index) => {
        htmlSoal += `
            <div style="margin-bottom: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="font-weight: bold; color: #1e293b; margin-bottom: 10px;">${index + 1}. ${item.pertanyaan}</p>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    ${item.pilihan.map((pil, pIdx) => `
                        <label style="cursor: pointer; font-size: 14px; color: #334155;">
                            <input type="radio" name="soal_${index}" value="${pIdx}" style="margin-right: 8px;">
                            ${pil}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });

    document.getElementById('lembar-soal').innerHTML = htmlSoal;

    // Mulai Timer diatur ke 90 Menit (5400 detik) dari awal setiap kali sesi dibuka
    waktuSisa = 5400; 
    waktuMulaiEpoch = Date.now();
    clearInterval(timerInterval);
    timerInterval = setInterval(hitungMundurTimer, 1000);
}

// 2. Fungsi hitung mundur waktu
function hitungMundurTimer() {
    if (waktuSisa <= 0) {
        clearInterval(timerInterval);
        alert("Waktu ujian telah habis!");
        selesaikanUjian(true);
        return;
    }
    waktuSisa--;
    const menit = Math.floor(waktuSisa / 60);
    const detik = waktuSisa % 60;
    document.getElementById('timer-countdown').innerText = 
        `${menit.toString().padStart(2, '0')}:${detik.toString().padStart(2, '0')}`;
}

// 3. Fungsi menyelesaikan ujian & hitung skor
function selesaikanUjian(otomatisHabis = false) {
    if (!otomatisHabis) {
        const konfirmasi = confirm("Apakah Anda yakin ingin mengakhiri dan mengirimkan jawaban latihan ini?");
        if (!konfirmasi) return;
    }

    clearInterval(timerInterval);

    let benar = 0;
    soalAktif.forEach((item, index) => {
        const pilihanUser = document.querySelector(`input[name="soal_${index}"]:checked`);
        if (pilihanUser && parseInt(pilihanUser.value) === item.jawaban) {
            benar++;
        }
    });

    const totalSoal = soalAktif.length;
    const skorAkhir = Math.round((benar / totalSoal) * 100);

    // Hitung durasi pengerjaan
    const durasiDetik = Math.floor((Date.now() - waktuMulaiEpoch) / 1000);
    const durasiMenitStr = Math.floor(durasiDetik / 60);
    const durasiDetikStr = durasiDetik % 60;
    const teksDurasi = `${durasiMenitStr} menit ${durasiDetikStr} detik`;

    const nama = document.getElementById('kompetensi-nama').value;
    const wilayah = document.getElementById('kompetensi-wilayah').value;
    const nip = document.getElementById('kompetensi-nip').value;

    // Tampilkan di halaman hasil
    document.getElementById('hasil-nama').innerText = `${nama} (NIP: ${nip})`;
    document.getElementById('hasil-wilayah').innerText = wilayah;
    document.getElementById('hasil-skor').innerText = `${skorAkhir} / 100 (Benar ${benar} dari ${totalSoal} soal)`;
    document.getElementById('hasil-durasi').innerText = teksDurasi;

    // Sembunyikan soal, tampilkan hasil
    document.getElementById('kompetensi-soal-container').style.display = 'none';
    document.getElementById('kompetensi-hasil-container').style.display = 'block';

    // Simpan ke Firestore Firebase secara otomatis
    simpanHasilKeFirebase({
        nama: nama,
        nip: nip,
        wilayah: wilayah,
        skor: skorAkhir,
        benar: benar,
        totalSoal: totalSoal,
        durasi: teksDurasi,
        timestamp: new Date()
    });
}

// 4. Simpan hasil latihan ke Firebase Database
function simpanHasilKeFirebase(dataHasil) {
    if (typeof db !== 'undefined') {
        db.collection("hasil_ujian_sidelila").add(dataHasil)
          .then(() => {
              console.log("Hasil latihan kompetensi berhasil direkam ke Firebase.");
          })
          .catch((error) => {
              console.error("Gagal menyimpan hasil ujian:", error);
          });
    }
}

// --- 5. Ulangi latihan ---
function ulangUjian() {
    document.getElementById('kompetensi-hasil-container').style.display = 'none';
    document.getElementById('kompetensi-form-container').style.display = 'block';
    document.getElementById('kompetensi-nama').value = '';
    document.getElementById('kompetensi-nip').value = '';
    document.getElementById('kompetensi-wilayah').value = '';
}

// --- TEMPELKAN FUNGSI BARU INI DI BAGIAN PALING BAWAH SCRIPT.JS ---
function cetakEvaluasiUjian() {
    if (!soalAktif || soalAktif.length === 0) {
        alert("Tidak ada data soal untuk dicetak.");
        return;
    }

    const nama = document.getElementById('kompetensi-nama')?.value || 'Peserta';
    const nip = document.getElementById('kompetensi-nip')?.value || '-';
    const wilayah = document.getElementById('kompetensi-wilayah')?.value || '-';
    const skorStr = document.getElementById('hasil-skor')?.innerText || '-';
    const durasiStr = document.getElementById('hasil-durasi')?.innerText || '-';

    let pembahasanHTML = "";

    soalAktif.forEach((item, index) => {
        const selectedInput = document.querySelector(`input[name="soal_${index}"]:checked`);
        const userChoiceIdx = selectedInput ? parseInt(selectedInput.value) : null;

        const kunciIdx = item.jawaban; 
        const teksKunci = item.pilihan[kunciIdx];
        const teksUser = userChoiceIdx !== null ? item.pilihan[userChoiceIdx] : "<span style='color: red;'>Tidak dijawab</span>";

        const isBenar = userChoiceIdx === kunciIdx;
        const statusBadge = isBenar 
            ? '<b style="color: #16a34a;">[ Benar ]</b>' 
            : '<b style="color: #dc2626;">[ Salah ]</b>';

        pembahasanHTML += `
            <div style="margin-bottom: 15px; page-break-inside: avoid; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
                <p style="font-weight: bold; margin-bottom: 5px;">${index + 1}. ${item.pertanyaan}</p>
                <div style="font-size: 10pt; margin-left: 10px;">
                    <p style="margin: 2px 0;">Jawaban Anda: ${teksUser} ${statusBadge}</p>
                    <p style="margin: 2px 0; color: #16a34a;"><b>Kunci Jawaban Yang Benar:</b> ${teksKunci}</p>
                </div>
            </div>
        `;
    });

    const printHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Evaluasi Hasil Uji Kompetensi - ${nama}</title>
            <style>
                body { font-family: "Times New Roman", Times, serif; font-size: 11pt; line-height: 1.4; color: #000; padding: 20px; background: #fff; }
                .kop { border-bottom: double 3px black; padding-bottom: 8px; margin-bottom: 15px; width: 100%; }
                .judul { text-align: center; font-weight: bold; font-size: 12pt; margin-bottom: 5px; text-transform: uppercase; }
                .sub-judul { text-align: center; font-weight: bold; font-size: 10pt; margin-bottom: 15px; text-transform: uppercase; }
                .info-box { border: 1px solid black; padding: 10px; margin-bottom: 20px; background-color: #f9f9f9; }
                .info-box table { width: 100%; border-collapse: collapse; }
                .info-box td { padding: 3px 0; font-size: 10pt; vertical-align: top; }
            </style>
        </head>
        <body>
            <table class="kop" style="border-collapse: collapse; width: 100%;">
                <tr>
                    <td style="width: 55px; border: none;"><img src="logo.png" alt="Logo" style="width: 45px; height: 45px; object-fit: contain;" onerror="this.style.display='none'"></td>
                    <td style="width: 120px; border: none; font-weight: bold; font-size: 9pt; line-height: 1.2;">Kemendukbangga/<br>BKKBN</td>
                    <td style="border: none; text-align: right; font-size: 9pt; line-height: 1.3;">
                        <b>Kementerian Kependudukan dan Pembangunan Keluarga / BKKBN</b><br>
                        Perwakilan BKKBN Provinsi Maluku Utara<br>
                        Portal SIDELILA v2.0 | malut.bkkbn.go.id
                    </td>
                </tr>
            </table>

            <div class="judul">EVALUASI HASIL LATIHAN MANDIRI UJI KOMPETENSI</div>
            <div class="sub-judul">TENAGA LINI LAPANGAN BKKBN PROVINSI MALUKU UTARA</div>

            <div class="info-box">
                <table>
                    <tr><td style="width: 130px;"><b>Nama Peserta</b></td><td style="width: 15px;">:</td><td><b>${nama}</b></td></tr>
                    <tr><td><b>NIP / ID</b></td><td>:</td><td>${nip}</td></tr>
                    <tr><td><b>Asal Wilayah</b></td><td>:</td><td>${wilayah}</td></tr>
                    <tr><td><b>Perolehan Skor</b></td><td>:</td><td><b>${skorStr}</b></td></tr>
                    <tr><td><b>Durasi Pengerjaan</b></td><td>:</td><td>${durasiStr}</td></tr>
                </table>
            </div>

            <div style="font-weight: bold; font-size: 11pt; margin-bottom: 10px; border-bottom: 2px solid black; padding-bottom: 4px;">
                REKAPITULASI SOAL & KUNCI JAWABAN (50 SOAL)
            </div>

            <div>
                ${pembahasanHTML}
            </div>
        </body>
        </html>
    `;

    bukaJendelaCetak(printHTML);
}
function formatTanggalID(tanggalStr) {
    if (!tanggalStr) return "-";
    // Jika format dari input type="date" adalah YYYY-MM-DD
    const bagian = tanggalStr.split("-");
    if (bagian.length === 3) {
        return `${bagian[2]}-${bagian[1]}-${bagian[0]}`;
    }
    return tanggalStr; // Jika sudah format lain, kembalikan apa adanya
}
// --- DATA GALERI KEGIATAN LINI LAPANGAN ---
const galeriData = [
    { 
        image: "foto1.jpg", 
        caption: "Dokumentasi kegiatan operasional penyuluhan lini lapangan." 
    }
];

// --- FUNGSI MERENDER GALERI KE TAMPILAN USER ---
function loadGaleriKegiatan() {
    const grid = document.getElementById('galeri-items-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    galeriData.forEach(item => {
        grid.innerHTML += `
            <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-sky-400 transition-all overflow-hidden group">
                <div class="overflow-hidden aspect-video bg-slate-100">
                    <img src="${item.image}" alt="Dokumentasi Kegiatan" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-4">
                    <p class="text-xs text-slate-700 font-medium leading-relaxed">${item.caption}</p>
                </div>
            </div>
        `;
    });
}

// ==========================================
// KELOLA GALERI KEGIATAN (ADMIN UPLOAD & DELETE)
// ==========================================

// Fungsi untuk mengunggah foto galeri baru dari panel admin
async function uploadGaleriBaru(event) {
    event.preventDefault();
    const fileInput = document.getElementById('input-file-galeri');
    const ketInput = document.getElementById('input-keterangan-galeri');
    const btnSubmit = document.getElementById('btn-upload-galeri');

    const file = fileInput.files[0];
    const keterangan = ketInput.value;

    if (!file) return;

    btnSubmit.disabled = true;
    btnSubmit.innerText = "Mengunggah...";

    try {
        const reader = new FileReader();
        reader.onload = async function(e) {
            const base64Image = e.target.result;

            // Simpan ke Firestore collection 'galeri_sidelila'
            await db.collection("galeri_sidelila").add({
                image: base64Image,
                keterangan: keterangan,
                tanggalFormatted: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });

            alert("Foto galeri berhasil ditambahkan!");
            fileInput.value = "";
            ketInput.value = "";
            btnSubmit.disabled = false;
            btnSubmit.innerText = "Simpan & Unggah Foto";
            
            // Muat ulang galeri agar foto baru langsung tampil
            if (typeof muatGaleriFirebase === 'function') {
                muatGaleriFirebase();
            }
        };
        reader.readAsDataURL(file);
    } catch (error) {
        console.error("Gagal mengunggah foto:", error);
        alert("Terjadi kesalahan saat mengunggah foto.");
        btnSubmit.disabled = false;
        btnSubmit.innerText = "Simpan & Unggah Foto";
    }
}

// Fungsi untuk menghapus foto galeri berdasarkan ID dokumen Firestore
async function hapusGaleriFirebase(docId) {
    if (confirm("Apakah Anda yakin ingin menghapus foto kegiatan ini?")) {
        try {
            await db.collection("galeri_sidelila").doc(docId).delete();
            alert("Foto berhasil dihapus.");
            if (typeof muatGaleriFirebase === 'function') {
                muatGaleriFirebase();
            }
        } catch (error) {
            console.error("Gagal menghapus foto:", error);
            alert("Gagal menghapus foto dari database.");
        }
    }
}
// ==========================================
// KELOLA GALERI KEGIATAN (ADMIN UPLOAD & DELETE)
// ==========================================

// Fungsi untuk mengunggah foto galeri baru dari panel admin
async function uploadGaleriBaru(event) {
    event.preventDefault();
    const fileInput = document.getElementById('input-file-galeri');
    const ketInput = document.getElementById('input-keterangan-galeri');
    const btnSubmit = document.getElementById('btn-upload-galeri');

    const file = fileInput.files[0];
    const keterangan = ketInput.value;

    if (!file) return;

    btnSubmit.disabled = true;
    btnSubmit.innerText = "Mengunggah...";

    try {
        const reader = new FileReader();
        reader.onload = async function(e) {
            const base64Image = e.target.result;

            // Simpan ke Firestore collection 'galeri_sidelila'
            await db.collection("galeri_sidelila").add({
                image: base64Image,
                keterangan: keterangan,
                tanggalFormatted: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });

            alert("Foto galeri berhasil ditambahkan!");
            fileInput.value = "";
            ketInput.value = "";
            btnSubmit.disabled = false;
            btnSubmit.innerText = "Simpan & Unggah Foto";
            
            // Muat ulang galeri agar foto baru langsung tampil
            if (typeof muatGaleriFirebase === 'function') {
                muatGaleriFirebase();
            }
        };
        reader.readAsDataURL(file);
    } catch (error) {
        console.error("Gagal mengunggah foto:", error);
        alert("Terjadi kesalahan saat mengunggah foto.");
        btnSubmit.disabled = false;
        btnSubmit.innerText = "Simpan & Unggah Foto";
    }
}

// Fungsi untuk menghapus foto galeri berdasarkan ID dokumen Firestore
async function hapusGaleriFirebase(docId) {
    if (confirm("Apakah Anda yakin ingin menghapus foto kegiatan ini?")) {
        try {
            await db.collection("galeri_sidelila").doc(docId).delete();
            alert("Foto berhasil dihapus.");
            if (typeof muatGaleriFirebase === 'function') {
                muatGaleriFirebase();
            }
        } catch (error) {
            console.error("Gagal menghapus foto:", error);
            alert("Gagal menghapus foto dari database.");
        }
    }
}

// ==========================================
// PAKSA MUNCULKAN FORM ADMIN GALERI SAAT MENU GALERI DIBUKA
// ==========================================
function cekDanTampilkanFormAdmin() {
    const formAdminGaleri = document.getElementById('form-upload-admin');
    if (formAdminGaleri) {
        // Cek apakah elemen atau menu admin sedang aktif di halaman Anda
        // Kita set 'block' agar form langsung muncul di sisi admin
        formAdminGaleri.style.display = 'block';
    }
}

// Jalankan otomatis setiap kali halaman dimuat atau fungsi galeri dipanggil
window.addEventListener('load', function() {
    setTimeout(cekDanTampilkanFormAdmin, 1000);
});
