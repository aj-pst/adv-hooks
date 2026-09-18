// Demo.jsx
import { useState } from 'react';
import AboutTab from './AboutTab';
import ContactTab from './ContactTab';
import PostsTab from './PostTab';
import TabButton from './TabButton';

const Demo = () => {
  const [tab, setTab] = useState('about');

  const selectTab = (nextTab) => {
    setTab(nextTab);
  };

  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
         <h2 className="text-lg font-semibold text-slate-800 mb-12">useTransition demo</h2>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <TabButton
          title="About"
          onClick={() => selectTab('about')}
          variant={tab === 'about' ? 'primary' : 'secondary'}
        />
        <TabButton
          title="Posts"
          onClick={() => selectTab('posts')}
          variant={tab === 'posts' ? 'primary' : 'secondary'}
        />
        <TabButton
          title="Contact"
          onClick={() => selectTab('contact')}
          variant={tab === 'contact' ? 'primary' : 'secondary'}
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        {tab === 'about' && <AboutTab />}
        {tab === 'posts' && <PostsTab />}
        {tab === 'contact' && <ContactTab />}
      </div>
    </div>
  );
};

export default Demo;