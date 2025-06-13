function tampilkanPemilihanJenis() {
  document.getElementById("halaman_awal").style.display = "none";
  document.getElementById("area_formulir").style.display = "block";
}

function tampilkanForm() {
    const jenis = document.getElementById("jenis_kredit").value;
    const form = document.getElementById("form_kredit");
    form.innerHTML = ""; // reset isi form
  
    if (jenis === "multiguna") {
      form.innerHTML = `
        <label for="pendapatan">Pendapatan (Juta):</label>
        <input type="number" id="pendapatan" min="0">
  
        <label for="riwayat">Riwayat Kredit:</label>
        <select id="riwayat">
          <option value="baik">Baik</option>
          <option value="sedang">Sedang</option>
          <option value="buruk">Buruk</option>
        </select>
  
        <label for="pekerjaan">Pekerjaan:</label>
        <select id="pekerjaan">
          <option value="PNS">PNS</option>
          <option value="BUMN">BUMN</option>
          <option value="Swasta">Swasta</option>
          <option value="Honorer">Honorer</option>
          <option value="Kontrak">Kontrak</option>
        </select>
      `;
    } else if (jenis === "kur") {
      form.innerHTML = `
        <label for="jenis_usaha">Jenis Usaha:</label>
        <input type="text" id="jenis_usaha">
  
        <label for="lama_usaha">Lama Usaha (bulan):</label>
        <input type="number" id="lama_usaha" min="0">
  
        <label for="omzet">Omzet Bulanan (Juta):</label>
        <input type="number" id="omzet" min="0">
  
        <label><input type="checkbox" id="legalitas"> Memiliki Legalitas Usaha</label>
        <label><input type="checkbox" id="pinjaman_bank"> Sedang Menerima Pinjaman Bank Lain</label>
      `;
    } else if (jenis === "kkb") {
      form.innerHTML = `
        <label for="pekerjaan_kkb">Pekerjaan:</label>
        <select id="pekerjaan_kkb">
          <option value="tetap">Tetap</option>
          <option value="kontrak">Kontrak</option>
          <option value="usaha">Usaha Stabil</option>
        </select>
  
        <label for="usia">Usia:</label>
        <input type="number" id="usia" min="18">
  
        <label for="riwayat_kkb">Riwayat Kredit:</label>
        <select id="riwayat_kkb">
          <option value="baik">Baik</option>
          <option value="buruk">Buruk</option>
        </select>
      `;
    }
  }function tampilkanForm() {
    const jenis = document.getElementById("jenis_kredit").value;
    const form = document.getElementById("form_kredit");
    const hasil = document.getElementById("hasil");
  
    form.innerHTML = ""; // reset isi form
    hasil.innerHTML = ""; // reset hasil saat ganti pilihan
  
    if (jenis === "multiguna") {
      form.innerHTML = `
        <label for="pendapatan">Pendapatan (Juta):</label>
        <input type="number" id="pendapatan" min="0">
    
        <label for="riwayat">Riwayat Kredit:</label>
        <select id="riwayat">
          <option value="baik">Baik</option>
          <option value="sedang">Sedang</option>
          <option value="buruk">Buruk</option>
        </select>
    
        <label for="pekerjaan">Pekerjaan:</label>
        <select id="pekerjaan">
          <option value="PNS">PNS</option>
          <option value="CPNS">CPNS</option>
          <option value="BUMN">BUMN</option>
          <option value="BUMD">BUMD</option>
          <option value="TNI">TNI</option>
          <option value="POLRI">POLRI</option>
          <option value="Legislatif">Legislatif</option>
          <option value="Swasta">Swasta</option>
          <option value="Pensiunan">Pensiunan</option>
          <option value="P3K">P3K</option>
          <option value="Kontrak">Tenaga Kontrak</option>
          <option value="Honorer">Tenaga Honorer</option>
          <option value="Perangkat Desa">Perangkat Desa</option>
          <option value="Yayasan">Pegawai Yayasan</option>
          <option value="Koperasi">Pegawai Koperasi</option>
        </select>

        <label for="aset">Aset Jaminan Memadai:</label>
      <select id="aset">
        <option value="ya">Ya</option>
        <option value="tidak">Tidak</option>
      </select>

      <label for="usiaMultiguna">Usia:</label>
      <input type="number" id="usiaMultiguna" required>

      <label for="masakerjaMultiguna">Masa Kerja (tahun):</label>
      <input type="number" id="masakerjaMultiguna" required>
    
        <label><input type="checkbox" id="dokumen_lengkap"> Dokumen Lengkap (KTP, NPWP, Slip Gaji, Jaminan)</label>
      `;
    
    
    } else if (jenis === "kur") {
      form.innerHTML = `
        <label for="jenis_usaha">Jenis Usaha:</label>
        <input type="text" id="jenis_usaha">
  
        <label for="lama_usaha">Lama Usaha (bulan):</label>
        <input type="number" id="lama_usaha" min="0">
  
        <label for="omzet">Omzet Bulanan (Juta):</label>
        <input type="number" id="omzet" min="0">

        <label for="feasible">Usaha feasible tapi belum memenuhi standar kredit biasa?</label>
         <select id="feasible">
         <option value="ya">Ya</option>
         <option value="tidak">Tidak</option>
         </select>
  
        <label><input type="checkbox" id="legalitas"> Memiliki Legalitas Usaha</label>
        <label><input type="checkbox" id="pinjaman_bank"> Sedang Menerima Pinjaman Bank Lain</label>
      `;
    } else if (jenis === "kkb") {
      form.innerHTML = `
        <label for="pekerjaan_kkb">Pekerjaan:</label>
        <select id="pekerjaan_kkb">
          <option value="tetap">Tetap</option>
          <option value="kontrak">Kontrak</option>
          <option value="usaha">Usaha Stabil</option>
        </select>
  
        <label for="usia">Usia:</label>
        <input type="number" id="usia" min="18">
  
        <label for="riwayat_kkb">Riwayat Kredit:</label>
        <select id="riwayat_kkb">
          <option value="baik">Baik</option>
          <option value="buruk">Buruk</option>
        </select>
      `;
    }
  }
  function cekKelayakanGabungan() {
  const hasilDiv = document.getElementById("hasil");
  hasilDiv.innerHTML = "<em>Sedang mengecek kelayakan...</em>";

  setTimeout(() => {
    const jenis = document.getElementById("jenis_kredit").value;
    let hasil = "Tidak Layak";
    let alasan = "";
    let saran = "";

    if (jenis === "multiguna") {
      const pendapatan = parseFloat(document.getElementById("pendapatan").value);
      const riwayat = document.getElementById("riwayat").value;
      const pekerjaan = document.getElementById("pekerjaan").value;
      const dokumenLengkap = document.getElementById("dokumen_lengkap").checked;
      const aset = document.getElementById("aset").value;
      const usia = parseInt(document.getElementById("usiaMultiguna").value);
      const masaKerja = parseFloat(document.getElementById("masakerjaMultiguna").value);

      const daftarPekerjaanLayak = [
        "PNS", "CPNS", "BUMN", "BUMD", "TNI", "POLRI", "Legislatif",
        "Swasta", "Pensiunan", "P3K", "Kontrak", "Honorer", 
        "Perangkat Desa", "Yayasan", "Koperasi"
      ];

      if (isNaN(usia) || usia < 21 || usia > 55) alasan += "Usia tidak memenuhi syarat (21–55 tahun). ";
      if (isNaN(masaKerja) || masaKerja < 1) alasan += "Masa kerja kurang dari 1 tahun. ";
      if (!dokumenLengkap) alasan += "Dokumen belum lengkap. ";
      if (!daftarPekerjaanLayak.includes(pekerjaan)) alasan += "Pekerjaan tidak termasuk sasaran Kredit Multiguna. ";
      if (isNaN(pendapatan) || pendapatan < 3) alasan += "Pendapatan kurang dari 3 juta. ";
      if (aset !== "ya") alasan += "Aset jaminan tidak memadai. ";
      if (riwayat === "buruk") alasan += "Riwayat kredit buruk. ";

      if (alasan === "") {
        hasil = "Layak Kredit Multiguna";
        const plafond = pendapatan * 0.8;
        hasil += `<br><small>(Estimasi Plafond Maksimal: Rp ${plafond.toFixed(2)} Juta)</small>`;
        saran = "Silakan bawa dokumen lengkap Anda ke kantor Bank Jatim terdekat untuk proses verifikasi lebih lanjut.";
      } else {
        saran = "Perbaiki catatan Anda terlebih dahulu atau konsultasikan langsung ke petugas Bank Jatim untuk mendapatkan alternatif solusi.";
      }
    }

    else if (jenis === "kur") {
      const jenisUsaha = document.getElementById("jenis_usaha").value.trim();
      const lamaUsaha = parseInt(document.getElementById("lama_usaha").value);
      const omzet = parseFloat(document.getElementById("omzet").value);
      const legalitas = document.getElementById("legalitas").checked;
      const pinjamanBank = document.getElementById("pinjaman_bank").checked;
      const feasible = document.getElementById("feasible").value;

      if (jenisUsaha === "") alasan += "Jenis usaha belum diisi. ";
      if (isNaN(lamaUsaha) || lamaUsaha < 6) alasan += "Lama usaha kurang dari 6 bulan. ";
      if (isNaN(omzet) || omzet < 2) alasan += "Omzet kurang dari 2 juta. ";
      if (!legalitas) alasan += "Belum memiliki legalitas usaha. ";
      if (pinjamanBank) alasan += "Sedang menerima pinjaman produktif lain. ";
      if (feasible !== "ya") alasan += "Usaha tidak layak atau sudah masuk kategori standar kredit biasa. ";

      if (alasan === "") {
        hasil = "Layak Kredit Usaha Rakyat (KUR)";
        saran = "Bawa dokumen usaha Anda ke Bank Jatim untuk proses pengajuan KUR lebih lanjut.";
      } else {
        saran = "Lengkapi legalitas usaha dan pastikan usaha Anda telah berjalan dengan baik sebelum mengajukan kembali.";
      }
    }

    else if (jenis === "kkb") {
      const pekerjaan = document.getElementById("pekerjaan_kkb").value;
      const usia = parseInt(document.getElementById("usia").value);
      const riwayat = document.getElementById("riwayat_kkb").value;

      if (pekerjaan !== "tetap" && pekerjaan !== "usaha") alasan += "Pekerjaan belum tetap atau belum stabil. ";
      if (isNaN(usia) || usia < 21 || usia > 60) alasan += "Usia tidak memenuhi syarat (21–60 tahun). ";
      if (riwayat === "buruk") alasan += "Riwayat kredit buruk. ";

      if (alasan === "") {
        hasil = "Layak Kredit Kendaraan Bermotor (KKB)";
        saran = "Silakan kunjungi Bank Jatim dengan membawa dokumen pendukung untuk pengajuan KKB.";
      } else {
        saran = "Tingkatkan stabilitas pekerjaan dan riwayat kredit Anda sebelum mencoba kembali atau konsultasikan dengan petugas bank.";
      }
    }

    hasilDiv.innerHTML = `<strong>${hasil}</strong>` +
      (alasan ? `<br><small>Catatan: ${alasan}</small>` : "") +
      `<br><br><em>${saran}</em>`;
  }, 800);

  
}


  
  
