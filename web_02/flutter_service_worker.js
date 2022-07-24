'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e56f36fe21a57ea463c9a55cdd57b483",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/pic0.jpg": "a9127958bc977eb135155d5101991319",
"assets/images/pic1.jpg": "5f917a5fac2d212c25cd319ce1894979",
"assets/images/pic10.jpg": "1a2e2f10d5b10857d4b1f35cd8793584",
"assets/images/pic11.jpg": "edbb36cafead8df862b842ee7131ff26",
"assets/images/pic12.jpg": "660fd5a69ce993e394eeb7fd087b5224",
"assets/images/pic13.jpg": "6d8afe75750ee41b69665a5fdcbd234b",
"assets/images/pic14.jpg": "c3971c565304eaeb4ef423e62d457629",
"assets/images/pic15.jpg": "86953b873f9d974ec3b43ec3623bc965",
"assets/images/pic16.jpg": "068e6c3086d9480eecac4779e12c285d",
"assets/images/pic17.jpg": "cbdc76c9d9d1f1587e5ab1c685095f70",
"assets/images/pic18.jpg": "d911e8b1af58a335b3cb8148abd6092e",
"assets/images/pic19.jpg": "e9cf2b969a1da1e473ed9182395b0451",
"assets/images/pic2.jpg": "d9c261a02fdafc67e81f4cedde92ee97",
"assets/images/pic20.jpg": "3abf75d8811778ddeca1deec342c4eac",
"assets/images/pic21.jpg": "bab7a381e2061cd41f56820a0e96b23f",
"assets/images/pic22.jpg": "98e8d554546ad2158e932c62f7cde1c8",
"assets/images/pic23.jpg": "03d18017e143a705d8fb81e71fd5c776",
"assets/images/pic24.jpg": "eab4326c839433517ced6dd7511d3620",
"assets/images/pic25.jpg": "831a7b5a55861361e3f3a17eedb1409e",
"assets/images/pic26.jpg": "10303e49a8419adf320c938259c18b96",
"assets/images/pic27.jpg": "fa8f8b2db546e046c96898f61ecc76fb",
"assets/images/pic28.jpg": "4b7bfd2f2647f1109f7cd6a555d0ee06",
"assets/images/pic29.jpg": "dc21977abbc1ecd9b18b2c3524e4ae66",
"assets/images/pic3.jpg": "61abe2de7c413f8b586af2ccc184578c",
"assets/images/pic4.jpg": "7ed71239bf1945e1588c23a435cc3870",
"assets/images/pic5.jpg": "49052772a2e9d69be0eb34041138074d",
"assets/images/pic6.jpg": "45209e6cd82563ff82718c742a2d4359",
"assets/images/pic7.jpg": "70f7376d0b6c19cb776a80469969bc85",
"assets/images/pic8.jpg": "6b7931d848f37f151c24288f80fed182",
"assets/images/pic9.jpg": "d9b9b922846a50df26d83353d763f975",
"assets/NOTICES": "2d7236aca695ba4cd213a3478e55d740",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5b408d75d03314c5802e57682cd56e71",
"/": "5b408d75d03314c5802e57682cd56e71",
"main.dart.js": "58b391c6490d38e8dedd55057b302687",
"manifest.json": "87071045263e80855bc97fd63e740e42",
"version.json": "47b191f69c04d6c9475286426e41d372"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
