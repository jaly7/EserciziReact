import React from 'react';
import Navigator from './components/navigator';

function App() {
    const { location, error, loading, getLocation } = Navigator();

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {location && (
                <div>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </div>
            )}
            <button onClick={getLocation}>Get Location</button>
        </div>
    );
}

export default App;
