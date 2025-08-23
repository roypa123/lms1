import api from "@/config/axios";
import { AuthResponseSchema, type AuthResponse, type User } from "./authtypes";
import { createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

const parseResponse = (data: unknown): AuthResponse =>
  AuthResponseSchema.parse(data);

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};


export const registerUser = createAsyncThunk<AuthResponse, Record<string, any>>(
  "/auth/register",
  async (formData) => {
    const response = await api.post("/auth/register", formData);
    return parseResponse(response.data);
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })         
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;



