# Brainik - Կրթական Հարթակ | Educational Platform

**Վերջնական տարբերակ 2.0 - Enhanced Edition**

Brainik-ը լիովին ֆունկցիոնալ, ժամանակակից կրթական հարթակ է 2-15 տարեկան երեխաների համար։ Ստեղծված է HTML/CSS/JavaScript-ով՝ 3 լեզվային աջակցությամբ (Հայերեն, Русский, English)։

## 🌟 Նոր առանձնահատկություններ 2.0

### ✅ Մուտքի և գրանցման համակարգ
- **Անիմացիոն լոգո** - 3D պտույտի էֆեկտով hover-ի ժամանակ
- **Ռոլային համակարգ** - 4 դեր (Ուսանող, Ծնող, Ուսուցիչ, Ադմին)
- **Ռոլային մարշրութիզացիա** - Յուրաքանչյուրը մտնում է իր վահանակ
- **Social Login** - Google և Facebook
- **Loading էկրան** - գեղեցիկ անիմացիայով

### ✅ Մուլտիլեզու համակարգ
- **3 լեզու** - Հայերեն, Русский, English
- **Ավտոմատ թարգմանություն** - բոլոր տեքստերի համար
- **Language switcher** - flag-ներով dropdown
- **Անիմացված լեզուի փոփոխություն** - 3 վայրկյան

### ✅ Ադմինիստրատիվ համակարգ
- **Ադմին login** - անվտանգ մուտք
- **Օգտատերերի կառավարում** - CRUD գործողություններ
- **Վիճակագրություն** - կենդանի տվյալներ
- **Logout** - ապահով ելք

### ✅ Ինտերակտիվ խաղեր (6 խաղ)
1. **Գույներ** - ճանաչիր գույները
2. **Մաթեմատիկա** - թվաբանական գործողություններ
3. **Հիշողություն** - emojis զույգեր
4. **Այբուբեն** - 39 հայկական տառ
5. **Ֆորմաներ** - երկրաչափություն
6. **Վիկտորինա** - ընդհանուր գիտելիքներ

### ✅ Գեյմիֆիկացիա
- **Աստղերի համակարգ** - վաստակիր յուրաքանչյուր հաղթանակի համար
- **Մակարդակներ** - 10 մակարդակ (Սկսնակից մինչև Լեգենդ)
- **Հերոսների քարտեր** - պատմական կերպարներ
- **Վկայականներ** - տպելու և կիսվելու հնարավորությամբ
- **Վարկանիշ** - գլոբալ, ընկերներ, քաղաք

## 📁 Կառուցվածք (24 HTML + 15 CSS + 4 JS)

```
coding/
├── 📄 HTML (24 էջ)
│   ├── index.html                 # Գլխավոր էջ
│   ├── puzzles.html               # Հանելուկներ
│   ├── stats.html                 # Վիճակագրություն
│   ├── ranking.html               # Վարկանիշ
│   ├── hero-cards.html            # Հերոսներ
│   ├── login.html                 # Մուտք ✨ENHANCED
│   ├── signup.html                # Գրանցում ✨ENHANCED
│   ├── forgot-password.html       # Գաղտնաբառի վերականգնում
│   ├── admin-login.html           # Ադմին մուտք ✨NEW
│   ├── admin-dashboard.html       # Ադմին վահանակ ✨ENHANCED
│   ├── teacher-dashboard.html     # Ուսուցչի վահանակ
│   ├── parent-dashboard.html      # Ծնողական վահանակ
│   ├── settings.html              # Կարգավորումներ
│   ├── notifications.html         # Ծանուցումներ
│   ├── certificates.html          # Վկայականներ
│   ├── pricing.html               # Գնագրում
│   ├── loading.html               # Loading էկրան
│   ├── 404.html                   # Սխալի էջ
│   ├── game-colors.html           # Գույների խաղ ✨ENHANCED
│   ├── game-math.html             # Մաթեմատիկա ✨ENHANCED
│   ├── game-memory.html           # Հիշողություն ✨ENHANCED
│   ├── game-alphabet.html         # Այբուբեն ✨ENHANCED
│   ├── game-shapes.html           # Ֆորմաներ ✨ENHANCED
│   └── quiz.html                  # Վիկտորինա ✨ENHANCED
│
├── 🎨 CSS (15 ֆայլ)
│   ├── design-system.css          # Դիզայն համակարգ
│   ├── header.css                 # Վերնագիր
│   ├── footer.css                 # Վերջագիր
│   ├── home.css                   # Գլխավոր էջ
│   ├── puzzles.css                # Հանելուկներ
│   ├── stats-ranking.css          # Վիճակագրություն
│   ├── auth.css                   # Ավտորիզացիա
│   ├── dashboard.css              # Վահանակներ
│   ├── hero-cards.css             # Հերոսներ
│   ├── settings.css               # Կարգավորումներ
│   ├── pricing.css                # Գնագրում
│   ├── game.css                   # Խաղեր
│   └── admin.css                  # Ադմին ✨NEW
│
├── ⚙️ JavaScript (4 ֆայլ)
│   ├── main.js                    # Հիմնական ֆունկցիոնալ
│   ├── i18n.js                    # Մուլտիլեզու համակարգ ✨NEW
│   ├── admin.js                   # Ադմին ֆունկցիոնալ ✨NEW
│   └── games-enhanced.js          # Խաղերի լայնացում ✨NEW
│
└── 📋 Կազմաձև
    ├── netlify.toml               # Deploy կոնֆիգ
    ├── .gitignore                 # Git ignore
    └── README.md                  # Այս ֆայլը
```

```
c:/Users/Admin/Desktop/coding/
├── index.html                 # Գլխավոր էջ
├── puzzles.html               # Հանելուկների էջ
├── stats.html                 # Վիճակագրության էջ
├── ranking.html               # Վարկանիշի էջ
├── hero-cards.html            # Հերոսների հավաքածու
├── login.html                 # Մուտքի էջ
├── signup.html                # Գրանցման էջ
├── forgot-password.html       # Գաղտնաբառի վերականգնում
├── settings.html              # Կարգավորումներ
├── pricing.html               # Գնագրում
├── teacher-dashboard.html     # Ուսուցչի վահանակ
├── parent-dashboard.html      # Ծնողական վահանակ
├── admin-dashboard.html       # Ադմին վահանակ
├── certificates.html          # Վկայականներ
├── notifications.html         # Ծանուցումներ
├── loading.html               # Բեռնավորման էջ
├── 404.html                   # Սխալի էջ
│
├── game-colors.html           # Գույների խաղ
├── game-math.html             # Մաթեմատիկայի խաղ
├── game-memory.html           # Հիշողության խաղ
├── game-alphabet.html         # Այբուբենի խաղ
├── game-shapes.html           # Ֆորմաների խաղ
├── quiz.html                  # Վիկտորինա
│
├── css/
│   ├── design-system.css      # Դիզայն համակարգ
│   ├── header.css             # Վերնագիր
│   ├── footer.css             # Վերջագիր
│   ├── home.css               # Գլխավոր էջ
│   ├── puzzles.css            # Հանելուկներ
│   ├── stats-ranking.css      # Վիճակագրություն
│   ├── auth.css               # Ավտորիզացիա
│   ├── dashboard.css          # Վահանակներ
│   ├── hero-cards.css         # Հերոսների քարտեր
│   ├── settings.css           # Կարգավորումներ
│   ├── pricing.css            # Գնագրում
│   ├── game.css               # Խաղեր
│   └── admin.css              # Ադմին
│
├── js/
│   └── main.js                # Հիմնական JavaScript
│
├──
└── 
```

## 🎮 Խաղեր

1. **Գույների խաղ** (`game-colors.html`) - Գտիր նշված գույները
2. **Մաթեմատիկա** (`game-math.html`) - Լուծիր մաթեմատիկական խնդիրները
3. **Հիշողություն** (`game-memory.html`) - Գտիր զույգ էմոջիները
4. **Այբուբեն** (`game-alphabet.html`) - Սովորիր հայկական այբուբենը
5. **Ֆորմաներ** (`game-shapes.html`) - Ճանաչիր երկրաչափական ֆորմաները
6. **Վիկտորինա** (`quiz.html`) - Ստուգիր գիտելիքներդ

## 🎨 Դիզայն համակարգ

### Գույներ
- **Primary**: `#667eea` - `#764ba2` (gradient)
- **Secondary**: `#ffd93d`, `#6bcb77`, `#4d96ff`, `#ff6b6b`
- **Age Groups**: 
  - 2-3: `#ffb7c5` (Soft Pink)
  - 4-6: `#ffd93d` (Sunny Yellow)
  - 7-9: `#4d96ff` (Bright Blue)
  - 10+: `#9b59b6` (Purple)

### Տառատեսակներ
- **Display**: Fredoka One
- **Body**: Nunito, Quicksand

## 🚀 Տեղադրում

### Netlify-ով
1. Միացիր GitHub-ին կամ աշխատաթղթը բեռնիր ուղղակիորեն
2. Կայքը ավտոմատ կբեռնվի

### Տեղական սերվեր
```bash
# Python
python -m http.server 8080

# Node.js
npx serve .

# PHP
php -S localhost:8080
```

## 📱 Պատասխանատվություն

Հարթակը լիովին պատասխանատու է՝
- Desktop (1024px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🔧 Տեխնոլոգիաներ

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts

## 📄 Լիցենզիա

© 2026 Brainik. Բոլոր իրավունքները պաշտպանված են։

---

**Made with ❤️ for children's education**
