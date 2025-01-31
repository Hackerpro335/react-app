import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const FetchUsers = async () => {
         try {
          const response = await axiosInstance.get("/users");
          setUsers(response.data);   
         }   catch (error) {
            console.error('error',error);
        }finally {
            setLoading(false);
        }
        };

        FetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
     <div>
        <h1>Users</h1>
        <ul> 
            {users.map((user) => (
                <li key={user.id}>{user.name} ({user.email})
                </li>
            ))}
        </ul>
     </div>   
    );
};

export default Users;