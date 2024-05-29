import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourModelList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/yourmodel/')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>
            <h1>Your Models</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default YourModelList;