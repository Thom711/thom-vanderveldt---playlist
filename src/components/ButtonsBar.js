const ButtonsBar = (props) => {
    return(
        <div className="buttonsbar">
            <label>
                Sort By:
                <select name="sort" onChange={props.handleSort}>
                    <option value="none">Oldest first</option>
                    <option value="latest">Latest first</option>
                    <option value="song-az">Song Title A-Z</option>
                    <option value="song-za">Song Title Z-A</option>
                    <option value="artist-az">Artist A-Z</option>
                    <option value="artist-za">Artist Z-A</option>
                    <option value="rating-highlow">Rating High to Low</option>
                    <option value="rating-lowhigh">Rating Low To High</option>
                </select>
            </label>
            <label className="filters">
                Only Show Me:
                <input type="checkbox" onChange={props.handleFilter} value="Pop"></input>Pop
                <input type="checkbox" onChange={props.handleFilter} value="Rock"></input>Rock
                <input type="checkbox" onChange={props.handleFilter} value="Blues"></input>Blues
                <input type="checkbox" onChange={props.handleFilter} value="Jazz"></input>Jazz
                <input type="checkbox" onChange={props.handleFilter} value="Hiphop"></input>Hip Hop
            </label>
             <button>About Me</button>
        </div>
    );
};

export default ButtonsBar;