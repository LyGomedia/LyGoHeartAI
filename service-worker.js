const cacheName = "lygoheart-v1";

const files = [
"index.html",
"css/style.css",
"pages/ai-chat.html",
"pages/mood-tracker.html",
"pages/profile.html",
"pages/daily-motivation.html",
"pages/community.html"
];


self.addEventListener("install", event => {

event.waitUntil(

caches.open(cacheName)
.then(cache => cache.addAll(files))

);

});



self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request)
.then(response => {

return response || fetch(event.request);

})

);

});