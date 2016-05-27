import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  apiKey: "e4f8726c495abcb8ba63eafb23e01fab",
  apiFormat: "format=json&nojsoncallback=1",
  host: 'https://api.flickr.com',
  namespace: 'services/rest',
  pathForType() {
    return "?method=" + this.apiMethod + "&api_key=" + this.apiKey + "&" + this.apiFormat + "&" + this.apiOthers.join("&");
  }
});
