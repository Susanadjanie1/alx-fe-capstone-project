// Image utility functions for handling multiple formats
export const getImageUrl = (itemId, basePath = "/images/food/") => {
  // Try different image formats in order of preference
  const formats = ["jpg", "jpeg", "png"];

  // Return the first format (jpg) as default
  // The components will handle fallback through onError
  return `${basePath}${itemId}.jpg`;
};

export const getImageUrlWithFallback = (itemId, basePath = "/images/food/") => {
  // This function can be used if you want to try multiple formats programmatically
  const formats = ["jpg", "jpeg", "png"];

  return {
    primary: `${basePath}${itemId}.jpg`,
    fallbacks: formats
      .slice(1)
      .map((format) => `${basePath}${itemId}.${format}`),
  };
};

// Function to check if an image exists (for future use)
export const checkImageExists = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    return false;
  }
};
