'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "e7a35c0e4cdb6c86861b844b5a9f2cd7",
"index.html": "be77a77e61841a77fea404111ce479c7",
"/": "be77a77e61841a77fea404111ce479c7",
"main.dart.js": "57cfc8a1a67c8e0ff4a8fb17a8caabce",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "c0f9799bec69155b9cfb5c6051c9d45e",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "7db2ab7e6f238bebb9bc95cd5e6b99db",
"manifest.json": "063b4038b81c81eeafdafdb823322028",
".git/config": "91820ffc4be3f9e51a4642655ff0eb8e",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/92/2557b547d191dfcdbbfee75860340b236fbe65": "6d58f19e9cbc93f3ca77dfcd5aed0a09",
".git/objects/3e/7c013ba62f1a2aa3fcc08feb256d679db9e8ae": "c84d95a09adaa1399edbf030873bafb3",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/a8e9915238ef4128c742c212946906e17f2d11": "ae74ae77c90e66b7ed84ee02bc58cf5b",
".git/objects/56/ee2d7f63f6ad3c8c96705f8cf0195f86401f81": "08b475c58376b289408b73bba0be0533",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/56b13bef0e41cb9a86af120451e9a2c2a66db9": "544248b39b98d75761dfa9f6dd49eefd",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/d5919f94a385967570a23ce40b3eefa6d1f512": "fbdd799ca4c764f06955214312af3cfb",
".git/objects/60/5ca0dfdaa7ea44487709abdc0e4eadcfa46341": "4d95fe183273735c45732795699b4aa4",
".git/objects/34/a844159a28941a475579a11f5a84f104baab78": "dcee552d695203037400731c2dacf06a",
".git/objects/34/bc3fb1c33daffbd483fcf721b36e8f35814eca": "70d1e751f6ae2f23ed563a2fe58b6f0e",
".git/objects/33/fac392271ff83e6f1c5aead007a5aa4cc56402": "a27aa2e12556e861cbb2934096da5cb9",
".git/objects/a4/87c51fb009f5c4ad68575426e89a2e6ea4d2da": "cec121c95e72b0db7cf445812b785236",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/d9/18957836e67088b79489e66b194f6948851d32": "f0bf09e6b8686949a890ecd98c76c338",
".git/objects/bb/56e1b8c65973ae8470953d3f6f45174dc675ce": "2753a1fc8403ee729f8486a83d72d942",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/c40e07a9b1f114f565353a4d8418990eac8e64": "a5d695b503a37aef31a7575c8a540b8e",
".git/objects/be/083e8c4c9f07274400bf29a41cfa23550b84da": "cfcbcaaa794e3ba61686176f664626c4",
".git/objects/be/e40d7b0c4e8c64763aabbfa6a29f8286b70b2c": "3f9df7bcca0272d12cf156c1077d62f4",
".git/objects/b3/67cfbb351fe41ccd39c79988bc4043175a06f4": "013b936cecd2ed67558711bed9f56479",
".git/objects/a5/2a9f6763e137248436433558907e0c46df535a": "e91e6cb83e7f59804a8e89a87605079f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/37ca50dd4f57ab16988833856b50effd182987": "af460b5fefa3f8fc46ae77f6fac33f4f",
".git/objects/c9/8ec57f3c1ce1afa77b1c08a86ca09cb5627115": "518dd407b0330e38b2a5e161c560dcf9",
".git/objects/ca/81a58d301d2bf2c3883649bc2bc66fe033f345": "37942a5ecf3b7102b972cdfe3c33eceb",
".git/objects/ca/e28ea0b0f43118225b009e7afb2d0ce3fa2ee0": "fae74498593ba3b89e3e73d9e2c42b59",
".git/objects/20/0e241abc2edf9e06945f4062768fc83dfba1b6": "85284f462c5ca0c4a0842e963dcb26c5",
".git/objects/29/ede4ee62a5064239ae1e9bbcc52766515ec4a1": "59a835caec9290479627df1c5697960b",
".git/objects/1f/f1ca1e3717a533c53cac6f2900331a648ff072": "bd6a62aa2e17cfbedcbd16461c0dd4cd",
".git/objects/74/bbe8be35b8ebb5b5a478ec915f9e0b59ffeddf": "618a15a1756c9095e24c96340a30ac56",
".git/objects/7b/a456f42e702443f085d91fdb351f435cad541e": "145df1327f1e56ef140ac9c52e3719d0",
".git/objects/7b/d37c9c6157f11678f377cd830f401514c1f20b": "3ef29d5a319fa676a921d86d98c7b9c5",
".git/objects/8f/1b2500336383af71a1297255ee161b7eb6fb6c": "5768092d554621508dd3484cc8d8ec4c",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/0c927645d9c319b35c084040d10380dbea087b": "bd110a6bcdb47ce609adb92192a84d31",
".git/objects/21/6fbdd28315f846e41e7fa90fbab046ee55c7ab": "2e48806e3f83b1a3dcb831c7df5a330f",
".git/objects/43/508c0adbf776b3fe429c644ff42d369e5af644": "a9fb51cae679171f05785b992660ebdf",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/5c/60d18a05e4e8d7c95631f5d695d36b2a87d509": "47cdcfd2426ecb6e2f1de9df477d7bba",
".git/objects/09/9ae36d4622c443dc15a7e6502107bfecfee1dc": "6b31b5a61bde62b9336bb6ea78f6efdd",
".git/objects/65/11a0d70aa8b9016494b6e144f6047b372e73a4": "9ca113501a4901fd3847c65d0f3b82eb",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/53/fed0e1dd1f18a2f2e8b01105cc7afa81f61c65": "626542d3d76e2ed81e9d0731452f614b",
".git/objects/5e/bdd72d09542b8f0ce92407b332af3e178c3a4d": "705e449e959756fc5c31f33143d8c9c8",
".git/objects/5b/29ae6d0614d38cfd575a750633eb3743118d60": "e2800d1a8df90eb9a72ff4b2a6073e60",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/01/6a79be6b2d5c34b1dd4ca1a63db0836559861f": "ffc9cde34d6da7f38625acc2e36a511d",
".git/objects/99/b3a5b6ec66be4cec842529a05d39c4c95d2cfc": "b71077bd51a169873a980f671ac3b8e0",
".git/objects/55/cb6fd7d00784f75ba35f869288f8a78aa4384e": "18bf798e769e34393874250f6b16a165",
".git/objects/0f/8a384552fd24cfa42c8d17a0a48787817ec6bb": "313585533911a0c852322936732c51cc",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/af/39676fd0d16cce3aa8c973be7160f46ec93b95": "715595ca16935a23b36896001e82e87b",
".git/objects/b0/0c684d3ef14be87f0badd2eecc88babc70fea0": "7b995019412294d024b82f3c623c5831",
".git/objects/a6/8384c0e16955ece2acadce2faf0f0d52e90e47": "f214ea0d9e7d456d91a3b6f83f8a47a2",
".git/objects/c3/9a66560fca7b25fed17f006819966d9d852d89": "6de04edf49c674538aed9f8614875681",
".git/objects/f0/633e7a5adb19f0ab8497be2e2838619b97134d": "c60b72fadf705eb42f393d35489b4235",
".git/objects/f7/63797d7d99d79c33efcf45562f3dbc2a5d567f": "866f9e6ad5c86e537474b48b1cca008f",
".git/objects/fa/405ee20286efd651f128f02ae62f30308c1d28": "88dd5813eb3c91744e62771d0e842fc8",
".git/objects/c5/3451132a3fcf7baa09d5abb4a907f015c23153": "7e16d238e7db442aab64e1ca31d5118b",
".git/objects/46/1fad4c9adb596c33f2096cf9d825cf2a493350": "9adcb115dd3e7de872a41a651380c498",
".git/objects/79/38f52df34b597404d0034ae3074064bae5de41": "79f0b48b85bd72bec5b9b27fc604f106",
".git/objects/83/b6c22da0d79ccdb2b0e308bffb2135b0482848": "b09ed633ed3db57f4be549e017ad0b5b",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/4d4515a58820614c4dbbc04a07e4c84266c544": "dba0c47af667a2ad70e4175fdcfc8da4",
".git/objects/1d/bec269295a6e62f392507c86181fdf15c7dcc4": "baeeae2db65658d873a184c84369b338",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/76/11feb247e671d24dcd0f82b4ac8f6604d49493": "4e60fbff719208cdccb2b3ba16d9799e",
".git/objects/1c/6cbec34446a982d81f3e7f1de2e14ce1a6959d": "8582be08dc0046d9f0ddf1196bd0853e",
".git/objects/49/635b777cc8754f466b262e2df305ca3ee3efee": "a92f81673dd16948e7b916cbf2600652",
".git/objects/78/58a2f1b6807357861199cbffe7b4f7e12b0352": "3bdc2377c7802604db122fcd4faedcc5",
".git/objects/7f/c2db9eb22f6ce8631935e54745faa54303148f": "4e844de841bb88831b90b1e29fa1001f",
".git/objects/8e/b4e2c7d060fa3f63ea99b2cea03461c061a64a": "b1fd7d8ef6a89fd22eb44a33cf7f1bae",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/22/1ef2a79cfc56f733e0a1818f1f27cc56b612b0": "ba86474340e15c9097e25073cf69df97",
".git/objects/25/249d372bf5293eb6f4a8b15d57d26a96d65163": "1feb7de3b40f64ab55334ae1d3eae6e6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "45840b3e5b44421a4dc938833dd703e9",
".git/logs/refs/heads/master": "249b25e953fee985a6a1810525996ec1",
".git/logs/refs/remotes/origin/master": "086ddd27266bbb148dd37b6814a768ca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "1d064a26e1e4aed8ac922bb641b8502b",
".git/refs/remotes/origin/master": "1d064a26e1e4aed8ac922bb641b8502b",
".git/index": "50f5cd176aa31dc7cc58b9b8a8ae25fe",
".git/COMMIT_EDITMSG": "cf50063bd1845008d6517fc11c9caecd",
"assets/AssetManifest.json": "de89d1a23f8514927cbbeb34704c0878",
"assets/NOTICES": "1a675234fa838b15bb22b6e9c74aa0ee",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "38ed4ac1f0d16e17e8cafef3d8398d64",
"assets/fonts/MaterialIcons-Regular.otf": "57957cfdc6fd3d447cc63edbeded36d9",
"assets/assets/images/nag.png": "374232c22e77ac84ac3e66759a6b8ba6",
"assets/assets/images/img_cod.png": "51fdc63181bb84c9e002f6d423229c74",
"assets/assets/images/opusapp.png": "cb20bfd75ac254fc70c3e875dea5d8e3",
"assets/assets/images/logo_bg_chalk.png": "c1a334185fb843877c0bbf26765d9ce8",
"assets/assets/images/img_debit_credit.png": "526f23853d862ad72917e49e509afed4",
"assets/assets/images/profilepic.png": "62747b22aba12617a22cf1ff601ee5db",
"assets/assets/images/logo_bg_white.png": "dc93ef69b61ca6c67ed86cce79011a94",
"assets/assets/images/4x/profilepic4x.png": "ae9a9746273261b4271c74e04d641968",
"assets/assets/images/iot.jpg": "c7a9a2033ab505d3ec75861ecddd24e9",
"assets/assets/images/mobile_app_dev.jpg": "469c9e7475972056e03f5ed8fabcf4fe",
"assets/assets/images/img_fpx.png": "b8c0e5651490a76731d96358abe5b8cb",
"assets/assets/images/logo_no_bg.png": "d8fdbc551e3f80ab02a0814790956748",
"assets/assets/images/img_profile.png": "d4a0618693fb22a2a6d7b4d141583bae",
"assets/assets/images/bg.jpg": "0af1ea1f973185d63ec418f4642d48bd",
"assets/assets/icon/ic_google_btn.png": "56283328525663e4e2876a59b333d0d2",
"assets/assets/icon/ic_docx.png": "1292da011d32a25a62d6968e268c31cd",
"assets/assets/icon/ic_tick.png": "92507d76e619ef95bdd2b00351d52357",
"assets/assets/icon/ic_fb_btn.png": "602a93912ac927254f4103f8751b0e99",
"assets/assets/icon/4x/ic_linkedin.png": "774c60472ee6b1515a3c1fff695fbed1",
"assets/assets/icon/4x/ic_whatsapp.png": "a766581846b33fa154fcc70b0cd061f4",
"assets/assets/icon/4x/ic_twitter.png": "3f6238a31f9ab863d3a70807c149d733",
"assets/assets/icon/4x/ic_instagram.png": "19f90536f780baa733aa7ef2cddf15da",
"assets/assets/icon/4x/ic_github.png": "8996ed7c57c5533523986bdb47dfaaf5",
"assets/assets/icon/4x/ic_app_store_4x.png": "3dbead7d1a3a0674de30f79425c90c2b",
"assets/assets/icon/4x/ic_google_play_4x.png": "1d81a932671a6cec4e37c92dc08725e5",
"assets/assets/icon/4x/ic_email.png": "0113f25cc77b35ecafae58248f434adc",
"assets/assets/icon/ic_pdf.png": "a97222894fbe377e54205c55295102e4",
"assets/assets/icon/ic_ppt.png": "e276bfe366214bb7d7bb919f305a4e5f",
"assets/assets/icon/ic_xlsx.png": "133fdb544602c490e806967dddde635c",
"assets/assets/icon/ic_verified.png": "319a5a6d943ce987b6dc2e672806c662",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
