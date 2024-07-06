import logo from './logo.svg';
import './App.css';
import React from 'react';

import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const firstName = "Youssef DINE";
  return (
    <div style={{ margin: '20px' }}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Image />
        <Card.Title><Name /></Card.Title>
        <Card.Text><Description /></Card.Text>
        <Card.Text><Price /></Card.Text>
      </Card.Body>
    </Card>
    <p>Hello, {firstName || "there"}!</p>
    {firstName && <img src="https://via.placeholder.com/100" alt="Profile" />}
  </div>
  );
}

export default App;
