/* ==========================================================================
   SIDELILA v2.0 - SCRIPT UTAMA, NAVIGASI & FORM (STABIL & BERSIH)
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

// --- 2. LOGIKA SLIDER FOTO BERANDA ---
if (typeof window.currentSlide === 'undefined') {
    window.currentSlide = 0;
}
if (typeof window.slideInterval === 'undefined') {
    window.slideInterval = null;
}

function initSlider() {
    showSlide(window.currentSlide);
    if (window.slideInterval) clearInterval(window.slideInterval);
    window.slideInterval = setInterval(() => { nextSlide(); }, 4000);
}

function showSlide(index) {
    const container = document.getElementById('slider-container');
    const dots = document.querySelectorAll('#slider-dots span');
    if (!container) return;

    const totalSlides = container.children.length;
    if (index >= totalSlides) window.currentSlide = 0;
    else if (index < 0) window.currentSlide = totalSlides - 1;
    else window.currentSlide = index;

    container.style.transform = `translateX(-${window.currentSlide * 100}%)`;

    if (dots && dots.length > 0) {
        dots.forEach((dot, idx) => {
            dot.className = idx === window.currentSlide ? "w-2.5 h-2.5 rounded-full bg-white transition-all cursor-pointer" : "w-2.5 h-2.5 rounded-full bg-white/50 transition-all cursor-pointer";
        });
    }
}

function nextSlide() { showSlide(window.currentSlide + 1); }
function prevSlide() { showSlide(window.currentSlide - 1); }
function goToSlide(index) { showSlide(index); }

// --- 3. SISTEM LOGIN & SESSION ---
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

// --- 4. NAVIGASI HALAMAN & SIDEBAR ---
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

// --- 5. FUNGSI FORM LAPORAN (ESTIMASI & USULAN PANGKAT) ---
function openFormType(key, event) {
    if (event) event.preventDefault();
    navigateTo('form');
    if (key === 'wfh' && typeof bukaFormWFH === 'function') bukaFormWFH();
    else if (key === 'estimasi-sasaran') bukaEstimasiSasaran();
    else if (key === 'estimasi-pangkat') bukaEstimasiPangkat();
    else if (key === 'usulan-pangkat') bukaFormUsulanPangkat();
}

function bukaEstimasiSasaran() {
    const container = document.getElementById('form-detail-container');
    const catView = document.getElementById('form-categories-view');
    if (catView) catView.style.display = 'none';
    if (container) {
        container.style.display = 'block';
        container.innerHTML = `
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div class="flex justify-between items-center border-b pb-3">
                    <h3 class="font-bold text-slate-800 text-sm">Simulasi Estimasi Sasaran Wilayah Binaan</h3>
                    <button type="button" onclick="closeFormDetailView()" class="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-xs font-bold rounded-lg cursor-pointer">← Kembali</button>
                </div>
                <p class="text-xs text-slate-600">Fitur kalkulator dan estimasi sasaran operasional lini lapangan.</p>
            </div>
        `;
    }
}

function bukaEstimasiPangkat() {
    const container = document.getElementById('form-detail-container');
    const catView = document.getElementById('form-categories-view');
    if (catView) catView.style.display = 'none';
    if (container) {
        container.style.display = 'block';
        container.innerHTML = `
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div class="flex justify-between items-center border-b pb-3">
                    <h3 class="font-bold text-slate-800 text-sm">Kalkulator Estimasi Kenaikan Pangkat</h3>
                    <button type="button" onclick="closeFormDetailView()" class="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-xs font-bold rounded-lg cursor-pointer">← Kembali</button>
                </div>
                <p class="text-xs text-slate-600">Simulasi perhitungan akumulasi angka kredit fungsional PKB/PLKB.</p>
            </div>
        `;
    }
}

function bukaFormUsulanPangkat() {
    const container = document.getElementById('form-detail-container');
    const catView = document.getElementById('form-categories-view');
    if (catView) catView.style.display = 'none';
    if (container) {
        container.style.display = 'block';
        container.innerHTML = `
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div class="flex justify-between items-center border-b pb-3">
                    <h3 class="font-bold text-slate-800 text-sm">Form Usulan Pengajuan Kenaikan Pangkat</h3>
                    <button type="button" onclick="closeFormDetailView()" class="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-xs font-bold rounded-lg cursor-pointer">← Kembali</button>
                </div>
                <p class="text-xs text-slate-600">Form pengajuan dan verifikasi berkas kenaikan jenjang jabatan.</p>
            </div>
        `;
    }
}

// --- 6. PENDUKUNG CETAK GLOBAL ---
function bukaJendelaCetak(htmlContent) {
    const win = window.open('', '_blank');
    if (!win) { alert("Izinkan pop-up browser."); return; }
    win.document.write(htmlContent);
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); }, 500);
}
