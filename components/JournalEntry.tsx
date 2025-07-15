// components/JournalEntry.tsx
import { Entry } from '@prisma/client';

interface JournalEntryProps {
  entry: Entry;
}

export default function JournalEntry({ entry }: JournalEntryProps) {
  return (
    <div className="border rounded-md p-4">
      <h2 className="text-lg font-bold">{entry.title}</h2>
      <p>{entry.content}</p>
    </div>
  );
}