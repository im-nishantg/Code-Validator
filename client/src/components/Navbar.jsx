import React, { useState } from 'react';
import Modal from './Modal'; 
import axios from "axios";

function Navbar(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleClick = async() => {
        console.log(props.srcCode);
        const response = await axios.post("http://localhost:5000/runcode", { code: props.srcCode });
        setModalContent(response.data.tests); 
        toggleModal();
    }

    return (
        <div className="main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-4">
            <div className="left">
                <div className="logo font-bold text-2xl text-white text-center flex">
                    <img className="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JOB7svoRbn5JljqHy5cCLXMrVhWTl_6SAMyNGNzeVw&s" alt="" />
                    <h1 className="ml-4 mt-1"> GeeksForGeeks</h1>
                </div>
            </div>

            <div className="right">
                <div className="logo font-bold text-2xl text-white text-center flex">
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleClick}
                    >
                        Run Tests
                    </button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={toggleModal} content={modalContent} />
        </div>
    );
}

export default Navbar;
