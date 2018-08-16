import React from 'react';
import _ from 'lodash';
import {  
    ResponsiveContainer,
    LineChart, 
    Line
} from 'recharts';

const data = _.times(20, () => ({ pv: Math.random() * 100 }));

const TinyLineChart = () => (
    <ResponsiveContainer width='100%' height={ 40 }>
        <LineChart data={data}>
            <Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
        </LineChart>
    </ResponsiveContainer>
);

export { TinyLineChart };