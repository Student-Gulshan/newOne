import React from 'react'

function About() {
    return (
        <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div>
                <h1 className="text-3xl font-bold mb-5">About</h1>
                <p>
                    <div class="intro">
                        <h2>Hello, I'm <span class="name">Gulshan</span>!</h2>
                        <p>
                            As a frontend developer with an eye for design, I’m all about crafting responsive, user-friendly interfaces that look and feel amazing.
                            Combining creativity with technical skill, I strive to make every project visually striking and impactful.
                        </p>
                    </div>

                </p>
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Education
                </h1>
                <span>
                    I completed my 12th from B.K. Sen. Sec. School and currently pursuing  Bachelor of Computer Applications from Amritsar Group of Colleges.

                </span>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Skills & Expertise
                </h1>
                <span>
                    Proficient in and JavaScript, experienced with ReactJS, Tailwind CSS & Bootstrap.
                </span>
                <br />
                <br />

                <h1 className="text-green-600 font-semibold text-xl">
                    Achievements
                </h1>
                <span>
                    My achievements include creating impactful and responsive web interfaces that enhance user engagement.
                    I’ve consistently exceeded project goals and embraced new technologies to deliver high-quality solutions that make a difference.
                </span>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Mission
                </h1>
                <p>
                    My mission is to create clear, engaging, and visually appealing web experiences that connect with users and meet client goals.
                    I’m committed to learning, improving, and pushing the boundaries of frontend development to deliver quality work that stands out.
                </p>
            </div>
        </div>
    )
}

export default About