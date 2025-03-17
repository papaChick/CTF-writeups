// src/components/FlagBox.tsx
import React, { useState } from 'react';
import styles from './styles.module.css';

interface FlagBoxProps {
    children: React.ReactNode;
}

const FlagBox: React.FC<FlagBoxProps> = ({ children }) => {

    return (
        <div className={styles.flagContainer}>
            <div className={styles.flagHeader}>
                <span className={styles.flagIcon}>🚩</span>
                <span className={styles.flagTitle}>FLAG</span>
            </div>
            <div className={styles.flagContent}>
                <pre>{children}</pre>
            </div>
        </div>
    );
};

export default FlagBox;