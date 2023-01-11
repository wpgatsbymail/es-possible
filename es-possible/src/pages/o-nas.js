import React from "react"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"

const aboutUs = () => {
  return (
    <Layout>
      <div className="px-2 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="flex justify-center text-4xl md:text-5xl  font-bold my-2 md:my-4">
            O nas
          </h2>
          <hr className="bg-[#DE9A08] h-[2px] md:h-1 w-12 mb-14" />
        </div>
        <div className="flex justify-center items-center ">
          <StaticImage
            className="md:max-w-5xl"
            src="../images/o-nas.jpg"
            alt="Nasze lektorki"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 pb-2 border-b-[1px] border-black border-solid lg:w-[50vw]">
          <h3 className="text-xl font-bold mt-4">EsPossible</h3>
          <p className="text-center">
            Jesteśmy dwiema niezależnymi nauczycielkami, które od kilku lat
            współpracują ucząc języka hiszpańskiego jako obcego oraz tworząc
            materiały pedagogiczne. Łączy nas pasja do nauczania języków w ich
            kontekście kulturowym, którą staramy się przekazać na każdej lekcji.
            Skupiamy się głównie na praktycznej wiedzy potrzebnej do codziennej
            komunikacji oraz kontekście kulturowym. Staramy się by uczeń jak
            najwięcej mówił i by mógł bez problemu zrozumieć rodowitego Hiszpana
            czy Latynosa, mówiącego w naturalny sposób. Dajemy z siebie
            wszystko, aby nauka był dla was ciekawa i przyjemna.
          </p>
        </div>
        <div className="md:flex md:justify-center md:items-center md:w-[50vw] gap-4">
          <div className="flex flex-col justify-center items-center gap-4 ">
            <h3 className="text-xl font-bold mt-4">Anna</h3>
            <p className="text-center">
              Od 8 lat mieszkam w Ameryce Południowej (najpierw w Argentynie,
              teraz w Kolumbii). Posiadam dyplom DELE, poziom C2 (native).
              Prowadzę lekcje od 2015 roku. Język hiszpański zmienił moje
              spojrzenie na świat, poszerzył horyzonty, ukształtował moją
              osobowość. Ludzie, których poznałam dzięki temu językowi nauczyli
              mnie radości życia, wdzięczności za każdy drobiazg solidarności.
            </p>
            <p className="text-center">
               Chcę się podzielić tym bogactwem i umożliwić innym osobom to
              niesamowite doświadczenie spotkania z inną kulturą. Moje lekcje są
              spersonalizowane, dostosowane do potrzeb każdej osoby, każdy ma
              inne tempo pracy, inny sposób zapamiętywania i inne
              zainteresowania, wszystko to biorę pod uwagę przygotowując
              zajęcia.{" "}
            </p>

            <b>¡Hasta pronto!</b>

            <div className="">
              <iframe
                className="w-[100vw] h-[300px] md:w-[516px]"
                src="https://www.youtube.com/embed/fMt4ufdY8Gk"
                title="YouTube video player"
                frameborder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 ">
            <h3 className="text-xl font-bold mt-4">Solanlly</h3>
            <p className="text-center">
              Zawsze lubiłam to co nowe, nieznane, inne, różnorodne kultury i
              ludzi, sposoby myślenia, tradycje i miejsca. W wieku 19 lat
              opuściłam swój kraj (Kolumbię) i zwiedziłam wiele krajów i
              kontynentów, to doświadczenie bardzo mnie wzbogaciło. Nie tylko ze
              względu na języki, ale także kultury, z którymi są związane.
            </p>
            <p className="text-center">
              Dla mnie nauka nowego języka łączy się nie tylko z poznawaniem
              nowych słów, ale tego, co te słowa oznaczają w określonym miejscu
              lub kontekście. Można to porównać do otwarcia drzwi na historię,
              kulturę… na inną, pełną bogactwa, rzeczywistość. Obecnie zajmuję
              się nauczaniem języków, ponieważ uważam, że jest to doświadczenie,
              które powinna mieć każda osoba i na zajęciach staram się przekazać
              nie tylko bogactwo słownictwa, ale także bogactwo kulturowe.
            </p>

            <div className="">
              <iframe
                className="w-[100vw] h-[300px] md:w-[516px]"
                src="https://www.youtube.com/embed/fahag0GW8ws"
                title="YouTube video player"
                frameborder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-8">
          <h2 className="flex justify-center text-5xl font-bold mb-2 text-center">
            Dlaczego my?
          </h2>
          <hr className="bg-[#DE9A08] h-1 w-12 mb-4" />
        </div>
        <div className="flex justify-center items-center">
          <div className="why-us-grid mb-8">
            <div className="flex  justify-center items-center md:max-w-sm overlay relative ">
              <StaticImage
                className=""
                src="../images/Optimized-dostosowane do twoich potrzeb.jpg"
                alt=""
              />
              <span className="absolute uppercase text-[#fff] font-bold text-lg text-center z-10">
                Lekcje dostosowane do twoich potrzeb
              </span>
            </div>
            <div className="flex justify-center items-center md:max-w-sm overlay relative ">
              <StaticImage
                src="../images/Optimized-kazdy poziom i wiek.jpg"
                alt=""
              />
              <span className="absolute uppercase text-[#fff] font-bold text-lg text-center z-10">
                Każdy poziom każdy wiek
              </span>
            </div>
            <div className="flex justify-center items-center md:max-w-sm overlay relative ">
              <StaticImage src="../images/Optimized-mowisz.jpg" alt="" />
              <span className="absolute uppercase text-[#fff] font-bold text-lg text-center z-10">
                Lekcje na których mówisz
              </span>
            </div>

            <div className="flex justify-center items-center md:max-w-sm overlay relative ">
              <StaticImage
                src="../images/Optimized-kultura i praktyczna wiedza2.jpg"
                alt=""
              />
              <span className="absolute uppercase text-[#fff] font-bold text-lg text-center z-10">
                Praktyczna wiedza, ciekawostki kulturowe
              </span>
            </div>
            <div className="flex justify-center items-center md:max-w-sm overlay relative ">
              <StaticImage
                src="../images/Optimized-materialy interaktywne2.jpg"
                alt=""
              />
              <span className="absolute uppercase text-[#fff] font-bold text-lg text-center z-10">
                Materiały interaktywne
              </span>
            </div>
            <div className="flex justify-center items-center md:max-w-sm overlay relative ">
              <StaticImage
                src="../images/Optimized-jezyk specjalistyczny.jpg"
                alt=""
              />
              <span className="absolute uppercase text-[#fff] font-bold text-lg text-center z-10">
                Język specjalistyczny
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default aboutUs
