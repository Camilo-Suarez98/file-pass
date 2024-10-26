import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      {children}
      <Toaster position="top-right" />
    </div>
  )
}

export default Layout;
