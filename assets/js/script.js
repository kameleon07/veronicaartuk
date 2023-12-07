
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item',
      });

      let portfolioFilters = select('#filters a', true);

      on('click', '#filters a', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

window.addEventListener('load', () => {
  let portfolioContainer = select('#portfolio-grid');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.item',
    });

    let allFilters = select('#filters a', true);
    let saleFilters = select('#sale-filters a', true);

    let handleFilterClick = function(e) {
      e.preventDefault();
      allFilters.forEach(function (el) {
        el.classList.remove('active');
      });
      saleFilters.forEach(function (el) {
        el.classList.remove('active');
      });

      this.classList.add('active');
      portfolioIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });
      portfolioIsotope.on('arrangeComplete', function () {
        AOS.refresh()
      });
    };

    on('click', '#filters a', handleFilterClick, true);
    on('click', '#sale-filters a', handleFilterClick, true);
  }
});



const numberOfItems = 1000; // Set the desired number of items
const itemsContainer = document.getElementById("images");

const itemList = [
  {
    name: "Blue Rhododendron's",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on stretched canvas - Handmade - Original - 60x50cm 23.6x20.6''",
    price: "£100",
    sale: "On Sale",
    isSubImage: false,
    imageGroup: 1,
    imgName: "img_1.jpg" 
  },  
  {
    name: "Blue Rhododendron's",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on stretched canvas - Handmade - Original - 60x50cm 23.6x20.6''",
    price: "£100",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 1,
    imgName: "img_1_1.jpg" 
  },
  {
    name: "Blue Rhododendron's",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on stretched canvas - Handmade - Original - 60x50cm 23.6x20.6''",
    price: "£100",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 1,
    imgName: "img_1_2.jpg" 
  },
  {
    name: "Blue Rhododendron's",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on stretched canvas - Handmade - Original - 60x50cm 23.6x20.6''",
    price: "£100",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 1,
    imgName: "img_1_3.jpg" 
  },
  {
    name: "Savana Tea Pot",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 60x50cm 24x20''",
    price: "£150",
    sale: "On Sale",
    isSubImage: false,
    imageGroup: 2,
    imgName: "img_2.jpg" 
  },
  {
    name: "Savana Tea Pot",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 60x50cm 24x20''",
    price: "£150",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 2,
    imgName: "img_2_1.jpg" 
  },
  {
    name: "Savana Tea Pot",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 60x50cm 24x20''",
    price: "£150",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 2,
    imgName: "img_2_2.jpg" 
  },
  {
    name: "Savana Tea Pot",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a canvas board - Handmade - Original - 60x50cm 24x20''",
    price: "£150",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 2,
    imgName: "img_2_3.jpg" 
  },
  {
    name: "Red Wine",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20.6x14.8''",
    price: "£79",
    sale: "On Sale",
    isSubImage: false,
    imageGroup: 3,
    imgName: "img_3.jpg" 
  },
  {
    name: "Red Wine",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20.6x14.8''",
    price: "£79",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 3,
    imgName: "img_3_1.jpg" 
  },
  {
    name: "Red Wine",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20.6x14.8''",
    price: "£79",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 3,
    imgName: "img_3_2.jpg" 
  },
  {
    name: "Navy Blue Marine",
    category: "Coastal",
    category2: "coastal",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 100x50cm 39.5x20''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 4,
    imgName: "img_4.jpg" 
  },
  {
    name: "Navy Blue Marine",
    category: "Coastal",
    category2: "coastal",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 100x50cm 39.5x20''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: true,
    imageGroup: 4,
    imgName: "img_4_1.jpg" 
  },
  {
    name: "Navy Blue Marine",
    category: "Coastal",
    category2: "coastal",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 100x50cm 39.5x20''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: true,
    imageGroup: 4,
    imgName: "img_4_2.jpg" 
  },
  {
    name: "Navy Blue Marine",
    category: "Coastal",
    category2: "coastal",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 100x50cm 39.5x20''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: true,
    imageGroup: 4,
    imgName: "img_4_3.jpg" 
  },
  {
    name: "Navy Blue Marine",
    category: "Coastal",
    category2: "coastal",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 100x50cm 39.5x20''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: true,
    imageGroup: 4,
    imgName: "img_4_4.jpg" 
  },
  {
    name: "Red Roses",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20.6x14.8''",
    price: "£100",
    sale: "On Sale",
    isSubImage: false,
    imageGroup: 5,
    imgName: "img_5.jpg" 
  },
  {
    name: "Red Roses",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20.6x14.8''",
    price: "£100",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 5,
    imgName: "img_5_1.jpg" 
  },
  {
    name: "Red Roses",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20.6x14.8''",
    price: "£100",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 5,
    imgName: "img_5_2.jpg" 
  },
  {
    name: "Red Roses",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20.6x14.8''",
    price: "£100",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 5,
    imgName: "img_5_3.jpg" 
  },
  {
    name: "Red Roses",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20.6x14.8''",
    price: "£100",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 5,
    imgName: "img_5_4.jpg" 
  },
  {
    name: "Red Roses",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20.6x14.8''",
    price: "£100",
    sale: "On Sale",
    isSubImage: true,
    imageGroup: 5,
    imgName: "img_5_5.jpg" 
  },
  {
    name: "Coastal Beauat - Still Life",
    category: "Coastal",
    category2: "coastal",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 60x50cm 24x20''",
    price: "£100",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 6,
    imgName: "img_6.jpg" 
  },
  { 
    name: "Jean Paul II",
    category: "Portraits",
    category2: "portraits",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 60x50cm 24x20''",
    price: "£180",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 7,
    imgName: "img_7.jpg" 
  },
  {
    name: "Jean Paul II",
    category: "Portraits",
    category2: "portraits",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 60x50cm 24x20''",
    price: "£180",
    sale: "Sold",
    isSubImage: true,
    imageGroup: 7,
    imgName: "img_7_1.jpg" 
  },  
  {
    name: "Self-Portrait",
    category: "Portraits",
    category2: "portraits",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20.6x14.8''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 8,
    imgName: "img_8.jpg" 
  },
  {
    name: "Degas - Balerine",
    category: "Portraits",
    category2: "portraits",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x50cm 20x20''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 9,
    imgName: "img_9.jpg" 
  },
  {
    name: "Michael Jackson",
    category: "Portraits",
    category2: "portraits",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 60x50cm 24x20''",
    price: "£50",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 10,
    imgName: "img_10.jpg" 
  },
  {
    name: "Tamara-Lipnicka",
    category: "Portraits",
    category2: "portraits",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x50cm  20x20''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 11,
    imgName: "img_11.jpg" 
  },
  {
    name: "Tamara-Lipnicka",
    category: "Portraits",
    category2: "portraits",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x50cm  20x20''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: true,
    imageGroup: 11,
    imgName: "img_11_1.jpg" 
  },
  {
    name: "The Mandarin Duck",
    category: "Animals",
    category2: "animals",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x40cm 14,8''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 12,
    imgName: "img_12.jpg" 
  },
  {
    name: "Brown Horse",
    category: "Animals",
    category2: "animals",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x40cm  15x12,5''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 13,
    imgName: "img_13.jpg" 
  },
  {
    name: "Lion & Giraffe",
    category: "Animals",
    category2: "animals",
    description: "Oil paiting on a stretched canvas - Handmade - National Geographic Picture Recreation - 70x50cm 28x20''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 14,
    imgName: "img_14.jpg" 
  },
  {
    name: "Lion & Giraffe",
    category: "Animals",
    category2: "animals",
    description: "Oil paiting on a stretched canvas - Handmade - National Geographic Picture Recreation - 70x50cm 28x20''",
    price: "£200",
    sale: "Sold",
    isSubImage: true,
    imageGroup: 14,
    imgName: "img_14_1.jpg" 
  },
  {
    name: "Parrots",
    category: "Animals",
    category2: "animals",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 14.8",
    price: "£50",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 15,
    imgName: "img_15.jpg" 
  },
  {
    name: "Orange Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x40cm 20X14.8''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 16,
    imgName: "img_16.jpg" 
  },
  {
    name: "Orange Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x40cm 20X14.8''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: true,
    imageGroup: 16,
    imgName: "img_16_1.jpg" 
  },
  {
    name: "Sunflowers - Van Gogh",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x40cm 14.8''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 17,
    imgName: "img_17.jpg" 
  },
  {
    name: "Red & White Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 70x50cm 28x20''",
    price: "£60",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 18,
    imgName: "img_18.jpg" 
  },
  {
    name: "Carnation Flowers - Stefan Lucian",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Replica -  50x40cm 14.8''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 19,
    imgName: "img_19.jpg" 
  },
  {
    name: "Red Poppies",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x40cm 20x14.8''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 20,
    imgName: "img_20.jpg" 
  },
  {
    name: "Anthurium Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 120x80cm 47.2x31.4''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 21,
    imgName: "img_21.jpg" 
  },
  {
    name: "Daffodils",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x40cm 20x14.8''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 22,
    imgName: "img_22.jpg" 
  },
  {
    name: "Magnolias",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x40cm 20x14.8''",
    price: "Disclosed",
    sale: "Off Sale", 
    isSubImage: false,
    imageGroup: 23,
    imgName: "img_23.jpg" 
  },
  {
    name: "Japanese Magnolias",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x40cm 20x14.8''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 24,
    imgName: "img_24.jpg" 
  },
  {
    name: "Japanese Magnolias",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x40cm 20x14.8''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: true,
    imageGroup: 24,
    imgName: "img_24_1.jpg" 
  },{
    name: "Yellow Bouquet",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x40cm 20x14.8''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 25,
    imgName: "img_25.jpg" 
  },{
    name: "Red Roses",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20x14.8''",
    price: "£100",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 26,
    imgName: "img_26.jpg" 
  },
  {
    name: "Liliac Flori White & Purple",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x50cm  20x20''",
    price: "£120",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 27,
    imgName: "img_27.jpg" 
  },
  {
    name: "Liliac Flori Pink & Purple",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x50cm  20x20''",
    price: "£140",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 28,
    imgName: "img_28.jpg" 
  },
  {
    name: "Pink Tulips",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x50cm  20x20''",
    price: "£80",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 29,
    imgName: "img_29.jpg" 
  },
  {
    name: "Night Time Harbour",
    category: "Coastal",
    category2: "coastal",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x50cm  20x20''",
    price: "£100",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 30,
    imgName: "img_30.jpg" 
  },
  {
    name: "Moszna Castle",
    category: "Castles",
    category2: "castles",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 70x50cm 28x20''",
    price: "£120",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 31,
    imgName: "img_31.jpg" 
  },
  { 
    name: "Toscany Land",
    category: "Flowers",
    category2: "flowers",
    description: "Oil paiting on a stretched canvas - Handmade - Replica - 50x40cm 20x14.8''",
    price: "Disclosed",
    sale: "Off Sale",
    isSubImage: false,
    imageGroup: 32,
    imgName: "img_32.jpg" 
  },
  {
    name: "White Ship",
    category: "Coastal",
    category2: "coastal",
    description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20x14.8''",
    price: "£170",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 33,
    imgName: "img_33.jpg" 
  },
  {
    name: "Pink & Yellow Roses",
    category: "Flowers",
    category2: "flowers",
     description: "Oil paiting on a stretched canvas - Handmade - Original - 50x40cm 20.6x14.8''",
    price: "£59",
    sale: "Sold",
    isSubImage: false,
    imageGroup: 34,
    imgName: "img_34.jpg" 
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

// Sort the itemList based on sale status: On Sale first, then Sold, then Off Sale
const sortedItemList = itemList.sort((a, b) => {
  const saleOrder = { "On Sale": 1, "Sold": 2, "Off Sale": 3 };
  return saleOrder[a.sale] - saleOrder[b.sale];
});

for (let i = 0; i < numberOfItems; i++) {
  if (!sortedItemList[i].isSubImage) {
    const newItem = document.createElement("div");
    newItem.className = `item ${sortedItemList[i].category2} col-sm-6 col-md-4 col-lg-4 mb-4`;

    const imgSrc = `assets/img/${sortedItemList[i].imgName}`;

    newItem.innerHTML = `
      <div>
        <div class="price-tag-2">
          ${sortedItemList[i].sale}
        </div>
        <a data-fancybox="group-${sortedItemList[i].imageGroup}" data-caption="${sortedItemList[i].name}<br>${sortedItemList[i].category}<br>${sortedItemList[i].description}<br>Price: ${sortedItemList[i].price}" href="${imgSrc}" class="item-wrap fancybox rounded" style="box-shadow: 6px 6px 17px 0px #C0C0C0;">
          <div class="work-info">
            <h3>${sortedItemList[i].name}</h3>
            <span>${sortedItemList[i].category}</span>
          </div>
          <img class="img-fluid rounded" src="${imgSrc}">
          <div class="price-tag">
            ${sortedItemList[i].price}
          </div>
        </a>
      </div>
    `;

    if (subImageGroups[sortedItemList[i].imageGroup]) {
      for (const subImage of subImageGroups[sortedItemList[i].imageGroup]) {
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
