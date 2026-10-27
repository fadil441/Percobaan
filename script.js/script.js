document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Fungsi untuk menambah tugas
    function addTodo() {
        const text = todoInput.value.trim();
        
        if (text === '') {
            alert('Harap masukkan teks tugas!');
            return;
        }

        // Buat elemen <li> baru
        const li = document.createElement('li');
        
        // Teks tugas
        const span = document.createElement('span');
        span.textContent = text;
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Tombol hapus
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Hapus';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        // Reset input
        todoInput.value = '';
    }

    // Event listener tombol Tambah
    addBtn.addEventListener('click', addTodo);

    // Menambahkan tugas dengan menekan tombol Enter
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});