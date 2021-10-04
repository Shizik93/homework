import React, {ChangeEvent} from 'react'
import s from '../h4/common/c1-SuperInputText/SuperInputText.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error?s.error:''// need to fix with (?:)

    return (
        <div>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass}/>
            {error && <span>{error}</span>}
            <SuperButton onClick={addUser}>add</SuperButton>
            
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
