import { Loader2 } from 'lucide-react';

const ButtonForm = ({ checkingEmail }) => {
  return (
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
  )
}

export default ButtonForm;
