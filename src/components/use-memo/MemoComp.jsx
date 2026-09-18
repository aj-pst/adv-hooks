import React,{useMemo, useState} from 'react'
import { initialItems } from './utils';

const MemoComp = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(()=>(
    items.find(
    (item) => item.isSelected
  )
),[items])

  return (
    <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-800">useMemo demo</h2>
        <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
          Count: {count}
        </span>
      </div>

      <p className="mb-2 text-sm text-slate-600">
        Selected item: <span className="font-semibold text-slate-900">{selectedItem?.id}</span>
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Increment
      </button>
    </div>
  );
}

export default MemoComp
