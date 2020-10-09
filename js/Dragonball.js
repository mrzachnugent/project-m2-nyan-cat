class Dragonball {
  constructor(theRoot) {
    this.root = theRoot;

    this.x = gameEngine.player.x;
    this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
    this.destroyed = false;
    this.domElement = document.createElement("img");
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${gameEngine.player.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 6;
    this.domElement.style.width = DRAGONBALL_WIDTH;
    this.root.appendChild(this.domElement);
    this.speed = 0.6;
    // console.log({ y: this.y, domElement: this.domElement, root: this.root });
    this.bdSpriteAnim();
    setInterval(() => {
      this.y = this.y - 40;
      this.domElement.style.top = `${this.y}px`;
      if (this.y < 0) {
        this.domElement.remove();
        this.destroyed = true;
      }
    }, 100);
  }

  bdSpriteAnim = () => {
    let index = 0;
    setInterval(() => {
      this.domElement.setAttribute("src", `${DB_SPRITE_ARR[index]}`);
      index++;
      if (index >= DB_SPRITE_ARR.length) {
        index = 0;
      }
    }, 100);
  };
}
