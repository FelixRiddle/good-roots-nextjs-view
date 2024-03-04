import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware
 */
export function middleware(request: NextRequest) {
    // Don't allow the user to set the headers themselves
    // this can only be set by our middleware.
    if(request.headers.has("x-viewed-welcome-message")) {
        throw new Error("Cannot set x-viewed-welcome-message header");
    }
    
    // Set header
    const newRequestHeaders = new Headers(request.headers);
    newRequestHeaders.set("x-viewed-welcome-message", "true");
    
    // Set headers in the request for the next stop
    const response = NextResponse.next({
        request: {
            headers: newRequestHeaders
        }
    });
    
    // Don't forget to set the cookie on the response as well
    response.cookies.set("viewedWelcomeMessage", "true");
    return response;
}
