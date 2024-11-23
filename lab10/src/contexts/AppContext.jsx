import React, { useState} from "react";

const AppContext = React.createContext();
const { Provider } = AppContext;

function AppProvider({children}) {
    const [usuario, setUsuario] = useState(localStorage.usuario);

    function login(data){
        setUsuario(data.username);
        localStorage.usuario = data.username;
    }

    function logout(){
        setUsuario(null);
        localStorage.removeItem('usuario');
    }

    return (
        <Provider value={{usuario, login, logout}}>
            {children}
        </Provider>
    );
}

export { AppProvider, AppContext };