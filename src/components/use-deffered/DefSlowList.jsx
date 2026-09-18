// SlowList.jsx
import { memo } from 'react';

const SlowItem = ({ text }) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // burn 1ms per item to emulate very slow code
  }

  return (
    <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 shadow-sm">
      Text: {text || '—'}
    </li>
  );
};

const DefSlowList = memo(({ text }) => {
  const items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="grid max-h-80 gap-2 overflow-y-auto pr-1">{items}</ul>;
});

export default DefSlowList;