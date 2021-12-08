import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {api} from "./api/requestApi";

type requestType = {
    data: {
        errorText: string,
        info: string
    }
    status: number
}
export const Request = () => {
    const [request, setRequest] = useState<requestType>({
        data: {
            errorText: '*',
            info: '*'
        },
        status: 0
    })
    const [checked, setChecked] = useState<boolean>(true)
    const post = () => {
        api.request(checked).then((res) => {
            setRequest(res)
        }).catch(err=>setRequest(err.response))
    }
    return (
        <div>
            <SuperButton onClick={post}>API POST</SuperButton>
            <SuperCheckbox checked={checked} onChange={()=>setChecked(!checked)}/>

            {request.data.info}
            {request.data.errorText}
        </div>
    )

}