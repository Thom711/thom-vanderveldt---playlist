import { useSelector, useDispatch } from 'react-redux';
import PlaylistHeader from '../components/PlaylistHeader';
import Song from '../components/Song';

const Playlist = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.songs);

    const mappedSongs = songs.map((song) => {
        return <Song song={song} key={song.id} />
    });

    return(
        <div className="playlist-container">
            <table>
            <PlaylistHeader />
                <tbody>
                    {mappedSongs}
                </tbody>
            </table>
        </div>
    );
};

export default Playlist;