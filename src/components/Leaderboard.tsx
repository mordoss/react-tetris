import { useLeaderboard } from '../hooks/useLeaderboard';

const Leaderboard = () => {
  const { leaderboardSorted } = useLeaderboard();

  return (
    <div>
      {leaderboardSorted?.map((line, i) => (
        <p key={i}>
          {line[0]}: {line[1]}
        </p>
      ))}
    </div>
  );
};

export default Leaderboard;
