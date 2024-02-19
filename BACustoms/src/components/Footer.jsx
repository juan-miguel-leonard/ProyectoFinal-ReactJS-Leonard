import Discord from "../assets/Discord.png";
import Reddit from "../assets/Reddit.png";
import BacLogo from "./BacLogo";
import PreFooter from "./PreFooter";

const Footer = () => {
    return (
        <>
            <PreFooter />
            <div className="container-fluid bg-dark my-5">
                <div className="row my-3">
                    <div className="col">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-light fs-5" href="#">[FB]</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fs-5" href="#">[IG]</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fs-5" href="#">[TW]</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fs-5" href="#">[YT]</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col text-end">
                        <a href="#" className="mx-1"><img src={Discord} width={115} alt={"Discord"} /></a>
                        <a href="#"><img src={Reddit} width={128} alt={"Reddit"} /></a>
                    </div>
                </div>
                <hr />
                <div className="row my-3">
                    <div className="col-md-10">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Políticas de Privacidad</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Defensa del Consumidor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Protección de datos personales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 text-secondary">
                        <p><BacLogo tamanio={40} /> © BACustoms 2024</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;