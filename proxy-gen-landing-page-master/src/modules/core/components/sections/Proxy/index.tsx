/* eslint-disable react/no-unescaped-entities */
import proxyBanner from "public/images/proxy-banner.webp";
import { Typography } from "../../typography";
import StatefulButton from "../../stateful-button";

const ProxyGuide = () => {
  return (
    <section
      className="relative bg-cover bg-center object-cover object-center pb-80 pt-20 md:pb-20"
      style={{ backgroundImage: `url(${proxyBanner.src})` }}
    >
      <div className="container md:px-20">
        <div className="md:w-7/12 lg:w-6/12 xl:w-5/12">
          <Typography Tag="h2" variant="sectitle" className="textWhite mb-8">
            Naviga da Ovunque nel Mondo
          </Typography>
          <Typography Tag="p" variant="text" className="infoText mb-6">
            Crea il tuo proxy a costi vantaggiosi, con la possibilità unica di
            utilizzare il tuo indirizzo IP da tutto il mondo. Grazie alla nostra
            soluzione innovativa, hai non solo il controllo totale sulla
            creazione del tuo proxy, ma anche la libertà di accedere al tuo
            indirizzo IP da qualsiasi parte del globo. Abbraccia la praticità di
            gestire il tuo proxy direttamente dall'area cliente di GenProxy,
            crea la tua rete di proxy con facilità e goditi la flessibilità di
            un indirizzo IP globale.
          </Typography>
          <Typography Tag="p" variant="text" className="infoText mb-9">
            Con GenProxy, personalizza la tua esperienza di connettività in modo
            semplice ed efficiente.{" "}
          </Typography>
          <StatefulButton
            text="REGISTRATI OGGI PER INIZIARE"
            className="px-[45px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ProxyGuide;
