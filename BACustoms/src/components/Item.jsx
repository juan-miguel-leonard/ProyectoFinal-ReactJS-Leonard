import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-3 text-center">
            <div className="card border-info mb-3">
                <Link to={"/item/" + item.id}>
                <img src={item.image} className="card-img-top img-fluid" alt={item.title} />
                <div className="card-body pt-3">
                    <p className="card-text">{item.title}</p>
                </div>
                </Link>                
            </div>
        </div>
    )
}

export default Item;