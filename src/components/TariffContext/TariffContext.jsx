import React, { createContext, useState, useContext } from 'react';

// Создание контекста для тарифов
const TariffContext = createContext();

export const useTariff = () => {
  return useContext(TariffContext);
};

export const TariffProvider = ({ children }) => {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const setTariff = (tariff) => {
    setSelectedTariff(tariff); // Устанавливаем выбранный тариф
  };

  return (
    <TariffContext.Provider value={{ selectedTariff, setTariff }}>
      {children}
    </TariffContext.Provider>
  );
};