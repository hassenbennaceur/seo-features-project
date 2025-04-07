import Accordion from "../../Accordion/Index";
import faqBanner from "/public/images/fag-banner.webp";
import { Typography } from "../../typography";

const FAQPage = () => {
  const faqItems = [
    {
      title:
        "Non me ne intendo di computer, riuscirò comunque ad usare Genproxy?",
      content:
        "Certamente! Genproxy nasce per semplificare la tua operatività, per questo abbiamo creato delle video-guide che ti spiegheranno passo passo come creare il tuo primo proxy e connetterti ad esso.",
    },
    {
      title:
        "I proxy che creo appartengono solo a me? Nessuno potrà usarli, tranne me?",
      content:
        "Sì, l'intero servizio è stato creato per i clienti che desiderano affidabilità e privacy: nessun utente sarà in grado di accedere alle informazioni sulle vostre connessioni.",
    },
    {
      title: "La connessione tramite proxy è sicura?",
      content:
        "I dati vengono criptati per offrire ai nostri clienti la massima sicurezza e poter navigare tranquillamente",
    },
    {
      title: "I siti su cui navigo possono vedere che sto usando un proxy?",
      content:
        "No, ai siti che stai visitando sembrerà che tu stia utilizzando una semplice connessione 4G proveniente dalla sim.",
    },
    {
      title: "Quale carta SIM mi consigliate? ",
      content:
        "All'operatore telefonico risulterai come una persona che visita i siti web dal suo telefono, quindi è possibile ottenere schede SIM con traffico hotspot limitato.",
    },
    {
      title: "Quali sono i metodi di pagamento disponibili?",
      content: "È possibile pagare l'abbonamento con una carta",
    },
    {
      title: "Qual è la versione Android più vecchia che funziona?",
      content:
        "E’ richiesto android 5 o versioni più recenti perchè le applicazioni funzionino correttamente",
    },
  ];

  return (
    <section
      id="faq"
      className="relative bg-cover bg-center object-cover object-center py-16 md:py-24"
      style={{ backgroundImage: `url(${faqBanner.src})` }}
    >
      <div className="container mx-auto md:w-10/12 lg:w-8/12 xl:w-7/12">
        <Typography Tag="h2" variant="title" className="mb-20 text-center">
          FAQ
        </Typography>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
};

export default FAQPage;
