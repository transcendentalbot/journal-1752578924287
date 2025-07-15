// app/journal/page.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import JournalEntry from '@/components/JournalEntry';

export default function JournalPage() {
  const { data: session } = useSession();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await fetch('/api/entries');
      const data = await res.json();
      setEntries(data.entries);
    };

    if (session) {
      fetchEntries();
    }
  }, [session]);

  if (!session) {
    return <p>You must be signed in to view your journal.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Journal</h1>
      <div className="grid grid-cols-1 gap-4">
        {entries.map((entry) => (
          <JournalEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}