import { NextRequest, NextResponse } from "next/server";

/**
 * 
 * @returns 
 */
export function middleware(request: NextRequest) {
    // Clone the request headers and set a new header `x-hello-from-middleware1`
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-hello-from-middleware1", "hello");
    
    const response = NextResponse.next({
        request: {
            headers: requestHeaders
        }
    });
    
    return response;
}

export const config = {
    matcher: "/message"
}
