export class GameManager {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.gameState = {
        player: { x: 0, y: 0, speed: 5 },
        bullets: [],
        enemies: [],
        score: 0,
        keys: { w: false, a: false, s: false, d: false }
      };
      this.initializeGame();
    }
  
    initializeGame() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      
      // Initialize player position
      this.gameState.player = {
        x: this.canvas.width / 2,
        y: this.canvas.height - 50,
        speed: 5
      };
      
      this.initializeEnemies();
    }
  
    initializeEnemies() {
      const enemies = [];
      const rows = 5;
      const cols = 8;
      const enemyWidth = 40;
      const enemyHeight = 40;
      const padding = 20;
      
      const totalWidth = cols * (enemyWidth + padding) - padding;
      const totalHeight = rows * (enemyHeight + padding) - padding;
      
      const startX = (this.canvas.width - totalWidth) / 2;
      const startY = (this.canvas.height - totalHeight) / 3;
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          enemies.push({
            x: startX + j * (enemyWidth + padding),
            y: startY + i * (enemyHeight + padding),
            width: enemyWidth,
            height: enemyHeight,
            isHit: false
          });
        }
      }
      this.gameState.enemies = enemies;
    }
  
    handleKeyDown(key) {
      switch (key.toLowerCase()) {
        case 'w': this.gameState.keys.w = true; break;
        case 'a': this.gameState.keys.a = true; break;
        case 's': this.gameState.keys.s = true; break;
        case 'd': this.gameState.keys.d = true; break;
        case 'enter': this.shoot(); break;
      }
    }
  
    handleKeyUp(key) {
      switch (key.toLowerCase()) {
        case 'w': this.gameState.keys.w = false; break;
        case 'a': this.gameState.keys.a = false; break;
        case 's': this.gameState.keys.s = false; break;
        case 'd': this.gameState.keys.d = false; break;
      }
    }
  
    shoot() {
      this.gameState.bullets.push({
        x: this.gameState.player.x,
        y: this.gameState.player.y,
        speed: 10
      });
    }
  
    updatePlayer() {
      const { keys, player } = this.gameState;
      if (keys.w && player.y > 0) player.y -= player.speed;
      if (keys.s && player.y < this.canvas.height - 50) player.y += player.speed;
      if (keys.a && player.x > 0) player.x -= player.speed;
      if (keys.d && player.x < this.canvas.width - 50) player.x += player.speed;
    }
  
    updateBullets() {
      this.gameState.bullets = this.gameState.bullets.filter(bullet => {
        bullet.y -= bullet.speed;
        let bulletShouldRemove = false;
        
        this.gameState.enemies.forEach(enemy => {
          if (!enemy.isHit && 
              bullet.x > enemy.x &&
              bullet.x < enemy.x + enemy.width &&
              bullet.y > enemy.y &&
              bullet.y < enemy.y + enemy.height) {
            enemy.isHit = true;
            this.gameState.score += 100;
            bulletShouldRemove = true;
          }
        });
  
        return bullet.y > 0 && !bulletShouldRemove;
      });
    }
  
    draw() {
      // Clear canvas
      this.ctx.fillStyle = '#000';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  
      // Draw bullets
      this.gameState.bullets.forEach(bullet => {
        this.ctx.fillStyle = '#ff0';
        this.ctx.beginPath();
        this.ctx.arc(bullet.x, bullet.y, 3, 0, Math.PI * 2);
        this.ctx.fill();
      });
  
      // Draw enemies
      this.gameState.enemies.forEach(enemy => {
        if (!enemy.isHit) {
          this.ctx.fillStyle = '#f00';
          this.ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
          
          this.ctx.strokeStyle = '#fff';
          this.ctx.lineWidth = 2;
          this.ctx.strokeRect(enemy.x, enemy.y, enemy.width, enemy.height);
        }
      });
  
      // Draw player
      this.ctx.fillStyle = '#fff';
      this.ctx.fillRect(
        this.gameState.player.x - 25,
        this.gameState.player.y - 25,
        50,
        50
      );
  
      // Draw score
      this.ctx.fillStyle = '#fff';
      this.ctx.font = '24px Arial';
      this.ctx.fillText(`Score: ${this.gameState.score}`, 10, 30);
    }
  
    update() {
      this.updatePlayer();
      this.updateBullets();
      this.draw();
    }
  
    getScore() {
      return this.gameState.score;
    }
  }