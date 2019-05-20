class Ray {
  constructor(x, y, angle) {
    if (angle) {
      this.angle = angle * Math.PI / 180
      this.position = new Vector(x, y)
      this.direction = new Vector(Math.cos(this.angle), Math.sin(this.angle))
    } else {
      this.position = new Vector(x, y)
      this.direction = new Vector(-1, 0)
    }
    this.r = 1
  }
  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }
  show() {
    scr.beginPath()
    scr.fillStyle = 'white'
    scr.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI)
    scr.fill()
    //drawing line 
    // scr.beginPath()
    // scr.strokeStyle = "white"
    // scr.lineJoin = 'round'
    // scr.lineCap = 'round'
    // scr.fillStyle = "white"
    // scr.moveTo(this.position.x, this.position.y)
    // scr.lineTo(this.position.x+(this.direction.x*10), this.position.y+(this.direction.y*10))
    // scr.stroke()
  }
  move(x, y) {
    this.position.x = x
    this.position.y = y
  }
  setDirection(x, y) {
    if (!y) {
      let a = x * Math.PI / 180
      this.angle += a
      this.direction = new Vector(Math.cos(this.angle), Math.sin(this.angle))
    } else {
      this.direction.x = x - this.position.x
      this.direction.y = y - this.position.y
      this.direction.unit()
    }
  }
  cast(wall) {
    let x1 = wall.start.x
    let y1 = wall.start.y
    let x2 = wall.end.x
    let y2 = wall.end.y
    let x3 = this.position.x
    let y3 = this.position.y
    let x4 = this.direction.x + this.position.x
    let y4 = this.direction.y + this.position.y
    let den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)
    if (den == 0) {
      return false
    }
    let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den
    let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den
    if (t > 0 && t < 1 && u > 0) {
      let p = new Vector(x1 + t * (x2 - x1), y1 + t * (y2 - y1))
      let d, recorded = Infinity,
        point
      // // point = p
      // d = p.distance(this.position)
      // if(d<recorded){
      //   recorded = d
      //   point = p
      // }
      return p
    } else {
      return false
    }
  }
}