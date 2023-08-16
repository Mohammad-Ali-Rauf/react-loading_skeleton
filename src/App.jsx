import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Posts</h1>
      <div className="space-y-4">
        {loading ? (
          <>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
              <Skeleton circle={true} width={50} height={50} duration={loading === true} />
              <div className="flex-grow">
                <h2 className="text-lg mb-2">
                  <Skeleton width={150} duration={loading === true} />
                </h2>
                <p>
                  <Skeleton count={2} duration={loading === true} />
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
              <Skeleton circle={true} width={50} height={50} duration={loading === true} />
              <div className="flex-grow">
                <h2 className="text-lg mb-2">
                  <Skeleton width={150} duration={loading === true} />
                </h2>
                <p>
                  <Skeleton count={2} duration={loading === true} />
                </p>
              </div>
            </div>
          </>
        ) : (
          data.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
              <img
                src={`https://i.pravatar.cc/50?u=${item.id}`}
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-grow">
                <h2 className="text-lg mb-2">{item.title}</h2>
                <p>{item.body}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;