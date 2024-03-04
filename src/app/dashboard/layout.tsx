
/**
 * 
 */
export default function DashboardLayout({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <section>
            {/* Shared UI */}
            <nav></nav>
            
            {/* Render children */}
            {children}
        </section>
    );
}
