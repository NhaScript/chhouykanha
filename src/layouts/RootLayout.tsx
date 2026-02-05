import { Outlet } from "react-router"

function RootLayout() {
  return (
    <main className="max-w-xl mx-auto my-10 px-4 lg:px-0">
            <Outlet />
    </main>
  )
}

export default RootLayout
