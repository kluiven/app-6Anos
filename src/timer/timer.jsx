import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs'

function Timer() {
    const [inputDate, setInputDate] = useState('11/11/2018');
    const [timeDifference, setTimeDifference] = useState({});
  
    const calculateTimeDifference = (date) => {
      const startDate = dayjs(date);
      const now = dayjs();
      
      // Anos completos
      const years = now.diff(startDate, 'year');
      const startDateAfterYears = startDate.add(years, 'year');
      
      // Meses completos após anos
      const months = now.diff(startDateAfterYears, 'month');
      const startDateAfterMonths = startDateAfterYears.add(months, 'month');
      
      // Semanas completas após anos e meses
      const weeks = Math.floor(now.diff(startDateAfterMonths, 'day') / 7);
      const startDateAfterWeeks = startDateAfterMonths.add(weeks * 7, 'day');
      
      // Dias completos após anos, meses e semanas
      const days = now.diff(startDateAfterWeeks, 'day');
      const startDateAfterDays = startDateAfterWeeks.add(days, 'day');
      
      // Horas completas após anos, meses, semanas e dias
      const hours = now.diff(startDateAfterDays, 'hour');
      const startDateAfterHours = startDateAfterDays.add(hours, 'hour');
      
      // Minutos completos após anos, meses, semanas, dias e horas
      const minutes = now.diff(startDateAfterHours, 'minute');
      const startDateAfterMinutes = startDateAfterHours.add(minutes, 'minute');
      
      // Segundos completos após anos, meses, semanas, dias, horas e minutos
      const seconds = now.diff(startDateAfterMinutes, 'second');
    
      // Atualiza o estado com a nova diferença de tempo
      setTimeDifference({ years, months, weeks, days, hours, minutes, seconds });
    };
    
  
    useEffect(() => {
      // Atualiza o tempo imediatamente ao carregar a página
      if (inputDate) {
        calculateTimeDifference(inputDate);
      }
  
      // Configura o intervalo para atualizar a cada segundo
      const interval = setInterval(() => {
        calculateTimeDifference(inputDate);
      }, 1000);
  
      // Limpa o intervalo quando o componente for desmontado
      return () => clearInterval(interval);
    }, [inputDate]);
  
    return (
      <div className="flex flex-col items-center w-full space-y-4 px-4">
  
  {/* Card para Anos */}
  <div className="card bg-white w-full rounded-lg shadow-xl p-6 flex justify-between items-center">
    <span className="text-2xl font-semibold text-gray-400">Anos</span>
    <span className="text-2xl text-gray-300">{timeDifference.years || 0}</span>
  </div>

  {/* Card para Meses */}
  <div className="card bg-white w-full rounded-lg shadow-xl p-6 flex justify-between items-center">
    <span className="text-2xl font-semibold text-gray-400">Meses</span>
    <span className="text-2xl text-gray-300">{timeDifference.months || 0}</span>
  </div>

  {/* Card para Semanas */}
    <div className="card bg-white w-full rounded-lg shadow-xl p-6 flex justify-between items-center">
    <span className="text-2xl font-semibold text-gray-400">Semanas</span>
    <span className="text-2xl text-gray-300">{timeDifference.weeks || 0}</span>
  </div>

  {/* Card para Dias */}
  <div className="card bg-white w-full rounded-lg shadow-xl p-6 flex justify-between items-center">
    <span className="text-2xl font-semibold text-gray-400">Dias</span>
    <span className="text-2xl text-gray-300">{timeDifference.days || 0}</span>
  </div>

  {/* Card para Horas */}
  <div className="card bg-white w-full rounded-lg shadow-xl p-6 flex justify-between items-center">
    <span className="text-2xl font-semibold text-gray-400">Horas</span>
    <span className="text-2xl text-gray-300">{timeDifference.hours || 0}</span>
  </div>

  {/* Card para Minutos */}
  <div className="card bg-white w-full rounded-lg shadow-xl p-6 flex justify-between items-center">
    <span className="text-2xl font-semibold text-gray-400">Minutos</span>
    <span className="text-2xl text-gray-300">{timeDifference.minutes || 0}</span>
  </div>

  {/* Card para Segundos */}
  <div className="card bg-white w-full rounded-lg shadow-xl p-6 flex justify-between items-center">
    <span className="text-2xl font-semibold text-gray-400">Segundos</span>
    <span class="text-2xl text-gray-300" >{timeDifference.seconds || 0}</span>
  </div>
  
</div>

    );
  }
  export default Timer;
