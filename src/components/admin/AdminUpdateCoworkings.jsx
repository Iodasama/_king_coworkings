import { useParams, useNavigate } from "react-router-dom";  // j'utlise un useNavigate hook qui va me retourner une fonction qui va me permettre de naviguer ; j'utlise un useParams hook qui va me retourner un objet (cle/valeur) qui me permet de recuperer l'id, rajout a l url;

import { useState, useEffect } from "react"; 

const AdminUpdateCoworkings = () => {
  const { id } = useParams();             // je pose en constante l'id (du coworking potentiel a updater; 
  const navigate = useNavigate();         // je pose en constante pour utiliser la naviguation;

  const [coworking, setCoworking] = useState(null);

  useEffect(() => {                                         
    fetch("http://localhost:5000/api/coworkings/" + id, {   // j utilise la methode get pour recuperer le coworking a updater
      method: "GET",
    })
      .then((response) => {
        return response.json();                   // je recupere du json dans le state
      })
      .then((coworkingData) => {
        setCoworking(coworkingData.data);                
      });
  }, []);

  const handleUpdateCoworking = (event) => {     
    event.preventDefault();                      // j'utlise le preventDefault pour eviter le rechargement de la page au submit comme il s agit d un formulaire;

    const name = event.target.name.value;
    const priceHour = event.target.priceHour.value;
    const priceDay = event.target.priceDay.value;
    const priceMonth = event.target.priceMonth.value;
    const number = event.target.number.value;
    const street = event.target.street.value;
    const postCode = event.target.postCode.value;
    const city = event.target.city.value;
    const superficy = event.target.superficy.value;
    const capacity = event.target.capacity.value;

    const coworkingData = {
      name: name,
      price: {
        hour: priceHour,
        day: priceDay,
        month: priceMonth,
      },
      address: {
        number: number,
        street: street,
        postCode: postCode,
        city: city,
      },
      superficy: superficy,
      capacity: capacity,
    };

    const coworkingDataJson = JSON.stringify(coworkingData);    // j envoie du Json avec stringify

    fetch("http://localhost:5000/api/coworkings/" + id, {             // j utilise la methode Put
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: coworkingDataJson,
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/admin/coworkings");
      });
  };

  //un indice de l existence et du type de valeur attendue
  return (
    <>
      <h2>Modifier le coworking</h2>

      {coworking && (
        <form onSubmit={handleUpdateCoworking}>
          <div>
            <label>
              Nom
              <input type="text" name="name" defaultValue={coworking.name} />  
            </label>
          </div>
          <div>
            <label>
              Prix à l'heure
              <input type="text" name="priceHour" defaultValue={coworking.price.hour} />
            </label>
          </div>
          <div>
            <label>
              Prix au jour
              <input type="text" name="priceDay" defaultValue={coworking.price.day} />
            </label>
          </div>
          <div>
            <label>
              Prix au mois
              <input type="text" name="priceMonth" defaultValue={coworking.price.month} />
            </label>
          </div>
          <div>
            <label>
              Numéro de rue
              <input type="number" name="number" defaultValue={coworking.address.number} />
            </label>
          </div>
          <div>
            <label>
              Rue
              <input type="text" name="street" defaultValue={coworking.address.street} />
            </label>
          </div>
          <div>
            <label>
              Code postal
              <input type="text" name="postCode" defaultValue={coworking.address.postCode} />
            </label>
          </div>
          <div>
            <label>
              Ville
              <input type="text" name="city" defaultValue={coworking.address.city} />
            </label>
          </div>
          <div>
            <label>
              Superficie
              <input type="number" name="superficy" defaultValue={coworking.superficy} />
            </label>
          </div>
          <div>
            <label>
              Capacité
              <input type="number" name="capacity" defaultValue={coworking.capacity} />
            </label>
          </div>

          <input type="submit" value="Mettre à jour" />
        </form>
      )}
    </>
  );
};

export default AdminUpdateCoworkings;