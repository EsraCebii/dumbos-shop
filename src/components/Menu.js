import { React,  } from 'react';
import { Menu, Image, Dropdown, Button, } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { useBasket } from '../context/BasketContext';
import { useAuth } from '../context/AuthContext';
import { useFav } from "../context/FavContext";

function Menuu() {
  const { loggedIn, logout, user } = useAuth();
  const { items } = useBasket();
  const { fitems } = useFav();


  return (
    < >
      <Menu secondary className='menu' >
        <Link to="/">
          <Menu.Item>
            <Image size='tiny' src='https://cdn3.iconfinder.com/data/icons/nature-animals/512/animals-512.png' />
          </Menu.Item>
        </Link>

        <Menu.Item
        >
          <Link to="/">
            <span className="span">Dumbo's Shop</span>
          </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          {
            items.length > 0 && (
              <Menu.Item>
                <Link to="/cart">
                  <Button
                    color='yellow'
                    content='Cart'
                    icon='add to cart'
                    label={{ basic: true, color: 'yellow', pointing: 'left', content: items.length }}
                  />
                </Link>
              </Menu.Item>
            )
          }

          {
            fitems.length > 0 && (
              <Menu.Item>
                <Link to="/fav">
                  <Button
                    color='red'
                    content='Fav'
                    icon='heart'
                    label={{ basic: true, color: 'red', pointing: 'left', content: fitems.length }}
                  />
                </Link>
              </Menu.Item>
            )
          }
          {
            loggedIn && (
              <Menu.Item>
              <Dropdown icon="user" text={user.name} simple item  size='huge'>
                <Dropdown.Menu>
                  <Dropdown.Item><button onClick={()=> logout()} >Log Out</button ></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            )
          }
          {!loggedIn && (
            <>
              <Dropdown text='Sign In' simple item >
                <Dropdown.Menu>
                  <Link to="/signin">
                    <Dropdown.Item>Sign In</Dropdown.Item>
                  </Link>
                  <Link to="/signup" >
                    <Dropdown.Item>Register</Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
        </Menu.Menu>

      </Menu>
    </>

  )
}
export default Menuu;


