export const GAME_CONFIG = {
  powerups: {
    shield: { color: '#00ff00', duration: 5000, icon: '🛡️' },
    double: { color: '#ff00ff', duration: 8000, icon: '2️⃣' },
    slow: { color: '#00ffff', duration: 10000, icon: '⏰' },
    ultra: { color: '#ffff00', duration: 3000, icon: '⚡' }
  },
  particles: {
    explosion: { count: 100, speed: 15, life: 120 },
    trail: { count: 8, speed: 3, life: 40 },
    achievement: { count: 30, speed: 8, life: 80 }
  },
  combo: {
    duration: 8000,
    multiplier: 2,
    levels: [5, 10, 15, 20, 25]
  },
  achievements: {
    popMaster: { name: "Pop Master", condition: score => score >= 1000 },
    comboKing: { name: "Combo King", condition: combo => combo >= 20 },
    speedster: { name: "Speedster", condition: time => time < 30 }
  }
};