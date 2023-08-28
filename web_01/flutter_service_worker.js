'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7d589185ed2a7084e9013855df8fdf88",
"assets/AssetManifest.json": "9849050f94a4075b7529139ffbe6301c",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/images/pic0.jpg": "a9127958bc977eb135155d5101991319",
"assets/assets/images/pic1.jpg": "5f917a5fac2d212c25cd319ce1894979",
"assets/assets/images/pic10.jpg": "1a2e2f10d5b10857d4b1f35cd8793584",
"assets/assets/images/pic11.jpg": "edbb36cafead8df862b842ee7131ff26",
"assets/assets/images/pic12.jpg": "660fd5a69ce993e394eeb7fd087b5224",
"assets/assets/images/pic13.jpg": "6d8afe75750ee41b69665a5fdcbd234b",
"assets/assets/images/pic14.jpg": "c3971c565304eaeb4ef423e62d457629",
"assets/assets/images/pic15.jpg": "86953b873f9d974ec3b43ec3623bc965",
"assets/assets/images/pic16.jpg": "068e6c3086d9480eecac4779e12c285d",
"assets/assets/images/pic17.jpg": "cbdc76c9d9d1f1587e5ab1c685095f70",
"assets/assets/images/pic18.jpg": "d911e8b1af58a335b3cb8148abd6092e",
"assets/assets/images/pic19.jpg": "e9cf2b969a1da1e473ed9182395b0451",
"assets/assets/images/pic2.jpg": "d9c261a02fdafc67e81f4cedde92ee97",
"assets/assets/images/pic20.jpg": "3abf75d8811778ddeca1deec342c4eac",
"assets/assets/images/pic21.jpg": "bab7a381e2061cd41f56820a0e96b23f",
"assets/assets/images/pic22.jpg": "98e8d554546ad2158e932c62f7cde1c8",
"assets/assets/images/pic23.jpg": "03d18017e143a705d8fb81e71fd5c776",
"assets/assets/images/pic24.jpg": "eab4326c839433517ced6dd7511d3620",
"assets/assets/images/pic25.jpg": "831a7b5a55861361e3f3a17eedb1409e",
"assets/assets/images/pic26.jpg": "10303e49a8419adf320c938259c18b96",
"assets/assets/images/pic27.jpg": "fa8f8b2db546e046c96898f61ecc76fb",
"assets/assets/images/pic28.jpg": "4b7bfd2f2647f1109f7cd6a555d0ee06",
"assets/assets/images/pic29.jpg": "dc21977abbc1ecd9b18b2c3524e4ae66",
"assets/assets/images/pic3.jpg": "61abe2de7c413f8b586af2ccc184578c",
"assets/assets/images/pic4.jpg": "7ed71239bf1945e1588c23a435cc3870",
"assets/assets/images/pic5.jpg": "49052772a2e9d69be0eb34041138074d",
"assets/assets/images/pic6.jpg": "45209e6cd82563ff82718c742a2d4359",
"assets/assets/images/pic7.jpg": "70f7376d0b6c19cb776a80469969bc85",
"assets/assets/images/pic8.jpg": "6b7931d848f37f151c24288f80fed182",
"assets/assets/images/pic9.jpg": "d9b9b922846a50df26d83353d763f975",
"assets/FontManifest.json": "9931b4073c41d8a0dc587991ed84044e",
"assets/fonts/MaterialIcons-Regular.otf": "fd465b74a2bb30dcf0d8d8552d8e764e",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88364e4784da954a02f99c6fdcc2697c",
"/": "88364e4784da954a02f99c6fdcc2697c",
"main.dart.js": "ea92325d491801c084983b395e37315e",
"manifest.json": "67c635d90435d950d368ccf17e0c2a2e",
"version.json": "86a2246d59dcb686c8d9b2f678e8e2f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
