import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    count: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
}

const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
        const existing = state.items.find(item => item.id === action.payload.id);
        if (existing) {
            existing.count += action.payload.count;
        } else {
            state.items.push(action.payload)
        }
        // console.log("Current cart state: ", state.items);
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateCount(state, action: PayloadAction<{id: number; count: number}>) {
            const item = state.items.find(item => item.id !== action.payload.id);
            if (item) {
                item.count = action.payload.count;
            }
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, updateCount, clearCart } = cartslice.actions;
export default cartslice.reducer;