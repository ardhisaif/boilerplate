
# Getting Started
### Install Dependencies
```bash
  npm install
```

### Run Development
```bash
  npm run dev
```

### Run Server 
```bash
  npm start
```


<br>
<br>
<br>

<br>
<br>
<br>


# List Modules

### 1. Api
    Melakukan request api ke service lain
    - contoh penamaan file:  `transaction.api.js`

### 2. Config
    Untuk konfigurasi seperti konfigurasi koneksi ke database

### 3. Controllers
    Mengelola HTTP request dan response
    - contoh penamaan file:  `user.controller.js`

### 4. Helpers
    Function-function pembantu untuk digunakan di berbagai file

### 5. Models
    Berisi logika langsung ke database yang nantinya bisa digunakan di berbagai file
    - contoh penamaan file:  `user.model.js`

### 6. Routers
    Mengarahkan routing HTTP ke controller. Memiliki index untuk mengarahkan ke router yang lebih spesifik
    - contoh penamaan file:  `user.router.js`

### 7. Service
    Logika bisnis utama untuk mengelola request dan data dari database
    - contoh penamaan file:  `user.service.js`

### 8. Validaors
    Validasi request body menggunakan zod yang nantinya bisa digunakan di beberapa file controller
    - contoh penamaan file:  `user.validator.js`

<br>
<br>
<br>

# List Rules
  - Menggunakan single-quote
  - Prefer penggunaan const apabila varibel tersebut tidak di ubah lagi
  - .env tanpa menggunakan quote '' / "" 
  - Untuk kode menggunakan `camelCase` dan untuk request, response dan route url menggunakan `snake_case`

<br>
<br>
<br>

# Extensions VS-Code
### 1. Prettier
    Atur untuk penggunaan prettier dengan auto-save dan pengaturan yang sudah ada

### 2. Better Align
    Untuk meratakan titik dua atau samadengan
  - cara  kombinasi dengan prettir => `Ctrl + A`, `Ctrl + S`, `Alt + A`

### 3. Eslint
    Membuat standard code

