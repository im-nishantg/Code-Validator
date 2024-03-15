import React from 'react';

function ResultCard({ description, passed }) {
    return (
        <div className="flex items-center justify-between mb-4">
            <p className="flex-grow">{description}</p>
            <p className={`ml-4 ${passed ? 'text-green-500' : 'text-red-500'}`}>{passed ? 'Passed' : 'Failed'}</p>
        </div>
    );
}

function Modal({ isOpen, onClose, content }) {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-3xl w-full h-100 overflow-y-auto">
                <h1 className="text-xl font-bold mb-10 text-center">Test Results</h1>
                {content.map((item, index) => (
                    <ResultCard key={index} description={item.description} passed={item.passed} />
                ))}
                <button
                    className="absolute top-4 right-4 bg-red-500  text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={onClose}
                >
                    X
                </button>
            </div>
        </div>
    );
}

export default Modal;
