export const Button = ({ children, className = "", ...props }) => (
    <button
      className={`px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:opacity-90 transition shadow-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
  