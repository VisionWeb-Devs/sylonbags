"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const ProductFilterSidebar = ({ onFilterChange, isOpen, onClose }) => {
  const DEFAULT_PRICE = 50000;
  const MAX_SLIDER_VALUE = 50000;

  const [filters, setFilters] = useState({
    priceRange: DEFAULT_PRICE,
    selectedColors: [],
    selectedCategories: [],
  });

  const [tempFilters, setTempFilters] = useState({
    priceRange: DEFAULT_PRICE,
    selectedColors: [],
    selectedCategories: [],
  });

  const colors = [
    { name: "Black", value: "black" },
    { name: "White", value: "white" },
    { name: "Gray", value: "gray" },
    { name: "Red", value: "red" },
    { name: "Yellow", value: "yellow" },
  ];

  const categories = ["Hand Bags", "Backbacks", "Bags", "Wallets"];

  useEffect(() => {
    setFilters({
      priceRange: DEFAULT_PRICE,
      selectedColors: [],
      selectedCategories: [],
    });

    setTempFilters({
      priceRange: DEFAULT_PRICE,
      selectedColors: [],
      selectedCategories: [],
    });

    if (onFilterChange) {
      onFilterChange({
        priceRange: null,
        selectedColors: [],
        selectedCategories: [],
      });
    }
  }, []);

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  }, [filters, onFilterChange]);

  const handleColorSelect = (color) => {
    if (tempFilters.selectedColors.includes(color)) {
      setTempFilters({
        ...tempFilters,
        selectedColors: tempFilters.selectedColors.filter((c) => c !== color),
      });
    } else {
      setTempFilters({
        ...tempFilters,
        selectedColors: [...tempFilters.selectedColors, color],
      });
    }
  };

  const handleCategorySelect = (category) => {
    if (tempFilters.selectedCategories.includes(category)) {
      setTempFilters({
        ...tempFilters,
        selectedCategories: tempFilters.selectedCategories.filter(
          (c) => c !== category
        ),
      });
    } else {
      setTempFilters({
        ...tempFilters,
        selectedCategories: [...tempFilters.selectedCategories, category],
      });
    }
  };

  const handlePriceChange = (e) => {
    setTempFilters({
      ...tempFilters,
      priceRange: parseInt(e.target.value),
    });
  };

  const applyFilters = () => {
    setFilters(tempFilters);
    if (onClose && window.innerWidth < 768) {
      onClose();
    }
  };

  const resetFilters = () => {
    const resetValues = {
      priceRange: DEFAULT_PRICE,
      selectedColors: [],
      selectedCategories: [],
    };
    setTempFilters(resetValues);
    setFilters(resetValues);

    if (onFilterChange) {
      onFilterChange(resetValues);
    }
  };

  return (
    <div
      className={`bg-white rounded shadow p-4 w-full md:w-80 transition-all duration-300 ${
        isOpen
          ? "fixed inset-0 z-50 overflow-y-auto md:relative md:inset-auto"
          : "hidden md:block"
      }`}
    >
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h2 className="text-xl font-bold">Filters</h2>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100"
          aria-label="Close filters"
        >
          <X size={24} />
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Price Range</h3>
        <div className="mb-2">
          <input
            type="range"
            min="0"
            max={MAX_SLIDER_VALUE}
            value={tempFilters.priceRange}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>DA 0</span>
          <span>
            {tempFilters.priceRange >= MAX_SLIDER_VALUE
              ? "No maximum"
              : `DA ${tempFilters.priceRange.toLocaleString()}`}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Colors</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => handleColorSelect(color.value)}
              className={`w-10 h-10 rounded-full border-4 ${
                tempFilters.selectedColors.includes(color.value)
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
              style={{ backgroundColor: color.value }}
              aria-label={`Select ${color.name}`}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                id={category}
                checked={tempFilters.selectedCategories.includes(category)}
                onChange={() => handleCategorySelect(category)}
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={category} className="ml-2 text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <button
          onClick={applyFilters}
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-200"
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          className="w-full py-2 px-4 bg-gray-100 text-gray-700 font-medium rounded hover:bg-gray-200 transition duration-200"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
