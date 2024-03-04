import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

/**
 * Testing endpoint for setting a cookie
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{message: string}> ) {
    const viewedWelcomeMessage = req.cookies.viewedWelcomeMessage;
    if(viewedWelcomeMessage === "true") {
        return res.status(200).json({ message: "Welcome back!" });
    }
    
    res.setHeader('Set-Cookie', cookie.serialize('viewedWelcomeMessage', 'true'));
    
    return res.status(200).json({ message: "Welcome!" });
}
