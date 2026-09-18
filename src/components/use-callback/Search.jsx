// Search.jsx
import { memo } from 'react';

function Search({ onChange }) {
  console.log('Search rendered!');

  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  );
}

export default memo(Search);