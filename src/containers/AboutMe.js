import { useDispatch } from 'react-redux';
import { change_route } from '../actions';

const AboutMe = () => {
    const dispatch = useDispatch();

    const changeRoute = () => {
        dispatch(change_route('playlist'));
    };

    return (
        <div className="about-me-container">
            <div className="center">
                Hello party people! My name is Thom and this is one of the last assignments in the Front-End course at Winc Academy.
                It is a little playlist project where you can add your own songs, catagorize them and rate them. You can also add
                links to Youtube if you get the urge to listen to them right away. Unfortunatly it resets every time you reload 
                the page, but maybe we will revisit this project later to add a Back-End. Why not! When testing this out, I'd be
                very dissapointed if you do not add some Rammstein, Atmosphere or Leprous. Anyway, have a nice day / week / weekend!
                <br />
                <br />
                Made by Thom for Winc Academy, January 2021.
            </div>
            
            <div className="center">
                <button onClick={changeRoute}>Go Back</button>
            </div>
        </div>
    );
};

export default AboutMe;