import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #333;
  .container_menu{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    .logo{
        a{
            color: #fff;
            text-transform: uppercase;
        }
    }
    .links{
        display: none;
        li{
            a{
                color: #fff;
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                @media(min-width: 768px){
                   font-size: 13px;
                }
            }
        }
        @media(min-width: 768px){
            display: flex;
            flex-direction: row;
            gap: 10px;
        }
    }
  }
`;

export {
    Navbar
}