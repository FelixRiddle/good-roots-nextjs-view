'use server';

let likeCount = 0;

/**
 * Increment like
 * 
 * @returns 
 */
export default async function incrementLike() {
    likeCount++;
    return likeCount;
}
