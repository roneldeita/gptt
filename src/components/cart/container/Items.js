import { connect } from 'react-redux';
import Cart from '../presentation/Cart'

const  mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const Items = connect(mapStateToProps)(Cart)

export default Items
