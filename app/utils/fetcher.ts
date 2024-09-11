// export const fetcher = async (url: string, method: string = 'GET', body: any = null) => {
//   const options: RequestInit = {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   if (body) {
//     options.body = JSON.stringify(body);
//   }

//   const response = await fetch(url, options);
//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.message || 'Something went wrong');
//   }
//   return response.json();
// };

export const fetcher = async (url: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // If there's no content (for DELETE requests for example), return null
    if (response.status === 204) {
      return null;
    }

    // Parse the response as JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
