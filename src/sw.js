const cacheStaticName = "static-v11";
const cacheDynamicName = "dynamic-v5";

self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing service worker...", event);
  event.waitUntil(
    caches.open(cacheStaticName).then((cache) => {
      console.log("[Service Worker] Precaching app shell...");
      cache.addAll([
        "/",
        "/offline/",
        "/img/offline-dino.webp",
        "/css/blog.css",
        "/css/home.css",
        "/img/chris-smith-cartoon-2023.webp",
        "/favicon.ico",
        "https://fonts.googleapis.com/css2?family=Russo+One&display=swap",
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating service worker...", event);
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheStaticName && key !== cacheDynamicName) {
            console.log("[Service Worker] Removing old cache...", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// intercepts any requests
self.addEventListener("fetch", (event) => {
  // console.log("[Service Worker] Fetching...", event);
  // reponds with the original request's promise
  event.respondWith(
    caches.match(event.request).then((response) => {
      // if we find a matching key in the cache use it
      if (response) {
        return response;
      } else {
        // get the response from the network request
        return fetch(event.request)
          .then((res) => {
            // store a copy of it in the cache
            return caches.open(cacheDynamicName).then((cache) => {
              cache.put(event.request.url, res.clone());
              // return the original request (as it can only be used once)
              return res;
            });
          })
          .catch((error) => {
            return caches.open(cacheStaticName).then((cache) => {
              return cache.match("/offline/");
            });
          });
      }
    })
  );
});
