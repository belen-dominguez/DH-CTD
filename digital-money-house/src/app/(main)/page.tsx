import Image from "next/image";
import heroBg from "../assets/hero-bg.jpeg";
import { TextCards } from "../components/cards/text-cards/TextCards";
import styles from "./home.module.css";

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
    <section className={`${styles.home} relative`}>
      <div className="absolute w-full h-full inset-0 ">
        <Image
          src={heroBg}
          alt=""
          fill={true}
          priority
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="relative flex flex-col justify-between h-[100%]">
        <div className="px-[18px] lg:px-[50px] mb-[114px] lg:mb-[249px] xl:mb-[76px]">
          <h1 className="text-white mb-[20px] xl:mb-[28px] pt-[44px] lg:pt-[75px] leading-[32px] lg:leading-[50px] text-[27px] lg:text-[48px] font-semibold max-w-[50%] xl:max-w-[30%]">
            De ahora en adelante, hacés más con tu dinero
          </h1>
          <span className="bg-colorYellow w-[25px] h-[4px] mb-[17px] block lg:hidden"></span>
          <p className="text-colorYellow max-w-[60%] lg:max-w[100%] text-[21.5px] lg:text-[34px]">
            Tu nueva <span className="font-bold">billetera virtual</span>
          </p>
        </div>

        <div className="">
          <div className={styles.footerBackground}></div>
          <div className={styles.cardWrapper}>
            {TEXT_CARDS.map((card, index) => (
              <TextCards
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
