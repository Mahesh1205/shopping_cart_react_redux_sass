import React from 'react';
import HeaderContainer from './header-container';
import ProductContainer from './product-list-container';
import Footer from '../components/common/footer';

const App = () => {
    return (
        <div>
        <HeaderContainer showCartAndLoginInfo={true} />
        <ProductContainer></ProductContainer>
        <Footer />
        </div>
    );
}

export default App;

