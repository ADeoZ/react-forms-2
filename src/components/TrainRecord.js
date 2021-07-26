import { useState } from 'react';
import { nanoid } from 'nanoid';
import TrainRecordForm from './TrainRecordForm';
import TrainRecordHistory from './TrainRecordHistory';

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
    setForm(prevForm => ({ ...prevForm, [target.name]: target.value }));
  }

  const handleDelete = (id) => {
    return () => {
      setTrains(prev => trains.filter((item) => item.id !== id));
    }
  }

  const handleEdit = (id) => {
    return () => {
      const record = trains.find((item) => item.id === id);
      setForm({ date: record.date.toLocaleDateString(), dist: record.dist, edit: true });
    }
  }

  return (
    <div className="TrainRecord">
      <TrainRecordForm form={form} onSubmit={handleSubmit} onChange={handleChange} />
      <TrainRecordHistory trains={trains} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}