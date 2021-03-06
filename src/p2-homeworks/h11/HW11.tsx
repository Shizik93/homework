import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import { SuperDoubleRange } from './common/c8-SuperDoubleRange/SuperDoubleRange'


function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const onChangeRange = (value:number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <SuperRange value={value1} onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
                <div><span>{value1}</span></div>
            </div>
            <div>

                <SuperDoubleRange value={[value1, value2]} onChangeRange={onChangeRange}
                    // сделать так чтоб value1 и value2 изменялось

                />
                <div><span>{value2}</span></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
