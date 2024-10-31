function generateBarcode() {
    const text = document.getElementById("barcodeText").value;
    const barcodeElement = document.getElementById("barcode");

    if (text) {
        JsBarcode(barcodeElement, text, {
            format: "CODE128", // You can use other formats like "EAN", "UPC", etc.
            lineColor: "#000",
            width: 2,
            height: 100,
            displayValue: true,
        });
    } else {
        alert("Please enter text or a number for the barcode");
    }
}
