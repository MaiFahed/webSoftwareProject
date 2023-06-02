import React, { useState, useEffect } from 'react'
import AdminNavBar from '../components/AdminNavBar'
import { RadialBar, PieChart, Pie, Cell, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, RadialBarChart, AreaChart, Area, LineChart, Line } from 'recharts';
import { Box, Typography } from '@material-ui/core';

const data = [
  { name: 'Category 1', value: 400 },
  { name: 'Category 2', value: 600 },
  { name: 'Category 3', value: 200 },
  { name: 'Category 4', value: 100 },
  { name: 'Category 5', value: 12 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const Statistic = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://${import.meta.env.VITE_IP_ADDRESS}:3333/statistics/product`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setResult(data);
      })
      .finally(data => {
        console.log(data);
        setLoading(true);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  return (
    <>
      <AdminNavBar />
      <div style={{ display: 'flex', flexDirection: 'column' , position: "absolute", marginTop: '-70px', marginLeft: '50px', backgroundColor: 'lightgray', height: '85px', width: '175px' }}>
        <p style={{ fontWeight: 'bold', color: 'blue',marginTop:'10px' }}> {loading ? result[0].length: null }  </p>
        <p style={{ fontWeight: 'bold', color: 'red', marginTop:'-15px',fontSize:'20px' }}>Restaurants </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', position: "absolute", marginTop: '30px', marginLeft: '50px', backgroundColor: 'lightgray', height: '85px', width: '175px' }}>
        <p style={{ fontWeight: 'bold', color: 'orange', marginTop:'10px' }}>{loading ? result[5].userCount: null } </p>
        <p style={{ fontWeight: 'bold', color: 'red', marginTop:'-15px', fontSize:'20px' }}>Users </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', position: "absolute", marginTop: '130px', marginLeft: '50px', backgroundColor: 'lightgray', height: '85px', width: '175px' }}>
        <p style={{ fontWeight: 'bold', color: 'red',marginTop:'10px' }}>{loading ? result[1].length: null } </p>
        <p style={{ fontWeight: 'bold', color: 'red', marginTop:'-15px', fontSize:'20px' }}>Pending Accounts </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', position: "absolute", marginTop: '230px', marginLeft: '50px', backgroundColor: 'lightgray', height: '85px', width: '175px' }}>
        <p style={{ fontWeight: 'bold', color: 'purple',marginTop:'10px' }}>{loading ? result[6].totalDonateBoxes: null } </p>
        <p style={{ fontWeight: 'bold', color: 'red', marginTop:'-15px', fontSize:'20px'  }}>Donation Boxes </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', position: "absolute", marginTop: '330px', marginLeft: '50px', backgroundColor: 'lightgray', height: '85px', width: '175px' }}>
        <p style={{ fontWeight: 'bold', color: 'blue',marginTop:'10px' }}>{loading ? result[7].TotalProfit: null } </p>
        <p style={{ fontWeight: 'bold', color: 'red',marginTop:'-15px', fontSize:'20px' }}> Total Profit </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', position: "absolute", marginTop: '-100px', marginLeft: '250px' }}>

        <PieChart width={400} height={300}>
          <Pie
            data={result[8]}
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


        <BarChart width={800} height={300} data={result[4]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>



      </div>
      <div style={{ display: 'flex', flexDirection: 'row', position: "absolute", marginTop: '250px', marginLeft: '290px', alignItems:'center' }}>

        <RadialBarChart width={400} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={result[9]}>
          <RadialBar minAngle={15} background clockWise={true} dataKey="value" />
          <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
        </RadialBarChart>

        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            Line Chart Dashboard
          </Typography>
          <LineChart width={500} height={300} data={result[2]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </Box>

        <AreaChart width={400} height={300} data={result[3]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    </>

  )
}

export default Statistic