'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dca709b314c77653f610ac26a0d3a209",
"assets/AssetManifest.bin.json": "c4967ef11aca19cbb00fcac62eb53a2d",
"assets/AssetManifest.json": "ae09807f67e9a391b152fdd60cff1367",
"assets/assets/animations/box/closed_box.png": "d847cc820d3a606bbe9001d65c18a38f",
"assets/assets/animations/box/opened_box_bomb.png": "f201ef4f01c74664e7919858714a3c56",
"assets/assets/animations/box/opened_box_money.png": "e9a5b3b0688cebde9df3dbd86e444506",
"assets/assets/animations/box/opened_box_police.png": "98660f0ec381e0f2fac5e20ab002f00c",
"assets/assets/animations/box/opening_box0.png": "27e6402364a323b314a5bea37e8ae61b",
"assets/assets/animations/box/opening_box1.png": "db812ab7756c898f8273eef72acd3b17",
"assets/assets/animations/box/opening_box2.png": "94b69348170c422a981959f006ad85ca",
"assets/assets/animations/box/opening_box3.png": "a694c708c73a2a18ec95d3d050a4b368",
"assets/assets/animations/box/opening_box4.png": "a2d4458f6e78204d8e107c18a8f8b5a6",
"assets/assets/animations/box/openned_box_empty.png": "9cd3df9bdae1e3daea4be23f4bcb6287",
"assets/assets/animations/box/openned_box_unknown.png": "d7922cb98bb1f86e344f4565cd00866f",
"assets/assets/fonts/Cinzel-Bold.ttf": "7fa8033ca19d3d9dea10e6f019712228",
"assets/assets/fonts/Cinzel-Medium.ttf": "18f1755ffc108cbec9ac27c7a98c0b18",
"assets/assets/fonts/Cinzel-Regular.ttf": "1751891facafee36e80586cfed227fc1",
"assets/assets/icons/create_room_button.png": "c8b470be20ee571453bb15e94ef7f7ea",
"assets/assets/icons/exit_icon.png": "9ecbe1426de4bcd14488c0ce261a4abc",
"assets/assets/icons/join_room_button.png": "f2ee4ee3e975ba7dd366e6670876d470",
"assets/assets/icons/open_button.png": "6b3ef9548cb35e76d4617ec1b6530843",
"assets/assets/icons/pass_button.png": "f3d4358abd80e7999022b586e26c01ba",
"assets/assets/images/add_name_field.png": "5e40c6ae65423bb250e6fb334c011e66",
"assets/assets/images/chat_icon.png": "30f263ffea1d59554d30ce169837a113",
"assets/assets/images/game_background1.webp": "4f0f916bf347ccf5e5725221257cb2ef",
"assets/assets/images/game_background2.webp": "0ee8818f47ca9e94d39dd02f8a7ce666",
"assets/assets/images/lobby_background.webp": "6ded75f82a79dac290e1bc065cd74c10",
"assets/assets/images/title_lobby.png": "48278c2f8cb107cb0927ecdd8cfdf17f",
"assets/FontManifest.json": "772dc31f29a704dc7a165bdb306c88e8",
"assets/fonts/MaterialIcons-Regular.otf": "c599cdb07ac5ff3e6021a4f660d75327",
"assets/NOTICES": "e37d984d9c86a663885a0981bb5583d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "e1d62bb9acceb91f015d48ea11308ef4",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "d498840316ee2944a6f7f0124aa0e7a2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "30d72506b345ec82275853cd1871ea6e",
"/": "30d72506b345ec82275853cd1871ea6e",
"main.dart.js": "5a3b27bbb126dbad68b3138208b25e44",
"manifest.json": "eb101169c4723359655c9c4e25279bc2",
"version.json": "312d202442a93b55f74066a441837829"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
