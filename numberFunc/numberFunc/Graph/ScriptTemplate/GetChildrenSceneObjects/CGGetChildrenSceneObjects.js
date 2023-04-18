'use strict';
const Amaz = effect.Amaz;
const {BaseNode} = require('./BaseNode');
class CGGetChildrenSceneObjects extends BaseNode {
  constructor() {
    super();
  }

  execute() {
    const entity = this.inputs[1]();
    const childrenLayerCount = this.inputs[2]();
    if (childrenLayerCount <= 0 || entity === null || entity === undefined) {
      return;
    }

    const transform = entity.getComponent('Transform');
    let i = childrenLayerCount;
    let levelSet = new Amaz.Vector();
    levelSet.pushBack(transform);
    let childrenList = [];
    while (i > 0) {
      const levelSetCount = levelSet.size();
      for (let k = 0; k < levelSetCount; ++k) {
        let currentChildren = levelSet.get(0).children;

        for (let j = 0; j < currentChildren.size(); ++j) {
          childrenList.push(currentChildren.get(j).entity);
          levelSet.pushBack(currentChildren.get(j));
        }

        levelSet.popFront();
      }
      i--;
    }

    this.outputs[1] = childrenList;

    if (this.nexts[0]) {
      this.nexts[0]();
    }
  }
}
exports.CGGetChildrenSceneObjects = CGGetChildrenSceneObjects;
