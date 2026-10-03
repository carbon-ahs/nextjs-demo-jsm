import React from 'react'
import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";

const events = [
    {
        image: '/images/event1.png',
        title: 'Event 1',
        slug: 'event1',
        location: 'Location 1',
        date: "date-1",
        time: "time-1"
    },
    {
        image: '/images/event2.png',
        title: 'Event 2',
        slug: 'event2',
        location: 'Location 2',
        date: "date-2",
        time: "time-2"
    },
]

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
                        events.map(event => (
                            <li key={event.title}>
                                <EventCard {...event} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
export default Home
