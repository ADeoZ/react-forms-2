export default function TrainRecordForm({ form, onSubmit, onChange }) {
  // const clearForm = { date: '', dist: '', edit: false };
  // const [form, setForm] = useState(clearForm); 

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (form.date === '' || form.dist === '') {
  //     return;
  //   }

  //   const formatDate = form.date.split('.');
  //   const date = new Date(formatDate[2], formatDate[1] - 1, formatDate[0]);

  //   const hasRecord = trains.findIndex((item) => item.date.getTime() === date.getTime());
  //   if (hasRecord !== -1) {
  //     if (form.edit) {
  //       trains[hasRecord].dist = Number(form.dist);  
  //     } else {
  //       trains[hasRecord].dist += Number(form.dist);  
  //     }
  //   } else {
  //     setTrains(prev => [...prev, { id: nanoid(), date, dist: Number(form.dist) }]);
  //   }
  //   setForm(clearForm);
  // }

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