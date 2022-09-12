import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = (props) =>  {
  let navigate = useNavigate();
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar brand'><center><h1>Mobile Shopping Cart</h1></center></a>
      <div >
              <button className="btn btn-primary" onClick={() => {navigate("/checkout")}}>
                <span>Checkout</span> {""}
              </button>
                    
           {' '}
          {props.countCartItems ? (
            <button className="btn btn-primary">cart<span className='badge bg-secondary'>{props.countCartItems}</span></button>
          ) : (
            ''
          )}
        {' '}
             
      </div>
      </nav>    
  );
}

export default Header;
