import BacLogoJap from "./BacLogoJap";

const PreFooter = () => {
    return (
        <div className="container-fluid bg-primary my-5">
            <div className="row">
                <div className="col py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1">
                                <BacLogoJap logoGrande={true} />
                            </div>
                            <div className="col-md-9 d-flex align-items-center">
                                <div className="row">
                                    <h2>Segui nuestros foros</h2>
                                    <p>Seguinos en Reddit y Discord para no perderte de nada</p>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex align-items-center justify-content-end">
                                <a href="#" className="btn btn-dark">Unite!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreFooter;