import { useSelector, useDispatch } from 'react-redux';
import { add_song } from '../actions';
import AddSongForm from '../components/AddSongForm';

const AddSong = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => state.songs);

    const returnNewID = () => {
        return songs.length + 1;
    };

    const clearForm = (event) => {
        event.target[0].value = '';
        event.target[1].value = '';
        event.target[2].value = 'none';
        event.target[3].value = 'none';
        event.target[4].value = '';
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = event.target[0].value;
        const artist = event.target[1].value;

        let genre;
        if(event.target[2].value === 'none') {
            genre = ''
        } else {
            genre = event.target[2].value
        };
         
        let rating;
        if(event.target[3].value === 'none') {
            rating = ''
        } else {
            rating = event.target[3].value
        };

        const link = event.target[4].value;

        dispatch(add_song(
            {
                id: returnNewID(),
                title: title,
                artist: artist,
                genre: genre,
                rating: rating,
                link: link
            }
        ));

        clearForm(event);    
    };

    return (
        <div className="add-song">
            <AddSongForm handleSubmit={handleSubmit}/>
        </div>  
    );
};

export default AddSong;