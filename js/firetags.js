function fireTags(dest) {
  dataLayer.push ({ 
    'event': 'virtual pageview',
    'virtual url': '/destination/' + dest + '.html',
    'ecommerce': { 
      'detail': { 
        'products': [{
          'id': dest, 
          'name': dest,
          'category': 'Destinations/Europe'
         }]
        }
      }
  });
  console.log('fire tags');
}
