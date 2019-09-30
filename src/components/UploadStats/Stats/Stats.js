import React from 'react';
import PropTypes from 'prop-types';
import OneStat from '../OneStat/OneStat';

const Stats = ({ title, stats }) => {
  return (
    <section className="stats-section">
      <h2 className="title">{title}</h2>
      <OneStat className="stat-list" stats={stats} />
    </section>
  );
};

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
export default Stats;
