import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FaPlus } from "react-icons/fa6";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
export default function Users() {
 const [users, setUsers] = useState<any[]>([]);
 const [role, setRole] = useState("");
  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };
  const [name, setName] = useState("");
  const createUser = async () => {
    // Determine the next loginId number
    const lastUser = users[users.length - 1]; // Get the last user added
    const lastLoginId = lastUser ? lastUser.loginId : "001234560S"; // Default starting loginId if no users
    const nextLoginIdNumber = parseInt(lastLoginId.slice(0, -1)) + 1; // Remove the last character ('S'), increment the number
    const nextLoginId = nextLoginIdNumber.toString().padStart(9, '0') + 'S'; // Pad with zeros to ensure 9 digits and append 'S'

    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      dob: "2000-01-01", 
      role: "STUDENT",
      loginId: nextLoginId, 
      section: "S101",
      lastActivity: "2024-12-01",  
      totalActivity: "00:00:00", 
    });
    setUsers([...users, user]);
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

 const { uid } = useParams();
 const fetchUsers = async () => {
   const users = await client.findAllUsers();
   setUsers(users);
 };
 useEffect(() => {
   fetchUsers();
 }, [uid]);
 return (
   <div>
    <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        Users
      </button>
     <h3>Users</h3>
     <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
             className="form-control float-start w-25 me-2 wd-filter-by-name" />
     <select value={role} onChange={(e) =>filterUsersByRole(e.target.value)}
              className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>    <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option> <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <PeopleTable users={users} />
   </div>
);}
