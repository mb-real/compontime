import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/" className="logo">
          Compontime
        </Link>

        <nav className="main-nav">
          <Link to="/">خانه</Link>
          <Link to="/products">محصولات</Link>
          <Link to="/cart">سبد خرید</Link>
        </nav>

        <div className="header-actions">
          <Link to="/admin">مدیریت</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
