function fireTags(dest) {
  dataLayer.push ({ 
    'event': 'virtual pageview',
    'virtual url': '/destination/' + dest + '.html',
    'ecommerce': {
      'actionField': {
        'list': 'Destinations'
      },
      'detail': {
        'products': [{
          'id': dest, 
          'name': dest
         }]
        }
      }
  });
  console.log('fire tags');
}
