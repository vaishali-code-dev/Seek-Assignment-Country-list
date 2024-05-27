import { useTheme } from "../contexts/ThemeContext";

const Skeleton = () => {
    const { theme } = useTheme();
    return (
        <div className={`h-80 w-80 shadow rounded-md ${theme === "dark" ? "bg-dark-blue shimmer-dark" : "bg-white shimmer-light"}`} />
    )
}

export default Skeleton