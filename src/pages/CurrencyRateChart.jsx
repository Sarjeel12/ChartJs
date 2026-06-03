import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const CurrencyRateChart = () => {
    const [chartType, setChartType] = useState('line');
    const [baseCurrency, setBaseCurrency] = useState('PKR');
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 10 countries: USA, Germany, China, Russia, Middle East (UAE, Saudi Arabia, Kuwait), UK, Japan, India
    const currencies = ['USD', 'EUR', 'CNY', 'RUB', 'AED', 'SAR', 'KWD', 'GBP', 'JPY', 'INR'];

    useEffect(() => {
        fetchCurrencyData();
    }, [baseCurrency]);

    const fetchCurrencyData = async () => {
        setLoading(true);
        setError(null);

        try {
            // Fetch real exchange rates from API
            const response = await axios.get(
                `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`,
                {
                    timeout: 10000, // 10 second timeout
                }
            );

            const rates = response.data.rates;

            // Map rates for the selected currencies - INVERTED to show readable format
            const data = {
                labels: currencies.map((curr) => {
                    const countryMap = {
                        USD: '🇺🇸 USA',
                        EUR: '🇩🇪 Germany',
                        CNY: '🇨🇳 China',
                        RUB: '🇷🇺 Russia',
                        AED: '🇦🇪 UAE',
                        SAR: '🇸🇦 Saudi Arabia',
                        KWD: '🇰🇼 Kuwait',
                        GBP: '🇬🇧 UK',
                        JPY: '🇯🇵 Japan',
                        INR: '🇮🇳 India',
                    };
                    return countryMap[curr] || curr;
                }),
                datasets: [
                    {
                        label: `1 [Currency] = X ${baseCurrency}`,
                        data: currencies.map((curr) => {
                            // Invert the rate: instead of 1 PKR = 0.0036 USD, show 1 USD = 278 PKR
                            const rate = rates[curr];
                            return rate ? (1 / rate).toFixed(2) : 0;
                        }),
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.5)',
                        tension: 0.3,
                        fill: true,
                        borderWidth: 2,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                    },
                ],
            };

            setChartData(data);
        } catch (err) {
            console.error('Error fetching currency data:', err);
            if (err.code === 'ECONNABORTED') {
                setError('Request timeout. Please try again.');
            } else if (err.response?.status === 404) {
                setError(`Currency ${baseCurrency} not found`);
            } else {
                setError('Failed to fetch currency data. Please check your internet connection.');
            }
        } finally {
            setLoading(false);
        }
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            title: {
                display: true,
                text: `Currency Exchange Rates (Base: ${baseCurrency})`,
                font: {
                    size: 16,
                    weight: 'bold',
                },
            },
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const currencyIndex = context.dataIndex;
                        const currency = currencies[currencyIndex];
                        return `1 ${currency} = ${context.parsed.y} ${baseCurrency}`;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Exchange Rate',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Currencies',
                },
            },
        },
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1>💱 Currency Exchange Rate Chart</h1>

            {/* Controls */}
            <div style={{ marginBottom: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div>
                    <label htmlFor="baseCurrency" style={{ marginRight: '10px' }}>
                        Base Currency:
                    </label>
                    <select
                        id="baseCurrency"
                        value={baseCurrency}
                        onChange={(e) => setBaseCurrency(e.target.value)}
                        style={{
                            padding: '8px 12px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            cursor: 'pointer',
                        }}
                    >
                        <option value="PKR">PKR (Pakistan Rupees)</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="chartType" style={{ marginRight: '10px' }}>
                        Chart Type:
                    </label>
                    <select
                        id="chartType"
                        value={chartType}
                        onChange={(e) => setChartType(e.target.value)}
                        style={{
                            padding: '8px 12px',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            cursor: 'pointer',
                        }}
                    >
                        <option value="line">Line Chart</option>
                        <option value="bar">Bar Chart</option>
                    </select>
                </div>

                <button
                    onClick={fetchCurrencyData}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                    }}
                >
                    Refresh Data
                </button>
            </div>

            {/* Loading State */}
            {loading && <p style={{ textAlign: 'center', color: '#666' }}>Loading currency data...</p>}

            {/* Error State */}
            {error && <p style={{ textAlign: 'center', color: '#d32f2f' }}>⚠️ {error}</p>}

            {/* Chart */}
            {chartData && !loading && (
                <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
                    {chartType === 'line' ? (
                        <Line data={chartData} options={options} />
                    ) : (
                        <Bar data={chartData} options={options} />
                    )}
                </div>
            )}

            
        </div>
    );
};
