// Material Dashboard 2 React layouts
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";

const routes = [
  {
    name: "albums",
    key: "Albums",
    route: "/",
    component: <Albums />
  },
  {
    name: "photos",
    key: "Photos",
    route: "/photos/:id",
    component: <Photos />
  }
];

export default routes;
