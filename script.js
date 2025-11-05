function tampilkanRekomendasi() {
  const role = document.getElementById('role').value;
  const hasil = document.getElementById('hasil');
  let rekomendasi = '';

  if (role === 'marksman') {
    rekomendasi = `
      <h2>Rekomendasi Item untuk Marksman</h2>
      <ul>
        <li>Berserker’s Fury</li>
        <li>Scarlet Phantom</li>
        <li>Windtalker</li>
        <li>Malefic Roar</li>
      </ul>
    `;
  } else if (role === 'mage') {
    rekomendasi = `
      <h2>Rekomendasi Item untuk Mage</h2>
      <ul>
        <li>Clock of Destiny</li>
        <li>Lightning Truncheon</li>
        <li>Holy Crystal</li>
        <li>Divine Glaive</li>
      </ul>
    `;
  } else if (role === 'tank') {
    rekomendasi = `
      <h2>Rekomendasi Item untuk Tank</h2>
      <ul>
        <li>Antique Cuirass</li>
        <li>Dominance Ice</li>
        <li>Oracle</li>
        <li>Immortality</li>
      </ul>
    `;
  } else if (role === 'assassin') {
    rekomendasi = `
      <h2>Rekomendasi Item untuk Assassin</h2>
      <ul>
        <li>Blade of Despair</li>
        <li>Hunter Strike</li>
        <li>Endless Battle</li>
        <li>Malefic Roar</li>
      </ul>
    `;
  } else if (role === 'support') {
    rekomendasi = `
      <h2>Rekomendasi Item untuk Support</h2>
      <ul>
        <li>Dominance Ice</li>
        <li>Oracle</li>
        <li>Antique Cuirass</li>
        <li>Immortality</li>
      </ul>
    `;
  } else {
    rekomendasi = '<p>Silakan pilih role terlebih dahulu!</p>';
  }

  hasil.innerHTML = rekomendasi;
}
