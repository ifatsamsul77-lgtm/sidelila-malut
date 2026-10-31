/* ==========================================================================
   SIDELILA v2.0 - SCRIPT UTAMA LENGKAP & DIREKTORI MATERI UTUH (FINAL)
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

// --- 2. DATA MATERI & DIREKTORI BERTINGKAT (LENGKAP DENGAN LINK) ---
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

// --- 3. DATA UTAMA KATEGORI MATERI ---
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

// --- 4. LOGIKA SLIDER FOTO BERANDA ---
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

    if (dots && dots.length > 0) {
        dots.forEach((dot, idx) => {
            dot.className = idx === currentSlide ? "w-2.5 h-2.5 rounded-full bg-white transition-all cursor-pointer" : "w-2.5 h-2.5 rounded-full bg-white/50 transition-all cursor-pointer";
        });
    }
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }
function goToSlide(index) { showSlide(index); }

// --- 5. SISTEM LOGIN & SESSION ---
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
    const viewLogin = document.getElementById('view-login');
    const viewDash = document.getElementById('view-dashboard');
    if (viewLogin) viewLogin.style.display = 'none';
    if (viewDash) viewDash.style.display = 'block';

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
        const viewLogin = document.getElementById('view-login');
        const viewDash = document.getElementById('view-dashboard');
        if (viewDash) viewDash.style.display = 'none';
        if (viewLogin) viewLogin.style.display = 'flex';
    }
}

// --- 6. NAVIGASI HALAMAN & SIDEBAR ---
function navigateTo(sectionId, event) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const mainContainer = document.querySelector('main') || document.querySelector('.overflow-y-auto');
    if (mainContainer) mainContainer.scrollTop = 0;

    if (event) event.preventDefault();
    localStorage.setItem('sidelila_active_section', sectionId);

    document.querySelectorAll('.page-section').forEach(sec => {
        sec.classList.remove('active');
        sec.style.setProperty('display', 'none', 'important');
    });

    const ujiKompetensiBox = document.getElementById('section-kompetensi');
    if (ujiKompetensiBox) {
        ujiKompetensiBox.style.setProperty('display', 'none', 'important');
    }

    const targetSection = document.getElementById(`section-${sectionId}`);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.style.setProperty('display', 'block', 'important');
    }

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    const activeLink = document.getElementById(`menu-${sectionId}`);
    if (activeLink) activeLink.classList.add('active');

    if (sectionId === 'beranda') initSlider();
    if (sectionId !== 'materi' && typeof showMateriCategoriesView === 'function') showMateriCategoriesView();
    if (sectionId === 'form') closeFormDetailView();
    if (sectionId === 'galeri' && typeof renderGaleriView === 'function') renderGaleriView();
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

function showMateriCategoriesView() {
    const mCat = document.getElementById('materi-categories-view');
    const mDet = document.getElementById('materi-detail-view');
    if (mCat) mCat.style.display = 'block';
    if (mDet) mDet.style.display = 'none';
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

function openFormType(key, event) {
    if (event) event.preventDefault();
    navigateTo('form');
    if (typeof bukaFormWFH === 'function' && key === 'wfh') bukaFormWFH();
    else if (typeof bukaEstimasiSasaran === 'function' && key === 'estimasi-sasaran') bukaEstimasiSasaran();
    else if (typeof bukaEstimasiPangkat === 'function' && key === 'estimasi-pangkat') bukaEstimasiPangkat();
    else if (typeof bukaFormUsulanPangkat === 'function' && key === 'usulan-pangkat') bukaFormUsulanPangkat();
}

// --- PENDUKUNG CETAK GLOBAL ---
function bukaJendelaCetak(htmlContent) {
    const win = window.open('', '_blank');
    if (!win) { alert("Izinkan pop-up browser."); return; }
    win.document.write(htmlContent);
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); }, 500);
}
