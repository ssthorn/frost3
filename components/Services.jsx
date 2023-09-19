import React from 'react';

const Services = () => {
    return (
        <div id='services' className='md:p-20'>
            
            <div className='w-full text-center overflow-hidden'>
                <h1 className="px-2 mb-2 mt-0 text-6xl font-extrabold leading-tight">Our Legal Services</h1>
                <h2 className='text-xl md:text-2xl text-left p-4'>
            
            Once we develop a professional relationship with a client, we put that relationship before billable
hours. Frost LLP’s litigation lawyers live and breathe civil procedure, strategy, and delivering
compelling stories to juries at trial so they find for our clients. We’re active across the globe in
the following litigation areas:
            </h2>
            <br />
            <br />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-left'>
                    {/* Card 1 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="" alt="litigation" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Antitrust</h2>
                            <p>Our antitrust specialists are representing 12+ Plaintiffs from the United States, China, Taiwan,
and Canada, seeking damages of over $100 million in parallel antitrust class actions in the
Northern District of California.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-neutral">Learn More</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 1 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="" alt="litigation" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Complex Business Litigation</h2>
                            <p>Our experts have decades of experience advising on matters ranging from corporate
governance, shareholder, and business tort litigation to class action, breach of contract, and
disputes across fiduciary duty, partnership and member, and accounting and financial services.
            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-neutral">Learn More</button>
                            </div>
                        </div>
                    </div>{/* Card 1 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="" alt="litigation" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Real Estate Litigation</h2>
                            <p>Our team routinely delivers for clients on real estate disputes including matters involving
construction defects, mortgage and lending, title and boundary, and real estate investment
litigation.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-neutral">Learn More</button>
                            </div>
                        </div>
                    </div>{/* Card 1 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="" alt="litigation" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Labor & Employment Litigation</h2>
                            <p>Our attorneys are veterans of successful appearances before the California Labor Commission;
Equal Employment Opportunity Commission; and National Labor Relations Board. We have
handled traditional labor negotiations, harassment and discrimination litigation, and defended
wage and hour actions.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-neutral">Learn More</button>
                            </div>
                        </div>
                    </div>{/* Card 1 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="" alt="litigation" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">IP Litigation</h2>
                            <p>Our team, which includes former senior executives from IP-driven sectors including media and
entertainment, has substantial experience resolving intellectual property disputes including
complex copyright and trademark matters.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-neutral">Learn More</button>
                            </div>
                        </div>
                    </div>{/* Card 1 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="" alt="litigation" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Entertainment</h2>
                            <p>Our entertainment law specialists are actively engaged on, and have decades of experience
succeeding with, cases involving public figures including athletes, musicians, social media
creators and other talent in film, television, and new media.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-neutral">Learn More</button>
                            </div>
                        </div>
                    </div>{/* Card 1 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="" alt="litigation" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Bankruptcy Litigation</h2>
                            <p>Our litigation attorneys have extensive experience advocating for creditors in bankruptcy and
related adversary proceedings.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-neutral">Learn More</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 1 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="" alt="litigation" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Appellate Matters</h2>
                            <p>Our firm is currently representing numerous clients before the California Court of Appeal, and
our team has significant experience appearing before the Ninth Circuit United States Court of
Appeals.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-neutral">Learn More</button>
                            </div>
                        </div>
                    </div>

                    

                    {/* Repeat the above three cards for the remaining six cards */}
                </div>
            </div>
        </div>
    );
}

export default Services;
