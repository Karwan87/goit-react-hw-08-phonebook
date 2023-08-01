import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Phonebook{' '}
        <p className={styles.description}>
          {' '}
          Please register and login to create Your personal phonebook. Enjoy.
        </p>
      </h1>
    </div>
  );
}
