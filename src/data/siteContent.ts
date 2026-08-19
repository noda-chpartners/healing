export const siteContent = {
  name: 'Healing',
  description:
    '藤沢駅徒歩3分。湘南エリアのご自宅・ラブホテル・ビジネスホテル・シティホテルへ伺う、出張アロマ性感マッサージ・ヘルスサービス「Healing」。',
  telephone: '08031232705',
  telephoneDisplay: '080-3123-2705',
  postalCode: '251-0052',
  address: '神奈川県藤沢市藤沢５１６−９',
  station: '藤沢駅 徒歩3分',
  hours: '12:00〜翌3:00',
  holiday: '年中無休',
  lineUrl: 'https://lin.ee/renF7Ui',
  officialUrl: 'https://healing-shonan.com/',
  castUrl: 'https://healing-shonan.com/itemList.html',
  rateUrl: 'https://healing-shonan.com/rate.html',
  nav: [
    { label: '私たちについて', href: '#concept', en: 'ABOUT' },
    { label: 'メニュー', href: '#menu', en: 'MENU' },
    { label: '店舗情報', href: '#information', en: 'INFORMATION' },
    { label: 'ご予約', href: '#reservation', en: 'RESERVATION' },
  ],
  courses: [
    { number: '01', name: '性感マッサージコース', duration: '60分', price: '14,000円' },
    { number: '02', name: 'オールヌード&密着マッサージコース', duration: '80分', price: '22,000円' },
    { number: '03', name: 'ヘルスコース', duration: '60分', price: '16,000円' },
    { number: '04', name: 'ヘルス&性感マッサージコース', duration: '90分', price: '30,000円' },
  ],
} as const;

export type SiteContent = typeof siteContent;
