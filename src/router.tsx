import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./app/about/page";
import ErrorPage from "./app/error";
import EventDetailPage from "./app/events/[id]/page";
import EventsPage from "./app/events/page";
import GalleryPage from "./app/gallery/page";
import AppLayout from "./app/layout";
import HomePage from "./app/page";
import PostDetailPage from "./app/posts/[id]/page";
import PostsPage from "./app/posts/page";

export const APP_ROUTER = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/events/:id",
        element: <EventDetailPage />,
      },
      {
        path: "/posts",
        element: <PostsPage />,
      },
      {
        path: "/posts/:id",
        element: <PostDetailPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
    ],
  },
]);
