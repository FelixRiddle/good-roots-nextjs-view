import incrementLike from './actions';
import { useState, useTransition } from 'react';

function LikeButton() {
    const [isPending, startTransition] = useTransition();
    const [likeCount, setLikeCount] = useState(0);
    
    const onClick = () => {
        startTransition(async () => {
            const currentCount = await incrementLike();
            
            setLikeCount(currentCount);
        });
    };
    
    return (
        <>
            <p>Total likes: {likeCount}</p>
            <button onClick={onClick} disabled={isPending}>Like</button>
        </>
    );
}
