import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>

                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtn}
                        </LeftButton>
                        {props.rightBtn &&
                            <RightButton>
                                {props.rightBtn}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}

`
const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh;
`
const Buttons = styled.div`

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 760px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.8;
    text-tranform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.6;
    color: black;
`
const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1s;
`
