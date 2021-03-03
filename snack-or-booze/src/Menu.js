/**
 * Menu component:
 * Displays a listing of the menu items in a given category (i.e., snacks or drinks)
 * 
 * Props: 
 * State: 
 * 
 * Line 39: need to use either useParams or a computed property for 'items'
 */

import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Menu({ items, itemType }) {  
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Menu
          </CardTitle>
          <CardText>
            Checkout our menu of {itemType}!
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${itemType}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
