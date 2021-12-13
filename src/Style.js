import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    background-color: #98d977;
    padding: 15px 20px;
    color: white;
    font-weight: bold;
    font-size: 25px;
`

export const Body = styled.div`
    width: 1200px;
    position: relative;
    display: flex;
    //align-items: center;
    flex-direction: column;
    line-height: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 100px;

    @media screen and (max-width: 1200px){
        width: 100%;
        padding: 20px;
        left: 0;
        transform: translateX(0%);
    }

    div{
    }
`

export const HL = styled.span`
    margin: 0px 5px;
    font-weight: bold;
    :before{
        content: "-> "
    }
`