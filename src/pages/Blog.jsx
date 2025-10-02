const articles = [
  {
    id: 1,
    title: "Responsabilità medica: come ottenere tutela legale a [Città]",
    date: "2 Ottobre 2025",
    content: "La responsabilità medica si verifica quando un errore o una negligenza sanitaria causano un danno al paziente.\nIn questi casi, il supporto di un avvocato civilista esperto in responsabilità medica a [Città] è fondamentale per valutare se vi siano i presupposti per richiedere un risarcimento.\n\nNon ogni complicazione rappresenta un errore. Si parla di colpa medica quando il comportamento del medico o della struttura sanitaria non rispetta gli standard di cura richiesti dalla legge e dalla buona pratica clinica.\nDistinguere tra rischio inevitabile ed errore professionale è un passaggio chiave.\n\nChi subisce un danno ha diritto a richiedere un risarcimento per errore medico.\nIl risarcimento può riguardare il danno fisico, il danno morale e le conseguenze economiche.\nUn avvocato responsabilità medica a [Città] può guidare il paziente nel raccogliere la documentazione e avviare l’azione legale.\n\nSe sospetti un errore medico, è consigliabile richiedere subito una consulenza medico-legale.\nAffrontare un caso di responsabilità medica a [Città] richiede competenze legali specifiche."
  },
  {
    id: 2,
    title: "Come redigere un contratto sicuro a [Città]",
    date: "28 Settembre 2025",
    content: "Redigere un contratto sicuro è essenziale per privati e aziende.\nUn avvocato civilista a [Città] può aiutare a scrivere contratti chiari, validi e legalmente vincolanti.\n\nControlla sempre i dati delle parti, definisci obblighi e diritti chiaramente e specifica termini e scadenze.\nUn contratto ben redatto evita dispute e garantisce sicurezza legale."
  },
  {
    id: 3,
    title: "Mediazione familiare: consigli utili a [Città]",
    date: "15 Settembre 2025",
    content: "La mediazione familiare può risolvere conflitti tra coniugi o parenti senza ricorrere subito al tribunale.\nUn avvocato civilista a [Città] può guidare le parti nel processo, assicurando rispetto dei diritti e delle norme vigenti.\n\nÈ consigliabile valutare sempre questa opzione prima di intraprendere azioni legali più complesse."
  },
  {
    id: 4,
    title: "Risarcimento danni da incidente stradale a [Città]",
    date: "5 Settembre 2025",
    content: "In caso di incidente stradale, ottenere un risarcimento corretto è fondamentale.\nUn avvocato civilista a [Città] esperto in responsabilità civile può aiutare a valutare danni fisici, morali ed economici.\n\nRaccogliere documentazione completa e seguire il percorso legale corretto aumenta le probabilità di un risarcimento equo."
  },
  {
    id: 5,
    title: "Tutela legale per contenziosi immobiliari a [Città]",
    date: "25 Agosto 2025",
    content: "I contenziosi immobiliari richiedono conoscenza approfondita del diritto civile.\nUn avvocato civilista a [Città] può assistere nella gestione di controversie su compravendite, locazioni o proprietà.\n\nAffidarsi a un professionista esperto permette di risolvere le dispute in modo efficace e tutelare i propri diritti."
  }
];

export default function Blog() {
  return (
    <section>
      <h1>Blog</h1>
      {articles.map((article) => (
        <div key={article.id} className="card">
          <h2>{article.title}</h2>
          <small>{article.date}</small>
          <p>
            {article.content.split("\n").map((line, index) => (
              <span key={index}>{line}<br/></span>
            ))}
          </p>
        </div>
      ))}
    </section>
  );
}



