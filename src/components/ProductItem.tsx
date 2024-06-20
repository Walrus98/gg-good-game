import { Card, CardBody, Image, Button } from "@nextui-org/react";

export default function ProductItem() {
  return (
    <Card className="py-2 max-w-72">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl max-h-96"
          src="https://mangayo.it/37325-home_default/eijiro-kirishima-my-hero-academia-funko-pop-animation-1518.jpg"
          isZoomed
          width={270}
        />
      </CardBody>
      <div className="flex flex-col gap-4 p-4 px-4">
        <div className="flex justify-between font-medium">
          <h3 className="text-medium font-medium text-default-700">Training shoes</h3>
          <p className="text-medium font-medium text-default-500">$49.99</p>
        </div>
        <Button className="font-medium" color="primary">
          Add to cart
        </Button>
      </div>
    </Card>
  );
}
