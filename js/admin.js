/**
 * Brainik Admin Dashboard JavaScript
 * Full admin functionality with role-based access
 */

const BrainikAdmin = {
    // Admin state
    isAuthenticated: false,
    currentAdmin: null,
    
    // Initialize admin panel
    init() {
        this.checkAuth();
        this.initCharts();
        this.initDataTables();
        this.initRealTimeUpdates();
    },
    
    // Check admin authentication
    checkAuth() {
        const token = localStorage.getItem('brainik-admin-token');
        const adminData = localStorage.getItem('brainik-admin-user');
        
        if (token && adminData) {
            this.isAuthenticated = true;
            this.currentAdmin = JSON.parse(adminData);
            this.updateUI();
        } else {
            // Not authenticated - redirect to login
            if (!window.location.href.includes('admin-login') && 
                !window.location.href.includes('login.html')) {
                window.location.href = 'admin-login.html';
            }
        }
    },
    
    // Update UI with admin data
    updateUI() {
        if (this.currentAdmin) {
            // Update sidebar user info
            const nameEl = document.querySelector('.sidebar-user-name');
            const roleEl = document.querySelector('.sidebar-user-role');
            const avatarEl = document.querySelector('.sidebar-avatar');
            
            if (nameEl) nameEl.textContent = this.currentAdmin.name || 'Ադմին';
            if (roleEl) roleEl.textContent = this.currentAdmin.role || 'Ադմինիստրատոր';
            if (avatarEl && this.currentAdmin.avatar) avatarEl.src = this.currentAdmin.avatar;
        }
    },
    
    // Admin login
    async login(email, password) {
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Demo credentials check
                if (email === 'admin@brainik.com' && password === 'admin123') {
                    const adminData = {
                        id: 1,
                        name: 'Գլխավոր Ադմին',
                        email: email,
                        role: 'Super Admin',
                        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'
                    };
                    
                    // Store session
                    localStorage.setItem('brainik-admin-token', 'demo-token-' + Date.now());
                    localStorage.setItem('brainik-admin-user', JSON.stringify(adminData));
                    
                    this.isAuthenticated = true;
                    this.currentAdmin = adminData;
                    
                    resolve({ success: true, user: adminData });
                } else {
                    reject({ success: false, error: 'Սխալ էլ․ հասցե կամ գաղտնաբառ' });
                }
            }, 1000);
        });
    },
    
    // Admin logout
    logout() {
        localStorage.removeItem('brainik-admin-token');
        localStorage.removeItem('brainik-admin-user');
        this.isAuthenticated = false;
        this.currentAdmin = null;
        window.location.href = 'login.html';
    },
    
    // Initialize charts
    initCharts() {
        // Chart data for admin dashboard
        this.chartData = {
            users: {
                labels: ['Հնվ', 'Փտր', 'Մրտ', 'Ապր', 'Մյս', 'Հնս'],
                data: [1200, 1900, 3000, 5000, 4800, 5678]
            },
            revenue: {
                labels: ['Հնվ', 'Փտր', 'Մրտ', 'Ապր', 'Մյս', 'Հնս'],
                data: [45000, 52000, 48000, 61000, 58000, 65000]
            },
            activities: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
                data: [150, 80, 450, 890, 750, 620]
            }
        };
    },
    
    // Initialize data tables
    initDataTables() {
        // Add sorting and filtering to tables
        document.querySelectorAll('.users-table, .data-table').forEach(table => {
            this.makeTableSortable(table);
        });
    },
    
    // Make table sortable
    makeTableSortable(table) {
        const headers = table.querySelectorAll('.table-header span, th');
        headers.forEach((header, index) => {
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => {
                this.sortTable(table, index);
            });
        });
    },
    
    // Sort table
    sortTable(table, columnIndex) {
        const rows = Array.from(table.querySelectorAll('.table-row, tbody tr'));
        const isAscending = !table.dataset.sortAsc;
        table.dataset.sortAsc = isAscending;
        
        rows.sort((a, b) => {
            const aVal = a.children[columnIndex].textContent.trim();
            const bVal = b.children[columnIndex].textContent.trim();
            
            // Check if numeric
            const aNum = parseFloat(aVal.replace(/[^0-9.-]/g, ''));
            const bNum = parseFloat(bVal.replace(/[^0-9.-]/g, ''));
            
            if (!isNaN(aNum) && !isNaN(bNum)) {
                return isAscending ? aNum - bNum : bNum - aNum;
            }
            
            return isAscending 
                ? aVal.localeCompare(bVal)
                : bVal.localeCompare(aVal);
        });
        
        const tbody = table.querySelector('tbody') || table;
        rows.forEach(row => tbody.appendChild(row));
    },
    
    // Initialize real-time updates
    initRealTimeUpdates() {
        // Simulate real-time data updates
        setInterval(() => {
            this.updateLiveStats();
        }, 5000);
    },
    
    // Update live statistics
    updateLiveStats() {
        const activeUsersEl = document.querySelector('.stat-card-value');
        if (activeUsersEl) {
            // Random fluctuation for demo
            const current = parseInt(activeUsersEl.textContent.replace(/,/g, ''));
            const change = Math.floor(Math.random() * 20) - 10;
            const newValue = current + change;
            activeUsersEl.textContent = newValue.toLocaleString();
        }
    },
    
    // User management
    users: {
        // Get all users
        getAll(filters = {}) {
            // Simulate API call
            return [
                { id: 1, name: 'Անի Մանուկյան', email: 'ani@example.com', role: 'student', status: 'active', created: '2026-01-21' },
                { id: 2, name: 'Դավիթ Հակոբյան', email: 'david@example.com', role: 'student', status: 'active', created: '2026-01-21' },
                { id: 3, name: 'Մարիամ Սարգսյան', email: 'mariam@example.com', role: 'parent', status: 'active', created: '2026-01-20' },
                { id: 4, name: 'Հովհաննես Պետրոսյան', email: 'hovhannes@example.com', role: 'teacher', status: 'active', created: '2026-01-21' }
            ];
        },
        
        // Delete user
        delete(userId) {
            if (confirm('Վստա՞հ եք, որ ուզում եք ջնջել այս օգտատիրոջը')) {
                // Simulate API call
                showToast('Օգտատերը ջնջված է', 'success');
                return true;
            }
            return false;
        },
        
        // Update user
        update(userId, data) {
            showToast('Օգտատերը թարմացված է', 'success');
            return true;
        }
    },
    
    // Content management
    content: {
        // Add new exercise
        addExercise(data) {
            showToast('Առաջադրանքը ավելացված է', 'success');
            return true;
        },
        
        // Delete exercise
        deleteExercise(id) {
            if (confirm('Վստա՞հ եք, որ ուզում եք ջնջել այս առաջադրանքը')) {
                showToast('Առաջադրանքը ջնջված է', 'success');
                return true;
            }
            return false;
        },
        
        // Add hero card
        addHeroCard(data) {
            showToast('Հերոսի քարտը ավելացված է', 'success');
            return true;
        }
    },
    
    // Notifications management
    notifications: {
        // Send notification to all users
        sendToAll(message) {
            showToast('Ծանուցումը ուղարկված է բոլոր օգտատերերին', 'success');
            return true;
        },
        
        // Send to specific group
        sendToGroup(group, message) {
            showToast(`Ծանուցումը ուղարկված է ${group} խմբին`, 'success');
            return true;
        }
    },
    
    // Reports
    reports: {
        // Generate user activity report
        generateActivityReport(startDate, endDate) {
            return {
                totalUsers: 5678,
                activeUsers: 3421,
                newUsers: 234,
                completedLessons: 12345,
                averageScore: 87
            };
        },
        
        // Generate revenue report
        generateRevenueReport(period) {
            return {
                total: 650000,
                subscriptions: 234,
                upgrades: 45,
                refunds: 3
            };
        }
    }
};

// Admin authentication guard
document.addEventListener('DOMContentLoaded', function() {
    // Initialize admin panel
    if (document.querySelector('.dashboard-page')) {
        BrainikAdmin.init();
    }
});

// Export for global access
window.BrainikAdmin = BrainikAdmin;
