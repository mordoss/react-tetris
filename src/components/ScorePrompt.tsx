import { useEffect } from 'react';
import { useLeaderboard } from '../hooks/useLeaderboard';

const ScorePrompt = ({ score }: { score: number }) => {
  const { writeToLedaerboard } = useLeaderboard();
  useEffect(() => {
    writeToLedaerboard(`novi-${Math.round(Math.random() * 100)}`, score);
  }, []);
  return <div>{score}</div>;
};

export default ScorePrompt;
