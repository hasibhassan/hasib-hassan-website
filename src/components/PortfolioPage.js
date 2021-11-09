import React from 'react'
import styles from './PortfolioPage.module.css'

const PortfolioPage = () => {
  return (
    <div className={styles.container}>
      <div className="card shadow--md">
        <div className="card__header">Vision crypto dashboard</div>
        <div className="card__image">
          <img
            src="../img/visionhome.png"
            alt="Vision home screenshot"
            title="Vision home"
          />
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <a
              className="button button--secondary"
              href="https://master.d2ad3ugmq3rllx.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              className="button button--secondary"
              href="https://github.com/hasibhassan/vision"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
