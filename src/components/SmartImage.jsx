import React, { useState } from "react";

const SmartImage = ({
  itemId,
  alt,
  className = "",
  basePath = "/images/food/",
  fallbackImage = "/images/placeholder-food.jpg",
  ...props
}) => {
  const [currentFormat, setCurrentFormat] = useState(0);
  const formats = ["jpg", "jpeg", "png"];

  const getImageUrl = (format) => `${basePath}${itemId}.${format}`;

  const handleError = () => {
    // Try next format if current one fails
    if (currentFormat < formats.length - 1) {
      setCurrentFormat(currentFormat + 1);
    }
    // If all formats fail, show fallback image
  };

  const currentImageUrl =
    currentFormat < formats.length
      ? getImageUrl(formats[currentFormat])
      : fallbackImage;

  return (
    <img
      src={currentImageUrl}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default SmartImage;
