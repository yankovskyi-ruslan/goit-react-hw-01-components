import PropTypes from 'prop-types';
import { Stats } from './stats';
import css from './statistics.module.css';

export const Statistics = ({ stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.statList}>
      {stats.map(stat => (
        <Stats key={stat.id} label={stat.label} percentage={stat.percentage} />
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object.isRequired),
};