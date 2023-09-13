import LocationDateReserve from "@/components/locationDateReserve"
export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
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