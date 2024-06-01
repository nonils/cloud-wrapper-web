import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Boost your productivity.
          <br />
          Start using our app today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6"></div>
      </div>
    </div>
  );
};
export { HomePage };
