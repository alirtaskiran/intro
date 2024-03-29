import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "react-bootstrap";

export default class App extends Component {
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  state = { currentCategory: "" };
  render() {
    let productInfo = { title: "Product List", baskaBirSey: "Baska bir sey" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
