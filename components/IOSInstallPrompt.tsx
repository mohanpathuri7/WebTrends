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
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white-900  backdrop-blur-sm border border-gray-300 rounded-lg shadow-lg p-4 max-w-md w-full z-50 text-center space-y-2">
            <p style={{ margin: 0 }} className="text-gray-800">
                Install this app on your iOS device: tap the share icon and then 'Add to Home Screen'.
            </p>
            <button
                className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-2 px-4 rounded"
                onClick={() => setShowPrompt(false)}
                aria-label="Dismiss install instruction"
            >
                Dismiss
            </button>
        </div>
    );
}
