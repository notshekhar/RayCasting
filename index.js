let canvas = document.querySelector('canvas')
let scr = canvas.getContext('2d')
let c2 = document.querySelector('.canv')
let s2 = c2.getContext('2d')
let particle = new Particle(canvas.width / 2, canvas.height / 2, 90)
let walls = []
let scene = []
for(let i=0; i<1; i++){
  let x1 = Math.random() * canvas.width
  let x2 = Math.random() * canvas.width
  let y1 = Math.random() * canvas.height
  let y2 = Math.random()*canvas.height
  walls.push(new Boundary(x1, y1, x2, y2))
}
walls.push(new Boundary(0, 0, 600, 0))
walls.push(new Boundary(0, 0, 0, 500))
walls.push(new Boundary(0, 500, 600, 500))
walls.push(new Boundary(600, 500, 600, 0))
let i = 0

function draw() {
  //clearing canvas
  scr.fillStyle = 'black'
  scr.fillRect(0, 0, canvas.width, canvas.height)
  //clearing canvas
  s2.fillStyle = 'black'
  s2.fillRect(0, 0, canvas.width, canvas.height)
  //showing particle
  particle.show()
  for (let wall of walls) {
    wall.show()
  }
  scene = particle.cast(walls)
  
  for(let i=0; i<scene.length; i++){
    let sq = scene[i]*scene[i]
    let wsq = canvas.width*canvas.height
    let b = map(sq, 0, wsq, 255, 0) 
    let h = map(scene[i], 0, canvas.width, canvas.height, 0)
    // console.log(scene)
    let w = c2.width/scene.length
    let c = `rgb(${b}, ${b}, ${b})`
    s2.fillStyle = c
    s2.fillRect(i * w, h, w+1, canvas.height)
  }
}
function map(value, a, b, c, d){
  // first map value from (a..b) to (0..1)
  value = (value - a) / (b - a)
  // then map it from (0..1) to (c..d) and return it
  return c + value * (d - c)
}

setInterval(() => draw(), 16)

canvas.onmousemove = e => {
  particle.move(e.x, e.y)
}
document.onkeydown = e => {
  //left
  if (e.keyCode == 37) {
    particle.turnLeft()
  } else if (e.keyCode == 39) {
    particle.turnRight()
  }
}
