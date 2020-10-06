import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./app_component/weather-component";
import Form from "./app_component/form-component";

const objectWithData = {
  BucRo: {
    numeTara: "Romania",
    nume: "Bucuresti",
    temperatura: 20,
    temperaturaMinMax: [19, 22],
    umiditate: "Scazuta",
    prognoza: ["soare", "nori", "ploaie", "viscol", "ceata", "ceata", "ceata"],
  },
  ConstRo: {
    numeTara: "Romania",
    nume: "Constanta",
    temperatura: 23,
    temperaturaMinMax: [20, 25],
    umiditate: "Crescuta",
    prognoza: ["soare", "soare", "nori", "ceata", "ceata", "ceata", "ceata"],
  },
  AleRo: {
    numeTara: "Romania",
    nume: "Alexandria",
    temperatura: 23,
    temperaturaMinMax: [20, 25],
    umiditate: "Scazuta",
    prognoza: ["soare", "ceata", "nori", "ceata", "ceata", "ceata", "nori"],
  },
  AleEgi: {
    numeTara: "Egipt",
    nume: "Alexandria",
    temperatura: 33,
    temperaturaMinMax: [30, 35],
    umiditate: "Medie",
    prognoza: ["soare", "soare", "soare", "soare", "ceata", "ceata", "ceata"],
  },
  BudHu: {
    numeTara: "Ungaria",
    nume: "Budapesta",
    temperatura: 15,
    temperaturaMinMax: [14, 16],
    umiditate: "Medie",
    prognoza: ["ceata", "nori", "nori", "ceata", "viscol", "viscol", "viscol"],
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "Oras",
      country: "Tara",
      temperature: "0",
      temperatureMin: "0",
      temperatureMax: "0",
      humidity: undefined,
      prognosis0: undefined,
      prognosis1: undefined,
      prognosis2: undefined,
      prognosis3: undefined,
      prognosis4: undefined,
      prognosis5: undefined,
      prognosis6: undefined,
    };
  }

  componentDidMount() {}

  getWeather = (e) => {
    e.preventDefault();

    if (e.target.id == "vreme") {
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].firstChild.children[2].classList.add(
        "d-none"
      );
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].firstChild.children[1].classList.remove(
        "d-none"
      );
    }

    if (e.target.id == "prognoza") {
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].firstChild.children[2].classList.remove(
        "d-none"
      );
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].firstChild.children[1].classList.add(
        "d-none"
      );
    }

    const orasInputat =
      e.target.parentNode.parentNode.firstChild.firstChild.value;

    const taraInputata =
      e.target.parentNode.parentNode.firstChild.nextSibling.firstChild.value;

    let response = null;

    Object.entries(objectWithData).forEach((v) => {
      if (v[1].nume == orasInputat && v[1].numeTara == taraInputata) {
        response = v[1];
      }
    });

    if (response) {
      this.setState({
        city: response.nume,
        country: response.numeTara,
        temperature: response.temperatura,
        temperatureMin: response.temperaturaMinMax[0],
        temperatureMax: response.temperaturaMinMax[1],
        humidity: response.umiditate,
        prognosis0: response.prognoza[0],
        prognosis1: response.prognoza[1],
        prognosis2: response.prognoza[2],
        prognosis3: response.prognoza[3],
        prognosis4: response.prognoza[4],
        prognosis5: response.prognoza[5],
        prognosis6: response.prognoza[6],
      });
    } else {
      alert(
        "Din pacate aceasta combinatie de tara si oras nu exista in baza noastra de date"
      );

      e.target.parentNode.parentNode.firstChild.firstChild.value = "";

      e.target.parentNode.parentNode.firstChild.nextSibling.firstChild.value =
        "";

      this.setState({
        city: "Oras",
        country: "Tara",
        temperature: 0,
        temperatureMin: 0,
        temperatureMax: 0,
        humidity: undefined,
        prognosis0: undefined,
        prognosis1: undefined,
        prognosis2: undefined,
        prognosis3: undefined,
        prognosis4: undefined,
        prognosis5: undefined,
        prognosis6: undefined,
      });
    }
  };

  render() {
    return (
      <div className='App'>
        <Form afiseazavremea={this.getWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          temperatureMin={this.state.temperatureMin}
          temperatureMax={this.state.temperatureMax}
          humidity={this.state.humidity}
          prognosis0={this.state.prognosis0}
          prognosis1={this.state.prognosis1}
          prognosis2={this.state.prognosis2}
          prognosis3={this.state.prognosis3}
          prognosis4={this.state.prognosis4}
          prognosis5={this.state.prognosis5}
          prognosis6={this.state.prognosis6}
        />
      </div>
    );
  }
}

export default App;
