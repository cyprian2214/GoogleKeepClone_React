import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewListIcon from '@mui/icons-material/ViewList';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-area">
        <MenuIcon className="hover navbarIcons" />
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="Google Keep"
          style={{ width: 40, height: 40 }}
        />
        <span className="logo-text">Keep</span>
      </div>

      <div className="search-area">
        <SearchIcon className="hover navbarIcons" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="settings-area">
        <RefreshIcon className="hover navbarIcons" />
        <ViewListIcon className="hover navbarIcons" />
        <SettingsIcon className="hover navbarIcons" />
      </div>

      <div className="profile-actions-area">
        <AppsIcon className="hover navbarIcons" />
        <AccountCircleIcon className="hover navbarIcons" />
      </div>
    </nav>
  )
}
