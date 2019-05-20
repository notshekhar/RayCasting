class Vector {
  constructor(x, y, z) {
    this.x = x || 0
    this.y = y || 0
    this.z = z || 0
  }
  add(a) {
    if (a instanceof Vector) {
      this.x += a.x
      this.y += a.y
      this.z += a.z
    } else {
      this.x += a
      this.y += a
      this.z += a
    }
  }
  subtract(a) {
    if (a instanceof Vector) {
      this.x -= a.x
      this.y -= a.y
      this.z -= a.z
    } else {
      this.x -= a
      this.y -= a
      this.z -= a
    }
  }
  multiply(a) {
    if (a instanceof Vector) {
      this.x * a.x
      this.y * a.y
      this.z * a.z
    } else {
      this.x *= a
      this.y *= a
      this.z *= a
    }
  }
  init(x, y, z) {
    this.x = x || 0
    this.y = y || 0
    this.z = z || 0
  }
  dot(a) {
    return this.x * a.x + this.y * a.y + this.z * a.z
  }
  cross(a) {
    return new Vector(
      this.y * a.z - this.z * a.y,
      this.z * a.x - this.x * a.z,
      this.x * a.y - this.y * a.x
      )
    }
    magnitude() {
      return Math.sqrt(this.dot(this))
    }
    unit() {
      return new Vector(
        this.x / this.magnitude(),
        this.y / this.magnitude(),
        this.z / this.magnitude()
        )
      }
      copy() {
        return new Vector(this.x, this.y, this.z)
      }
      distance(a) {
        let ds = Math.pow(this.x - a.x, 2) + Math.pow(this.y - a.y, 2) + Math.pow(this.z - a.z, 2)
        return Math.sqrt(ds)
      }
      angle(a) {
        if (a) {
          return Math.acos(this.dot(a) / this.magnitude() * a.magnitude())
        } else {
          return {
            theta: Math.atan2(this.z, this.x),
            pi: Math.asin(this.y / this.mgnitude())
          }
        }
      }
      radian(a){
        let angle =  Math.acos(this.dot(a) / this.magnitude() * a.magnitude())
        return angle*Math.PI/180
      }
    }