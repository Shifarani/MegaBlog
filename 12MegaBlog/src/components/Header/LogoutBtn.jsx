import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button
            onClick={logoutHandler}
            className='px-5 py-2 rounded-full bg-pink-500 text-white font-medium
                       shadow-sm hover:bg-pink-600 hover:shadow-md
                       transition-all duration-200 active:scale-95'
        >
            Logout
        </button>
    )
}

export default LogoutBtn