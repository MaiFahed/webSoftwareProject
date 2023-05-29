import React from 'react'
import AdminNavBar from '../components/AdminNavBar'
import { RadialBar, PieChart, Pie, Cell, Legend , BarChart , Bar ,XAxis, YAxis, CartesianGrid, Tooltip,RadialBarChart,AreaChart,Area  ,LineChart ,Line} from 'recharts';
import { Box, Typography } from '@material-ui/core';

const data = [
  { name: 'Category 1', value: 400 },
  { name: 'Category 2', value: 600 },
  { name: 'Category 3', value: 200 },
  { name: 'Category 4', value: 100 },
  { name: 'Category 5', value: 12 },
];
// [
//   Number of Resturants 
//   Number of Users 
//   total earnings 
//   number of orders 
//   number of orders in each city chart
//   every resturant how man orders 
// ]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const Statistic = () => {
  return (
    <>
     <AdminNavBar/>
    <PieChart width={400} height={300}>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={80}
      fill="#8884d8"
    >
      {data.map((entry, index) => (
        <Cell key={index} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Legend align="center" verticalAlign="bottom" />
  </PieChart>



  <BarChart width={400} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="value" fill="#8884d8" />
  </BarChart>

  <AreaChart width={400} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>

  <RadialBarChart width={400} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
    <RadialBar minAngle={15} background clockWise={true} dataKey="value" />
    <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
  </RadialBarChart>

  <Box p={2}>
    <Typography variant="h6" gutterBottom>
      Line Chart Dashboard
    </Typography>
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  </Box>
  
    </>

    // <div>Statistic</div>

  )
}

export default Statistic