import React from 'react';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Clementine Mamogale</h1>
        <p>Software Developer • System Supporter • Lecturer</p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>About Me</h2>
          <p>
            I’m a versatile and dedicated software developer, system supporter, and lecturer
            with a strong academic foundation (BSc, BSc Honours, MSc in Computer Science).
            My experience spans backend and frontend development, Linux system support,
            and mobile app development.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          <ul>
            <li>MSc in Computer Science – University of Johannesburg (2024)</li>
            <li>BSc Honours in Information Technology – UJ (2022)</li>
            <li>BSc in Computer Science and Informatics – UJ (2021)</li>
            <li>Incoming PhD in Computer Science – UJ</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Skills</h2>
          <p>
            Java, Kotlin, JavaScript, C++, PHP, SQL, HTML, CSS<br />
            Frameworks: React, Node.js<br />
            Systems: Linux, Shell Scripting, GitHub Actions
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p>
            View my GitHub: <a href="https://github.com/Clementine2829" target="_blank" rel="noopener noreferrer">Clementine2829</a><br />
            LinkedIn: Not available yet
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Clementine Mamogale. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
