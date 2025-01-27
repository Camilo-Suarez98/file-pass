import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useAuth } from '../context/AuthContext';
import Layout from '../layout';
import InputForm from '../components/InputForm';
import ButtonForm from '../components/ButtonForm';

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
      toast.success('Succesful login');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Incorrect email or password');
      console.error(error);
    } finally {
      setCheckingEmail(false);
    }
  }

  return (
    <Layout>
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to FilePass</h1>
          <p className="text-gray-600 mt-2">Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputForm
            labelName="Email"
            icon={Mail}
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={data.email}
            onChange={handleChange}
            autoComplete='username'
          />

          <InputForm
            labelName="Password"
            icon={Lock}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
            autoComplete='current-password'
          />

          <ButtonForm checkingEmail={checkingEmail} />
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Credencials: <strong>eve.holt@reqres.in</strong> / Any password
        </p>
      </div>
    </Layout>
  )
}

export default Login;
