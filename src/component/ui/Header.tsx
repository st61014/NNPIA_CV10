import React, {useEffect, useState} from "react";
import './Header.css';

const Header = () => {
    // TODO: 2.	Upravte zdrojový kód tak aby po stisknutí tlačítka „Přihlásit se“ v komponentně Header.tsx se aktualizoval stav i v komponentě Task.tsx a zobrazil tasky z backendu.
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(()=> {
        console.log(`State changed in ${Header.name}: ${isLoggedIn}`);
    }, [isLoggedIn])

    const clickHandle = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setIsLoggedIn(true);
    };

    return <div className="header">
        <button onClick={clickHandle}>Přihlásit se</button>
    </div>
};

export default Header;