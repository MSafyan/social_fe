import socketIOClient from 'socket.io-client';

// export const WS = 'http://localhost:4000';
export const WS = 'https://dootbe.herokuapp.com';

export const ws = socketIOClient(WS);
