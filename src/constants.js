import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

export const drawerWidth = 240;
export const menuItems = [
  { id: 1, name: "Dashboard", path: "/", icon: <DashboardOutlinedIcon /> },
  { id: 2, name: "Jobs", path: "/jobs", icon: <BusinessCenterOutlinedIcon /> },
  {
    id: 3,
    name: "Applications",
    path: "/applications",
    icon: <LibraryBooksOutlinedIcon />,
  },
  {
    id: 4,
    name: "Followers",
    path: "/followers",
    icon: <PeopleOutlinedIcon />,
  },
  {
    id: 5,
    name: "My Inventory",
    path: "/my-inventory",
    icon: <Inventory2OutlinedIcon />,
  },
  {
    id: 6,
    name: "Company Profile",
    path: "/company-profile",
    icon: <ApartmentOutlinedIcon />,
  },
  {
    id: 7,
    name: "All Users",
    path: "/all-users",
    icon: <SupervisedUserCircleOutlinedIcon />,
  },
  {
    id: 8,
    name: "My Account",
    path: "/my-account",
    icon: <ContactMailOutlinedIcon />,
  },
];

export const subMenuItems = [
  { id: 1, name: "My Inventory", path: "/my-inventory" },
  { id: 2, name: "Company Profile", path: "/company-profile" },
  { id: 3, name: "All Users", path: "/all-users" },
  { id: 4, name: "My Account", path: "/my-account" },
];
