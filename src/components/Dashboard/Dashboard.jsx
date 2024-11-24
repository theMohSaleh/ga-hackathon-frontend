// src/components/Dashboard.jsx
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Dashboard = ({ user }) => {
  return (
    <Container className="mt-3">
      <h1>OASIS MART</h1>
      <p>
        View a list of all the products <Link to={'/products'}>here</Link>.
      </p>
    </Container>
  );
};

export default Dashboard;