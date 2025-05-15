
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, ChevronDown, ShoppingBag, Package, Headphones, Pill } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import BottomNav from '@/components/BottomNav';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-zeptoBg text-white">
      {/* Top section with logo and delivery options */}
      <div className="container mx-auto px-4 pt-4 pb-2">
        {/* Zepto/Super Saver tabs */}
        <div className="flex rounded-full bg-white p-1 mb-4">
          <div className="w-1/2 bg-zepto-700 text-white rounded-full py-2 text-center font-semibold">
            zepto
          </div>
          <div className="w-1/2 text-zeptoGreen rounded-full py-2 text-center font-semibold">
            zepto <span className="italic">Super Saver</span>
          </div>
        </div>
        
        {/* Address & Delivery section */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <h2 className="text-lg font-bold">Delivery in 14 Mins</h2>
              <span className="ml-1 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="animate-pulse">●</span>
              </span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <span>Your Address</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input 
            className="w-full bg-white text-black rounded-lg pl-10" 
            placeholder='Search for "kurkure"'
          />
        </div>
      </div>
      
      {/* Category icons */}
      <div className="mb-2 px-4">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-1">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <span className="text-xs text-center">All</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-1">
              <div className="text-xs font-bold">80%</div>
            </div>
            <span className="text-xs text-center">Off</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-1">
              <Package className="h-6 w-6" />
            </div>
            <span className="text-xs text-center">Cafe</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-1">
              <Headphones className="h-6 w-6" />
            </div>
            <span className="text-xs text-center">Electronics</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-1">
              <Pill className="h-6 w-6" />
            </div>
            <span className="text-xs text-center">Pharmacy</span>
          </div>
        </div>
      </div>

      {/* Promo banners */}
      <div className="px-4 space-y-4">
        {/* First banner - Paan Corner */}
        <div className="rounded-lg overflow-hidden bg-zepto-600 p-4">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-1">Paan Corner</h2>
            <p className="text-sm mb-4">Get smoking accessories, fresheners & more in 10 mins this IPL season with Zepto!</p>
            <Button className="bg-white text-black hover:bg-gray-100 w-32 rounded-md">
              Order Now
            </Button>
          </div>
        </div>

        {/* Second banner - Lowest Prices */}
        <div className="rounded-lg overflow-hidden bg-green-900 p-4 text-center">
          <h2 className="text-3xl font-bold uppercase mb-1">Lowest Prices Ever!</h2>
          <p className="text-sm uppercase">Only on <span className="font-bold">Daily good</span> Products</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
