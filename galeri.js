// ==========================================
// MODUL GALERI KEGIATAN (SIDELILA v2.0)
// Terisolasi, Berbasis Firebase Firestore, Tanpa Atribut Tanggal
// ==========================================

// 1. Fungsi Utama Render Tampilan Galeri Berdasarkan Peran (Role)
function renderGaleriView() {
    const target = document.getElementById('section-galeri');
    if (!target) return;
    
    const role = localStorage.getItem('sidelila_role') || 'user';

    // Panel khusus Admin di bagian atas (Hanya muncul jika role === 'admin')
    const formAdmin = role === 'admin' ? `
        <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 max-w-2xl mb-6">
            <h4 class="text-xs font-bold uppercase text-slate-800 tracking-wider">➕ Panel Admin: Unggah Dokumentasi Foto</h4>
            <input type="file" id="galeri-file-input" accept="image/*" class="w-full p-2 bg-white border border-slate-300 rounded-xl text-xs">
            <textarea id="galeri-caption-input" rows="2" placeholder="Tuliskan keterangan foto..." class="w-full p-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"></textarea>
            <button type="button" onclick="prosesUnggahGaleriFirebase()" class="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer">
                🚀 Publikasikan ke Server
            </button>
        </div>
    ` : '';

    // Kerangka dasar kontainer galeri di dalam section terisolasi
    target.innerHTML = `
        <div class="space-y-6">
            <div class="border-b border-slate-200 pb-4">
                <h2 class="text-lg font-black uppercase text-slate-800">Galeri Dokumentasi Kegiatan</h2>
            </div>
            ${formAdmin}
            <div id="galeri-container">
                <div class="text-center py-12 text-slate-400 text-xs font-medium">Memuat data galeri...</div>
            </div>
        </div>
    `;

    // Ambil data dari Firebase Firestore
    muatGaleriFirebase();
}

// 2. Fungsi Ambil & Render Data dari Firebase Firestore ke Tampilan
function muatGaleriFirebase() {
    if (typeof db === 'undefined') {
        console.error("Koneksi Firestore (db) belum siap.");
        return;
    }

    db.collection("galeri_sidelila")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
          const container = document.getElementById('galeri-container');
          if (!container) return;

          const role = localStorage.getItem('sidelila_role') || 'user';
          let cards = '';

          if (querySnapshot.empty) {
              container.innerHTML = `<div class="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm"><p class="text-xs font-bold text-slate-700">Belum ada dokumentasi foto kegiatan.</p></div>`;
              return;
          }

          querySnapshot.forEach((doc) => {
              const item = doc.data();
              const docId = doc.id;

              // Tombol hapus khusus admin
              const btnDel = role === 'admin' ? `
                  <div class="pt-2 border-t border-slate-100 flex justify-end">
                      <button type="button" onclick="hapusFotoGaleriFirebase('${docId}')" class="text-[11px] font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg transition-all cursor-pointer">
                          🗑️ Hapus
                      </button>
                  </div>
              ` : '';

              // Layout Kartu: 
              // Admin: Tersusun ke samping lalu ke bawah (mengikuti grid responsif)
              // User: Grid kartu 2x2 ke bawah, lengkap dengan caption di bawah foto TANPA ADA TANGGAL.
              cards += `
                  <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all">
                      <div class="aspect-video bg-slate-100 overflow-hidden">
                          <img src="${item.image}" alt="Dokumentasi" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                      </div>
                      <div class="p-4 flex flex-col flex-grow justify-between space-y-3">
                          <p class="text-xs text-slate-800 font-medium leading-relaxed">${item.keterangan || item.judul || ''}</p>
                          ${btnDel}
                      </div>
                  </div>
              `;
          });

          // Terapkan struktur grid 2x2 ke bawah untuk user / responsif
          container.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">${cards}</div>`;
      }, (error) => {
          console.error("Gagal memuat galeri:", error);
      });
}

// 3. Fungsi Unggah Foto ke Firebase Storage (via kompresi DataURL) & Firestore
function prosesUnggahGaleriFirebase() {
    const fileInput = document.getElementById('galeri-file-input');
    const captionInput = document.getElementById('galeri-caption-input');

    if (!fileInput || !fileInput.files[0]) {
        alert("Silakan pilih foto terlebih dahulu.");
        return;
    }

    const caption = captionInput ? captionInput.value.trim() : "";
    if (!caption) {
        alert("Tuliskan keterangan (caption) foto.");
        return;
    }

    const fileFoto = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            let width = img.width;
            let height = img.height;
            const maxDim = 800; // Batas ukuran maksimal agar optimal
            
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

            // Simpan ke Firestore
            db.collection("galeri_sidelila").add({
                judul: "Dokumentasi Kegiatan SIDELILA",
                keterangan: caption,
                image: compressedDataUrl,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                alert("Foto berhasil dipublikasikan ke server!");
                if (fileInput) fileInput.value = '';
                if (captionInput) captionInput.value = '';
            })
            .catch((error) => {
                console.error("Gagal mengunggah foto: ", error);
                alert("Gagal mengunggah foto ke server.");
            });
        };
    };
    reader.readAsDataURL(fileFoto);
}

// 4. Fungsi Hapus Foto dari Firebase Firestore
function hapusFotoGaleriFirebase(docId) {
    if (confirm("Apakah Anda yakin ingin menghapus foto ini dari server?")) {
        db.collection("galeri_sidelila").doc(docId).delete()
        .then(() => {
            // Pembaruan UI otomatis ditangani oleh onSnapshot
        })
        .catch((error) => {
            console.error("Gagal menghapus foto: ", error);
            alert("Gagal menghapus foto.");
        });
    }
}