// import toast from 'react-hot-toast';
import { useState } from 'react';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useAuth } from '../context/AuthContext';
import Layout from '../layout';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [checkingEmail, setCheckingEmail] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCheckingEmail(true);

    try {
      await login(data.email, data.password);
      toast.success('Inicio de sisión exitoso');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Usuario o contraseña incorrectos');
      console.error(error);
    } finally {
      setCheckingEmail(false);
    }
  }

  return (
    <Layout>
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Bienvenido a FilePass</h1>
          <p className="text-gray-600 mt-2">Por favor inicia sesión para continuar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="pl-10 w-full rounded-lg border bg-white text-black border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                value={data.email}
                onChange={handleChange}
                autoComplete='username'
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                className="pl-10 w-full rounded-lg border bg-white text-black border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="password"
                value={data.password}
                onChange={handleChange}
                autoComplete='current-password'
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center"
            disabled={checkingEmail}
          >
            {checkingEmail ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              'Iniciar sesión'
            )}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Credenciales: eve.holt@reqres.in / Cualquier contraseña
        </p>
      </div>
    </Layout>
  )
}

export default Login;
