import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import GoHomeButton from "../components/goHomeButton";
import UserForm from "../components/userForm";
import { addUser } from "../data/users";

function AddUser() {
  const navigate = useNavigate();
  const handleSubmit = async (userData) => {
    await addUser(userData);
    navigate("/");
  };
  return (
    <Container fluid>
      <GoHomeButton />
      <Container className="text-center">
        <h3 className="p-5">Add new user</h3>
        <UserForm onSubmit={handleSubmit} />
      </Container>
    </Container>
  );
}

export default AddUser;
