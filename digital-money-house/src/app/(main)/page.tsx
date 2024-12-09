import Image from "next/image";
import heroBg from "../assets/hero-bg.jpeg";
import { TextCards } from "../components/text-cards/TextCards";

const TEXT_CARDS = [
  {
    title: "Transferí dinero ",
    description:
      "Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual",
  },
  {
    title: "Pago de servicios",
    description:
      "Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel",
  },
];

export default function Home() {
  return (
    <section className="h-dvh relative">
      <div className="absolute w-full h-full inset-0">
        <Image src={heroBg} alt="" fill={true} priority />
      </div>
      <div className="relative">
        <div>
          <h1>De ahora en adelante, hacés más con tu dinero</h1>
          <p>
            Tu nueva <span>billetera virtual</span>
          </p>
        </div>

        <div>
          {TEXT_CARDS.map((card, index) => (
            <TextCards
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
