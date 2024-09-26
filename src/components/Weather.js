import React, { useState } from "react";

function Weather() {
  const [ville, setVille] = useState("");
  const [data, setData] = useState(null);
  const [erreur, setErreur] = useState(null);

  const handleInputChange = (event) => {
    setVille(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      // Effectuer la requête API pour obtenir les informations de la météo
      const response = await fetch(`http://localhost:5001/weatherApi/${ville}`);

      const result = await response.json();

      if (response.ok) {
        // Mettre à jour l'état avec les données reçues
        setData(result);
        setErreur(null); // Réinitialiser l'erreur
      } else {
        setErreur(result.message);
        setData(null);
      }
    } catch (error) {
      setErreur("Une erreur est survenue");
      setData(null);
    }
  };

  return (
    <div className="weatherInfo">
      <h1>Weather</h1>
      <input
        type="text"
        value={ville}
        onChange={handleInputChange}
        placeholder="Input a city"
      />
      <button onClick={handleButtonClick}>Get weather</button>

      {/* Affichage des données météo */}
      {data && (
        <div>
          <h2>Météo à {data.name}</h2>
          <p>Température : {data.main.temp} °C</p>
          <p>Humidité : {data.main.humidity} %</p>
          <p>Description : {data.weather[0].description}</p>
        </div>
      )}

      {/* Affichage d'une erreur si nécessaire */}
      {erreur && <p style={{ color: "red" }}>{erreur}</p>}
    </div>
  );
}

export default Weather;
