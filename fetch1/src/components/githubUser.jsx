import { useEffect, useState } from 'react';

function GithubUser({ username }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("")

    useEffect(() => {
        fetchUser(username);
    }, []);

    function fetchUser(username) {
        setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setUser(data);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    }
    function handleSubmit(event) {
        event.preventDefault()
        fetchUser(name)
    }
    return (
        <div>
            {user && (
                <>
                    {user.avatar_url && <img src={user.avatar_url} alt="User Avatar" />}
                    <div>{user.login}</div>
                    <div>{user.name}</div>
                </>
            )}
            {!user && <div>No user data available</div>}
            {error && <div>{error.message}</div>}
            {loading && <div>Loading...</div>}
            <form onSubmit={handleSubmit} action="">
            <input type="text" onChange={(event)=> setName(event.target.value)} />
            <button type="submit">Search</button>
        </form>
        </div>
    );
}
export default GithubUser