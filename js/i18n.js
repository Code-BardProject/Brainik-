/**
 * Brainik Multi-Language System
 * Supports: Հայերեն (AM), Русский (RU), English (EN)
 */

const BrainikI18n = {
    // Current language
    currentLang: localStorage.getItem('brainik-lang') || 'am',
    
    // Available languages
    languages: {
        am: { name: 'Հայերեն', flag: '🇦🇲', code: 'am' },
        ru: { name: 'Русский', flag: '🇷🇺', code: 'ru' },
        en: { name: 'English', flag: '🇬🇧', code: 'en' }
    },
    
    // All translations
    translations: {
        // Navigation
        nav: {
            home: { am: 'Գլխավոր', ru: 'Главная', en: 'Home' },
            puzzles: { am: 'Հանելուկներ', ru: 'Головоломки', en: 'Puzzles' },
            stats: { am: 'Վիճակագրություն', ru: 'Статистика', en: 'My Stats' },
            ranking: { am: 'Վարկանիշ', ru: 'Рейтинг', en: 'Ranking' },
            heroes: { am: 'Հերոսներ', ru: 'Герои', en: 'Hero Cards' },
            settings: { am: 'Կարգավորումներ', ru: 'Настройки', en: 'Settings' },
            login: { am: 'Մուտք', ru: 'Вход', en: 'Sign In' },
            logout: { am: 'Դուրս գալ', ru: 'Выход', en: 'Logout' }
        },
        
        // Home page
        home: {
            hero_title: {
                am: 'Սովորիր հետաքրքիր և վաստակիր մրցանակներ',
                ru: 'Учись с увлечением и зарабатывай награды',
                en: 'Learn with fun and earn rewards'
            },
            hero_subtitle: {
                am: 'Brainik-ը ինտերակտիվ կրթական հարթակ է 2-15 տարեկան երեխաների համար։ Սովորիր խաղալով, հավաքիր աստղեր և բացահայտիր նոր հերոսներ։',
                ru: 'Brainik - интерактивная образовательная платформа для детей 2-15 лет. Учись играя, собирай звезды и открывай новых героев.',
                en: 'Brainik is an interactive educational platform for children aged 2-15. Learn through play, collect stars and discover new heroes.'
            },
            start_learning: { am: 'Սկսել ուսումը', ru: 'Начать обучение', en: 'Start Learning' },
            select_age: { am: 'Ընտրել տարիքային խումբ', ru: 'Выбрать возраст', en: 'Select Age Group' },
            age_groups_title: { am: 'Ընտրիր քո տարիքային խումբը', ru: 'Выбери свою возрастную группу', en: 'Choose Your Age Group' },
            features_title: { am: 'Ինչու ենք հատուկ', ru: 'Чем мы особенны', en: 'Why We Are Special' }
        },
        
        // Age groups
        age: {
            '2-3': {
                title: { am: '2-3 տարեկան', ru: '2-3 года', en: 'Ages 2-3' },
                desc: { am: 'Նախախաղային բովանդակություն, ձայնավոր հրահանգներ, պարզ դիտողական առաջադրանքներ', ru: 'Дошкольный контент, голосовые инструкции, простые задания', en: 'Pre-school content, voice instructions, simple visual tasks' }
            },
            '4-6': {
                title: { am: '4-6 տարեկան', ru: '4-6 лет', en: 'Ages 4-6' },
                desc: { am: 'Տրամաբանություն, հաշվարկ, հիշողություն, ուշադրություն', ru: 'Логика, счет, память, внимание', en: 'Logic, counting, memory, attention' }
            },
            '7-9': {
                title: { am: '7-9 տարեկան', ru: '7-9 лет', en: 'Ages 7-9' },
                desc: { am: 'Համակարգված մտածողություն, առաջադեմ մաթեմատիկա, գիտություն', ru: 'Системное мышление, продвинутая математика, наука', en: 'Systematic thinking, advanced math, science' }
            },
            '10+': {
                title: { am: '10+ տարեկան', ru: '10+ лет', en: 'Ages 10+' },
                desc: { am: 'Բարդ հանելուկներ, ծրագրավորման հիմունքներ, վիկտորինաներ', ru: 'Сложные головоломки, основы программирования, викторины', en: 'Complex puzzles, programming basics, quizzes' }
            }
        },
        
        // Auth
        auth: {
            login_title: { am: 'Մուտք գործիր', ru: 'Вход', en: 'Sign In' },
            signup_title: { am: 'Ստեղծիր հաշիվ', ru: 'Регистрация', en: 'Create Account' },
            email: { am: 'Էլ. փոստ', ru: 'Email', en: 'Email' },
            password: { am: 'Գաղտնաբառ', ru: 'Пароль', en: 'Password' },
            name: { am: 'Անուն', ru: 'Имя', en: 'Name' },
            forgot_password: { am: 'Մոռացել ե՞մ գաղտնաբառը', ru: 'Забыли пароль?', en: 'Forgot Password?' },
            no_account: { am: 'Դեռ գրանցված չե՞ս', ru: 'Еще нет аккаунта?', en: 'No account?' },
            has_account: { am: 'Արդեն գրանցվա՞ծ ես', ru: 'Уже есть аккаунт?', en: 'Already have account?' },
            register: { am: 'Գրանցվել', ru: 'Зарегистрироваться', en: 'Sign Up' },
            enter: { am: 'Մուտք գործել', ru: 'Войти', en: 'Sign In' },
            or: { am: 'կամ', ru: 'или', en: 'or' },
            with_google: { am: 'Google-ով', ru: 'через Google', en: 'with Google' },
            with_facebook: { am: 'Facebook-ով', ru: 'через Facebook', en: 'with Facebook' },
            
            // Roles
            role_student: { am: 'Ուսանող', ru: 'Ученик', en: 'Student' },
            role_parent: { am: 'Ծնող', ru: 'Родитель', en: 'Parent' },
            role_teacher: { am: 'Ուսուցիչ', ru: 'Учитель', en: 'Teacher' },
            role_admin: { am: 'Ադմին', ru: 'Админ', en: 'Admin' },
            
            role_student_desc: { am: 'Ես ուզում եմ սովորել', ru: 'Я хочу учиться', en: 'I want to learn' },
            role_parent_desc: { am: 'Հետևել երեխայի առաջադիմությանը', ru: 'Следить за успехами ребенка', en: 'Track child progress' },
            role_teacher_desc: { am: 'Ղեկավարել դասարանը', ru: 'Управлять классом', en: 'Manage classroom' },
            role_admin_desc: { am: 'Ադմինիստրացիա', ru: 'Администрирование', en: 'Administration' }
        },
        
        // Dashboard
        dashboard: {
            welcome: { am: 'Բարի վերադարձ', ru: 'С возвращением', en: 'Welcome back' },
            my_progress: { am: 'Իմ առաջադիմությունը', ru: 'Мой прогресс', en: 'My Progress' },
            achievements: { am: 'Նվաճումներ', ru: 'Достижения', en: 'Achievements' },
            certificates: { am: 'Վկայականներ', ru: 'Сертификаты', en: 'Certificates' },
            stars: { am: 'աստղ', ru: 'звезд', en: 'stars' },
            level: { am: 'Մակարդակ', ru: 'Уровень', en: 'Level' },
            lessons: { am: 'դաս', ru: 'уроков', en: 'lessons' }
        },
        
        // Games
        games: {
            colors_title: { am: 'Գույների խաղ', ru: 'Игра с цветами', en: 'Colors Game' },
            math_title: { am: 'Մաթեմատիկա', ru: 'Математика', en: 'Math Game' },
            memory_title: { am: 'Հիշողություն', ru: 'Память', en: 'Memory Game' },
            alphabet_title: { am: 'Այբուբեն', ru: 'Алфавит', en: 'Alphabet' },
            shapes_title: { am: 'Ֆորմաներ', ru: 'Фигуры', en: 'Shapes' },
            quiz_title: { am: 'Վիկտորինա', ru: 'Викторина', en: 'Quiz' },
            
            correct: { am: 'Ճիշտ է!', ru: 'Правильно!', en: 'Correct!' },
            wrong: { am: 'Փորձիր կրկին', ru: 'Попробуй снова', en: 'Try again' },
            next: { am: 'Հաջորդ', ru: 'Далее', en: 'Next' },
            finish: { am: 'Ավարտել', ru: 'Завершить', en: 'Finish' },
            stars_earned: { am: 'աստղ վաստակած', ru: 'звезд заработано', en: 'stars earned' }
        },
        
        // Common
        common: {
            save: { am: 'Պահպանել', ru: 'Сохранить', en: 'Save' },
            cancel: { am: 'Չեղարկել', ru: 'Отмена', en: 'Cancel' },
            delete: { am: 'Ջնջել', ru: 'Удалить', en: 'Delete' },
            edit: { am: 'Խմբագրել', ru: 'Редактировать', en: 'Edit' },
            close: { am: 'Փակել', ru: 'Закрыть', en: 'Close' },
            loading: { am: 'Բեռնվում է...', ru: 'Загрузка...', en: 'Loading...' },
            success: { am: 'Հաջողվեց!', ru: 'Успешно!', en: 'Success!' },
            error: { am: 'Սխալ', ru: 'Ошибка', en: 'Error' },
            confirm: { am: 'Հաստատել', ru: 'Подтвердить', en: 'Confirm' }
        }
    },
    
    // Initialize
    init() {
        this.applyLanguage();
        this.createLanguageSwitcher();
    },
    
    // Get translation
    t(key, section = 'common') {
        const keys = key.split('.');
        let value = this.translations;
        
        for (const k of keys) {
            value = value?.[k];
            if (!value) return key;
        }
        
        return value[this.currentLang] || value['en'] || key;
    },
    
    // Set language
    setLanguage(lang) {
        if (this.languages[lang]) {
            this.currentLang = lang;
            localStorage.setItem('brainik-lang', lang);
            this.applyLanguage();
            
            // Show animation
            this.showLanguageChangeAnimation();
        }
    },
    
    // Apply language to all elements
    applyLanguage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    },
    
    // Create language switcher
    createLanguageSwitcher() {
        const existing = document.querySelector('.lang-switcher');
        if (existing) return;
        
        const switcher = document.createElement('div');
        switcher.className = 'lang-switcher';
        switcher.innerHTML = `
            <button class="lang-current">
                <span class="lang-flag">${this.languages[this.currentLang].flag}</span>
                <span>${this.languages[this.currentLang].code.toUpperCase()}</span>
            </button>
            <div class="lang-dropdown">
                ${Object.values(this.languages).map(lang => `
                    <button class="lang-option ${lang.code === this.currentLang ? 'active' : ''}" data-lang="${lang.code}">
                        <span class="lang-flag">${lang.flag}</span>
                        <span>${lang.name}</span>
                    </button>
                `).join('')}
            </div>
        `;
        
        // Add styles
        const styles = document.createElement('style');
        styles.textContent = `
            .lang-switcher {
                position: relative;
                display: inline-block;
            }
            
            .lang-current {
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 8px 14px;
                background: rgba(255,255,255,0.1);
                border: 2px solid rgba(255,255,255,0.2);
                border-radius: 50px;
                color: inherit;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .lang-current:hover {
                background: rgba(255,255,255,0.2);
                border-color: rgba(255,255,255,0.4);
                transform: scale(1.05);
            }
            
            .lang-flag {
                font-size: 1.2em;
            }
            
            .lang-dropdown {
                position: absolute;
                top: 100%;
                right: 0;
                margin-top: 10px;
                background: white;
                border-radius: 16px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                padding: 10px;
                min-width: 160px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s ease;
                z-index: 1000;
            }
            
            .lang-switcher:hover .lang-dropdown {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .lang-option {
                display: flex;
                align-items: center;
                gap: 10px;
                width: 100%;
                padding: 10px 14px;
                border-radius: 10px;
                font-weight: 600;
                color: var(--text-primary);
                transition: all 0.2s ease;
            }
            
            .lang-option:hover {
                background: var(--bg-tertiary);
            }
            
            .lang-option.active {
                background: var(--primary-purple);
                color: white;
            }
        `;
        
        document.head.appendChild(styles);
        
        // Add event listeners
        switcher.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLanguage(btn.getAttribute('data-lang'));
            });
        });
        
        // Insert into header
        const headerActions = document.querySelector('.header-actions, .user-actions');
        if (headerActions) {
            headerActions.insertBefore(switcher, headerActions.firstChild);
        }
    },
    
    // Show language change animation
    showLanguageChangeAnimation() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: linear-gradient(135deg, #667eea, #764ba2);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: white;
            animation: fadeIn 0.3s ease-out;
        `;
        
        overlay.innerHTML = `
            <div style="font-size: 5rem; margin-bottom: 1rem; animation: bounce 1s ease-in-out infinite;">🌍</div>
            <h2 style="font-family: var(--font-display); font-size: 2.5rem; margin-bottom: 1rem;">
                ${this.languages[this.currentLang].name}
            </h2>
            <p style="font-size: 1.2rem; opacity: 0.9;">
                ${this.t('loading', 'common')}
            </p>
        `;
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => overlay.remove(), 300);
        }, 800);
    }
};

// Add fade animations
const animStyles = document.createElement('style');
animStyles.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
`;
document.head.appendChild(animStyles);

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
    BrainikI18n.init();
});

// Export
window.BrainikI18n = BrainikI18n;
