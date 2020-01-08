import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Title from './Title';

const Chart = ({ data }) => {
  const theme = useTheme();
  return (
    <>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="bottom"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            />
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      time: PropTypes.number.isRequired,
      amount: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
const mapStateToProps = (state) => ({
  data: state.weekChart,
});
export default connect(mapStateToProps, null)(Chart);
