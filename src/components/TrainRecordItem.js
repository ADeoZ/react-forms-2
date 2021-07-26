import PropTypes from 'prop-types';

export default function TrainRecordItem({ item, onEdit, onDelete }) {
  return (
    <li className="TrainRecord__item">
      <div>{item.date.toLocaleDateString()}</div>
      <div>{+item.dist.toFixed(2)}</div>
      <div>
        <i className="material-icons" onClick={onEdit(item.id)}>edit</i>
        <i className="material-icons" onClick={onDelete(item.id)}>delete</i>
      </div>
    </li>
  );
}

TrainRecordItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    dist: PropTypes.number,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}