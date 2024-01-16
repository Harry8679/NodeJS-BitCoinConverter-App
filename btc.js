const axios = require('axios');

const main = async () => {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');

    const updatedAt = response.data.time.updated;
    const rate = response.data.bpi['EUR'].rate;
    console.log(`> 1 BTC = ${rate} EUR (${updatedAt})`);
}

main();