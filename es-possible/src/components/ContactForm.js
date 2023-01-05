import React from "react"
import { useForm} from "@formspree/react"
function ContactForm() {
  const [state] = useForm("mvonokeb")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl">Skontaktuj się z nami</h2>

      <form
        className="flex flex-col justify-center items-center "
        name="simple-contact-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/mvonokeb"
        method="post"
      >
        <fieldset className="flex flex-col gap-2">
          <label for="full-name">Imię, Nazwisko</label>
          <input
            type="text"
            name="Wysyłający"
            id="full-name"
            placeholder="Imię i Nazwisko"
            required
          />
          <label for="email-address">Adres email (wymagane)</label>
          <input
            type="email"
            name="Email"
            id="email-address"
            placeholder="email@mail.com"
            required
          />
          <label for="_subject">Temat</label>
          <input type="text" name="subject" id="email-subject" placeholder="Wpisz temat"/>
          <label for="message">Treść wiadomości</label>
          <textarea
            rows="5"
            name="Wiadomość"
            id="message"
            placeholder="Napisz do nas"
            required
          ></textarea>
          <div className="flex flex-col md:flex-row items-center gap-2 ">
            <input type="checkbox" name="confirmation" id="checkbox" required />
          <label className="text-xs" htmlFor="checkbox">Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu za pośrednictwem formularza kontaktowego. Wiem, że zgodę tę mogę w każdej chwili wycofać.</label>
          </div>

        </fieldset>
        <input className="bg-[#DE9B09] text-white font-bold px-8 py-4 mt-4 cursor-pointer" type="submit" value="Wyślij" />
      </form>

 
    </div>
  )
}

export default ContactForm
