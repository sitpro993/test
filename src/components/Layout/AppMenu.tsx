import React, { useState } from 'react'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
  Collapse,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { mainMenu } from '../../assets/menu'
import AppMenuItem from './AppMenuItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { changeTheme } from '../../redux/slices/themeSlice'
import { useStyles } from './AppMenu.css'
import { NavLink } from 'react-router-dom'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { shadesColor } from '../../assets/color'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: shadesColor[100],
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}))

export default function AppMenu() {
  const { themeMode } = useSelector((state: RootState) => state.theme)
  const classes = useStyles({})
  const dispatch = useDispatch()

  const [openMobiMenu, setOpenMobiMenu] = useState<boolean>(false)
  const [mobiThemeMode, setMobiThemeMode] = useState<boolean>(
    themeMode === 'light' ? false : true,
  )
  const [openCollapse, setOpenCollapse] = useState<boolean>(false)

  const handleChangeThemeMode = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(changeTheme())
    setMobiThemeMode(!mobiThemeMode)
  }

  const list = (
    <Box role="presentation" width={250}>
      <Box>
        <IconButton onClick={() => setOpenMobiMenu(false)}>
          <CloseIcon />
        </IconButton>

        <MaterialUISwitch
          sx={{ m: 1 }}
          checked={mobiThemeMode}
          onChange={handleChangeThemeMode}
        />
      </Box>
      <Divider />
      <List>
        {mainMenu.map((item) => (
          <div key={item.content}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText>
                  <NavLink to={item.url}>
                    <Typography color="text.primary" variant="subtitle3">
                      {item.content}
                    </Typography>
                  </NavLink>
                </ListItemText>

                {item.submenu && (
                  <>
                    {openCollapse ? (
                      <ExpandLess
                        onClick={() => setOpenCollapse(!openCollapse)}
                      />
                    ) : (
                      <ExpandMore
                        onClick={() => setOpenCollapse(!openCollapse)}
                      />
                    )}
                  </>
                )}
              </ListItemButton>
            </ListItem>
            {item.submenu && (
              <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((submenuItem) => (
                    <ListItemButton key={submenuItem.content} sx={{ pl: 4 }}>
                      <Typography variant="subtitle3">
                        {submenuItem.content}
                      </Typography>
                      <ListItemText></ListItemText>
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
      <Divider />
    </Box>
  )

  return (
    <>
      <IconButton
        sx={{ display: { sm: 'block', md: 'none' } }}
        onClick={() => {
          setOpenMobiMenu(true)
          setOpenCollapse(false)
        }}
      >
        <MenuIcon sx={{ color: '#fff' }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={openMobiMenu}
        onClose={() => setOpenMobiMenu(false)}
      >
        {list}
      </Drawer>

      <Box className={classes.appMenu}>
        {mainMenu.map((item, index) => (
          <AppMenuItem key={item.content} item={item} />
        ))}
        <IconButton
          onClick={() => {
            dispatch(changeTheme())
          }}
        >
          {themeMode === 'light' ? (
            <LightModeIcon
              sx={{
                color: '#fff',
              }}
            />
          ) : (
            <DarkModeIcon
              sx={{
                color: '#fff',
              }}
            />
          )}
        </IconButton>
      </Box>
    </>
  )
}
