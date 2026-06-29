export default function Button({ text, onClick, variant = "primary" }) {
    const styles =
      variant === "danger"
        ? "bg-red-500 hover:bg-red-600"
        : "bg-[#4F86FF] hover:bg-[#3B73F0]";
  
    return (
      <button
        onClick={onClick}
        className={`px-5 py-2 rounded-lg text-white font-medium 
                    transition duration-300 hover:scale-[1.02] 
                    active:scale-95 shadow-sm ${styles}`}
      >
        {text}
      </button>
    );
  }