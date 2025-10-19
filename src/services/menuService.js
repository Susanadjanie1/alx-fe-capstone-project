// Menu Service for fetching menu data and handling local images
class MenuService {
  constructor() {
    // Local image base path
    this.imageBasePath = "/images/food/";
    this.placeholderImage = "/images/placeholder-food.jpg";
  }

  // Fetch menu data from local JSON file
  async fetchMenu() {
    try {
      const response = await fetch("/menu.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const menuData = await response.json();

      // Enhance menu items with local images
      const enhancedMenuData = await this.enhanceMenuWithImages(menuData);

      return enhancedMenuData;
    } catch (error) {
      console.error("Error fetching menu:", error);
      throw error;
    }
  }

  // Get image URL for menu item
  getImageUrl(itemId) {
    // Try different image formats in order of preference
    const formats = ["jpg", "jpeg", "png"];

    // For now, return the first format (jpg) and let the onError handler
    // in the components handle fallback to other formats
    return `${this.imageBasePath}${itemId}.jpg`;
  }

  // Enhance menu items with local images
  async enhanceMenuWithImages(menuData) {
    const enhancedCategories = menuData.categories.map((category) => {
      const enhancedItems = category.items.map((item) => {
        // Get image URL for this menu item using item_id
        const imageUrl = this.getImageUrl(item.item_id);

        return {
          ...item,
          image: imageUrl, // This will be a local image path
        };
      });

      return {
        ...category,
        items: enhancedItems,
      };
    });

    return {
      ...menuData,
      categories: enhancedCategories,
    };
  }

  // Get featured items across all categories
  getFeaturedItems(menuData) {
    const featuredItems = [];

    menuData.categories.forEach((category) => {
      category.items.forEach((item) => {
        if (item.is_featured) {
          featuredItems.push({
            ...item,
            category_name: category.name,
          });
        }
      });
    });

    return featuredItems;
  }

  // Get items by category
  getItemsByCategory(menuData, categoryId) {
    const category = menuData.categories.find(
      (cat) => cat.category_id === categoryId
    );
    return category ? category.items : [];
  }

  // Get all items flattened
  getAllItems(menuData) {
    const allItems = [];

    menuData.categories.forEach((category) => {
      category.items.forEach((item) => {
        allItems.push({
          ...item,
          category_name: category.name,
          category_id: category.category_id,
        });
      });
    });

    return allItems;
  }

  // Get all menu items with their images
  async getAllMenuItems() {
    try {
      const menuData = await this.fetchMenu();
      return this.getAllItems(menuData);
    } catch (error) {
      console.error("Error getting all menu items:", error);
      throw error;
    }
  }

  // Mock order placement
  async placeOrder(orderData) {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful order response
      const orderId = `ORDER-${Date.now()}`;

      return {
        success: true,
        orderId: orderId,
        message: "Order placed successfully!",
        estimatedDelivery: "45 minutes",
        orderData: orderData,
      };
    } catch (error) {
      console.error("Error placing order:", error);
      throw error;
    }
  }
}

// Create and export singleton instance
const menuService = new MenuService();
export default menuService;
