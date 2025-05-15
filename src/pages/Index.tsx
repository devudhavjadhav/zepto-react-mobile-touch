
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, ChevronDown, Clock, ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BottomNav from '@/components/BottomNav';
import ProductCarousel from '@/components/ProductCarousel';
import CategoryGrid from '@/components/CategoryGrid';
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [activeTab, setActiveTab] = useState("grocery");

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Top header with back button, delivery info, and search */}
      <div className="bg-white py-4 px-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button className="mr-2">
              <ArrowRight className="h-6 w-6 rotate-180" />
            </button>
            <div>
              <div className="flex items-center">
                <h2 className="text-xl font-bold">Delivery in <span className="text-pink-500">14 Mins</span></h2>
                <span className="ml-1 text-blue-500">
                  <span className="inline-block bg-blue-500 h-3 w-3 rounded-full"></span>
                </span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <span>Tapodham Road, Tapodham, W...</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>
          
          <button className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="pb-16">
        {/* Café Banner */}
        <div className="mx-4 mt-4 mb-6">
          <div className="rounded-lg overflow-hidden bg-[#fff0c8]">
            <div className="p-4 flex justify-between">
              <div>
                <div className="text-2xl font-bold text-[#4f2c0d]">
                  <span className="text-sm">zepto</span><br />
                  <span className="text-4xl italic">café</span>
                </div>
                <Button className="mt-2 bg-[#4f2c0d] text-white rounded-full text-sm px-6">
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
        
        {/* "Deals of the day" banner */}
        <div className="mx-4 mb-6">
          <div className="rounded-lg overflow-hidden bg-[#fff0c8]">
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-red-600">
                  DEALS OF THE DAY
                </div>
                <div className="text-sm text-red-600">
                  Limited stock. Unlimited Cravings
                </div>
              </div>
              <Button className="mt-2 bg-red-600 text-white rounded-full px-6 h-10">
                Grab Now <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* "What's on your mind?" section */}
        <div className="px-4 mb-6">
          <h2 className="text-2xl font-bold mb-4">What's On Your Mind?</h2>
          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex space-x-4">
              {["Fruits", "Vegetables", "Dairy", "Meat", "Bakery", "Beverages", "Snacks", "Frozen", "Household"].map((item) => (
                <div key={item} className="flex-shrink-0 w-20">
                  <div className="h-20 w-20 bg-gray-200 rounded-full mb-2"></div>
                  <p className="text-center text-sm">{item}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Grocery & Kitchen Categories */}
        <div className="px-4 mb-6">
          <h2 className="text-2xl font-bold mb-4">Grocery & Kitchen</h2>
          <CategoryGrid />
        </div>

        {/* Newly Launched Products */}
        <div className="px-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">Newly Launched</h2>
              <span className="ml-2 text-pink-500">✨</span>
            </div>
            <Button variant="link" className="text-pink-500 font-semibold">
              See All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <ProductCarousel />
        </div>

        {/* Bestsellers Section */}
        <div className="px-4 mb-6">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold">Bestsellers</h2>
            <span className="ml-2 text-purple-500">★</span>
          </div>
          <ProductCarousel />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
