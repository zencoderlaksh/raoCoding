const paymentId = process.argv[2];

if (!paymentId) {
    console.error("Please provide a Dodo Payment ID. Example: node simulateWebhook.js pay_12345");
    process.exit(1);
}

const simulate = async () => {
    try {
        const payload = {
            type: "payment.succeeded",
            data: {
                payment_id: paymentId
            }
        };

        console.log(`Sending simulated webhook for payment ID: ${paymentId}...`);

        const res = await fetch('http://localhost:5000/api/payments/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Adding a fake signature if needed for future proofing
                'dodo-signature': 'simulated_signature'
            },
            body: JSON.stringify(payload)
        });

        const text = await res.text();
        
        if (res.ok) {
            console.log("✅ Webhook processed successfully!");
            console.log("Server Response:", text);
        } else {
            console.error(`❌ Webhook failed with status ${res.status}`);
            console.error("Server Response:", text);
        }
    } catch (error) {
        console.error("Error simulating webhook:", error.message);
    }
};

simulate();
