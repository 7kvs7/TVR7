import AuthService from '../services/AuthService.js';

class AuthController {
    async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await AuthService.register(name, email, password);
            res.status(201).json({ message: 'Регистрация успешна', user });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
        async login(req, res) {
        try {
            const { email, password } = req.body;
            const data = await AuthService.login(email, password);
            res.json({ message: 'Вход выполнен', ...data });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
    
}

export default new AuthController();