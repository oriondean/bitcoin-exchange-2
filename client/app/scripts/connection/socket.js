import io from 'socket.io-client';

export default io.connect('http://localhost:8081', { transports: ['websocket'] });
