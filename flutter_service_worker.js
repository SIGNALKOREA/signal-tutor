'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c2ed5e75f1bbb436b9a0b9271044f79c",
".git/config": "e125c630d608575410539f23c3ff0eb7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "df5e459f7e883c4a3df6362088aa5536",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b0fb69a841b252526a15ab7d6947a3ab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a00be2be8ea7cff6c426cabdc528c19c",
".git/logs/refs/heads/master": "a00be2be8ea7cff6c426cabdc528c19c",
".git/logs/refs/remotes/tutor/master": "ec5ce52946350beeab71c410f00cbe39",
".git/objects/00/ebf1de789c71cce3a251335fc38a71c2679c76": "7224d678b52eb1a8dc3c9fcaa278b47f",
".git/objects/03/2945be9de2ab809b76fe51a9f5a81b980fcb0d": "7fd130a3fed3e58be2b3db20f63845af",
".git/objects/03/65603c2934354fad19277a97df125fd602b76e": "3bc4fb6d9922f9e7d31499cba9520fa9",
".git/objects/03/a0b0c9b09572543e44d87325d877f354edc3b7": "6fff14a05c31e78f0b631942ccb4e23a",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/14/fb37c9b7ab8cd9ada0e5d2f11d5631ed21e5b3": "fc25041a0ecf0d765c1e9fa39c839b26",
".git/objects/16/5cca732fc35ca906079f4b43e2575c111fa33a": "7303d465caa76b814eade12da41d1448",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/a165b18d3aa922a8218585fe93d9e613864a6b": "ed32710cdf2ea2232ed7c9cfbcab5f75",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/2325d0b181f2485f1dde092d57077fe60d58a7": "b9edf326dd1fc1a2a5bc3122cfed70a3",
".git/objects/2a/23e8d402a55973dee5d9357c81531326435879": "44834585c00e7f134df67015fbe57502",
".git/objects/31/79985d81dde622b2a91f86dd834e8bb05a865e": "29f87f53ecf7ce8d29ed767b8a522605",
".git/objects/34/2170488035f2666cf08ef8c2e64d08a5d00ac4": "80a67d97ae3cf0b825d2d0619216267a",
".git/objects/3b/ba0a890afdbdbb867fd73b64930cbd3fddfe7b": "3337509761a3784c1ead85e37cf6360a",
".git/objects/3e/02e0ce2778a0810d16b38c04472958e9f83b54": "d340599bbed4c55529ea9d125757a89b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/59acb621c33538e6384e38debcb3fd0fc4a729": "4aae0149ccc619c8faa28aca59323073",
".git/objects/49/c5c5aed783bbea313965dfbd0a393581f48425": "d4f5bae89d6f693a96ab01bbf6d9df51",
".git/objects/4a/36ede6c25b4ee188232fcb0ca25a772a41ffea": "fe7824e3f0fc4183beedeb47a0f2566a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/4fbb22e2554b370197f5ef11913cf154dd2b31": "427f76979de625412115855a33266aeb",
".git/objects/4d/713c7439563cbb564a0a79f36b9ad1afe1dfe0": "17add0c8cef3306735ef18da3e4f8778",
".git/objects/50/17e807c11866ae506c5bbc28707d78c728f4be": "fa7fdf20c146e59a4d7796ad0b02a71c",
".git/objects/56/036dff3aed50e560703b193b9ce2579811f136": "36658826ddb07b3e4ab539e8bbb93191",
".git/objects/57/d7e3e1f41e0667e45d80ef7e0f29f42a38459b": "134b597c147d09744f39a352191b2145",
".git/objects/59/341d94b3f74e9beff02cb3789d0d1ea4e170fc": "0d180d3b90a4d007b71b2d24867ba73d",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/4125b1cad8c3e19fbcef4fce93f2dcd1993ea5": "f4f1bcffbf5278d93444ee1dcf551745",
".git/objects/5c/1297a1ef4f0dd6e9082de6c9e84cd3d48a35d3": "468196ed42c1de9b1dc0f6d3c3103dac",
".git/objects/65/a5bf2718bd678a43461be7acdaccc709c85222": "fdc10f1b6ff9aaeac50474537b30eb4b",
".git/objects/67/65eeb5436c9ed8fd4448464f1b2217069603d0": "d8f3e385129b092c8212fa6dedb70605",
".git/objects/68/ae170ba400fa5c4f0141c7ed9b9b732d555fca": "86046f4a0f4691dfea0a1acd73b620c6",
".git/objects/6d/c80cdb1390e57de28a3240046ae77bfaf23007": "9929f81b62ea5f11e7b8c9657ac88c44",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/76/403df35a5e496b7a69f7fe17f0d047c93e35af": "79650ddfebc1ef1a037ce0b3c84fe663",
".git/objects/7b/965a9b2d388ecb5d2b28d65c8f6057606510c9": "16e1ce150431b981fac7c5627831462d",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/f22eb88ad5d7a240f361958451ce17a3f62658": "4b424d8b9d9f1e721c712a14b22ce031",
".git/objects/84/0a626b1469b4a08eae73c0b95efa0165386994": "b98a9a5f81e75db6a6ad3385e990bfe9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/b9267ae0e81836131282d4b8846a89db136543": "45215e7864ff8088b06d411c4fb7e9fb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/1bd2c67fcd062372417226df327d67fa896815": "02bcda65c3b619982c7d5de377182312",
".git/objects/8e/fa1525f2aba60be872c8d1692aa59523cf28fb": "f43427a370efbdecfc0e2e1a92dc9486",
".git/objects/8f/7b41887c7c2799e02863c27e3c5908f7a034e5": "40b93447c2954f1b89b746ffe7262f8c",
".git/objects/90/019b6f513ef4e4a473cbb6574c75bdb4a61b5b": "b132db4a44a877696ed0f039c0c6c2ed",
".git/objects/91/ae2210eeb9d2a14300a5ca7ee6df8a387146f7": "bd595c2c2c0989ff6194159bd48a1deb",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a0/cb39016be88617285c257e63218d17027c04ed": "5aee17f5fe234ec42cdb84c48c05ada3",
".git/objects/a2/8fe58142ab604af2c1d918725d1eab785c423d": "85dcb79a958118292518153e86f81a54",
".git/objects/aa/2bee3f6ed348ee534810e17a0e6ffbcba477af": "ca8acdd2fb983ad48fb92c63f09f4c53",
".git/objects/aa/d1f1d7876b77f5c50aaec8a25f7e740eac5c2e": "dfd724408b586e05947d213802f94c14",
".git/objects/ad/e98d22586f4494c3ffd7f0f73a17d89908f1ef": "07c89c9cd89e3017830c0544944dfb1e",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/85a211c1616cf8125295a8af3482f034df6c28": "6f665cea9733d8d4d669f847f8bd8108",
".git/objects/b6/e16c94d769f27f8252af214bf04359d4df6a92": "e0326115f947e9b791d984e8a2411dd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c8dbfb2f08047a40e72fab10ec4013ebb65a94": "d5510d843bc8a2dce7f870f912230fc3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8e0b03ff298eb0b4193b186d638a740c103af7": "1903c2bfc6a8e762990ca5830b2a998c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/96ebe09838eddd0390b3f14e25c6fd00c4280f": "7cc67d9de5085a37765d382efe7b10a0",
".git/objects/c2/db850dc487fb74be0ed23fb550774953212763": "10b51edf1418e9884158496a700b18ae",
".git/objects/c4/98c78f8bf513dbbd713b08891378b1f5cb039f": "ef29a248a683693a1f7064e89e9ee540",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/8259760acdf5ed93bfdd297dba314260417290": "36a0e6679dcc7b31f1bbbb46c707b083",
".git/objects/cc/f2c06b59b4719bb4441f2bb7f2f7b2edcb9787": "a03d1b9333ad9737dd4ef7f11301dc6f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/92d5ab23138a3c1e523b42166c4682ea6cde54": "3464614e5dfa66db62536e69b0ae23a1",
".git/objects/d9/a62a27f459c7b8d48317bde5983f1c9661b7b2": "4a950198e6d5601ba020d328f9ed68e3",
".git/objects/dd/27b822fa992154f8ab9bed74ee8a5f72052cfd": "4403d19c58522f03b086fa2f1d45a05f",
".git/objects/e4/823d276335e9b327eb9fae1c2793212a393248": "5bc887f85416c126fd2bf19fcb434d9d",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/72837ba6d87108aa4c258bda0db64b4bbed7fc": "1e7ee7258616670a798f87f2c3aef3ad",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/755ee145f44e0e359d8f57e40cb619fee00466": "3d102efdb361d1b377223a8c3dbbb62f",
".git/objects/ec/aec184fc5ac81a680ec88a8d8cdac424b31af0": "3cd06ebaf3591b88a545c1dcaae7a275",
".git/objects/ef/b8b454915f11c0769e9f3291c595f1f7175de4": "df9dc1cf12cf1415be2b7006d9adb207",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/6a0d58fca0fd7e8ec5241c13842679d5628697": "6e664e3095b60f8fc4d377e3ad0066b1",
".git/objects/f6/c60c09e1b20baa5ff1fe67c4c25ecc2d8ed8c8": "682c150ee88e800e104985ba80d6e4d7",
".git/objects/f8/9940966fcc581f591f6671fde6a955fb36092a": "9c2ca352d00f8a7a3d5b5749b447ac56",
".git/objects/pack/pack-fb878bc8b94968a7b2f4fab79c0aecbd3e3bb6d5.idx": "9ae1a01191efa34886e13a1765cd9b9a",
".git/objects/pack/pack-fb878bc8b94968a7b2f4fab79c0aecbd3e3bb6d5.pack": "69c87050690085abf9a9f1e974b48e9e",
".git/ORIG_HEAD": "03277d1bcf6d64c14d73c217f62a15b2",
".git/refs/heads/master": "03277d1bcf6d64c14d73c217f62a15b2",
".git/refs/remotes/tutor/master": "33e54bb8bc44c5dd6ca6b870a9ac4d65",
"assets/AssetManifest.bin": "ffef82dc34924cf34d2515c835bf7927",
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
"favicon1.png": "90dd5aa70bce4c54aa8ba9ccb10c066a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"Icon-192.png": "3014fc88c5db8b5806541d14139559e4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index%20copy.html": "056a722eca0f53db26b67b10a0df45a5",
"index.html": "2ae2e386ec027df8b52a4a982ce70f03",
"/": "2ae2e386ec027df8b52a4a982ce70f03",
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
