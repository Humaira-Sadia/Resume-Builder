
export default function InputField({
  type = "text",
  label,
  placeholder,
  setState,
}) {
  const updateState = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="mb-2">
      <label className="block text-base font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type={type}
          name=""
          id=""
          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          onInput={updateState}
        />
      </div>
    </div>
  );
}
