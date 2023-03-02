import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  console.log(useParams(user.number));

  const fetchUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((res) => setUser(res));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <p>{user.username}</p>
      <p>{user?.address?.city}</p>
    </div>
  );
};

export default UserPage;
