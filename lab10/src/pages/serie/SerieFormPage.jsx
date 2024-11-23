import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import HeaderComponent from "../../components/HeaderComponent";
import { getAllCategoryService } from "../../services/CategoryService";
import { createSerieService } from "../../services/SerieService";
const initData = {
    name: '',
    rating: '',
    category: '',
    release_date: '',
}
function SerieFormPage() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState(initData);
    const loadCategories = async () => {
        const resp = await getAllCategoryService();
        setCategories(resp.data);
    };
    useEffect(() => {
        loadCategories();
    }, []);
    const onChangeNombre = (e) => {
        const nData = { ...data, name: e.target.value }
        setData(nData);
    };
    const onChangeCategoria = (e) => {
        const nData = { ...data, category: e.target.value }
        setData(nData);
    };
    const onChangeRating = (e) => {
        const nData = { ...data, rating: e.target.value }
        setData(nData);
    };
    const onChangeReleaseDate = (e) => {
        const nData = { ...data, release_date: e.target.value }
        setData(nData);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createSerieService(data);
            console.log('Enviando', data);
            navigate('/series');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Nueva - Serie</h3>
                </div>
                <form onSubmit={handleSubmit} className="row">
                    <div className="col-md-4">
                        <img
                            id="fileImg"
                            className="card-img-top"
                            src={"https://dummyimage.com/400x250/000/fff&text=imagen"}
                            alt="img" />
                    </div>
                    <div className="col-md-8">
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Nombre</label>
                            <input type="text" onChange={onChangeNombre} className="form-control"
                                id="inputName" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputCategory" className="form-label">Categoria</label>
                            <select onChange={onChangeCategoria} className="form-select" id="inputCategory"
                                required >
                                <option value="">Seleccione una opción</option>
                                {categories.map((item) => (
                                    <option key={item.id} value={item.id}>{item.description}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputRating" className="form-label">Rating</label>
                            <input type="number" onChange={onChangeRating} className="form-control"
                                id="inputRating" min="1" max="10" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputReleaseDate" className="form-label">Release Date</label>
                            <input type="date" onChange={onChangeReleaseDate} className="form-control"
                                id="inputReleaseDate" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputImage" className="form-label">Imagen</label>
                            <input type="file" className="form-control" id="inputImage" />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary me-2">Guardar</button>
                            <Link className="btn btn-secondary" to="/series">Cancelar</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default SerieFormPage