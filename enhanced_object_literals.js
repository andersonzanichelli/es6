function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce(( total, book ) => total + book.price, 0 );
    },
    priceForTitle(title) {
      return this.inventory.find( book => book.title === title ).price;
    }
  };
}

const inventory = [
  { title: 'Sum of all fears', price: 30 },
  { title: 'Neuromancer', price: 35 }
];

const bookShop = createBookShop(inventory);
bookShop.inventoryValue();
bookShop.priceForTitle('Neuromancer');
