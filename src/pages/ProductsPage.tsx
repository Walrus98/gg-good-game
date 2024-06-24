import ProductFilter from "../components/ProductFilter";
import ProductItemGrid from "../components/ProductItemGrid";
import DefaultLayout from "../layouts/default";

export default function ProductsPage() {
  return (
    <DefaultLayout>
      <section className="flex justify-center mt-14">
        <div className="flex max-w-screen-xl gap-4">
          <ProductFilter />
          <ProductItemGrid />
        </div>
      </section>
    </DefaultLayout>
  );
}
