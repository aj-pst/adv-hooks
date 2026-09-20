import { useCallback, useState } from 'react';
import { shuffle } from '@/utils';
import Search from './Search';

const allUsers = ['john', 'alex', 'george', 'simon', 'james'];

const CallbackComp = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text) => {
    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  },[])

  return (
    <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
         <h2 className="text-lg font-semibold text-slate-800 mb-12">useCallBack demo</h2>
      <div className="mb-4 flex items-center gap-3">
        <button
          onClick={() => setUsers(shuffle(allUsers))}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>

      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
          >
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CallbackComp
