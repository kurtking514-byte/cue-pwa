// Cue Board offline cache. Version changes automatically when the content changes.
const CACHE = "cue-board-614df13d71";
const FILES = [
 "./",
 "index.html",
 "manifest.webmanifest",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "icons/maskable-512.png",
 "icons/apple-touch-icon.png",
 "slides/s01.jpg",
 "slides/s02.jpg",
 "slides/s03.jpg",
 "slides/s04.jpg",
 "slides/s05.jpg",
 "slides/s06.jpg",
 "slides/s07.jpg",
 "slides/s08.jpg",
 "slides/s09.jpg",
 "slides/s10.jpg",
 "slides/s11.jpg",
 "slides/s12.jpg",
 "slides/s13.jpg",
 "slides/s14.jpg",
 "slides/s15.jpg",
 "slides/s16.jpg",
 "slides/s17.jpg",
 "slides/s18.jpg",
 "slides/s19.jpg",
 "slides/s20.jpg",
 "slides/s21.jpg",
 "slides/s22.jpg",
 "slides/s23.jpg",
 "slides/s24.jpg",
 "slides/s25.jpg",
 "slides/s26.jpg",
 "slides/s27.jpg",
 "slides/s28.jpg",
 "slides/s29.jpg",
 "slides/s30.jpg",
 "slides/s31.jpg",
 "slides/s32.jpg",
 "slides/s33.jpg",
 "slides/s34.jpg",
 "slides/s35.jpg",
 "slides/s36.jpg",
 "slides/s37.jpg",
 "slides/s38.jpg",
 "slides/s39.jpg",
 "slides/s40.jpg",
 "slides/s41.jpg",
 "slides/s42.jpg",
 "slides/s43.jpg",
 "slides/s44.jpg",
 "slides/s45.jpg",
 "slides/s46.jpg",
 "slides/s47.jpg",
 "slides/s48.jpg",
 "slides/s49.jpg",
 "slides/s50.jpg",
 "slides/s51.jpg",
 "slides/s52.jpg",
 "slides/s53.jpg",
 "slides/s54.jpg",
 "slides/s55.jpg",
 "slides/s56.jpg",
 "slides/s57.jpg",
 "slides/s58.jpg",
 "slides/s59.jpg",
 "slides/s60.jpg",
 "slides/s61.jpg",
 "slides/s62.jpg",
 "slides/s63.jpg",
 "slides/s64.jpg",
 "slides/s65.jpg",
 "slides/s66.jpg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).catch(() => caches.match("index.html")))
  );
});
