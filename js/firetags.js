function fireTags(dest) {
    dataLayer({event: 'virtual pageview', 'virtual url': '/destination/' + dest + '.html'});
	console.log('fire tags');
}
