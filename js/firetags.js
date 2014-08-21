function fireTags(dest) {
  dataLayer.push ({ 
    'event': 'virtual pageview',
    'virtual url': '/destination/' + dest + '.html',
    'ecommerce': {
      'actionField': {
        'list': 'Default destination list'
      },
      'detail': {
        'products': [{
          'id': dest, 
          'name': dest,
          'category': cat
        }]
      }
    }
  });
  console.log('fire tags');
}
