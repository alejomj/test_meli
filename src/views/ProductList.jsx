import React from 'react';
import ProductListItem from './ProductListItem.jsx';
import Breadcrumbs from './Breadcrums.jsx';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], };
  }

  componentDidMount() {
    this.loadProductsFromServer();
  }

  loadProductsFromServer = async () => {
    const queryParam = document.location.search.substring(3);
    const req = await fetch(`//localhost:3001/api/items?q=${queryParam}`);
    const res = await req.json();
    this.setState({
        items: res.items,
        categories: res.categories,
    });
  }

  render() {
      return (
        <section>
            {this.state.categories ? (
            <Breadcrumbs
              categories={this.state.categories}
            />
            ) : ''}
          <section className="item-results">
            {this.state.items.map(item => (
              <ProductListItem key={item.id} item={item} />
            ))}
          </section>
        </section>
      );
  }
}
