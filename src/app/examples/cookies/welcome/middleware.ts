import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

/**
 * Middleware
 */
export function middleware(request: NextRequest) {
    const newRequestHeaders = withRewrittenCookieHeader(request.headers);
    const response = NextResponse.next({
        request: {
            headers: newRequestHeaders,
        }
    });
    
    response.cookies.set("viewedWelcomeMessage", "true");
    return response;
}

/**
 * Rewrite cookie header
 * 
 * @param requestHeaders 
 */
const withRewrittenCookieHeader = (requestHeaders: Headers): Headers => {
    // Get cookies from request headers
    const cookies = requestHeaders.get("cookie");
    
    // Parse them into a key-value object and update our specific cookie
    const parsedCookies = cookie.parse(cookies || "");
    parsedCookies["viewedWelcomeMessage"] = "true";
    
    // Serialize the cookies back into a string and update the request headers
    const serializedCookies = [];
    for(const [key, value] of Object.entries(parsedCookies)) {
        serializedCookies.push(cookie.serialize(key, value))
    }
    
    // Create headers object and set every cookie
    const newRequestHeaders = new Headers(requestHeaders);
    newRequestHeaders.set("cookie", serializedCookies.join("; "));
    return newRequestHeaders;
}
