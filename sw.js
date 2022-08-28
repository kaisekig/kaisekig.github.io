importScripts('workbox-v6.1.5/workbox-sw.js');

workbox.setConfig({
  modulePathPrefix: 'workbox-v6.1.5/',
  mode: 'production',
});

importScripts('workbox-v6.1.5/workbox-strategies.prod.js');
importScripts('workbox-v6.1.5/workbox-broadcast-update.prod.js');

const precacheManifest = [{"revision":"01f3ea56899088cad23cc4fd868fccad","url":"asset-manifest.json"},{"revision":"c92b85a5b907c70211f4ec25e29a8c4a","url":"favicon.ico"},{"revision":"4007a6347c79a0603607a5acbc4104a5","url":"images/icons/icon-128x128.png"},{"revision":"7a3d0dd2a718a0217ca2c2974324b0d5","url":"images/icons/icon-144x144.png"},{"revision":"2e9717f6378327c7ecf7ee82138aee31","url":"images/icons/icon-152x152.png"},{"revision":"94eccd8ce369d362ea8f620a0572d216","url":"images/icons/icon-192x192.png"},{"revision":"05d828e1f495c261055271a45a0cc3e6","url":"images/icons/icon-384x384.png"},{"revision":"d773c62156bb1340c74ad2f006d9ddcb","url":"images/icons/icon-512x512.png"},{"revision":"203cf678ad096fbce5d7a0fc2e4351ec","url":"images/icons/icon-72x72.png"},{"revision":"1ea0858904a34752a01f8853571c266e","url":"images/icons/icon-96x96.png"},{"revision":"15ff5f6c3a518e1335472e1611448c73","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"0127cca6dbbb722a52f4a465482b33e1","url":"manifest.json"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"a94aa2d3762a401532d8d516c47c905e","url":"static/css/0.4c34b247.chunk.css"},{"revision":"73bbd1162e36117aa675610095186c98","url":"static/css/1.fcea4d9c.chunk.css"},{"revision":"b13c8e7f67d3e763d0a01ff86bd47495","url":"static/css/5.0e702043.chunk.css"},{"revision":"20dca2d6b53116159907aa9ef7f0bf5d","url":"static/css/6.4f3c1ccd.chunk.css"},{"revision":"92f7a01d613f254f0141ff02887a055a","url":"static/css/7.3b50d968.chunk.css"},{"revision":"bf5763b4cfa5d853b7d16808d7c1783a","url":"static/css/8.cb6edea5.chunk.css"},{"revision":"dc28843dfa59a7555759a3d7f3b70542","url":"static/css/9.eafd2a01.chunk.css"},{"revision":"00ada1514a0765fbf224c8469d69202f","url":"static/css/main.f295df28.chunk.css"},{"revision":"4d41ba12f7642b71c9a16c756b60d220","url":"static/js/0.cb29defe.chunk.js"},{"revision":"243ca0e2084109a855d0cc6ec60d9799","url":"static/js/0.cb29defe.chunk.js.LICENSE.txt"},{"revision":"cc542c82a5f8ee863117d36025f6ee79","url":"static/js/1.b68def44.chunk.js"},{"revision":"852ba042177bbbd26838a7876a61c936","url":"static/js/4.a804e499.chunk.js"},{"revision":"1d56bbb5889c91322a3a626fd99122a4","url":"static/js/4.a804e499.chunk.js.LICENSE.txt"},{"revision":"ea99e8c4aabba5e37d3c782360be4dd4","url":"static/js/5.d492eae0.chunk.js"},{"revision":"5e0d2582ee553a63b34f74b9964f6803","url":"static/js/6.c62eaa27.chunk.js"},{"revision":"f3db142546d3833bde65a875c62aa573","url":"static/js/7.cd33e47d.chunk.js"},{"revision":"5ee1f99c10c257e6eec41aa83e9fe4cf","url":"static/js/8.5c648086.chunk.js"},{"revision":"16b2c3e196319242ba936d18c44243e9","url":"static/js/9.62107554.chunk.js"},{"revision":"e06832fe1d628649ad0330588f1e0d4a","url":"static/js/main.0bc6f74d.chunk.js"},{"revision":"66171648c1f448cd4ad8f2c818b80e92","url":"static/js/runtime-main.2ec75ac6.js"},{"revision":"c667009e788d90f4e6e0c77e0df1683d","url":"workbox-v6.1.5/workbox-background-sync.dev.js"},{"revision":"6ef7e65ae2c7a38747bb50618e45e3f1","url":"workbox-v6.1.5/workbox-background-sync.prod.js"},{"revision":"9e2a4fef66f36af485d1f0fb65b89f1d","url":"workbox-v6.1.5/workbox-broadcast-update.dev.js"},{"revision":"6957cb84c327accccab113f310ab232d","url":"workbox-v6.1.5/workbox-broadcast-update.prod.js"},{"revision":"22ac8c37167bc4812766279be89b4ead","url":"workbox-v6.1.5/workbox-cacheable-response.dev.js"},{"revision":"aca07ae785fc52ddc2b381e09a956157","url":"workbox-v6.1.5/workbox-cacheable-response.prod.js"},{"revision":"0bbac8cb58e0e9077ebd666597a30662","url":"workbox-v6.1.5/workbox-core.dev.js"},{"revision":"44594f411a3c39563fbd664b3acb02fa","url":"workbox-v6.1.5/workbox-core.prod.js"},{"revision":"e81b20d1d0e093dff925c751da6294fc","url":"workbox-v6.1.5/workbox-expiration.dev.js"},{"revision":"80f9599ae3a1c077ca29c2b468a089df","url":"workbox-v6.1.5/workbox-expiration.prod.js"},{"revision":"6bb2706fee17ac0702625f2033ea9457","url":"workbox-v6.1.5/workbox-navigation-preload.dev.js"},{"revision":"60b8d0bdc7ef1da50066822a87342434","url":"workbox-v6.1.5/workbox-navigation-preload.prod.js"},{"revision":"f8e0362ed60ceca697e714a65379dcf8","url":"workbox-v6.1.5/workbox-offline-ga.dev.js"},{"revision":"a5b743653bf4b1ff3dee5feaf7c2c869","url":"workbox-v6.1.5/workbox-offline-ga.prod.js"},{"revision":"9062ce8b7eab1491a4ed7736d340cca5","url":"workbox-v6.1.5/workbox-precaching.dev.js"},{"revision":"24dad1ccf623442ff086b1948c593ee6","url":"workbox-v6.1.5/workbox-precaching.prod.js"},{"revision":"afa1ad10b830843c1834bd30e04aa7d7","url":"workbox-v6.1.5/workbox-range-requests.dev.js"},{"revision":"ef2857654871e5367da5ed0dc2dba810","url":"workbox-v6.1.5/workbox-range-requests.prod.js"},{"revision":"a103984afdadb56dd47351d1a946fc2b","url":"workbox-v6.1.5/workbox-recipes.dev.js"},{"revision":"8b62e256c96c8d21c2b0d2c8c85c80cd","url":"workbox-v6.1.5/workbox-recipes.prod.js"},{"revision":"302bc33ca0d090b074e76652759e671f","url":"workbox-v6.1.5/workbox-routing.dev.js"},{"revision":"63c81587ca4d56faac5cfeb27d6927d1","url":"workbox-v6.1.5/workbox-routing.prod.js"},{"revision":"34c3d2f208a87ba5fef231c032d02a94","url":"workbox-v6.1.5/workbox-strategies.dev.js"},{"revision":"5c00eea9d137c2d3fa67def1b200b9a2","url":"workbox-v6.1.5/workbox-strategies.prod.js"},{"revision":"fdef17b8dc0dd098c1756fc7048ee4a3","url":"workbox-v6.1.5/workbox-streams.dev.js"},{"revision":"8c4e6cf83a8e4ae718d071b4fac8def1","url":"workbox-v6.1.5/workbox-streams.prod.js"},{"revision":"c39ab44e31cffb91e65ee5037d3ef8a5","url":"workbox-v6.1.5/workbox-sw.js"},{"revision":"d0cfe78803c074387f76259a7908a24c","url":"workbox-v6.1.5/workbox-window.dev.umd.js"},{"revision":"df8a214e638d97c6a74c2f6184669dbe","url":"workbox-v6.1.5/workbox-window.prod.umd.js"}];
workbox.precaching.precacheAndRoute(precacheManifest, {});

const bc = new BroadcastChannel('sync-channel');

const dataCacheConfig = {
  cacheName: 'quote-data',
  networkTimeoutSeconds: 1,
  plugins: [
    new workbox.broadcastUpdate.BroadcastUpdatePlugin('data-updated-channel')
  ]
};

const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('quotes-queue', {
  maxRetentionTime: 24 * 60,
  onSync: async ({queue}) => {
    await queue.replayRequests();
    bc.postMessage({
      finished: true 
    });
  },
});

workbox.routing.registerRoute(
  new RegExp('https://service-forum\\.herokuapp\\.com/.*post'),
  new workbox.strategies.StaleWhileRevalidate(
    dataCacheConfig
  ), 'GET'
);

workbox.routing.registerRoute(
  new RegExp('https://service-forum\\.herokuapp\\.com/.*[0-9]+'),
  new workbox.strategies.StaleWhileRevalidate(
    dataCacheConfig
  ), 'GET'
);

workbox.routing.registerRoute(
  new RegExp('https://service-forum\\.herokuapp\\.com/.*create'),
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]}
  ), 'POST'
);

workbox.routing.registerRoute(
  new RegExp('https://service-forum\\.herokuapp\\.com/.*comment'),
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]}
  ), 'POST'
);

self.addEventListener('activate', () => {
  clients.claim();
});

/*
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
*/























/*
class QuotesStrategy extends workbox.strategies.Strategy {
  async _handle(request, handler) {
    const fetchAndCachePromise = handler.fetchAndCachePut(request);

    let response = await handler.cacheMatch(request);

    if (!response) {
      try {
        response = await fetchAndCachePromise;
      } catch (err) {
        console.log(err);
      }
      if (!response) {
        throw new WorkboxError('no-response', {url: request.url, error});
      }
      return response;
    }

    fetchAndCachePromise
      .then(async res => {
        const res1 = await res.clone().json();
        const res2 = await response.clone().json();
        let shouldRefresh = false;

        if (Array.isArray(res1.data)) {
          shouldRefresh = res1.data.length !== res2.data.length;
          console.log('usao 1', shouldRefresh);
        } else if (Array.isArray(res1.data.comments) && Array.isArray(res2.data.comments)) {
          shouldRefresh = res1.data.comments.length !== res2.data.comments.length;
          console.log('usao 2', shouldRefresh);
        }
        if (shouldRefresh) {
          console.log('usao 3');
          bc.postMessage({ finished: true });
        }
      }).catch(err => console.log(err));

    return response.clone();
  }
}
*/