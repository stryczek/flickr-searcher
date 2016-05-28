import Flickr from './flickr';

export default Flickr.extend({
  buildURL(modelName, id, snapshot, requestType, query) {
    this.apiOthers.push("text=" + query.searchText);
    this.apiOthers.push("page=" + query.page);
    this.apiOthers.push("licence=" + query.licence);
    return this._super.apply(this, arguments);
  },
  apiMethod: "flickr.photos.search",
  apiOthers: [
    "extras=url_t,url_o",
  ]
});
