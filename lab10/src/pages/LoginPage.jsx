import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { loginService } from "../services/LoginServices";

const initData = {
    username: '',
    password: '',
}

function LoginPage() {

    const navigate = useNavigate();
    const { login } = useContext(AppContext);
    const [data, setData] = useState(initData);
    const onChangeUserName = (e) => {
        const nData = { ...data, username: e.target.value}
        setData(nData);
    };

    const onChangePassword = (e) => {
        const nData = { ...data, password: e.target.value}
        setData(nData);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await loginService(data);
            console.log(resp.data);
            login(resp.data);
            navigate("/home");
        } catch (error) {
            console.error('El usuario o contraseña son incorrectos');
        }
    }
    return (
        <section className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="username">Usuario</label>
                                        <input onChange={onChangeUserName} id="username" type="text" className="form-control" name="username" required autoFocus />
                                    </div>
                                    <div className="mb-3">
                                            <label className="text-muted"htmlFor="password">Contraseña</label>
                                        <input onChange={onChangePassword} id="password" type="password" className="form-control" name="password" required />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <button type="submit" className="btn btn-primary ms-auto">
                                            Ingresar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="text-center mt-5 text-muted">
                            Copyright &copy; Tecsup 2024
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default LoginPage;