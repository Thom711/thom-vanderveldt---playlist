const AddSongForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" placeholder="Song Title" name="title" required/>
                <input type="text" placeholder="Artist" name="artist" required/>

                <select
                    name="genre"
                >
                    <option value="none">- Select Genre -</option>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                    <option value="Blues">Blues</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Hiphop">Hip Hop</option>
                </select>

                <select
                    name="rating"
                >
                    <option value="none">- Select Rating -</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="url" placeholder="Youtube Link" name="link" />
                
                <button>Add Song</button>
            </form>
        </div>
    ); 
};

export default AddSongForm;