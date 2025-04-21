import React from 'react';
import Header from './Dashboard/Header';
import AlertCard from './Dashboard/AlertCard';
import PolicyReminder from './Dashboard/PolicyReminder';
import NewMessages from './Dashboard/NewMessages';
import InscriptionsCard from './Dashboard/InscriptionsCard';
import FairsCarousel from './Dashboard/FairsCarousel';
import NextInscriptionsCard from './NextInscriptionsCard';
import WeatherCard from './WeatherCard';
import DetailedWeatherCard from './Dashboard/DetailedWeatherCard';
import CommunicationsCard from './Dashboard/CommunicationsCard';
import RatingsCard from './RatingsCard';
import ApplicationsTable from './ApplicationsTable';
import PaymentsTable from './PaymentsTable';
import FairCarousel from './FairCarousel';
import RequestsTable from './Dashboard/RequestsTable';
import PaymentsHistoryTable from './Dashboard/PaymentsHistoryTable';
import RatingsTable from './Dashboard/RatingsTable';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const mockMessages = [
    {
      id: '1',
      sender: 'Ajuntament de Barcelona',
      preview: `L'Ajuntament de Vallgorguina t'ha escrit. Contesta el mes aviat possible`,
      time: '10:30',
      unread: true,
    },
  ];

  const initialMockFairs = [
    {
      id: '1',
      name: 'Fira de la Candelera',
      date: '2 de febrer de 2024',
      inscriptionsDate: 'Inscripcions: 1 - 15 de gener',
      imageUrl: '/assets/images/candelera.png',
      location: 'Molins de Rei',
      rating: 4.8,
      stallType: 'Gastronomia',
      tags: ['Gastronomia'],
      isFavorite: false,
    },
    {
      id: '2',
      name: 'Lactium',
      date: '13 de maig de 2024',
      inscriptionsDate: "Inscripcions: 1 - 30 d'abril",
      imageUrl: '/assets/images/lactium.png',
      location: 'Vic',
      rating: 4.5,
      stallType: 'Trabsversals',
      tags: ['Formatges'],
      isFavorite: true,
    },
    {
      id: '3',
      name: 'Literal',
      date: '13 de maig de 2024',
      inscriptionsDate: "Inscripcions: 1 - 30 d'abril",
      imageUrl: '/assets/images/literal.png',
      location: 'Barcelona',
      rating: 4.2,
      stallType: 'Cultura i entreteniment',
      tags: ['Llibres'],
      isFavorite: false,
    },
    {
      id: '4',
      name: 'Mercat Medieval Vic',
      date: 'Desembre 2024',
      inscriptionsDate: 'Inscripcions: Properament',
      imageUrl: '/assets/images/vic.png',
      location: 'Vic',
      rating: 4.9,
      stallType: 'Artesania i creació',
      tags: ['Medieval'],
      isFavorite: false,
    },
    {
      id: '5',
      name: "Fira de l'Aixada",
      date: '13 de maig de 2024',
      inscriptionsDate: 'Inscripcions: Properament',
      imageUrl: '/assets/images/aixada.png',
      location: 'Manresa',
      rating: 4.6,
      stallType: 'Gastronomia',
      tags: ['Històrica'],
      isFavorite: true,
    },
  ];

  return (
    <div className="dashboard-layout">
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <div className="dashboard-grid">
            <div className="top-cards">
              <AlertCard
                daysLeft={15}
                fairLocation="Molins de Rei (Baix Llobregat)"
                fairName="Fira de la Candelaria"
              />
              <PolicyReminder />
              <NewMessages messages={mockMessages} />
            </div>
            <div className="dashboard-section">
              <div className="dashboard-section inscriptions-section">
                <FairsCarousel fairs={initialMockFairs} />
              </div>

              <div className="dashboard-two-columns">
                <div className="left-column">
                  <InscriptionsCard />
                  <CommunicationsCard />
                  <RatingsTable />
                </div>
                <div className="right-column">
                  <DetailedWeatherCard />
                  <RequestsTable />
                  <PaymentsHistoryTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
