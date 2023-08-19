import React, {useContext} from 'react';
import './box.scss';
import { DarkModeContext } from '../../context/DarkModeContext';

export const Box = (props) => {

    const {darkMode} = useContext(DarkModeContext);
    
    const className = {
        box: 'box',
        purple: props.purple && 'box-purple',
        fullheight: props.fullheight && 'box-fullheight',
        darkMode: darkMode ? "darkMode" : ""
    }

    return (
        <div className={Object.values(className).join(' ')}>
            {props.children}
        </div>
    )
}