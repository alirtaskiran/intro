import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <h3>{this.state.counter}</h3>
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          {this.state.categories.map((category) => (
            <ListGroupItem
            onClick={() => this.props.changeCategory(category)}
            key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
