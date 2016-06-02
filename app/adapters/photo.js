import Flickr from './flickr';

export default Flickr.extend({
  buildURL(modelName, id, snapshot, requestType, query) {
    this.apiOthers.push("text=" + query.searchText);
    this.apiOthers.push("page=" + query.page);
    return this._super.apply(this, arguments);
  },
  apiMethod: "flickr.photos.search",
  apiOthers: [
    "license=4,5,6,7",
    "extras=url_t,url_o,license",
  ]
  /*
  <licenses>
  <license id="0" name="All Rights Reserved" url="" />
  <license id="1" name="Attribution-NonCommercial-ShareAlike License" url="http://creativecommons.org/licenses/by-nc-sa/2.0/" />
  <license id="2" name="Attribution-NonCommercial License" url="http://creativecommons.org/licenses/by-nc/2.0/" />
  <license id="3" name="Attribution-NonCommercial-NoDerivs License" url="http://creativecommons.org/licenses/by-nc-nd/2.0/" />
  <license id="4" name="Attribution License" url="http://creativecommons.org/licenses/by/2.0/" />
  <license id="5" name="Attribution-ShareAlike License" url="http://creativecommons.org/licenses/by-sa/2.0/" />
  <license id="6" name="Attribution-NoDerivs License" url="http://creativecommons.org/licenses/by-nd/2.0/" />
  <license id="7" name="No known copyright restrictions" url="http://flickr.com/commons/usage/" />
  <license id="8" name="United States Government Work" url="http://www.usa.gov/copyright.shtml" />
</licenses>
*/
});
