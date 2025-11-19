import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { events } from "@/lib/constants"

//  RJ4d6SX5g4bM774b
// mahdiseda15_db_user

const Page = () => {
  return (
    <section>
      <h1 className="text-center">The hub for Every Dev <br /> Event you can't miss</h1>
      <p className="text-center mt-7">Hackathons, Meetups, and Conferences, All in one place</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event)=>(
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page