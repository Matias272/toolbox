type InputFieldProps = {
    type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  status?: string[];
}

export default function InputField({
  type,
  name,
  placeholder,
  status,
}: {
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  status?: string[];
}) {
  return (
    <div className="flex-1 min-w-0">
      <label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`w-full px-3 py-2 bg-white ${Boolean(status) ? "border-red-500" : "border-black focus:outline-0"}`}
        />
      </label>

      {Boolean(status) && (
        <p id={`${name}_statusMessage`} role="alert">
          {status?.map((message, index) => (
            <span className="text-red-500" key={`${message}_${index}`}>
              {message}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
