import React from 'react';
import { Bar } from 'react-chartjs-2'
import DashboardWrapper, { DashboardWrapperMain } from '../components/dashboard-wrapper/DashboardWrapper';
import { colors, data } from '../constants'
import { SummaryBox, SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { Box } from '../components/box/Box';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const { io } = require("socket.io-client");
const socket = io("http://localhost:3033");

const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
            grid: {
              display: false,
              drawBorder: false
            }
      },
      yAxes:{
        grid: {
          display: false,
          drawBorder: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 10,
        borderSkpped: 'bottom'
      }
    }
  }
  
  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.revenueByMonths.data
      }
    ]
  }

  return (
    <div>
        <div className='title'>
            Relatorio Mensal
        </div>

        <div>
          <Bar options={chartOptions} data={chartData} height={`300px`} />
        </div>
      </div>
  )
}

export const Dashboard = () => {
  document.documentElement.requestFullscreen();
  socket.emit("invalidProds", {whatsapp: "11959050868"});
  return (
    <DashboardWrapper>
          <DashboardWrapperMain>
                  <div className="row">
                    <div className="col-8 col-md-12">
                      <div className='row'>
                        {
                            data.summary.map((item, index) => (
                                <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                                    <SummaryBox item={item}/>
                                </div>
                            ))
                        }
                      </div>
                    </div>
                    <div className="col-4 hide-md">
                      <SummaryBoxSpecial item={data.revenueSummary} />
                    </div>
                  </div>

                  <div className="row">
                    <div className='col-12'>
                        <Box>
                          <RevenueByMonthsChart />
                        </Box>
                    </div>
                  </div>
          </DashboardWrapperMain>
    </DashboardWrapper>
  );
};
