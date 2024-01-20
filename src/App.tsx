import React, { useState } from 'react';
import './App.css';
import { Text } from '@consta/uikit/Text';
import { ReactECharts } from './Echarts/ReactECharts';
import { presetGpnDefault, Theme } from '@consta/uikit/Theme';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { Layout } from '@consta/uikit/Layout';

const data = [
  {
    date: '2016-02-01',
    month: 'фев 2016',
    indicator: 'Курс доллара',
    value: 72,
  },
  {
    date: '2016-03-02',
    month: 'мар 2016',
    indicator: 'Курс доллара',
    value: 80,
  },
  {
    date: '2016-04-01',
    month: 'апр 2016',
    indicator: 'Курс доллара',
    value: 77,
  },
  {
    date: '2016-05-02',
    month: 'май 2016',
    indicator: 'Курс доллара',
    value: 78,
  },
  {
    date: '2016-02-01',
    month: 'июн 2016',
    indicator: 'Курс доллара',
    value: 77,
  },
  {
    date: '2016-03-02',
    month: 'июл 2016',
    indicator: 'Курс доллара',
    value: 76,
  },
  {
    date: '2016-04-01',
    month: 'авг 2016',
    indicator: 'Курс доллара',
    value: 81,
  },
  {
    date: '2016-05-02',
    month: 'сент 2016',
    indicator: 'Курс доллара',
    value: 82,
  },

  {
    date: '2016-02-01',
    month: 'фев 2016',
    indicator: 'Курс евро',
    value: 90,
  },
  {
    date: '2016-03-02',
    month: 'мар 2016',
    indicator: 'Курс евро',
    value: 88,
  },
  {
    date: '2016-04-01',
    month: 'апр 2016',
    indicator: 'Курс евро',
    value: 87,
  },
  {
    date: '2016-05-02',
    month: 'май 2016',
    indicator: 'Курс евро',
    value: 91,
  },
  {
    date: '2016-02-01',
    month: 'июн 2016',
    indicator: 'Курс евро',
    value: 92,
  },
  {
    date: '2016-03-02',
    month: 'июл 2016',
    indicator: 'Курс евро',
    value: 93,
  },
  {
    date: '2016-04-01',
    month: 'авг 2016',
    indicator: 'Курс евро',
    value: 89,
  },
  {
    date: '2016-05-02',
    month: 'сент 2016',
    indicator: 'Курс евро',
    value: 88,
  },

  {
    date: '2016-02-01',
    month: 'фев 2016',
    indicator: 'Курс юаня',
    value: 22,
  },
  {
    date: '2016-03-02',
    month: 'мар 2016',
    indicator: 'Курс юаня',
    value: 24,
  },
  {
    date: '2016-04-01',
    month: 'апр 2016',
    indicator: 'Курс юаня',
    value: 25,
  },
  {
    date: '2016-05-02',
    month: 'май 2016',
    indicator: 'Курс юаня',
    value: 21,
  },
  {
    date: '2016-02-01',
    month: 'июн 2016',
    indicator: 'Курс юаня',
    value: 23,
  },
  {
    date: '2016-03-02',
    month: 'июл 2016',
    indicator: 'Курс юаня',
    value: 24,
  },
  {
    date: '2016-04-01',
    month: 'авг 2016',
    indicator: 'Курс юаня',
    value: 26,
  },
  {
    date: '2016-05-02',
    month: 'сент 2016',
    indicator: 'Курс юаня',
    value: 19,
  },
];

const values = [
  {
    symbol: '$',
    name: 'Курс доллара',
  },
  {
    symbol: '€',
    name: 'Курс евро',
  },
  {
    symbol: '¥',
    name: 'Курс юаня',
  },
];

function App() {
  const [currency, setCurrency] = useState({
    symbol: '$',
    name: 'Курс доллара',
  });

  const option = {
    grid: {
      top: 20,
      left: 60,
      right: '3%',
      bottom: 36,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
      confine: true,
      formatter(params: { name: string; marker: string; value: number }[]) {
        const series = params.reduce((result, item, index) => {
          result += item.value
            ? `<div class = tooltip__main>
              <div class = tooltip__main-title>${item.marker} ${'qq'}</div>
              <div class = tooltip__main-value>${item.value}</div>
            </div>`
            : '';
          return result;
        }, '');
        return `
          <div class = tooltip__card>
            <div class = tooltip__title>
              ${params[0].name} год
            </div>
            <div>
              ${series}
            </div>
            <div class= tooltip__comments>
            </div>
        </div>
          `;
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data
        .filter((item) => item.indicator === currency.name)
        .map((item) => item.month),
      axisLine: {
        show: true,
        lineStyle: {
          type: 'dotted',
          color: '#ccd9e0',
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dotted',
          color: '#ccd9e0',
        },
      },
      axisLabel: {
        show: true,
        color: '#667985',
        fontSize: 12,
        fontFamily: 'Inter',
      },
    },
    yAxis: {
      type: 'value',
      splitNumber: 3,
      scale: true,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dotted',
          color: '#ccd9e0',
        },
      },
      axisLine: {
        lineStyle: {
          type: 'dotted',
          color: '#ccd9e0',
        },
      },
      axisLabel: {
        color: '#667985',
        fontSize: 12,
        fontFamily: 'Inter',
        showMinLabel: false,
        margin: 16,
      },
    },
    series: {
      name: 'График',
      data: data
        .filter((item) => item.indicator === currency.name)
        .map((item) => item.value),
      type: 'line',
      lineStyle: {
        color: 'red',
      },
      symbol: 'circle',
      label: {
        show: false,
        position: 'top',
        formatter: (params: { value: number }) => params.value?.toFixed(0),
      },
      barMaxWidth: 20,
    },
  };

  console.log(currency);

  return (
    <Theme preset={presetGpnDefault}>
      <div className="App">
        <Layout
          style={{
            width: '1200px',
            height: '500px',
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Layout
            style={{
              width: '100%',
              height: '25px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Text weight="bold" size="xl">
              {currency.name} к рублю
            </Text>
            <ChoiceGroup
              size="xs"
              value={currency}
              onChange={({ value }) => setCurrency(value)}
              items={values}
              getItemLabel={(item) => item.symbol}
              multiple={false}
            />
          </Layout>
          <ReactECharts option={option} />
        </Layout>
      </div>
    </Theme>
  );
}

export default App;
