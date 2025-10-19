import React, { useState, useEffect } from "react";
import { Upload, Save, Plus, Edit, Trash2, Info } from "lucide-react";
import menuService from "../services/menuService";
import SmartImage from "./SmartImage";

const AdminPanel = () => {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    loadMenuData();
  }, []);

  const loadMenuData = async () => {
    try {
      setLoading(true);
      const data = await menuService.fetchMenu();
      setMenuData(data);
    } catch (error) {
      console.error("Error loading menu:", error);
      setMessage("Error loading menu data");
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUploadImage = async () => {
    if (!selectedFile || !selectedItem) {
      setMessage("Please select a file and menu item");
      return;
    }

    try {
      setLoading(true);

      // For local development, we'll just show the file info
      // In production, you would upload to your server
      const fileName = `${selectedItem.item_id}.jpg`;
      const filePath = `/images/food/${fileName}`;

      setMessage(`Image ready for upload: ${fileName} -> ${filePath}`);
      setSelectedFile(null);
      setSelectedItem(null);

      // Refresh menu data
      await loadMenuData();
    } catch (error) {
      setMessage(`Upload error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshMenu = async () => {
    try {
      setLoading(true);
      await loadMenuData();
      setMessage("Menu data refreshed successfully");
    } catch (error) {
      setMessage(`Refresh error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Masad Foods Admin Panel
          </h1>

          {message && (
            <div
              className={`p-4 rounded-lg mb-6 ${
                message.includes("success") ||
                message.includes("uploaded") ||
                message.includes("saved")
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message}
            </div>
          )}

          {/* Menu Management */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Menu Management</h2>
            <button
              onClick={handleRefreshMenu}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              Refresh Menu Data
            </button>
            <p className="text-sm text-gray-600 mt-2">
              Refresh menu data from local menu.json file
            </p>
          </div>

          {/* Image Setup Instructions */}
          <div className="mb-8 p-4 border border-blue-200 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              Image Setup Instructions
            </h2>
            <div className="text-sm text-blue-800 space-y-2">
              <p>
                <strong>1. Place your food images in:</strong>{" "}
                <code>public/images/food/</code>
              </p>
              <p>
                <strong>2. Name your images using item IDs:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>I0101.jpg - Fried Rice with Grilled Chicken</li>
                <li>I0102.jpg - Jollof Rice with Fried Chicken</li>
                <li>I0103.jpg - Jollof Rice with Fish</li>
                <li>I0104.jpg - Assorted Jollof Fried Rice</li>
                <li>...and so on for each menu item</li>
              </ul>
              <p>
                <strong>3. Supported formats:</strong> JPG, JPEG, PNG
              </p>
              <p>
                <strong>4. Image size:</strong> Recommended 400x300px or similar
                aspect ratio
              </p>
            </div>
          </div>

          {/* Image Upload Helper */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Image Upload Helper</h2>
            <p className="text-sm text-gray-600 mb-4">
              This tool helps you prepare images for upload. In production, you
              would implement actual file upload.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Menu Item
                </label>
                <select
                  value={selectedItem?.item_id || ""}
                  onChange={(e) => {
                    const itemId = e.target.value;
                    if (itemId) {
                      const item = menuData?.categories
                        ?.flatMap((cat) => cat.items)
                        ?.find((item) => item.item_id === itemId);
                      setSelectedItem(item);
                    } else {
                      setSelectedItem(null);
                    }
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Choose a menu item...</option>
                  {menuData?.categories?.map((category) =>
                    category.items.map((item) => (
                      <option key={item.item_id} value={item.item_id}>
                        {item.name} ({category.name})
                      </option>
                    ))
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Image File
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {selectedFile && selectedItem && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Selected Item:</strong> {selectedItem.name}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Selected File:</strong> {selectedFile.name}
                </p>
                <button
                  onClick={handleUploadImage}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Upload className="w-5 h-5" />
                  Upload Image
                </button>
              </div>
            )}
          </div>

          {/* Menu Items Display */}
          {menuData && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Menu Items</h2>

              {menuData.categories.map((category) => (
                <div
                  key={category.category_id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    {category.name}
                  </h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item) => (
                      <div
                        key={item.item_id}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="mb-3">
                          <SmartImage
                            itemId={item.item_id}
                            alt={item.name}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>

                        <h4 className="font-medium text-gray-800 mb-2">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.description}
                        </p>
                        <p className="text-lg font-bold text-red-600 mb-3">
                          GHS {item.price.toFixed(2)}
                        </p>

                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedItem(item);
                              setSelectedFile(null);
                            }}
                            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors flex items-center gap-1"
                          >
                            <Edit className="w-4 h-4" />
                            Select for Upload
                          </button>

                          <div className="text-xs text-gray-500 mt-2">
                            Expected: {item.item_id}.jpg
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
