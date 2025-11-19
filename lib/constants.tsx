// events.ts
export type EventItem = {
  image: string,
  title : string,
  slug : string,
  location : string,
  date : string,
  time : string
}

export const events: EventItem[] = [
  {
    title: "React Summit 2025",
    image: "/images/event1.png",
    slug: "react-summit-2025",
    location: "Amsterdam, Netherlands",
    date: "2025-06-12",
    time: "09:00 AM"
  },
  {
    title: "Google I/O Extended",
    image: "/images/event2.png",
    slug: "google-io-extended-2025",
    location: "Mountain View, California, USA",
    date: "2025-05-14",
    time: "10:00 AM"
  },
  {
    title: "Next.js Conf",
    image: "/images/event3.png",
    slug: "nextjs-conf-2025",
    location: "San Francisco, California, USA",
    date: "2025-10-21",
    time: "08:30 AM"
  },
  {
    title: "ETHGlobal Hackathon",
    image: "/images/event4.png",
    slug: "ethglobal-hackathon-2025",
    location: "Paris, France",
    date: "2025-07-04",
    time: "09:30 AM"
  },
  {
    title: "DevOps Days Berlin",
    image: "/images/event5.png",
    slug: "devops-days-berlin-2025",
    location: "Berlin, Germany",
    date: "2025-09-02",
    time: "09:00 AM"
  },
  {
    title: "JSNation Conference",
    image: "/images/event6.png",
    slug: "jsnation-2025",
    location: "Amsterdam, Netherlands",
    date: "2025-06-11",
    time: "10:00 AM"
  }
];
