import { Link } from 'react-router-dom';
import { Aside, Container } from './Styles'
import logo from '@/assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
export const Header = () => {
  const cart = [4, 5]
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to={`cart`} aria-disabled={cart?.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart?.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </Container>
  );
};

export default Container;