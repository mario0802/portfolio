import { RootLayout } from "@/components/layouts";
import { Mario } from "@/features";
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
        ]
    },
])

export default router;