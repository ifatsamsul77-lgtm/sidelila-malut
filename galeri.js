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
    console.log("Fungsi muatGaleriFirebase dipanggil...");

    if (typeof db === 'undefined') {
        console.error("Variabel database (db) belum didefinisikan!");
        return;
    }

    db.collection("galeri_sidelila")
      .onSnapshot((querySnapshot) => {
          console.log("Data Firestore berhasil diakses. Jumlah dokumen:", querySnapshot.size);
          
          // Cari section galeri atau area konten utama yang sedang aktif
          let targetArea = document.getElementById('section-galeri') || document.querySelector('main') || document.body;
          
          // Pastikan section galeri dipaksa tampil
          let sectionGaleri = document.getElementById('section-galeri');
          if (sectionGaleri) {
              sectionGaleri.style.display = 'block';
          }

          // Cari atau buat kontainer galeri langsung di area aktif
          let container = document.getElementById('galeri-container');
          if (!container) {
              container = document.createElement('div');
              container.id = 'galeri-container';
              if (sectionGaleri) {
                  sectionGaleri.appendChild(container);
              } else {
                  targetArea.appendChild(container);
              }
          }

          let html = "";
          if (querySnapshot.empty) {
              html = '<div class="col-span-full text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm"><p class="text-xs font-bold text-slate-700">Belum ada dokumentasi foto kegiatan.</p></div>';
          } else {
              html = '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">';
              querySnapshot.forEach((doc) => {
                  const data = doc.data();
                  html += `
                      <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden group">
                          <div class="aspect-video bg-slate-100 overflow-hidden">
                              <img src="${data.image}" alt="${data.judul || 'Foto Kegiatan'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                          </div>
                          <div class="p-4">
                              <p class="text-xs text-slate-700 font-medium leading-relaxed">${data.keterangan || data.judul || ''}</p>
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

