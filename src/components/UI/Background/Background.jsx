import React from 'react';
import cl from './Background.module.css';
import {changeTheme} from "../../../Utils/ChangeTheme";
const Background = ({theme,children}) => {
    const rootClasses = [cl.bg]
    changeTheme(theme, rootClasses, cl);
    return (
        <div className={rootClasses.join(' ')}>
            <img alt={'background image'} src={require(`/home/shmi/WebstormProjects/todolist/src/components/UI/Resources/Images/bg-desktop-${theme}.jpg`)}/>
            {children}
        </div>
    );
};

export default Background;