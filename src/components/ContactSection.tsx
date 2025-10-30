

const ContactCompoment = () => {
  return (
    <section id="Contact" className="w-full flex flex-col lg:py-[4rem] py-[3rem] gap-[3rem] justify-center items-center lg:gap-[3rem] border-t-solid border-t-[0.1rem] border-t-[var(--color-accent)]">
        <h1 className="text-[var(--color-accent)] lg:text-[4rem] text-[2rem] font-[Roboto]">CONTACTEZ-NOUS</h1>
        <p className="text-[2rem] text-[var(--color-secondary)] font-[Montserrat] text-center lg:px-[20rem] px-[2rem]">Pour toute réservation ou demande d&apos;information, n&apos;hésitez pas à nous contacter via les numéros suivants:</p>
        <div className="flex gap-[2rem]  text-[var(--color-accent)] text-[2.3rem] font-[Montserrat]">
            <p>(+237) 696 954 482</p>
            <p>(+237) 695 415 451 </p>
        </div>
    </section>
  )
}
export default ContactCompoment