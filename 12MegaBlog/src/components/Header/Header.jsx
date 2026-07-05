import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-pink-200 shadow-md">
      <Container>
        <nav className="flex items-center justify-between py-1 h-20">

          {/* Logo */}
              <div className="flex items-center justify-start">
               <Link to="/" className="flex items-center justify-start">
                <Logo width="250px" />
            </Link>
         </div>
          {/* Navigation */}
          <ul className="flex items-center gap-2 md:gap-3 ml-auto flex-wrap">

            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-1 text-sm rounded-full bg-pink-100 text-pink-700 font-medium transition-all duration-300 hover:bg-pink-600 hover:text-white hover:shadow-lg"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li className="ml-2">
                <LogoutBtn />
              </li>
            )}

          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header