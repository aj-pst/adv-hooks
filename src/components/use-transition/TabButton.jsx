import React,{useTransition} from "react";
const TabButton = ({ title, variant, onClick }) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      onClick?.();
    });
  };

  const baseClasses =
    'rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70';

  const variantClasses =
    variant === 'primary'
      ? 'bg-slate-900 text-white hover:bg-slate-700 focus:ring-slate-500'
      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 focus:ring-slate-300';

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className={`${baseClasses} ${variantClasses}`}
    >
      {isPending ? 'Loading...' : title}
    </button>
  );
};
export default TabButton