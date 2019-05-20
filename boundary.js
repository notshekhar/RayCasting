class Boundary{
  constructor(x1, y1, x2, y2){
    this.start = new Vector(x1, y1)
    this.end = new Vector(x2, y2)
  }
  show() {  
    //drawing wall 
    scr.beginPath()
    scr.strokeStyle = "white"
    scr.lineJoin = 'round'
    scr.lineCap = 'round'
    scr.fillStyle = "white"
    scr.moveTo(this.start.x, this.start.y)
    scr.lineTo(this.end.x, this.end.y)
    scr.stroke()
  }
}