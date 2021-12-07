import React, { Component } from 'react';
import { weatherAPI } from '../../Api/api'
import CurrentStat from './CurrentStat';
import s from './weather.module.css';


class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Weather: null,
            region: "poltavska",
            city: "kremenchuk",
            period: "last 20 days",
            isChange: false
        }
        this.changeCity = this.changeCity.bind(this);
        this.setChange = this.setChange.bind(this);
        this.changePeriod = this.changePeriod.bind(this);
        this.changeRegion = this.changeRegion.bind(this);
    }

    componentDidMount() {
        try {
            weatherAPI.getActualStat('poltavska', 'kremenchuk').then((response) => {
                this.setState(
                    { Weather: response.data.values[0] }
    
                );
            });
        } catch(e) {
            console.log(`Error ${e}`)
        }
        console.log(Weather.prototype);
        console.log(Component.prototype);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.city !== this.state.city) {
            try {
                weatherAPI.getActualStat(this.state.region, this.state.city).then(response => {
                    this.setState(
                        { Weather: response.data.values[0] }
                    );
                    console.log(response.data.values[0]);
                })
                console.log('update');
               
            } catch(e) {
                console.log(`Error ${e}`);
            }
            
        }
    }

    setChange(newChange) {
        this.setState(
            { isChange: newChange }
        )
    }

    changeCity(newCity) {
        this.setState(
            { city: newCity }
        )
    }

    changeRegion(newRegion) {
        this.setState(
            { region: newRegion }
        )
    }

    changePeriod(newPeriod) {
        this.setState(
            { period: newPeriod }
        )
    }

    render() {
        if (!this.state.Weather) {
            return <div>Loading...</div>
        }
        return (
            <div className={s.weather}>
                <CurrentStat
                    city={this.state.city}
                    region={this.state.region}
                    changeCity={this.changeCity}
                    statistic={this.state.Weather}
                    isChange={this.state.isChange}
                    period={this.state.period}
                    setChange={this.setChange}
                    changePeriod={this.changePeriod} 
                    changeRegion={this.changeRegion}/>
            </div>
        )
    }
}

export default Weather;