function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const body = {
        username,
        password,
    };

    fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })
    .then(res => res.json())
    .then(res => {
        if (res.accessToken) {
            alert("Login Successfully");
        } else {
            alert(res.message);
        };
    })
};