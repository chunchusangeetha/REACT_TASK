 import React from "react";

export default function Home() {
  const cards = [
    { id: 1, title: "Card Title 1", description: "This is card 1." },
    { id: 2, title: "Card Title 2", description: "This is card 2." },
    { id: 3, title: "Card Title 3", description: "This is card 3." },
    { id: 4, title: "Card Title 4", description: "This is card 4." },
  ];

  return (
    <div className="space-y-8">
      <section className="bg-blue-200 p-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Example Header</h1>
        <button className="bg-green-400 text-white px-6 py-2 rounded hover:bg-green-500 transition">
          CTA Button
        </button>
      </section>

      <section className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-4 rounded shadow">
          <img src="https://via.placeholder.com/400x200" alt="Card" className="w-full rounded mb-4" />
          <h2 className="text-2xl font-bold mb-2">Card Title</h2>
          <p className="mb-4 text-gray-600">Detailed card description goes here.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            CTA Button
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cards.map((card) => (
            <div key={card.id} className="bg-white p-4 rounded shadow">
              <img src="https://via.placeholder.com/150" alt="Card" className="w-full rounded mb-2" />
              <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-gray-200 h-40 rounded flex items-center justify-center text-gray-600">
          Chart Placeholder
        </div>
        <div className="bg-gray-200 h-40 rounded flex items-center justify-center text-gray-600">
          Chart Placeholder
        </div>
      </section>
    </div>
  );
}
