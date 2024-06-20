import { Autocomplete, AutocompleteItem, Pagination } from "@nextui-org/react";
import ProductItem from "./ProductItem";

export default function ProductItemGrid() {

  const filters = [
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "low-to-high" },
    { label: "Price: High to Low", value: "high-to-low" },
    { label: "Top Rated", value: "top-rated" },
    { label: "Most Popular", value: "most-popular" },
  ];

  return (
    <div className="flex w-full max-w-7xl flex-col">

      <div className="rounded-medium mb-4 p-2 bg-default-50">
        <div className="flex items-center justify-between gap-2">

          {/* TODO: fix margin left and right */}
          <div className="ml-4 items-center gap-1 md:flex">
            <h2 className="text-medium font-medium">Shoes</h2>
            <span className="text-medium text-default-400">(1240)</span>
          </div>

          <Autocomplete
            variant="bordered"
            label="Sort by"
            labelPlacement="outside-left"
            defaultItems={filters}
            defaultSelectedKey="newest"
            className="max-w-xs"
          >
            {filters.map((filter) => (
              <AutocompleteItem key={filter.value} value={filter.value}>
                {filter.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        </div>


      </div>

      {/* <div className="relative z-20 flex flex-col gap-2 rounded-medium bg-default-50 px-4 pb-3 pt-2 md:pt-3">
                <div className="flex items-center justify-between gap-2 ">
                    <div className="flex flex-row gap-2"></div>
                    <div className="hidden items-center gap-1 md:flex">
                        <h2 className="text-medium font-medium">Shoes</h2>
                        <span className="text-small text-default-400">(1240)</span>
                    </div>

                </div>
            </div> */}


      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>

      <div className="flex justify-center mt-6">
        <Pagination total={10} initialPage={1} />
      </div>

    </div>
  );
}
