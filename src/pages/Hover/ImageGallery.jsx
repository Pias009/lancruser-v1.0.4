import React from 'react';
import '../Hover/ig.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageColumns = () => {

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 700,
            delay: 100,
        });
    }, []);

    const images = [
        { id: 'image1', path: 'public/images/img_rectangle12.png' },
        { id: 'image2', path: 'public/images/img_rectangle14.png' },
        { id: 'image3', path: 'public/images/img_rectangle13.png' },
        { id: 'image4', path: 'public/images/d.png' },
        { id: 'image5', path: 'public/images/i.jpg' },
        { id: 'image6', path: 'public/images/3.webp' },
    ];

    const Text = [
        'V6 3.3l ',
        'Displacement (cc)',
        '700Nm@1600-2600rpm',
        'Premium Dashboard',
        'Power Steering',
        'Cup Holder',
    ];

    const Textt = [
        'Turbo Diesel Engine',
        '6',
        'Twin',
        'With Leather',
        'Glossy Finish',
        'With Freezer Hitter',
    ];

    const handleHover = (colNumber) => {
        const container = document.getElementById(`container-${colNumber}`);
        container.classList.toggle('hidden', false);

        for (let i = 1; i <= 5; i++) {
            if (i !== colNumber) {
                document.getElementById(`container-${i}`).classList.toggle('hidden', true);
            }
        }
    };

    const handleLeave = () => {
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`container-${i}`).classList.toggle('hidden', true);
        }
    };

    return (
        <div className="flex-row">
            {[1, 2, 3, 4, 5, 6].map((colNumber) => (
                <div
                    key={colNumber}
                    className={`pl-10 column column-${colNumber} flex text-center border-1 border-solid h-[60px] w-[100%] bg-slate-600`}
                    onMouseEnter={() => handleHover(colNumber)}
                    onMouseLeave={handleLeave}
                >
                    <img
                        data-aos="fade-right"
                        className="w-20 h-20"
                        src={images[colNumber - 1].path}
                        alt={`Image ${colNumber}`}
                    />
                    <div data-aos="fade-up" className="absolute ml-[200px]">
                        <p className="mx-auto font-serif text-white-A700 mt-4">{Text[colNumber - 1]}</p>
                    </div>
                    <div data-aos="fade-right" className="absolute ml-[800px] text">
                        <p className="mx-auto font-serif text-white-A700 mt-4 text-right">{Textt[colNumber - 1]}</p>
                    </div>
                </div>
            ))}

            {[1, 2, 3, 4, 5].map((colNumber) => (
                <div
                    key={colNumber}
                    id={`container-${colNumber}`}
                    className={`hidden fixed inset-0 flex items-center justify-center`}
                >
                    <div className="w-1/2 bg-white p-4 rounded-lg bg-transparent">
                        <img
                            data-aos="fade-right"
                            className="w-[400px] h-[400px]"
                            src={images[colNumber - 1].path}
                            alt={`Image ${colNumber}`}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageColumns;
