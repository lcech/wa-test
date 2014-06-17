function fireTags(dest) {
  dataLayer.push ({ 
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
  dataLayer.push({event: 'virtual pageview', 'virtual url': '/destination/' + dest + '.html'});
  console.log('fire tags');
}
