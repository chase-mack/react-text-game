import styles from './menu.module.css'

export default function Menu(props) {

    const btnDisplay = {
        clicked: { display: 'none' },
        notClicked: { display: 'inline-block' }
    }

    return (
        <button className={styles.startButton}
            style={props.gameStarted ? btnDisplay.clicked : btnDisplay.notClicked}
            onClick={props.handleClick}>Start
        </button>
    )
}