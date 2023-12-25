import styles from './gametext.module.css';

export default function GameText(props) {

    const elementDisplay = {
        hidden: { display: 'none' },
        visible: { display: 'flex' }
    }

    return (
        <div
            className={styles.gameText}
            style={props.gameStarted ? elementDisplay.visible : elementDisplay.hidden}
        >
            <h1>{props.narration}</h1>
            <div className="action">
                <form
                    autoComplete="off"
                    id="form"
                    onSubmit={props.handleSubmit}
                >
                    <input type="text" name="userInput" id="userInput" className={styles.userInput} placeholder="What do you do?" />
                </form>
            </div>
        </div>
    )
}