'use client';
import { useEffect, useState } from 'react';

const isIos = () => {
    return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
};

const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

export default function IOSInstallPrompt() {
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        if (isIos() && !isInStandaloneMode()) {
            setShowPrompt(true);
        }
    }, []);

    if (!showPrompt) {
        return null;
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '12px',
            textAlign: 'center',
            fontSize: '14px',
            zIndex: 1000,
        }}>
            <p style={{ margin: 0 }}>
                To install this app on your iPhone, tap the Share icon ⬆️ in Safari and then select "Add to Home Screen".
            </p>
            <button
                style={{
                    marginLeft: '12px',
                    backgroundColor: 'transparent',
                    border: '1px solid white',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
                onClick={() => setShowPrompt(false)}
                aria-label="Dismiss install instruction"
            >
                Dismiss
            </button>
        </div>
    );
}
