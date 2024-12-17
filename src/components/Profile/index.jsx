import styles from './styles.module.css'

export default function Profile(props) {
    return (
        <div className='profile'>
            <img className={styles.img} src={props.img}/>
            <h2>{props.name}</h2>
            <hr />
            <p>{props.experience}</p>
            <hr />
            <p>{props.fone}</p>
            <hr />
            <p>{props.email}</p>
            <hr />
            <button className={styles.button}>{props.gitHub}</button>
            <br /> <br />
            <button className={styles.button}>{props.linkedin}</button>
            <br /> <br />
            <button className={styles.button}>{props.twitter}</button>
        </div>
    )
}