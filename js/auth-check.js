/**
 * Authentication Check Module
 * Checks if user is logged in, shows auth required overlay if not
 */

const AuthCheck = {
    // Check if user is authenticated
    isAuthenticated() {
        const user = localStorage.getItem('brainik_current_user');
        return user !== null;
    },

    // Get current user
    getCurrentUser() {
        const user = localStorage.getItem('brainik_current_user');
        return user ? JSON.parse(user) : null;
    },

    // Show auth required overlay
    showAuthOverlay(pageName) {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.id = 'auth-overlay';
        overlay.innerHTML = `
            <div class="auth-overlay-backdrop"></div>
            <div class="auth-overlay-content">
                <div class="auth-icon">🔒</div>
                <h2 class="auth-title">Անհրաժեշտ է մուտք գործել</h2>
                <p class="auth-message">${pageName} բաժինը հասանելի է միայն գրանցված օգտատերերի համար</p>
                <div class="auth-buttons">
                    <a href="student-login.html" class="auth-btn auth-btn-primary">🔐 Մուտք գործել</a>
                    <a href="student-signup.html" class="auth-btn auth-btn-secondary">✨ Գրանցվել</a>
                </div>
                <div class="auth-roles">
                    <span class="auth-roles-title">Այլ դերեր՝</span>
                    <a href="teacher-login.html" class="auth-role-link">👨‍🏫 Ուսուցիչ</a>
                    <a href="parent-login.html" class="auth-role-link">👨‍👩‍👧 Ծնող</a>
                    <a href="admin-login.html" class="auth-role-link">🛡️ Ադմին</a>
                </div>
                <a href="index.html" class="auth-back-link">← Վերադառնալ գլխավոր էջ</a>
            </div>
        `;

        // Add styles
        const styles = document.createElement('style');
        styles.textContent = `
            #auth-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .auth-overlay-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(8px);
            }
            
            .auth-overlay-content {
                position: relative;
                background: white;
                border-radius: 24px;
                padding: 50px 40px;
                max-width: 480px;
                width: 90%;
                text-align: center;
                box-shadow: 0 30px 80px rgba(0,0,0,0.4);
                animation: authSlideIn 0.4s ease-out;
            }
            
            @keyframes authSlideIn {
                from {
                    opacity: 0;
                    transform: translateY(30px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            .auth-icon {
                width: 90px;
                height: 90px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 45px;
                margin: 0 auto 25px;
                box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
            }
            
            .auth-title {
                font-size: 28px;
                font-weight: 800;
                color: #1a1a2e;
                margin-bottom: 12px;
            }
            
            .auth-message {
                font-size: 16px;
                color: #666;
                margin-bottom: 30px;
                line-height: 1.6;
            }
            
            .auth-buttons {
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin-bottom: 25px;
            }
            
            .auth-btn {
                display: block;
                padding: 16px 24px;
                border-radius: 12px;
                font-size: 17px;
                font-weight: 700;
                text-decoration: none;
                transition: all 0.3s ease;
            }
            
            .auth-btn-primary {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
            }
            
            .auth-btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
            }
            
            .auth-btn-secondary {
                background: #f8f9fa;
                color: #667eea;
                border: 2px solid #e0e0e0;
            }
            
            .auth-btn-secondary:hover {
                background: rgba(102, 126, 234, 0.05);
                border-color: #667eea;
            }
            
            .auth-roles {
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                margin-bottom: 20px;
            }
            
            .auth-roles-title {
                display: block;
                font-size: 13px;
                color: #999;
                margin-bottom: 12px;
            }
            
            .auth-role-link {
                display: inline-block;
                margin: 0 8px;
                font-size: 14px;
                color: #667eea;
                text-decoration: none;
                font-weight: 600;
                transition: transform 0.2s;
            }
            
            .auth-role-link:hover {
                transform: translateY(-2px);
            }
            
            .auth-back-link {
                display: inline-block;
                font-size: 15px;
                color: #999;
                text-decoration: none;
                transition: color 0.3s;
            }
            
            .auth-back-link:hover {
                color: #667eea;
            }
            
            @media (max-width: 480px) {
                .auth-overlay-content {
                    padding: 35px 25px;
                }
                
                .auth-title {
                    font-size: 24px;
                }
                
                .auth-icon {
                    width: 70px;
                    height: 70px;
                    font-size: 35px;
                }
            }
        `;

        document.head.appendChild(styles);
        document.body.appendChild(overlay);

        // Hide page content
        const main = document.querySelector('main');
        if (main) {
            main.style.display = 'none';
        }
    },

    // Initialize auth check for protected pages
    init(pageName) {
        if (!this.isAuthenticated()) {
            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.showAuthOverlay(pageName);
                });
            } else {
                this.showAuthOverlay(pageName);
            }
        }
    }
};

// Make available globally
window.AuthCheck = AuthCheck;
