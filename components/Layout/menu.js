import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';


export const menu = [
  {
    id: 1,
    icon: <GridViewIcon />,
    title: "Dashboard",
    path: '/',
  },
  {
    id: 2,
    icon: <KeyboardCommandKeyIcon />,
    title: "Teams",
    path: '/teams',
  },
  {
    id: 3,
    icon: <PeopleAltIcon />,
    title: "Employees",
    path: '/employees',
  },
  {
    id: 4,
    icon: <WorkOutlineIcon />,
    title: "Projects",
    path: '/projects',
  },
]

export const menudown = [
  {
    id: 1,
    icon: <PhoneIcon />,
    title: "Meetings",
    path: '/meetings',
  },
  {
    id: 2,
    icon: <FolderIcon />,
    title: "Teams",
    path: '/teams',
  },
  {
    id: 3,
    icon: <SettingsIcon />,
    title: "Settings",
    path: '/settings',
  },
]
