const Introduction = () => {
  return (
    <div className="mx-auto flex h-full w-11/12 flex-col justify-center gap-4 md:gap-16">
      <p className="font-Tektur text-center text-5xl font-semibold md:text-7xl">
        Welcome to Stars Wars Universe!
      </p>

      <p className="font-SedgwickAveDisplay mx-auto max-w-2xl text-center tracking-widest md:text-3xl">
        Are you ready to embark on an intergalactic journey to explore the
        iconic Star Wars universe?
      </p>

      <button className="font-Tektur self-center rounded-md bg-pink-900 px-16 py-4 text-xl text-white">
        Get started
      </button>
    </div>
  );
};

export default Introduction;
