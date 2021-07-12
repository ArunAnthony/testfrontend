import React from 'react';
import { InfoCircleFilled } from '@ant-design/icons';
import '../styles/components/stockView/_orderSummaryTable.scss';

const OrderSummaryTable = ({ value = 0 }) => {
    console.warn('OrderSummaryTable')
    return (
        <div className='summary-block'>
            <div className='flex-block'>
                <div> Estimated Reward</div>
                <div> 0.5 OCTANE -22 ETH <InfoCircleFilled /> </div>
            </div>
            <div className='flex-block'>
                <div> Order Fee</div>
                <div > 0.002 ETH <InfoCircleFilled /> </div>
            </div>
            <div className='flex-block'>
                <div> Fee Discount</div>
                <div className='discount-value'> 0 ETH <span className='ico-block'><InfoCircleFilled /></span> </div>
            </div>
            <div className='flex-block'>
                <div> Total Amount</div>
                <div> $ 2500 <InfoCircleFilled /></div>
            </div>
        </div>
    )
}

export default OrderSummaryTable;
