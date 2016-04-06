$(function () {





    function getWeather(apikey, zipcode) {
        var weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&appid=' + apikey;
        $.getJSON(weatherApi)
            .done(function (wdata) {
                console.log(wdata);
                AddWeather(wdata);


            }).fail(function () {
                $('#Weather').append('<p> No Loading For You </p>');
            });
    }





    function AddWeather(wdata) {
        var report = '';
        report += '<p>This is the Weather For: ' + wdata.name + '</p>';
        report += '<p>Outside we have ' + wdata.weather[0].description + '</p>';
        console.log(wdata.weather[0].description)
        report += '<p>It is ' + wdata.main.temp + ' degrees Kelvin outside</p>';
        report += '<p> In Farenheit that is ' + getfarenheit(wdata.main.temp) + '</p>';
        report += '<p>at ' + wdata.main.humidity + '% Humidity</p>';







        $('#weather').append(report);






    }


    function getfarenheit(temp) {
        return Math.round((temp * 1.8) - 459.67);
    }






    $("#submit").click(function (e) {
        e.preventDefault();

        var apikey = $('#apipass').val();
        var zipcode = $('#zip').val();


        getWeather(apikey, zipcode);



    });

});