export const add_song = (song) => {
    return {
        type: "ADD_SONG",
        payload: song
    };
};

export const delete_song = (id) => {
    return {
        type: "DELETE_SONG",
        payload: id
    };
};