import React from 'react';
import PropTypes from 'prop-types';
import css from './StatOne.module.css';

const StatOne = ({ stats }) => {
  return (
    <>
      <ul className={css.statsList}>
        {stats.map(stat => (
          <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </>
  );
};

StatOne.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StatOne;
