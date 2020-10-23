    var country="US"
    var url="https://disease.sh/v3/covid-19/countries/"+country
    covidData(url)
    
    const form = document.getElementById("form")

    form.addEventListener('submit', function(e){
        e.preventDefault()
        var country=document.getElementById("country").value
        var url="https://disease.sh/v3/covid-19/countries/"+country
        covidData(url)
    })

    async function covidData(url){
        let response = await fetch(url)
       
        let data = await response.json()

        let length = data.length
       
        let updated = document.getElementById("updated")
        let confirmed = document.getElementById("confirmed")
        let recovered = document.getElementById("recovered")
        let deaths = document.getElementById("deaths")
        let todayRecovered= document.getElementById("todayRecovered")
        let todayCases= document.getElementById("todayCases")
        let todayDeaths = document.getElementById("todayDeaths")
        var st = data.updated
        var dt = new Date(st)

    
        date.innerHTML = ""
        confirmed.innerHTML = ""
        recovered.innerHTML = ""
        deaths.innerHTML = ""
        todayRecovered.innerHTML = ""
        todayCases.innerHTML = ""
        todayDeaths.innerHTML = ""


        if (response.status == "404") {
        date.append("Нет данных")
        confirmed.append("Нет данных")
        recovered.append("Нет данных")
        deaths.append("Нет данных")
        todayRecovered.append("Нет данных")
        todayCases.append("Нет данных")
        todayDeaths.append("Нет данных")
    
                                    }
        else

        date.append(dt.toLocaleString())
        confirmed.append(data.cases.toLocaleString())
        recovered.append(data.recovered.toLocaleString())
        deaths.append(data.deaths.toLocaleString())
        todayRecovered.append(data.todayRecovered.toLocaleString())
        todayCases.append(data.todayCases.toLocaleString())
        todayDeaths.append(data.todayDeaths.toLocaleString())
   
    }



    var url2="https://disease.sh/v3/covid-19/all"
    covidData2(url2)

async function covidData2(url2){
    let response2 = await fetch(url2)

    let data2 = await response2.json()

    let confirmed2 = document.getElementById("cases")
    let recovered2 = document.getElementById("recovered")
    let deaths2 = document.getElementById("deaths")

    let todayconfirmed2 = document.getElementById("todayCases")
    let todayrecovered2 = document.getElementById("todayRecovered")

    allconfirmed.innerHTML = ""
    allrecovered.innerHTML = ""
    alldeaths.innerHTML = ""
    alltodayconfirmed.innerHTML = ""
    alltodayrecovered.innerHTML = ""


    if (data2 != null) {
    allconfirmed.append(data2.cases.toLocaleString())
    allrecovered.append(data2.recovered.toLocaleString())
    alldeaths.append(data2.deaths.toLocaleString())
    alltodayconfirmed.append(data2.todayCases.toLocaleString())
    alltodayrecovered.append(data2.todayRecovered.toLocaleString())


    }
}
