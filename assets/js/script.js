const numberOfItems = 1000; // Set the desired number of items
const itemsContainer = document.getElementById("images");

const itemList = [
  {
    name: "White Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Beautiful blue bouquet with vibrant colors.",
    price: "£49.99",
    sale: "On Sale",
    isSubImage: false,
    imageGroup: 1,
    imgName: "img_1.jpg" 
  },
  {
    name: "Blue Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Beautiful blue bouquet with vibrant colors.",
    price: "£19.99",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 1,
    imgName: "img_1_1.jpg" 
  },
  {
    name: "Blue Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Beautiful blue bouquet with vibrant colors.",
    price: "£19.99",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 1,
    imgName: "img_1_2.jpg" 
  },
  {
    name: "Blue Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Beautiful blue bouquet with vibrant colors.",
    price: "£19.99",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 1,
    imgName: "img_1_3.jpg" 
  },
  {
    name: "Green Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Green bouquet with a mix of flowers.",
    price: "£24.99",
    sale: "On Sale",
    isSubImage: false,
    imageGroup: 2,
    imgName: "img_2.jpg" 
  },
  {
    name: "Green Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Green bouquet with a mix of flowers.",
    price: "£24.99",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 2,
    imgName: "img_2_1.jpg" 
  },
  {
    name: "Green Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Green bouquet with a mix of flowers.",
    price: "£24.99",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 2,
    imgName: "img_2_2.jpg" 
  },
  {
    name: "Green Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Green bouquet with a mix of flowers.",
    price: "£24.99",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 2,
    imgName: "img_2_3.jpg" 
  },
  {
    name: "Red",
    category: "Flowers",
    category2: "flowers",
    description: "Red-themed floral arrangement.",
    price: "£15.99",
    sale: "On Sale",
    isSubImage: false,
    imageGroup: 3,
    imgName: "img_3.jpg" 
  },
  {
    name: "Red",
    category: "Flowers",
    category2: "flowers",
    description: "Red-themed floral arrangement.",
    price: "£15.99",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 3,
    imgName: "img_3_1.jpg" 
  },
  {
    name: "Red",
    category: "Flowers",
    category2: "flowers",
    description: "Red-themed floral arrangement.",
    price: "£15.99",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 3,
    imgName: "img_3_2.jpg" 
  },
  {
    name: "Ship",
    category: "Coastal",
    category2: "coastal",
    description: "A ship sailing on the ocean.",
    price: "Contact for price",
    sale: "On Sale",
    isSubImage: false,
    imageGroup: 4,
    imgName: "img_4.jpg" 
  },
  {
    name: "Ship",
    category: "Coastal",
    category2: "coastal",
    description: "A ship sailing on the ocean.",
    price: "Contact for price",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 4,
    imgName: "img_4_1.jpg" 
  },
  {
    name: "Ship",
    category: "Coastal",
    category2: "coastal",
    description: "A ship sailing on the ocean.",
    price: "Contact for price",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 4,
    imgName: "img_4_2.jpg" 
  },
  {
    name: "Ship",
    category: "Coastal",
    category2: "coastal",
    description: "A ship sailing on the ocean.",
    price: "Contact for price",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 4,
    imgName: "img_4_3.jpg" 
  },
  {
    name: "Ship",
    category: "Coastal",
    category2: "coastal",
    description: "A ship sailing on the ocean.",
    price: "Contact for price",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 4,
    imgName: "img_4_4.jpg" 
  },
  {
    name: "Red Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Red-themed floral arrangement.",
    price: "£50.00",
    sale: "On Sale",
    isSubImage: false,
    imageGroup: 5,
    imgName: "img_5.jpg" 
  },
  {
    name: "Red Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Red-themed floral arrangement.",
    price: "£50.00",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 5,
    imgName: "img_5_1.jpg" 
  },
  {
    name: "Red Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Red-themed floral arrangement.",
    price: "£50.00",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 5,
    imgName: "img_5_2.jpg" 
  },
  {
    name: "Red Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Red-themed floral arrangement.",
    price: "£50.00",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 5,
    imgName: "img_5_3.jpg" 
  },
  {
    name: "Red Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Red-themed floral arrangement.",
    price: "£50.00",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 5,
    imgName: "img_5_4.jpg" 
  },
  {
    name: "Red Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Red-themed floral arrangement.",
    price: "£50.00",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 5,
    imgName: "img_5_5.jpg" 
  },
  {
    name: "Coral Beauty",
    category: "Coastal",
    category2: "coastal",
    description: "Red-themed floral arrangement.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 6,
    imgName: "img_6.jpg" 
  },
  {
    name: "Pope John Paul II",
    category: "Portraits",
    category2: "portraits",
    description: "Red-themed floral arrangement.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 7,
    imgName: "img_7.jpg" 
  },
  {
    name: "Pope John Paul II",
    category: "Portraits",
    category2: "portraits",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: true,
    imageGroup: 7,
    imgName: "img_7_1.jpg" 
  },
  {
    name: "Pope John Paul II",
    category: "Portraits",
    category2: "portraits",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 8,
    imgName: "img_8.jpg" 
  },
  {
    name: "Pope John Paul II",
    category: "Portraits",
    category2: "portraits",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 9,
    imgName: "img_9.jpg" 
  },
  {
    name: "Pope John Paul II",
    category: "Portraits",
    category2: "portraits",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 10,
    imgName: "img_10.jpg" 
  },
  {
    name: "Pope John Paul II",
    category: "Portraits",
    category2: "portraits",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 11,
    imgName: "img_11.jpg" 
  },
  {
    name: "Pope John Paul II",
    category: "Animals",
    category2: "animals",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: true,
    imageGroup: 11,
    imgName: "img_11_1.jpg" 
  },
  {
    name: "Pope John Paul II",
    category: "Animals",
    category2: "animals",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 12,
    imgName: "img_12.jpg" 
  },
  {
    name: "Pope John Paul II",
    category: "Animals",
    category2: "animals",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 13,
    imgName: "img_13.jpg" 
  },
  {
    name: "Pope John Paul II",
    category: "Animals",
    category2: "animals",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 14,
    imgName: "img_14.jpg" 
  },
  {
    name: "Black Horse",
    category: "Animals",
    category2: "animals",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: true,
    imageGroup: 14,
    imgName: "img_14_1.jpg" 
  },
  {
    name: "Parrot",
    category: "Animals",
    category2: "animals",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 15,
    imgName: "img_15.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 16,
    imgName: "img_16.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: true,
    imageGroup: 16,
    imgName: "img_16_1.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 17,
    imgName: "img_17.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 18,
    imgName: "img_18.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 19,
    imgName: "img_19.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 20,
    imgName: "img_20.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 21,
    imgName: "img_21.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 22,
    imgName: "img_22.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 23,
    imgName: "img_23.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 24,
    imgName: "img_24.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: true,
    imageGroup: 24,
    imgName: "img_24_1.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 25,
    imgName: "img_25.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 26,
    imgName: "img_26.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 27,
    imgName: "img_27.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 28,
    imgName: "img_28.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 29,
    imgName: "img_29.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Coastal",
    category2: "coastal",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 30,
    imgName: "img_30.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Castles",
    category2: "castles",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 31,
    imgName: "img_31.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 32,
    imgName: "img_32.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Castles",
    category2: "castles",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 33,
    imgName: "img_33.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Flowers",
    category2: "flowers",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 34,
    imgName: "img_34.jpg" 
  },
  {
    name: "Orange Flowers",
    category: "Castles",
    category2: "castles",
    description: " of the pope.",
    price: "£1000",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 35,
    imgName: "img_35.jpg" 
  }
  // Add more items as needed
];

const subImageGroups = {};

for (const item of itemList) {
  if (item.isSubImage) {
    if (!subImageGroups[item.imageGroup]) {
      subImageGroups[item.imageGroup] = [];
    }
    subImageGroups[item.imageGroup].push(item);
  }
}

for (let i = 0; i < numberOfItems; i++) {
  if (!itemList[i].isSubImage) {
    const newItem = document.createElement("div");
    newItem.className = `item ${itemList[i].category2} col-sm-6 col-md-4 col-lg-4 mb-4`;

    const imgSrc = `assets/img/${itemList[i].imgName}`;

    newItem.innerHTML = `
      <div>
        <div class="price-tag-2">
          ${itemList[i].sale}
        </div>
        <a data-fancybox="group-${itemList[i].imageGroup}" data-caption="${itemList[i].name}<br>${itemList[i].category}<br>${itemList[i].description}<br>Price: ${itemList[i].price}" href="${imgSrc}" class="item-wrap fancybox rounded" style="box-shadow: 6px 6px 17px 0px #C0C0C0;">
          <div class="work-info">
            <h3>${itemList[i].name}</h3>
            <span>${itemList[i].category}</span>
          </div>
          <img class="img-fluid rounded" src="${imgSrc}">
          <div class="price-tag">
            ${itemList[i].price}
          </div>
        </a>
      </div>
    `;

    if (subImageGroups[itemList[i].imageGroup]) {
      for (const subImage of subImageGroups[itemList[i].imageGroup]) {
        const subImgSrc = `assets/img/${subImage.imgName}`;
        newItem.innerHTML += `
          <a data-fancybox="group-${subImage.imageGroup}" data-caption="${subImage.name}<br>${subImage.category}<br>${subImage.description}<br>Price: ${subImage.price}" href="${subImgSrc}" class="item-wrap fancybox rounded" style="box-shadow: 6px 6px 17px 0px #C0C0C0; display: none;">
            <img class="img-fluid rounded" src="${subImgSrc}">
          </a>
        `;
      }
    }

    itemsContainer.appendChild(newItem);
  }
}