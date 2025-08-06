import React, { createContext, useContext, useState } from 'react';
import { Container, Card, Button, ListGroup, Badge } from 'react-bootstrap';

// Create context with a more descriptive name
const UserProfileContext = createContext();

function UserProfileProvider() {
  const [user, setUser] = useState("Jesse Hall");
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <UserProfileContext.Provider value={{ user, theme }}>
      <Container fluid className={`p-4 bg-${theme} text-${theme === "dark" ? "light" : "dark"}`}>
        <Card className={`mb-4 border-${theme === "dark" ? "light" : "dark"}`}>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <h2>{`Hello ${user}!`}</h2>
            <Button variant={theme === "dark" ? "light" : "dark"} onClick={toggleTheme}>
              Toggle {theme === "dark" ? "Light" : "Dark"} Mode
            </Button>
          </Card.Header>
          <Card.Body>
            <NavigationMenu />
          </Card.Body>
        </Card>
      </Container>
    </UserProfileContext.Provider>
  );
}

function NavigationMenu() {
  return (
    <Card>
      <Card.Header>Application Navigation</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><ProfileSection /></ListGroup.Item>
        <ListGroup.Item><AccountSettingsSection /></ListGroup.Item>
        <ListGroup.Item><DashboardSection /></ListGroup.Item>
        <ListGroup.Item><UserDetailsSection /></ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

function ProfileSection() {
  return (
    <div>
      <h4><Badge bg="info">Profile Section</Badge></h4>
      <AccountInfo />
    </div>
  );
}

function AccountInfo() {
  return (
    <div className="mt-2">
      <h5>Account Information</h5>
      <SecuritySettings />
    </div>
  );
}

function SecuritySettings() {
  return (
    <div className="mt-2">
      <h6>Security Settings</h6>
      <UserPreferences />
    </div>
  );
}

function UserPreferences() {
  const { user, theme } = useContext(UserProfileContext);
  
  return (
    <Card className={`mt-2 bg-${theme}`}>
      <Card.Body>
        <Card.Title>User Preferences</Card.Title>
        <Card.Text>
          Current user: <strong>{user}</strong><br />
          Theme: <strong>{theme}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function AccountSettingsSection() {
  return <h4><Badge bg="secondary">Account Settings Section</Badge></h4>;
}

function DashboardSection() {
  return <h4><Badge bg="success">Dashboard Section</Badge></h4>;
}

function UserDetailsSection() {
  const { user } = useContext(UserProfileContext);
  
  return (
    <div>
      <h4><Badge bg="warning">User Details Section</Badge></h4>
      <Card className="mt-2">
        <Card.Body>
          <Card.Title>Final User Details</Card.Title>
          <Card.Text className="display-6">
            Welcome back, <span className="text-primary">{user}</span>!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserProfileProvider;