// src/components/ChallengeInfo.tsx
import React from 'react';
import styles from './styles.module.css';

interface ChallengeInfoProps {
    title?: string;
    author?: string;
    points?: number | string;
    difficulty?: 'Easy' | 'Medium' | 'Hard' | 'Insane';
    solves?: number;
    description?: string;
    chall?: string;
}

const ChallengeInfo: React.FC<ChallengeInfoProps> = ({
    title,
    author,
    points,
    difficulty,
    solves,
    description,
    chall
}) => {
    const getDifficultyColor = (diff: string) => {
        switch (diff) {
            case 'Easy': return styles.easy;
            case 'Medium': return styles.medium;
            case 'Hard': return styles.hard;
            case 'Insane': return styles.insane;
            default: return '';
        }
    };

    return (
        <div className={styles.container}>
            {title && <h1 className={styles.title}>{title}</h1>}

            <div className={styles.metadataGrid}>
                {author && (
                    <div className={styles.metadataItem}>
                        <span className={styles.metadataLabel}>Author</span>
                        <span className={styles.metadataValue}>{author}</span>
                    </div>
                )}

                {points && (
                    <div className={styles.metadataItem}>
                        <span className={styles.metadataLabel}>Points</span>
                        <span className={styles.metadataValue}>{points}</span>
                    </div>
                )}

                {solves !== undefined && (
                    <div className={styles.metadataItem}>
                        <span className={styles.metadataLabel}>Solves</span>
                        <span className={styles.metadataValue}>{solves}</span>
                    </div>
                )}

                {difficulty && (
                    <div className={styles.metadataItem}>
                        <span className={styles.metadataLabel}>Difficulty</span>
                        <span className={`${styles.metadataValue} ${getDifficultyColor(difficulty)}`}>
                            {difficulty}
                        </span>
                    </div>
                )}

                {description && (
                    <div className={styles.metadataDescription}>
                        <span className={styles.metadataLabel}>Description</span>
                        <span className={styles.metadataValue}>{description}</span>
                    </div>
                )}

                {chall && (
                    <div className={styles.downloadContainer}>
                        <a href={chall} download className={styles.downloadButton}>
                            📦 Download Chall
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChallengeInfo;