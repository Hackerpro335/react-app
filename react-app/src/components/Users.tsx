import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

interface User {
    id?: number;
    name?: string;
    email?: string;
}

interface Users {
    users: User[]
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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