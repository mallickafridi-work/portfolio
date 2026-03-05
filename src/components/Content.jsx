import { useState } from 'react'

function Content() {


    return (
        <>
            <div className="content-area">

                {/* First Section */}

                <section id='first' className='first'>
                    <div className='heading-title'>
                        <h1 className='title'> FRONTEND </h1>
                        <h2 className='title text-yellow-500'>DEVELOPER</h2>
                    </div>
                    <p className='heading-paragraph-1 press-start-2p-regular'>
                        Hi, I'm Afridi. A Passionate Front-End Developer with hands-on experience through
                        building high-performance, scalable, and responsive web solutions.
                    </p>
                    <p className='heading-paragraph-2 source-code-pro-200'>
                        'proficient in the lastest web technologies and frameworks,
                        continously expanding my skill set to stay at the forefront of the industry.'
                    </p>
                </section>

                {/* About Section */}

                <section id='about' className='about'>
                    <div>
                        <p className='press-start-2p-regular'>
                            I believe in a user centered design approach, ensuring that
                            every project I work on is tailored to meet the specific needs of it's users.
                        </p>

                    </div>
                </section>
            </div>

        </>
    )
}

export default Content