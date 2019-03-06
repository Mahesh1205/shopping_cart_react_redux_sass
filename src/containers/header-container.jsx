import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/header'

export default connect(
    (state) => ({    
         totalAmount : state.cart.totalAmount,
         totalItems : state.cart.addedItems.length    
    })
  )(Header);