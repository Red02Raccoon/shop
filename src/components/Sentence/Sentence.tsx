import React from 'react';

type SentenceToWordsProps = {
    sentence: string;
};

const wordStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '4px 10px',
    margin: '2px',
    border: '1px solid #007bff',
    borderRadius: '12px',
    background: '#e7f1ff',
    color: '#007bff',
    fontSize: '0.95em',
    userSelect: 'none',
};

const SentenceToWords: React.FC<SentenceToWordsProps> = ({ sentence }) => {
    const words = sentence.split(' ').filter(Boolean);
    return (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {words.map((word, idx) => (
                <li key={idx} style={{ display: 'inline', marginRight: 4 }}>
                    <span style={wordStyle}>{word}</span>
                </li>
            ))}
        </ul>
    );
};

export default SentenceToWords;
