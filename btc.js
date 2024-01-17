const axios = require('axios');

const main = async () => {
    const currency = process.argv[2] ? process.argv[2] : 'EUR';

    try {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        // let currency = 'EUR';

        // if (process.argv[2]) {
        //     currency = process.argv[2].toUpperCase();
        // }
        // console.log(process.argv);
        const { data } = await axios.get(url);

        if (!data.bpi[currency]) {
            throw new Error('Devise inconnue : USD, EUR or GBP');
        }
        
        const updatedAt = data.time.updated;
        const rate = data.bpi[currency].rate;
        console.log(`> 1 BTC = ${rate} ${currency} (${updatedAt})`);
    } catch (err) {
        console.log(err.toString());
    }
}

main();