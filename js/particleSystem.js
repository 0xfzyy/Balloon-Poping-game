export class ParticleSystem {
  constructor() {
    this.particles = [];
  }

  createParticle(x, y, angle, velocity) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    this.particles.push({
      element: particle,
      x, y, vx, vy,
      life: 50
    });
    
    return particle;
  }

  update() {
    this.particles = this.particles.filter(particle => particle.life > 0);
    // Add particle update logic here
  }
}