import React from 'react';
import Arrow from './Arrow';


function Table({ initialData, sortData, directionSort }) {

    const [fieldData, setFieldData] = React.useState('');
    const [searchValue, setSearchValue] = React.useState('');

    const fieldSortData = (field) => {
        sortData(field);
        setFieldData(field);
    };

    return (
        <>
            <form className="input-group md-3 mt-3" >
                <div className="form-group">
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Seach by name"
                        value={searchValue}
                        onChange={(event) => { (setSearchValue(event.target.value)) }}
                    />
                </div>
            </form >

            <div className="table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th className="clickable" onClick={() => { fieldSortData('name') }}>
                            Name {fieldData === 'name' ? <Arrow directionSort={directionSort} /> : null}</th>
                        <th>Surname</th>
                        <th className="clickable" onClick={() => { fieldSortData('hitting') }}>
                            Hitting {fieldData === 'hitting' ? <Arrow directionSort={directionSort} /> : null}</th>
                        <th className="clickable" onClick={() => { fieldSortData('rateOfFire') }}>
                            Rate of fire {fieldData === 'rateOfFire' ? <Arrow directionSort={directionSort} /> : null}</th>
                    </tr>
                </thead>
                <tbody>

                    {initialData.filter((val) => {
                        if (searchValue === '') {
                            return val;
                        } else if (val.name.toLowerCase()
                            .includes(searchValue.toLowerCase())) {
                            return val;
                        };
                    }).map(
                        item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td>{item.hitting}</td>
                                <td>{item.rateOfFire}</td>
                            </tr>
                        ))}
                </tbody>
            </div>
        </>
    )
}

export default Table;