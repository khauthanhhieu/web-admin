import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BarCharts = ({ data }) => (
  <>
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{
          top: 5, right: 0, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Doanh thu" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </>
);
BarCharts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
const mapStateToProps = (state) => ({
  data: state.monthChart,
});
export default connect(mapStateToProps, null)(BarCharts);
