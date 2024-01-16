const axios = require('axios');

const main = async () => {
    try {
        let currency = 'EUR';

        if (process.argv[2]) {
            currency = process.argv[2].toUpperCase();
        }
        // console.log(process.argv);
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');

        if (!response.data.bpi[currency]) {
            throw new Error('Devise inconnue');
        }
        
        const updatedAt = response.data.time.updated;
        const rate = response.data.bpi[currency].rate;
        console.log(`> 1 BTC = ${rate} ${currency} (${updatedAt})`);
    } catch (err) {
        console.log(err.toString());
    }
}

main();