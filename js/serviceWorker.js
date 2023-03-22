var myCashName = "myPWACache";


const addResourcesToCache = async (resources) => {
    console.log("Add to cache ..");
    const cache = await caches.open(myCashName);
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
      console.log("Installing...");
    event.waitUntil(
      addResourcesToCache([
        "/",
        "/index.html",
        "/css/style.css",
        "/js/app.js",
        "/media/icons/icon-32.png",
        "/media/icons/icon-512.png",
      ])
    );
  });
  