import React, { useState , useEffect } from 'react';
import axios from 'axios';
import "./homeProf.css";


const HomeProf = () => {
    const [desc, setDesc] = useState('');
    const [photoEmploi, setPhotoEmploi] = useState(null);
    const [emploiList, setEmploiList] = useState([]);
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const formData = new FormData();
        formData.append('desc', desc);
        formData.append('photoEmploi', photoEmploi);
  
        await axios.post('http://localhost:8800/api/emploi', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('c bon');
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8800/api/emploi');
            setEmploiList(response.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
  
    return (
        <div className="container">
            <h1>Ajouter Emploi</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              id="desc"
              className="form-control"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="photoEmploi">Photo</label>
            <input
              type="file"
              id="photoEmploi"
              className="form-control"
              onChange={(e) => setPhotoEmploi(e.target.files[0])}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    
        <table className="emploi-table" style={{ borderCollapse: 'collapse', width: '100%' , justifyContent : 'center' }}>
      <thead>
        <tr>
          <th style={{ padding: '10px', backgroundColor: '#f2f2f2', borderBottom: '1px solid #ddd' }}>Description</th>
          <th style={{ padding: '10px', backgroundColor: '#f2f2f2', borderBottom: '1px solid #ddd' }}>Photo</th>
        </tr>
      </thead>
      <tbody style={{textAlign: 'center'}}>
        {emploiList.map((emploi) => (
          <tr key={emploi._id}>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{emploi.desc}</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <img src={emploi.photoEmploi.url} alt="Emploi" className="emploi-photo" style={{ width: '100px', height: '100px' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>


      </div>
    );
  };
  
  export default HomeProf;
  