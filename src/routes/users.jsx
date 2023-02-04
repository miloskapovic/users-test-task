import React, { useState } from "react";
import { Button, Container, Form, InputGroup, Table } from "react-bootstrap";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import DeleteUserModal from "../components/deleteModal";
import { deleteUser, getUsers } from "../data/users";

export async function loader() {
  const users = await getUsers();
  return { users };
}

function Users() {
  const navigate = useNavigate();
  const { users } = useLoaderData();
  const [showUsers, setShowUsers] = useState(users);

  const searchUsers = (searchString) => {
    if (searchString === "") {
      setShowUsers(users);
    } else {
      setShowUsers(
        users.filter(
          (user) =>
            user.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
        )
      );
    }
  };

  return (
    <Container fluid className="d-flex flex-column justify-content-center">
      <h1 className="p-5 text-center font-weight-bold">Manage users</h1>
      <Form.Label>Search users</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control onChange={(e) => searchUsers(e.target.value)} />
        <InputGroup.Text>
          <i className="bi bi-search"></i>
        </InputGroup.Text>
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {showUsers.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                <Link to={`${user.id}`} relative="path">
                  {user.name || ""}
                </Link>
              </td>
              <td>{user.username || ""}</td>
              <td>{user.email}</td>
              <td>
                <Container>
                  <Link to={`${user.id}/edit`} relative="path">
                    <i className="bi bi-pen me-2 text-dark"></i>
                  </Link>
                  <DeleteUserModal
                    modalText={`Are you sure you want to delete ${user.name}!`}
                    handleDelete={() => deleteUser(user.id)}
                  />
                </Container>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button size="lg mt-5 w-25 m-auto" onClick={() => navigate("add")}>
        Add new user
      </Button>
    </Container>
  );
}

export default Users;
