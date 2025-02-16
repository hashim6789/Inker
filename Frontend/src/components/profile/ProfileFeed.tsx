import { FC, useState } from 'react'

const TAB_OPTIONS = ["Posts", "Replies", "Upvoted"] as const;
const ProfileFeed: FC = () => {
    const [activeTab, setActiveTab] = useState<"Posts" | "Replies" | "Upvoted">("Posts");

    return (
        <div className="mt-4 lg:m-0 lg:border flex-1 ">
            <div className="flex gap-4 justify-around border-b text-gray-600">
                {TAB_OPTIONS.map((tab) => (
                    <div className="relative">
                    <button
                        key={tab}
                        className={`px-5 py-2 rounded-lg hover:bg-gray-100 text-md ${
                            activeTab === tab ? "font-semibold text-black" : "font-medium"
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                    {activeTab === tab && (
                        <div className="absolute bottom-0 left-1/2 w-12 -translate-x-1/2 border-b-2 border-black"></div>
                    )}
                </div>
                
                ))}
            </div>
        </div>
    );
};

export default ProfileFeed;
