import React from 'react';

export default class Breadcrumbs extends React.Component {
  render() {
    return (
      <section className="meli-breadcrum-list">
        {this.props.categories.map(category => <span key={category.id} className="meli-breadcrum-list-item">{category.name}</span>)}
      </section>
    );
  }
}