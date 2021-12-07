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
    let newTheme=style.default
    if(theme === 'Aqua'){

        newTheme=style.aqua
    }
    else if(theme === 'Red'){
        newTheme=style.red
    }
    else if(theme === 'Dark'){
        newTheme=style.dark
    }
    else {
        newTheme=style.default
    }



    return (
        <div className={newTheme}>
            <div>
                <hr/>
                <span>
                homeworks 12
            </span></div>
{/*            <div>Aqua<SuperCheckbox onChange={() => {
                onChangeCallback('aqua')
            }}/></div>
            <div>Lightcoral<SuperCheckbox onChange={() => {
                onChangeCallback('lightcoral')
            }}/></div>
            <div>Dimgrey<SuperCheckbox onChange={() => {
                onChangeCallback('dimgrey')
            }}/></div>
            <div>Default<SuperCheckbox onChange={() => {
                onChangeCallback('default')
            }}/></div>*/}
            <SuperRadio value={theme} onChangeOption={onChangeCallback} name={'radio'} options={['Dark','Red','Aqua','Default']}/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
