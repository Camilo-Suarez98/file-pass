import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      {children}
      <Toaster position="top-center" />
    </div>
  )
}

export default Layout;
