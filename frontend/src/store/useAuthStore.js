import {create} from 'zustand';

export const useAuthStore = create((set) => ({
    authUser: {name:"john doe",_id:"12345", age:25},
    isLoggedIn: false,
    isloading:false,

    login:() => {
        console.log("we just logged in");
        set({ isLoggedIn:true, isloading:true });
    }
}));