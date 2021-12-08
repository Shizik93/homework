import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import style from './HW12.module.css'
import {changeTheme, ThemeType} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

function HW12() {

    const theme = useSelector((state: AppStoreType) => state.theme.theme)
    const dispatch = useDispatch()
    const onChangeCallback = (theme: ThemeType) => {
        dispatch(changeTheme(theme))
    }
    const setNewTheme = (theme: ThemeType) => {
        if (theme === 'Aqua') {
            return style.aqua
        } else if (theme === 'Red') {
            return style.red
        } else if (theme === 'Dark') {
            return style.dark
        } else {
            return style.default
        }
    }


    return (
        <div className={setNewTheme(theme)}>
            <div>
                <hr/>
                <span>
                homeworks 12
            </span></div>

            <SuperRadio value={theme} onChangeOption={onChangeCallback} name={'radio'}
                        options={['Dark', 'Red', 'Aqua', 'Default']}/>


            <hr/>
        </div>
    );
}

export default HW12;
