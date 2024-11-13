import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent";
import { deleteCategoryService, getAllCategoryService } from "../services/CategoryService";

function CategoryPage() {

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const loadData = async () => {
        const resp = await getAllCategoryService();
        setCategories(resp.data);
    }
    const handleEdit = async (codigo) => {
        navigate(`/categories/edit/${codigo}`);
    }
    const handleDelete = async (codigo) => {
        if (window.confirm("Desea eliminar la categoria?")) {
            await deleteCategoryService(codigo);
            const nLista = categories.filter((item)=>item.id!=id);
            setCategories(nLista);
        }
    }
    useEffect(() => {
        loadData();
    }, []);
    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Categorías</h3>
                    <div>
                        <Link className="btn btn-primary" to="/categories/new">Nuevo</Link>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th className="text-center">Id</th>
                            <th className="text-center" style={{
                                width:
                                    "100px"
                            }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item) => (
                            <tr key={item.id}>
                                <td>{item.description}</td>
                                <td className="text-center">{item.id}</td>
                                <td className="text-center">
                                    <button  onClick={() => handleEdit(item.id)} className="btn btn-secondary me-2 btn-sm">
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button  onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default CategoryPage
