// ==========================================================================
// SIDELILA v2.0 - MODUL GALERI FOTO KEGIATAN (FIXED & ALIGNED)
// ==========================================================================

// --- 1. RENDER UTAMA TAMPILAN GALERI & PANEL ADMIN ---
function renderGaleriView() {
    const target = document.getElementById('section-galeri');
    if (!target) return;
    
    const role = localStorage.getItem('sidelila_role');
    
    // Panel Admin: Hanya muncul jika role adalah admin
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

    // Kerangka utama halaman galeri dengan kontainer penampung data dari Firebase
    target.innerHTML = `
        <div class="space-y-6">
            <div class="border-b border-slate-200 pb-4">
                <h2 class="text-lg font-black uppercase text-slate-900">Galeri Dokumentasi Kegiatan</h2>
                <p class="text-xs text-slate-500 mt-1">Dokumentasi visual kegiatan operasional dan program Bangga Kencana di lapangan.</p>
            </div>
            ${formAdmin}
            <div id="galeri-container">
                <div class="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <p class="text-xs font-bold text-slate-700">Memuat dokumentasi foto kegiatan...</p>
                </div>
            </div>
        </div>
    `;

    // Panggil pemuatan data real-time dari Firebase Firestore
    muatGaleriFirebase();
}

// --- 2. PROSES TOMBOL PUBLIKASIKAN (Dihubungkan ke Firebase) ---
function prosesUnggahGaleri() {
    const fileInput = document.getElementById('galeri-file-input');
    const captionInput = document.getElementById('galeri-caption-input');
    
    if (!fileInput || !fileInput.files[0]) { 
        alert("Pilih foto terlebih dahulu."); 
        return; 
    }
    const caption = captionInput ? captionInput.value.trim() : "";
    if (!caption) { 
        alert("Tuliskan keterangan foto."); 
        return; 
    }
    
    // Jalankan fungsi simpan kompresi ke Firebase Firestore
    simpanFotoGaleriFirebase(fileInput.files[0], "Dokumentasi Kegiatan SIDELILA", caption);
}

// --- 3. INTEGRASI FIREBASE FIRESTORE & KOMPRESI OTOMATIS ---
function simpanFotoGaleriFirebase(fileFoto, judulFoto, keteranganFoto) {
    if (!fileFoto) return;

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

            if (typeof db === 'undefined') {
                alert("Koneksi database belum siap!");
                return;
            }

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
                if (document.getElementById('galeri-caption-input')) {
                    document.getElementById('galeri-caption-input').value = '';
                }
                if (document.getElementById('galeri-file-input')) {
                    document.getElementById('galeri-file-input').value = '';
                }
            })
            .catch((error) => {
                console.error("Gagal mengunggah foto: ", error);
                alert("Gagal mengunggah foto ke server.");
            });
        };
    };
    reader.readAsDataURL(fileFoto);
}

// --- 4. HAPUS FOTO DARI FIREBASE ---
function hapusFotoGaleri(docId) {
    if (confirm("Hapus foto ini dari server galeri?")) {
        if (typeof db === 'undefined') return;
        db.collection("galeri_sidelila").doc(docId).delete()
          .then(() => {
              console.log("Foto berhasil dihapus dari server.");
          })
          .catch((error) => {
              console.error("Gagal menghapus foto: ", error);
              alert("Gagal menghapus foto dari server.");
          });
    }
}

// --- 5. MEMUAT & MENAMPILKAN GALERI REAL-TIME DARI FIREBASE (GRID 2x2) ---
function muatGaleriFirebase() {
    if (typeof db === 'undefined') return;

    db.collection("galeri_sidelila")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
          let container = document.getElementById('galeri-container');
          if (!container) return;

          let html = "";
          const role = localStorage.getItem('sidelila_role');

          if (querySnapshot.empty) {
              html = '<div class="col-span-full text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm"><p class="text-xs font-bold text-slate-700">Belum ada dokumentasi foto kegiatan di server.</p></div>';
          } else {
              // Tata letak grid 2 kolom (posisi 2x2 / dua deret) untuk User & Admin
              html = '<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">';
              querySnapshot.forEach((doc) => {
                  const data = doc.data();
                  const docId = doc.id;
                  
                  // Tombol Hapus khusus Admin menggunakan ID dokumen Firestore
                  const btnDel = role === 'admin' ? `
                      <div class="pt-2 border-t border-slate-100 flex justify-end">
                          <button type="button" onclick="hapusFotoGaleri('${docId}')" class="text-[11px] font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded cursor-pointer hover:bg-rose-100 transition-all">🗑️ Hapus Foto</button>
                      </div>
                  ` : '';

                  html += `
                      <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden group hover:border-sky-400 transition-all flex flex-col">
                          <div class="aspect-video bg-slate-100 overflow-hidden relative">
                              <img src="${data.image}" alt="${data.judul || 'Foto Kegiatan'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                              <span class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full font-medium">${data.tanggalFormatted || ''}</span>
                          </div>
                          <div class="p-4 flex flex-col flex-grow justify-between space-y-3">
                              <p class="text-xs text-slate-700 font-medium leading-relaxed">${data.keterangan || data.judul || ''}</p>
                              ${btnDel}
                          </div>
                      </div>
                  `;
              });
              html += '</div>';
          }
          container.innerHTML = html;
      }, (error) => {
          console.error("Gagal mengambil data dari Firestore:", error);
      });
}
