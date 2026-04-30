document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('register-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // чтобы страница не перезагружалась

        // Получаем значения из полей
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Показываем, что пошла загрузка
        messageDiv.textContent = 'Отправка...';
        messageDiv.style.color = 'blue';

        try {
            // ОТПРАВЛЯЕМ ЗАПРОС НА БЭКЕНД (ВОТ ОН, FETCH!)
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                messageDiv.textContent = 'Регистрация успешна!';
                messageDiv.style.color = 'green';
                form.reset(); // очищаем поля
            } else {
                messageDiv.textContent = 'Ошибка: ' + data.message;
                messageDiv.style.color = 'red';
            }
        } catch (error) {
            messageDiv.textContent = ' Не удалось соединиться с сервером';
            messageDiv.style.color = 'red';
            console.error(error);
        }
    });
});