import styles from './map.module.css';

export default function Map(props) {

    const mapDisplay = {
        hidden: { display: 'none' },
        visible: { display: 'grid' }
    };
    
    const playerDisplay = {
        hidden: { display: 'none' },
        visible: { display: 'block' }
    };

    return (
        <div className={styles.mapContainer} style={props.gameStarted ? mapDisplay.visible : mapDisplay.hidden}>
            <div>
                <div className={styles.mapItem}>
                    <span className={styles.playerOnMap}
                        style={props.currentLocation === 'up' ? playerDisplay.visible : playerDisplay.hidden} />
                </div>
                <div className={styles.mapItem}>
                    <span className={styles.playerOnMap}
                        style={props.currentLocation === 'foyer' ? playerDisplay.visible : playerDisplay.hidden} />
                </div>
                <div className={styles.mapItem}>
                    <span className={styles.playerOnMap}
                        style={props.currentLocation === 'garage' ? playerDisplay.visible : playerDisplay.hidden} />
                </div>
            </div>
            <div>
                <div className={styles.mapItem}>
                    <span className={styles.playerOnMap}
                        style={props.currentLocation === 'bedroom' ? playerDisplay.visible : playerDisplay.hidden} />
                </div>
                <div className={styles.mapItem}>
                    <span className={styles.playerOnMap}
                        style={props.currentLocation === 'living' ? playerDisplay.visible : playerDisplay.hidden} />
                </div>
                <div className={styles.mapItem}>
                    <span className={styles.playerOnMap}
                        style={props.currentLocation === 'down' ? playerDisplay.visible : playerDisplay.hidden} />
                </div>
            </div>
            <div>
                <div className={styles.mapItem}>
                    <span className={styles.playerOnMap}
                        style={props.currentLocation === 'office' ? playerDisplay.visible : playerDisplay.hidden} />
                </div>
                <div className={styles.mapItem}>
                    <span className={styles.playerOnMap}
                        style={props.currentLocation === 'kitchen' ? playerDisplay.visible : playerDisplay.hidden} />
                </div>
                <div className={styles.mapItem}>
                    <span className={styles.playerOnMap}
                        style={props.currentLocation === 'basement' ? playerDisplay.visible : playerDisplay.hidden} />
                </div>
            </div>
        </div>
    )
}