import React from 'react';
import '../styles/components/common/_chartFilter.scss';

const ChartFilter = ({ chartFilter, handleFilterChange }) => {
    console.warn('chart filter')
    return (
        <div className='chart-filter-wrapper'>
            {chartFilter && chartFilter.length > 0 &&
                chartFilter.map((range, id) => {
                    return (
                        <div key={id} className={`chart-filter ${range.isActive ? 'active' : 'is-not-active'}`} onClick={() => handleFilterChange(range.key)}> {range.value} </div>
                    )
                })
            }
        </div>
    )
}

export default ChartFilter
