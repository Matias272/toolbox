interface SpinnerProps {
  size?: "sm" | "md" | "lg";
}

export default function Spinner({ size = "lg" }: SpinnerProps) {
  const sizeClasses = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div className="fixed inset-0 z-999 bg-black/90 flex justify-center items-center">
      <div
        className={`inline-block ${sizeClasses[size]} border-gray-300 border-t-blue-600 rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
