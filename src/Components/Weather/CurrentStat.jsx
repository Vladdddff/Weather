import React from 'react';
import s from './weather.module.css';

const CurrentStat = ({ city, region, changeCity, statistic, isChange, period, setChange, changePeriod, changeRegion }) => {
    const onCityChanged = (e) => {
        const data = e.target.value.split(',');
        changeRegion(data[0]);
        changeCity(data[1]);      
    }

    const onPeriodChanged = (e) => {
        changePeriod(e.target.value);
    }

    return (
        <div className={s.currentStat}>

            <div className={s.city}>
                <div className={s.cityName}>
                    <h1>City:</h1>
                    <h1 className={s.lightBlue}>{city}</h1>
                </div>

                <div>
                    {isChange &&
                        <div className={s.changes}>
                            <div className={s.selects}>
                                <select className={s.select} value={[region, city].toString()} onChange={onCityChanged}>
                                    <option value={["poltavska,kremenchuk"]}>Kremenchuk</option>
                                    <option value={["kyivska,kyiv"]}>Kyiv</option>
                                </select>

                                <select className={s.select} value={period} onChange={onPeriodChanged}>
                                    <option value="last 10 days">last 10 days</option>
                                    <option value="last 20 days">last 20 days</option>
                                </select>
                            </div>


                            <button className={s.editButton} onClick={() => { setChange(false) }}>Hide change</button>
                        </div>


                    }
                    {!isChange &&
                        <button className={s.editButton} onClick={() => { setChange(true) }}>Show change</button>
                    }
                </div>
            </div>

            <div className={s.period}>
                <h1>Period:</h1>
                <h1 className={s.lightBlue}>{period}</h1>
            </div>

            <div className={s.statistic}>
                <h1 className={s.statCaption}>Statistic</h1>
                <div className={s.statisticItems}>
                    <div className={s.statKeys}>
                        {statistic && Object.keys(statistic).map((item, index) => {
                            return <p key={index}>{item}:</p>
                        })}
                    </div>
                    <div className={s.lightBlue}>
                        {statistic && Object.values(statistic).map((item, index) => {
                            return <p key={index}>{item}</p>
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CurrentStat;