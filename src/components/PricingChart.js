import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';
import moment from 'moment';
// import { PlotEvent } from '@ant-design/charts/es/interface';

import ChartFilter from './ChartFilter';

import '../styles/components/common/_chartDefaultStyle.scss';

const PlotMaps = {};
// let PreTooltipData;

const chartFilter = [
    { key: '1H', value: '1H', isActive: false },
    { key: '24H', value: '24H', isActive: true },
    { key: '1W', value: '1W', isActive: false },
    { key: '1M', value: '1M', isActive: false },
    { key: '1Y', value: '1Y', isActive: false },
    { key: 'ALL', value: 'ALL', isActive: false }
];

const formatDateAndTime = (completeData, filterValue) => {
    if (filterValue === '1H') {
        return completeData.map(data => ({ ...data, time: moment(data.time).format('m:ss') }));
    } else {
        return completeData.map(data => ({ ...data, time: moment(data.time).format('h:mm a') }));
    }
}

const PricingChart = () => {

    const [data, setData] = useState([]);
    const [filterValue, setFilterValue] = useState("24H");
    const [filterOptions, setFilterOptions] = useState(chartFilter);



    useEffect(() => {
        asyncFetch();
    }, [filterValue]);

    const asyncFetch = () => {
        fetch(`https://min-api.cryptocompare.com/data/v2/${filterValue === '1H' ? 'histohour' : 'histoday'}?fsym=BTC&tsym=USD&limit=100`)
            .then((response) => response.json())
            .then((json) => {
                let timeAccordingToCurrentTime = formatDateAndTime(json.Data.Data, filterValue)
                setData(timeAccordingToCurrentTime);
            })
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    const config = {
        data,
        xField: 'time',
        yField: 'close',
        height: 200,
        areaStyle: {
            // fill: 'l(170) 0:#136B54 0.5:#7ec2f3 1:#15332D',
            fill: '#145D4D',
            stroke: '',
        },
        color: '#5AD7B7',
        // yAxis: {
        //     grid: {
        //         line: {
        //             style: {
        //                 stroke: '',
        //                 lineWidth: 2,
        //                 lineDash: [4, 5],
        //                 strokeOpacity: 1,
        //                 shadowColor: '',
        //                 shadowBlur: 10,
        //                 shadowOffsetX: 5,
        //                 shadowOffsetY: 5,
        //                 cursor: 'pointer'
        //             }
        //         }
        //     }
        // },
        yAxis: false,
        tooltip: {
            customContent: (title = '', data) => {
                if (data && data[0] && data[0].data)
                    return `<div class='chart-tooltip bottom-arrow'><div class='price'>$ ${data[0].data.close}</div><div class='time'>${data[0].data.time} </div></div>`;
            },

        }
    }

    const showTooltip = ({ x, y }) => {
        Object.keys(PlotMaps).forEach((plot) => {
            PlotMaps[plot].chart.showTooltip({ x, y });
        });
    };

    const setTooltipPosition = (evt, plot) => {
        // var _a, _b;
        const { x, y } = evt.gEvent;

        //const currentData = plot.chart.getTooltipItems({ x, y });
        // if (((_a = currentData[0]) === null || _a === void 0 ? void 0 : _a.data.date) === (PreTooltipData === null || PreTooltipData === void 0 ? void 0 : PreTooltipData.date)) {
        //     return;
        // }
        // PreTooltipData = (_b = currentData[0]) === null || _b === void 0 ? void 0 : _b.data;
        showTooltip({ x, y });
    };

    const handleFilterChange = (range) => {
        const updateFilter = filterOptions && filterOptions.map(item => {
            var temp = Object.assign({}, item);
            if (temp.key === range) {
                temp.isActive = true;
            } else {
                temp.isActive = false;
            }
            return temp;
        });
        setFilterOptions(updateFilter);
        setFilterValue(range)
    }

    console.warn('picing chart')
    return (
        <div className='graph-wrapper'>
            <ChartFilter
                chartFilter={filterOptions}
                handleFilterChange={handleFilterChange}
            />
            <Area {...config} onReady={(plot) => {
                PlotMaps.area = plot;
                plot.on('mousemove', (evt) => {
                    setTooltipPosition(evt, plot);
                });
            }} />
        </div>
    )
}

export default PricingChart
