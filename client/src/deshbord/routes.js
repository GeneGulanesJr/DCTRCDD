
import UserProfile from "./views/UserProfile.jsx";
import AddResident from './views/addResident/CreateResident'
import EditResident from './views/EditResident/EditResident'
import JWTDecoder from 'jwt-decode'
import UserList from './views/UserList'
import Report from "./views/Report.js";
let admin 
if(localStorage.getItem('resident-token')){
   admin=JWTDecoder(localStorage.getItem('resident-token')).admin
}
var routes = [
  {
    path: "/add-resident",
    name: "Create Residents",
    icon: "tim-icons icon-calendar-60",
    component: AddResident,
    layout: "/admin"
  },
  {
    path: "/all-resident",
    name: "All Resident ",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-pencil",
    component: EditResident,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "Profile ",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/report",
    name: "Report ",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-caps-small",
    component: Report,
    layout: "/admin"
  }
];
if(admin){
  routes.push(
    
  {
    path: "/all-User",
    name: "All User ",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-refresh-02",
    component: UserList,
    layout: "/admin"
  }
  )
}
export default routes;
