export default function TextArea() {
  return (
    <>
      <div className="mb-2">
        <label className="block text-base font-medium leading-6 text-gray-900">
          Description
        </label>
        <div className="mt-2">
          <textarea
            id="about"
            name="about"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter a Description"
          />
        </div>
      </div>
    </>
  );
}
