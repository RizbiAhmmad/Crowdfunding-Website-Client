import React from 'react';
import { Lightbulb, PenTool, Send } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Lightbulb className="w-8 h-8 text-teal-500" />,
      title: "Create Campaign",
      desc: "Sign up and start your campaign by providing necessary details.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-teal-500" />,
      title: "Share & Promote",
      desc: "Spread the word on social media and through your network.",
    },
    {
      icon: <Send className="w-8 h-8 text-teal-500" />,
      title: "Receive Donations",
      desc: "Start receiving donations and manage your campaign easily.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8 text-teal-600">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
