var handle = ally.when.key({
    enter: function(event) {
      // handle the enter event
      console.log("hello world")
    },
    escape: function(event, disengage) {
      // handle the escape event…
      disengage();
    },  
  });
  // stop listening for keys
//   handle.disengage();


if (navigator.share) {
    navigator.share({
      title: 'web.dev',
      text: 'Check out web.dev.',
      url: 'https://web.dev/',
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
  