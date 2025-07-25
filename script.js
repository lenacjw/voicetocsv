document.getElementById('sendBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: 'Hello from my app!',
                timestamp: new Date().toISOString()
            })
        });
        
        const result = await response.json();
        document.getElementById('result').innerHTML = `成功: ${JSON.stringify(result)}`;
    } catch (error) {
        document.getElementById('result').innerHTML = `錯誤: ${error.message}`;
    }
});