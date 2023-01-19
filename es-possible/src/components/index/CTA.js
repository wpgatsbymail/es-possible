import React from 'react'

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2 gap-2 md:my-20">
    <div className="flex flex-col justify-center items-center ">
      <h2 className="flex justify-center text-6xl text-black font-bold mb-4">
        Hola
      </h2>
      <hr className="bg-[#DE9A08] h-1 w-12 mb-4" />
    </div>
    <div className="text-center flex flex-col justify-center p-2 gap-4 md:flex-row md:text-base">
      <p className="max-w-xs">
        Cieszymy się że tu jesteś! Chcesz się uczyć hiszpańskiego?
        Zapraszamy na lekcje online, podczas których będziesz dużo mówić,
        poznasz wiele ciekawostek kulturowych, wybierzesz się w egzotyczną
        podróż w środku zimy!
      </p>
      <p className="max-w-xs">
        Hiszpański przyjemnie i praktycznie to właśnie my! Bez stresu, w
        twoim tempie i w miłej atmosferze. Lekcje z nami to prawdziwa
        tropikalna przygoda, podczas której dosłownie odkryjesz Hiszpanię i
        Amerykę.
      </p>
      <p className="max-w-xs">
        Zaryzykuj zerwanie z codzienną monotonią i ucz się hiszpańskiego z
        nami! To naprawdę EsPossible!
      </p>
    </div>
  </div>
  )
}

export default CTA