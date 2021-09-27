import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'
import styled from 'styled-components'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const cash = useSelector(state => state.cash)
    const dispatch = useDispatch()
    return (
        <Wrap>
            <h2>No of cakes {numOfCakes} </h2>
            <h4>Cash {cash}</h4>
            <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
        </Wrap>
    )
}

export default HooksCakeContainer


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #BFFCC6;
    button {
        width: 150px;
        height: 50px;
        background-color: purple;
        border: 1 px solid darkblue;
        border-radius: 10px;
        color: white;
        cursor: pointer;
    }
`