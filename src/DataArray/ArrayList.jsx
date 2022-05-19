import {
  Home,
  Article,
  Group,
  Storefront,
  Person,
  Settings,
  AccountBox,
} from "@mui/icons-material";

// List Items Array For Sidebar
export const listSidebar = [
  {
    href: "#home",
    icon: <Home />,
    primary: "Homepage",
  },
  {
    href: "#pages",
    icon: <Article />,
    primary: "Pages",
  },
  {
    href: "#groups",
    icon: <Group />,
    primary: "Groups",
  },
  {
    href: "#marketplace",
    icon: <Storefront />,
    primary: "Marketplace",
  },
  {
    href: "#friends",
    icon: <Person />,
    primary: "Friends",
  },
  {
    href: "#settings",
    icon: <Settings />,
    primary: "Settings",
  },
  {
    href: "#profile",
    icon: <AccountBox />,
    primary: "Profile",
  },
];


export const listPost = [{
  avatar:'A',
  color:'lightblue',
  title:'Shrimp and Chorizo Paella',
  subheader:'Jan 20, 2016',
  image:'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?cs=srgb&dl=pexels-pixabay-33044.jpg&fm=jpg',
  text:'Flower'
},{
  title:'Chorizo',
  avatar:'F',
  color:'lightcoral',
  subheader:'March 04, 2016',
  image:'https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?cs=srgb&dl=pexels-ar%C4%B1n-turkay-450038.jpg&fm=jpg',
  text:'Beach'
},
{
  title:'Paella',

avatar:'S',
color:'blue'  ,subheader:'June 24, 2016',
  image:'https://images.pexels.com/photos/421759/pexels-photo-421759.jpeg?cs=srgb&dl=pexels-jonathan-petersson-421759.jpg&fm=jpg',
  text:'Fun Board'
},
{
  title:'Shrimp ',
  avatar:'P',
  color:'lightpink',
  subheader:'Sep 17, 2016',
  image:'https://images.pexels.com/photos/1862695/pexels-photo-1862695.jpeg?cs=srgb&dl=pexels-alexander-igrevsky-1862695.jpg&fm=jpg',
  text:'Coco Tree'
},
{
  title:'Chorizo Paella',
  avatar:'G',
  color:'lightgrey',
  subheader:'Aug 02, 2017',
  image:'https://images.pexels.com/photos/1209611/pexels-photo-1209611.jpeg?cs=srgb&dl=pexels-ylanite-koppens-1209611.jpg&fm=jpg',
  text:'Summer'
},
{
  title:'LA',
  subheader:'Oct 27, 2017',
  avatar:'Y',
  color:'yellow',
  image:'https://images.pexels.com/photos/158756/flowers-plants-korea-nature-158756.jpeg?cs=srgb&dl=pexels-pixabay-158756.jpg&fm=jpg',
  text:'Flower'
}
]


export const listRightBarPosts=[{
  src:'https://material-ui.com/static/images/image-list/breakfast.jpg',
  alt:'broken-img'
},{
  src:'https://material-ui.com/static/images/image-list/burgers.jpg',
  alt:'broken-img'
},{
  src:'https://material-ui.com/static/images/image-list/camera.jpg',
  alt:'broken-img'
}]