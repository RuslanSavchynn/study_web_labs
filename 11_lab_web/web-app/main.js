document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const usersList = document.getElementById('users-list');
    const searchInput = document.getElementById('search');

    if (!loader || !usersList || !searchInput) {
        console.error('Один із елементів не знайдено:', { loader, usersList, searchInput });
        usersList.innerHTML = '<p style="text-align: center; color: red;">Помилка: не вдалося ініціалізувати сторінку</p>';
        return;
    }

    let allUsers = [];

    function toggleLoader(show) {
        loader.style.display = show ? 'block' : 'none';
    }

    function renderUsers(users) {
        console.log('Rendering users:', users);
        usersList.innerHTML = '';
        if (!users || users.length === 0) {
            usersList.innerHTML = '<p>Not found users</p>';
            return;
        }
        users.forEach(user => {
            try {
                const userCard = document.createElement('div');
                userCard.className = 'user-card';
                userCard.innerHTML = `
                    <img src="${user.avatar_url || ''}" alt="${user.login || 'User'}">
                    <div class="login">${user.login || 'Unknown'}</div>
                    <a class="repo-link" href="${user.repos_url || '#'}" target="_blank" title="Переглянути репозиторії">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-.62 2.19-.82 2.19-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                `;
                usersList.appendChild(userCard);
            } catch (error) {
                console.error('Error rendering user:', user, error);
            }
        });
    }

    async function fetchUsers() {
        toggleLoader(true);
        try {
            console.log('Fetching users...');
            const response = await fetch('https://api.github.com/users');
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            allUsers = await response.json();
            console.log('Fetched users:', allUsers);
            renderUsers(allUsers);
        } catch (error) {
            console.error('Fetch error:', error);
            usersList.innerHTML = `<p style="text-align: center; color: red;">Помилка: ${error.message}</p>`;
        } finally {
            toggleLoader(false);
        }
    }

    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        const filteredUsers = allUsers.filter(user =>
            user.login?.toLowerCase().includes(query)
        );
        renderUsers(filteredUsers);
    }

    searchInput.addEventListener('input', handleSearch);

    fetchUsers();
});
