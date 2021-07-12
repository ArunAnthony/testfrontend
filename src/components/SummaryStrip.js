import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import dollarImage from '../assets/dollar.png'

import '../styles/components/stockView/_summaryStrip.scss';

const SummaryStrip = () => {
    console.warn('SummaryStrip');
    return (
        <div className='summary-strip'>
            <span className='price-status'>
                <span className='current-price'> $ 208,388.56</span>
                <sup className='percent-change'> +7.53%</sup>
            </span>
            <span className='scrollable-x-axis'>
                <span className='todays-change block'>
                    <span className='text'> 24H Change  </span>
                    <span className='todays-percent-change main-text'>  +   4.2 %  </span>
                </span>
                <span className='volume-change block'>
                    <span className='text'> Volume (24Hours) <InfoCircleOutlined /></span>
                    <span className='todays-percent-change main-text'>
                        <img height='13px' width='13px' src={dollarImage} alt="dollar icon" className='dollar-icon' />
                        3B </span>
                </span>
                <span className='apy-change block'>
                    <span className='text'> APY (est) <InfoCircleOutlined /> </span>
                    <span className='todays-percent-change main-text'> 2.5 % </span>
                </span>
            </span>
        </div>
    )
}

export default SummaryStrip
