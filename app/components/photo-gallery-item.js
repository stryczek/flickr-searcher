import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['photo-gallery-item'],
  attributeBindings: ['draggable'],
  draggable: 'true',
  dragStart(event) {
      console.log("dragStart");
      let data = this.get("photo");
      event.dataTransfer.setData("data", JSON.stringify(data.toJSON({ includeId: true })));
  },
  drag(event) {
      //console.log("drag");
      return false;
  },
  dragEnter() {
      //console.log("dragEnter");
      return false;
  },
  dragLeave() {
      //console.log("dragLeave");
      return false;
  },
  dragOver() {
      //console.log("dragOver");
      return false;
  },
  dragEnd() {
      //console.log("dragEnd");
      return false;
  },
  drop() {
      //console.log("dragEnd");
      return false;
  }
});
