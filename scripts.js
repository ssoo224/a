document.getElementById('databaseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dbName = document.getElementById('dbName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const host = document.getElementById('host').value;

    fetch('create_database.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dbName, username, password, host }),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').innerText = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
