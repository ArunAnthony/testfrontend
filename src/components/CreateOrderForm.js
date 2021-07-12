import React from 'react';
import { Form, Button, InputNumber, Radio, Select, Collapse, notification } from 'antd';

import { CaretLeftFilled, SmileOutlined } from '@ant-design/icons';
import OrderSummaryTable from './OrderSummaryTable';

import 'antd/lib/select/style/index.css';
import 'antd/lib/notification/style/index.css';
import 'antd/lib/radio/style/index.css';
import 'antd/lib/collapse/style/index.css';
import 'antd/es/select/style/index.css';
import '../styles/components/stockView/_orderForm.scss';

const { Option } = Select;
const { Panel } = Collapse;

const generatePayload = (payload) => {
    const newPayload = {
        ...payload,
        expiry_term: payload.expiry_term_custom || payload.expiry_term,
        slippage_percentage: payload.slippage_percentage_custom || payload.slippage_percentage,
        date: Date.now(),
    }
    return newPayload;
}

const CreateOrderForm = (props) => {
    const [form] = Form.useForm(); //es-lint ignore
    const onFinish = (values) => {
        if (!values.expiry_term_custom && !values.expiry_term) {
            return;
        }
        if (!values.slippage_percentage && !values.slippage_percentage_custom) {
            return;
        }
        const payload = generatePayload(values);
        notification.open({
            message: 'Your Order has been placed successfully',
            icon: <SmileOutlined style={{ color: '#70E6DB' }} />,
            className: 'notifier-block'
        });
        props.handleOrderPlaced(payload);
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        notification.open({
            message: 'Your Order could not be placed',
            className: 'notifier-block'
        });
    };

    console.warn('create order')
    return (
        <div className='order-form'>
            <Form
                name="create-order-form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
            >
                <div className='form-box'>
                    <Form.Item
                        name="curreny_type"
                        label=""
                        // hasFeedback
                        initialValue="EID/TGH"
                        rules={[
                            {
                                required: true,
                                message: 'Please select currency type!',
                            },
                        ]}
                    >
                        <Select placeholder="Please select currency type!">
                            <Option value="EID/TGH">EID/TGH</Option>
                            <Option value="ETH/DAI">ETH/DAI</Option>
                            <Option value="USD/FAG">USD/FAG</Option>
                            <Option value="RUP/SNS">RUP/SNS</Option>
                        </Select>
                    </Form.Item>
                </div>
                <div className='form-box'>
                    <Form.Item
                        name="buy_sell_cta"
                        label=""
                        className='margin-little buy-sell-radio'
                        rules={[
                            {
                                required: true,
                                message: 'Please select',
                            },
                        ]}
                    >
                        <Radio.Group >
                            <Radio.Button value="Buy">BUY</Radio.Button>
                            <Radio.Button value="Sell">SELL</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <div className='order-form-label-wrapper'>
                        <div className='label-order-form'>Amount </div>
                        <div className='option-wrapper'>
                            <div className='options balance'> Bal : 0.012</div>
                        </div>
                    </div>
                    <div className='relative-block'>
                        <Form.Item
                            label=""
                            name="amount"
                            rules={
                                [
                                    {
                                        required: true, message: 'Please enter amount '
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (value <= 0) {
                                                return Promise.reject(new Error('Please select a positive value'));
                                            }
                                            return Promise.resolve();
                                        },
                                    }),
                                ]}
                            className='margin-little'
                        >
                            <InputNumber />
                        </Form.Item>
                        <div className='order-form-amount-input-wrapper abs-element'>
                            <span className='selected-amount-type max'> MAX</span>
                            <span className='selected-amount-type eth'> ETH</span>
                        </div>
                    </div>

                    <div className='order-form-label-wrapper'>
                        <div className='label-order-form'>At Price </div>
                        <div className='option-wrapper'>
                            <span className='options option-block'> +10%</span>
                            <span className='options option-block'> <CaretLeftFilled /></span>
                        </div>
                    </div>
                    <div className='relative-block'>
                        <Form.Item
                            label=""
                            name="price"
                            rules={
                                [
                                    { required: true, message: 'Please enter price' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (value <= 0) {
                                                return Promise.reject(new Error('Please select a positive value'));
                                            }
                                            return Promise.resolve();
                                        },
                                    }),
                                ]}
                            className='margin-little'
                        >
                            <InputNumber placeholder="Enter Amount" />
                        </Form.Item>
                        <div className='order-form-amount-input-wrapper abs-element'>
                            <span className='selected-amount-type dai'> DAI</span>
                        </div>
                    </div>
                    <OrderSummaryTable />
                </div>
                <div className='form-box'>
                    <Collapse accordion expandIconPosition="right" style={{ border: 'none' }} defaultActiveKey={['1']}>
                        <Panel header="Advanced Options" key="1">
                            <div className='label-margin'>
                                <div className='order-form-label-wrapper'>
                                    <div className='form-field'> Max Slippage</div>
                                </div>
                                <Form.Item
                                    name="slippage_percentage"
                                    label=""
                                    className='slippage-radio margin-little'
                                    rules={[
                                        {
                                            required: false,
                                            message: 'Please select slippage % or select custom',
                                        },
                                    ]}
                                >

                                    <Radio.Group >
                                        <Radio.Button value="0.5">0.5%</Radio.Button>
                                        <Radio.Button value="1">1%</Radio.Button>
                                        <Radio.Button value="2">2%</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>

                                <Form.Item
                                    label=""
                                    name="slippage_percentage_custom"
                                    className='margin-little'
                                    rules={[
                                        { required: false, message: 'Please enter slippage percent' },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value && !getFieldValue('slippage_percentage')) {
                                                    return Promise.reject(new Error('Please select slippage percent or edit custom'));
                                                } if (value && value <= 0) {
                                                    return Promise.reject(new Error('Please enter positive value'));
                                                }
                                                return Promise.resolve();
                                            },
                                        }),
                                    ]}
                                >
                                    <InputNumber placeholder="Custom percent" />
                                </Form.Item>
                                <div className='order-form-label-wrapper'>
                                    <div className='form-field'> Order Expiry</div>
                                </div>
                                <div className='order-expiry-option'>
                                    <Form.Item
                                        name="expiry_term"
                                        label=""
                                        rules={[
                                            {
                                                required: false,
                                                message: 'Please select number of years',
                                            },
                                        ]}
                                        initialValue="10"
                                    >
                                        <Select placeholder="Please select number of years">
                                            <Option value="05">05 Years</Option>
                                            <Option value="10">10 Years</Option>
                                            <Option value="15">15 Years</Option>
                                            <Option value="20">20 Years</Option>
                                        </Select>
                                    </Form.Item>


                                    <Form.Item
                                        label=""
                                        name="expiry_term_custom"
                                        rules={[
                                            { required: false, message: 'Please enter expiry term' },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value && !getFieldValue('expiry_term')) {
                                                        return Promise.reject(new Error('Please select expiry term  or edit custom'));
                                                    } if (value && value <= 0) {
                                                        return Promise.reject(new Error('Please enter positive value'));
                                                    }
                                                    return Promise.resolve();

                                                },
                                            }),

                                        ]}
                                    >
                                        <InputNumber placeholder="Custom Days" />
                                    </Form.Item>
                                </div>
                            </div>
                        </Panel>
                    </Collapse>
                </div>
                <Form.Item className='form-box submit-btn' >
                    <Button type="primary" className='light-theme-bg-cta' htmlType="submit">
                        PLACE ORDER
                    </Button>
                </Form.Item>
            </Form>
        </div >
    )
}



// const WrappedCreateOrderForm = Form.create({name: 'place_order_form' })(CreateOrderForm);


export default CreateOrderForm;