import { useEffect, useState } from "react";

export default function ApiHooks({ url, data }) {
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
    const { signal } = controller;
        const fetchData = async () => {
            setLoading(true); 
            setError(null);
            try {
                const response = await fetch(url, { signal });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                data(json); 
                setLoading(false);
            } catch (error) {
                setError(error.message);  
                setLoading(false); 
            }
        };

        fetchData();
    }, [url, data]); 

    if (loading) {
        return <div className="text-center text-4xl text-white font-bold">Loading...</div>;  
    }
    if (error) {
        return <div className="text-center text-4xl text-white font-bold">Error: {error}</div>;  
    }

    return () => {
        controller.abort();
    };
}
