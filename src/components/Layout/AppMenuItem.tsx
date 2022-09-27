import React from 'react'
import { NavLink } from 'react-router-dom'
//import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { MainMenuItem } from '../../assets/menu'
import { IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { useStyles } from './AppMenu.css'

interface MenuItemProps {
  item: MainMenuItem
}
export default function AppMenuItem({ item }: MenuItemProps) {
  const classes = useStyles({})

  return (
    <>
      <div className={classes.menuItem}>
        <NavLink to={item.url}>
          <Typography variant="subtitle3" color="#fff">
            {item.content}
          </Typography>
        </NavLink>
        {/* {item?.submenu && (
          <ExpandMoreIcon
            sx={{
              color: '#fff',
            }}
          />
        )} */}
      </div>
    </>
  )
}
