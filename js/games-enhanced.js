/**
 * Brainik Games Enhancement Module
 * Enhanced game features with better UX and responsiveness
 */

const BrainikGames = {
    // Sound effects (using Web Audio API)
    sounds: {
        enabled: true,
        
        playCorrect() {
            if (!this.enabled) return;
            this.playTone(523.25, 0.1); // C5
            setTimeout(() => this.playTone(659.25, 0.1), 100); // E5
            setTimeout(() => this.playTone(783.99, 0.2), 200); // G5
        },
        
        playWrong() {
            if (!this.enabled) return;
            this.playTone(200, 0.3);
        },
        
        playWin() {
            if (!this.enabled) return;
            // Victory fanfare
            const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50];
            notes.forEach((freq, i) => {
                setTimeout(() => this.playTone(freq, 0.15), i * 150);
            });
        },
        
        playTone(frequency, duration) {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = frequency;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration);
            } catch (e) {
                console.log('Audio not supported');
            }
        }
    },
    
    // Confetti effect
    createConfetti(options = {}) {
        const colors = options.colors || ['#667eea', '#764ba2', '#ffd93d', '#6bcb77', '#f093fb', '#f5576c'];
        const count = options.count || 50;
        const duration = options.duration || 3000;
        
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: ${Math.random() * 10 + 5}px;
                height: ${Math.random() * 10 + 5}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}vw;
                top: -20px;
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                transform: rotate(${Math.random() * 360}deg);
                animation: confetti-fall ${Math.random() * 2 + 2}s ease-out forwards;
                z-index: 10000;
                pointer-events: none;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), duration);
        }
    },
    
    // Haptic feedback (if supported)
    haptic(type = 'light') {
        if (navigator.vibrate) {
            const patterns = {
                light: [10],
                medium: [20],
                heavy: [30],
                success: [10, 50, 10],
                error: [50, 30, 50]
            };
            navigator.vibrate(patterns[type] || patterns.light);
        }
    },
    
    // Game timer with pause/resume
    createTimer(duration, onTick, onComplete) {
        let timeLeft = duration;
        let isPaused = false;
        let interval;
        
        const timer = {
            start() {
                interval = setInterval(() => {
                    if (!isPaused) {
                        timeLeft--;
                        if (onTick) onTick(timeLeft);
                        
                        if (timeLeft <= 0) {
                            this.stop();
                            if (onComplete) onComplete();
                        }
                    }
                }, 1000);
            },
            
            pause() {
                isPaused = true;
            },
            
            resume() {
                isPaused = false;
            },
            
            stop() {
                clearInterval(interval);
            },
            
            addTime(seconds) {
                timeLeft += seconds;
            },
            
            getTime() {
                return timeLeft;
            }
        };
        
        return timer;
    },
    
    // Score animation
    animateScore(element, targetScore, duration = 1000) {
        const startScore = parseInt(element.textContent) || 0;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            
            const currentScore = Math.floor(startScore + (targetScore - startScore) * easeOutQuart);
            element.textContent = currentScore;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    },
    
    // Progress bar animation
    animateProgress(element, targetPercent, duration = 500) {
        element.style.transition = `width ${duration}ms ease-out`;
        element.style.width = targetPercent + '%';
    },
    
    // Shake animation for wrong answers
    shake(element) {
        element.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    },
    
    // Pulse animation
    pulse(element) {
        element.style.animation = 'pulse 0.3s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 300);
    },
    
    // Save game progress
    saveProgress(gameId, progress) {
        const key = `brainik-game-${gameId}`;
        const data = {
            ...progress,
            timestamp: Date.now()
        };
        localStorage.setItem(key, JSON.stringify(data));
    },
    
    // Load game progress
    loadProgress(gameId) {
        const key = `brainik-game-${gameId}`;
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },
    
    // Level system
    calculateLevel(score) {
        // Level thresholds
        const levels = [
            { level: 1, min: 0, title: 'Սկսնակ' },
            { level: 2, min: 100, title: 'Ուսուցվող' },
            { level: 3, min: 300, title: 'Փորձառու' },
            { level: 4, min: 600, title: 'Փորձառու+' },
            { level: 5, min: 1000, title: 'Գիտակ' },
            { level: 6, min: 1500, title: 'Վարպետ' },
            { level: 7, min: 2200, title: 'Գուրու' },
            { level: 8, min: 3000, title: 'Գենիուս' },
            { level: 9, min: 4000, title: 'Մասնագետ' },
            { level: 10, min: 5500, title: 'Լեգենդ' }
        ];
        
        for (let i = levels.length - 1; i >= 0; i--) {
            if (score >= levels[i].min) {
                const nextLevel = levels[i + 1];
                const progress = nextLevel 
                    ? (score - levels[i].min) / (nextLevel.min - levels[i].min) * 100
                    : 100;
                
                return {
                    level: levels[i].level,
                    title: levels[i].title,
                    progress: Math.min(progress, 100),
                    nextLevelScore: nextLevel ? nextLevel.min : null
                };
            }
        }
        
        return { level: 1, title: 'Սկսնակ', progress: 0, nextLevelScore: 100 };
    },
    
    // Streak system
    updateStreak(gameId) {
        const key = `brainik-streak-${gameId}`;
        const today = new Date().toDateString();
        const data = JSON.parse(localStorage.getItem(key) || '{}');
        
        if (data.lastPlayed === today) {
            // Already played today
            return data.streak || 1;
        }
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (data.lastPlayed === yesterday.toDateString()) {
            // Consecutive day
            data.streak = (data.streak || 1) + 1;
        } else {
            // Streak broken
            data.streak = 1;
        }
        
        data.lastPlayed = today;
        localStorage.setItem(key, JSON.stringify(data));
        
        return data.streak;
    },
    
    // Achievement checker
    checkAchievements(gameId, stats) {
        const achievements = [];
        
        // Define achievements
        const achievementList = [
            { id: 'first_win', name: 'Առաջին հաղթանակ', condition: s => s.wins >= 1, stars: 10 },
            { id: 'streak_3', name: '3 օր շարք', condition: s => s.streak >= 3, stars: 20 },
            { id: 'streak_7', name: 'Շաբաթ շարք', condition: s => s.streak >= 7, stars: 50 },
            { id: 'score_100', name: '100 միավոր', condition: s => s.totalScore >= 100, stars: 15 },
            { id: 'score_500', name: '500 միավոր', condition: s => s.totalScore >= 500, stars: 30 },
            { id: 'perfect_game', name: 'Կատարյալ խաղ', condition: s => s.perfectGames >= 1, stars: 25 },
            { id: 'speed_demon', name: 'Արագության դև', condition: s => s.fastWins >= 5, stars: 35 }
        ];
        
        const unlockedKey = `brainik-achievements-${gameId}`;
        const unlocked = JSON.parse(localStorage.getItem(unlockedKey) || '[]');
        
        achievementList.forEach(achievement => {
            if (!unlocked.includes(achievement.id) && achievement.condition(stats)) {
                unlocked.push(achievement.id);
                achievements.push(achievement);
            }
        });
        
        localStorage.setItem(unlockedKey, JSON.stringify(unlocked));
        
        return achievements;
    },
    
    // Touch/mouse gesture handler for mobile
    initGestures(element, callbacks) {
        let startX, startY;
        
        const handleStart = (e) => {
            startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
        };
        
        const handleEnd = (e) => {
            if (!startX || !startY) return;
            
            const endX = e.type.includes('mouse') ? e.clientX : e.changedTouches[0].clientX;
            const endY = e.type.includes('mouse') ? e.clientY : e.changedTouches[0].clientY;
            
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            if (Math.abs(diffX) > Math.abs(diffY)) {
                // Horizontal swipe
                if (Math.abs(diffX) > 50) {
                    if (diffX > 0 && callbacks.onSwipeLeft) callbacks.onSwipeLeft();
                    else if (diffX < 0 && callbacks.onSwipeRight) callbacks.onSwipeRight();
                }
            } else {
                // Vertical swipe
                if (Math.abs(diffY) > 50) {
                    if (diffY > 0 && callbacks.onSwipeUp) callbacks.onSwipeUp();
                    else if (diffY < 0 && callbacks.onSwipeDown) callbacks.onSwipeDown();
                }
            }
            
            startX = null;
            startY = null;
        };
        
        element.addEventListener('touchstart', handleStart, { passive: true });
        element.addEventListener('touchend', handleEnd, { passive: true });
        element.addEventListener('mousedown', handleStart);
        element.addEventListener('mouseup', handleEnd);
    },
    
    // Fullscreen toggle
    toggleFullscreen(element) {
        if (!document.fullscreenElement) {
            element.requestFullscreen?.() || element.webkitRequestFullscreen?.();
        } else {
            document.exitFullscreen?.() || document.webkitExitFullscreen?.();
        }
    }
};

// Add CSS animations
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes confetti-fall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-10px); }
            40% { transform: translateX(10px); }
            60% { transform: translateX(-10px); }
            80% { transform: translateX(10px); }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        .game-card-touch {
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
        }
        
        .game-card-touch:active {
            transform: scale(0.95);
        }
    </style>
`);

// Export
window.BrainikGames = BrainikGames;
