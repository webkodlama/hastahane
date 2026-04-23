/**
 * DEVA HASTANESİ - INTERACTIVE JAVASCRIPT
 * Modern, animasyonlu ve kullanıcı dostu fonksiyonlar
 */

// ============================================
// DOM Content Loaded - Ana Başlangıç
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // AOS Animation Library Başlatma
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 0
    });

    // Tüm fonksiyonları başlat
    initMobileMenu();
    initHeaderScroll();
    initSmoothScroll();
    initBackToTop();
    initCounterAnimation();
    initContactForm();
    initNavActiveState();
    initTypingEffect();
});

// ============================================
// MOBİL MENÜ YÖNETİMİ
// ============================================
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!mobileToggle || !navMenu) return;

    // Menü aç/kapat
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Body scroll kontrolü
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Menü linkine tıklanınca menüyü kapat
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Dışarı tıklanınca menüyü kapat
    document.addEventListener('click', function(e) {
        if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// HEADER SCROLL EFEKTİ
// ============================================
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 50;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Scroll threshold kontrolü
        if (currentScroll > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll yönü kontrolü (opsiyonel - header'ı gizle/göster)
        if (currentScroll > lastScroll && currentScroll > 200) {
            // Aşağı scroll - header'ı gizle
            header.style.transform = 'translateY(-100%)';
        } else {
            // Yukarı scroll - header'ı göster
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // CSS transition için
    header.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
}

// ============================================
// SMOOTH SCROLL (Yumuşak Kaydırma)
// ============================================
function initSmoothScroll() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Sadece # ile başlayan ve geçerli hedefi olan linkler
            if (href === '#') return;

            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// NAV LİNK AKTİF DURUM YÖNETİMİ
// ============================================
function initNavActiveState() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    window.addEventListener('scroll', function() {
        const scrollPos = window.pageYOffset + 100;
        const headerHeight = document.getElementById('header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ============================================
// BACK TO TOP BUTONU
// ============================================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;

    const showThreshold = 400;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > showThreshold) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// SAYAÇ ANİMASYONU (Counter Animation)
// ============================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    if (counters.length === 0) return;

    const speed = 200; // Animasyon hızı

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const count = parseInt(counter.innerText);
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => animateCounter(counter), 20);
        } else {
            counter.innerText = formatNumber(target);
        }
    };

    // Intersection Observer ile sayaçları gözlemle
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counter.innerText = '0';
        observer.observe(counter);
    });
}

// Sayı formatlama (100000 -> 100.000)
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// ============================================
// İLETİŞİM FORMU DOĞRULAMA ve GÖNDERİMİ
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Form verilerini al
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Doğrulama
        if (!validateForm(data)) {
            return;
        }

        // Form gönderimi simülasyonu
        submitForm(data, form);
    });
}

// Form doğrulama fonksiyonu
function validateForm(data) {
    const errors = [];

    // Ad Soyad kontrolü
    if (!data.name || data.name.trim().length < 3) {
        errors.push('Lütfen geçerli bir ad soyad giriniz (en az 3 karakter).');
    }

    // E-posta kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Lütfen geçerli bir e-posta adresi giriniz.');
    }

    // Telefon kontrolü
    const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
    if (!data.phone || !phoneRegex.test(data.phone) || data.phone.length < 10) {
        errors.push('Lütfen geçerli bir telefon numarası giriniz.');
    }

    // Bölüm kontrolü
    if (!data.department) {
        errors.push('Lütfen bir bölüm seçiniz.');
    }

    // Hata varsa göster
    if (errors.length > 0) {
        showNotification(errors.join('\n'), 'error');
        return false;
    }

    return true;
}

// Form gönderim fonksiyonu
function submitForm(data, form) {
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;

    // Buton durumunu güncelle
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Gönderiliyor...</span>';

    // Simüle edilmiş API çağrısı
    setTimeout(() => {
        // Başarılı gönderim
        showNotification(
            'Randevu talebiniz alındı! En kısa sürede size dönüş yapacağız.',
            'success'
        );

        // Formu sıfırla
        form.reset();

        // Buton durumunu geri al
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        // Konsola veriyi yaz (geliştirme amaçlı)
        console.log('Form Verileri:', data);

    }, 1500);
}

// ============================================
// BİLDİRİM SİSTEMİ (Notification)
// ============================================
function showNotification(message, type = 'info') {
    // Mevcut bildirimleri kaldır
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());

    // Yeni bildirim oluştur
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // İkon seçimi
    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    
    notification.innerHTML = `
        <span class="notification-icon">${icon}</span>
        <span class="notification-message">${message.replace(/\n/g, '<br>')}</span>
        <button class="notification-close">×</button>
    `;

    // Stil ekle
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        max-width: 400px;
        padding: 16px 20px;
        border-radius: 12px;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        background: ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
    `;

    // CSS animasyon ekle
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                padding: 0;
                margin-left: auto;
                opacity: 0.8;
                transition: opacity 0.2s;
            }
            .notification-close:hover {
                opacity: 1;
            }
            .notification-icon {
                font-size: 20px;
                font-weight: bold;
            }
            .notification-message {
                flex: 1;
                font-size: 14px;
                line-height: 1.5;
            }
        `;
        document.head.appendChild(style);
    }

    // Sayfaya ekle
    document.body.appendChild(notification);

    // Kapatma butonu
    notification.querySelector('.notification-close').addEventListener('click', () => {
        closeNotification(notification);
    });

    // Otomatik kapatma
    setTimeout(() => {
        closeNotification(notification);
    }, 5000);
}

// Bildirimi kapat
function closeNotification(notification) {
    notification.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => {
        notification.remove();
    }, 300);
}

// ============================================
// EK İNTERAKTİF ÖZELLİKLER
// ============================================

// Sayfa yüklendiğinde yükleme animasyonu
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Telefon numarası formatlama (opsiyonel)
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.length <= 3) {
                value = value;
            } else if (value.length <= 6) {
                value = value.slice(0, 3) + ' ' + value.slice(3);
            } else if (value.length <= 8) {
                value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6);
            } else {
                value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 8) + ' ' + value.slice(8, 10);
            }
        }
        
        e.target.value = value;
    });
});

// Form input'larına focus efekti
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
    input.addEventListener('focus', function() {
        this.closest('.form-group')?.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.closest('.form-group')?.classList.remove('focused');
    });
});

// Service kartlarına hover ses efekti (opsiyonel - sadece görsel)
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Lazy loading için intersection observer
document.addEventListener('DOMContentLoaded', function() {
    const lazyElements = document.querySelectorAll('[data-lazy]');
    
    if (lazyElements.length === 0) return;

    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const src = element.getAttribute('data-lazy');
                
                if (src) {
                    element.src = src;
                    element.removeAttribute('data-lazy');
                }
                
                lazyObserver.unobserve(element);
            }
        });
    });

    lazyElements.forEach(element => {
        lazyObserver.observe(element);
    });
});

// ============================================
// TYPING EFFECT (Yazı Efekti)
// ============================================
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    const cursor = document.querySelector('.cursor');
    
    typingElement.textContent = '';
    
    let charIndex = 0;
    const typingSpeed = 100; // ms
    const pauseTime = 2000; // 2 saniye bekleme
    
    function type() {
        if (charIndex < text.length) {
            typingElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            // Yazı tamamlandı, imleci gizle
            if (cursor) {
                cursor.style.display = 'none';
            }
            
            // Belirli süre sonra tekrar başla
            setTimeout(() => {
                charIndex = 0;
                typingElement.textContent = '';
                if (cursor) {
                    cursor.style.display = 'inline';
                }
                type();
            }, pauseTime);
        }
    }
    
    // Animasyonu başlat (2 saniye gecikme)
    setTimeout(type, 2000);
}

// ============================================
// YARDIMCI FONKSİYONLAR
// ============================================

// Debounce fonksiyonu (performans için)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle fonksiyonu (scroll performansı için)
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Örnek kullanım: Scroll event'ini throttle ile optimize etme
// window.addEventListener('scroll', throttle(function() {
//     console.log('Scroll event');
// }, 100));
