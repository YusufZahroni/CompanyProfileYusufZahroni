export default function Field({ name, label, type }) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-1 text-sm font-semibold">
        {label}
      </label>
      {type === "text" && (
        <input
          type="text"
          name={name}
          id={name}
          className="bg-transparent border border-borderField py-2 px-2 w-full"
        />
      )}
      {type === "textarea" && (
        <textarea
          name={name}
          id={name}
          className="bg-transparent border border-borderField py-2 px-2 w-full h-40"
        />
      )}
    </div>
  );
}
