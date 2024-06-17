import { useState, useEffect } from 'react';

function Navigator() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function getCurrentPosition(){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    setLoading(false);
                },
                (error) => {
                    setError(error);
                    setLoading(true);
                }
            );
        };

        getCurrentPosition();
        return () => {
            navigator.geolocation.clearWatch(getCurrentPosition);
        };
    }, []);

    function getLocation() {
        setLoading(true);
        setError(null);
        setLocation(null);
        getCurrentPosition();
    };

    return { location, error, loading, getLocation };
}

export default Navigator;
