
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('overview');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'parking-zones', label: 'Parking Zones', icon: '🅿️' },
    { id: 'parking-partners', label: 'Parking Partners', icon: '🤝' },
    { id: 'roadside-partners', label: 'Roadside Partners', icon: '🛣️' },
    { id: 'community', label: 'Community', icon: '👥' },
    { id: 'complaints', label: 'Complaints', icon: '📝' },
    { id: 'nearby-places', label: 'Nearby Places', icon: '📍' },
    { id: 'ads', label: 'Advertisements', icon: '📢' },
    { id: 'police-officers', label: 'Police Officers', icon: '👮' },
    { id: 'vehicles', label: 'Vehicles', icon: '🚗' },
    { id: 'payments', label: 'Payments', icon: '💳' },
    { id: 'wallet', label: 'Wallet', icon: '💰' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'vouchers', label: 'Vouchers', icon: '🎫' },
    { id: 'users', label: 'Users', icon: '👤' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  const metrics = [
    { title: 'Total Revenue', value: '$27632', change: '+2.5%', positive: true },
    { title: 'Active Bookings', value: '20199', change: '+8.5%', positive: true },
    { title: 'Available Spots', value: '1110', change: '-1.5%', positive: false },
    { title: 'Total Users', value: '12632', change: '+2.5%', positive: true }
  ];

  const chartData = [
    { month: 'Jan', marketing: 400, core: 300 },
    { month: 'Feb', marketing: 300, core: 200 },
    { month: 'Mar', marketing: 600, core: 400 },
    { month: 'Apr', marketing: 500, core: 450 },
    { month: 'May', marketing: 700, core: 500 },
    { month: 'Jun', marketing: 650, core: 480 },
    { month: 'Jul', marketing: 800, core: 600 },
    { month: 'Aug', marketing: 750, core: 650 },
    { month: 'Sep', marketing: 600, core: 500 },
    { month: 'Oct', marketing: 550, core: 480 },
    { month: 'Nov', marketing: 500, core: 450 },
    { month: 'Dec', marketing: 450, core: 400 }
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <img 
            src="https://www.ewaysservices.com/images/eways.jpg" 
            alt="eWays Services" 
            className="logo"
          />
          {!isSidebarCollapsed && <span className="brand-name">At Parkkin</span>}
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-section">
            <span className="nav-section-title">MAIN</span>
            {menuItems.slice(0, 4).map(item => (
              <div 
                key={item.id}
                className={`nav-item ${selectedMenu === item.id ? 'active' : ''}`}
                onClick={() => setSelectedMenu(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                {!isSidebarCollapsed && <span className="nav-label">{item.label}</span>}
              </div>
            ))}
          </div>
          
          <div className="nav-section">
            <span className="nav-section-title">MANAGEMENT</span>
            {menuItems.slice(4, 12).map(item => (
              <div 
                key={item.id}
                className={`nav-item ${selectedMenu === item.id ? 'active' : ''}`}
                onClick={() => setSelectedMenu(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                {!isSidebarCollapsed && <span className="nav-label">{item.label}</span>}
              </div>
            ))}
          </div>
          
          <div className="nav-section">
            <span className="nav-section-title">SYSTEM</span>
            {menuItems.slice(12).map(item => (
              <div 
                key={item.id}
                className={`nav-item ${selectedMenu === item.id ? 'active' : ''}`}
                onClick={() => setSelectedMenu(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                {!isSidebarCollapsed && <span className="nav-label">{item.label}</span>}
              </div>
            ))}
          </div>
        </nav>
        
        <div className="sidebar-footer">
          <div className="nav-item">
            <span className="nav-icon">🔔</span>
            {!isSidebarCollapsed && <span className="nav-label">Messages</span>}
            <span className="notification-badge">12</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📚</span>
            {!isSidebarCollapsed && <span className="nav-label">Library</span>}
          </div>
          <div className="nav-item">
            <span className="nav-icon">🆘</span>
            {!isSidebarCollapsed && <span className="nav-label">Support</span>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <button 
              className="sidebar-toggle"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            >
              ☰
            </button>
            <h1 className="page-title">Overview</h1>
            <div className="breadcrumb">
              Show: <span className="breadcrumb-link">All Projects</span> ▼
            </div>
          </div>
          
          <div className="header-right">
            <button className="generate-report-btn">Generate report</button>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
            <div className="user-profile">
              <span className="user-avatar">AR</span>
              <span className="user-name">Austin Robertson</span>
              <span className="user-role">Marketing Administrator</span>
            </div>
          </div>
        </header>

        {/* Metrics Cards */}
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-header">
                <h3 className="metric-title">{metric.title}</h3>
                <span className={`metric-change ${metric.positive ? 'positive' : 'negative'}`}>
                  {metric.change}
                </span>
              </div>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-subtitle">Compared to last month</div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart-container">
            <div className="chart-header">
              <h3>Parking Revenue</h3>
              <div className="chart-legend">
                <span className="legend-item marketing">● Marketing Revenue</span>
                <span className="legend-item core">● Core Revenue</span>
              </div>
            </div>
            <div className="chart-area">
              <svg className="line-chart" viewBox="0 0 800 400">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map(i => (
                  <line 
                    key={i} 
                    x1="60" 
                    y1={80 + i * 80} 
                    x2="740" 
                    y2={80 + i * 80} 
                    stroke="#2a2a2a" 
                    strokeWidth="1"
                  />
                ))}
                
                {/* Chart lines */}
                <polyline
                  fill="none"
                  stroke="#00a6e6"
                  strokeWidth="3"
                  points="60,300 120,250 180,200 240,180 300,150 360,160 420,120 480,140 540,200 600,220 660,260 720,280"
                />
                <polyline
                  fill="none"
                  stroke="#00cc88"
                  strokeWidth="3"
                  points="60,320 120,280 180,240 240,220 300,200 360,190 420,160 480,140 540,180 600,200 660,230 720,250"
                />
                
                {/* Chart points */}
                {chartData.map((point, index) => (
                  <g key={index}>
                    <circle cx={60 + index * 60} cy={400 - point.marketing * 0.4} r="4" fill="#00a6e6" />
                    <circle cx={60 + index * 60} cy={400 - point.core * 0.4} r="4" fill="#00cc88" />
                  </g>
                ))}
                
                {/* Labels */}
                {chartData.map((point, index) => (
                  <text 
                    key={index}
                    x={60 + index * 60} 
                    y="390" 
                    textAnchor="middle" 
                    fill="#666" 
                    fontSize="12"
                  >
                    {point.month}
                  </text>
                ))}
              </svg>
            </div>
          </div>

          <div className="stats-sidebar">
            <div className="stat-circle">
              <div className="circle-chart" data-percent="68">
                <span className="percent">68%</span>
                <span className="label">1st time this year</span>
              </div>
            </div>
            
            <div className="stat-circle">
              <div className="circle-chart" data-percent="76">
                <span className="percent">76%</span>
                <span className="label">Daily this year</span>
              </div>
            </div>
            
            <div className="visitor-count">
              <span className="count">10,254</span>
              <span className="count-label">Visitors this year</span>
              <span className="count-change negative">1.8% ↓</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <div className="total-bookings">
            <h3>Average Total Bookings</h3>
            <div className="booking-stats">
              <div className="booking-stat">
                <div className="stat-circle-small">46%</div>
                <div className="stat-details">
                  <span className="stat-value">92,980</span>
                  <span className="stat-label">Daily bookings</span>
                </div>
              </div>
              
              <div className="booking-stat">
                <div className="stat-circle-small green">74%</div>
                <div className="stat-details">
                  <span className="stat-value">38,546</span>
                  <span className="stat-label">Monthly average</span>
                </div>
              </div>
              
              <div className="booking-stat">
                <div className="stat-circle-small orange">14%</div>
                <div className="stat-details">
                  <span className="stat-value">14,068</span>
                  <span className="stat-label">Yearly growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="revenue-report">
            <h3>Revenue Report</h3>
            <div className="report-legend">
              <span className="legend-item online">● Online Revenue</span>
              <span className="legend-item offline">● Offline Revenue</span>
            </div>
            <div className="bar-chart">
              <svg viewBox="0 0 400 200">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => (
                  <g key={month}>
                    <rect
                      x={40 + index * 60}
                      y={180 - (Math.random() * 100 + 40)}
                      width="20"
                      height={Math.random() * 100 + 40}
                      fill="#00a6e6"
                    />
                    <rect
                      x={65 + index * 60}
                      y={180 - (Math.random() * 80 + 30)}
                      width="20"
                      height={Math.random() * 80 + 30}
                      fill="#0088cc"
                    />
                    <text
                      x={50 + index * 60}
                      y="195"
                      textAnchor="middle"
                      fill="#666"
                      fontSize="10"
                    >
                      {month}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
