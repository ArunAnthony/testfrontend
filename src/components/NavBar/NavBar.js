import React from 'react'
import { SwapOutlined, ThunderboltOutlined, WalletOutlined, EllipsisOutlined } from '@ant-design/icons';

import '../../styles/components/navbar/_navbar.scss';

const NavBar = () => {
    console.warn('navbar')
    return (
        <nav className='octane-nav'>
            <span className='logo'> octane </span>
            <span className='navigation-links hide-for-mobile'>
                <span className='selected nav-link'>   <SwapOutlined /> Trade </span>
                <span className='nav-link'> <ThunderboltOutlined /> Execute </span>
            </span>
            <span className='other-options'>
                <span className='dark-bg-cta btn wallet-btn hide-for-mobile'> <WalletOutlined /> COLLECT WALLET </span>
                <span className='dots settings'> <EllipsisOutlined /> </span>
            </span>
        </nav>
    )
}

export default NavBar
