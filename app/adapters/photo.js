import Flickr from './flickr';

export default Flickr.extend({
    apiMethod: "flickr.photos.search",
    apiOthers: [
        "text=pizza",
        "extras=url_t, url_o",
        "licence=7",
        "page=1"
    ]
});
