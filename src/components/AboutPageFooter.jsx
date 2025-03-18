const AboutPageFooter = () => {
  return (
    <div className=" dark:bg-gray-900  px-10 py-25 text-start overflow-hidden">
      <h1 className="text-4xl font-bold text-start text-gray-900 dark:text-gray-200 mb-8">
        About Auto Iconiche
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          La Nostra Missione
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Il nostro obiettivo è offrire contenuti di alta qualità agli
          appassionati di automobili, fornendo informazioni dettagliate, analisi
          approfondite.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Perché Sceglierci
        </h2>
        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
          <li>✅ Contenuti sempre aggiornati</li>
          <li>✅ Esperienza utente ottimizzata</li>
          <li>✅ Un database ricco di informazioni</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Il Nostro Team
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Il nostro team è composto da esperti di motori, designer e
          sviluppatori appassionati, uniti dalla voglia di creare una
          piattaforma unica per gli amanti delle automobili.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Contatti
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Per qualsiasi domanda o suggerimento, puoi contattarci a:
        </p>
        <ul className="mt-4 text-gray-600 dark:text-gray-400">
          <li>📧 Email: support@tuosito.com</li>
          <li>📍 Indirizzo: Via delle Auto, 123, Milano</li>
          <li>📞 Telefono: +39 0123 456789</li>
        </ul>
      </section>
    </div>
  )
}

export default AboutPageFooter
