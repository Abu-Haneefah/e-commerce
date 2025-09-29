import Image from "next/image";
import Link from "next/link";
import Pagination from "./Pagination";
import { mockProducts } from "@/lib/data";

// MOCK THE PRODUCT DATA

interface ProductListProps {
  categoryId: string;
  searchParams: any;
  limit: number;
}

const ProductList: React.FC<ProductListProps> = ({
  categoryId,
  searchParams,
}) => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {mockProducts.items.map((product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html:
                  product.additionalInfoSections.find(
                    (section) => section.title === "shortDesc"
                  )?.description || "",
              }}
            ></div>
          )}
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
      <Pagination
        currentPage={mockProducts.currentPage}
        hasPrev={mockProducts.hasPrev()}
        hasNext={mockProducts.hasNext()}
      />
    </div>
  );
};

export default ProductList;
