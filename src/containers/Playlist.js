import { useSelector, useDispatch } from 'react-redux';
import { delete_song } from '../actions';
import ButtonsBar from '../components/ButtonsBar';
import PlaylistHeader from '../components/PlaylistHeader';
import Song from '../components/Song';

const Playlist = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.songs);

    const handleClick = (id) => {
        dispatch(delete_song(id));
    }

    const mappedSongs = songs.map((song) => {
        return <Song 
            song={song} 
            key={song.id} 
            handleClick={handleClick}
        />
    });

    return(
        <div>
             <ButtonsBar />

             <div className="playlist-container">
                <table>
                <PlaylistHeader />
                    <tbody>
                        {mappedSongs}
                    </tbody>
                </table>
            </div>
        </div>
        
    );
};

export default Playlist;