// import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./chart.css";

const Chart = ({ title, data, xDataKey, yDataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <div className="graph">
        <ResponsiveContainer width="99%" aspect={4 / 1}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {grid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis
              dataKey={xDataKey}
              stroke="#15171a"
              allowDataOverflow={true}
            />
            <YAxis stroke="#15171a" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={yDataKey}
              stroke="#d27b00"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
