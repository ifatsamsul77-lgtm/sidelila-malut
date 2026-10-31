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
                    <th style="width: 80px;">Tanggal</th>
                    <th style="width: 330px;">Uraian Kegiatan</th>
                    <th style="width: 110px; max-width: 110px; word-break: break-all; overflow-wrap: break-word;">Bukti Dukung (Link)</th>
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
