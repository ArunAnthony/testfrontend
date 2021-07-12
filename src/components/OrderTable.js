import React from 'react';
import { Table, Tooltip } from 'antd';
import { InfoCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

import 'antd/lib/table/style/index.css';
import '../styles/components/common/_tableDefaultStyle.scss';

const OrderTable = ({ data }) => {
    const columns = [
        {
            title: 'Currency Type',
            dataIndex: 'curreny_type',
            key: 'curreny_type',
            responsive: ["lg", "xxl", "xl"]
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            responsive: ["xs", "xxl", "lg", "md", "sm", "xl"]
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            responsive: ["xs", "xxl", "lg", "md", "sm", "xl"]
        },
        {
            title:
                <div>Expiry&nbsp;
		            <Tooltip placement='bottom' title=''>
                        <InfoCircleOutlined />
                    </Tooltip>
                </div>,
            dataIndex: 'expiry_term',
            key: 'expiry_term',
            responsive: ["lg", "xl", "xxl"]
        },
        {
            title: 'Buy/Sell',
            dataIndex: 'buy_sell_cta',
            key: 'buy_sell_cta',
            render(text, record) {
                return {
                    children: <div className={`${text === 'Buy' ? 'active' : 'sell-color'}`}>{text}</div>
                };
            },
            responsive: ["xs", "xxl", "lg", "md", "sm", "xl"]
        },
        {
            title: 'Slippage Percent',
            dataIndex: 'slippage_percentage',
            key: 'slippage_percentage',
            render(text, record) {
                return {
                    children: <div className=''><span>{text}%</span> <span className='' style={{ marginLeft: '4rem' }}> <RightCircleOutlined /></span> </div>
                };
            },
            responsive: ["lg", "xl", "xxl"]
        },
    ];
    return (
        <div className='order-history-table'>
            <Table
                dataSource={data}
                columns={columns}
                pagination={false}
                className='time-table-row-select'
            />
        </div>
    )
}

export default OrderTable
