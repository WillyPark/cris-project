import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Header } from "../ui";
import { Contact, MonitoringModel, Profesionals, Services } from "../components";

export const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <App />,
            children: [
                {
                    path: "/",
                    element: <Header />
                },
                {
                    path: "/monitoring-model",
                    element: <MonitoringModel />
                },
                {
                    path: "/services",
                    element: <Services />
                },
                {
                    path: "/profesionals",
                    element: <Profesionals />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

