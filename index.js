fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {
            var _current_Card = `
            <div class="col-lg-3 col-md-6 col-sm-12 mb-4 px-2">
                <div class="card h-100">
                    <img src="${element.flags.png}">
                    <div class="card-body">
                        <h3 class="card-title">${element.name.common}</h3>
                        <p class="card-text">Borders : ${element.borders}<br>
                        Capital : ${element.capital}<br>
                        Region : ${element.region}
                        </p>
                    </div>
                </div>
            </div>`;
            document.getElementById('allCountries').insertAdjacentHTML('beforeend', _current_Card);
        });
    })
