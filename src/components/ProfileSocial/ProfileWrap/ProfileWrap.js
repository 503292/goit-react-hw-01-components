import React from 'react';
import Profile from '../Profile/Profile';
import user from '../../../userData';
import css from './ProfileWrap.module.css';

const ProfileWrap = () => {
  return (
    <section className={css.profileWrap}>
      <Profile user={user} />
    </section>
  );
};

export default ProfileWrap;
