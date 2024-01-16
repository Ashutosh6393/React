import React from 'react';
import styled from 'styled-components'

const FoodItem = () => {
    return (
        <MainContainer>
            <div className="image">
                <img src="" alt="" />
            </div>
            <div className="right">
                <h2>Title</h2>
                <p>descrition</p>
                <p>price</p>
                <button>Add to cart</button>
            </div>
            
        </MainContainer>
    );
}

export default FoodItem;

const MainContainer = styled('div')`
    display: flex;
    background-color: #adadad22;
    backdrop-filter: blur(10px);
    width: 35rem;
    height: 20rem;
    border-radius: 2rem;
    padding: 1rem;
    padding-inline: 2rem;
    border: 1px solid #c9c9c9;

    
    .image{
        width: 50%;
        position: relative;
        
        img{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 100%;
            width: 100%;
            aspect-ratio: 1;
        }
    }

    .right{
        padding-block: 3rem ;
        width: 50%;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        position: relative;

        h2{
            font-size: 2rem;

        }
        button{
            position: absolute;
            bottom: 1rem;
            align-self: flex-end;
            font-size: 1rem;
            background-color: #ff4343;
            border: none;
            border-radius: .5rem;
            padding: .5rem 1rem;
            width: fit-content;
        }
        

    }
    
`

