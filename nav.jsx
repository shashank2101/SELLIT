import React from 'react';
import Product1  from './addpro'; // Import Product1 component

function Nav() {
  
  return (
    <nav>
      <div className="navbar navbar-light bg-light" style={{ display: 'flex', flexDirection: 'row' }}>
        <h1 style={{ color: 'white', padding: '10px' }}>SELLIT</h1>
        <form className="form">
          <div className="search-bar">
            <input type="search" name="search" placeholder="Search for items....." />
            <button style={{ color: 'white' }}>
              <img
                src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
                alt="Search"
                style={{ height: '20px' }}
              />
            </button>
          </div>
          <input
            type="submit"
            value="Search"
            style={{
              backgroundColor: 'transparent',
              fontSize: 'medium',
              border: '2px solid',
              borderRadius: '20px',
              width: '100px',
              height: '45px',
              marginLeft: '10px',
              color: 'white',
              marginTop: '7px',
            }}
          />
        </form>
        <div className="dropdown">
          <span>CATEGORIES</span>
          <div className="dropdown-content">
            <div style={{ display: 'flex', flexDirection: 'column', padding: '5px' }}>
              <button>Electronics</button>
              <button>Clothes</button>
              <button>Vehicles</button>
              <button>Footwear</button>
            </div>
          </div>
        </div>
        <button className="sell-button" onClick={Product1.addProduct}>Sell</button>
      </div>
    </nav>
  );
}

export default Nav;
