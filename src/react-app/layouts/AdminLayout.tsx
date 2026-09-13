import { Link, Outlet } from "react-router-dom"

function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Compontime</h2>

        <p>پنل مدیریت</p>

        <nav>
          <Link to="/admin">داشبورد</Link>
          <Link to="/admin/products">محصولات</Link>
          <Link to="/admin/products/new">
            افزودن محصول
          </Link>
        </nav>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
