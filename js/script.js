    date.innerHTML = ""
    var country="RU"
    var now = new Date().toLocaleString()
    document.getElementById("date").innerHTML += now
    var url="https://disease.sh/v3/covid-19/countries/"+country
    covidData(url)
    
    const form = document.getElementById("form")

    form.addEventListener('submit', function(e){
        e.preventDefault()
        date.innerHTML = ""
        var country=document.getElementById("country").value
        var now = new Date().toLocaleString()
        document.getElementById("date").innerHTML += now
        var url="https://disease.sh/v3/covid-19/countries/"+country
        covidData(url)
    })

    async function covidData(url){
        let response = await fetch(url)
       
        let data = await response.json()

        let length = data.length
       
        let confirmed = document.getElementById("confirmed")
        let recovered = document.getElementById("recovered")
        let deaths = document.getElementById("deaths")
        let todayRecovered= document.getElementById("todayRecovered")
        let todayCases= document.getElementById("todayCases")
        let todayDeaths = document.getElementById("todayDeaths")

    
        confirmed.innerHTML = ""
        recovered.innerHTML = ""
        deaths.innerHTML = ""
        todayRecovered.innerHTML = ""
        todayCases.innerHTML = ""
        todayDeaths.innerHTML = ""


        if (response.status == "404") {
        confirmed.append("No cases")
        recovered.append("No cases")
        deaths.append("No cases")
        todayRecovered.append("No cases")
        todayCases.append("No cases")
        todayDeaths.append("No cases")
    
                                    }
        else
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
