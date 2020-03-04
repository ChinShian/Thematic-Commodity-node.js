import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="chin-bigtitle">
        <Link to="/" exact><img src="./header-footer/images/title.png" alt="" /></Link>
      </div>
      <div className="chin-product">
        <div className="chin-search">
          <img src="./header-footer/images/search.svg" alt="" />
        </div>
        <div>
          <ul className="chin-productoptions">
            <li><Link to="/watch"  activeClassName="Watch"> 穿戴式裝置</Link></li>
            <li><Link to="/headset"  activeClassName="Watch">耳機/喇叭</Link></li>
            <li><Link to="/motion"  activeClassName="Watch">運動攝影機</Link></li>
            <li>周邊</li>
            <li>優惠卷專區</li>
          </ul>
        </div>
        <div className="chin-bag-heart-user">
          <img src="./header-footer/images/shopping-bag.svg" alt="" />
          <img src="./header-footer/images/heart.svg" alt="" />
          <img src="./header-footer/images/user.svg" alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
