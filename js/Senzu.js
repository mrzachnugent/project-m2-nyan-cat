class Senzu {
  constructor(theRoot, senzuSpot) {
    this.root = theRoot;
    this.spot = senzuSpot;
    this.x = senzuSpot * SENZU_WIDTH;
    this.y = -SENZU_HEIGHT;
    this.destroyed = false;
    this.domElement = document.createElement("img");
    this.domElement.src = "./images/db/senzu.svg";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 5;
    this.domElement.style.width = ENEMY_WIDTH;
    theRoot.appendChild(this.domElement);
    setInterval(() => {
      this.y = this.y + 20;
      this.domElement.style.top = `${this.y}px`;
      if (this.y > GAME_HEIGHT) {
        this.domElement.remove();
        this.destroyed = true;
      }
    }, 100);
  }
}
