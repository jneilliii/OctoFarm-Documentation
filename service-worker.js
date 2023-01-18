/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3d16159923557d5d7d06682e95972fe7"
  },
  {
    "url": "api/index.html",
    "revision": "01f7804f4616790bdde7cd650c68e9ad"
  },
  {
    "url": "assets/css/0.styles.48e8e2bb.css",
    "revision": "ef823d7451e7e646b0185fa4f940f3f2"
  },
  {
    "url": "assets/img/clone-of.74241f73.png",
    "revision": "74241f73d4aefb9524fb3392e4230348"
  },
  {
    "url": "assets/img/gotify-example.60f15769.png",
    "revision": "60f15769f81ec8cd3236591f6dc84529"
  },
  {
    "url": "assets/img/open-c.296bfbfd.png",
    "revision": "296bfbfdb95d3c5ceb2514310e42a7a8"
  },
  {
    "url": "assets/img/pm2-install.3e05ff0a.png",
    "revision": "3e05ff0a415accd76ca300186e32b2db"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start-octofarm.07ee2557.png",
    "revision": "07ee2557d21f00f16ed1ef736752bc79"
  },
  {
    "url": "assets/js/10.1e710ca1.js",
    "revision": "6fb34fa4352ed0b10837bb0c172e1401"
  },
  {
    "url": "assets/js/11.3aeb6364.js",
    "revision": "e0fcee77c4bab818df176d61401e5ba0"
  },
  {
    "url": "assets/js/12.6a316914.js",
    "revision": "1169151fb3cf9a569a465f9ef8c7dd4b"
  },
  {
    "url": "assets/js/13.14518694.js",
    "revision": "fd696d0df1d457eee0c1d2bcd36617d7"
  },
  {
    "url": "assets/js/14.10858028.js",
    "revision": "2171ec6194002ae02b354e0a10167244"
  },
  {
    "url": "assets/js/15.68dfc91f.js",
    "revision": "857140ed999d600b7fec32a976d335ca"
  },
  {
    "url": "assets/js/16.01eefaea.js",
    "revision": "95236f11677121c0477812e5991d6e9d"
  },
  {
    "url": "assets/js/17.3619fa02.js",
    "revision": "b9532a7042ec82f63a30b34451a07747"
  },
  {
    "url": "assets/js/18.c754bae6.js",
    "revision": "12a1262267c9bdd08769f28d54e30cd2"
  },
  {
    "url": "assets/js/19.243d90ed.js",
    "revision": "1ba7ca1a84427ddff9f8ec1567da249e"
  },
  {
    "url": "assets/js/2.965b894a.js",
    "revision": "f504031d64ab18c8c83edb62aaa17c32"
  },
  {
    "url": "assets/js/20.be41b541.js",
    "revision": "ae67da58485a0bda43a62ab2a8b14748"
  },
  {
    "url": "assets/js/21.dcc69a65.js",
    "revision": "d973d2bc10310d2b2a725f015b4804e1"
  },
  {
    "url": "assets/js/22.a5b45674.js",
    "revision": "446a7f438923ec23afea93a588774c5f"
  },
  {
    "url": "assets/js/23.d42c3b54.js",
    "revision": "4b3ab44336271fc2fc18acae6146a347"
  },
  {
    "url": "assets/js/24.8cc0df8c.js",
    "revision": "40f739e88d3b67fac7c18873b048e06e"
  },
  {
    "url": "assets/js/25.4318df64.js",
    "revision": "0e21608be2722ce34d50714d066676ed"
  },
  {
    "url": "assets/js/26.4397ebca.js",
    "revision": "0fec93abc3a0841f0167a9e099191d5c"
  },
  {
    "url": "assets/js/27.71c55e50.js",
    "revision": "b24fd2d3d26a0f58a30f23f19a1aabc1"
  },
  {
    "url": "assets/js/28.6039974d.js",
    "revision": "4bd5ab82ad7cd72748ee799ac624d34d"
  },
  {
    "url": "assets/js/29.cd7e2b34.js",
    "revision": "0ba0e73274f514d6d92cf541a6d94ea2"
  },
  {
    "url": "assets/js/3.878a6eb6.js",
    "revision": "da0c4372956cedc17eaec6ee75bd0a38"
  },
  {
    "url": "assets/js/30.5d719740.js",
    "revision": "e18612e7455e4a6c3e801d03959d0752"
  },
  {
    "url": "assets/js/31.8002ee73.js",
    "revision": "3fc940566b59120c86bb1ccd9b41182b"
  },
  {
    "url": "assets/js/32.3f0f6196.js",
    "revision": "0368f59606ddc622caa9e954103c659c"
  },
  {
    "url": "assets/js/33.699b3475.js",
    "revision": "eed6d6296ae3e3889d2099c1619b9291"
  },
  {
    "url": "assets/js/34.89425a09.js",
    "revision": "26e788c38c593a4b7d85490f6fe9e545"
  },
  {
    "url": "assets/js/35.c28071e6.js",
    "revision": "daa02626f2f74773a134196e222c9ff8"
  },
  {
    "url": "assets/js/36.75012aba.js",
    "revision": "fd653fb2bfd6dbd5391c127752131317"
  },
  {
    "url": "assets/js/37.6ee75b18.js",
    "revision": "6ed8992ed1650b3b853fc8e39bcbe2b9"
  },
  {
    "url": "assets/js/4.c8c44e52.js",
    "revision": "a5aaf9a70dc6b94b790182c68edefeb0"
  },
  {
    "url": "assets/js/5.b307729f.js",
    "revision": "3f0c8a4a67c84961957bb80188151e0c"
  },
  {
    "url": "assets/js/6.e55b13fa.js",
    "revision": "7c7e1147a50e6820eb1964608aee6c85"
  },
  {
    "url": "assets/js/7.4abc5fac.js",
    "revision": "71326cb021fb1b4923b18adf4fc27720"
  },
  {
    "url": "assets/js/8.1a4b60f9.js",
    "revision": "86928c0574561693fb2b60912a798850"
  },
  {
    "url": "assets/js/9.75a81c4f.js",
    "revision": "821719f6a05598ed1604a99c8988f6ac"
  },
  {
    "url": "assets/js/app.52d5ebc2.js",
    "revision": "64b57d71042e14b9d16cacfa2e865588"
  },
  {
    "url": "contributing/index.html",
    "revision": "e4b9adf44bb72359038a16d3e9127e5f"
  },
  {
    "url": "getting-started/index.html",
    "revision": "dddaa057c49c6c75f00a2454b676e3aa"
  },
  {
    "url": "getting-started/octofarm-cli.html",
    "revision": "f5da772d6969504746008187476cc0e8"
  },
  {
    "url": "getting-started/octofarm-faq.html",
    "revision": "18636a2cb93dec961a9ed53b182a54b0"
  },
  {
    "url": "getting-started/octofarm-remote-access.html",
    "revision": "3f7ed9b9d24fccb92fae8a015a4add21"
  },
  {
    "url": "getting-started/octofarm-requirements.html",
    "revision": "ca0782d63af78ff284874dac601d24f0"
  },
  {
    "url": "getting-started/octoprint-setup.html",
    "revision": "293ae5ca231320e62a507aa227e1368f"
  },
  {
    "url": "getting-started/octoprint-supported-plugins.html",
    "revision": "7912f671276d578d4ff46b9ab42530d7"
  },
  {
    "url": "guides/index.html",
    "revision": "90b71bc8d9ebf109932b1d3620cd43e9"
  },
  {
    "url": "guides/octofarm-scripts-gotify.html",
    "revision": "fc7f5af78d5eb3abcf08d119e4d27570"
  },
  {
    "url": "guides/octofarm-updating.html",
    "revision": "3a691ce06dae07398b0e10343c47c233"
  },
  {
    "url": "guides/upgrade-mongodb-database.html",
    "revision": "d95b72d0aaa15abea7dea7917b9a0622"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5017e7e33ca7c617bf40f4c449803354"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0fc1d956b26dfd6d81b992882ed8cfec"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "dd34c21efa1fd560c76c84bd1f8c0e85"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "175295be99cd023090875a8fe8de9cff"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "39939dc9e24b73c478026c5850ac8a4d"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "510c6b26f256ec09d2d8ab82fe713283"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "1f6c689ebef2033c87b211b9f6971826"
  },
  {
    "url": "index.html",
    "revision": "77db7a9f6c42432f07f9807404882a90"
  },
  {
    "url": "installation/index.html",
    "revision": "263934f66fb9f60673204e1732c529fe"
  },
  {
    "url": "installation/install-docker.html",
    "revision": "012b6c22e39841fcc3c85dac3d2f60b3"
  },
  {
    "url": "installation/install-linux-arch.html",
    "revision": "3136cf6e945a711669d51e6ac801a905"
  },
  {
    "url": "installation/install-linux-debian.html",
    "revision": "929c12c27b993c575231001675cb430f"
  },
  {
    "url": "installation/install-linux-opensuse.html",
    "revision": "0d1db3bd6c44b754e4da95e99232eec7"
  },
  {
    "url": "installation/install-linux-redhat.html",
    "revision": "a2533cdc7b70285b92c9d9fdb218d1b7"
  },
  {
    "url": "installation/install-linux-ubuntu.html",
    "revision": "0639fbf15879bfc4ba95720f8a4cdab2"
  },
  {
    "url": "installation/install-raspberry-pi.html",
    "revision": "ca93a66f0ab75697b713dd8ec0490160"
  },
  {
    "url": "installation/install-windows.html",
    "revision": "080458d6bf40a9a049543708e6050efa"
  },
  {
    "url": "installation/setup-environment.html",
    "revision": "c7ecc000ea586e6eab71f073442f4c94"
  },
  {
    "url": "installation/setup-service.html",
    "revision": "ba84c85fc1c56cb4283de81218f1585b"
  },
  {
    "url": "logo.png",
    "revision": "cafa45e7ede7e3888e08e8640cb7d92d"
  },
  {
    "url": "usage-instructions/index.html",
    "revision": "a3dbaa204b51809aec0c8ec4a2a8ed71"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
