import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(1, 1, 1, 0.867) 0%, rgba(0, 0, 0, 0.63) 100%), url(/signup.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}

export default layout;
