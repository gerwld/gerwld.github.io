import { useEffect } from "preact/hooks";

export function useGrad() {
    useEffect(() => {
        const grads = document.querySelectorAll(".grho");
        function onMouseMove(event, item) {
            // get cursor coordinates to container (the link itself).
            const { x, y } = item.getBoundingClientRect();

            // get relative coordinates.
            const relativeX = event.clientX - x;
            const relativeY = event.clientY - y;

            // apply coordinates values to CSS variables.
            item.style.setProperty("--x-cursor-position", relativeX);
            item.style.setProperty("--y-cursor-position", relativeY);
        }

        grads.forEach(item => {
            item.addEventListener("mousemove", (e) => onMouseMove(e, item));
        })


        return () => {
            grads.forEach(item => {
                item.removeEventListener("mousemove", (e) => onMouseMove(e, item));
            })
        }
    }, [])
}