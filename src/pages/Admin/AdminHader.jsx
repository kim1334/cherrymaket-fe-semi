import{
    Header,
    HeaderWrapper,
    H1,
    Nabvar,
    Ul,
    Li,
    Util,
} from './style.jsx';
import { Link } from 'react-router-dom';


const AdminHader = () => {
  return (
    <Header>
      <HeaderWrapper>
        <Link to="/admin">
          <H1>MaketCherry Admin</H1>
        </Link>
        <Link to="/">
          <Util>CherryMain page</Util>
        </Link>
        <Nabvar>
          <Ul>
          <Link to="/admin/product">
            <Li>Product</Li>
            </Link>
            <Link to="/admin/payment">
            <Li>Payment</Li>
            </Link>
            <Link to="/admin/notice">
            <Li>Notice</Li>
            </Link>
          </Ul>
        </Nabvar>
      </HeaderWrapper>
    </Header>
  );
};

export default AdminHader;
