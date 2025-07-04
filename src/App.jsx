import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Bienvenido a AcuePQRS</h1>
      <p>Seleccione una opción:</p>
      <ul>
        <li><Link to="/producto">Peticiones</Link></li>
        <li><Link to="/producto">Quejas</Link></li>
        <li><Link to="/producto">Reclamos</Link></li>
        <li><Link to="/producto">Sugerencias</Link></li>
      </ul>
    </div>
  );
}

export default App;
