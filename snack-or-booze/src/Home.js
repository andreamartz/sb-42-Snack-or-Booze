import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./Home.css";

function Home({ snacks, drinks }) {
  return (
    <section className="Home col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold h3 Home-CardTitle">
              Welcome to Silicon Valley's premier dive cafe!
          </CardTitle>
          <CardSubtitle className="font-weight-bold h5">
              We offer {snacks.length} types of snacks and {drinks.length} types of drinks.
            </CardSubtitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
