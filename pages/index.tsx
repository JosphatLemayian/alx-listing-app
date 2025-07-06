import React from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listing App</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Modern Apartment"
          description="2 bed, 2 bath apartment with great city views."
          image="/assets/house1.jpg"
        >
          <div className="mt-4">
            <Button variant="primary">Book Now</Button>
          </div>
        </Card>

        <Card
          title="Cozy Cabin"
          description="Rustic cabin in the woods with hot tub and fireplace."
          image="/assets/house2.jpg"
        >
          <div className="mt-4">
            <Button variant="secondary">View Details</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}