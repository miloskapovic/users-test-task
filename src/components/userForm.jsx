import React from "react";
import { Button, Form } from "react-bootstrap";
import BasicInput from "./basicInput";

function UserForm({ user, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return;
    }
    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log("jadi parseData", formDataObj);

    const parseData = {
      name: formDataObj.name,
      username: formDataObj.username,
      email: formDataObj.email,
      website: formDataObj.website,
      phone: formDataObj.phone,
      address: {
        city: formDataObj.city,
        street: formDataObj.street,
        suite: formDataObj.suite,
        zipcode: formDataObj.zipcode,
        geo: {
          lng: formDataObj.lng,
          lat: formDataObj.lat,
        },
      },
      company: {
        name: formDataObj.companyName,
        bs: formDataObj.bs,
        catchPhrase: formDataObj.companycatchPhrase,
      },
    };
    onSubmit(parseData);
  };
  return (
    <Form className="text-start row" onSubmit={handleSubmit}>
      <BasicInput
        label="Name"
        name="name"
        type="text"
        placeholder="Enter users name"
        defaultValue={user && user.name}
      />
      <BasicInput
        label="Username"
        name="username"
        type="text"
        placeholder="Enter users username"
        defaultValue={user && user.username}
      />
      <BasicInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter users email"
        defaultValue={user && user.email}
      />
      <BasicInput
        label="Website"
        name="website"
        type="text"
        placeholder="Enter users website"
        defaultValue={user && user.website}
      />
      <BasicInput
        label="Phone"
        name="phone"
        type="text"
        placeholder="Enter users phone"
        defaultValue={user && user.phone}
      />
      <BasicInput
        label="City"
        name="city"
        type="text"
        placeholder="Enter users city"
        defaultValue={user && user.address && user.address.city}
      />
      <BasicInput
        label="Street"
        name="street"
        type="text"
        placeholder="Enter users street"
        defaultValue={user && user.address && user.address.street}
      />
      <BasicInput
        label="Suite"
        name="suite"
        type="text"
        placeholder="Enter users suite"
        defaultValue={user && user.address && user.address.suite}
      />
      <BasicInput
        label="Zip code"
        name="zipcode"
        type="text"
        placeholder="Enter users zipcode"
        defaultValue={user && user.address && user.address.zipcode}
      />
      <BasicInput
        label="Longitude"
        name="lng"
        type="number"
        placeholder="Enter users longitude"
        defaultValue={
          user && user.address && user.address.geo && user.address.geo.lng
        }
      />
      <BasicInput
        label="Latitude"
        name="lat"
        type="number"
        placeholder="Enter users latitude"
        defaultValue={
          user && user.address && user.address.geo && user.address.geo.lat
        }
      />
      <BasicInput
        label="Company name"
        name="companyName"
        type="text"
        placeholder="Enter users company name"
        defaultValue={user && user.company && user.company.name}
      />
      <BasicInput
        label="BS"
        name="bs"
        type="text"
        placeholder="Enter users company bs"
        defaultValue={user && user.company && user.company.bs}
      />
      <BasicInput
        label="Catch Phrase"
        name="catchPhrase"
        type="text"
        placeholder="Enter users company catch phrase"
        defaultValue={user && user.company && user.company.catchPhrase}
      />
      <Button size="lg mt-5 w-25 m-auto" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UserForm;
