function convertToIEEE754() {
    let inputElement = document.getElementById("decimalInput");
    let num = parseFloat(inputElement.value);

    if (isNaN(num)) {
        document.getElementById("result").innerHTML = "<span style='color: red;'>Please enter a valid number.</span>";
        inputElement.style.border = "2px solid red";
        return;
    } else {
        inputElement.style.border = "1px solid black";
    }

    let buffer = new ArrayBuffer(4); // 4 bytes (32-bit)
    let view = new DataView(buffer);
    view.setFloat32(0, num, false); // Store float in IEEE 754 format (Big Endian)

    let binary = "";
    for (let i = 0; i < 4; i++) {
        let byte = view.getUint8(i).toString(2).padStart(8, '0');
        binary += byte;
    }

    // Extract Sign, Exponent, Mantissa
    let signBit = binary.charAt(0);
    let exponentBits = binary.substring(1, 9);
    let mantissaBits = binary.substring(9);

    // Display results
    document.getElementById("result").innerHTML = `
        <strong>IEEE 754 (32-bit):</strong> ${binary} <br>
        <strong>Sign Bit:</strong> ${signBit} <br>
        <strong>Exponent:</strong> ${exponentBits} <br>
        <strong>Mantissa:</strong> ${mantissaBits}
    `;
}

// Reset function
function resetInput() {
    document.getElementById("decimalInput").value = "";
    document.getElementById("result").innerText = "";
}
