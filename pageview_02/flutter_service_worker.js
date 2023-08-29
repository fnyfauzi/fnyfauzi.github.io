'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e32b90d988dcecc58a375eb104347018",
"assets/AssetManifest.json": "9452b9a026c60a3b0120c5b186d0c9fd",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/svgs/001.svg": "68c994cf702aa1b6bfc3b88ecbd64a86",
"assets/assets/svgs/002.svg": "e9989c68c4e860625cf450549b50ada2",
"assets/assets/svgs/003.svg": "bf0ec82f07cbad6a9960f32059edcfd7",
"assets/assets/svgs/004.svg": "a29cbb46e5b020d1a06ac94936a2a15e",
"assets/assets/svgs/005.svg": "09930e6e3f991b9295826acf037d1263",
"assets/assets/svgs/006.svg": "dcbca4c4b4252a32e8763e2fed6bef7a",
"assets/assets/svgs/007.svg": "b5f27abb460d742be44c36db005386bd",
"assets/assets/svgs/008.svg": "ac7b90d858507b37833d083ead89caed",
"assets/assets/svgs/009.svg": "2c1b2ba946abf58a1283af26298d7ca7",
"assets/assets/svgs/010.svg": "0dd5bee1d0b75df614b0f31c212779d0",
"assets/assets/svgs/011.svg": "e88f3ea652e230f53ea32b1b6d4f022e",
"assets/assets/svgs/012.svg": "943e7a5a284e618d80be14590d17e2c9",
"assets/assets/svgs/013.svg": "2c3dddf44ce031578589ec1bd3c7f525",
"assets/assets/svgs/014.svg": "5cadc0d05ddf1f1b4a50958b37e89c7d",
"assets/assets/svgs/015.svg": "a8b9d6910e78b51c42eccd68a389eae2",
"assets/assets/svgs/016.svg": "259fede7a2c853aa4581892c6907e783",
"assets/assets/svgs/017.svg": "63cbcf590dba3bd398f455950b8628d7",
"assets/assets/svgs/018.svg": "b10172a57181a935e5bca63d310c3d3e",
"assets/assets/svgs/019.svg": "b2772729744044041a84e51c67491d92",
"assets/assets/svgs/020.svg": "33a09f35d9354674603d730ac3025883",
"assets/assets/svgs/021.svg": "32de783c01e619f155e7e9bd87bc55eb",
"assets/assets/svgs/022.svg": "2bdaa41979a1cbb17e2b507c702f5cb8",
"assets/assets/svgs/023.svg": "f7a29e42cc0ca5662f7566f2a40f285a",
"assets/assets/svgs/024.svg": "30fec48b3cff3eed891c98928b59b1be",
"assets/assets/svgs/025.svg": "2c1710e54794ca949aa3e034e6930134",
"assets/assets/svgs/026.svg": "2a2b1452fe5126bc14035c14e777f547",
"assets/assets/svgs/027.svg": "580bd198ce01cd79275987da76322282",
"assets/assets/svgs/028.svg": "2b0a357b1f0aa2ed2bd3a6e3d5e6f837",
"assets/assets/svgs/029.svg": "79da29e712816132de62b26f08b3deed",
"assets/assets/svgs/030.svg": "59aae716c705e0cf4e35e9c286c460fc",
"assets/assets/svgs/031.svg": "46fd23ecd4057b8d24448108469dea49",
"assets/assets/svgs/032.svg": "1608207ad707719443ae74770c1bbd19",
"assets/assets/svgs/033.svg": "be6bbfa5497cd25f4171065ca2029e34",
"assets/assets/svgs/034.svg": "21021aebfe0448c92dd6f58944074495",
"assets/assets/svgs/035.svg": "812bf468c2ec63a9cf50da9c9fe86088",
"assets/assets/svgs/036.svg": "f66d6cadf4f3f728046e5700758fd3e9",
"assets/assets/svgs/037.svg": "5e03c364f241253d4fcbcad6b1bef29e",
"assets/assets/svgs/038.svg": "2cf3ffa6e30c5a6cc08b37b0dc7e8016",
"assets/assets/svgs/039.svg": "13dc90ee95e0dddaf3038d3854e47807",
"assets/assets/svgs/040.svg": "24d896ed86be544296cc2dc300308aa0",
"assets/assets/svgs/041.svg": "d00e8562bf18035981be12f9fdeead34",
"assets/assets/svgs/042.svg": "6914a27a007107aebf8f68dfa9fccd7c",
"assets/assets/svgs/043.svg": "112e7d2cb9a932c4f8185e8cfa86fb0e",
"assets/assets/svgs/044.svg": "633c57d63af822f542552206709392af",
"assets/assets/svgs/045.svg": "5bffe9f5547e29f99279afc8235c1da3",
"assets/assets/svgs/046.svg": "084797cdb63ad2cbea9a962da2948acb",
"assets/assets/svgs/047.svg": "cdc978ad03485ff6fcdfbef29d2a2aea",
"assets/assets/svgs/048.svg": "c745b4899ad8ce7508f2d63d9b4b7d8f",
"assets/assets/svgs/049.svg": "8dfaa76fe526ef830cde5fb4c08e4d05",
"assets/assets/svgs/050.svg": "e8fb744481f1e0dffea6b383541c2aad",
"assets/assets/svgs/051.svg": "f7cf4c17033ac0a60cfae6bc756b3f87",
"assets/assets/svgs/052.svg": "1cd2ec9b04fc8252b4b3f42b3f252592",
"assets/assets/svgs/053.svg": "95925fa2df70e74ee71fb7403c021873",
"assets/assets/svgs/054.svg": "5b746dd4a0d4c751e5303e1c84515814",
"assets/assets/svgs/055.svg": "5d389cf55d080ae6a9beb06fdc416e74",
"assets/assets/svgs/056.svg": "35ddd466c4a115f535537f87c9c6dfa1",
"assets/assets/svgs/057.svg": "f8a63bca498812fd6aeefb1ebd673745",
"assets/assets/svgs/058.svg": "4defbf05e3f5656b3eac4fb7a7cdf13c",
"assets/assets/svgs/059.svg": "fb69445284e2722f98bd54728999592b",
"assets/assets/svgs/060.svg": "eaee806e34e5987a7991cd2625dd155e",
"assets/assets/svgs/061.svg": "ba6cefe7991102c1cbbb1582507b0431",
"assets/assets/svgs/062.svg": "7e7084a1e75e9b17730834f3c1737ea2",
"assets/assets/svgs/063.svg": "056aa6397bb0bf4cde68b1bec36f7187",
"assets/assets/svgs/064.svg": "b8d717a0ced41f63d736abf30091339b",
"assets/assets/svgs/065.svg": "435c736d997e61c3edc8070686701cc3",
"assets/assets/svgs/066.svg": "e4b0a765eb960e88b24f3e1f203580e7",
"assets/assets/svgs/067.svg": "0fe67ee7062b48cb66b44a83f0ff9df4",
"assets/assets/svgs/068.svg": "86df9a0a58819b03ddb77d1b7d84b017",
"assets/assets/svgs/069.svg": "cffd260706240fcbb1ac35e9e9b38fdd",
"assets/assets/svgs/070.svg": "7f90bdd302359164ed831068a278f4f9",
"assets/assets/svgs/071.svg": "1d6a89de9cb60f9daf29a3fed78c90e8",
"assets/assets/svgs/072.svg": "2a05f69bb65c73f379c47170a610ba44",
"assets/assets/svgs/073.svg": "2569c8045352fb4208b0cfa933bafad4",
"assets/assets/svgs/074.svg": "bb25f67df5b5601d01114dfc9b88a5ac",
"assets/assets/svgs/075.svg": "94f3f01456fe2ee1f605ecb3a5a6eac7",
"assets/assets/svgs/076.svg": "69b4f4c46b71cce0a3ca6cf49128e581",
"assets/assets/svgs/077.svg": "ce40ecb0330cc5468dda693688c0a9d3",
"assets/assets/svgs/078.svg": "9fa974f3e5a8be65dbfa968082e8ea12",
"assets/assets/svgs/079.svg": "21910ad61e5363e6e937e2fc8202254f",
"assets/assets/svgs/080.svg": "334bc437f0c81ae6b7ef5d72cc66d1d8",
"assets/assets/svgs/081.svg": "fcf64ef53a00d2a12790bd2dd6fc397c",
"assets/assets/svgs/082.svg": "bbab5a2e13b7975f7adcb6959b30684f",
"assets/assets/svgs/083.svg": "519a29c5bc76023feff9c3d5768faf46",
"assets/assets/svgs/084.svg": "26febc5d6c44046c590cc833eeeced96",
"assets/assets/svgs/085.svg": "fcdbdc48d52f8c131ff32377a7e5d926",
"assets/assets/svgs/086.svg": "1a7c839884811e1a391ebe082623753f",
"assets/assets/svgs/087.svg": "2bb6df02dce8ae5bec52ee4c1ccf3c55",
"assets/assets/svgs/088.svg": "e266295aad8079f0b3aaa861b59b660b",
"assets/assets/svgs/089.svg": "d4a888b5c295c3be3e3578dd877f215c",
"assets/assets/svgs/090.svg": "7352cf00a56de58ab9fbc8f8ca95c048",
"assets/assets/svgs/091.svg": "7fd3b5b84669b3195608a3e3045de4a5",
"assets/assets/svgs/092.svg": "996615d473712bc52728bcd6aeefd593",
"assets/assets/svgs/093.svg": "a2a3d1424fd928a3cfeaf844f2988dd0",
"assets/assets/svgs/094.svg": "6055aa714bd8c7d72777ca5749fa78e3",
"assets/assets/svgs/095.svg": "e23bb69e2f8ed2d7a2e775479f797eb8",
"assets/assets/svgs/096.svg": "6079e47db365300e9ef2d41ea8e8b6d3",
"assets/assets/svgs/097.svg": "8cbab6104acb6c190b32db571da9e3d7",
"assets/assets/svgs/098.svg": "d2461e8b1455d15c7edd5aac4809a6d4",
"assets/assets/svgs/099.svg": "5cf60c74bb50e1e696fdf87a00efb127",
"assets/assets/svgs/100.svg": "9f348a4c5675b4027913ef65c100a18a",
"assets/assets/svgs/101.svg": "971458a1ce3b770025d2af23e187e1b4",
"assets/assets/svgs/102.svg": "62e28ec2621a1c7789995a935ae2730d",
"assets/assets/svgs/103.svg": "02bb2cf1538e8ef288ff8114af9a262f",
"assets/assets/svgs/104.svg": "1c8111270b96d3e8d0ebe0570054fc4d",
"assets/assets/svgs/105.svg": "1ec3c956c10040d62e3484ec2bd1a7e4",
"assets/assets/svgs/106.svg": "0a5941414a4b001fb047ff85d72f4006",
"assets/assets/svgs/107.svg": "94323084360c77feaa06d7dec91d4344",
"assets/assets/svgs/108.svg": "19c4176ff5949e06bf8264a87f5edebc",
"assets/assets/svgs/109.svg": "10604388d7033424780e20db958fbc71",
"assets/assets/svgs/110.svg": "e9a48aa6479a3d62573739ad91b1cb8f",
"assets/assets/svgs/111.svg": "a77891acb48ae0805d6cee55fe5a0c8b",
"assets/assets/svgs/112.svg": "81a5a339308845b7b05e0875c768643c",
"assets/assets/svgs/113.svg": "7aec8aa41275e6626826a37282a8c750",
"assets/assets/svgs/114.svg": "b4cb758f1e3a6e9138cefca769dc05f0",
"assets/assets/svgs/115.svg": "c143153c499d39a48c261dcddbbe4107",
"assets/assets/svgs/116.svg": "40d4ea20897814d2087259442afebfcb",
"assets/assets/svgs/117.svg": "3689d612f5182cd09f4d2fb4ba420bae",
"assets/assets/svgs/118.svg": "00746bb10bdc0042fcfb5dc6f70e8a91",
"assets/assets/svgs/119.svg": "755ef7817e0ef358e7f87567b6482984",
"assets/assets/svgs/120.svg": "5caa6cbf08a6f8b0c9c3dd3406f02a0b",
"assets/assets/svgs/121.svg": "810267afd6788f60863be17a3d2ea34d",
"assets/assets/svgs/122.svg": "f55fa9cff4e2d647a29148e0e2593e76",
"assets/assets/svgs/123.svg": "f0cb3bdfc4dde3c31d4df52bad3d39c3",
"assets/assets/svgs/124.svg": "8493ce739dfe5a424d9093e1d977c242",
"assets/assets/svgs/125.svg": "44520412935784dae1de2332f8e500b6",
"assets/assets/svgs/126.svg": "03acc6f64ee85ae244c4223aecf2f956",
"assets/assets/svgs/127.svg": "ccdd82a0f6bb71c55731c34e780d23fe",
"assets/assets/svgs/128.svg": "d6e351678d8d2e28e91fff9bfa1696c9",
"assets/assets/svgs/129.svg": "59d9495cd298778ef102efa2ce4bc407",
"assets/assets/svgs/130.svg": "353777f2551878eff6ab0ebb697448e4",
"assets/assets/svgs/131.svg": "6f20f66e9f394ecaf67407632785e2eb",
"assets/assets/svgs/132.svg": "977366fefa05dd69f8e68273f78f7bfa",
"assets/assets/svgs/133.svg": "daab034df85f5a0e28a1b677e692ad47",
"assets/assets/svgs/134.svg": "1cf89f94c398f02993a489995f705375",
"assets/FontManifest.json": "9931b4073c41d8a0dc587991ed84044e",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "ab29e0af7c5c471fa8dce3c694aa798a",
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
"index.html": "7ebde2586a5daf217d591dd366eb2e72",
"/": "7ebde2586a5daf217d591dd366eb2e72",
"main.dart.js": "17e24af83650ed5a5513415c27235626",
"manifest.json": "f0db1f0c030bb190e0c9f58288c30c4d",
"version.json": "a8fb6b3459291dd9c97f56415738c6c9"};
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
