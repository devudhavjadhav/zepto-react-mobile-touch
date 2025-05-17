
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SheetContent } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

interface CartSidebarProps {
  onClose: () => void;
}

const CartSidebar = ({ onClose }: CartSidebarProps) => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, cartTotal } = useCart();

  const handleCheckout = () => {
    navigate('/checkout');
    onClose();
  };

  const handleStartShopping = () => {
    navigate('/');
    onClose();
  };

  return (
    <SheetContent className="w-full sm:max-w-md p-0 overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b sticky top-0 bg-white z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Your Cart ({cartItems.length})</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto p-4">
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 py-3 border-b">
                  <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
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
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500 text-sm">
                      ${item.price.toFixed(2)} each
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-md">
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
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-zepto-700 h-8"
                        onClick={() => updateQuantity(item.id, 'remove')}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-1">Your cart is empty</h3>
              <p className="text-gray-500 text-center mb-6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button className="bg-zepto-700 hover:bg-zepto-800" onClick={handleStartShopping}>
                Start Shopping
              </Button>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-4 bg-white sticky bottom-0">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Delivery</span>
                <span className="font-medium">$3.99</span>
              </div>
              <div className="flex items-center justify-between text-lg font-medium">
                <span>Total</span>
                <span>${(cartTotal + 3.99).toFixed(2)}</span>
              </div>
              <Button className="w-full bg-zepto-700 hover:bg-zepto-800" onClick={handleCheckout}>
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </SheetContent>
  );
};

export default CartSidebar;
