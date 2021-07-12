import React, { useState } from 'react';

import CreateOrderForm from './CreateOrderForm';
import OrdersHistory from './OrdersHistory';
import PricingChart from './PricingChart';
import SummaryStrip from './SummaryStrip';
import '../styles/layouts/_stockView.scss';

const orderHistory = {
    "active_orders": [
        {
            amount: 132,
            buy_sell_cta: 'Buy',
            curreny_type: 'EID/TGH',
            expiry_term: 12,
            expiry_term_custom: 12,
            price: 123,
            slippage_percentage: "0.5",
            slippage_percentage_custom: undefined
        },
        {
            amount: 132,
            buy_sell_cta: 'Buy',
            curreny_type: 'EID/TGH',
            expiry_term: 12,
            expiry_term_custom: 12,
            price: 123,
            slippage_percentage: "0.5",
            slippage_percentage_custom: undefined
        },
        {
            amount: 132,
            buy_sell_cta: 'Buy',
            curreny_type: 'EID/TGH',
            expiry_term: 12,
            expiry_term_custom: 12,
            price: 123,
            slippage_percentage: "0.5",
            slippage_percentage_custom: undefined
        },
        {
            amount: 132,
            buy_sell_cta: 'Buy',
            curreny_type: 'EID/TGH',
            expiry_term: 12,
            expiry_term_custom: 12,
            price: 123,
            slippage_percentage: "0.5",
            slippage_percentage_custom: undefined
        },
        {
            amount: 132,
            buy_sell_cta: 'Buy',
            curreny_type: 'EID/TGH',
            expiry_term: 12,
            expiry_term_custom: 12,
            price: 123,
            slippage_percentage: "0.5",
            slippage_percentage_custom: undefined
        },
        {
            amount: 132,
            buy_sell_cta: 'Buy',
            curreny_type: 'EID/TGH',
            expiry_term: 12,
            expiry_term_custom: 12,
            price: 123,
            slippage_percentage: "0.5",
            slippage_percentage_custom: undefined
        },
    ],
    "past_orders": [
        {
            amount: 132,
            buy_sell_cta: 'Buy',
            curreny_type: 'EID/TGH',
            expiry_term: 12,
            expiry_term_custom: 12,
            price: 123,
            slippage_percentage: "0.5",
            slippage_percentage_custom: undefined
        },
        {
            amount: 132,
            buy_sell_cta: 'Buy',
            curreny_type: 'EID/TGH',
            expiry_term: 12,
            expiry_term_custom: 12,
            price: 123,
            slippage_percentage: "0.5",
            slippage_percentage_custom: undefined
        },
        {
            amount: 132,
            buy_sell_cta: 'Buy',
            curreny_type: 'EID/TGH',
            expiry_term: 12,
            expiry_term_custom: 12,
            price: 123,
            slippage_percentage: "0.5",
            slippage_percentage_custom: undefined
        },
        {
            amount: 132,
            buy_sell_cta: 'Buy',
            curreny_type: 'EID/TGH',
            expiry_term: 12,
            expiry_term_custom: 12,
            price: 123,
            slippage_percentage: "0.5",
            slippage_percentage_custom: undefined
        },
        {
            amount: 132,
            buy_sell_cta: 'Buy',
            curreny_type: 'EID/TGH',
            expiry_term: 12,
            expiry_term_custom: 12,
            price: 123,
            slippage_percentage: "0.5",
            slippage_percentage_custom: undefined
        },
    ]
}

const StockView = () => {

    const [orderHistoryState, setOrderHistoryState] = useState(orderHistory);

    const handleOrderPlaced = (params) => {
        const newActiveState = [params, ...orderHistoryState.active_orders];
        setOrderHistoryState((state) => {
            return ({
                active_orders: newActiveState,
                past_orders: state.past_orders,
            })
        })
    }

    return (

        <div className='stock-view-overview flex-layout'>
            <div className=''>
                <div className='status-block'>
                    <SummaryStrip />
                    <PricingChart />
                </div>
                <div className='status-block'>
                    <OrdersHistory orderHistoryState={orderHistoryState} />
                </div>
            </div>
            <CreateOrderForm handleOrderPlaced={handleOrderPlaced} />
        </div>
    )
}

export default StockView;
