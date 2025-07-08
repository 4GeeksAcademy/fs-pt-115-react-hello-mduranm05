export const Jumbotron = (props) => {
    return (
        <div >
            <div className="card mb-3" >
                <div className="card-body">
                    <h1 className="card-title">¡Bienvenido a DuranCambios!</h1>
                    <p className="card-text">Tu aliado confiable en el cambio de remesas. En DuranCambios nos alegra darte la bienvenida y acompañarte en cada paso del envío y recepción de tus remesas. Estamos comprometidos con brindarte un servicio rápido, seguro y con las mejores tasas del mercado. Gracias por confiar en nosotros. ¡Cambia con seguridad, cambia con DuranCambios!
                    </p>
                    <a href={props.buttonURL} className="btn btn-primary" target="_blank">Call to action!</a>
                </div>
            </div>
        </div>
    )
}