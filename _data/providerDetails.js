/**
 * Created by stevoperisic on 4/24/23.
 */
import fetch from 'node-fetch';

module.exports = async function () {
    const response = await fetch("https://jamstack.perisicdesigns.workers.dev/provider/:id");
    const data = await response.json();
    return data;
};

