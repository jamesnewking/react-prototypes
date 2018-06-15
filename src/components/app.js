import React from 'react';
import Table from './table';

const students = [
    {
        student: 'Ashley',
        course: 'music',
        grade: 40
    },
    {
        student: 'Kaylie',
        course: 'physical ed',
        grade: 50
    },
    {
        student: 'Ellen',
        course: 'computer science',
        grade: 60
    }
];


let App = function(){
  return (<div className="container">
      <h1>Student Grade Table</h1>
      <Table data={students}/>
  </div>);
};

export default App;



