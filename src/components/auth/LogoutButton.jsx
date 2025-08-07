const LogoutButton = () => {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <button
      onClick={handleLogout}
      className="relative inline-flex items-center justify-center px-4 py-1.5 sm:px-6 sm:py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-indigo-500 text-sm sm:text-base"
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"></span>
      <span className="absolute bottom-0 right-0 block w-48 h-48 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-600 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span className="relative text-white flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Logout
      </span>
    </button>
  );
};

export default LogoutButton;