import { BoutonLien } from "../components/Button/Button"

const offres = [
  { titre: "Garantie 12 mois", description: "Incluse sur tous les téléphones reconditionnés." },
  { titre: "Reprise", description: "Faites reprendre votre ancien téléphone en boutique." },
  { titre: "Réparation", description: "Écran, batterie : réparation possible en atelier." },
  { titre: "Retrait gratuit", description: "Récupérez votre commande à la boutique de Sedan." },
]

function Accueil() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 text-center">
      <h1 className="text-3xl font-semibold text-neutral-900">
        Des smartphones reconditionnés, garantis 12 mois
      </h1>
      <p className="mt-4 text-lg text-neutral-500">
        Réservez en ligne, retirez votre téléphone en boutique à Sedan.
      </p>

      <div className="mt-8 flex justify-center">
        <BoutonLien to="/catalogue">Voir les téléphones</BoutonLien>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
        {offres.map((offre) => (
          <li key={offre.titre} className="rounded-md border border-neutral-200 bg-white p-4">
            <p className="font-semibold text-neutral-900">{offre.titre}</p>
            <p className="mt-1 text-sm text-neutral-500">{offre.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Accueil
