import React from 'react';
import ProfileComponent from './ProfileComponent/Profiles/Profiles';
import StatsComponent from './StatsComponent/Stats/Stats';
import FriendListComponent from './FriendListComponent/FriendList/FriendList';

import stats from '../stats.json';
import friends from '../friends.json';

const App = () => {
  return (
    <>
      <ProfileComponent />
      <StatsComponent title="Upload stats" stats={stats} />
      <FriendListComponent friends={friends} />
    </>
  );
};
export default App;
