import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { Product } from '../hooks/use-products'; // Assicurati di importare correttamente l'interfaccia Product

export default function ProductItem({ product }: { product: Product }) {
  return (
    <Card className="py-2 max-w-72">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl max-h-96"
          src={product.image}
          isZoomed
          width={270}
        />
      </CardBody>
      <div className="flex flex-col gap-4 p-4 px-4">
        <div className="flex justify-between font-medium">
          <h3 className="text-medium font-medium text-default-700">{product.name.length > 24 ? product.name.substring(0, 22) + '...' : product.name}</h3>
          <p className="text-medium font-medium text-default-500">{product.price}€</p>
        </div>
        <Button className="font-medium" color="primary">
          Add to cart
        </Button>
      </div>
    </Card>
  );
}
