import { useState } from "react";

export default function BilletForm(){
  const [nom, setNom] = useState("");
  const [valeur, setValeur] = useState("");
  const [variations, setVariations] = useState([
    { image: "", commentaire: "" },
  ]);
  const ajouterVariation = () => {
    setVariations([...variations, { image: "", commentaire: "" }]);
  };
  const modifierVariation = (index, champ, valeur) => {
    const nouvellesVariations = [...variations];
    nouvellesVariations[index][champ] = valeur;
    setVariations(nouvellesVariations);
  };
  const soumettreFormulaire = (e) => {
    e.preventDefault();
    console.log({ nom, valeur, variations });
    // Ici, vous pouvez ajouter la logique pour envoyer les données à votre backend
  };
  return (
    <form onSubmit={soumettreFormulaire}>
      <div>
        <label htmlFor="nom">Nom du billet :</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="valeur">Valeur :</label>
        <input
          type="number"
          id="valeur"
          value={valeur}
          onChange={(e) => setValeur(e.target.value)}
          required
        />
      </div>
      <h3>Variations :</h3>
      {variations.map((variation, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="URL de l'image"
            value={variation.image}
            onChange={(e) => modifierVariation(index, "image", e.target.value)}
          />
          <input
            type="text"
            placeholder="Commentaire"
            value={variation.commentaire}
            onChange={(e) =>
              modifierVariation(index, "commentaire", e.target.value)
            }
          />
        </div>
      ))}
      <button type="button" onClick={ajouterVariation}>
        Ajouter une variation
      </button>
      <button type="submit">Soumettre</button>
    </form>
  );
}
