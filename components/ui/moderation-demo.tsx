"use client";

import {
    IconBrightnessUp,
    IconMoon,
    IconPlayerSkipForward,
    IconSearch,
    IconVolume3,
} from "@tabler/icons-react";

export function ModerationDemo() {
    return (
        <div className="h-full w-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-black dark:text-white flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    AI Content Moderation
                </h3>
                <div className="flex gap-2">
                    <button className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
                        <IconSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>
                    <button className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
                        <IconMoon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-black dark:text-white">
                        Content Analysis
                    </label>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                        Real-time scanning
                    </span>
                </div>
                <div className="relative">
                    <textarea
                        className="w-full p-3 border border-gray-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-800/50 text-black dark:text-white text-sm backdrop-blur-sm focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                        rows={2}
                        placeholder="Enter content to analyze..."
                        defaultValue="This content has been reviewed and is safe for all audiences."
                    />
                    <div className="absolute right-2 bottom-2 flex gap-2">
                        <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors">
                            <IconVolume3 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors">
                            <IconBrightnessUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all text-sm mb-4 flex items-center justify-center gap-2 group">
                Analyze Content
                <IconPlayerSkipForward className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            {/* 
              This area will display the moderation results from the backend API.
              The results will include:
              - Moderation status (approved/rejected)
              - Analysis metrics and confidence scores
              - Specific content flags or warnings
              - Processing time and other metadata
            */}
            <div className="p-4 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900/20 dark:to-neutral-800/20 border border-neutral-200 dark:border-neutral-800/50 rounded-lg shadow-sm backdrop-blur-sm">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Content analysis results will appear here after backend integration
                </p>
            </div>
        </div>
    );
}
