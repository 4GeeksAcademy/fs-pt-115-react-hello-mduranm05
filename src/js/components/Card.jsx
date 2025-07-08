export const Card = (props) => {
    const {name, imagen, description, button, buttonURL} = props
    return (
        <div className="col-md-3">
            <div className="card" style={{width: "18rem"}}>
                <img src={imagen} className="card-img-top" alt="ejemplo" style={{ height: "200px", objectFit: "cover" }}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <a href={buttonURL} className="btn btn-primary" target="_blank">{button}</a>
                </div>
            </div>
        </div>
    );
};