import React from 'react'
import ExploreBtn from "@/components/ExploreBtn";

const Home = () => {
    return (
        <section>
            <h1 className="text-center">The hub for every dev <br/> You can&#39;t miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups and Conferences, All in One place</p>
            <ExploreBtn/>

            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {
                        [1, 2, 3, 4, 5, 6].map(event => (
                            <li key={event}>Event {event}</li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
export default Home
