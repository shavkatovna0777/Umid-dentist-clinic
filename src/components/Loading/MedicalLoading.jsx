export const MedicalLoading = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-100 flex flex-col items-center justify-center min-h-screen z-50">
      <img
        src="https://medicalta.com/demo9/wp-content/themes/smilepure/assets/images/preloader.gif"
        alt="Loading..."
        className="w-[30%] h-auto"
      />
      <div className="text-lightBlue text-2xl font-medium mt-6">Loading...</div>
    </div>
  );
};
