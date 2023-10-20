import LocationDateReserve from "@/components/locationDateReserve"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
export default async function Booking() {
    
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)    
    
    return (
        <main className="bg-slate-100 w-[100%] flex flex-col items-center space-y-4">
            <div className="text-2xl">Welcome, {profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2"><tbody>
                <tr><td>Name</td><td>{profile.data.name}</td></tr>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody></table>
            <div className="text-xl font-medium">New Booking</div>
            <div className="w-fit space-y-2">
            <div style={{ display: "flex", flexDirection: "row",
              justifyContent: "space-between", flexWrap:"wrap"}}>
                <div>
                    <div className="text-md text-left text-gray-600">
                        Name</div>
                    <input type = "text" id="name" placeholder="Your Name" className="rounded ring-1
                    ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"/>
                </div>
                <div>
                    <div className="text-md text-left text-gray-600">
                        Surname</div>
                    <input type = "text" id="surname" placeholder="Your Surname" className="rounded ring-1
                    ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"/>
                </div>
            </div>

            <div className="text-md text-left text-gray-600">
                        Citizen ID</div>
            <input type = "text" id="name" placeholder="Your ID" className="rounded ring-1
            ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"/>

            
            <div className="text-md text-left text-gray-600">
                Reservation Date</div>
            <LocationDateReserve/>
            </div>
        <button className = "block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">
            Check Availability</button>    
        </main>
    )
}