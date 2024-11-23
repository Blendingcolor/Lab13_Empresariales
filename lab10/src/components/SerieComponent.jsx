import { useNavigate } from "react-router-dom";
import { deleteSerieService } from "../services/SerieService";

function SerieComponent(props) {
    const navigate = useNavigate();

    const handleEdit = (codigo) => {
        navigate(`/series/edit/${codigo}`);
    };

    const handleDelete = async (codigo) => {
        if (window.confirm("¿Desea eliminar la serie?")) {
            await deleteSerieService(codigo);
            const updatedList = props.lista.filter((item) => item.id !== codigo);
            props.actualizarLista(updatedList);
        }
    };

    return (
        <div className="card shadow-sm h-100">
            <img
                className="card-img-top"
                src={`https://dummyimage.com/400x250/000/fff&text=${props.imagen}`}
                alt="Serie"
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title text-truncate">{props.nombre}</h5>
                    <p className="card-text text-muted">{props.categoria}</p>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <button
                        onClick={() => handleEdit(props.codigo)}
                        className="btn btn-secondary btn-sm"
                        style={{ width: "80px" }}
                    >
                        <i className="bi bi-pencil-square"></i> Editar
                    </button>
                    <button
                        onClick={() => handleDelete(props.codigo)}
                        className="btn btn-danger btn-sm"
                        style={{ width: "80px" }}
                    >
                        <i className="bi bi-trash-fill"></i> Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SerieComponent;
