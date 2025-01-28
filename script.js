function login() {
    const validNames = ["kak Fahdellah"]; // Daftar nama yang valid
    const username = document.getElementById("username").value;
    const errorMessage = document.getElementById("error-message");

    if (validNames.includes(username)) {
        // Jika nama valid, alihkan ke halaman selanjutnya
        window.location = "home.html"; // Ganti dengan halaman yang diinginkan
    } else {
        // Jika nama tidak valid, tampilkan pesan error
        errorMessage.style.display = "block";
    }
}