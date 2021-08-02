import axios from 'axios';

export default const handleLogin = (username, password) => {
    axios.post('/api/user/login', {username, password});
}