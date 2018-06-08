function loadSprite(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then(a => a.blob()).then(a => {
      let objURL = URL.createObjectURL(a);
      let image = new Image();
      image.src = objURL;
      resolve(image);
    }).catch(reject);
  });
}
