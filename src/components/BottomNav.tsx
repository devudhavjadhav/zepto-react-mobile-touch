
import React from 'react';
import { Home, Grid, Coffee, ShoppingCart, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-gray-700 py-2 border-t z-10">
      <div className="flex justify-around items-center">
        <NavItem icon={<Home />} label="Home" isActive />
        <NavItem icon={<Grid />} label="Categories" />
        <NavItem icon={<Search />} label="Search" />
        <NavItem 
          icon={
            <div className="relative">
              <Coffee />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1 rounded">NEW</div>
            </div>
          } 
          label="Cafe" 
        />
        <NavItem 
          icon={
            <div className="relative">
              <ShoppingCart />
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] px-1 rounded-full h-4 w-4 flex items-center justify-center">3</div>
            </div>
          } 
          label="Cart" 
        />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem = ({ icon, label, isActive }: NavItemProps) => (
  <div className="flex flex-col items-center">
    <div className={cn("mb-1", isActive ? "text-pink-500" : "text-gray-600")}>{icon}</div>
    <span className={cn("text-xs", isActive ? "text-pink-500 font-medium" : "text-gray-600")}>{label}</span>
  </div>
);

export default BottomNav;
