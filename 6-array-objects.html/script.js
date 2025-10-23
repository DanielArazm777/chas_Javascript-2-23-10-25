  const products = [
    { name: "Camera", brand: "Canon", model: "EOS 70D" },
    { name: "Camera", brand: "Nikon", model: "D3400" },
    { name: "Camera", brand: "GoPro", model: "Hero 4" },
    { name: "Drone", brand: "DJI", model: "Phantom" },
    { name: "Drone", brand: "GoPro", model: "Karma" }
  ]

  products.forEach(product => {
    console.log("${product.name] från märket ${product.brand}");
});

const models = products.map(product => product.model); 
    console.log(models);