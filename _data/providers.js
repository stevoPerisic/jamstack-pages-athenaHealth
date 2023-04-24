/**
 * Created by stevoperisic on 4/24/23.
 */
const fetch = require('cross-fetch');

async function getRandomHeadshot(num) {
    const response = await fetch(`https://randomuser.me/api/?results=${num}`);
    const data = await response.json();
    const headshots = data.results.map(user => user.picture.large);
    return headshots;
}

module.exports = async function () {
    const response = await fetch("https://jamstack.perisicdesigns.workers.dev/providers");
    const data = await response.json();
    const providers = data.providers.filter(provider => provider.entitytype === "Person");
    const headshots = await getRandomHeadshot(providers.length);
    const providersWithHeadshots = providers.map((provider, index) => {
        return {
            ...provider,
            headshotUrl: headshots[index % headshots.length],
        };
    });
    return providersWithHeadshots;
};

