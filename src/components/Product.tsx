import { Button } from "@nextui-org/react";
import { CartIcon } from "../assets/CartIcon";


export default function Product() {
    return (
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div>
                <div className="rounded-large">
                    <img className="rounded-large h-full w-full" src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/1.jpeg" />
                </div>
            </div>

            <div className="flex flex-col">
                <h1 className="text-2xl font-bold tracking-tight">Nike Air Max 270</h1>
                <p className="text-xl font-medium tracking-tight">$80.97</p>
                <div className="mt-4">
                    <p className="text-medium text-default-500">
                        The Nike Air Max 270 delivers an even more adaptive fit than before. Stretch material in the upper moves with your foot,
                        while the tri-star outsole pattern adjusts to your every step for a ride that delivers support and flexibility where you need it.
                    </p>
                </div>
                <div className="mt-2">
                    <Button className="h-12 font-medium text-medium w-full min-w-24" color="primary" startContent={<CartIcon />}>
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
}
