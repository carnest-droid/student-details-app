function Card({ className = "", ...props }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm ${className}`}
      {...props}
    />
  );
}

function CardHeader({ className = "", ...props }) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
  );
}

function CardTitle({ className = "", ...props }) {
  return (
    <h3
      className={`text-xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  );
}

function CardDescription({ className = "", ...props }) {
  return (
    <p className={`text-sm text-slate-500 ${className}`} {...props} />
  );
}

function CardContent({ className = "", ...props }) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
}

function CardFooter({ className = "", ...props }) {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
