import { useNavigate } from "react-router-dom";

const AdminCreateCoworkings = () => {
    const navigate = useNavigate ();
    const handleCreateCoworking = (event) => {

        
      event.preventDefault();
  
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
  
      const coworkingDataJson = JSON.stringify(coworkingData);
      
   

      fetch("http://localhost:5000/api/coworkings", {
        
        method: "POST",
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
            navigate ("/admin/coworkings");
          //console.log("Coworking créé", data);
        });
    };
  
    return (
      <>
        <h2>Créer un coworking</h2>
  
        <form onSubmit={handleCreateCoworking}>
          <div>
            <label>
              Nom
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Prix à l'heure
              <input type="text" name="priceHour" />
            </label>
          </div>
          <div>
            <label>
              Prix au jour
              <input type="text" name="priceDay" />
            </label>
          </div>
          <div>
            <label>
              Prix au mois
              <input type="text" name="priceMonth" />
            </label>
          </div>
          <div>
            <label>
              Numéro de rue
              <input type="number" name="number" />
            </label>
          </div>
          <div>
            <label>
              Rue
              <input type="text" name="street" />
            </label>
          </div>
          <div>
            <label>
              Code postal
              <input type="text" name="postCode" />
            </label>
          </div>
          <div>
            <label>
              Ville
              <input type="text" name="city" />
            </label>
          </div>
          <div>
            <label>
              Superficie
              <input type="number" name="superficy" />
            </label>
          </div>
          <div>
            <label>
              Capacité
              <input type="number" name="capacity" />
            </label>
          </div>
  
          <input type="submit" value="Créer" />
        </form>
      </>
    );
  };
  
  export default AdminCreateCoworkings;