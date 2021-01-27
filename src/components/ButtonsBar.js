const ButtonsBar = () => {
    return(
        <div className="buttonsbar">
            <label>
                Sort By: 
                <select>
                    <option value="">Oldest first</option>
                    <option value="">Latest first</option>
                    <option value="">Song Title A-Z</option>
                    <option value="">Song Title Z-A</option>
                    <option value="">Artist A-Z</option>
                    <option value="">Artist Z-A</option>
                </select>
            </label>
            <label className="filters">
                Only Show Me:
                <input type="checkbox"></input>Pop
                <input type="checkbox"></input>Rock
                <input type="checkbox"></input>Blues
                <input type="checkbox"></input>Jazz
                <input type="checkbox"></input>Hip Hop
            </label>
             <button>About Me</button>
        </div>
    );
};

export default ButtonsBar;