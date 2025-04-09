import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Dashboard.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const data = [
  { name: 'Jan', value: 120 },
  { name: 'Feb', value: 160 },
  { name: 'Mar', value: 180 },
  { name: 'Apr', value: 250 },
  { name: 'May', value: 200 },
  { name: 'Jun', value: 220 },
  { name: 'Jul', value: 190 },
  { name: 'Aug', value: 200 },
  { name: 'Sep', value: 230 },
  { name: 'Oct', value: 240 },
  { name: 'Nov', value: 280 },
  { name: 'Dec', value: 360 },
];

const Dashboard = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080', { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setEmail(res.data.email);
          setRole(res.data.role);
          if (res.data.email === 'elsamorina@gmail.com') {
            setRole('admin');
          }
        } else {
          navigate('/login');
        }
      })
      .catch(() => navigate('/login'));
  }, [navigate]);

  return (
    <div className="d-flex min-vh-100 dashboard-bg">
      <Sidebar />
      <div className="container-fluid p-4" style={{ marginLeft: '250px' }}>
        <div className="row">
          {/* Statistics Section */}
          <div className="col-md-8 mb-4">
            <div className="card shadow rounded-4 p-4">
              <h5 className="mb-3">Statistics</h5>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#4CAF50" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Earnings Section */}
          <div className="col-md-4 mb-4">
            <div className="card shadow rounded-4 p-4 text-center">
              <h5 className="mb-3">Earning in Month</h5>
              <div style={{ width: 120, margin: '0 auto' }}>
                <CircularProgressbar
                  value={75}
                  text={`75%`}
                  styles={buildStyles({
                    textColor: "#333",
                    pathColor: "#4CAF50",
                    trailColor: "#ddd",
                  })}
                />
              </div>
              <div className="mt-3">
                <p>Deposit: $20 541 875 574</p>
                <p>Expense: $54 1875 574</p>
                <p>Payable: $805 875 574</p>
              </div>
            </div>
          </div>

          {/* Monthly Sale Section */}
          <div className="col-md-4 mb-4">
            <div className="card shadow rounded-4 p-4 text-center">
              <h6>Monthly Sale</h6>
              <div style={{ width: 100, margin: '0 auto' }}>
                <CircularProgressbar
                  value={65}
                  text={`65%`}
                  styles={buildStyles({ pathColor: '#6f42c1', trailColor: '#eee' })}
                />
              </div>
              <h5 className="mt-3">20 541</h5>
            </div>
          </div>

          {/* Yearly Sale Section */}
          <div className="col-md-4 mb-4">
            <div className="card shadow rounded-4 p-4 text-center">
              <h6>Yearly Sale</h6>
              <div style={{ width: 100, margin: '0 auto' }}>
                <CircularProgressbar
                  value={75}
                  text={`75%`}
                  styles={buildStyles({ pathColor: '#28a745', trailColor: '#eee' })}
                />
              </div>
              <h5 className="mt-3">20 54 125</h5>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="col-md-4 mb-4">
            <div className="card shadow rounded-4 p-4">
              <h6 className="text-center">Calendar</h6>
              <div className="text-center">
                <p>04 October, 2020</p>
                <div className="calendar-placeholder">[Calendar Here]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
