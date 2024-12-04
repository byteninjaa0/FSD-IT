import React from 'react'
import Marks from './Marks';

const DisplayMarks = () => {
  const students = [
    {name: 'Noman' , roll: 115, m1: 8, m2: 9,m3: 9},
    {name: 'Sohail' , roll: 169, m1: 1, m2: 3,m3: 0.5},
    {name: 'Sajid' , roll: 109, m1: 4, m2: 5,m3: 2},
    {name: 'Raghib' , roll: 108, m1: 3, m2: 2,m3: 1.5}
  ];
  return (
    <div>
      {students.map((student,index)=>(<Marks key={index} name={student.name} rollNo={student.roll} m1={student.m1} m2={student.m2} m3={student.m3} />))}
    </div>
  )
}

export default DisplayMarks;
