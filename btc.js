const axios = require('axios');

const main = async () => {
    const currency = process.argv[2];
    // console.log(process.argv);
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');

    const updatedAt = response.data.time.updated;
    const rate = response.data.bpi[currency].rate;
    console.log(`> 1 BTC = ${rate} ${currency} (${updatedAt})`);
}

main();