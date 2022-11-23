window.onload = () => {
    loadContactData();
};

async function loadContactData() {
    const resp = await fetch("/todo");
    const data = await resp.json();
    console.log(data);
}