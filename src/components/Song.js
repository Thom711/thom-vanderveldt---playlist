// import { useDispatch } from 'react-redux';
// import { delete_song } from '../actions';

const Song = (props) => {
    // const dispatch = useDispatch();
    const song = props.song;

    // const handleClick = () => {
    //     dispatch(delete_song(song.id));
    // };

    return (
        <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.genre ? song.genre : ''}</td>
            <td>{song.rating ? song.rating : ''}</td>
            <td>{song.link ? <a href="{song.link}" target="_blank">Click Here</a> : ''}</td>
            <td>DD</td>
        </tr>
    );
};

export default Song;

/* <button onClick={handleClick}>Delete Song</button> */