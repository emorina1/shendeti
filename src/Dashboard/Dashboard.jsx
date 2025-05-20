import React from "react";
import { useSelector } from "react-redux";
import './dashboard.css';
import BodySVG from "../imgs/body.jpg";
import Sidebar from "../Dashboard/Sidebar";
import Navbar from "./Nav";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, PieChart, Pie
} from "recharts";

const statsData = [
  { name: "Mon", value: 120 },
  { name: "Tue", value: 180 },
  { name: "Wed", value: 140 },
  { name: "Thu", value: 250 },
  { name: "Fri", value: 200 },
];

const activityData = [
  { name: "Steps", value: 80 },
  { name: "Calories", value: 60 },
  { name: "Sleep", value: 90 },
];

const organData = [
  { name: "Heart", value: 78 },
  { name: "Lungs", value: 90 },
  { name: "Stomach", value: 53 },
  { name: "Liver", value: 44 },
];

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />
        <div className="dashboard">
          <div className="dashboard-header">
            <h2>Welcome, {user?.name}</h2>
            <p>May 2025</p>
          </div>

          <div className="main-content">
            <div className="left-panel">
              <div className="diagnosis-section">
                <h3>Health Diagnosis</h3>
                <div className="diagnosis-visuals">
                  <div className="body-graphic">
                    <img src={BodySVG} alt="Body" />
                  </div>
                  <div className="pie-chart">
                    <h4>Organ Health %</h4>
                    <ResponsiveContainer width={200} height={200}>
                      <PieChart>
                        <Pie
                          dataKey="value"
                          isAnimationActive={true}
                          data={organData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#38d9a9"
                          label
                        />
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="diagnosis-card heart">❤️ Heart — 78%</div>
                <div className="diagnosis-card lungs">🫁 Lungs — 90%</div>
                <div className="diagnosis-card stomach">🧻 Stomach — 53%</div>
                <div className="diagnosis-card liver">🧬 Liver — 44%</div>
              </div>

              <div className="chart-section">
                <h4>Blood Pressure</h4>
                <ResponsiveContainer width="100%" height={180}>
                  <LineChart data={statsData}>
                    <CartesianGrid stroke="#e6fcf5" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#38d9a9" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="right-panel">
              <div className="calendar-section">
                <h3>Calendar</h3>
                <div className="calendar">
                  <div className="day active">Thu<br />6</div>
                  <div className="day">Fri<br />7</div>
                  <div className="day">Sat<br />8</div>
                </div>
                <div className="appointments">
                  <p><strong>Dentist</strong> — 08:00 - 08:30</p>
                  <p><strong>Neurologist</strong> — 09:00 - 09:30</p>
                  <p><strong>X-Ray</strong> — 18:00 - 18:30</p>
                </div>
              </div>

              <div className="activity-section">
                <h4>Your Activity</h4>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#74c0fc" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="heart-rate">💓 Heart rate: <strong>102 bpm</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
