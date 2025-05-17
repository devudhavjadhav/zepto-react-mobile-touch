
import React from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Mobile Header */}
      {isMobile && (
        <div className="bg-white py-4 px-4 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center">
            <button 
              className="mr-3" 
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-bold">Profile</h2>
          </div>
        </div>
      )}
      
      {/* Desktop Header */}
      {!isMobile && <Header />}
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6 max-w-lg mx-auto">
          <div className="flex flex-col items-center mb-6">
            <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <User className="h-12 w-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold">My Profile</h1>
            <p className="text-gray-500">Manage your account</p>
          </div>
          
          <div className="space-y-4">
            <div className="border-t pt-4">
              <h2 className="font-medium text-lg mb-2">Personal Information</h2>
              <p className="text-gray-500 mb-1">Name: Guest User</p>
              <p className="text-gray-500">Email: guest@example.com</p>
            </div>
            
            <div className="border-t pt-4">
              <h2 className="font-medium text-lg mb-2">Saved Addresses</h2>
              <p className="text-gray-500">No addresses saved</p>
              <Button className="mt-2 bg-zepto-700">Add New Address</Button>
            </div>
            
            <div className="border-t pt-4">
              <Button variant="outline" className="w-full">Sign Out</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Profile;
