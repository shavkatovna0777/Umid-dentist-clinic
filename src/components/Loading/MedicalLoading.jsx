export const MedicalLoading = () => {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-100 flex flex-col items-center justify-center min-h-screen z-50">
        <svg
          className="w-[800px] h-[400px]"
          viewBox="0 0 600 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="animate-pulse stroke-2"
            d="M0,50 L30,50 L45,50 L60,20 L75,80 L90,50 L105,50 L120,50 L600,50"
            stroke="#32abf3"
            strokeWidth="12"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
              animation: "dash 1.5s linear infinite",
            }}
          />
        </svg>
        <div className="text-lightBlue text-2xl font-medium mt-6">Loading...</div>
        <style>{`
          @keyframes dash {
            from {
              stroke-dashoffset: 1000;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </div>
    );
  };