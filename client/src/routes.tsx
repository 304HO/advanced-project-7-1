import Albums from "./pages/Albums";
import Error404 from "./pages/Error404";
import Photos from "./pages/Photos";
import TestErrorPage from "./pages/TestErrorPage";

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
  },
  {
    name: "Error404",
    key: "Error404",
    route: "/404",
    component: <Error404 />
  },
  {
    name: "TestErrorPage",
    key: "TestErrorPage",
    route: "/TestErrorPage",
    component: <TestErrorPage />
  }
];

export default routes;
