const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const city_Name = document.getElementById('city_Name')
const temp_real_value = document.getElementById('temp_real_value')
const temp_status = document.getElementById('temp_status')

const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_Name.innerText = `Please wite the name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a401b8fa3d5d7d1e3fccabbef1d2d4a4`
            const response = await fetch(url);
            const objdata = await response.json()
            const arrayData = [objdata]
            city_Name.innerText = `${arrayData[0].name}, ${arrayData[0].sys.country}`;
            temp_real_value.innerText = arrayData[0].main.temp;

            let tempMood = arrayData[0].weather[0].main;
            //console.log(tempMood);

            // condition to check sunny or cloudy
            if (tempMood = "Clear") {
                temp_status.innerHTML = "<i class='fa fa-sun'  style= 'color: #eccc68;'></i>";
            }
            else if (tempMood = "Clouds") {
                temp_status.innerHTML = "<i class='fa fa-cloud'  style= 'color: #f1f2f6;'></i>";
            }
            else if (tempMood = "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fa fa-sun'  style= 'color: #eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');
        }
        catch {
            // alert('error')
            city_Name.innerText = `Please enter the  city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);