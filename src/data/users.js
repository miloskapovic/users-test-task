export const getUsers = async () => {
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  return data;
};

export const getUser = async (id) => {
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  ).json();

  return data;
};

export const addUser = async (newUser) => {
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      method: "POST",
      body: JSON.stringify(newUser),
    })
  ).json();

  return data;
};

export const editUser = async (id, changedUser) => {
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      method: "PUT",
      body: JSON.stringify(changedUser),
    })
  ).json();

  return data;
};

export const deleteUser = async (id) => {
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
  ).json();

  return data;
};
