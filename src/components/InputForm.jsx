const InputForm = ({
  labelName,
  value,
  onChange,
  type,
  name,
  autoComplete,
  placeholder,
  icon: Icon,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {labelName}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type={type}
          placeholder={placeholder}
          className="pl-10 w-full rounded-lg border bg-white text-black border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required
        />
      </div>
    </div>
  )
}

export default InputForm;
