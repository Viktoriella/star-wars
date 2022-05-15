import PropTypes from 'prop-types';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';

import styles from './ChooseSide.module.css';

const ChooseSide = () => {
    const isTheme = useTheme();

    return (
        <>
            <button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
            <button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
            <button onClick={() => isTheme.change(THEME_NEUTRAL)}>Neutral</button>
        </>
    )
}

ChooseSide.propTypes = {
    text: PropTypes.string
}

export default ChooseSide;