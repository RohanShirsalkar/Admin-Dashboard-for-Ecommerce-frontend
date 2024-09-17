import { useState, useEffect } from "react";
import { getAllProducts } from "../services/product_service";
import { Button } from "@/components/ui/button";
import MultiselectComboBox from "@/components/common/MultiselectComboBox";
import { faker } from "@faker-js/faker";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// {
//   userId: faker.string.uuid(),
//   username: faker.internet.userName(),
//   email: faker.internet.email(),
//   avatar: faker.image.avatar(),
//   password: faker.internet.password(),
//   birthdate: faker.date.birthdate(),
//   registeredAt: faker.date.past(),
// }

const CreatOrderPage = () => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({
    products: [],
    address: {
      street: "",
      city: "",
      state: "",
      pinCode: "",
    },
    paymentMethod: "credit-card",
  });

  useEffect(() => {
    const makeHttpRequest = async () => {
      try {
        const { products, count } = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    makeHttpRequest();
  }, []);

  const handleCreate = async () => {
    console.log(order);
    // const response = await
  };

  const handleCreateAddress = () => {
    console.log(faker.animal.bear());
    setOrder({
      ...order,
      address: {
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        pinCode: faker.location.zipCode(),
      },
    });
  };

  return (
    <div className="px-8 py-4 w-full flex gap-20">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="">Products </h1>
          <MultiselectComboBox
            onChange={(selectedProduct) =>
              setOrder({ ...order, products: selectedProduct })
            }
            value={order.products}
            options={products.map((product) => ({
              label: product.title,
              value: product.id,
            }))}
          />
        </div>
        <div className="space-y-2">
          <h1>Address</h1>
          <Button onClick={handleCreateAddress}>Create Address</Button>
        </div>
        {/* <div className="space-y-4">
          <h1>Paymnet Method</h1>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                onSelect={(e) => console.log(e)}
                value="default"
                id="r1"
              />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </div> */}
        <Button onClick={handleCreate}>Create Order</Button>
      </div>
      <div className="space-y-4">
        <div>
          <ul>
            {order.products?.map((item, index) => (
              <li>
                {index + 1}. {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1> {order.address.street} </h1>
          <h1> {order.address.city} </h1>
          <h1> {order.address.street} </h1>
          <h1> {order.address.pinCode} </h1>
        </div>
      </div>
    </div>
  );
};

export default CreatOrderPage;
