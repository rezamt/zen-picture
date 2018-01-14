
var Flickr = require('flickr-sdk');

var flickr = new Flickr(process.env.FLICKR_API_KEY);

// call the flickr.photos.search API method and search the photos!

flickr.photos.search({
	text: 'Mormon Row at Night - Tetons - Explored',
	//extras: 'description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o'
	extras: 'license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o'
}).then(function (res) {
	console.log('yay!', res.body.photos.photo);
}).catch(function (err) {
	console.error('bonk', err);
});
