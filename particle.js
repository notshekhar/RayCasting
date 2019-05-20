class Particle {
  constructor(x, y, angle) {
    this.angle = angle
    this.pos = new Vector(x, y)
    this.rays = new Array()
    for (let i = 1; i < this.angle; i += 1) {
      this.rays.push(new Ray(this.pos.x, this.pos.y, i))
    }
  }
  show() {
    this.rays.forEach(ray => {
      ray.show()
    })
  }
  move(x, y) {
    this.pos.x = x
    this.pos.y = y
    for (let ray of this.rays) {
      ray.move(x, y)
    }
  }
  turnRight() {
    for (let ray of this.rays) {
      ray.setDirection(1)
    }
  }
  turnLeft() {
    for (let ray of this.rays) {
      ray.setDirection(-1)
    }
  }
  cast(walls) {
    let s = []
    for (let ray of this.rays) {
      let point
      let record = Infinity
      for (let wall of walls) {
        let pt = ray.cast(wall)
        if (pt) {
          let d = this.pos.distance(pt)
          if (d < record) {
            record = d
            point = pt
          }
          s.push(record)
          scr.beginPath()
          scr.fillStyle = 'white'
          scr.arc(point.x, point.y, 1.1, 0, 2 * Math.PI)
          scr.fill()
          //drawing line 
          scr.beginPath()
          scr.strokeStyle = "white"
          scr.lineJoin = 'round'
          scr.lineCap = 'round'
          scr.fillStyle = "white"
          scr.moveTo(ray.position.x, ray.position.y)
          scr.lineTo(point.x, point.y)
          scr.stroke()
        }
      }
    }
    return s
  }
}