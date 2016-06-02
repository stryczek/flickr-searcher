import Ember from 'ember';

/**
* photo-gallery-favourites - saving photo-gallery items in localStorage
*
* @component photo-gallery-favourites
*/
export default Ember.Component.extend({
  classNames: ['photo-gallery-favourites'],
  favourites: [],
  init() {
    let retrievedObject = JSON.parse(localStorage.getItem('favPhotos'));
    if (retrievedObject === null) {
      retrievedObject = [];
    }
    this.set('favourites', retrievedObject);
    this._super(...arguments);
  },
  removeItem(item) {
    let favs = this.get('favourites');
    for (var i = 0; i < favs.length; i++) {
      if (favs[i].id === item.id) {
        favs.removeAt(i);
        localStorage.setItem('favPhotos', JSON.stringify(favs));
        break;
      }
    }
  },
  actions: {
    setDragTarget(dragTarget) {
      this.set('dragTarget', dragTarget);
    }
  },
  reorderFavourites(item, target) {
    let favs = this.get('favourites');
    let itemIndex = -1;
    let targetIndex = -1;

    for (var i = 0; i < favs.length; i++) {
      if (favs[i].id === item.id) {
        itemIndex = i;
      } else if (favs[i].id === target.id) {
        targetIndex = i;
      }

      if (itemIndex > -1 && targetIndex > -1) {
        break;
      }
    }

    let tmp = favs[itemIndex];
    favs[itemIndex] = favs[targetIndex];
    favs[targetIndex] = tmp;
    favs.arrayContentDidChange(0);

    localStorage.setItem('favPhotos', JSON.stringify(favs));
  },
  dragOver(event) {
    event.preventDefault();
  },
  drop(event) {
    event.preventDefault();
    let item = JSON.parse(event.dataTransfer.getData("dragItem"));
    let favs = this.get('favourites');
    let alreadyHas = false;

    for (var i = 0; i < favs.length; i++) {
      if (favs[i].id === item.id) {
        alreadyHas = true;
        break;
      }
    }
    if (alreadyHas) {
      let target = this.get('dragTarget');
      this.reorderFavourites(item, target);
      //this.sendAction('reorderFavourites', item, target);
      return false;
    }

    favs.addObject(item);
    localStorage.setItem('favPhotos', JSON.stringify(favs));
  }
});
