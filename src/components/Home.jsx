import React, { useState, useEffect } from "react";
import Card from "./Card";
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from "./CardSkeleton";
import Skeleton from "react-loading-skeleton";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-white text-center font-bold text-3xl mb-4">Users</h1>
      <div className="grid grid-cols-2">        
        {loading && <CardSkeleton cards={8}/> }
        
        {users.map((user) => (
          <Card user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
