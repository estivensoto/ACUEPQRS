import { Link } from 'react-router-dom';
import './Bienvenido.css';

function Bienvenido() {
  return (
    <div className="bienvenido-container">
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

export default Bienvenido;
