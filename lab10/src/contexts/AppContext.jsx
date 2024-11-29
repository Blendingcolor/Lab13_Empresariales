import React, { useEffect, useState} from "react";
import { jwtDecode } from "jwt-decode";

const AppContext = React.createContext();
const { Provider } = AppContext;

function AppProvider({children}) {
    const [usuario, setUsuario] = useState(null);

    function login(data){
        const token = data.access;
        const decoded = jwtDecode(token);
        setUsuario(decoded.name);
        localStorage.token = token;
    }

    function logout(){
        setUsuario(null);
        localStorage.removeItem('token');
    }

    useEffect(() => {
        if(localStorage.token){
            const decoded = jwtDecode(localStorage.token);
            setUsuario(decoded.name);
        }
    }, []);

    return (
        <Provider value={{usuario, login, logout}}>
            {children}
        </Provider>
    );
}

export { AppProvider, AppContext };