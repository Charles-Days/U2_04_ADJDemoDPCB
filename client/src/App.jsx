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
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient">
        <div className="container-fluid">
          <a href="#" className="navbar-brand fw-bold">
            <span className="brand-icon">🚀</span> ADJ-DEMO
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">API Test</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold mb-4 animate-fade-in">
                Bienvenido a ADJ-DEMO
              </h1>
              <p className="lead mb-5 text-muted">
                Proyecto de demostración Full-Stack con React, Spring Boot y MySQL
              </p>

              <div className="card shadow-lg border-0 api-card">
                <div className="card-body p-5">
                  <h3 className="card-title mb-4">
                    <span className="icon-circle">⚡</span>
                    Prueba de Conexión API
                  </h3>
                  <p className="text-muted mb-4">
                    Haz clic en el botón para probar la conexión con el backend
                  </p>

                  <button
                    onClick={handleAPICall}
                    className="btn btn-primary btn-lg px-5 py-3 mb-4"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Conectando...
                      </>
                    ) : (
                      <>
                        <span className="me-2">🔌</span>
                        Llamar a mi API
                      </>
                    )}
                  </button>

                  {apiResponse && (
                    <div className="alert alert-success animate-slide-up" role="alert">
                      <h5 className="alert-heading">
                        <span className="me-2">✅</span>
                        Respuesta del Servidor
                      </h5>
                      <hr />
                      <div className="response-box">
                        <pre className="mb-0">
                          {JSON.stringify(apiResponse, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="row mt-5 g-4">
                <div className="col-md-4">
                  <div className="feature-card">
                    <div className="feature-icon">⚛️</div>
                    <h5>React + Vite</h5>
                    <p className="text-muted small">Frontend moderno y rápido</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-card">
                    <div className="feature-icon">🍃</div>
                    <h5>Spring Boot</h5>
                    <p className="text-muted small">Backend robusto con Java</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-card">
                    <div className="feature-icon">🐬</div>
                    <h5>MySQL</h5>
                    <p className="text-muted small">Base de datos confiable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer mt-5 py-4 bg-dark text-white">
        <div className="container text-center">
          <p className="mb-0">
            Gestión del Proceso de Desarrollo de Software - 2025
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
