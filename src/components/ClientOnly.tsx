/** Higher-order component to defer rendering to client.
 * This is especially useful in resolving React rehydration errors.
 * 
 * See: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
 */

import React from "react";

export default function ClientOnly({ children, ...delegated }: any) {
    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <div {...delegated}>
            {children}
        </div>
    );
}