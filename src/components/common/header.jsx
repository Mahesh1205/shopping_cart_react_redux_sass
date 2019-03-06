import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './header.scss';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false
    };
  }

  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart
    });
  }


  render() {
    return (
      <header>
        <div className="container">
          <div className="brand">
            <img
              className="logo"
              src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png"
              alt="Veggy Brand Logo"
            />
          </div>

          {this.props.showCartAndLoginInfo && 
            <div className="cart">
              <div className="cart-info">
                <table>
                  <tbody>
                    <tr>
                      <td>Total items</td>
                      <td>:</td>
                      <td>
                        <strong>{this.props.totalItems}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>Total Amount</td>
                      <td>:</td>
                      <td>
                        <strong>{this.props.totalAmount}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

             
              <Link to={`/cart`}>
              {/* //<button className="btn-cart" onClick={this.handleCart.bind(this)}>     </button> */}
                <img
                  src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                  alt="Cart"
                />
                <span className="cart-count">{this.props.totalItems ? this.props.totalItems : ''}</span>
         
              </Link>

            </div>
          }
          {this.props.showCartAndLoginInfo && <div className="login-link">
            <ul className="link">
              <li><Link to="/login">Login/</Link><Link to="/register">Register</Link></li>
            </ul>
          </div>
          }
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  showCartAndLoginInfo: false,
}

export default Header;
