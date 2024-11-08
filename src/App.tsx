import React from 'react';
import './App.css';
import styled, {css} from 'styled-components';
import {myAnimation} from './styles/animations/Animation';
import {theme} from './styles/Theme.styled';
function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                    <li><a href="">menu item 4</a></li>
                </ul>
            </Menu>
            <Box>
                {/*<StyledBtn as = {Link} href={'#'}>LinkComponent</StyledBtn>*/}
                {/*<StyledBtn as = 'a' href = {'#'}>Link</StyledBtn>*/}
                {/*<StyledBtn>Hello</StyledBtn>*/}
                {/*<SuperButton>SuperButton1</SuperButton>*/}
                {/*<SuperButton>SuperButton2</SuperButton>*/}

                <StyledBtn color={theme.colors.primary} primary>Button</StyledBtn>
                <StyledBtn color={theme.colors.secondary} secondary active>Button</StyledBtn>
            </Box>

        </div>
    );
}
export default App;


type StyledBtnPropsType = {
    color?:string
    fontSize?:string
    primary?:boolean
    secondary?:boolean
    active?:boolean
}
const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    background-color: ${props => props.color || 'pink'};
    padding: 10px 20px; // 1 по вертикали 2 по горизонтали
    color: snow;
    font-size: ${props => props.fontSize || '2rem'}; // em - относительно размера шрифта | Единица rem задаёт размер относительно размера шрифта элемента <html> Если ничего не передавать то будет браться значение родителя, тк наследуемое свойство
    font-weight: bold;
    
    &:hover{
        background-color: cadetblue;
    }
    //&:last-child{
    //    background-color: darkred;
    //}

    ${props => props.secondary && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || 'pink'};
    color: ${props => props.color || 'pink'};
    background-color: transparent;
        
    &:hover{
        border-color: cadetblue;
        color: cadetblue;
        background-color: transparent;
    }
`}


    ${props => props.primary && css<StyledBtnPropsType>`
        background-color: ${props => props.color || 'pink'};
        color: snow;
    `}
    
    ${props => props.active && css<StyledBtnPropsType> `
        box-shadow: 5px 5px 5px 5px #2d2d2d; // Свойство принимает составное значение из пяти разных частей: горизонтальное смещение, вертикальное смещение, размытие, растяжение, цвет тени.
    `
    }
   
`

const Link = styled.a`
    color: #0c295e;
    font-size: 2rem;
    font-weight: bold;
    background-color: transparent; // transparent - прозрачный
    padding: 0;
`

const SuperButton = styled(StyledBtn)` // Новый компонент на основе StyledBtn
    border-radius: 5px;
    background-color: yellowgreen;
    color: black;
    
    &:hover {
        animation: ${myAnimation} 2s ease-in-out infinite;
    }
`

const Box = styled.div`
    height: 100vh; // Это относительные единицы измерения. Все они задают размер относительно размеров окна браузера (viewport), то есть видимой части документа. vw - ширина vh - высота
    
    display: flex; // выравнивание
    justify-content: center; // по 
    align-items: center; // центру
    gap: 20px;
    
    button {
        cursor: pointer;
    }
    ${Link} {
        cursor: zoom-in;
    }
    
    @media ${theme.media.tablet}{ // медиа запрос для маленьких экранов
        flex-direction: column;
    }
`
const Menu = styled.nav`
    ul{
        list-style: none; // уберет стилизацию списка - точки цыфры итд
        padding: 0;
        display: flex;
    }
    li > a {
        color: green;
    }
    li + li { // если перед li есть li 
        margin-left: 20px;
    }
`