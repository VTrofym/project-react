import PropTypes from 'prop-types'
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { iconSize } from 'constans';
import css from './Event.module.css'

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <div className={css.event}>
      <h2 className={css.title}>{ name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.m}/>
        {location}
      </p>
      <p className="info">
        <FaUserAlt className={css.icon} size={iconSize.m} />
        {speaker}
      </p>
      <p className="info">
        <FaCalendarAlt className={css.icon} size={iconSize.m} />
        {start}
      </p>
      <p className="info">
        <FaClock className={css.icon} size={iconSize.m} />
        Duration
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
}




