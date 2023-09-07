const Loader = () => {
  const getAnimateClassName = (index: number): string => {
    switch (index) {
      case 0:
        return "animate-bounce";
      case 1:
        return "animate-bounce200";
      case 2:
        return "animate-bounce400";
      default:
        return "";
    }
  };

  return (
    <div
      className="flex items-center justify-center gap-2 pt-4"
      data-testid="loader-container"
    >
      {Array.from({ length: 3 }).map((_, index: number) => (
        <div
          key={index}
          className={`flex h-6 w-6 rounded-full bg-white ${getAnimateClassName(
            index,
          )}`}
        ></div>
      ))}
    </div>
  );
};

export default Loader;
