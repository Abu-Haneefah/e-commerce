// REPLACE DYNAMIC DATA WITH MOCK DATA
export const mockedCategories = [
  {
    _id: "1",
    slug: "new-arrivals",
    name: "New Arrivals",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      },
    },
  },
  {
    _id: "2",
    slug: "sale",
    name: "Sale",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/1938334/pexels-photo-1938334.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      },
    },
  },
  {
    _id: "3",
    slug: "men",
    name: "Men",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      },
    },
  },
  {
    _id: "4",
    slug: "women",
    name: "Women",
    media: {
      mainMedia: {
        image: {
          url: "https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        },
      },
    },
  },
];

export const mockProducts = {
  items: [
    {
      _id: "1",
      slug: "classic-tshirt",
      name: "Classic T-Shirt",
      price: { price: 25.0 },
      media: {
        mainMedia: {
          image: {
            url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
          },
        },
        items: [
          {
            image: {
              url: "https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            },
          },
        ],
      },
      additionalInfoSections: [
        {
          title: "shortDesc",
          description: "<p>A comfortable and stylish t-shirt.</p>",
        },
      ],
    },
    {
      _id: "2",
      slug: "denim-jacket",
      name: "Denim Jacket",
      price: { price: 89.99 },
      media: {
        mainMedia: {
          image: {
            url: "https://images.pexels.com/photos/1039958/pexels-photo-1039958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        },
        items: [
          {
            image: {
              url: "https://images.pexels.com/photos/1040428/pexels-photo-1040428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
          },
        ],
      },
      additionalInfoSections: [
        {
          title: "shortDesc",
          description: "<p>The perfect jacket for any occasion.</p>",
        },
      ],
    },
    {
      _id: "3",
      slug: "hoodie-black",
      name: "Black Hoodie",
      price: { price: 55.0 },
      media: {
        mainMedia: {
          image: {
            url: "https://images.pexels.com/photos/1038006/pexels-photo-1038006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        },
        items: [
          {
            image: {
              url: "https://images.pexels.com/photos/1040428/pexels-photo-1040428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
          },
        ],
      },
      additionalInfoSections: [
        {
          title: "shortDesc",
          description: "<p>Stay warm and stylish with this hoodie.</p>",
        },
      ],
    },
    {
      _id: "4",
      slug: "athletic-shorts",
      name: "Athletic Shorts",
      price: { price: 30.0 },
      media: {
        mainMedia: {
          image: {
            url: "https://images.pexels.com/photos/1039967/pexels-photo-1039967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        },
        items: [
          {
            image: {
              url: "https://images.pexels.com/photos/2083163/pexels-photo-2083163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
          },
        ],
      },
      additionalInfoSections: [
        {
          title: "shortDesc",
          description: "<p>Comfortable shorts for all your activities.</p>",
        },
      ],
    },
    {
      _id: "5",
      slug: "sport-joggers",
      name: "Sport Joggers",
      price: { price: 45.5 },
      media: {
        mainMedia: {
          image: {
            url: "https://images.pexels.com/photos/2083163/pexels-photo-2083163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        },
        items: [
          {
            image: {
              url: "https://images.pexels.com/photos/1039967/pexels-photo-1039967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
          },
        ],
      },
      additionalInfoSections: [
        {
          title: "shortDesc",
          description: "<p>Soft and flexible for sports and leisure.</p>",
        },
      ],
    },
    {
      _id: "6",
      slug: "basic-sweatshirt",
      name: "Basic Sweatshirt",
      price: { price: 40.0 },
      media: {
        mainMedia: {
          image: {
            url: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        },
        items: [
          {
            image: {
              url: "https://images.pexels.com/photos/1037997/pexels-photo-1037997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
          },
        ],
      },
      additionalInfoSections: [
        {
          title: "shortDesc",
          description: "<p>A classic for any wardrobe.</p>",
        },
      ],
    },
    {
      _id: "7",
      slug: "leather-sneakers",
      name: "Leather Sneakers",
      price: { price: 120.0 },
      media: {
        mainMedia: {
          image: {
            url: "https://images.pexels.com/photos/1040428/pexels-photo-1040428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        },
        items: [
          {
            image: {
              url: "https://images.pexels.com/photos/1039958/pexels-photo-1039958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
          },
        ],
      },
      additionalInfoSections: [
        {
          title: "shortDesc",
          description: "<p>Durable and comfortable for everyday wear.</p>",
        },
      ],
    },
    {
      _id: "8",
      slug: "printed-dress",
      name: "Printed Dress",
      price: { price: 75.0 },
      media: {
        mainMedia: {
          image: {
            url: "https://images.pexels.com/photos/1038006/pexels-photo-1038006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        },
        items: [
          {
            image: {
              url: "https://images.pexels.com/photos/2083163/pexels-photo-2083163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
          },
        ],
      },
      additionalInfoSections: [
        {
          title: "shortDesc",
          description: "<p>A beautiful dress with a unique pattern.</p>",
        },
      ],
    },
  ],
  currentPage: 1,
  hasNext: () => true,
  hasPrev: () => false,
};
