import React , {useState , useEffect} from 'react'
import Navbar from '../../components/navbarE/NabbarE'
import "./homeEtudiants.css"
import axios from 'axios'
const HomeEtudiants = () => {
  const [emploiList, setEmploiList] = useState([]);

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
    <>
    <Navbar />
    <div className='container'>
        <img src={"https://isetke.rnu.tn/useruploads/images/isetke1.jpg"} alt=""/>
        <h2>Accueil Nouveautés Enseignants Galerie photos Liens utiles Stages et PFE Offres d'emplois Recrutement Liste de débouchés Contact. © 2017 ISET KEBILI.</h2>
    
    </div>
    <h1>les emplois</h1>
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

    </>
    
  )
}

export default HomeEtudiants