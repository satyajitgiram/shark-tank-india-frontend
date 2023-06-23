import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from './DataTable';
const BASE_URL = 'https://satyajitzecdata.pythonanywhere.com';




const PitchTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/pitches/`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { Header: 'ID', accessor: 'id' },
      {
    Header: 'Brand',
    accessor: 'brand_name',
    Cell: ({ value, row }) => (
      <a href={`/pitches/${encodeURIComponent(row.original.id)}`}>
        {value}
      </a>
    ),
  },
    { Header: 'Idea', accessor: 'product' },
    {
      Header: 'Deal',
      accessor: 'deal_or_not',
      Cell: ({ value }) => (
        <span className={`badge ${value ? 'bg-success' : 'bg-danger'}`}>
          {value ? 'Yes' : 'No'}
        </span>
      ),
    },
    { Header: 'Invested Amount (L)', accessor: 'deal_amount' },
    // Add more columns as needed
  ];

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Pitches on Shark Tank</h1>
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
};

export default PitchTable;
