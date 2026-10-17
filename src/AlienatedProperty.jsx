import React from 'react';
import './AlienatedProperty.css';
import { EvocaFooter } from './App';
import { Header } from './App';

const AlienatedProperty = () => {
  const propertyData = [
    {
      id: 1,
      address: 'Կոտայքի մարզ, հ. Սոլակ 1-ին փող., 4-րդ նրբ., թիվ 2 հողամաս',
      description: 'հողատարածք',
      area: '1340 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/solak.png'
    },
    {
      id: 2,
      address: 'ք. Երևան, Արաբկիր, Բաղրամյան պողոտա 53շ. 69',
      description: 'ոչ բնակելի տարածք',
      area: '180 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/baghramyan-53.jpg'
    },
    {
      id: 3,
      address: 'Պռոշյան գյուղ, Մայիսյան 4-րդ նրբանցք, 21 տուն',
      description: 'բնակելի տուն',
      area: '1,400 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/proshyan.jpg'
    },
    {
      id: 4,
      address: 'Կոտայքի մարզ, գ. Մարմարիկ',
      description: 'հողամաս',
      area: '7600 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/marmarik.jpg'
    },
    {
      id: 5,
      address: 'Կոտայքի մարզ, Արտավազ համ., Կարմիր հովիտ',
      description: 'հողամաս, (նպատակային նշ.` արոտավայր)',
      area: '10000 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/karmir-hovit_0.jpg'
    },
    {
      id: 6,
      address: 'ք. Գյումրի, Ղուկասյան փողոց 8 շարք, թիվ 33 բն.',
      description: 'տուն',
      area: '115 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/Gyumri.jpg'
    }
  ];

  return (
    <div className="alienated-container">
        <Header />
      {/* Хлебные крошки */}
      <nav className="breadcrumbs">
        <span className="home-icon">🏠</span>
        <span className="separator">›</span>
        <span className="current">Օտարվող գույք</span>
      </nav>

      {/* Заголовок страницы */}
      <h1 className="page-title">Օտարվող գույք</h1>

      {/* Таблица с объектами */}
      <div className="table-responsive">
        <table className="property-table">
          <thead>
            <tr>
              <th>ՀԱՍՑԵ</th>
              <th>ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ</th>
              <th>ՄԱԿԵՐԵՍ</th>
              <th>ՆԿԱՐ</th>
            </tr>
          </thead>
          <tbody>
            {propertyData.map((item) => (
              <tr key={item.id}>
                <td className="col-address">{item.address}</td>
                <td className="col-desc">{item.description}</td>
                <td className="col-area">{item.area}</td>
                <td className="col-img">
                  <div className="img-wrapper">
                    <img src={item.image} alt={item.description} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Время последнего обновления */}
      <div className="update-info">
        Թարմացվել է` 06/10/2025 10:00
      </div>
      <div className='mt-[50px]'></div>
      <EvocaFooter />
    </div>
   
  );
  
};

export default AlienatedProperty;