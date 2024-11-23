import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import { deleteCategoryService, getAllCategoryService } from "../services/CategoryService";

function CategoryPage() {
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const loadData = async () => {
        const resp = await getAllCategoryService();
        setCategories(resp.data);
    };

    const handleEdit = (id) => {
        navigate(`/categories/edit/${id}`);
    };

    const handleDelete = async (id) => {
        if (window.confirm("¿Desea eliminar la categoría?")) {
            await deleteCategoryService(id);
            const updatedList = categories.filter((item) => item.id !== id);
            setCategories(updatedList);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    useEffect(() => {
        loadData();
    }, []);

    const filteredCategories = categories.filter((item) =>
        item.description.toLowerCase().includes(searchTerm)
    );

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                    <h3>Categorías</h3>
                    <div className="d-flex">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Buscar categoría..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <Link className="btn btn-primary" to="/categories/new">
                            <i className="bi bi-plus-lg"></i> Nuevo
                        </Link>
                    </div>
                </div>
                <table className="table table-hover shadow-sm">
                    <thead className="table-dark">
                        <tr>
                            <th>Nombre</th>
                            <th className="text-center">ID</th>
                            <th className="text-center" style={{ width: "150px" }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCategories.map((item) => (
                            <tr key={item.id}>
                                <td>{item.description}</td>
                                <td className="text-center">{item.id}</td>
                                <td className="text-center">
                                    <button onClick={() => handleEdit(item.id)} className="btn btn-secondary btn-sm">
                                        <i className="bi bi-pencil-square"></i> Editar
                                    </button>
                                    <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">
                                        <i className="bi bi-trash-fill"></i> Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CategoryPage;
