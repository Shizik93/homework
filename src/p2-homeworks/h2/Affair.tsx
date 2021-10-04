import React, {CSSProperties} from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import m from './Affairs.module.css'
type AffairPropsType = {

    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div >
            {props.affair.name} {props.affair.priority}
            <SuperButton style={{marginLeft:'5px'}} onClick={deleteCallback}>X</SuperButton>

        </div>
    )
}

export default Affair
