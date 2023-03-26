fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {
            //console.log(json)
            var _current_Card = `<div class="card" style="width: 18rem; height:25rem; margin: 20px; box-shadow: 10px 10px 5px grey; border-radius: 10px; background-color: lightblue; font-family: cursive;">
                    <img src="${element.flags.png}" alt="..." style="box-shadow: 10px 10px 5px grey;border-radius: 5px; width: 18rem; height: 11rem; background-size: 100%">
                    <div class="card-body" style="text-align: center;>
                    <h1 style="margin-top:20px" class="card-title">${element.name.common}</h1>
                    <p style="margin-top:35px; " class="card-text">Borders : ${element.borders}<br>
                    Capital : ${element.capital}<br>
                    Region : ${element.region}
                    </p>
                  
                    </div>
                </div>`;
            var div = document.createElement('div');
            div.innerHTML = _current_Card;
            document.getElementById('allCountries').appendChild(div);
        });
    })