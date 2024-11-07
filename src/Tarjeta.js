// Tarjeta.js
import React from 'react';

function Tarjeta({ username, accountName, tweetText, profileImage }) {
    return (
        <div style={styles.card}>
            <div style={styles.header}>
                <img src={profileImage} alt={`${accountName} profile`} style={styles.profileImage} />
                <div>
                    <span style={styles.accountName}>{accountName}</span>
                    <span style={styles.username}>@{username}</span>
                </div>
            </div>
            <p style={styles.tweetText}>{tweetText}</p>
            <div style={styles.actions}>
                <button style={styles.actionButton}>💬</button>
                <button style={styles.actionButton}>🔁</button>
                <button style={styles.actionButton}>❤️</button>
            </div>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid #e1e8ed',
        borderRadius: '8px',
        padding: '15px',
        width: '600px',
        margin: '5px auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#202020',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    },
    profileImage: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '10px',
    },
    accountName: {
        fontWeight: 'bold',
        fontSize: '16px',
    },
    username: {
        color: '#fff',
        fontSize: '14px',
        marginLeft: '5px',
    },
    tweetText: {
        fontSize: '15px',
        lineHeight: '1.5',
        color: '#fff',
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '10px',
    },
    actionButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '18px',
    },
};

export default Tarjeta;
