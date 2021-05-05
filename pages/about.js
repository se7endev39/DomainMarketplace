import React from 'react';
import Link from 'next/link';

function About() {
    return (
        <div className="flex bg-white flex-grow items-center 2xl:p-0 pb-20 lg:flex-row lg:flex-row-reverse flex-col">

            <div className="lg:w-1/3 color-primary sc-font-30 font-bold sc-lineheight-123 text-center lg:text-left mt-8 lg:mt-0">
                <div className="about-guide m-auto lg:m-0">
                    Sourcer is a site to help manage sources of information. We make it easy to find,
                    collect, organize, and share citations for a variety of topics.
                </div>
            </div>
            <div className="lg:w-2/3 text-color-primary sc-font-lg sc-lineheight-145 font-primary mt-20 lg:mt-0">
                <div className="about-content m-auto">
                    <div className="color-primary sc-font-50 font-bold mb-8 sc-lineheight-123 font-default">About</div>
                    I started Sourcer because I saw a need for it. When discussing issues like politics or
                    pseudoscience with friends or family, I kept having to pause and look up articles to
                    support my arguments. I found myself combing through search results on the same
                    topics over and over again. I needed an easy way to keep track of these citations
                    so I could have them available whenever the need arose, so I created Sourcer.
                    Now, whenever vaccine safety or election fraud come up, I can just find
                    citations in Sourcer and share the results.
                    <br />
                    <br />
                    For more information on how to use Sourcer, check out our <Link href="/how-it-works"><a className="font-bold">How It Works</a></Link> Page.
                </div>
            </div>

        </div>
    );
}

export default About;