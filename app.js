const items = [
  {
    img: "./assets/item-1.jpeg",
    name: "Buttermilk Pancakes",
    category: "breakfast",
    price: "$15.99",
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
  },
  {
    img: "./assets/item-2.jpeg",
    name: "Diner Double",
    category: "lunch",
    price: "$13.99",
    description:
      " vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats.",
  },
  {
    img: "./assets/item-3.jpeg",
    name: "Godzilla Milkshake",
    category: "shake",
    price: "$6.99",
    description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    img: "./assets/item-4.jpeg",
    name: "Country  Delight",
    category: "breakfast",
    price: "$20.99",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
  },
  {
    img: "./assets/item-5.jpeg",
    name: "Egg Attack",
    category: "lunch",
    price: "$22 .99",
    description:
      "Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up.",
  },
  {
    img: "./assets/item-6.jpeg",
    name: "Oreo Dream",
    category: "shake",
    price: "$18.99",
    description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.",
  },
  {
    img: "./assets/item-7.jpeg",
    name: "Bacon Overflow",
    category: "breakfast",
    price: "$8.99",
    description:
      "Icarry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    img: "./assets/item-8.jpeg",
    name: "American Classic",
    category: "lunch",
    price: "$12.99",
    description:
      "On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    img: "./assets/item-9.jpeg",
    name: "Quarantine Buddy",
    category: "shake",
    price: "$16.99",
    description:
      "Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
  {
    img: "./assets/item-10.jpeg",
    name: "Steak Dinner",
    category: "dinner",
    price: "$39.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis tortor ut nulla aliquet, at consequat mi venenatis.",
  },
];

const filtersContainer = document.querySelector(".filters-container");
const itemsContainer = document.querySelector(".items-container");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(items);
  displayMenuButtons();
});

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="food">
    <img src="${item.img}" alt="${item.name}">
    <header>
      <h3 class="title">${item.name}<h3>
      <h3 class="price">${item.price}<h3>
    </header>
    <p class="description">
      ${item.description}
      </p>
    </div>`;
  });

  displayMenu = displayMenu.join("");
  itemsContainer.innerHTML = displayMenu;
};

const displayMenuButtons = () => {
  const categories = items.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" id="${category}">
      ${category}
      </button>`;
    })
    .join("");

  filtersContainer.innerHTML = categoryBtns;
  const filterBtns = filtersContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.id;
      const menuCategory = items.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(items);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
};
