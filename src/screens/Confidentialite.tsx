function Confidentialite() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold text-neutral-900">Politique de confidentialité</h1>

      <div className="mt-8 flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">Responsable du traitement</h2>
          <p className="mt-2 text-neutral-500">
            Rebond SAS, 12 rue du Ménil, 08200 Sedan — contact@rebond-sedan.fr
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-900">Données collectées</h2>
          <p className="mt-2 text-neutral-500">
            Le formulaire de réservation collecte votre nom, votre adresse e-mail, votre numéro de
            téléphone et la date de retrait souhaitée.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-900">Finalité et base légale</h2>
          <p className="mt-2 text-neutral-500">
            Ces informations servent uniquement à traiter votre demande de réservation et à vous
            contacter au sujet du retrait en boutique (exécution de mesures précontractuelles,
            article 6.1.b du RGPD).
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-900">Conservation et destinataires</h2>
          <p className="mt-2 text-neutral-500">
            Les données sont conservées le temps nécessaire au traitement de la réservation, puis
            supprimées. Elles ne sont transmises à aucun tiers.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-900">Cookies</h2>
          <p className="mt-2 text-neutral-500">
            Ce site ne dépose aucun cookie ni traceur de mesure d'audience.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-900">Vos droits</h2>
          <p className="mt-2 text-neutral-500">
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
            d'effacement, d'opposition et de portabilité sur vos données. Pour l'exercer, écrivez
            à contact@rebond-sedan.fr. Vous pouvez aussi introduire une réclamation auprès de la
            CNIL.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-neutral-900">À propos de ce site</h2>
          <p className="mt-2 text-neutral-500">
            Ce site est un projet de démonstration : le formulaire de réservation ne transmet
            aucune donnée à un serveur. Les informations saisies restent dans votre navigateur le
            temps de la session et ne sont jamais envoyées ni conservées.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Confidentialite
