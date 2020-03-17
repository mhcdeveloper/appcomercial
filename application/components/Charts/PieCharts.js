import React from 'react';
import { PieChart } from "react-native-chart-kit";
import { width } from '../../utils';

const data = [    
    {
        name: "Prazo",
        population: 78,
        color: "#05A802",
    },    
    {
        name: "Atrasado",
        population: 12,
        color: "#A80202",
    },
    {
        name: "Antecipado",
        population: 92,
        color: "#016DD2",
        legendFontColor: "#7F7F7F",
        legendFontSize: 20
    },        
];

const chartConfigs = [
    {
      backgroundColor: '#000000',
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      style: {
        borderRadius: 16
      }
    },
  ]

export default PieCharts = ({ }) => {
    return (
        <PieChart
            data={data}
            width={width}
            height={350}
            chartConfig={chartConfigs[0]}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="50"
            hasLegend={false}
        />
    )
}