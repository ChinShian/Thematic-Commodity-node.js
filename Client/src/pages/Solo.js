import React, { useState, useEffect } from 'react'
import './style.css'

function Solo() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== true) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <>
      <div className={scrolled ? 'scrolled' : 'nav'}>
        <div className="nav_test">
          <h1>Hello</h1>
          <h1>HelloWorld</h1>
        </div>
      </div>
    </>
  )
}

export default Solo
