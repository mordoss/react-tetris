import { ref, onValue, set } from 'firebase/database';
import { useState, useEffect } from 'react';

import db from '../api/firebase';

export const useLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<[] | null>(null);
  const leaderboardRef = ref(db, 'leaderboard/');

  useEffect(() => {
    onValue(leaderboardRef, (snapshot) => {
      const data = snapshot.val();
      setLeaderboard(data);
    });
  }, []);

  const writeToLedaerboard = (name: string, score: number) => {
    set(ref(db, `leaderboard/${name}`), score);
  };

  const leaderboardSorted =
    leaderboard &&
    Object.entries(leaderboard).sort((f, s) => (f[1] > s[1] ? -1 : 1));

  return { leaderboardSorted, writeToLedaerboard };
};
