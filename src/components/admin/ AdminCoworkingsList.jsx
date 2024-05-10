import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Cookies from "js-cookie"

const AdminCoworkingsList = () => {
    const [coworkings, setCoworkings] = useState([]); 

    const [needsRefresh, setNeedRefresh] = useState(false);

    useEffect(() => { 
        fetch  ("http://localhost:5000/api/coworkings", {
            method: "GET",
    
    })
    .then((response) => {
        return response.json();
      })
      .then((coworkingsData) => {
        setCoworkings(coworkingsData.data);
      });
  }, [needsRefresh]);
  const handleDeleteCoworking = (event, coworkingId) => {
    
    fetch(`http://localhost:5000/api/coworkings/${coworkingId}`, {
      method: "DELETE",
      credentials: "include",
    }).then((response) => {
      setNeedRefresh(!needsRefresh);
    });
  };

  return (
    <main>
      <h2>Les coworkings</h2>

      <section>
        {coworkings.map((coworking) => {
          return (
            <article key={coworking.id}>
              <h2>{coworking.name}</h2>
              <button onClick={(event) => handleDeleteCoworking(event, coworking.id)}>Delete</button>
              <Link to={`/admin/coworkings/${coworking.id}/update`}>Modifier</Link>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default AdminCoworkingsList;








