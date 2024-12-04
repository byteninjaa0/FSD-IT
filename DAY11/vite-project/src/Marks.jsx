import './Marks.css';
const Marks = ({name,rollNo,m1,m2,m3}) => {
  return (
    <div id='container2'>
      <h1 id='marks'>Marksheet</h1>
      <h2>Name: {name}</h2>
      <h2>Roll No: {rollNo}</h2>
      <h2>Semester_1: {m1} SGPA</h2>
      <h2>Semester_2: {m2} SGPA</h2>
      <h2>Semester_3: {m3} SGPA</h2>
    </div>
  )
}

export default Marks
