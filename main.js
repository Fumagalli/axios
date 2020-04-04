// Desenvolver uma api que consuma um webservice de previsão do tempo e apresente as informações sobre a previsão do tempo para uma cidade x de entrada.
// Estas informações deve ser tratadas.
// A criatividade de como tratar os dados faz parte da atividade. :)

import axios from 'axios';

const key = '81dc3d53';
const format = 'json-cors';

class Api {

  static async getCity(name) {
    const response = new City((await axios.get(`https://api.hgbrasil.com/weather?format=${format}&fields=only_results&city_name=${name}&key=${key}`)).data);
    // const response = (await axios.get(`https://api.hgbrasil.com/weather?format=${format}&city_name=${name}&key=${key}`)).data;
    return response;
  }
}

class City {
  constructor({ temp, date, description, currently, city, humidity, wind_speedy, sunrise, sunset, forecast }) {
    this.temp = temp;
    this.date = date;
    this.description = description;
    this.currently = currently;
    this.city = city;
    this.humidity = humidity;
    this.wind_speedy = wind_speedy;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.forecast = forecast;
  }
}

Api.getCity('Pelotas').then(v => { console.log(v) });
