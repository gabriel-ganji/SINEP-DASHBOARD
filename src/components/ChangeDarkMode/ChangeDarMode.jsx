// 3 - Alterando contexto
import { useContext } from "react";

import { DarkModeContext } from "../../context/DarkModeContext";

const ChangeDarkMode = () => {

    const {darkMode, setDarkMode} = useContext(DarkModeContext);

    setDarkMode(!darkMode);

}

export default ChangeDarkMode;