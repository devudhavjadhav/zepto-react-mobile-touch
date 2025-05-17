
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, ShoppingBag } from "lucide-react";
import BottomNav from '@/components/BottomNav';
import { ScrollArea } from "@/components/ui/scroll-area";
import LocationSelector from '@/components/LocationSelector';
import { getCurrentLocation, getShortAddress } from '@/services/locationService';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { useIsMobile } from '@/hooks/use-mobile';
import ProductCarousel from '@/components/ProductCarousel';
import CategoryGrid from '@/components/CategoryGrid';

const Index = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(getCurrentLocation().address);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleLocationSelect = (address: string) => {
    setCurrentAddress(address);
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] pb-16 md:pb-0">
      <Header />
      
      {/* Main content */}
      <div className="container mx-auto px-4 md:py-8">
        {/* Hero section */}
        <div className="bg-[#1E1E4E] rounded-lg p-4 md:p-8 md:flex md:items-center md:justify-between mb-6">
          <div className="md:w-1/2">
            <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">Groceries delivered in minutes</h1>
            <p className="text-white/80 mb-4">Order from our wide selection of fresh produce, essentials, and more</p>
            <Button 
              className="bg-zepto-700 hover:bg-zepto-800 text-white"
              size={isMobile ? "default" : "lg"}
              onClick={() => navigate('/categories')}
            >
              Shop Now
            </Button>
          </div>
          <div className="hidden md:block md:w-1/3">
            <img 
              src="/lovable-uploads/e89205e2-034e-400c-9635-d5d535fba3b6.png"
              alt="Zepto Delivery"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Category Icons */}
        <div className="bg-white rounded-lg p-4 mb-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">Shop by Category</h2>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
            {[
              { icon: "🛒", label: "All" },
              { icon: "🏷️", label: "80% Off" },
              { icon: "☕", label: "Cafe", badge: "DEAL" },
              { icon: "🎧", label: "Electronics" },
              { icon: "💊", label: "Pharma" },
              { icon: "🥕", label: "Veggies" },
              { icon: "🍎", label: "Fruits" },
              { icon: "🍞", label: "Bakery" },
              { icon: "🥛", label: "Dairy" },
              { icon: "🧹", label: "Clean" }
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center cursor-pointer">
                <div className="w-12 h-12 bg-gray-100 rounded-full mb-1 flex items-center justify-center text-xl relative">
                  {item.icon}
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] px-1 rounded">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-center text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Café Banner */}
        <div className="mb-6">
          <div className="rounded-lg overflow-hidden bg-[#fff0c8]">
            <div className="p-4 md:p-6 flex justify-between">
              <div>
                <div className="text-2xl font-bold text-[#4f2c0d]">
                  <span className="text-sm">zepto</span><br />
                  <span className="text-4xl italic">café</span>
                </div>
                <Button 
                  className="mt-2 bg-[#4f2c0d] text-white rounded-full text-sm px-6"
                  onClick={() => navigate('/cafe')}
                >
                  EXPLORE →
                </Button>
              </div>
              <div className="flex-1 relative">
                <div className="absolute right-0 top-0 bg-red-600 text-white px-3 py-1 rounded-md">
                  <div className="font-bold text-xl">FOOD FROM</div>
                  <div className="text-3xl font-bold">₹99</div>
                  <div className="text-xs mt-1 text-center">SELLING FAST!!</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* "What's on your mind?" section */}
        <div className="bg-white rounded-lg p-4 mb-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">What's On Your Mind?</h2>
          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex space-x-4">
              {["Fruits", "Vegetables", "Dairy", "Meat", "Bakery", "Beverages", "Snacks", "Frozen", "Household"].map((item) => (
                <div key={item} className="flex-shrink-0 w-20 cursor-pointer">
                  <div className="h-20 w-20 bg-gray-200 rounded-full mb-2"></div>
                  <p className="text-center text-sm">{item}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Grocery & Kitchen Categories */}
        <div className="bg-white rounded-lg p-4 mb-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">Grocery & Kitchen</h2>
          <CategoryGrid />
        </div>

        {/* Newly Launched Products */}
        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <h2 className="text-lg md:text-xl font-bold">Newly Launched</h2>
              <span className="ml-2 text-pink-500">✨</span>
            </div>
            <Button variant="link" className="text-pink-500 font-semibold">
              See All
            </Button>
          </div>
          <ProductCarousel />
        </div>

        {/* Bestsellers Section */}
        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-lg md:text-xl font-bold">Bestsellers</h2>
            <span className="ml-2 text-purple-500">★</span>
          </div>
          <ProductCarousel />
        </div>
      </div>

      {/* Location Selector */}
      <LocationSelector 
        open={isLocationOpen} 
        onClose={() => setIsLocationOpen(false)}
        onLocationSelect={handleLocationSelect}
      />

      {/* Bottom Navigation - only on mobile */}
      <BottomNav />
    </div>
  );
};

export default Index;
