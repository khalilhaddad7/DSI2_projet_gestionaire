import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/users/getuser/${id}`);
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchData();
  }, [id]);

  const updateUser = async (e) => {
    try {
      await axios.put(`http://localhost:8800/api/users/updateuser/${id}`, {
        name,
        email,
        password
      });
      console.log('User updated successfully');
      setUser({ ...user, name, email, password });
      window.location.reload(false);
        } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <form>
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder={user.name} />
      <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder={user.email} />
      <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder={user.password} />
      <button type="button" onClick={updateUser}>
        Update
      </button>
    </form>
  );
};

export default Update;
