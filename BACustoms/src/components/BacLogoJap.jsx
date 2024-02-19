import BacLogoJap from "../assets/BacLogoJap.png";

const LogoJap= ({logoGrande}) => {
    let tamanio = logoGrande ? 100 : 60;

    return (
        <img src={BacLogoJap} alt="BACustoms Logo Jap" width={tamanio} />
    )
}

export default LogoJap;