const TestController = {};
const ENV = import.meta.env;

const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`;

TestController.callToAPI = async () => {
    try {
        const response = await fetch(`${API_URL}/test`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        return { error: 'Error al conectar con el API', details: err.message };
    }
}

export default TestController;