/**
 * Created by stevoperisic on 4/24/23.
 */
async function fetchProviders() {
    const response = await axios.get("https://jamstack.perisicdesigns.workers.dev/providers");
    return response.data.providers.filter((provider) => provider.entitytype === "Person");
}

async function fetchProvider(id) {
    const response = await axios.get(`
        https://jamstack.perisicdesigns.workers.dev/provider/${id}`);
    return response.data;
}

function displayProviders(providers) {
    const providersList = document.getElementById("providersList");
    providers.forEach((provider) => {
        const providerElement = `
      <div class="col-md-4">
        <div class="card">
          <img src="${provider.picture}" class="card-img-top" alt="${provider.firstname} ${provider.lastname}">
          <div class="card-body">
            <h5 class="card-title">${provider.firstname} ${provider.lastname}</h5>
            <p class="card-text">${provider.providertype}</p>
            <a href="/provider/${provider.id}" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
    `;
        providersList.insertAdjacentHTML("beforeend", providerElement);
    });
}

function displayProvider(provider) {
    const providerDetails = document.getElementById("providerDetails");
    const providerElement = `
    <div class="col-md-4">
      <img src="${provider.picture}" class="card-img-top" alt="${provider.firstname} ${provider.lastname}">
    </div>
    <div class="col-md-8">
      <h2>${provider.firstname} ${provider.lastname}</h2>
      <p>${provider.providertype}</p>
      <p>${provider.bio}</p>
    </div>
  `;
    providerDetails.innerHTML = providerElement;
}

(async () => {
    const path = window.location.pathname;

    if (path === "/") {
        const providers = await fetchProviders();
        displayProviders(providers);
    } else if (path.startsWith("/provider/")) {
        const id = path.split("/")[2];
        const provider = await fetchProvider(id);
        displayProvider(provider);
    }
})();

