import FooterLink from "./FooterLink";
import FooterLogo from "./FooterLogo";

export default function Footer() {

  const footerLinks = [
    {
      title: 'Prodotti',
      links: [
        { label: 'Giochi di Carte', url: '#' },
        { label: 'Manga', url: '#' },
        { label: 'Modellismo', url: '#' },
        { label: 'Commissioni', url: '#' },
        { label: 'Gadget', url: '#' },
      ]
    },
    {
      title: 'Informazioni',
      links: [
        { label: 'Vieni a trovarci', url: '#' },
        { label: 'Domande frequenti', url: '#' },
        { label: 'Contattaci', url: '#' },
        { label: 'Spedizioni e resi', url: '#' },
        { label: 'Termini e condizioni', url: '#' },
        { label: 'Privacy Policy', url: '#' },
        { label: 'Cookie Policy', url: '#' }
      ]
    },
    {
      title: 'Il tuo Account',
      links: [
        { label: 'Profilo', url: '/profilo' },
        { label: 'Carrello', url: '/impostazioni' },
        { label: 'Shop', url: '/logout' }
      ]
    }
  ];


  return (
    <section className="flex justify-center mt-14 bg-content1 rounded-2xl">
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-xl p-4">
        <FooterLogo/>
        {
          footerLinks.map((footerLink, index) => (
            <FooterLink key={index} {...footerLink} />
          ))
        }
      </div>
    </section>
  );
}
