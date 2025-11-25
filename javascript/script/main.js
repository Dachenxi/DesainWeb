function tambah() {
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    let hasil = a + b;
    document.getElementById("hasil").innerText = hasil;
}

function kurang() {
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    let hasil = a - b;
    document.getElementById("hasil").innerText = hasil;
}

function kali() {
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    let hasil = a * b;
    document.getElementById("hasil").innerText = hasil;
}

function bagi() {
    let a = parseFloat(document.getElementById("input1").value);
    let b = parseFloat(document.getElementById("input2").value);
    let hasil = a / b;
    document.getElementById("hasil").innerText = hasil;
}