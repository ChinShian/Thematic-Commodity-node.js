import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const product = document.querySelector('.chin-product').offsetTop
    const height = product + 68
    console.log(height)
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < height
      console.log(isTop)
      if (isTop !== true) {
        setScrolled(true)
        document
          .querySelector('.chin-three-position')
          .classList.add('chin-three-positioncome')
        document.querySelector('.chin-black').classList.add('chin-blackcome')
      } else {
        setScrolled(false)
      }
    })
  }, [])
  const navbar = (
    <>
      <div className="chin-black">
        <Container>
          <div className="chin-othernavbar">
            <div className="chin-title-sea">
              <img src="./header-footer/images/logo1.svg" alt="" />
              <img src="./header-footer/images/search1.svg" alt="" />
            </div>
            <div className="chin-classtext">
              <ul>
                <li>穿戴式裝置</li>
                <li>耳機/喇叭</li>
                <li>運動攝影機</li>
                <li>周邊</li>
                <li>優惠卷專區</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="chin-three-position">
        <img src="./header-footer/images/user.svg" alt="" />
        <img src="./header-footer/images/shopping-bag.svg" alt="" />
        <img src="./header-footer/images/heart.svg" alt="" />
      </div>
    </>
  )

  const headershow = (
    <>
      <div className="chin-bigtitle">
        <Link to="/">
          <img src="./header-footer/images/title.png" alt="" />
        </Link>
      </div>
      <div className="chin-product">
        <div className="chin-search">
          <img src="./header-footer/images/search.svg" alt="" />
        </div>
        <div>
          <ul className="chin-productoptions">
            <li>
              <Link to="/watch" ClassName="Watch">
                穿戴式裝置
              </Link>
            </li>
            <li>
              <Link to="/headset" ClassName="Watch">
                耳機/喇叭
              </Link>
            </li>
            <li>
              <Link to="/motion" ClassName="Watch">
                運動攝影機
              </Link>
            </li>
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
    </>
  )
  return (
    <>
      <header>{scrolled ? navbar : headershow}</header>
    </>
  )
}

export default Header
