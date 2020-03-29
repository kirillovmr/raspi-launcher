import React from 'react';
import styles from './styles.css';

import pacmanImg from '../../../assets/games/icons/pacman.png';
import cocImg from '../../../assets/games/icons/clashofclans.png';
import flappyBirdImg from '../../../assets/games/icons/flappybird.png';

// let a = require('./../resources/games/icons/flappybird.png')

const getImage = (name) => {
    switch(name) {
        case "Clash of Clans":
            return cocImg;
        case "PAC-MAN 256":
            return pacmanImg;
        case "Flappy Bird":
            return flappyBirdImg;
    }
}

const getSelectedClass = (name) => {
    switch (name) {
        case "Clash of Clans":
            return styles.selectedRed;
        case "PAC-MAN 256":
            return styles.selectedYellow;
        case "Flappy Bird":
            return styles.selectedGreen;
        default:
            return styles.selectedRed;
    }
}

export default function GameIcon(props) {

    const borderClass = `${props.index == 0 && !props.topbarSelected ? `${getSelectedClass(props.object.name)}` : ``}`;

    return (
        <div className={`${styles.container} `} data-tid="container">
            <img src={getImage(props.object.name)} className={`${borderClass}`} />
            {/* <img src="./games/icons/flappybird.png" className={`${borderClass}`} /> */}
        </div>
    );
}