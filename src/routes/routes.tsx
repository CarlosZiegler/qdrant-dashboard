import Home from "../pages/Home";
import Console from "../pages/Console";
import Collections from "../pages/Collections";
import Collection from "../pages/Collection";
import { appRoutes } from "./app";

export const browserRoutes = () => [
  {
    path: appRoutes.main,
    element: <Home />,
    children: [
      { path: appRoutes.console, element: <Console /> },
      { path: appRoutes.collections, element: <Collections /> },
      { path: appRoutes.collectionName, element: <Collection /> },
    ],
  },
];
