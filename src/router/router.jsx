import { createBrowserRouter, } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails";


const router = createBrowserRouter([
  {
    path: "/",
   Component:RootLayouts,
   children:[
    {
        index:true,
        Component:Home
    },
 {
  path: "/projectDetails/:id",
  Component: ProjectDetails,
}
   ]
  },
]);


export default router;