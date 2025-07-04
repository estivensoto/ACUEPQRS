// Reclamo.jsx
import './Reclamo.css';

function Reclamo() {
  return (
    <div className="formulario-container">
      <h2>Formulario de Reclamo</h2>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellidos" />
        <select>
          <option value="">Tipo de identificación</option>
          <option value="cc">Cédula de Ciudadanía</option>
          <option value="ce">Cédula de Extranjería</option>
        </select>
        <input type="text" placeholder="Número de identificación" />
        <input type="text" placeholder="Teléfono celular" />
        <input type="text" placeholder="Teléfono fijo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="text" placeholder="Dirección" />
        <textarea placeholder="Hechos" />
        <textarea placeholder="Pretensiones" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Reclamo;
