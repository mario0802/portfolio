import { NotFound } from "@/components";
import { RootLayout } from "@/components/layouts";
import { Mario, ProjectDetail } from "@/features";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Mario
            },
            {
                path: "projects/:projectId",
                Component: ProjectDetail,
            },
            {
                path: "*",
                Component: NotFound,
            },
        ],

    },
])

export default router;