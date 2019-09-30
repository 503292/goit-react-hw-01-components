import React from 'react';
import ProfileWrap from './ProfileSocial/ProfileWrap/ProfileWrap';
import Stats from './UploadStats/Stats/Stats';
import stats from '../stats.json';

const App = () => {
  return (
    <>
      <ProfileWrap />
      <Stats title="Upload stats" stats={stats} />
    </>
  );
};
export default App;
