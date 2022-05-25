import styles from './Catalogue.module.css';
import Card from '../UI/Card';
import Product from './Product';

const DUMMY_ITEMS = [
  {
    id: 'm1',
    name: 'PENFOLDS St Henri Shiraz 2017',
    description: 'Australia, 750ml. Great with BBQ pork ribs!',
    price: 119.00,
  },
  {
    id: 'm2',
    name: 'CASTELLO Blue Cheese 100g',
    description: 'Extra creamy Danish Blue. Enjoy the velvety creaminess spread over bread and crackers.',
    price: 6.50,
  },
  {
    id: 'm3',
    name: 'JOHNSONVILLE Smoked Sausages with Garlic',
    description: 'Made with 100% pork from the USA. Fully cooked and ready to eat!',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'NATUREL Extra Virgin Olive Oil 500ml',
    description: 'Infused with a touch of fig leaves for a sweet, smooth taste with gentle hints of spiciness.',
    price: 7.60,
  },
];

function Catalogue() {
  const catalogue = DUMMY_ITEMS.map( item => (
    <Product 
      key={item.id} 
      id={item.id}
      name={item.name} 
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <section className={styles.products}>
      <Card>
        <ul>{catalogue}</ul>
      </Card>
    </section>
  );
}

export default Catalogue