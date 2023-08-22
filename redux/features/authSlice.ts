import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type AuthState = {
    uid: string
}

type InitialState = {
    value: AuthState
}

const initialState: InitialState = {
    value: {
        uid: ""
    }
}

export const auth = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        removeUserId: () => {
            return initialState
        },

        addUserId: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    uid: action.payload
                }
            }
        },

    }

})

export const { removeUserId, addUserId } = auth.actions
export default auth.reducer