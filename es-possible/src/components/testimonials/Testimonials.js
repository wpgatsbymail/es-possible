import React from "react"

import Slider from "react-slick"
import { IoMdQuote } from "react-icons/Io"

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }
  return (
    <div className="max-w-screen">
      <Slider
        className="  flex justify-center items-center lg:px-[18vw] overflow-hidden"
        {...settings}
      >
        <div className="p-4 flex relative  ">
          <IoMdQuote className="absolute top-0 right-[1em] z-0 text-[#FFE27D] text-5xl " />
          <h3 className="relative z-1 text-[#8D8D8D] text-xs">
            Hiszpańskiego zaczęłam się uczyć z Anią 2.5 roku temu w formie
            online. Nigdy wcześniej nie uczyłam się tego języka. Już od
            pierwszej lekcji poczułam, że trafiłam we właściwe, kompetentne
            ręce. Ania jest zawsze przygotowana i dba o to, aby lekcje były
            ciekawe i angażujące. Do ich prowadzenia używa nowoczesnych metod
            audio-wizualnych. Stosuje indywidualne podejście do ucznia i
            zapewnia fantastyczną atmosferę podczas zajęć. Co warto podkreślić,
            Ania, będąc mieszkanką Kolumbii i mając za sobą długie pobyty w
            kilku innych krajach hiszpańskojęzycznych, swoje lekcje często
            wzbogaca elementami kultury i zwyczajów tych krajów, więc oprócz
            stałego zwiększania poziomu moich kompetencji językowych dostaję
            także dużo bezcennej wiedzy praktycznej. Poleciłam już lekcje
            hiszpańskiego u Ani kilku osobom i wszystkie są bardzo zadowolone.
            Osobiście wystawiam Ani jako lektorce języka hiszpańskiego najwyższą
            notę i dziękuję jej za wspólny sukces, jakim jest dla mnie swobodne
            komunikowanie się w tym pięknym języku połączone z chęcią dalszej
            nauki.
          </h3>
          <h3 className="mt-4">
            <b className="text-sm ">Agnieszka Plizga</b>
          </h3>
        </div>
        <div className="p-4 relative ">
          <IoMdQuote className="absolute top-0 right-[1em] z-0 text-[#FFE27D] text-5xl" />
          <h3 className="relative z-1 text-[#8D8D8D] text-xs ">
            Ania z zaangażowaniem prowadzi zajęcia, mając przy tym niesamowite
            wyczucie dobierania odpowiednich narzędzi i metod w taki sposób, aby
            umilić i ułatwić naukę i zapamiętywanie. Lekcje są bardzo ciekawe -
            łączą teorię z praktyką, dlatego polecam wszystkim którzy chcą się
            przygotowywać do egzaminów, albo po prostu swobodnie komunikować się
            językiem za granicą i w trakcie słuchania ulubionych piosenek czy
            oglądania ulubionych seriali/filmów. Znając wiele
            hiszpańskojęzycznych kultur i sposoby w jakie się porozumiewają
            zaraziła mnie nowym hobby - podróżami do Ameryki Centralnej i
            Południowej! Na dwie lekcje w tygodniu od ponad dwóch lat wdzwaniam
            się z uśmiechem i poczuciem świetnie zainwestowanego czasu. Jeżeli
            chcecie mieć lekcje szyte na miarę i Wasze możliwości - serdecznie
            wszystkim polecam!
          </h3>
          <h3 className="mt-4">
            <b className="text-sm ">Izabela Makowska</b>
          </h3>
        </div>

        <div className="p-4 relative ">
          <IoMdQuote className="absolute top-0 right-[1em] z-0 text-[#FFE27D] text-5xl" />
          <h3 className="relative z-1 text-[#8D8D8D] text-base ">
            Zajęcia z Anią to nie tylko nauka języka, ale też cotygodniowe
            spotkania z hiszpańską muzyką, kulturą, kuchnią i zwyczajami a to
            wszystko w super atmosferze i z mega ciekawymi interaktywnymi
            materiałami
          </h3>
          <h3 className="mt-4">
            <b className="text-lg ">Monika Jeziorska</b>
          </h3>
        </div>
        <div className="p-4 relative ">
          <IoMdQuote className="absolute top-0 right-[1em] z-0 text-[#FFE27D] text-5xl" />
          <h3 className="relative z-1 text-[#8D8D8D] text-base ">
            Uczę się hiszpańskiego z Panią Anią już drugi rok, zajęcia są
            świetne! Poznajemy nie tylko język ale też hiszpańską kuchnię,
            zwyczaje, kulturę. Robimy zakupy na targu, zwiedzamy miasta,
            śpiewamy piosenki a nawet gotujemy paelle. Gramatykę poznajemy
            również -w stopniu koniecznym ale nie męcząco. Bardzo lubię te nasze
            spotkania, są fantastyczną odskocznią od codzienności.
          </h3>
          <h3 className="mt-4">
            <b className="text-lg ">Agnieszka Marciniak</b>
          </h3>
        </div>
        <div className="p-4 relative ">
          <IoMdQuote className="absolute top-0 right-[1em] z-0 text-[#FFE27D] text-5xl" />
          <h3 className="relative z-1 text-[#8D8D8D] text-base ">
            Uczę się hiszpańskiego z Solanlly od około półtora roku. Cenię
            szczególnie unikatowe kompetencje i profesjonalne podejście.
            Solanlly jest native speakerem i nauczycielem języków obcych. Mówi
            też płynnie w języku polskim. Nawet początkujący jak ja może uczyć
            się z native speakerem na profesjonalnym poziomie. Solanlly prowadzi
            lekcje w miłej atmosferze, cierpliwie tłumacząc wszystkie
            niejasności. Zamierzam kontynuować naukę z Solanlly. Polecam.
          </h3>
          <h3 className="mt-4">
            <b className="text-lg ">Tomasz Dyrsarz</b>
          </h3>
        </div>
        <div className="p-4 relative ">
          <IoMdQuote className="absolute top-0 right-[1em] z-0 text-[#FFE27D] text-5xl" />
          <h3 className="relative z-1 text-[#8D8D8D] text-base ">
            Bardzo polecam zajęcia z Solanlly ponieważ jest cierpliwą
            nauczycielką, potrafi wszystko wytłumaczyć w jasny sposób z
            pozytywnym nastawieniem a także organizuje zajęcia z różnorodnymi
            ćwiczeniami i ciekawą tematyką.
          </h3>
          <h3 className="mt-4">
            <b className="text-lg ">Magdalena Stawowy</b>
          </h3>
        </div>
      </Slider>
    </div>
  )
}

export default Testimonials
