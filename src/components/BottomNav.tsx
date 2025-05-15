
import React from 'react';
import { Home, Grid, Coffee, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-black py-2 border-t">
      <div className="flex justify-around items-center">
        <NavItem icon={<div className="h-8 w-8 rounded-md bg-zepto-700 flex items-center justify-center text-white font-bold">Z</div>} label="Zepto" isActive />
        <NavItem icon={<Grid />} label="Categories" />
        <NavItem 
          icon={
            <div className="relative">
              <Coffee />
              <div className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1 rounded">DEAL</div>
            </div>
          } 
          label="Cafe" 
        />
        <NavItem icon={<ShoppingCart />} label="Cart" />
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
    <div className={cn("mb-1", isActive && "text-zepto-700")}>{icon}</div>
    <span className={cn("text-xs", isActive && "text-zepto-700 font-medium")}>{label}</span>
  </div>
);

export default BottomNav;
