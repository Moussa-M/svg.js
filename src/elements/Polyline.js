import { extend, nodeOrNew, register } from '../utils/adopter.js'
import { registerMethods } from '../utils/methods.js'
import PointArray from '../types/PointArray.js'
import Shape from './Shape.js'
import * as pointed from '../modules/core/pointed.js'
import * as poly from '../modules/core/poly.js'

export default class Polyline extends Shape {
  // Initialize node
  constructor (node) {
    super(nodeOrNew('polyline', node), node)
  }
}

registerMethods({
  Container: {
    // Create a wrapped polygon element
    polyline (p) {
      // make sure plot is called as a setter
      return this.put(new Polyline()).plot(p || new PointArray())
    }
  }
})

extend(Polyline, pointed)
extend(Polyline, poly)
register(Polyline)
