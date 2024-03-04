'use server';

/**
 * 
 * 
 * @param formData 
 */
export default async function requestUsername(formData: FormData) {
    const username = formData.get('username');

    // if(canRequest()) {
        
    // }

    return username;
}
