import React from "react";
import axios from "axios";

  const TradeView = () => {
    axios.get('https://api.binance.com/api/v1/klines', {
    params: {
      symbol: 'BTCUSDT',
      interval: '1h',
      limit: 10,
    }
    }).then(res => {
      const data = res.data
      const trades = data.map(i => ({
        time:  i[0] / 1000,
        open:  i[1],
        high:  i[2],
        low:   i[3],
        close: i[4]
      }))
      createChartWithAPIData(trades)
    })
    const createChartWithAPIData = (data = []) => {
      const chart = window.LightweightCharts.createChart(document.body, {
        width: 700,
        height: 300,
        layout: {
          backgroundColor: "#000000",
          textColor: "rgba(255, 255, 255, 0.9)",
        },
        grid: {
          vertLines: {
            color: "rgba(197, 203, 206, 0.5)",
          },
          horzLines: {
            color: "rgba(197, 203, 206, 0.5)",
          },
        },
        crosshair: {
          mode: window.LightweightCharts.CrosshairMode.Normal,
        },
        rightPriceScale: {
          borderColor: "rgba(197, 203, 206, 0.8)",
        },
        timeScale: {
          borderColor: "rgba(197, 203, 206, 0.8)",
        },
      });
      const lineSeries = chart.addCandlestickSeries({
        upColor: "rgba(255, 144, 0, 1)",
        downColor: "#000",
        borderDownColor: "rgba(255, 144, 0, 1)",
        borderUpColor: "rgba(255, 144, 0, 1)",
        wickDownColor: "rgba(255, 144, 0, 1)",
        wickUpColor: "rgba(255, 144, 0, 1)",
      });
      lineSeries.setData(data)
    }
    return (
      <div><h4>BNB-BTC CHART!</h4></div>
    );
  }

export default TradeView;




