import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
    async register(name, email, password) {
        const candidate = await User.findOne({ email });
        if (candidate) {
            throw new Error('Пользователь с таким email уже существует');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });

        return { id: user._id, name: user.name, email: user.email };
    }

    async login(email, password) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Пользователь с таким email не найден');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Неверный пароль');
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            'secret-key-for-jwt',
            { expiresIn: '7d' }
        );

        return {
            token,
            user: { id: user._id, name: user.name, email: user.email }
        };
    }
}

export default new AuthService();