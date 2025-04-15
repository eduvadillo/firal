import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import CountdownCard from './CountdownCard';
import PolicyReminder from './PolicyReminder';
import NewMessages from './NewMessages';
import InscriptionsCard from './InscriptionsCard';
import NextInscriptionsCard from './NextInscriptionsCard';
import WeatherCard from './WeatherCard';
import CommunicationsCard from './CommunicationsCard';
import RatingsCard from './RatingsCard';
import ApplicationsTable from './ApplicationsTable';
import PaymentsTable from './PaymentsTable';
import FairCarousel from './FairCarousel';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const mockMessages = [
    {
      id: '1',
      sender: 'Ajuntament de Barcelona',
      preview: 'L’Ajuntament de Vallgorguina t’ha escrit. Contesta el mes aviat possible',
      time: '10:30',
      unread: true,
    },
  ];

  return (
    <div className="dashboard-layout">
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <div className="dashboard-grid">
            <div className="top-cards">
              <CountdownCard daysLeft={15} nextFairName="Molins de Rei (Baix Llobregat)" />
              <PolicyReminder />
              <NewMessages messages={mockMessages} />
            </div>

            <div className="dashboard-section inscriptions-section">
              <NextInscriptionsCard />
            </div>

            <div className="dashboard-section">
              <div className="remaining-content">
                <InscriptionsCard />
                <WeatherCard />
                <CommunicationsCard />
                <RatingsCard />
              </div>
            </div>

            <div className="dashboard-section">
              <FairCarousel />
            </div>

            <div className="dashboard-section">
              <ApplicationsTable />
            </div>

            <div className="dashboard-section">
              <PaymentsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
