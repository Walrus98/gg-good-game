import ProductSlider from "./ProductSlider";

export default function ProductItemSection({ title }: { title: string }) {
  return (
    <section className="flex justify-center mt-8">
      <div className="flex flex-col max-w-screen-xl gap-2">
        <h1 className="tracking-tight font-semibold text-3xl">{title}</h1>
        <ProductSlider />
      </div>
    </section>
  );
}
