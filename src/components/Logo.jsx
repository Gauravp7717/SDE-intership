const Logo = () => {
  const img = "/Artboard.png";

  return (
    <div className="p-2 mx-5 border-gray-200 flex items-center justify-center">
      <img
        src={img}
        alt="Transactly Logo"
        className="w-28 h-auto object-contain"
      />
    </div>
  );
};

export default Logo;
