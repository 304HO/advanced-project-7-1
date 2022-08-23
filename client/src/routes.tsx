import Albums from "./pages/Albums";
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
    route: "/photos",
    component: <Photos />
  }
];

export default routes;
