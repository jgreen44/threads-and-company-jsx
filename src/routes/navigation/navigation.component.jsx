import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';
import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.styles';

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className={'logo'} />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to={'/shop'}>SHOP</NavLink>
          {currentUser ? (
            <NavLink as={'span'} onClick={signOutUser}>
              {' '}
              SIGN OUT{' '}
            </NavLink>
          ) : (
            <NavLink to={'/auth'}>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
