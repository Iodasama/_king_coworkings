import { useEffect, useState } from "react";


const ListCoworking = () => {
  const [coworkings, setCorwokings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/coworkings/", {method:"GET",})
      .then((response) => {
        return response.json();
      })
      .then((coworkingsData) => {
        setCorwokings(coworkingsData.data);
      });
  }, []);

  return (
   <main>
      <h2>Les coworkings</h2>
      <section>
      {coworkings.map((coworking) => {
        return (
          <article key={coworking.id}>
            <h2>{coworking.name}</h2>
            <p> Capacity : {coworking.capacity}</p>
            <p> Superficy:{coworking.superficy}</p>
          </article>
        );
      })}
    </section>
    </main>
  );
};
export default ListCoworking;