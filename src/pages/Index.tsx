
import { useState } from 'react';
import Header from '@/components/Header';
import PromoBanner from '@/components/PromoBanner';
import CategorySection from '@/components/CategorySection';
import ProductSection from '@/components/ProductSection';

const dealsProducts = [
  {
    id: 1,
    name: "Fresh Organic Strawberries",
    price: 3.99,
    originalPrice: 4.99,
    image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?q=80&w=200",
    weight: "250g"
  },
  {
    id: 2,
    name: "Premium Avocados",
    price: 5.49,
    originalPrice: 6.99,
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=200",
    weight: "2 pcs"
  },
  {
    id: 3,
    name: "Organic Almond Milk",
    price: 2.99,
    originalPrice: 3.49,
    image: "https://images.unsplash.com/photo-1576186726125-9476d56c3533?q=80&w=200",
    weight: "1 L"
  },
  {
    id: 4,
    name: "Whole Wheat Bread",
    price: 2.49,
    originalPrice: 2.99,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=200",
    weight: "450g"
  },
  {
    id: 5,
    name: "Fresh Chicken Breast",
    price: 7.99,
    originalPrice: 9.99,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=200",
    weight: "500g"
  }
];

const popularProducts = [
  {
    id: 6,
    name: "Fresh Bananas",
    price: 1.49,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=200",
    weight: "1 kg"
  },
  {
    id: 7,
    name: "Red Apples",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=200",
    weight: "4 pcs"
  },
  {
    id: 8,
    name: "Greek Yogurt",
    price: 4.29,
    image: "https://images.unsplash.com/photo-1610504440533-2ca0294d1fcf?q=80&w=200",
    weight: "500g"
  },
  {
    id: 9,
    name: "Organic Spinach",
    price: 2.79,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=200",
    weight: "200g"
  },
  {
    id: 10,
    name: "Whole Milk",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=200",
    weight: "1 L"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <PromoBanner />
        <CategorySection />
        <ProductSection title="Deals of the Day" products={dealsProducts} />
        <ProductSection title="Popular Items" products={popularProducts} />
      </main>
      <footer className="bg-white border-t py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="text-center md:text-left md:flex md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-zepto-700 mb-2">Zepto</h2>
              <p className="text-gray-500 text-sm">© 2023 All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="font-medium mb-2">Categories</h3>
                <ul className="text-gray-500 text-sm space-y-1">
                  <li>Groceries</li>
                  <li>Fresh Produce</li>
                  <li>Daily Needs</li>
                  <li>Personal Care</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Support</h3>
                <ul className="text-gray-500 text-sm space-y-1">
                  <li>Customer Service</li>
                  <li>FAQs</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
