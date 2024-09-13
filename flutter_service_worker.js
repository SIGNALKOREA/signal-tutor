'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ffef82dc34924cf34d2515c835bf7927",
"assets/AssetManifest.bin.json": "da506f7df7efbf73d70b239e6eafc4eb",
"assets/AssetManifest.json": "4007892e0ebe39c9f00ccb6bde39747c",
"assets/assets/animations/activity.json": "5b0ecc77a01a4fc1b00c72fa4dc2da5f",
"assets/assets/animations/bell.json": "530dffdbfb70f721b6fd80e9d8e0d121",
"assets/assets/animations/group_working.json": "90fb09b89cff459f853580f6f19a9991",
"assets/assets/animations/home.json": "da10dbd465d5b829e26d6475dd70d3bb",
"assets/assets/animations/video_call.json": "b10d241cd4405cc74fc4f4707add310e",
"assets/assets/animations/work_from_home.json": "118477189b3bd882ee36d46f45bc1929",
"assets/assets/images/back1.png": "2a2cd95cfed0f211927ac85b66d83a85",
"assets/assets/images/back2.png": "fd2b7abcff744ffc5aac6af7376dcb16",
"assets/assets/images/back3.png": "aeb15da0537d3fc328a18c900ad2956a",
"assets/assets/images/certi.png": "6d8ba2c33010119f4fbd8b38dcccb3e6",
"assets/assets/images/coupon.png": "6f4321febac278bb0c085f0ecfaa5e1e",
"assets/assets/images/cp1.png": "6cb2a5c9f43cc86a16bcea31be6f0ba1",
"assets/assets/images/cp2.png": "d89c344408c09288ea5a9926c1c6eacf",
"assets/assets/images/cp3.png": "a1ca488b9901b052c2f220f99622a4df",
"assets/assets/images/cp4.png": "2f42d72866d4a34b0cfed252f494b12d",
"assets/assets/images/cp5.png": "6ed33658bb269b12d59b925cc680ba53",
"assets/assets/images/cp6.png": "889b6d003dd759b78a947753ae39073d",
"assets/assets/images/cp7.png": "959d519b10987ed4aad52a97bf1bea13",
"assets/assets/images/cp8.png": "1421c53bce0b818f1e67f3e567cb51d6",
"assets/assets/images/cpbutton.png": "800924577308da059e817e133d09c1fd",
"assets/assets/images/cptitle.png": "7abc95a60c65c39aca5c7fa78f2497cf",
"assets/assets/images/insta1.png": "fa96cbac7f3ff549a56136f21de6c9af",
"assets/assets/images/insta2.png": "25efa65f57b0b828f5fb42888fd4d6a4",
"assets/assets/images/insta3.png": "d72685a28e6561f7130c01d5f085a6df",
"assets/assets/images/insta4.png": "2c51f289d64ce408315564fe81de64be",
"assets/assets/images/kakao.png": "42005b30b613269dfaa8254f12e5cf40",
"assets/assets/images/kss.png": "43dca55c7a0f6c47b2c51b885f61fbfa",
"assets/assets/images/lesson.png": "1680245cecde4ed9bc1a58ed5271b743",
"assets/assets/images/lesson1.png": "17bfcf1fbbc3e46ec0520261daea4467",
"assets/assets/images/logo1.png": "00e3da47a712b6c14ccf13da00de8622",
"assets/assets/images/port.png": "0c27e977263beef3a415dee77350af29",
"assets/assets/images/port1.png": "8367f7337f910e6d605ede52a5ad5290",
"assets/assets/images/promo.png": "a295fd3fc9e18e123ad7d7da64f93133",
"assets/assets/images/sg01.jpg": "18ed50bd314abeeb441b9865d5018eca",
"assets/assets/images/sg02.jpg": "266a458de22a13b511f55f637cec80e0",
"assets/assets/images/sg03.jpg": "f998c5310ff755d32cf802faa48f8800",
"assets/assets/images/sg04.jpg": "571b6f8ded0ed1efa4fe1a2c1e15d9d9",
"assets/assets/images/sg05.jpg": "c3abbbd4fc9e180b6ece3797ac792c41",
"assets/assets/images/sold.png": "754a4113e7444d25187137d07b763d25",
"assets/assets/images/stk.png": "1f832480b808e197dc15173072cc2b9d",
"assets/assets/images/topik1.png": "0e6eb35f8bdcf95f68122519e6be1122",
"assets/assets/images/topik2.png": "705e2a6dc7e2930aa05e31affacbb8ba",
"assets/assets/images/tutor.png": "65de7bc793214143f31fa51cb17d84a5",
"assets/assets/images/tutor1.png": "7381059ebf48db0fb0fdf38dc3c55bb7",
"assets/assets/images/tutor2.png": "b1449b6ae6ce236560c80778b6e67be5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "df9fbed5b1163cf1dcbc17d0b82eaf0f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "659ba0e8be145d78788334b4daec8b6c",
"/": "659ba0e8be145d78788334b4daec8b6c",
"main.dart.js": "222dcded340267284206b7f440ad7b0f",
"manifest.json": "beee96785822fee5bc619dd4b87bdf42",
"version.json": "05e944eef08faf875b18ec3bb8bca0ba"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
