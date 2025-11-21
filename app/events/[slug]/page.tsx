import { Suspense } from "react"

const EventDetailPage = async ({params}:{params : {slug:string}}) => {
  const slug = params.slug;
 return(
  <main>
    <Suspense fallback={<div>Loading...</div>}>
      <EventDetailPage params={{ slug }} />
    </Suspense>
  </main>
 )
}

export default EventDetailPage