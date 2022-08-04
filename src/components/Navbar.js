import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import Profile from '../images/account_circle_FILL0_wght400_GRAD0_opsz48.svg'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    font-size: 13px;
`;

const LeftLinks = styled.div`
    padding: 10px;
    display: flex;
    margin-left: 10px;
`;
const RightLinks = styled.div`
    padding: 10px;
    margin-right: 10px;
    display: flex;
    align-items: center;
`;

const NavLinks = styled(Link)`
    padding: 0 8px;
    text-decoration: none;
    color: #000000;

    svg{
        height: 24px;
        width: 24px;
    }
`;

const Navbar = () => {
  return (
    <Nav>
        <LeftLinks>
            <NavLinks to="/about" css={`height:2.1vh`}>About</NavLinks>
            <NavLinks to="/store" css={`height:2.1vh`}>Store</NavLinks>
        </LeftLinks>
        <RightLinks>
            <NavLinks to="/gmail" css={`height:2.1vh`}>Gmail</NavLinks>
            <NavLinks to="/images" css={`height:2.1vh`}>Images</NavLinks>
            <NavLinks 
                to="/"
                css={`
                    padding-right: 10px;
                `}
            >
                <svg focusable='false' viewBox='0 0 24 24'>
                    <path d='M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z' />
                </svg>
            </NavLinks>
            <Link 
                to="/"
                css={`
                    height: auto;
                    transform: scale(0.5);
                `}  
            >
                <img src={Profile} alt="profile" />
            </Link>
        </RightLinks>
    </Nav>
  )
}

export default Navbar