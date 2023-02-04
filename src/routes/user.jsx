import React from "react";
import { Card, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import GoHomeButton from "../components/goHomeButton";
import { getUser } from "../data/users";

export async function loader({ params }) {
  const user = await getUser(params.userId);
  return user;
}

function User() {
  const user = useLoaderData();
  console.log("component user", user);
  return (
    <Container fluid>
      <GoHomeButton />
      <Container className="text-center p-5">
        <h3>
          {user.id}. {user.name}
        </h3>
      </Container>
      <Container className="d-flex flex-wrap">
        <Card style={{ width: "auto" }} className="mt-0 m-3 p-2">
          <Card.Body>
            <Card.Title>User Info</Card.Title>
            <Card.Text>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Website: {user.website}</p>
              <p>Phone: {user.phone}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "auto" }} className="mt-0 m-3 p-2">
          <Card.Body>
            <Card.Title>Address</Card.Title>
            <Card.Text>
              <p>City: {user.address.city}</p>
              <p>Street: {user.address.street}</p>
              <p>Suite: {user.address.suite}</p>
              <p>Zip Code: {user.address.zipcode}</p>
              <p>Longitude: {user.address.geo.lng}</p>
              <p>Latitude: {user.address.geo.lat}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "auto" }} className="mt-0 m-3 p-2">
          <Card.Body>
            <Card.Title>Company</Card.Title>
            <Card.Text>
              <p>Name: {user.company.name}</p>
              <p>Catch Phrase: {user.company.catchPhrase}</p>
              <p>BS: {user.company.bs}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default User;
