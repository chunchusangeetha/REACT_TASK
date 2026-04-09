import React from "react";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Data Engineering",
      description:
        "Building efficient data pipelines, integrating diverse data sources, and ensuring data quality for robust analytics and reporting. Our team leverages modern tools to automate and optimize your data workflows.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59ZxUXmqfcngSl3qC5DKUKW2oA0rTYWlalg&s",
      cta: "Explore Data Engineering",
      ctaLink: "#data-engineering",
    },
    {
      id: 2,
      title: "Cloud Solutions",
      description:
        "Designing scalable, secure, and cost-effective cloud architectures tailored to your business needs. We help you migrate, manage, and optimize your cloud infrastructure for maximum efficiency.",
      image:
        "https://media.istockphoto.com/id/1254718662/photo/cloud-computing-technology-and-online-data-storage-for-business-network-concept.jpg?s=612x612&w=0&k=20&c=9qKGNWQ-bPlYF1bO2nLebRNGbfHJcw3LPgeUq7tu2S0=",
      cta: "See Cloud Solutions",
      ctaLink: "#cloud-solutions",
    },
    {
      id: 3,
      title: "Business Intelligence",
      description:
        "Transforming raw data into actionable insights with interactive dashboards and advanced analytics. Empower your teams to make data-driven decisions with our BI expertise.",
      image:
        "https://cdn.corporatefinanceinstitute.com/assets/business-intelligence.jpeg",
      cta: "Discover BI Services",
      ctaLink: "#business-intelligence",
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      description:
        "Implementing intelligent systems that automate processes, predict trends, and personalize experiences. From model development to deployment, we bring AI to your business.",
      image: "https://www.beyondkey.com/BkNew/images/GenAI/banner.jpg",
      cta: "Learn About AI & ML",
      ctaLink: "#ai-ml",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="bg-violet-400 p-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Data Artisans</h1>
        <button className="bg-green-400 text-white px-6 py-2 rounded hover:bg-green-500 transition">
          Get Started
        </button>
      </section>

      <section className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow flex flex-col justify-center">
          <img
          src="https://static.vecteezy.com/system/resources/thumbnails/037/999/169/small/ai-generated-workspace-technology-highlight-the-integration-of-technology-in-the-office-background-image-generative-ai-photo.jpg"
            alt="Key Service"
            className="w-full rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Our Key Service</h2>
          <p className="mb-4 text-gray-600">
            We specialize in crafting custom solutions that empower your
            business with cutting-edge technology. From data engineering to AI,
            our experts deliver end-to-end services for your digital
            transformation journey.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

        {/* Right half: 4 cards in 2x2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-4 rounded shadow flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
              <p className="text-gray-600 mb-2">{service.description}</p>
              <a
                href={service.ctaLink}
                className="mt-auto bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition text-center"
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Data Usage Chart
          </h3>
          <img
            src="https://img.freepik.com/premium-vector/bar-chart-with-reflection-blue-background-business-growth-performance-financial-statistics_120819-716.jpg"
            alt="Data Usage Chart"
            className="w-full h-40 object-cover rounded"
          />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Customer Growth Chart
          </h3>
          <img
            src="https://img.freepik.com/premium-photo/3d-financial-growth-blue-money-business-graph-investment-market-profit-chart-with-currency-repo_795097-1947.jpg"
            alt="Customer Growth Chart"
            className="w-full h-40 object-cover rounded"
          />
        </div>
      </section>
    </div>
  );
}
