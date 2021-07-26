import PropTypes from 'prop-types';

export default function TrainRecordForm({ form, onSubmit, onChange }) {
  return (
    <form className="TrainRecordForm" onSubmit={onSubmit}>
      <label>Дата (ДД.ММ.ГГГГ)
        <input className="TrainRecordForm__date" name="date" value={form.date} onChange={onChange} />
      </label>
      <label>Пройдено км
        <input className="TrainRecordForm__dist" name="dist" value={form.dist} onChange={onChange} />
      </label>
      <button className="TrainRecordForm__button">OK</button>
    </form>
  );
}

TrainRecordForm.defaultProps = {
  form: { date: '', dist: '', edit: false }
};

TrainRecordForm.propTypes = {
  form: PropTypes.exact({
    date: PropTypes.string,
    dist: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    edit: PropTypes.bool,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}