
import React from 'react';
import { ArrowLeft, Plus, Minus, Clock, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomNav from '@/components/BottomNav';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, cartTotal } = useCart();
  const { toast } = useToast();
  
  const deliveryFee = cartItems.length > 0 ? 15 : 0;
  const totalAmount = cartTotal + deliveryFee;
  
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add items to your cart before checkout",
        variant: "destructive"
      });
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Header */}
      <div className="bg-white py-4 px-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center">
          <button 
            className="mr-3" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h2 className="text-xl font-bold">Cart</h2>
          <span className="text-gray-600 ml-2">({cartItems.length} items)</span>
        </div>
      </div>

      {cartItems.length > 0 ? (
        <>
          {/* Delivery Time */}
          <div className="bg-white mt-2 p-4 flex items-center">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold">Delivery in 12-15 mins</h3>
              <p className="text-sm text-gray-500">Delivering to: {getCurrentLocation().address}</p>
            </div>
          </div>

          {/* Cart Items */}
          <div className="mt-2 bg-white p-4">
            <h3 className="font-bold mb-4">Cart Items</h3>
            
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex border-b pb-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300"; // Fallback image
                        target.onerror = null; // Prevent infinite loops
                      }}
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.servingInfo}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="font-bold">₹{item.price}</div>
                      <div className="flex items-center border rounded">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.id, 'decrease')}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.id, 'increase')}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 text-red-500 p-0 h-8"
                      onClick={() => updateQuantity(item.id, 'remove')}
                    >
                      <Trash2 className="h-4 w-4 mr-1" /> Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bill Details */}
          <div className="mt-2 bg-white p-4">
            <h3 className="font-bold mb-4">Bill Details</h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Item Total</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                <span>To Pay</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh] bg-white mt-2 p-6">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-medium mb-1">Your cart is empty</h3>
          <p className="text-gray-500 text-center mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button 
            className="bg-zepto-700 hover:bg-zepto-800" 
            onClick={() => navigate('/')}
          >
            Start Shopping
          </Button>
        </div>
      )}

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 bg-white p-4 border-t">
          <Button 
            className="w-full bg-purple-700 text-white" 
            onClick={handleCheckout}
          >
            Proceed to Checkout (₹{totalAmount.toFixed(2)})
          </Button>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

function getCurrentLocation() {
  // This is a placeholder. In a real app, you would get this from your location service
  return {
    address: "Tapodham Road, Tapodham, Varanasi",
    coordinates: { latitude: 25.3176, longitude: 82.9739 }
  };
}

// Adding the missing ShoppingBag icon
import { ShoppingBag } from "lucide-react";

export default Cart;
