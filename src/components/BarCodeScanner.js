import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

const BarCodeScanner = () => {
    const startScan = async () => {
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission();

    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
    }
  };

  return <>
  <button onClick={startScan}>Scan Barcode</button>
  </>;
};

export default BarCodeScanner;
