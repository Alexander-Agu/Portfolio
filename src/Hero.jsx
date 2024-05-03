import React from 'react'

function Hero(){
    return(
        <>
            <section className='hero'>
                <div className="intro">
                    <div className="discription">
                        <p className='discription'>
                            Hi I'm <span className='name'>Alexander I. Agu</span> <br />
                            im a <span className='profession'>Frontend Developer</span> who is willing to work for a company with good taste. <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reiciendis accusantium, sequi provident, dolore quas nostrum modi architecto culpa, pariatur distinctio maxime! At nam hic maxime aperiam unde consequatur tempora?
                        </p>

                        {/* Add my RESUME(CV) and GitHub */}
                        <div className="resume-git">
                            <img src="" alt="Resume" />
                            <img src="" alt="GitHub" />
                        </div>
                    </div>

                    {/* Add a mystry box */}
                    <div className="box">
                        <h1>Mystry Box</h1>
                    </div>
                </div>

                <div className="deadpool">
                    <img src="" alt="image of dead pool" />
                    {/* Add the mouse tracking eyes */}
                </div>
            </section>
        </>
    )
}

export default Hero