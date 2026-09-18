// PostsTab.jsx
import { memo } from 'react';

const SlowPost = ({ index }) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // burn 1ms per item to emulate very slow code
  }

  return (
    <li className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
      Post #{index + 1}
    </li>
  );
};

const PostsTab = () => {
  console.log('[ARTIFICIALLY SLOW] Rendering 2500 <SlowPost />');

  const items = [];
  for (let i = 0; i < 2500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className="grid max-h-80 gap-2 overflow-y-auto pr-1">{items}</ul>;
};

export default memo(PostsTab);