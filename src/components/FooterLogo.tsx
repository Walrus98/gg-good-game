import GGLogo from "../assets/images/gg-icon.png";

export default function FooterLogo() {
  return (
    <div className="flex flex-col">
        <img className="mb-2" src={GGLogo} width={150} height={150}></img>
        <p>Via Giulio Masini 10</p>
        <p>50053 Empoli</p>
        <p>Firenze</p>
        <p>Italia</p>
        <a href="#">info@gg-goodgame.it</a>
        <div className="flex">
            <p>Contattaci su</p> 
            <span>&nbsp;</span>
            <a href="#" className="text-green-500">WhatsApp</a>
        </div>
    </div>
    
  );
}
