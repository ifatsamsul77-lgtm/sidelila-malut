// ==========================================================================
// SIDELILA v2.0 - MODUL GALERI FOTO KEGIATAN (SAFE & PRECISE)
// ==========================================================================

// --- FUNGSI UTAMA RENDER GALERI & PANEL ADMIN ---
function renderGaleriView() {
    const target = document.getElementById('section-galeri');
    if (!target) return;
    
    const role = localStorage.getItem('sidelila_role');
    
    // Panel Admin: Hanya dibangun jika role bernilai 'admin'
    const formAdmin = role === 'admin' ? `
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 max-w-2xl mb-6 shadow-sm">
            <h4 class="text-xs font-black uppercase text-slate-900 tracking-wider">➕ Panel Admin: Unggah Foto Kegiatan</h4>
            <div class="space-y-1">
                <label class="block text-xs font-bold text-slate-700">Pilih Berkas Foto</label>
                <input type="file" id="galeri-file-input" accept="image/*" class="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium cursor-pointer">
            </div>
            <div class="space-y-1">
                <label class="block text-xs font-bold text-slate-700">Keterangan / Caption Kegiatan</label>
                <textarea id="galeri-caption-input" rows="3" placeholder="Tuliskan keterangan lengkap kegiatan di sini..." class="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:border-sky-500"></textarea>
            </div>
            <button type="button" onclick="prosesUnggahGaleri()" class="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer">
                📤 Publikasikan Foto
            </button>
        </div>
    ` : '';

    // Kerangka HTML section galeri
    target.innerHTML = `
        <div class="space-y-6">
            <div class="border-b border-slate-200 pb-4">
                <h2 class="text-lg font-black uppercase text-slate-900">Galeri Dokumentasi Kegiatan</h2>
                <p class="text-xs text-slate-500 mt-1">Dokumentasi visual kegiatan operasional dan program Bangga Kencana di lapangan.</p>
            </div>
            ${formAdmin}
            <div id="galeri-container">
                <div class="text-center py-12 text-slate-400 text-xs font-medium">Memuat dokumentasi galeri...</div>
            </div>
        </div>
    `;

    // Eksekusi pemuatan data galeri
    muatDataGaleriAktif();
}

// --- FUNGSI PROSES UGGAH LOKAL / FIREBASE ---
function prosesUnggahGaleri() {
    const fileInput = document.getElementById('galeri-file-input');
    const captionInput = document.getElementById('galeri-caption-input');
    
    if (!fileInput || !fileInput.files[0]) { 
        alert("Silakan pilih foto terlebih dahulu."); 
        return; 
    }
    const caption = captionInput ? captionInput.value.trim() : "";
    if (!caption) { 
        alert("Silakan tuliskan keterangan foto."); 
        return; 
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const list = JSON.parse(localStorage.getItem('sidelila_gallery_photos') || '[]');
        list.push({ 
            id: Date.now(), 
            image: e.target.result, 
            caption: caption, 
            date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) 
        });
        localStorage.setItem('sidelila_gallery_photos', JSON.stringify(list));
        alert("Foto berhasil dipublikasikan!");
        
        // Reset input form admin
        fileInput.value = '';
        if (captionInput) captionInput.value = '';
        
        muatDataGaleriAktif();
    };
    reader.readAsDataURL(fileInput.files[0]);
}

// --- FUNGSI HAPUS FOTO (KHUSUS ADMIN) ---
function hapusFotoGaleri(id) {
    if (confirm("Hapus foto ini dari galeri?")) {
        let list = JSON.parse(localStorage.getItem('sidelila_gallery_photos') || '[]');
        list = list.filter(item => item.id !== id);
        localStorage.setItem('sidelila_gallery_photos', JSON.stringify(list));
        muatDataGaleriAktif();
    }
}

// --- FUNGSI RENDER TAMPILAN DATA (GRID 2x2 / 2 KOLOM) ---
function muatDataGaleriAktif() {
    const container = document.getElementById('galeri-container');
    if (!container) return;

    const role = localStorage.getItem('sidelila_role');
    const list = JSON.parse(localStorage.getItem('sidelila_gallery_photos') || '[]');
    let cards = '';
    
    if (list.length === 0) {
        cards = `<div class="col-span-full text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm"><p class="text-xs font-bold text-slate-700">Belum ada dokumentasi foto kegiatan.</p></div>`;
    } else {
        list.slice().reverse().forEach(item => {
            const btnDel = role === 'admin' ? `
                <div class="pt-2 border-t border-slate-100 flex justify-end">
                    <button type="button" onclick="hapusFotoGaleri(${item.id})" class="text-[11px] font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded cursor-pointer hover:bg-rose-100 transition-all">🗑️ Hapus Foto</button>
                </div>
            ` : '';
            
            cards += `
                <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col group hover:border-sky-400 transition-all">
                    <div class="relative aspect-video bg-slate-100 overflow-hidden">
                        <img src="${item.image}" alt="Dokumentasi" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        <span class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full font-medium">${item.date}</span>
                    </div>
                    <div class="p-4 flex flex-col flex-grow justify-between space-y-3">
                        <p class="text-xs text-slate-800 font-medium leading-relaxed">${item.caption}</p>
                        ${btnDel}
                    </div>
                </div>
            `;
        });
    }

    // Memastikan kontainer menggunakan grid 1 kolom di mobile dan 2 kolom di layar menengah ke atas (2x2)
    container.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            ${cards}
        </div>
    `;
}
