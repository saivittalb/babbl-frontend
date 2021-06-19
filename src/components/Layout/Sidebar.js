import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";

import './Sidebar.css'

import Navigation from '../Navigation/Navigation'
import ProfileBox from '../ProfileBox/ProfileBox'
import Menu from '../Menu/Menu'
import SearchBox from '../SearchBox/SearchBox'
import FollowSuggestion from '../FollowSuggestion'

import { UserContext } from "../../context/UserContext";

function Sidebar({ flat }) {

    const { setUser, user } = useContext(UserContext);
    const history = useHistory()

    const [searchText, setSearchText] = useState("");


    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    const handleAddSearch = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            history.push(`/${searchText}`)
            setSearchText('')
        }
    }

    return (
        <div className="sidebar">
            <SearchBox onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                onKeyPress={handleAddSearch}
    className="layout-explore--search" />

            <Navigation flat={flat} />

            <div className="sidebar__profile">
                <Menu
                    title={<ProfileBox flat={flat} user={user} />}
                >
                    <FollowSuggestion icon={false} user={user} />
                    <span onClick={handleLogout}>Log out</span>
                </Menu>
            </div>
        </div>
    )
}

export default Sidebar
