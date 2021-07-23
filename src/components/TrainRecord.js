import { useState } from 'react';
import { nanoid } from 'nanoid';
import TrainRecordForm from './TrainRecordForm';

export default function TrainRecord() {
  const clearForm = { date: '', dist: '', edit: false };
  const [form, setForm] = useState(clearForm); 
  const [trains, setTrains] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.date === '' || form.dist === '') {
      return;
    }

    const formatDate = form.date.split('.');
    const date = new Date(formatDate[2], formatDate[1] - 1, formatDate[0]);

    const hasRecord = trains.findIndex((item) => item.date.getTime() === date.getTime());
    if (hasRecord !== -1) {
      if (form.edit) {
        trains[hasRecord].dist = Number(form.dist);  
      } else {
        trains[hasRecord].dist += Number(form.dist);  
      }
    } else {
      setTrains(prev => [...prev, { id: nanoid(), date, dist: Number(form.dist) }]);
    }
    setForm(clearForm);
  }

  const handleChange = ({ target }) => {
    setForm(prevForm => ({...prevForm, [target.name]: target.value}));
  }

  const handleDelete = (id) => {
    return () => {
      setTrains(prev => trains.filter((item) => item.id !== id));
    }
  }

  const handleEdit = (id) => {
    return () => {
      const record = trains.find((item) => item.id === id);
      setForm({date: record.date.toLocaleDateString(), dist: record.dist, edit: true});
    }
  }

  trains.sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="TrainRecord">
      {/* <form className="TrainRecord__form" onSubmit={handleSubmit}>
        <label>Дата (ДД.ММ.ГГГГ)
          <input className="TrainRecord__date" name="date" value={form.date} onChange={handleChange}/>
        </label>
        <label>Пройдено км
          <input className="TrainRecord__dist" name="dist" value={form.dist} onChange={handleChange}/>
        </label>
        <button className="TrainRecord__button">OK</button>
      </form> */}
      <TrainRecordForm form={form} onSubmit={handleSubmit} onChange={handleChange} />

      <div className="TrainRecord__history">
        <header className="TrainRecord__header">
          <div>Дата (ДД.ММ.ГГГГ)</div>
          <div>Пройдено км</div>
          <div>Действия</div>
        </header>
        <ul className="TrainRecord__table">
          {trains.map((item => {
            return (
              <li className="TrainRecord__item" key={item.id}>
              <div>{item.date.toLocaleDateString()}</div>
              <div>{+item.dist.toFixed(2)}</div>
              <div>
                <i className="material-icons" onClick={handleEdit(item.id)}>edit</i>
                <i className="material-icons" onClick={handleDelete(item.id)}>delete</i>
              </div>
            </li>
            );
          }))}
        </ul>
      </div>
    </div>
  );
}