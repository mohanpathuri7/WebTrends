'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WifiOff, RefreshCw, Home } from 'lucide-react';

export default function OfflinePage() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        setIsOnline(navigator.onLine);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const handleRetry = () => {
        if (isOnline) {
            window.location.href = '/';
        } else {
            window.location.reload();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md mx-auto text-center">
                <CardHeader className="pb-6">
                    <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-fit">
                        <WifiOff className="w-8 h-8 text-gray-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                        You're Offline
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                        {isOnline
                            ? "Connection restored! You can now go back online."
                            : "No internet connection found. Check your connection and try again."
                        }
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-6">
                        <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
                        <span>{isOnline ? 'Online' : 'Offline'}</span>
                    </div>

                    <div className="space-y-3">
                        <Button
                            onClick={handleRetry}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            disabled={!isOnline}
                        >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            {isOnline ? 'Go Online' : 'Retry'}
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => window.history.back()}
                            className="w-full"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            Go Back
                        </Button>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                            <strong>PWA Features:</strong> This app works offline with cached content
                            and will sync when you're back online.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}