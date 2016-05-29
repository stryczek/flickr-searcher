import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['photo-gallery-favourites'],
  favourites: [],
  init(){
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
  dragOver() {
    return false;
  },
  drop(event) {
    event.preventDefault();
    let item =  JSON.parse(event.dataTransfer.getData("data"));
    let favs = this.get('favourites');
    let alreadyHas = false;

    for (var i = 0; i < favs.length; i++) {
        if (favs[i].id === item.id) {
            alreadyHas = true;
            break;
        }
    }
    if (alreadyHas) {
        return false;
    }

    favs.addObject(item);
    localStorage.setItem('favPhotos', JSON.stringify(favs));
  }
});
