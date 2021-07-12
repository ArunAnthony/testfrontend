import React from 'react';
import { Tabs } from 'antd';

import OrderTable from './OrderTable';
import 'antd/lib/tabs/style/index.css';

const { TabPane } = Tabs;

const OrdersHistory = ({ orderHistoryState }) => {
    const callback = (key) => {
        console.log('Tab changed')
    }
    console.warn('OrdersHistory')
    return (
        <div className='order-history-component'>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Active Orders" key="1">
                    <OrderTable data={orderHistoryState.active_orders} />
                </TabPane>
                <TabPane tab="Past Orders" key="2">
                    <OrderTable data={orderHistoryState.past_orders} />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default OrdersHistory;
