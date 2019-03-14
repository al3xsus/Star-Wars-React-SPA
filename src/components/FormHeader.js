import React, {Fragment} from "react";
import {Icon} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";

const FormHeader = () => {
    return (
        <Fragment>
            <NavLink exact={true} to="/"><h1 style={{"textAlign": "center"}}>Star Wars SPA</h1></NavLink>
            <ul className="header">
                <li><NavLink to="/films"><Icon className={'film'} size={'large'}/>Films</NavLink></li>
                <li><NavLink to="/people"><Icon className={'users'} size={'large'}/>People</NavLink></li>
                <li><NavLink to="/starships"><Icon className={'rocket'} size={'large'}/>Starships</NavLink></li>
            </ul>
        </Fragment>
    )
}

export default FormHeader
