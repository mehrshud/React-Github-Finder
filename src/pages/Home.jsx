import UserResult from '../components/users/UserResult';
import UserSearch from '../components/users/UserSearch';

function Home() {
    return (
        <>
            {/* Seacrch Component */}
            <UserSearch />
            <UserResult />
        </>
    );
}

export default Home;
