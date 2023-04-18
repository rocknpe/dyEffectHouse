'use strict';
const Amaz = effect.Amaz;
const {BaseNode} = require('./BaseNode');
class CGSetScreenTransform extends BaseNode {
  execute(index) {
    const trans = this.inputs[1]();
    if (trans == null) {
      return;
    }

    const pos = this.inputs[2]();
    const size = this.inputs[3]();
    const pivot = this.inputs[4]();
    const rot = this.inputs[5]();
    const scale = this.inputs[6]();

    // Set Pivot Point first
    if (pivot != null) {
      trans.pivot = pivot;
    }
    if (size != null) {
      trans.sizeDelta = size;
    }
    if (pos != null) {
      trans.anchoredPosition = pos;
    }
    if (rot != null) {
      trans.localRotation2D = rot;
    }
    if (scale != null) {
      trans.localScale2D = scale;
    }
    if (this.nexts[0]) {
      this.nexts[0]();
    }
  }
}
exports.CGSetScreenTransform = CGSetScreenTransform;
