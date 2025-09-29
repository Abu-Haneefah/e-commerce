import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import Reviews from "@/components/Reviews";
import { Suspense } from "react";

const SinglePage = () => {
  // MOCK THE PRODUCT DATA
  const product = {
    _id: "e5012574-d4dd-4fcf-84de-c84024479998",
    name: "Mock Product",
    description:
      "This is a mocked product description to demonstrate the component without a backend. It includes a variety of details like materials, fit, and care instructions to show how the component renders.",
    price: {
      price: 50.0,
      discountedPrice: 40.0,
    },
    media: {
      items: [
        {
          image: {
            url: "https://images.pexels.com/photos/1037997/pexels-photo-1037997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        },
        {
          image: {
            url: "https://images.pexels.com/photos/2083163/pexels-photo-2083163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        },
      ],
    },
    variants: [],
    productOptions: [],
    stock: { quantity: 10 },
    additionalInfoSections: [
      {
        title: "Product Details",
        description: "Made from 100% organic cotton. Machine washable.",
      },
      {
        title: "Shipping & Returns",
        description:
          "Free shipping on orders over $50. Returns accepted within 30 days.",
      },
    ],
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">${product.price?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              ${product.price?.discountedPrice}
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id!}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">User Reviews</h1>
        <Suspense fallback="Loading...">
          {/* Since we don't have a backend, the Reviews component will likely not work. 
              You may need to mock it as well if it's a server component. */}
          <Reviews productId={product._id!} />
        </Suspense>
      </div>
    </div>
  );
};

export default SinglePage;
