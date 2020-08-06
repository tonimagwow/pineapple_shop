import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem; 0;
    transition: all 0.5s ease-in-out;
&:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
}
&:focus {
    outline: none;
}
`;

export const Navigation = styled.nav`
    background: var(--mainBlue)!important;
    .nav-link {
        color: var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }

`;

export const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all .5s linear;
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all .5s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0,0.2)
        }
        .card-footer {
            background: rgba(247, 247, 247)
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }

    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding 0.2rem 0.4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0.5rem ;
        transform: translate(100%, 100%);
        transition: all .5s linear;

    }
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }
    .cart-btn:hover {
        color: car(--mainBlue);
        cursor: pointer
    }    
`;