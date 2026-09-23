function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}) {
  const variants = {
    default:
      "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700",
    outline:
      "border border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700",
    ghost: "text-slate-600 hover:bg-slate-100 hover:text-indigo-700",
  };

  const sizes = {
    default: "h-11 px-5 py-2.5",
    sm: "h-9 rounded-lg px-3 text-sm",
    lg: "h-12 rounded-xl px-7",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}

export { Button };
