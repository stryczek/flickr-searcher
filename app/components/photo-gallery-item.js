import Ember from 'ember';

/**
* photo-gallery-item - item representing photo from photo-gallery and photo-gallery-favourites
*
* @component photo-gallery-item
*/
export default Ember.Component.extend({
  isFavourite: false,
  classNames: ['photo-gallery-item'],
  classNameBindings: [
    'isRed:photo-gallery-item--border-red',
    'isBlue:photo-gallery-item--border-blue',
    'isYellow:photo-gallery-item--border-yellow'
  ],
  attributeBindings: ['draggable'],
  draggable: 'true',
  init() {
    let licenseId = this.get('isFavourite') ? this.get('photo').license : this.get('photo').get('license');
    switch (licenseId) {
      case "4":
        this.set('isRed', true);
        break;
      case "5":
        this.set('isBlue', true);
        break;
      case "6":
        this.set('isYellow', true);
        break;
    }
    this._super(...arguments);
  },
  drop() {
      if (this.get('isFavourite')) {
          let data = this.get("photo");
          this.sendAction('callSetDragTarget', data);
      }
  },
  dragStart(event) {
    let data = this.get("photo");
    if (this.get('isFavourite')) {
        event.dataTransfer.setData("dragItem", JSON.stringify(data));
    } else {
        event.dataTransfer.setData("dragItem", JSON.stringify(data.toJSON({
            includeId: true
        })));
    }
  }
});
