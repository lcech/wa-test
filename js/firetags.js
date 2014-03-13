function fireTags(dest) {
    dataLayer.push({event: 'virtual pageview', 'virtual url': '/destination/' + dest + '.html'});
	console.log('fire tags');
}
