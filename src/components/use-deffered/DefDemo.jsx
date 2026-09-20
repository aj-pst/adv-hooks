// Demo.jsx
import { useDeferredValue, useState } from 'react';
import SlowList from './DefSlowList';

const DefDemo = () => {
  const [query, setQuery] = useState('');
    const defferedValue=useDeferredValue(query)

  return (
    <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">DeferredValue Demo</h2>

      <label className="mb-4 block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Search</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </label>

      <SlowList text={defferedValue} />
    </div>
  );
};

export default DefDemo;