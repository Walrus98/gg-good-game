import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Product from "./Product";

export default function ProductSection() {
    return (
        <section className="flex justify-center">
            <div className="max-w-screen-xl">
                <div className="my-4 py-2">
                    <Breadcrumbs size="lg">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Shoes Category</BreadcrumbItem>
                        <BreadcrumbItem>Training Shoes</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <Product />
            </div>
        </section>
    );
}




