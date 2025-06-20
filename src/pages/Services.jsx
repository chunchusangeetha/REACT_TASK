import React from "react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Data Engineering",
      description:
        "Building efficient data pipelines, integrating diverse data sources, and ensuring data quality for robust analytics and reporting. Our team leverages modern tools to automate and optimize your data workflows.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59ZxUXmqfcngSl3qC5DKUKW2oA0rTYWlalg&s",
    },
    {
      id: 2,
      title: "Cloud Solutions",
      description:
        "Designing scalable, secure, and cost-effective cloud architectures tailored to your business needs. We help you migrate, manage, and optimize your cloud infrastructure for maximum efficiency.",
      image:
        "https://media.istockphoto.com/id/1254718662/photo/cloud-computing-technology-and-online-data-storage-for-business-network-concept.jpg?s=612x612&w=0&k=20&c=9qKGNWQ-bPlYF1bO2nLebRNGbfHJcw3LPgeUq7tu2S0=",
    },
    {
      id: 3,
      title: "Business Intelligence",
      description:
        "Transforming raw data into actionable insights with interactive dashboards and advanced analytics. Empower your teams to make data-driven decisions with our BI expertise.",
      image:
        "https://cdn.corporatefinanceinstitute.com/assets/business-intelligence.jpeg",
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      description:
        "Implementing intelligent systems that automate processes, predict trends, and personalize experiences. From model development to deployment, we bring AI to your business.",
      image: "https://www.beyondkey.com/BkNew/images/GenAI/banner.jpg",
    },
    {
      id: 5,
      title: "DevOps & Automation",
      description:
        "Streamlining software delivery and infrastructure management with CI/CD pipelines, automated testing, and monitoring. We help you achieve faster releases and higher reliability.",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240108113020/DevOps-Automation.png",
    },
    {
      id: 6,
      title: "Cybersecurity Services",
      description:
        "Protecting your digital assets with comprehensive security assessments, threat monitoring, and incident response. We ensure your business stays resilient against evolving cyber threats.",
      image:
        "https://www.cybersecurityservices.com/wp-content/uploads/2024/03/Cybersecurity-scaled.jpeg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">
              {service.title}
            </h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
