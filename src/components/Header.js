import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/Car/carSlice';
import { useSelector } from 'react-redux';
function Header() {
    const [sidebarStatus, setSidebarStatus] = useState(false)
    const cars = useSelector(selectCars)
    console.log(cars);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" />
            </a>
            <Menu>
                {cars.map ((car, index)=>(
                    <a key={index} href="">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Tesla Account</a>
                <CustomMenu onClick={()=>setSidebarStatus(true)}/>
            </RightMenu>
            <SideBar status={sidebarStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setSidebarStatus(false)}/>
                </CloseWrapper>
                {cars.map ((car, index)=>(
                   <li> <a key={index} href="">{car}</a></li>
                ))}
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Trade In</a></li>
                <li><a href="">Roadaster</a></li>

            </SideBar>
        </Container>
    )
}

export default Header
const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width: 760px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const SideBar = styled.div`
    position: fixed;
    top: 0;
    right 0;
    bottom 0;
    background: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        a{
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`