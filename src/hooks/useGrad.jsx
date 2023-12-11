import { useEffect } from "preact/hooks";

export function useGrad() {
    useEffect(() => {
        const handleMouseMove = (event) => {
            if (event.target.classList.contains("grho")) {
                const { x, y } = event.target.getBoundingClientRect();
                const relativeX = event.clientX - x;
                const relativeY = event.clientY - y;

                event.target.style.setProperty("--x-cursor-position", relativeX);
                event.target.style.setProperty("--y-cursor-position", relativeY);
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
}
