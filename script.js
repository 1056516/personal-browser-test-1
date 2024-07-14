function search() {
    const input = document.getElementById('search-input').value;
    const frame = document.getElementById('browser-frame');
    if (input.startsWith('http://') || input.startsWith('https://')) {
        frame.src = input;
    } else {
        frame.src = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
    }
}

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});
