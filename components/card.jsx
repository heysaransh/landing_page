export const Card = ({ children, className = "" }) => (
    <div className={`rounded-xl border border-gray-700 bg-gray-900 p-4 shadow-md hover:border-purple-500 transition-all ${className}`}>
      {children}
    </div>
  );
  
  export const CardContent = ({ children, className = "" }) => (
    <div className={`p-2 ${className}`}>{children}</div>
  );
  