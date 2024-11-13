import { NavLink, useNavigate } from "react-router-dom"
import { deleteSerieService } from "../services/SerieService";

function SerieComponent(props) {

    const navigate = useNavigate();
    const handleEdit = async (codigo) => {
        navigate(`/series/edit/${codigo}`);
    }
    const handleDelete = async (codigo) => {
        if (window.confirm("Desea eliminar la serie?")) {
            await deleteSerieService(codigo);
            const nLista = props.lista.filter((item)=>item.id!=id);
            props.actualizarLista(nLista);
        }
    }

    return (
        <div className="card">
            <img
                className="card-img-top"
                src={"https://dummyimage.com/400x250/000/fff&text=" + props.imagen}
                alt="img" />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.categoria}</p>
                <div className="d-flex justify-content-between">
                    <button onClick={() => handleEdit(props.codigo)} className="btn btn-secondary">Editar</button>
                    <button onClick={() => handleDelete(props.codigo)} className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    )
}
export default SerieComponent