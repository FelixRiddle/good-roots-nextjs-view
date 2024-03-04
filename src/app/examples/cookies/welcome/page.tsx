import { GetServerSideProps } from "next";

export type WelcomeMessageProps = {
    message: string,
}

/**
 * Welcome message
 * 
 * @param param0 
 * @returns 
 */
export default function WelcomeMessage({ message }: WelcomeMessageProps) {
    return (
        <h2>
            {message}
        </h2>
    );
}

/**
 * 
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
    // If we've seen this person before, display a "Welcome back!" message
    const viewedWelcomeMessage = context.req.cookies.viewedWelcomeMessage;
    if(viewedWelcomeMessage === "true") {
        return { props: { message: "Welcome back!" } };
    }
    
    // Otherwise, display a "Welcome!" message, but set a cookie so we don't show it again
    context.res.setHeader('Set-Cookie', 'viewedWelcomeMessage=true');
    return { props: { message: "Welcome!" } };
}
