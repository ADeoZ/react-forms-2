import PropTypes from 'prop-types';
import TrainRecordItem from "./TrainRecordItem";

export default function TrainRecordHistory({ trains, onEdit, onDelete }) {

  trains.sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="TrainRecord__history">
      <header className="TrainRecord__header">
        <div>Дата (ДД.ММ.ГГГГ)</div>
        <div>Пройдено км</div>
        <div>Действия</div>
      </header>
      <ul className="TrainRecord__table">
        {trains.map((item =>
          <TrainRecordItem key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

TrainRecordHistory.defaultProps = {
  trains: [],
};

TrainRecordHistory.propTypes = {
  trains: PropTypes.arrayOf(PropTypes.object),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}