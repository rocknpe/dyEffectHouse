const {BaseNode} = require('./BaseNode');
const Amaz = effect.Amaz;

class CGGetItemFromArray extends BaseNode {
  constructor() {
    super();
  }

  clamp(value, min, max) {
    return Math.min(max, Math.max(value, min));
  }

  getOutput() {
    const idx = this.inputs[0]();
    const array = this.inputs[1]();
    if (array === null || array === undefined || idx === null || idx === undefined) {
      return;
    }

    const len = array.length;
    const itemIndex = this.clamp(Math.round(idx), 0, len - 1);

    return array[itemIndex];
  }
}

exports.CGGetItemFromArray = CGGetItemFromArray;
