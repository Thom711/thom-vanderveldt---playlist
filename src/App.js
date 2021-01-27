import './styles/styles.css';
import Header from './components/Header';
import AddSong from './containers/AddSong';
import Playlist from './containers/Playlist';

function App() {
    return (
        <div className="container">
            <Header />
            
            <main>
                <AddSong />
                
                <Playlist />
            </main>
            
        </div>
    );
};

export default App;