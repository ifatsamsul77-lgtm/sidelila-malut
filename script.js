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
            { name: "Pedoman Pelaksanaan Kelompok BKL", desc: "Acuan operasional pembinaan lansia tangguh", icon:'<img src="icon041.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "Pedoman Pelaksanaan Kelompok BKL", desc: "Acuan operasional pembinaan lansia tangguh", icon:'<img src="icon042.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "MODUL BKLL", desc: "Materi Belum Tersedia", icon:'<img src="icon043.png" class="w-8 h-8 object-contain">', link: "#" },
            { name: "MODUL BKLL", desc: "Materi Belum Tersedia", icon:'<img src="icon044.png" class="w-8 h-8 object-contain">', link: "#" },
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
            { isSubdirectory: true, subKey: "pikr", name: "PIK-Remaja (PIK-R)", desc: "Pusat Informasi dan Konseling Remaja", icon: '<img src="icon046.png" class="w-8 h-8 object-contain">' },
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




