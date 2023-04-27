import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_Products = [
  {
    id: "1",
    price: 7,
    title: "Slider Shoo",
    description: "The first product i made ",
  },
  {
    id: "2",
    price: 9,
    title: "Book Reader",
    description: "The second product i made ",
  },
  {
    id: "3",
    price: 10,
    title: "Sound Box",
    description: "The third product i made ",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
