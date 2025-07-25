"use client";

import {
    IconBrightnessUp,
    IconPlayerSkipForward,
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
                        className="w-full p-3 border border-gray-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-800/50 text-black dark:text-white text-sm backdrop-blur-sm focus:border-blue-500 dark:focus:border-blue-400 transition-colors placeholder:text-gray-400/60 dark:placeholder:text-gray-500/60"
                        rows={2}
                        placeholder="Enter your content for AI moderation..."
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
            {
            
            /* Results will be populated from backend */
            
            
            }
            <div className="p-4 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/30 dark:via-purple-900/20 dark:to-pink-950/30 border border-blue-100/50 dark:border-blue-800/30 rounded-lg shadow-sm backdrop-blur-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-pink-400/5 animate-gradient-x"></div>
                <div className="relative flex items-center gap-3">
                    <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center p-2">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 animate-pulse"></div>
                        </div>
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="h-2 w-24 bg-gradient-to-r from-blue-200/60 to-purple-200/60 dark:from-blue-700/40 dark:to-purple-700/40 rounded animate-pulse"></div>
                        <p className="text-sm text-blue-700/90 dark:text-blue-300/90 font-medium">
                            Awaiting content analysis...
                        </p>
                        <p className="text-xs text-blue-600/70 dark:text-blue-400/70">
                            Results will be displayed here after backend integration
                        </p>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-100/30 dark:border-blue-800/30">
                    <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-100/30 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/20 animate-pulse"></div>
                        <div className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-purple-100/30 to-pink-100/30 dark:from-purple-900/20 dark:to-pink-900/20 animate-pulse"></div>
                        <div className="px-5 py-1.5 rounded-lg bg-gradient-to-r from-pink-100/30 to-blue-100/30 dark:from-pink-900/20 dark:to-blue-900/20 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
