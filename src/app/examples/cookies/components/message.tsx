import { cookies } from "next/headers";

/**
 * Show message
 */
export default function Message() {
    const viewedWelcomeMessage = cookies().get("viewedWelcomeMessage");
    if(viewedWelcomeMessage?.value === "true") {
        return <div>Welcome back!</div>
    }
}
