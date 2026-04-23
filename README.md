# 🏥 DEVA Hastanesi - Modern Web Sitesi

Responsive, animasyonlu ve SEO uyumlu modern hastane web sitesi.

## 📋 Proje Özellikleri

### 🎨 Tasarım Özellikleri
- ✅ **Responsive Tasarım** - Mobil, tablet ve masaüstü uyumlu
- ✅ **Modern UI/UX** - Güncel tasarım trendleri
- ✅ **Animasyonlar** - AOS kütüphanesi ile kaydırma animasyonları
- ✅ **Gradient Renkler** - Modern mavi-yeşil tonları
- ✅ **SVG Pattern'ler** - Özel arka plan desenleri

### ⚡ Teknik Özellikler
- ✅ **Tek Sayfa (One Page)** - Hızlı ve akıcı kullanım
- ✅ **SEO Optimizasyonu** - Meta tag'ler, yapısal veri
- ✅ **Hızlı Yükleme** - Optimize edilmiş kod
- ✅ **Cross Browser** - Tüm modern tarayıcılar desteği
- ✅ **Google Fonts** - Poppins font ailesi

### 📱 Bölümler
1. **Hero Section** - Ana sayfa banner
2. **Features** - Neden bizi seçmelisiniz?
3. **About** - Hakkımızda
4. **Services** - Tıbbi hizmetlerimiz
5. **Emergency Banner** - 7/24 acil servis
6. **Doctors** - Doktor kadromuz
7. **Contact** - İletişim ve randevu formu
8. **Footer** - Alt bilgi ve bağlantılar

## 🚀 Kullanım

### Dosya Yapısı
```
📁 hastahane/
├── 📄 index.html      # Ana HTML dosyası
├── 📄 style.css       # Tüm stiller
├── 📄 script.js       # JavaScript fonksiyonları
├── 📄 README.md       # Bu dosya
├── 📄 robots.txt      # SEO robotları için
└── 📄 sitemap.xml     # Site haritası
```

### Kurulum
1. Tüm dosyaları web sunucunuza yükleyin
2. `index.html` dosyasını tarayıcıda açın
3. Hepsi bu kadar! 🎉

### Özelleştirme

#### Renkleri Değiştirme
`style.css` dosyasındaki CSS değişkenlerini düzenleyin:
```css
:root {
    --primary-color: #2563eb;    /* Ana renk */
    --secondary-color: #10b981;   /* İkincil renk */
    --accent-color: #06b6d4;      /* Vurgu rengi */
}
```

#### İletişim Bilgilerini Güncelleme
`index.html` dosyasında şu bölümleri düzenleyin:
- Telefon numarası: `tel:` linkleri
- E-posta: `mailto:` linkleri
- Adres: Footer ve iletişim bölümü
- Çalışma saatleri

#### Haritayı Değiştirme
`index.html` içindeki iframe src'sini kendi Google Maps embed kodunuzla değiştirin.

## 🎯 SEO Özellikleri

### Meta Tag'ler
- Title ve description
- Open Graph (Facebook, LinkedIn)
- Keywords
- Robots meta

### Yapısal Veri
- Schema.org hastane markup'ı
- Breadcrumb navigasyonu
- Contact information

### Erişilebilirlik
- ARIA label'lar
- Semantic HTML5 etiketleri
- Klavye navigasyonu
- Ekran okuyucu uyumlu

## 📱 Responsive Breakpoints

| Ekran | Genişlik | Kolon Sayısı |
|-------|----------|--------------|
| Desktop | 1200px+ | 4 kolon |
| Tablet | 992px - 1199px | 2 kolon |
| Mobile | 768px - 991px | 2 kolon |
| Small Mobile | < 767px | 1 kolon |

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Kullanım Alanı |
|-----------|----------------|
| HTML5 | Yapı ve semantik |
| CSS3 | Stil ve animasyonlar |
| JavaScript | Interaktif özellikler |
| AOS | Scroll animasyonları |
| Google Fonts | Tipografi |

## 🔧 JavaScript Özellikleri

- ✅ Mobil menü toggle
- ✅ Smooth scroll navigasyon
- ✅ Header scroll efekti
- ✅ Sayaç animasyonu
- ✅ Form doğrulama
- ✅ Back to top butonu
- ✅ Bildirim sistemi

## 📝 Form Validasyonu

Randevu formu şu doğrulamaları içerir:
- Ad soyad (min. 3 karakter)
- E-posta formatı
- Telefon numarası (10+ karakter)
- Bölüm seçimi (zorunlu)

## 🎨 Animasyon Listesi

| Animasyon | Açıklama | Tetikleyici |
|-----------|----------|-------------|
| Fade Up | Yukarı kayarak görünme | Scroll |
| Fade Down | Aşağı kayarak görünme | Scroll |
| Fade Right | Sağdan sola görünme | Scroll |
| Fade Left | Soldan sağa görünme | Scroll |
| Zoom In | Büyüyerek görünme | Scroll |
| Counter | Sayı sayma animasyonu | Scroll |
| Pulse | Nabız atışı efekti | Sürekli |
| Bounce | Zıplama efekti | Sürekli |

## 🔐 Güvenlik

- Form input sanitization
- XSS koruması
- CSRF token desteği (form submit)

## 📊 Performans Optimizasyonları

- Minimize edilmiş CSS ve JS
- Lazy loading görseller için hazır
- Debounce ve throttle fonksiyonları
- Intersection Observer kullanımı

## 🐛 Hata Ayıklama

Tarayıcı konsolunda şu komutları kullanabilirsiniz:
```javascript
// Form verilerini kontrol et
console.log('Form Verileri:', data);

// Scroll pozisyonunu gör
console.log('Scroll:', window.pageYOffset);
```

## 📞 Destek

Sorularınız için:
- 📧 E-posta: info@devahastanesi.com
- 📞 Telefon: 444 0 DEVA

## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır.

---

**Hazırlayan:** DEVA Hastanesi Web Ekibi  
**Son Güncelleme:** Mart 2024
