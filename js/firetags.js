function fireTags(dest) {
dataLayer.push ({ 
 'ecommerce': { 
  'detail': { 
   'products': [{
     'name': dest,
     'id': '001', 
     'category': 'Destinations/Europe'
    }]
     }
   }
});
    dataLayer.push({event: 'virtual pageview', 'virtual url': '/destination/' + dest + '.html'});
	console.log('fire tags');
}
