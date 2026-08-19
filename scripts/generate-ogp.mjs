import sharp from 'sharp';

const width = 1200;
const height = 630;
const overlay = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="orb" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#b9944f" stop-opacity="0.34"/>
        <stop offset="1" stop-color="#b9944f" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="#ffffff" fill-opacity="0.68"/>
    <circle cx="970" cy="205" r="250" fill="url(#orb)"/>
    <rect x="32" y="32" width="1136" height="566" fill="none" stroke="#795c29" stroke-opacity="0.48" stroke-width="2"/>
    <text x="82" y="248" fill="#1d1b17" font-family="Georgia, serif" font-size="166" font-style="italic" font-weight="700">Healing</text>
    <text x="90" y="308" fill="#795c29" font-family="Yu Gothic, sans-serif" font-size="22" font-weight="700" letter-spacing="7">SHONAN / FUJISAWA</text>
    <text x="90" y="418" fill="#1d1b17" font-family="Yu Gothic, sans-serif" font-size="52" font-weight="700">湘南発 出張アロマ性感マッサージ</text>
    <text x="92" y="474" fill="#625c52" font-family="Yu Gothic, sans-serif" font-size="25" letter-spacing="2">12:00〜翌3:00 / 年中無休 / 藤沢駅 徒歩3分</text>
    <rect x="0" y="574" width="1200" height="56" fill="#1d1b17"/>
    <text x="84" y="610" fill="#d2b978" font-family="Georgia, serif" font-size="20" letter-spacing="6">AROMA — PRIVATE TIME — HEALING SHONAN</text>
  </svg>
`);

await sharp('src/assets/images/healing-background.png')
  .resize(width, height, { fit: 'cover', position: 'centre' })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile('public/ogp.jpg');

console.log('Generated public/ogp.jpg');
