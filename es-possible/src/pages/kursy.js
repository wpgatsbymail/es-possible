import React from "react"
import Layout from "../components/layout"

const kursy = () => {
  return (
    <Layout>
      <div className=" flex flex-col justify-center items-center mb-8 gap-4">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="flex justify-center text-4xl md:text-5xl text-black font-bold my-4">
            Kursy
          </h2>
          <hr className="bg-[#DE9A08] h-1 w-12 mb-14" />
        </div>
        <div className="grid md:grid-cols-2 lg:max-w-[60vw]">
          <div className="flex flex-col justify-center items-center border-slate-500 border-solid border m-4 p-4">
            <h3 className="text-3xl font-bold mb-8">SOLO</h3>
            <div className="flex flex-col justify-center items-center text-xl text-center">
              <p>
                To plan dla osób, które wolą uczyć się same lub potrzebują
                całkowicie spersonalizowanego programu. Na tych zajęciach
                będziesz mówić, słuchać, czytać i dobrze się bawić a tematyka,
                metody i tempo pracy będą podporządkowane Twoim potrzebom i
                oczekiwaniom.
              </p>
              <p>
                <b> Miejsce spotkania:</b> Zoom, Skype lub Google Meet.
              </p>
              <p>
                <b>Dzień i godzina:</b> napisz z którą lektorką chcesz mieć
                zajęcia i umów się na pierwsze spotkanie.
              </p>
              <p>
                <b>Cena:</b> 70 zł za 60 minut
              </p>
              <p>
                <b>Materiały do zajęć otrzymasz na podany adres email</b>
              </p>
            </div>
          </div>
          <div className="flex flex-col  items-center border-slate-500 border-solid border m-4 p-4">
            <h3 className="text-3xl font-bold mb-8">DUO</h3>
            <div className="flex flex-col justify-center items-center text-xl text-center">
              <p>
                To plan dla osób, które lubią uczyć się w małej grupie. Program
                jest dostosowany do potrzeb obojga uczestników, im lepiej
                opiszecie nam Wasze oczekiwania, tym łatwiej będzie nam je
                spełnić. Na pewno będzie wiele gier i okazji do mówienia.
              </p>
              <p>
                <b> Miejsce spotkania:</b> Zoom
              </p>
              <p>
                <b>Dzień i godzina:</b> napisz z którą lektorką chcesz mieć
                zajęcia i umów się na pierwsze spotkanie.
              </p>
              <p>
                <b>Cena:</b> 35 zł za 60 minut
              </p>
              <p>
                <b>Materiały do zajęć otrzymasz na podany adres email</b>
              </p>
            </div>
          </div>
     

        <div className="flex flex-col  items-center border-slate-500 border-solid border m-4 p-4">
          <h3 className="text-3xl font-bold mb-8">AMIGOS</h3>
          <div className="flex flex-col justify-center items-center text-xl text-center">
            <p>
              To plan dla osób, które lubią uczyć się w grupie. Może ona liczyć
              od 3 do 5 osób. Może to być grupa znajomych lub nie. Ważne żebyś
              napisał/a nam jakie są Twoje oczekiwania a my postaramy się
              umieścić Cię w odpowiedniej grupie.
            </p>
            <p>
              <b> Miejsce spotkania:</b> Zoom
            </p>
            <p>
              <b>Dzień i godzina:</b> do ustalenia. zgłoś chęć udziału w
              zajęciach grupowych i określ dni i godziny dostępności a my
              zajmiemy się resztą
            </p>
            <p>
              <b>Cena:</b> 18 zł za 60 minut
            </p>
            <p>
              <b>Materiały do zajęć otrzymasz na podany adres email</b>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-8 border-slate-500 border-solid border m-4 p-4">
          <h3 className="text-3xl font-bold ">MEDELLÍN LEKCJE STACJONARNE</h3>
          <div className="flex flex-col justify-center items-center text-xl text-center">
            <p>
              Wybierasz się do Kolumbii i chcesz się uczyć hiszpańskiego „na
              żywo”?
            </p>
            <p className="my-8">
              <b> Zapraszamy!</b>
            </p>
            <p>
              Oferujemy intensywne kursy nauki języka metodą „immersion”. Czyli
              uczysz się jak kupować – kupując, poznajesz nazwy dań, siedząc w
              restauracji itd. A przy okazji odkrywasz kulturę i ludzi, dobrze
              się bawisz i poszerzasz horyzonty. To propozycja dla osób w każdym
              wieku i na każdym poziomie językowym. Ilość godzin i intensywność
              kursu ustalamy bezpośrednio z każdym uczestnikiem. Napisz
              koniecznie!
            </p>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default kursy
