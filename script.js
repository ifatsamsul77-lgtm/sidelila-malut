/* ==========================================================================
   SIDELILA v2.0 - SCRIPT UTAMA (CLEAN VERSION)
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

// --- 2. SISTEM LOGIN & SESSION ---
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

// --- 3. NAVIGASI HALAMAN & SIDEBAR ---
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
    if (key === 'wfh') bukaFormWFH();
    else if (key === 'estimasi-sasaran') bukaEstimasiSasaran();
    else if (key === 'estimasi-pangkat') bukaEstimasiPangkat();
    else if (key === 'usulan-pangkat') bukaFormUsulanPangkat();
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
