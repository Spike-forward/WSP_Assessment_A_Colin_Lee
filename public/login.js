window.onload = () => {
    initLoginForm();
};

function initLoginForm() {
    document.querySelector("#form-login").addEventListener("submit", async(event) => {
        event.preventDefault();
        const form = event.target;
        // file -> FormData
        // no file -> JSON body
        const username = form.username.value;
        const password = form.password.value;

        const resp = await fetch("/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ username: username, password }),
        });

        if (resp.status === 200) {
            window.location = "/";
        } else {
            // Version 1
            const data = await resp.json();
            //   document.querySelector(".error-message").innerHTML = data.message;

            // Version 2
            const messageEle = document.createElement("p");
            messageEle.textContent = data.message;
            document.querySelector(".error-message").innerHTML = "";
            document.querySelector(".error-message").appendChild(messageEle);
        }
    });
}