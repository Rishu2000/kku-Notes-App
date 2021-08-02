import Axios from 'axios';

export const handleLogin = (username, password) => {
    Axios.post('/api/user/login', {username, password});
}
