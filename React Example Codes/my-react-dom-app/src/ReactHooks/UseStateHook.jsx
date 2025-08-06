import React, { useState } from "react";
import { Container, Card, Button, Badge } from "react-bootstrap";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  const colors = ["red", "blue", "green", "black", "silver"];

  return (
    <Container className="mt-5">
      <Card style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Card.Header as="h5" className="text-center">
          My {car.brand} <Badge bg="secondary">Vintage</Badge>
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center">{car.model}</Card.Title>
          <Card.Text className="text-center">
            <span
              style={{
                display: "inline-block",
                width: "15px",
                height: "15px",
                backgroundColor: car.color,
                borderRadius: "50%",
                marginRight: "5px",
              }}
            ></span>
            It is a <strong>{car.color}</strong> {car.model} from{" "}
            <strong>{car.year}</strong>.
          </Card.Text>

          <div className="d-flex justify-content-center gap-2">
            {colors.map((color) => (
              <Button
                key={color}
                variant="outline-primary"
                style={{
                  backgroundColor: color === car.color ? color : "",
                  borderColor: color,
                }}
                onClick={() => setCar((prev) => ({ ...prev, color }))}
              >
                {color}
              </Button>
            ))}
          </div>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          Classic Car Collection
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Car;
