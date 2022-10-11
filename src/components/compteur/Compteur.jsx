import { useDispatch, useSelector } from 'react-redux';

import React from 'react'
import { countDec, countInc, countRes } from '../../Store/action/count-action';

export default function Compteur() {
    const dispatch = useDispatch()

    const countNumber = useSelector(state => state.countNumber.count)

    const handleInc = () => {
        dispatch(countInc({
            countPlus : 1
        }))
    }
    const handleDec = () => {
        dispatch(countDec({
            countMoin : 1
        }))
    }
    const handleRes = () => {
        dispatch(countRes())
    }
    return ( 
        <div>
            <p>{countNumber}</p>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
            <button onClick={handleRes}>Reset</button>
        </div>
    )
}
