import { Card } from "react-bootstrap";

function Home() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <Card className="shadow">
          <Card.Body>
            <Card.Title className="text-center">
              Welcome to Our Website
            </Card.Title>
            <Card.Text>
              This is the home page of our amazing React application with
              Bootstrap styling. Navigate using the menu above to explore
              different sections.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
