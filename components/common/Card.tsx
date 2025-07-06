import Card from "@/components/common/Card";
export default function HomePage() {
    return (
      <div className="p-4">
        <Card
          title="Modern Home"
          description="This is a stylish and modern home located downtown."
          image="/images/house.jpg"
        />
      </div>
    );
  }