import React from 'react';

let Table = function(props){
    const tableRows = props.data.map(function(item,index){
        console.log (item);

        return (<tr key={index}>
            <td>{item.student}</td>
            <td>{item.course}</td>
            <td>{item.grade}</td>
        </tr>)
    });

    return <table className="table">
        <thead className="thead-inverse">
        <tr>
            <th>i. Name</th>
            <th>ii. Course</th>
            <th>iii. Grade</th>
        </tr>
        </thead>
        <tbody>
            {tableRows}
        </tbody>
    </table>
};

export default Table;