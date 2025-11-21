'use server';

import connectDB from "../mongoDB";
import Event, { IEvent }  from "@/database/event.model";

export const getSimilarEventBySlug = async (slug:string) =>{
    try {
        await connectDB();
        const event = await Event.findOne({slug});
        if (!event) return [] as IEvent[]
        return await Event.find({
            _id: { $ne: event._id},
            tags:{ $in: event.tags},
        }).lean<IEvent[]>();
    } catch (e){
        console.error('error fetching similar events:', e);
        return [] as IEvent[];
    }
}