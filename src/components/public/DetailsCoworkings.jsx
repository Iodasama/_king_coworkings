import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsCoworkings = () => {
  const { coworkingId } = useParams();
  const [coworking, setCorwoking] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/coworkings/" + coworkingId)
    .then((response) => {
        return response.json();
      })
      .then((coworkingsData) => {
        setCorwoking(coworkingsData.data);
      });
  }, []);

  return (
   <main>
      <h1> Details du coworking :</h1>
   
      {coworking? (
       <>
            <h2>{coworking.name}</h2>
            <p>Prix : </p>
            <ul> 
                <li>{coworking.price.day} $/jour </li>
                <li>{coworking.price.hour} $/heure </li>
                <li>{coworking.price.month} $/mois </li>
            </ul>
            <p>  Adresse : </p>
            <p>
            {coworking.address.number} {coworking.address.street} {coworking.address.postCode} {coworking.address.city}
          </p>
        </>
      ) : (
        <h2>Coworking non trouvé</h2>
    )}
    </main>
  );
};
    

export default DetailsCoworkings;
