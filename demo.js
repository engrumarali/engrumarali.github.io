function registerSW() {
  console.log('Registering ServiceWorker.');
  navigator.serviceWorker
  .register('service-worker.js')
  .then(function(registration) {
    // registration worked
    console.log('Registration succeeded.');
    registration.onupdatefound = () => {
      console.log('Registration update found.');
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log(
              'New content is available and will be used when all ' +
                'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
            );

            // // Execute callback
            // if (config && config.onUpdate) {
            //   config.onUpdate(registration);
            // }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // // Execute callback
            // if (config && config.onSuccess) {
            //   config.onSuccess(registration);
            // }
          }
        }
      };
    };
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

window.navigator.serviceWorker.onmessage = function (event) {
  if (event.data.command === 'SET_OFFLINE_READY')
    precorWorkout.setDefaultURL();
};
