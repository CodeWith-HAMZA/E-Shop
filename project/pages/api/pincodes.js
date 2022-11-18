// Method must be 'Get' to make request successfully otherwise it won't work..!
export default function handler(req, res) {

    if (req.method !== "GET")
        return res.status(200).json({ success: false, error: "Kindly, Make 'Get' Request For The Zip-Codes :(" });


    // Postal-Codes of Some Places, where Our Service is Available
    const PinCodes = [
        "12345",
        "17000",
        "023441"
    ];
    return res.status(200).json({ success: true, PinCodes });

}
