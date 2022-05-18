import logo from './logo.svg';
import './App.css';
import Employees from "./employees.json"


function App() {
  return (
    <div className="App">
      <p>Fechas</p>
      <tr>
        <td>EMPLEADOS</td>
      </tr>
      {Employees.data.map((item, i) => (
        <tr key={i}>
        <td>{item.first_name + ' ' + item.last_name}</td>
        </tr>
))}
    </div>
  );
}


export default App;
