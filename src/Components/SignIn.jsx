import React from "react";
const SignIn = () => {
    return (
        <>
            <div className="space-y-2">
                <div className="ml-[530px]">
                    <div>
                        <iframe
                            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="video"
                            width="282px"
                            height="180px"
                        />
                    </div>
                    <div className="text-white">
                        <h1>Bronze Package</h1>
                        <div className="w-80 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                            <div
                                className="bg-blue-600 h-1.5 rounded-full"
                                style={{ width: "45%" }}
                            ></div>
                        </div>
                        <p>45% Completed</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
