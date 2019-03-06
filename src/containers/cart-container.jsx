import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './header-container';
import CartDetail from '../components/cart/cart-detail-page'
import Footer from '../components/common/footer';
import { addQuantity, subtractQuantity } from '../actions/product-quantity-actions';
import { addToCart, removeItemFromCart } from '../actions/cart-actions';

const CartDetailContainer = (props) => {
    return (
        <div>
        <HeaderContainer showCartAndLoginInfo={true} />
        <CartDetail {...props} />
        <Footer />
        </div>
    );
}



const mapStateToProps = (state) => {
    return {
        product: state.products.selected_product || {},
        cartItems: state.cart.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => { dispatch(addToCart(product)) },
        removeProductHandler: (productId) => { dispatch(removeItemFromCart(productId))},
        incrementProductQuntity: (productId) => { dispatch(addQuantity(productId)) },
        decrementProductQuntity: (productId) => { dispatch(subtractQuantity(productId)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetailContainer)


