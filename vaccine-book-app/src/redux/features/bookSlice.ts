import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { BookingItem } from "../../../interfaces"
type BookState = {
    booking: BookingItem[]
}

const initialState:BookState = { booking: []}

export const bookSlice  = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addBooking: (state,action:PayloadAction<BookingItem> )=>{
            if (state.booking.length == 0){
                state.booking.push(action.payload)
            }
            else{
                state.booking[0] = action.payload
            }
            
        },
        removeBooking: (state,action:PayloadAction<BookingItem> )=>{
            state.booking.pop()  
        }
    }
})

export const { addBooking,removeBooking } = bookSlice.actions
export default bookSlice.reducer