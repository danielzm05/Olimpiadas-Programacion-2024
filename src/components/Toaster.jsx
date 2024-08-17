import { Toaster } from "react-hot-toast";

export function ToasterContainer() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // default options
        className: "",
        duration: 3000,
        style: {
          background: "white",
          color: "#9b9b9b",
        },

        success: {
          style: {
            border: "1px solid #b8b8b8",
          },
          theme: {
            primary: "green",
            secondary: "white",
          },
        },
      }}
    />
  );
}
