import Albums from "./pages/Albums";
import Error404 from "./pages/Error404";
import Photos from "./pages/Photos";

export type RouteType = {
  name: string;
  key: string;
  route: string;
  component: React.ReactNode;
};

const routes: Array<RouteType> = [
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
  },
  {
    name: "Error404",
    key: "Error404",
    route: "/404",
    component: <Error404 />
  }
];

export default routes;
