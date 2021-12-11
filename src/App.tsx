import React, { useEffect, useRef, useState } from 'react'
import './App.scss'

const buttons = [
  'Job Focus',
  'Soft Skills',
  'Technical Skills',
  'Functional Expertise',
  'Domain Expertise',
  'Patent Expertice',
  'Personal Expertise',
  'Hard Expertise',
  'Domain Expertise',
  'Domain Expertise',
  'Domain Expertise',
]

function App() {
  const [leftShadow, setLeftShadow] = useState<boolean>(false)
  const [rightntShadow, setRightntShadow] = useState<boolean>(true)

  const headerRef = useRef<HTMLHtmlElement>(null)

  function getHeaderStyles() {
    const result = 'scroll'
    if (leftShadow === false) {
      return result + ' no-left'
    }
    if (rightntShadow === false) {
      return result + ' no-right'
    }
    return result
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const currentButton = event.currentTarget
    currentButton.scrollIntoView({ behavior: 'smooth' })
    
    document.querySelectorAll('button').forEach((button) => {
      button.classList.remove('active')
    })

    currentButton.classList.add('active')
  }

  function handleScroll() {
    if (headerRef.current) {
      const scrollLeft = Math.round(headerRef.current.scrollLeft)
      const scrollWhidth = headerRef.current.scrollWidth
      const clientWidth = document.body.clientWidth
      const scrollRight = scrollWhidth - clientWidth

      if (scrollLeft === 0) {
        return setLeftShadow(false)
      }
      if (scrollLeft === scrollRight) {
        return setRightntShadow(false)
      }

      setLeftShadow(true)
      setRightntShadow(true)
    }
  }

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <div className="App">
      <header
        className={getHeaderStyles()}
        ref={headerRef}
        onScroll={handleScroll}
      >
        <nav>
          <ul className="nav-list">
            {buttons.map((button, index) => (
              <li className="nav-item" key={index}>
                <button onClick={handleClick} disabled={index === 1}>
                  {button}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default App
