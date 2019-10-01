import React from 'react';
import ProfileComponent from './ProfileComponent/Profiles/Profiles';
import StatsComponent from './StatsComponent/Stats/Stats';
import stats from '../stats.json';

const App = () => {
  return (
    <>
      <ProfileComponent />
      <StatsComponent title="Upload stats" stats={stats} />
    </>
  );
};
export default App;
