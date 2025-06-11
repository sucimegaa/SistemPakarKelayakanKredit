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
    hasilDiv.innerHTML = "<em>Sedang mengecek kelayakan...</em>"; // loading efek
  
    setTimeout(() => {
      const jenis = document.getElementById("jenis_kredit").value;
      let hasil = "Tidak Layak";
      let alasan = "";
  
      if (jenis === "multiguna") {
        const pendapatan = parseFloat(document.getElementById("pendapatan").value);
        const riwayat = document.getElementById("riwayat").value;
        const pekerjaan = document.getElementById("pekerjaan").value;
        const dokumenLengkap = document.getElementById("dokumen_lengkap").checked;
      
        const daftarPekerjaanLayak = ["PNS", "CPNS", "BUMN", "BUMD", "TNI", "POLRI", "Legislatif", "Swasta", "Pensiunan", "P3K", "Kontrak", "Honorer", "Perangkat Desa", "Yayasan", "Koperasi"];
      
        if (!dokumenLengkap) {
          alasan += "Dokumen belum lengkap. ";
        }
        if (!daftarPekerjaanLayak.includes(pekerjaan)) {
          alasan += "Pekerjaan tidak termasuk sasaran Kredit Multiguna. ";
        }
        if (pendapatan < 3) {
          alasan += "Pendapatan kurang dari 3 juta. ";
        }
        if (riwayat === "buruk") {
          alasan += "Riwayat kredit buruk. ";
        }
      
        if (alasan === "") {
          hasil = "Layak Kredit Multiguna";
      
          // Info tambahan simulasi plafond maksimal
          let plafondMaksimal = pendapatan * 0.8;
          hasil += `<br><small>(Estimasi Plafond Maksimal: Rp ${plafondMaksimal.toFixed(2)} Juta)</small>`;
        }
      }
      
      else if (jenis === "kur") {
        const lamaUsaha = parseInt(document.getElementById("lama_usaha").value);
        const omzet = parseFloat(document.getElementById("omzet").value);
        const legalitas = document.getElementById("legalitas").checked;
        const pinjamanBank = document.getElementById("pinjaman_bank").checked;
  
        if (lamaUsaha >= 6 && omzet >= 2 && !pinjamanBank) {
          hasil = legalitas ? "Layak KUR" : "Perlu Legalitas Usaha untuk KUR";
        } else {
          if (lamaUsaha < 6) alasan += "Lama usaha kurang dari 6 bulan. ";
          if (omzet < 2) alasan += "Omzet bulanan kurang dari 2 juta. ";
          if (pinjamanBank) alasan += "Sedang menerima pinjaman bank lain. ";
        }
      } 
      else if (jenis === "kkb") {
        const pekerjaan = document.getElementById("pekerjaan_kkb").value;
        const usia = parseInt(document.getElementById("usia").value);
        const riwayat = document.getElementById("riwayat_kkb").value;
  
        if (usia >= 21 && usia <= 60 && riwayat === "baik") {
          if (pekerjaan === "tetap" || pekerjaan === "usaha") {
            hasil = "Layak Kredit Kendaraan Bermotor";
          } else {
            hasil = "Dipertimbangkan Kredit Kendaraan Bermotor";
          }
        } else {
          if (usia < 21 || usia > 60) alasan += "Usia tidak memenuhi syarat (21-60 tahun). ";
          if (riwayat !== "baik") alasan += "Riwayat kredit buruk. ";
        }
      }
  
      let output = `<strong>Hasil:</strong> ${hasil}`;
      if (hasil === "Tidak Layak" && alasan !== "") {
        output += `<br><strong>Alasan:</strong> ${alasan}`;
      }
  
      hasilDiv.innerHTML = output;
      
    }, 1000); // delay 1 detik (1000 ms)
  }
  