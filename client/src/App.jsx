import { useState } from "react";
import TestController from "./modules/test/test.controller";
import "./App.css";

function App() {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAPICall = async () => {
    setLoading(true);
    const response = await TestController.callToAPI();
    setApiResponse(response);
    setLoading(false);
  };

  return (
    <div>
      <header style={{ backgroundColor: '#333', color: 'white', padding: '20px' }}>
        <h1>ADJ-DEMO</h1>
        <nav>
          <a href="#" style={{ color: 'white', marginRight: '15px' }}>Home</a>
          <a href="#" style={{ color: 'white' }}>API Test</a>
        </nav>
      </header>

      <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Proyecto Full-Stack</h2>
        <p>Demostración con React, Spring Boot y MySQL</p>

        <div style={{ border: '1px solid #ddd', padding: '20px', marginTop: '30px' }}>
          <h3>Prueba de Conexión API</h3>
          <p>Haz clic para probar la conexión con el backend</p>

          <button
            onClick={handleAPICall}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}
            disabled={loading}
          >
            {loading ? 'Conectando...' : 'Llamar a mi API'}
          </button>

          {apiResponse && (
            <div style={{
              backgroundColor: '#d4edda',
              border: '1px solid #c3e6cb',
              padding: '15px',
              marginTop: '20px'
            }}>
              <h4>Respuesta del Servidor</h4>
              <pre style={{ backgroundColor: '#f8f9fa', padding: '10px' }}>
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            </div>
          )}
        </div>

        <div style={{ marginTop: '40px' }}>
          <h3>Tecnologías</h3>
          <ul>
            <li>React + Vite - Frontend</li>
            <li>Spring Boot - Backend</li>
            <li>MySQL - Base de datos</li>
          </ul>
        </div>
      </main>

      <footer style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <p>Gestión del Proceso de Desarrollo de Software - 2025</p>
      </footer>
    </div>
  );
}

export default App;
