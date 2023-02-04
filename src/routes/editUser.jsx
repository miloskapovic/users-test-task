import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import GoHomeButton from "../components/goHomeButton";
import UserForm from "../components/userForm";
import { editUser, getUser } from "../data/users";

export async function loader({ params }) {
  const user = await getUser(params.userId);
  return user;
}

function EditUser() {
  const user = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = async (userForEdit) => {
    await editUser(user.id, userForEdit);
    navigate("/");
  };
  return (
    <Container fluid>
      <GoHomeButton />
      <Container className="text-center">
        <h3 className="p-5">Edit user</h3>
        <UserForm user={user} onSubmit={handleSubmit} />
      </Container>
    </Container>
  );
}

export default EditUser;
