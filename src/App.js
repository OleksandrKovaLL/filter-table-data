import React from 'react';
import './App.css';
import axios from 'axios';
import Table from './components/Table';


function App() {

  const dataUrl = 'db.json';

  const [initialData, setData] = React.useState([]);
  const [directionSort, setDirectionSort] = React.useState(true);

  React.useEffect(() => {
    axios.get(dataUrl)
      .then(({ data }) => {
        setData(data.participants);
      });
  }, []);


  const sortData = (field) => {

    const copyData = initialData.concat();

    let sortedData;

    if (directionSort) {
      sortedData = copyData.sort(
        (firstElem, secondElem) => firstElem[field] > secondElem[field] ? 1 : -1);
    } else {
      sortedData = copyData.sort(
        (firstElem, secondElem) => firstElem[field] > secondElem[field] ? -1 : 1);
    }






    setData(sortedData);
    setDirectionSort(!directionSort);
  }

  return (
    <div className="container">
      <Table initialData={initialData}
        sortData={sortData}
        directionSort={directionSort} />
    </div >
  );
}

export default App;
