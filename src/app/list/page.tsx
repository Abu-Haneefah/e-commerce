import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = ({ searchParams }: { searchParams: any }) => {
  // MOCK THE CATEGORY DATA (This part is fine)
  const cat = {
    collection: {
      _id: "00000000-000000-000000-000000000001",
      name: "All Products",
    },
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        {/* ... (campaign content) ... */}
      </div>
      {/* FILTER */}
      {/* ADD THE SUSPENSE BOUNDARY HERE TO FIX THE BUILD ERROR */}
      <Suspense
        fallback={
          <div className="h-12 w-full animate-pulse bg-gray-200 rounded-md" />
        }
      >
        <Filter />
      </Suspense>
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">
        {cat?.collection?.name} For You!
      </h1>
      <Suspense fallback={<Skeleton />}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
          limit={0}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
