type Entry = {
  time: string;
  temp: number;
};

export function getDayData(entries: Entry[], dayIndex: number): Entry[] {
  if (dayIndex === 0) {
    return entries.slice(0, 8); 
  }
  const daysMap = new Map<string, Entry[]>();

  for (const entry of entries) {
    const date = entry.time.slice(0, 10); // "YYYY-MM-DD"
    if (!daysMap.has(date)) {
      daysMap.set(date, []);
    }
    daysMap.get(date)!.push(entry);
  }

  const groupedDays = Array.from(daysMap.values());


  return groupedDays[dayIndex] || [];
}