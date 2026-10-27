function MentionsLegales() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-neutral-900">Mentions légales</h1>

      <div className="mt-8 flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">Éditeur du site</h2>
          <p className="mt-2 text-neutral-500">
            Rebond SAS (société fictive, projet d'école), au capital de 5 000 €
            <br />
            12 rue du Ménil, 08200 Sedan, France
            <br />
            SIRET (fictif) : 123 456 789 00012
            <br />
            Directeur de la publication : la gérance de Rebond
            <br />
            Contact : contact@rebond-sedan.fr
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-900">Hébergement</h2>
          <p className="mt-2 text-neutral-500">
            Ce site est hébergé par un prestataire d'hébergement web (coordonnées à compléter
            selon la plateforme de mise en ligne choisie).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-900">Propriété intellectuelle</h2>
          <p className="mt-2 text-neutral-500">
            L'ensemble des contenus présents sur ce site (textes, pictogrammes, mise en page) est
            la propriété de Rebond, sauf mention contraire, et ne peut être reproduit sans
            autorisation préalable.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-900">Limitation de responsabilité</h2>
          <p className="mt-2 text-neutral-500">
            Ce site est un projet de démonstration réalisé dans un cadre pédagogique. Les
            téléphones, prix et stocks présentés sont fictifs et ne correspondent à aucune offre
            commerciale réelle.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MentionsLegales
